(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{169:function(t,a,s){"use strict";s.r(a);var n=s(0),p=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"优化策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化策略","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化策略")]),s("h3",{attrs:{id:"网络加载类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络加载类","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络加载类")]),s("p",[t._v("1、减少 HTTP 资源请求次数")]),s("p",[t._v("合并静态资源图片、JavaScript 或 CSS 代码，减少页面请求数和资源请求消耗")]),s("p",[t._v("避免重复的资源，防止增加多余请求")]),s("p",[t._v("2、减小 HTTP 请求大小")]),s("p",[t._v("减少没必要的图片、JavaScript、CSS 及 HTML 代码")]),s("p",[t._v("对文件进行压缩优化")]),s("p",[t._v("使用 gzip 等方式压缩传输文件")]),s("p",[t._v("3、将 CSS 或 JavaScript 放到外部文件中，避免使用 "),s("code",[t._v("<style>")]),t._v(" 或 "),s("code",[t._v("<script>")]),t._v(" 标签直接引入")]),s("p",[t._v("在 HTML 文件中引用外部资源可以有效利用浏览器的静态资源缓存")]),s("p",[t._v("4、避免页面中空的 href 和 src\n当 "),s("code",[t._v("<link>")]),t._v(" 标签的 href 属性为空，或 "),s("code",[t._v("<script>、<img>、<iframe>")]),t._v("标签的 src 属性为空时，浏览器在渲染的过程中仍会将 href 属性或 src 属性中的空内容进行加载，直至加载失败，这样就阻塞了页面中其他资源的下载进程，而且最终加载到的内容是无效的，因此要尽量避免当 "),s("code",[t._v("<link>")]),t._v(" 标签的 href 属性为空，或 "),s("code",[t._v("<script>、<img>、<iframe>")]),t._v("标签的 src 属性为空时，浏览器在渲染的过程中仍会将 href 属性或 src 属性中的空内容进行加载，直至加载失败，这样就阻塞了页面中其他资源的下载进程，而且最终加载到的内容是无效的，因此要尽量避免")]),s("p",[t._v("5、为 HTML 指定 Cache-Control 或 Expires")]),s("p",[t._v("为 HTMl 内容设置 CaChe-Control 或 Expires 可以将 HTML 内容缓存起来，避免频繁向服务器端发送请求。")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cache-Control"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("max-age=7200"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Expires"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Mon, 20 Jul 2016 23:00:00 GMT"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("6、合理设置 Etag 和 Last-Modified")]),s("p",[t._v("合理设置 Etag 和 Last-Modified 使用浏览器缓存，对于未修改的文件，静态资源服务器会向浏览器端返回304，让浏览器从缓存中读取文件，减少 Web 资源下载的带宽消耗并降低服务器负载")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("last-modified"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Mon, 03 Oct 2016 17:45:57 GMT"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("7、减少页面重定向")]),s("p",[t._v("页面每次重定向都会延长页面内容返回的等待延时，一次重定向大约需要600毫秒的时间开销，为了保证用户尽快看到页面内容，要尽量避免页面重定向")]),s("p",[t._v("8、使用静态资源分域存放来增加下载并行数")]),s("p",[t._v("浏览器在同一时刻向同一个域名请求文件的并行下载数是有限的，因此可以利用多个域名的主机来存放不同的静态资源，增大页面加载时资源的并行下载数，缩短页面资源加载的时间")]),s("p",[t._v("9、使用静态资源 CDN 来存储文件")]),s("p",[t._v("如果条件允许，可以使用 CDN 网络加快同一个地理区域内重复静态资源文件的响应下载速度，缩短资源请求时间")]),s("p",[t._v("10、使用 CDN Combo 下载传输内容")]),s("p",[t._v("CDN Combo 是在 CDN 服务器端将多个文件请求打包成一个文件的形式来返回的技术，这样可以实现 HTTP 连接传输的一次性复用，减少浏览器的 HTTP 请求数，加快资源下载速度。")]),s("p",[t._v("例如同一个域名 CDN 服务器上的 a.js，b.js，c.js 就可以按如下方式在一个请求中下载：")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//cdn.domain.com/path/a.js,b.js,c.js"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("11、使用可缓存的 AJAX")]),s("p",[t._v("可以返回内容相同的请求，没必要每次都直接从服务器端拉取，合理使用 AJAX 缓存能加快 AJAX 响应速度来减轻服务器压力")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ajax")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'get'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   cache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 推荐使用缓存")]),t._v("\n   data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token function"}},[t._v("success")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token function"}},[t._v("error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("12、使用 GET 来完成 AJAX 请求")]),s("p",[t._v("使用 XMLHttpRequest 时，浏览器中的 POST 方法发送请求首先发送文件头，然后发送 HTTP 正文数据，而使用 GET 时只发送头部，所以在拉取服务端数据时使用 GET 请求效率更高")]),s("p",[t._v("13、减少 Cookie 的大小并进行 Cookie 隔离")]),s("p",[t._v("HTTP 请求通常默认带上浏览器的 Cookie 一起发送给服务器，所以在非必要的情况下，要尽量减少 Cookie 来减小 HTTP 请求的大小")]),s("p",[t._v("对应静态资源，尽量使用不同的域名来存放，因为 Cookie 默认不能跨域的，这样就做到了不同域名下静态资源请求的 Cookie 隔离")]),s("p",[t._v("14、缩小 favicon.ico 并缓存")]),s("p",[t._v("有利于 favicon.ico 的重复加载，因为一般一个 Web 应用的 favicon.ico 是很少改变的")]),s("p",[t._v("15、推荐使用异步 JavaScript 资源")]),s("p",[t._v("异步的 JavaScript 资源不会阻塞文档解析，所以允许在浏览器中优先渲染页面，延后加载脚本执行。例如：")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main.js"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("defer")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main.js"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("async")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("使用 async 时，加载和渲染后续文档元素的过程和 main.js 的加载与执行是并行的。")]),s("p",[t._v("使用 defer 时，加载后续文档元素的过程和 main.js 的加载是并行的，但是 main.js 的执行要在页面所有元素解析完成之后才开始执行。")]),s("p",[t._v("16、消除阻塞渲染的 CSS 及 JavaScript")]),s("p",[t._v("对于页面中加载时间过长的 CSS 或 JavaScript 文件，需要进行合理拆分或延后加载，保证关键路径的资源能快速加载完成")]),s("p",[t._v("17、避免使用 CSS import 引用加载 CSS")]),s("p",[t._v("CSS 中的 @import 可以从另一个样式文件引入样式，但应该避免这种用法，因为这样会增加 CSS 资源加载的关键路径长度，带有 @import 的 CSS 样式需要在 CSS 文件串行解析到 @import 时才会加载另外的 CSS 文件，大大延后 CSS 渲染完成的时间")]),s("h3",{attrs:{id:"页面渲染类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染类","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面渲染类")]),s("p",[t._v("1、把 CSS 资源引用放到 HTML 文件顶部")]),s("p",[t._v("一般推荐将所有 CSS 资源尽早指定在 HTML 文档 中，这样浏览器可以优先下载 CSS 并尽早完成页面渲染")]),s("p",[t._v("2、JavaScript 资源引用放到 HTML 文件底部")]),s("p",[t._v("JavaScript 资源放到 HTML 文档底部可以防止 JavaScript 的加载和解析执行对页面渲染造成阻塞，这是因为 JavaScript 资源默认是解析阻塞的，除非被标记为异步或者通过其他的异步方式加载")]),s("p",[t._v("3、不要在 HTML 中直接缩放图片")]),s("p",[t._v("在 HTML 中直接缩放图片会导致页面的重排重绘，此时可能会使页面中的其他操作产生卡顿，因此要尽量减少在页面中直接进行图片缩放")]),s("p",[t._v("4、减少 DOM 元素数量和深度")]),s("p",[t._v("HTML 中标签元素越多，标签的层级越深，浏览器解析 DOM 并绘制到浏览器中所花的时间就越长，所以尽可能保持 DOM 元素简洁和层级较少")]),s("p",[t._v("5、尽量避免使用 "),s("table",[t._v("、"),s("iframe",[t._v(" 等慢元素")])])]),s("p",[s("table",[t._v("内容的渲染是将 table 的 DOM 渲染树全部生成完成并一次性绘制到页面上的，所以在长表格渲染时很耗性能，应该尽量避免使用它，可以考虑使用列表元素 "),s("ul",[t._v(" 代替")])])]),s("p",[t._v("尽量使用异步的方式动态添加 iframe，因为 iframe 内资源的下载进程会阻塞父页面静态资源的下载与 CSS 及 HTML DOM 的解析")]),s("p",[t._v("6、避免运行耗时的 JavaScript")]),s("p",[t._v("长时间运行的 JavaScript 会阻塞浏览器构建 DOM 树、DOM 渲染树、渲染页面。所以，任何与页面初次渲染无关的逻辑功能都应该延迟加载执行，这和 JavaScript 资源的异步加载思路是一致的")]),s("p",[t._v("7、避免使用 CSS 表达式或 CSS 滤镜")]),s("p",[t._v("CSS 表达式或 CSS 滤镜的解析渲染速度是比较慢的，在有其他解决方案的情况下应该尽量避免使用")])])}],!1,null,null,null);a.default=p.exports}}]);