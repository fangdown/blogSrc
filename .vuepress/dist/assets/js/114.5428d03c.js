(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{219:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"垃圾回收"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收","aria-hidden":"true"}},[t._v("#")]),t._v(" 垃圾回收")]),r("p",[t._v("V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。")]),r("h3",{attrs:{id:"新生代算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新生代算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 新生代算法")]),r("p",[t._v("新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。\n在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。")]),r("h3",{attrs:{id:"老生代算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#老生代算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 老生代算法")])])}],!1,null,null,null);a.default=s.exports}}]);