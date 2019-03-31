(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{150:function(t,a,s){t.exports=s.p+"assets/img/vue-framework.2694dcd1.png"},325:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"vue-架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-架构","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 架构")]),n("h3",{attrs:{id:"生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("_init")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initLifecycle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initEvents")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initRender")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'beforeCreate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 拿不到 props data")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initInjections")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{attrs:{class:"token function"}},[t._v("initState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initProvide")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'created'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/12/1648d9df78201f07?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),n("h3",{attrs:{id:"双向绑定原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 双向绑定原理")]),n("ul",[n("li",[t._v("在初始化 data props 时，递归对象，给每一个属性双向绑定，对于数组而言，会拿到原型重写函数，实现手动派发更新。因为函数不能监听到数据的变动，和 proxy 比较一下。")]),n("li",[t._v("除了以上数组函数，通过索引改变数组数据或者给对象添加新属性也不能触发，需要使用自带的set 函数，这个函数内部也是手动派发更新")]),n("li",[t._v("在组件挂载时，会实例化渲染观察者，传入组件更新的回调。在实例化过程中，会对模板中的值对象进行求值，触发依赖收集。在触发依赖之前，会保存当前的渲染观察者，用于组件含有子组件的时候，恢复父组件的观察者。触发依赖收集后，会清理掉不需要的依赖，性能优化，防止不需要的地方去重复渲染。")]),n("li",[t._v("改变值会触发依赖更新，会将收集到的所有依赖全部拿出来，放入 nextTick 中统一执行。执行过程中，会先对观察者进行排序，渲染的最后执行。先执行 beforeupdate 钩子函数，然后执行观察者的回调。在执行回调的过程中，可能 watch 会再次 push 进来，因为存在在回调中再次赋值，判断无限循环。")])]),n("h3",{attrs:{id:"v-model原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-model原理","aria-hidden":"true"}},[t._v("#")]),t._v(" v-model原理")]),n("ul",[n("li",[t._v("v:model 在模板编译的时候转换代码")]),n("li",[t._v("v-model 本质是 :value 和 v-on，但是略微有点区别。在输入控件下，有两个事件监听，输入中文时只有当输出中文才触发数据赋值")]),n("li",[t._v("v-model 和:bind 同时使用，前者优先级更高，如果 :value 会出现冲突")]),n("li",[t._v("v-model 因为语法糖的原因，还可以用于父子通信")])]),n("h3",{attrs:{id:"watch和computer区别和运用的场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#watch和computer区别和运用的场景","aria-hidden":"true"}},[t._v("#")]),t._v(" watch和computer区别和运用的场景")]),n("ul",[n("li",[t._v("前者是计算属性，依赖其他属性计算值。并且 computer 的值有缓存，只有当计算值变化才变化触发渲染。后者监听到值得变化就会执行回调")]),n("li",[t._v("computer 就是简单计算一下，适用于渲染页面。watch 适合做一些复杂业务逻辑")]),n("li",[t._v("前者有依赖两个 watcher，computer watcher 和渲染 watcher。判断计算出的值变化后渲染 watcher 派发更新触发渲染")])]),n("h3",{attrs:{id:"vue-的父子通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-的父子通信","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 的父子通信")]),n("ul",[n("li",[n("p",[t._v("使用 v-model 实现父传子，子传父。因为 v-model 默认解析成 :value 和 :input")])]),n("li",[n("p",[t._v("父传子")]),n("ul",[n("li",[t._v("通过 props")]),n("li",[t._v("通过 $children 访问子组件数组，注意该数组乱序")]),n("li",[t._v("对于多级父传子，可以使用 v-bind={$attrs} ，通过对象的方式筛选出父组件中传入但子组件不需要的 props")]),n("li",[t._v("$listens 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。")])])]),n("li",[n("p",[t._v("子传父")]),n("ul",[n("li",[t._v("父组件传递函数给子组件，子组件通过 $emit 触发")]),n("li",[t._v("修改父组件的 props")]),n("li",[t._v("通过 $parent 访问父组件")]),n("li",[t._v(".sync")])])]),n("li",[n("p",[t._v("平行组件")]),n("ul",[n("li",[t._v("EventBus")])])]),n("li",[n("p",[t._v("Vuex 解决一切")])])]),n("h3",{attrs:{id:"路由原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由原理")]),n("p",[t._v("前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式")]),n("ol",[n("li",[t._v("hash模式\n"),n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/11/164888109d57995f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),n("li",[t._v("history模式\n"),n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/11/164888478584a217?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),n("img",{attrs:{src:s(150),alt:""}})])]),n("h3",{attrs:{id:"mvvm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvvm","aria-hidden":"true"}},[t._v("#")]),t._v(" MVVM")]),n("p",[t._v("MVVM 由以下三个内容组成")]),n("ul",[n("li",[t._v("View：界面")]),n("li",[t._v("Model：数据模型")]),n("li",[t._v("ViewModel：作为桥梁负责沟通 View 和 Model")])]),n("p",[t._v("在 JQuery 时期，如果需要刷新 UI 时，需要先取到对应的 DOM 再更新 UI，这样数据和业务的逻辑就和页面有强耦合。\n在 MVVM 中，UI 是通过数据驱动的，数据一旦改变就会相应的刷新对应的 UI，UI 如果改变，也会改变对应的数据。这种方式就可以在业务处理中只关心数据的流转，而无需直接和页面打交道。ViewModel 只关心数据和业务的处理，不关心 View 如何处理数据，在这种情况下，View 和 Model 都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可复用的逻辑放在一个 ViewModel 中，让多个 View 复用这个 ViewModel。\n在 MVVM 中，最核心的也就是数据双向绑定，例如 Angluar 的脏数据检测，Vue 中的数据劫持。")]),n("h3",{attrs:{id:"路由鉴权"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由鉴权","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由鉴权")]),n("ul",[n("li",[t._v("登录页和其他页面分开，登录以后实例化 Vue 并且初始化需要的路由")]),n("li",[t._v("动态路由，通过 addRoute 实现")])]),n("h3",{attrs:{id:"vue-和-react-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-和-react-区别","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 和 React 区别")]),n("ul",[n("li",[t._v("Vue 表单支持双向绑定开发更方便")]),n("li",[t._v("改变数据方式不同，setState 有使用坑")]),n("li",[t._v("props Vue 可变，React 不可变")]),n("li",[t._v("判断是否需要更新 React 可以通过钩子函数判断，Vue 使用依赖追踪，修改了什么才渲染什么")]),n("li",[t._v("React 16以后 有些钩子函数会执行多次")]),n("li",[t._v("React 需要使用 JSX，需要 Babel 编译。Vue 虽然可以使用模板，但是也可以通过直接编写 render 函数不需要编译就能运行。")]),n("li",[t._v("生态 React 相对较好")])])])}],e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=r.exports}}]);