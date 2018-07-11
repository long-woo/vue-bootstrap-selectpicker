<template>
  <div class="form-group">
    <h4>dropdown-data</h4>
    <div class="row">
      <div class="col-sm-6">
        <p>常规数组</p>
        <select-picker :dropdown-data="baseDropdownData" />
      </div>
      <div class="col-sm-6">
        <p>
          <code>key</code>、
          <code>value</code>形式的数组，配置
          <code>disabled</code>可禁用其中某项的选择</p>
        <select-picker :dropdown-data="dropdownData" />
      </div>
    </div>
    <pre><code class="language-html">&lt;select-picker :dropdown-data="dropdownData" />

&lt;script>
<code class="language-js">  ...
  data () {
    ...
    dropdownData: ['Vue', 'React', 'Angular', 'jQuery'] // [{text: 'Vue', value: 'vue'}, {text: 'React', value: 'react', disabled: true}, ...]
  }
  ...</code>
&lt;/script>
</code></pre>
    <h4>v-model</h4>
    <div class="row">
      <div class="col-sm-6">
        <p>没有设置初始值</p>
        <select-picker :dropdown-data="baseDropdownData" v-model="noDefaultValue" />
      </div>
      <div class="col-sm-6">
        <p>设置初始值</p>
        <select-picker :dropdown-data="baseDropdownData" v-model="defaultValue" />
      </div>
    </div>
    <pre><code class="language-html">&lt;select-picker :dropdown-data="dropdownData" />

&lt;script>
<code class="language-js">  ...
  data () {
    ...
    dropdownData: ['Vue', 'React', 'Angular', 'jQuery'],
    defaultValue: '' // 'Vue'
  }
  ...</code>
&lt;/script>
</code></pre>
    <h4>placeholder</h4>
    <div>
      <p>html原有属性</p>
      <select-picker placeholder="请选择..." :dropdown-data="baseDropdownData" v-model="noDefaultValue" />
      <pre><code class="language-html">&lt;select-picker placeholder="请选择..." /></code></pre>
    </div>
    <h4>disabled</h4>
    <div>
      <p>html原有属性</p>
      <select-picker placeholder="diabled..." disabled :dropdown-data="baseDropdownData" v-model="noDefaultValue" />
      <pre><code class="language-html">&lt;select-picker disabled /></code></pre>
    </div>
    <h4>Propertys</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="bg-info">
          <tr>
            <th style="width: 10rem;">属性名</th>
            <th style="width: 8rem;">类型</th>
            <th style="width: 5rem;">默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in propDatas" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.type}}</td>
            <td>{{item.value}}</td>
            <td v-html="item.remark"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="alert alert-info">⚠️<strong>注意</strong>：由于组件的使用<code>input</code>，同时支持原有属性的配置</div>
  </div>
</template>

<script>
export default {
  name: 'Propertys',
  data () {
    return {
      propDatas: [
        {name: 'dropdown-data', type: 'Array', value: '[]', remark: '支持两种格式的<strong>数据源</strong>，可以是普通数组<code>[&acute;Vue&acute;, ...]</code>，也可以是<code>[{text: &acute;Vue&acute;, value: &acute;Vue&acute;}, ...]</code>。第二种类型的数据源的<code>text</code>是必须的，当需要禁用某项时，可添加一个<code>disabled</code>的属性并且将值设置为<code>true</code>'},
        {name: 'v-model', type: 'Array | String', value: '', remark: '默认显示的值'},
        {name: 'placeholder', type: 'String', value: '', remark: 'html原有属性'},
        {name: 'disabled', type: 'Boolean', value: 'false', remark: 'html原有属性'},
        {name: 'multiple', type: 'Boolean', value: 'false', remark: '是否允许多选'},
        {name: 'search', type: 'Boolean', value: 'false', remark: '是否允许搜索，当设置为<code>true</code>时，会把html原有<code>readonly</code>属性设置为<code>false</code>'},
        {name: 'size', type: 'Number', value: '0', remark: '下拉项的可视数，超过设置的值将显示滚动条'},
        {name: 'is-dropdown', type: 'Boolean', value: 'false', remark: '是否在组件渲染完成，显示下拉项'}
      ],
      baseDropdownData: ['Vue', 'React', 'Angular', 'jQuery'],
      dropdownData: [{text: 'Vue', value: 'vue'}, {text: 'React', value: 'react', disabled: true}, {text: 'Angular', value: 'angular'}, {text: 'jQuery', value: 'jquery', disabled: false}],
      noDefaultValue: '',
      defaultValue: 'Vue'
    }
  },
  mounted () {
    this.$prism.highlightAll()
  },
  methods: {
    consoleInfo (data, example) {
      data = JSON.stringify(data)
      console.info(`%c演示-${example}%c输出：%c${data}`, 'color: #47B784;', 'color: #000;', 'background-color: #d1ecf1; border-color: #d1ecf1; color: #0c5460; border-radius: 0.25rem; padding: 0.25rem 0.5rem;')
    }
  }
}
</script>
