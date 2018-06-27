<template>
  <div class="container-fluid">
        <div class="row">
      <div class="col-md-3">
        <nav class="navbar navbar-light text-center">
          <a class="navbar-brand" href="https://github.com/long-woo/vue-bootstrap-selectpicker">GitHub</a>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link">基本示例</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-md-9 text-left">
        <div class="form-group">
          <h4>演示-1</h4>
          <p>单选，非
            <code>key</code>、
            <code>value</code>形式的数组</p>
          <select-picker :dropdown-data="dropdownData1" placeholder="请选择..." v-model="demo1" @changeSelect="change1" />
          <p class="alert alert-info mt-2">结果：{{demo1}}</p>
          <pre><code class="language-html">&lt;template></code>
  <code class="language-html">&lt;div></code>
    <code class="language-html">&lt;select-picker :dropdown-data="dropdownData" placeholder="请选择..." v-model="defaultSelectText" @changeSelect="changeSelect" /></code>
  <code class="language-html">&lt;/div></code>
<code class="language-html">&lt;/template></code>

<code class="language-html">&lt;script></code>
<code class="language-js">export default {</code>
  <code class="language-js">data () {</code>
    <code class="language-js">return {</code>
      <code class="language-js">dropdownData: ['Vue', 'React', 'Angular', 'jQuery'],</code>
      <code class="language-js">defaultSelectText: ''</code>
    <code>}</code>
  <code>},</code>
  <code>methods: {</code>
    <code class="language-js">changeSelect (data, text) {</code>
      <code class="language-js">console.log(data)</code>
      <code class="language-js">this.defaultSelectText = text</code>
    <code>}</code>
  <code>}</code>
<code>}</code>
<code class="language-html">&lt;/script></code></pre>
        </div>
        <div class="form-group">
          <h4>演示-2</h4>
          <p>单选，
            <code>key</code>、
            <code>value</code>形式的数组，支持
            <code>disabled</code>配置</p>
          <select-picker :dropdown-data="dropdownData2" placeholder="请选择..." v-model="demo2" @changeSelect="change2" />
          <p class="alert alert-info mt-2">结果：{{demo2}}</p>
          <pre><code class="language-html">&lt;template></code>
  <code class="language-html">&lt;div></code>
    <code class="language-html">&lt;select-picker :dropdown-data="dropdownData" placeholder="请选择..." v-model="defaultSelectText" @changeSelect="changeSelect" /></code>
  <code class="language-html">&lt;/div></code>
<code class="language-html">&lt;/template></code>

<code class="language-html">&lt;script></code>
<code class="language-js">export default {</code>
  <code class="language-js">data () {</code>
    <code class="language-js">return {</code>
      <code class="language-js">dropdownData: [</code>
        <code class="language-js">{ text: 'Vue', value: 'vue' },
        { text: 'React', value: 'react', disabled: false },
        { text: 'Angular', value: 'angular' },
        { text: 'jQuery', value: 'jquery', disabled: true }</code>
      <code class="language-js">],</code>
      <code class="language-js">defaultSelectText: ''</code>
    <code>}</code>
  <code>},</code>
  <code>methods: {</code>
    <code class="language-js">changeSelect (data, text) {</code>
      <code class="language-js">console.log(data)</code>
      <code class="language-js">this.defaultSelectText = text</code>
    <code>}</code>
  <code>}</code>
<code>}</code>
<code class="language-html">&lt;/script></code></pre>
        </div>
        <div class="form-group">
          <h4>演示-3</h4>
          <p>多选，只需添加<code>multiple</code>属性，非
            <code>key</code>、
            <code>value</code>形式的数组</p>
          <select-picker :dropdown-data="dropdownData1" placeholder="请选择..." multiple v-model="demo3" @changeSelect="change3" />
          <p class="alert alert-info mt-2">结果：{{demo3}}</p>
          <pre><code class="language-html">&lt;template></code>
  <code class="language-html">&lt;div></code>
    <code class="language-html">&lt;select-picker :dropdown-data="dropdownData" placeholder="请选择..." multiple v-model="defaultSelectText" @changeSelect="changeSelect" /></code>
  <code class="language-html">&lt;/div></code>
