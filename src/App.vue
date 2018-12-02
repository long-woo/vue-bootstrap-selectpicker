<template>
  <div id="app">
    <router-view />
    <a href="https://github.com/long-woo" class="fork-me"><img src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo () {
    return {
      title: 'vue-bootstrap-selectpicker',
      titleTemplate: '%s | vue-bootstrap-selectpicker',
      meta: [{
        name: 'keyword',
        content: 'vue-bootstrap-selectpicker, vue, bootstrap, bootstrap-vue, bootstrap-slect, bootstrap-picker, vue-select, vue-picker, vue选择组件, vue下拉选择组件, vue选择插件, vue下啦选择插件, 组件, 插件'
      }, {
        name: 'description',
        content: 'vue-bootstrap-selectpicker是基于vue和bootstrap的下拉选择组件（框）。功能类似bootstrap-select插件的简化版，在vue中的实现'
      }]
    }
  }
}
</script>

<style>
* {
  transition: all 0.3s ease-in !important;
}

h2 {
  margin-bottom: 2rem !important;
}

h4 {
  border-bottom: 0.05rem solid #e5e5e5;
  margin-bottom: 1.5rem !important;
  margin-top: 2rem !important;
  padding-bottom: 0.5rem !important;
}

pre {
  border-radius: 0.25rem;
  transition: all 0.3ms ease-out;
}

pre:hover {
  box-shadow: 0 0 1.5rem rgba(71, 183, 132, 0.6);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fork-me img {
  position: fixed;
  top: 0;
  right: 0;
  border: 0;
  z-index: 1992;
}

@media (max-width: 576px) {
  .fork-me img {
    width: 5rem;
  }
}
</style>
