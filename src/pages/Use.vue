<template>
  <div class="form-group">
    <h4>npm（yarn）</h4>
    <div>
      <pre><code class="language-bash">npm i vue-bootstrap-selectpicker #yarn add vue-bootstrap-selectpicker</code></pre>

      <pre><code class="language-js">// 在main.js里面加入以下代码
import 'vue-bootstrap-selectpicker/dist/css/vue-bootstrap-selectpicker.min.css'
import SelectPicker from 'vue-bootstrap-selectpicker'

Vue.use(SelectPicker)
</code></pre>
    </div>
    <h4>浏览器</h4>
    <div>
      <pre><code class="language-html">&lt;head>
  ...
  &lt;link ref="stylesheet" href="/vue-bootstrap-selectpicker/dist/css/vue-bootstrap-selectpicker.min.css">
&lt;/head>

&lt;body>
  ...
  &lt;script src="/vue-bootstrap-selectpicker/dist/js/vue-bootstrap-selectpicker.js">&lt;/script>
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
</template>

<script>
export default {
  name: 'UseMethod',
  mounted () {
    this.$prism.highlightAll()
  }
}
</script>
