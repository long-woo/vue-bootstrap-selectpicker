webpackJsonp([6],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"fork-me",attrs:{href:"https://github.com/long-woo"}},[e("img",{attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png",alt:"Fork me on GitHub"}})])}]};var s=n("VU/8")({name:"App",metaInfo:function(){return{title:"vue-bootstrap-selectpicker",titleTemplate:"%s | vue-bootstrap-selectpicker",meta:[{name:"baidu-site-verification",content:"S3rw3XE78b"},{name:"keyword",content:"vue-bootstrap-selectpicker, vue, bootstrap, bootstrap-vue, bootstrap-slect, bootstrap-picker, vue-select, vue-picker, vue选择组件, vue下拉选择组件, vue选择插件, vue下啦选择插件, 组件, 插件"},{name:"description",content:"vue-bootstrap-selectpicker是基于vue和bootstrap的下拉选择组件（框）。功能类似bootstrap-select插件的简化版，在vue中的实现"}]}}},i,!1,function(t){n("yeeL")},null,null).exports,r=n("/ocq"),a=n("p3jY"),c=n.n(a);o.a.use(r.a),o.a.use(c.a);var d=new r.a({routes:[{path:"/",name:"Home",component:function(){return n.e(1).then(n.bind(null,"HXef"))},meta:{title:"首页"}},{path:"/getstart",component:function(){return n.e(2).then(n.bind(null,"304k"))},children:[{path:"",redirect:"use"},{path:"use",name:"Use",component:function(){return n.e(3).then(n.bind(null,"NuRk"))},meta:{title:"使用"}},{path:"propertys",name:"Propertys",component:function(){return n.e(0).then(n.bind(null,"q8zr"))},meta:{title:"属性"}},{path:"events",name:"Events",component:function(){return n.e(4).then(n.bind(null,"hwN8"))},meta:{title:"事件"}}]}]}),l=(n("qb6w"),n("gaQM"),n("OEdS")),u=n.n(l),p=n("Dd8w"),h=n.n(p),f={name:"SelectPicker",data:function(){return{isOpen:this.isDropdown,filterData:this.dropdownData,chooseText:this.value,chooseData:[],activeIndex:-1,arrowKey:"",dropdownRect:{},upShow:!1}},inheritAttrs:!1,props:{isDropdown:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},emptyText:{type:String,default:"没有匹配数据"},search:{type:Boolean,default:!1},size:{type:Number,default:0},dropdownData:Array,value:[Array,String],placement:String},computed:{disabledArrow:function(){return this.filterData.reduce(function(t,e){return e.disabled&&t++,t},0)===this.filterData.length},listeners:function(){var t=this;return h()({},this.$listeners,{click:function(e){t.search||t.toggleDropdown()},focus:function(e){t.search&&t.showDropdown()},input:function(e){var n=e.target.value;t._dropdownInput(n)},keydown:function(e){switch(e.keyCode){case 13:var n=t.activeIndex<0?0:t.activeIndex,o=t.filterData[n]||{};t.chooseItem(o,n),e.preventDefault();break;case 38:case 40:var i=38===e.keyCode?"UP":"DOWN";t._selectArrow(i),e.preventDefault()}}})}},watch:{chooseData:function(t){var e=t.reduce(function(t,e){return t.push(e.text||e),t},[]);this.chooseText=e.toString(),this.$emit("change",{data:this.chooseData,text:this.chooseText})}},mounted:function(){this.initSelect()},destroyed:function(){document.removeEventListener("click",this.hideDropdown,!1)},methods:{initSelect:function(){var t=this.$refs.dropdownItemBox.getBoundingClientRect(),e=this.$refs.dropdownItemBox.firstChild.offsetHeight,n=parseFloat(window.getComputedStyle(document.body,null).fontSize),o=t.bottom+window.scrollY>document.body.clientHeight;if(this.size){var i=(e*(this.size>this.filterData.length?this.filterData.length:this.size)+n+2)/n;this.$refs.dropdownItemBox.style.height=i+"rem"}this.placement&&(o="top"===this.placement),this.upShow=o,this.dropdownRect=t,document.addEventListener("click",this.hideDropdown,!1)},toggleDropdown:function(){this.isOpen=!this.isOpen,this.isOpen||(this.activeIndex=-1)},showDropdown:function(){this.isOpen=!0},hideDropdown:function(t){this.$el.contains(t.target)||(this.activeIndex=-1,this.isOpen=!1)},chooseItem:function(t,e){if(!t.disabled&&this.isOpen){var n=(t.text||t).toString(),o=this.chooseData.findIndex(function(t){return(t.text||t).toString()===n});this.multiple?o>-1?this.chooseData.splice(o,1):this.chooseData.push(t):(this.isOpen=!1,this.chooseData=[].concat(t)),this.activeIndex=e}},_dropdownInput:function(t){var e=this,n=this.dropdownData;t&&(n=n.reduce(function(n,o){var i=(o.text||o).toString().toLowerCase(),s=t.split(/,/g).findIndex(function(t){return(t.text||t).toString()===i});return(i.includes(t.toLowerCase())||e.multiple&&s>-1)&&n.push(o),n},[])),this.multiple&&(this.chooseData=t?t.split(/,/g):[]),this.filterData=n,this.activeIndex=-1,this.showDropdown(),this.$emit("input",t)},_selectArrow:function(t){var e=this.activeIndex,n=this.filterData.length-1;this.disabledArrow||("UP"===t?--e<0&&(e=n):"DOWN"===t&&++e>n&&(e=0),this.activeIndex=e,this.arrowKey=t,this.autoFindItem(e))},autoFindItem:function(t){if(!(t<0)){(this.filterData[t]||{}).disabled&&this._selectArrow(this.arrowKey);var e=this.$refs.dropdownItem[t],n=t<1?0:e.offsetTop||0;this.$refs.dropdownItemBox.scrollTo(0,n)}}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown bootstrap-select",class:{dropup:t.upShow,show:t.isOpen,disabled:t.$attrs.disabled||""===t.$attrs.disabled}},[n("div",{staticClass:"dropdown-toggle"},[n("input",t._g(t._b({staticClass:"form-control",attrs:{type:"text",readonly:!t.search},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))]),t._v(" "),n("div",{ref:"dropdownItemBox",staticClass:"dropdown-menu",class:{visibility:!t.dropdownRect.height}},[t._l(t.filterData,function(e,o){return n("a",{key:o,ref:"dropdownItem",refInFor:!0,staticClass:"dropdown-item",class:{disabled:e.disabled,checked:t.multiple&&t.chooseText.indexOf(e.text||e)>-1,active:t.activeIndex===o&&!e.disabled},attrs:{href:"javascript:;"},on:{click:function(n){t.chooseItem(e,o)}}},[t._v(t._s(e.text||e))])}),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:!t.filterData.length,expression:"!filterData.length"}],staticClass:"dropdown-item disabled"},[t._v(t._s(t.emptyText))])],2)])},staticRenderFns:[]};var v=n("VU/8")(f,m,!1,function(t){n("s57o")},"data-v-23bd196c",null).exports;v.install=function(t){t.component(v.name,v)};var w=v;o.a.config.productionTip=!1,o.a.prototype.$prism=u.a,o.a.use(w),new o.a({el:"#app",router:d,components:{App:s},template:"<App/>"})},gaQM:function(t,e){},qb6w:function(t,e){},s57o:function(t,e){},yeeL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b8728d31c16de47246d2.js.map