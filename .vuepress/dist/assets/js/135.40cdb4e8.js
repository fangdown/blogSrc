(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{188:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/shunqixing/article/details/80189410",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信静默授权增加浏览器历史记录导致跳转死循环的解决方案"),n("OutboundLink")],1)]),t._m(11),t._m(12),n("p",[t._v("(./wxbackflow.png)[]")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"微信开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信开发","aria-hidden":"true"}},[this._v("#")]),this._v(" 微信开发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("验证微信客户端")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 是否微信客户端")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("isWxClient")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" microMessenger "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("match")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token regex"}},[t._v("/MicroMessenger/i")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" microMessenger"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'MicroMessenger'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("微信登录")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("简要流程：判断是否微信---\x3e判断有没有code---\x3e有code直接跳入登录接口---\x3e无code获取appid---\x3e微信鉴权---\x3e微信号返回的url中带code，继而登录。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("微信分享")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("简要流程：页面初始化执行微信初始化方法wx.config(obj), 点击了分享之后，执行wx.ready方法。成功执行success，失败执行fail")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token function"}},[t._v("wxInit")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" self "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        debug"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。")]),t._v("\n        appId"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appid"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 必填，公众号的唯一标识")]),t._v("\n        timestamp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsapi"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 必填，生成签名的时间戳")]),t._v("\n        nonceStr"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsapi"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("noncestr"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 必填，生成签名的随机串")]),t._v("\n        signature"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsapi"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signature"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 必填，签名")]),t._v("\n        jsApiList"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{attrs:{class:"token string"}},[t._v("'onMenuShareTimeline'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 朋友圈")]),t._v("\n          "),n("span",{attrs:{class:"token string"}},[t._v("'onMenuShareAppMessage'")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 聊天")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 必填，需要使用的JS接口列表")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      wx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("config")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      wx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ready")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" shareData "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'分享标题'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 分享标题")]),t._v("\n          desc"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'分享描述'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 分享描述")]),t._v("\n          link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'分享链接'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 分享链接")]),t._v("\n          imgUrl"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'分享图标'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 分享图标")]),t._v("\n          success"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'分享成功'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          fail"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'分享失败'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        wx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("onMenuShareTimeline")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shareData"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        wx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("onMenuShareAppMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shareData"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("微信后退引发的循环")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("主要是授权会增加历史记录，解决方法是写入一个sessionCode，并判断")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("微信后退流程")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);