<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 align-self-start pt-3 sticky-top bg-white">
        <a class="navbar-brand text-secondary" href="https://github.com/long-woo/vue-bootstrap-selectpicker" target="_blank">vue-bootstrap-selecticker</a>
        <a href="https://github.com/long-woo/vue-bootstrap-selectpicker/releases" target="_blank">
          <img src="https://img.shields.io/npm/v/vue-bootstrap-selectpicker.svg?style=for-the-badge" alt="version">
        </a>
        <a href="https://github.com/long-woo/vue-bootstrap-selectpicker" target="_blank">
          <img src="https://img.shields.io/github/stars/long-woo/vue-bootstrap-selectpicker.svg?style=for-the-badge&label=Stars" alt="github stars">
        </a>
        <hr/>
        <ul class="nav flex-column text-left">
          <li class="nav-item">
            <a class="nav-link active" href="#">使用</a>
            <ul class="nav flex-column nav-sub-item">
              <li class="nav-item">
                <a class="nav-link">npm或yarn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">浏览器</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">简单示例</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">配置项</a>
            <ul class="nav flex-column nav-sub-item">
              <li class="nav-item">
                <a class="nav-link">默认值</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">placeholder</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">disabled</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">multiple</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">size</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">事件</a>
            <ul class="nav flex-column nav-sub-item">
              <li class="nav-item">
                <a class="nav-link">changeSelect</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-9 pt-3 text-left">
        <div class="form-group">
          <h2>使用</h2>
          <h4>npm</h4>
          <div>
            <pre><code class="language-bash">npm i vue-bootstrap-selectpicker #yarn add vue-bootstrap-selectpicker</code></pre>

            <pre><code class="language-js">// 在main.js里面加入以下代码
import 'vue-bootstrap-selectpicker/css/vue-bootstrap-selectpicker.min.css'
import SelectPicker from 'vue-bootstrap-selectpicker'

Vue.use(SelectPicker)
</code></pre>
          </div>
          <h4>浏览器</h4>
          <div>
            <pre><code class="language-html">&lt;head>
  ...
  &lt;link ref="stylesheet" href="/vue-bootstrap-selectpicker/css/vue-bootstrap-selectpicker.min.css">
&lt;/head>

&lt;body>
  ...
  &lt;script src="/vue-bootstrap-selectpicker/js/vue-bootstrap-selectpicker.js">&lt;/script>
&lt;/body></code></pre>
          </div>
          <h4>简单示例</h4>
          <div>
            <pre><code class="language-html">&lt;select-picker :dropdown-data="dropdownData" placeholder="请选择..." v-model="defaultSelectText" @changeSelect="changeSelect" /></code></pre>
            <pre><code class="language-js">...
data () {
  return {
    ...
    dropdownData: ['Vue', 'React', 'Angular', 'jQuery'],
    defaultSelectText: ''
  }
},
methods: {
  ...
  changeSelect (data, text) {
    console.log(data)
    this.defaultSelectText = text
  }
}</code></pre>
          </div>
        </div>
        <div class="form-group">
          <h2>基本示例</h2>
          <h4>数据源</h4>
          <p>支持两种格式的数据源，可以是普通数组<code>['Vue', ...]</code>，也可以是<code>[{text: 'Vue', value: 'Vue'}, ...]</code>。第二种类型的数据源的<code>text</code>是必须的，当需要禁用某项时，可添加一个<code>disabled</code>的属性并且将值设置为<code>true</code>。</p>
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
      <code class="language-js">dropdownData: ['Vue', 'React', 'Angular', 'jQuery'], // [{ text: 'Vue', value: 'vue' }, { text: 'React', value: 'react', disabled: true }, ...]</code>
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
          <p>搜索并多选，
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
h2 {
  margin-bottom: 2rem;
}

h4 {
  border-bottom: 0.05rem solid #e5e5e5;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
}

pre {
  border-radius: 0.25rem;
  transition: all 0.3ms ease-out;
}

pre:hover {
  box-shadow: 0 0 1.5rem rgba(71, 183, 132, 0.6);
}

.navbar-brand {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}

.nav-item .nav-sub-item {
  padding-left: 1rem;
}
</style>
