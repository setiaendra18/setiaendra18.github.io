(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{333:function(t,n,e){"use strict";e.r(n);var r=e(25),c=(e(61),e(1),e(36),{name:"LuncPage",data:function(){return{totalSupply:0,circulatingSupply:0,burnWithTax:0,sendToBurnAdress:0}},fetch:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fcd.terra.dev/v1/totalsupply/luna").then((function(t){return t.json()}));case 2:return t.totalSupply=n.sent,n.next=5,fetch("https://fcd.terra.dev/v1/circulatingsupply/luna").then((function(t){return t.json()}));case 5:t.circulatingSupply=n.sent;case 6:case"end":return n.stop()}}),n)})))()})),activated:function(){this.$fetchState.timestamp<=Date.now()-1e3&&this.$fetch()}}),l=c,o=e(79),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"col-md-8 mx-auto mt-5"},[n("h3",[t._v("Luna Classic Pembakaran")]),t._v(" "),t.$fetchState.pending?n("b-spinner",{attrs:{variant:"success",label:"Spinning"}}):t.$fetchState.error?n("p",[t._v("Kesalahan dalam mengambil data")]):t._e(),t._v(" "),n("div",{staticClass:"row mx-auto"},[n("div",{staticClass:"col-md-4"},[n("b-card",{staticClass:"text-center"},[t._v("\n        "+t._s(t.totalSupply)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("b-card",{staticClass:"text-center"},[t._v("\n        "+t._s(t.circulatingSupply)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("b-card",{staticClass:"text-center"},[t._v("\n        "+t._s(t.burnWithTax)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"col-md-4 mt-4"},[n("b-card",{staticClass:"text-center"},[t._v("\n        "+t._s(t.sendToBurnAdress)+"\n      ")])],1)]),t._v(" "),n("b-button",{attrs:{variant:"outline-primary",to:"/"}},[t._v("home")])],1)}),[],!1,null,null,null);n.default=component.exports}}]);