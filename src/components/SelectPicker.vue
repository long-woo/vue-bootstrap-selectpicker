<template>
  <div class="dropdown bootstrap-select" :class="{ 'dropup': upShow, 'show': isOpen, 'disabled': ($attrs.disabled || $attrs.disabled === '') }">
    <div class="dropdown-toggle">
      <input class="form-control" type="text" :readonly="!search" :value="value" v-bind="$attrs" v-on="listeners">
    </div>
    <div class="dropdown-menu" ref="dropdownItemBox" :class="{ 'visibility': !dropdownRect.height }">
      <a class="dropdown-item" ref="dropdownItem" href="javascript:;" :class="{ 'disabled': item.disabled,
                  'checked':  multiple && (chooseText.indexOf(item.text || item) > -1),
                  'active':  (activeIndex === index) && !item.disabled }" v-for="(item, index) in filterData" :key="index" @click="chooseItem(item, index)">{{ item.text || item }}</a>
      <a class="dropdown-item disabled" v-show="!filterData.length">{{emptyText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPicker',
  data () {
    return {
      isOpen: this.isDropdown,
      filterData: this.dropdownData,
      chooseText: this.value,
      chooseData: [],
      activeIndex: -1,
      arrowKey: '',
      dropdownRect: {},
      upShow: false
    }
  },
  inheritAttrs: false,
  props: {
    // 是否展开列表
    isDropdown: {
      type: Boolean,
      default: false
    },

    // 多选
    multiple: {
      type: Boolean,
      default: false
    },

    // 空数据显示的消息
    emptyText: {
      type: String,
      default: '没有匹配数据'
    },

    // 搜索
    search: {
      type: Boolean,
      default: false
    },

    // 可视数，超过将显示滚动条
    size: {
      type: Number,
      default: 0
    },

    // 数据源
    dropdownData: Array,

    // 默认值，支持Array和String
    value: [Array, String]
  },
  computed: {
    // 如果配置项全部为`disabled`，禁止方向键选择
    disabledArrow () {
      const disabledCount = this.filterData.reduce((prevValue, currentValue) => {
        if (currentValue.disabled) prevValue++

        return prevValue
      }, 0)

      return disabledCount === this.filterData.length
    },

    // 注册事件
    listeners () {
      return {
        ...this.$listeners,
        click: event => {
          if (!this.search) {
            this.toggleDropdown()
          }
        },

        focus: event => {
          // 如果启用搜索，则一直显示
          if (this.search) {
            this.showDropdown()
          }
        },

        input: event => {
          const value = event.target.value

          this._dropdownInput(value)
        },

        keydown: event => {
          switch (event.keyCode) {
            case 13: // enter
              const index = this.activeIndex < 0 ? 0 : this.activeIndex
              const item = this.filterData[index] || {}

              this.chooseItem(item, index)
              event.preventDefault()
              break
            case 38: // up
            case 40: // down
              const keyName = event.keyCode === 38 ? 'UP' : 'DOWN'

              this._selectArrow(keyName)
              event.preventDefault()
              break
          }
        }
      }
    }
  },
  // watch: {
  //   chooseData (value) {
  //     this.chooseText = value.reduce((prevValue, currentValue) => {
  //       prevValue.push(currentValue.text || currentValue)

  //       return prevValue
  //     }, [])
  //   }
  // },
  mounted () {
    this.initSelect()
  },
  destroyed () {
    // 组件销毁时，移除监听的点击事件
    document.removeEventListener('click', this.hideDropdown, false)
  },
  methods: {
    // 初始化
    initSelect () {
      const dropdownRect = this.$refs.dropdownItemBox.getBoundingClientRect()
      const dropdownItemHeight = this.$refs.dropdownItemBox.firstChild.offsetHeight
      const fontSize = parseFloat(window.getComputedStyle(document.body, null).fontSize)

      // 如果设置了`size`（可视数），将修改dropdown的可视高度
      if (this.size) {
        const size = this.size > this.filterData.length ? this.filterData.length : this.size
        const height = (dropdownItemHeight * size + fontSize + 2) / fontSize

        this.$refs.dropdownItemBox.style.height = `${height}rem`
      }

      this.upShow = (dropdownRect.bottom + window.scrollY) > document.body.clientHeight
      this.dropdownRect = dropdownRect

      // 监听点击事件，点击组件外，则隐藏下拉
      document.addEventListener('click', this.hideDropdown, false)
    },

    // 点击dropdown元素后，显示/隐藏选项列表
    toggleDropdown () {
      this.isOpen = !this.isOpen

      if (!this.isOpen) this.activeIndex = -1
    },

    // 显示选项列表
    showDropdown () {
      this.isOpen = true
    },

    // 点击元素外隐藏
    hideDropdown (event) {
      if (!this.$el.contains(event.target)) {
        this.activeIndex = -1
        this.isOpen = false
      }
    },

    // 选择项
    chooseItem (item, itemIndex) {
      if (item.disabled || !this.isOpen) return

      const itemText = item.text || item
      const index = this.chooseData.findIndex((value) => (value.text || value) === itemText)

      if (!this.multiple) {
        this.isOpen = false
        this.chooseData = [].concat(item)
      } else {
        index > -1 ? this.chooseData.splice(index, 1) : this.chooseData.push(item)
      }

      const chooseText = this.chooseData.reduce((prevValue, currentValue) => {
        const value = currentValue.text || currentValue

        prevValue.push(value)

        return prevValue
      }, [])

      this.chooseText = chooseText.toString()

      this.activeIndex = itemIndex
      this.$emit('changeSelect', this.chooseData, this.chooseText)
    },

    // 搜索，根据输入的关键字帅选
    _dropdownInput (value) {
      let newValue = this.dropdownData

      this.chooseText = value

      value = value.toLowerCase()

      if (value) {
        newValue = newValue.reduce((prevValue, currentValue) => {
          let data = currentValue.text || currentValue

          // 修复数字类型的选项问题 https://github.com/long-woo/vue-bootstrap-selectpicker/issues/2
          data = data.toString().toLowerCase()

          if (data.includes(value) || (this.multiple && value.includes(data))) {
            prevValue.push(currentValue)
          }

          return prevValue
        }, [])
      }

      // if (this.multiple) {
      //   this.chooseData = value.split(/,/g)
      // }
      this.filterData = newValue
      this.activeIndex = -1
      this.showDropdown()
      this.$emit('input', value)
    },

    // 方向键上、下
    _selectArrow (arrow) {
      let index = this.activeIndex
      const itemCount = this.filterData.length - 1

      // 如果项全部为`disabled`，直接跳出
      if (this.disabledArrow) return

      if (arrow === 'UP') {
        index--

        if (index < 0) index = itemCount
      } else if (arrow === 'DOWN') {
        index++

        if (index > itemCount) index = 0
      }

      this.activeIndex = index
      this.arrowKey = arrow
      this.autoFindItem(index)
    },

    // 当该值发生变化，获取当前项是不是`disable`的
    // 如果为`disabled`时，自动模拟按键，直到找到非`disabled`的项
    autoFindItem (index) {
      if (index < 0) return

      const item = this.filterData[index] || {}

      if (item.disabled) this._selectArrow(this.arrowKey)

      const currentActiveEl = this.$refs.dropdownItem[index]
      // const elHeight = currentActiveEl.offsetHeight || 0
      const topValue = index < 1 ? 0 : currentActiveEl.offsetTop || 0
      // console.log(elHeight, topValue, this.$refs.dropdownItemBox.scrollTop)
      this.$refs.dropdownItemBox.scrollTo(0, topValue)
    }
  }
}
</script>

<style scoped>
.bootstrap-select {
  width: 13.7rem;
}

.bootstrap-select .dropdown-toggle .form-control {
  text-overflow: ellipsis;
  padding-right: 1rem;
}

.bootstrap-select .dropdown-menu {
  min-width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.bootstrap-select.dropup .dropdown-menu {
  margin-top: 1rem;
  margin-bottom: 0.125rem;
}

.bootstrap-select .dropdown-menu.visibility {
  display: block;
  visibility: hidden;
}

.bootstrap-select.show .dropdown-menu {
  display: block;
}

.dropdown-menu .dropdown-item.disabled {
  cursor: not-allowed;
}

.form-control[readonly] {
  cursor: pointer;
}

.dropdown-toggle:after {
  position: absolute;
  right: 0.625rem;
  top: 50%;
  margin-top: -0.15rem;
}

.bootstrap-select.disabled .dropdown-toggle:after {
  border-bottom-color: #b3b8bd;
}

.dropdown-menu .dropdown-item.checked:after {
  content: '';
  border-style: solid;
  border-width: 0 0.15rem 0.15rem 0;
  height: 1rem;
  width: 0.5rem;
  float: right;
  margin-right: -0.875rem;
  transform: rotate(45deg);
}
</style>
