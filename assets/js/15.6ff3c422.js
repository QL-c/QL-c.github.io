(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{416:function(e,t,r){"use strict";r.r(t);var v=r(33),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue2和vue3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue2和vue3"}},[e._v("#")]),e._v(" vue2和vue3")]),e._v(" "),r("h3",{attrs:{id:"_1-为什么vue3中定义响应式数据要分别用ref-和reactive-来定义-显得更复杂了。vue2中统一定义在data-中-它不香吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么vue3中定义响应式数据要分别用ref-和reactive-来定义-显得更复杂了。vue2中统一定义在data-中-它不香吗"}},[e._v("#")]),e._v(" 1.   为什么vue3中定义响应式数据要分别用ref()和reactive()来定义，显得更复杂了。vue2中统一定义在data(){}中，它不香吗？")]),e._v(" "),r("p",[e._v("个人理解：")]),e._v(" "),r("p",[e._v("第一点，效率")]),e._v(" "),r("p",[e._v("Vue2-------所有数据都遍历绑定getter和setter")]),e._v(" "),r("p",[e._v("Vue3-------提升效率-------选择性绑定getter和setter------所以有了ref()")]),e._v(" "),r("p",[e._v("第二点，解决vue2添加和删除，界面不更新的小bug")]),e._v(" "),r("p",[e._v("Vue2------对于复杂数据类型，后添加删除的属性（指按下标模式添加或删除的）未绑定getter和setter-------vue2不能监测到------界面不更新")]),e._v(" "),r("p",[e._v("Vue3------为了解决vue2不监听添加删除属性的问题-------有了reactive()--------底层采用代理Proxy-----Proxy可以拦截对象中任意属性的变化。")]),e._v(" "),r("h3",{attrs:{id:"_2-既然proxy这么好-为什么底层不统一都用proxy-而是ref-用object-defineproperty-延续vue2的操作-reactive-用代理proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-既然proxy这么好-为什么底层不统一都用proxy-而是ref-用object-defineproperty-延续vue2的操作-reactive-用代理proxy"}},[e._v("#")]),e._v(" 2.   既然Proxy这么好，为什么底层不统一都用Proxy？而是ref()用Object.defineProperty()延续vue2的操作，reactive()用代理Proxy？")]),e._v(" "),r("p",[e._v("个人理解：")]),e._v(" "),r("p",[e._v("因为普通数据不具有深层次结构，使用简单的setter和getter就足以实现响应式。对于普通数据使用Proxy就显得累赘了。")]),e._v(" "),r("h3",{attrs:{id:"_3-为什么vue2的data-和vue3的ref-底层都是用的object-defineproperty-但vue3的ref-后的数据要加上-value才能使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么vue2的data-和vue3的ref-底层都是用的object-defineproperty-但vue3的ref-后的数据要加上-value才能使用"}},[e._v("#")]),e._v(" 3.   为什么vue2的data(){}和vue3的ref()底层都是用的Object.defineProperty()，但vue3的ref()后的数据要加上.value才能使用？")]),e._v(" "),r("p",[e._v("个人理解：")]),e._v(" "),r("p",[e._v("因为ref()函数返回的是一个RefImpl{…}对象，我们定义的值存在对象里的value中。而vue2中的数据经过数据代理挂载在VueComponent实例中，所以使用时直接this.xxx就可以了。")]),e._v(" "),r("h3",{attrs:{id:"_4-为什么proxy代理中返回值要用-反射reflect实现对源对象的操作-直接操作不是更简单吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-为什么proxy代理中返回值要用-反射reflect实现对源对象的操作-直接操作不是更简单吗"}},[e._v("#")]),e._v(" 4.   为什么Proxy代理中返回值要用 反射Reflect实现对源对象的操作？直接操作不是更简单吗？")]),e._v(" "),r("p",[e._v("个人理解：对于框架底层编码来说，用Reflect更方便捕获错误，可以少写一些try…catch。")])])}),[],!1,null,null,null);t.default=a.exports}}]);