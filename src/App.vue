<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container text-left">
      <div class="form-group">
        <h4>演示-1</h4>
        <p>单选，非<code>key</code>、<code>value</code>形式的数组</p>
        <select-picker :dropdown-data="dropdownData1" placeholder="请选择..." v-model="demo1" @change="change1"></select-picker>
        <p class="alert alert-info mt-2">结果：{{demo1}}</p>
      </div>
      <div class="form-group">
        <h4>演示-2</h4>
        <p>单选，<code>key</code>、<code>value</code>形式的数组，支持<code>disabled</code>配置</p>
        <select-picker :dropdown-data="dropdownData2" placeholder="请选择..." v-model="demo2" @change="change2"></select-picker>
        <p class="alert alert-info mt-2">结果：{{demo2}}</p>
      </div>
      <div class="form-group">
        <h4>演示-3</h4>
        <p>多选，非<code>key</code>、<code>value</code>形式的数组</p>
        <select-picker :dropdown-data="dropdownData1" placeholder="请选择..." multiple v-model="demo3" @change="change3"></select-picker>
        <p class="alert alert-info mt-2">结果：{{demo3}}</p>
      </div>
      <div class="form-group">
        <h4>演示-4</h4>
        <p>多选，<code>key</code>、<code>value</code>形式的数组</p>
        <select-picker :dropdown-data="dropdownData2" placeholder="请选择..." multiple v-model="demo4" @change="change4"></select-picker>
        <p class="alert alert-info mt-2">结果：{{demo4}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SelectPicker from '@/components/SelectPicker'

export default {
  name: 'App',
  data () {
    return {
      dropdownData1: ['Vue', 'React', 'Angular', 'jQuery'],
      demo1: '',
      dropdownData2: [
        { text: 'Vue', value: 'vue' },
        { text: 'React', value: 'react' },
        { text: 'Angular', value: 'angular' },
        { text: 'jQuery', value: 'jquery', disabled: true }
      ],
      demo2: '',
      demo3: '',
      demo4: ''
    }
  },
  components: {
    SelectPicker
  },
  methods: {
    consoleInfo (data, example) {
      data = JSON.stringify(data)
      console.info(`%c演示-${example}%c输出：%c${data}`, 'color: #47B784;', 'color: #000;', 'background-color: #d1ecf1; border-color: #d1ecf1; color: #0c5460; border-radius: 0.25rem; padding: 0.25rem 0.5rem;')
    },
    change1 (data, text) {
      this.demo1 = text
      this.consoleInfo(data, 1)
    },
    change2 (data, text) {
      this.demo2 = text
      this.consoleInfo(data, 2)
    },
    change3 (data, text) {
      this.demo3 = text
      this.consoleInfo(data, 3)
    },
    change4 (data, text) {
      this.demo4 = text
      this.consoleInfo(data, 4)
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
