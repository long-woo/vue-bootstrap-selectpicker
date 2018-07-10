<template>
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
      ]
    }
  },
  methods: {
    consoleInfo (data, example) {
      data = JSON.stringify(data)
      console.info(`%c演示-${example}%c输出：%c${data}`, 'color: #47B784;', 'color: #000;', 'background-color: #d1ecf1; border-color: #d1ecf1; color: #0c5460; border-radius: 0.25rem; padding: 0.25rem 0.5rem;')
    }
  }
}
</script>