<code class="language-html">&lt;/template></code>

<code class="language-html">&lt;script></code>
<code class="language-js">export default {</code>
  <code class="language-js">data () {</code>
    <code class="language-js">return {</code>
      <code class="language-js">dropdownData: ['Vue', 'React', 'Angular', 'jQuery'],</code>
      <code class="language-js">defaultSelectText: ''</code>
    <code>}</code>
  <code>},</code>
  <code>methods: {</code>
    <code class="language-js">changeSelect (data, text) {</code>
      <code class="language-js">console.log(data)</code>
      <code class="language-js">this.defaultSelectText = text</code>
    <code>}</code>
  <code>}</code>
<code>}</code>
<code class="language-html">&lt;/script></code></pre>
        </div>
        <div class="form-group">
          <h4>演示-4</h4>
          <p>多选，只需添加<code>multiple</code>属性，
            <code>key</code>、
            <code>value</code>形式的数组，支持
            <code>disabled</code>配置</p>
          <select-picker :dropdown-data="dropdownData2" placeholder="请选择..." multiple v-model="demo4" @changeSelect="change4" />
          <p class="alert alert-info mt-2">结果：{{demo4}}</p>
        </div>
        <div class="form-group">
          <h4>演示-5</h4>
          <p>搜索并单选，非
            <code>key</code>、
            <code>value</code>形式的数组</p>
          <select-picker :dropdown-data="dropdownData1" placeholder="请选择..." search v-model="demo5" @changeSelect="change5" />
          <p class="alert alert-info mt-2">结果：{{demo5}}</p>
        </div>
        <div class="form-group">
          <h4>演示-6</h4>
          <p>搜索并单选，
            <code>key</code>、
            <code>value</code>形式的数组，支持
            <code>disabled</code>配置</p>
          <select-picker :dropdown-data="dropdownData2" placeholder="请选择..." search multiple v-model="demo6" @changeSelect="change6" />
          <p class="alert alert-info mt-2">结果：{{demo6}}</p>
        </div>
        <div class="form-group">
          <h4>演示-7</h4>
          <p><code>size</code>属性，可用于设置可视数，超过该值时，将显示滚动条</p>
          <select-picker :dropdown-data="dropdownData1" placeholder="请选择..." :size="3" v-model="demo7" @changeSelect="change7" />
          <p class="alert alert-info mt-2">结果：{{demo7}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dropdownData: ['Vue', 'React', 'Angular'],
      dropdownData1: ['Vue', 'React', 'Angular', 'jQuery'],
      dropdownData2: [
        { text: 'Vue', value: 'vue' },
        { text: 'React', value: 'react', disabled: false },
        { text: 'Angular', value: 'angular' },
        { text: 'jQuery', value: 'jquery', disabled: true }
      ],
      demo1: '',
      demo2: '',
      demo3: '',
      demo4: '',
      demo5: '',
      demo6: '',
      demo7: ''
    }
  },
  mounted () {
    this.$prism.highlightAll()
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
    },
    change5 (data, text) {
      this.demo5 = text
      this.consoleInfo(data, 5)
    },
    change6 (data, text) {
      this.demo6 = text
      this.consoleInfo(data, 6)
    },
    change7 (data, text) {
      this.demo7 = text
      this.consoleInfo(data, 7)
    }
  }
}
</script>

<style scoped>
h4 {
  color: #47b784;
}

pre {
  border-radius: 0.25rem;
  transition: all 0.3ms ease-out;
}

pre:hover {
  box-shadow: 0 0 1.5rem rgba(71, 183, 132, 0.6);
}
</style>
