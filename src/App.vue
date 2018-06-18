<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container text-left">
      <h4>演示-1</h4>
       <p>单选</p>
      <select-picker :dropdown-data="dropdownData" v-model="demo1" @change="change1"></select-picker>
    </div>
  </div>
</template>

<script>
import SelectPicker from '@/components/SelectPicker'

export default {
  name: 'App',
  data () {
    return {
      dropdownData: ['Vue', 'React', 'Angular', 'jQuery'],
      demo1: 'Vue'
    }
  },
  components: {
    SelectPicker
  },
  methods: {
    change1 (text, value) {
      console.log(text)
    }
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
