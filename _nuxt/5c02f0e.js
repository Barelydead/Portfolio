(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{252:function(t,e){},254:function(t,e){},321:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(40),r(243).createClient({space:"sa97anny452q",accessToken:"LA9etq8ahCr7Fnlc7Lcabd8SjFDPmEHTAwkEwwdelLI"})),l={asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.getEntries();case 2:return e=t.sent,t.abrupt("return",{projects:e.items});case 4:case"end":return t.stop()}}),t)})))()}},o=r(33),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container px-6 py-4 mx-auto"},[r("div",{staticClass:"grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2"},t._l(t.projects,(function(e){return r("div",{key:e.id,staticClass:"flex p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800"},[r("NuxtLink",{attrs:{to:"/projects/"+e.fields.slug}},[r("img",{staticClass:"w-45 rounded-md border-2 border-gray-300",attrs:{alt:"mountain",src:e.fields.image.fields.file.url}}),t._v(" "),r("div",{staticClass:"flex flex-col ml-5 pt-5",attrs:{id:"body"}},[r("h4",{staticClass:"text-xl font-semibold mb-2",attrs:{id:"name"}},[t._v(t._s(e.fields.title))]),t._v(" "),r("p",{staticClass:"text-gray-800 mt-2",attrs:{id:"job"}},[t._v(t._s(e.fields.intro))])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);