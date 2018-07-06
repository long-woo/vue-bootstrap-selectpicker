# vue-bootstrap-selectpicker

[![BUILD STATUS](https://travis-ci.org/long-woo/vue-bootstrap-selectpicker.svg?branch=master)](https://travis-ci.org/long-woo/vue-bootstrap-selectpicker)
[![NPM VERSION](https://img.shields.io/npm/v/vue-bootstrap-selectpicker.svg?style=flat)](https://www.npmjs.com/package/vue-bootstrap-selectpicker)
[![NPM LICENSE](https://img.shields.io/npm/l/vue-bootstrap-selectpicker.svg)](https://github.com/long-woo/vue-bootstrap-selectpicker/blob/master/LICENSE)
[![NPM DOWNLOAD](https://img.shields.io/npm/dm/vue-bootstrap-selectpicker.svg)](https://www.npmjs.com/package/vue-bootstrap-selectpicker)

> vue-bootstrap-selectpicker组件
>
> 如果你用过`bootstrap-selectpicker`，在vue项目里想继续使用，`vue-bootstrap-selectpicker`将是一个替代组件

![img](https://raw.github.com/long-woo/vue-bootstrap-selectpicker/master/show.gif)

## 依赖库

> Vue.js(v2.20+)
>
> Bootstrap(v4.0.0+) 推荐使用 `Bootstrap-Vue` 库

## 使用

> npm（yarn）安装

``` bash
npm i vue-bootstrap-selectpicker # yarn add vue-bootstrap-selectpicker
```

``` js
// 在main.js里面加入以下代码
import 'vue-bootstrap-selectpicker/css/vue-bootstrap-selectpicker.min.css'
import SelectPicker from 'vue-bootstrap-selectpicker'

Vue.use(SelectPicker)
```

> 浏览器

``` html
<head>
  ...
  <link ref="stylesheet" href="/vue-bootstrap-selectpicker/css/vue-bootstrap-selectpicker.min.css">
</head>
<body>
  ...
  <script src="/vue-bootstrap-selectpicker/js/vue-bootstrap-selectpicker.js"></script>
</body>
```

> 示例 <a traget="_blank" href="https://long-woo.github.io/vue-bootstrap-selectpicker/">更多...</a>

``` html
<select-picker :dropdown-data="dropdownData" placeholder="请选择..." v-model="defaultSelectText" @changeSelect="changeSelect" />
```

``` js
export default {
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
  }
}
```
