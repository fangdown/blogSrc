(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{211:function(t,i,e){"use strict";e.r(i);var r=e(0),l=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"网页渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页渲染过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 网页渲染过程")]),e("ul",[e("li",[t._v("浏览器输入url")]),e("li",[t._v("浏览器dns缓存/系统缓存/dns域名服务器，把url解析成ip")]),e("li",[t._v("经过互联网路由到达目的主机")]),e("li",[t._v("服务器接受http request, 进行处理，返回http response")]),e("li",[t._v("返回浏览器端")]),e("li",[t._v("浏览器接受数据，并开始解析html代码，生成DOM树")])]),e("ol",[e("li",[t._v("编码，将原始字节转换成指定编码的字符")]),e("li",[t._v("令牌化， 令牌记录了各种标签的开始和结束，子标签")]),e("li",[t._v("生成对象，转换成定义其属性和规则的对象（节点对象）")]),e("li",[t._v("构建完毕")]),e("li",[t._v("过程：字节 -> 字符 -> 令牌 -> 节点对象 -> 对象模型\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/4/f54c2e8a987ca569b109c0be017ce348?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),e("ul",[e("li",[t._v("遇到css外链或内联样式，构建CSSOM树\n过程和DOM过程差不多")]),e("li",[t._v("构建渲染树\nDOM树和CSSOM树目前是独立的对象集合")])]),e("ol",[e("li",[t._v("从html根节点开始遍历")]),e("li",[t._v("对每个可见节点，找到CSSOM树对应的规则并应用")]),e("li",[t._v("渲染树构建完成，每个节点都是可见节点并且都包含有其内容和对应规则的样式\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/4/65cb9084be1f3bc63562783920428926?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),e("ul",[e("li",[e("p",[t._v("布局阶段\n根据盒模型，捕获每个元素在屏幕内的确切位置和大小，所对应的测量值也会被转换成屏幕内的绝对值"),e("br"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/4/30c2e9328953b451f1b3115831f2e19e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),e("li",[e("p",[t._v("绘制阶段\n布局完成后，浏览器会立即发出Paint Setup与Paint事件，开始将渲染树绘制成像素，绘制的时间和css的复杂度成正比")])]),e("li",[e("p",[t._v("javascript\n遇到JavaScript会暂停DOM构建，先进行JavaScript计算，计算完成再继续DOM构建\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/4/9f62e5ca06db1529bbf7a0ead7350fef?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])])])])}],!1,null,null,null);i.default=l.exports}}]);