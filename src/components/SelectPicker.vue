<template>
  <div class="dropdown bootstrap-select" :class="{'show': isOpen}">
    <button class="btn btn-light dropdown-toggle" type="button" @click="toggleSelect">
      <span class="bootstrap-select-text">Dropdown button</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="javascript:;">Action</a>
      <a class="dropdown-item" href="javascript:;">Another action</a>
      <a class="dropdown-item" href="javascript:;">Something else here</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPicker',
  data () {
    return {
      isOpen: this.isDropdown
    }
  },
  props: {
    isDropdown: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSelect () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.bootstrap-select {
  width: 13.7rem;
}

.bootstrap-select .dropdown-toggle {
  width: 100%;
  text-align: right;
}

.bootstrap-select .dropdown-toggle .bootstrap-select-text {
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  left: 0;
  right: 1.25rem;
  top: 0;
  bottom: 0;
  padding: inherit;
}

.bootstrap-select .dropdown-menu {
  width: 100%;
}

.bootstrap-select.show .dropdown-menu{
  display: block;
}
</style>
