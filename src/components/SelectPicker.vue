<template>
  <div class="dropdown bootstrap-select" :class="{'show': isOpen}">
    <div class="dropdown-toggle">
      <input class="form-control" :readonly="!search" @click="toggleDropdown" v-model="chooseText">
    </div>
    <div class="dropdown-menu" v-if="filterData.length">
      <a class="dropdown-item" href="javascript:;" :class="{'active': chooseText.indexOf(item.text || item) > -1}" v-for="(item, index) in filterData" :key="index" @click="chooseItem(item)">{{item.text || item}}</a>
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
      chooseText: []
    }
  },
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
    value: String
  },
  methods: {
    // 点击dropdown元素后，显示/隐藏选项列表
    toggleDropdown () {
      this.isOpen = !this.isOpen
    },

    // 选择项
    chooseItem (item) {
      if (this.multiple) {
        this.chooseText.push(item)
      } else {
        this.chooseText = item
        this.isOpen = false
      }

      this.$emit('change', this.chooseText)
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

.dropdown-toggle:after {
  position: absolute;
  right: 0.625rem;
  top: 50%;
  margin-top: -0.15rem;
}

.form-control[readonly] {
  cursor: pointer;
}
</style>
