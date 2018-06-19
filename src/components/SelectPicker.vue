<template>
  <div class="dropdown bootstrap-select" :class="{'show': isOpen}">
    <div class="dropdown-toggle">
      <input class="form-control" type="text" :readonly="!search" v-model="chooseText" v-bind="$attrs" v-on="listeners">
    </div>
    <div class="dropdown-menu" v-if="filterData.length">
      <a class="dropdown-item" href="javascript:;" :class="[multiple && (chooseText.indexOf(item.text || item) > -1) ? 'checked' : (chooseText.indexOf(item.text || item) > -1) ? 'active' : '', { 'disabled': item.disabled }]" v-for="(item, index) in filterData" :key="index" @click="chooseItem(item)">{{item.text || item}}</a>
    </div>
    <div class="dropdown-menu" v-else>
      <a class="dropdown-item disabled">{{emptyText}}</a>
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
      chooseData: []
    }
  },
  inheritAttrs: false,
  props: {
    isDropdown: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '没有匹配数据'
    },
    dropdownData: Array,
    search: {
      type: Boolean,
      default: false
    },
    value: [Array, String]
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        click: event => {
          this.toggleDropdown()
        }
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.hideDropdown, false)
  },
  methods: {
    // 点击dropdown元素后，显示/隐藏选项列表
    toggleDropdown () {
      this.isOpen = !this.isOpen
    },

    // 点击元素外隐藏
    hideDropdown (event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    },

    // 选择项
    chooseItem (item) {
      if (item.disabled) return

      const itemText = item.text || item
      const index = this.chooseData.indexOf(itemText)

      if (!this.multiple) {
        this.isOpen = false
      }

      // 非多选或者已选择时，先移除
      if (!this.multiple || index > -1) {
        this.chooseData.splice(index, 1)
      }

      if (index < 0) {
        this.chooseData.push(item)
      }

      this.chooseText = this.chooseData.reduce((prevValue, currentValue) => {
        prevValue.push(currentValue.text || currentValue)

        return prevValue
      }, [])

      const chooseText = this.chooseText.toString()

      this.$emit('change', this.chooseData, chooseText)
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
}

.bootstrap-select.show .dropdown-menu{
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
