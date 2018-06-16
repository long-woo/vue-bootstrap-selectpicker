<template>
  <div id="app">
    <img src="./assets/logo.png">
    <select-picker></select-picker>
  </div>
</template>

<script>
import SelectPicker from '@/components/SelectPicker'

export default {
  name: 'App',
  components: {
    SelectPicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
