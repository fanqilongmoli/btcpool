(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{rylq:function(e,t,a){"use strict";var r=a("284h"),s=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a("o0o1"));a("miYZ");var d=s(a("tsqr")),u=s(a("MVZn")),c=r(a("PvZf")),p=(s(a("Aeqt")),{namespace:"withdraw",state:{data:{}},reducers:{updateState(e,t){var a=t.payload;return(0,u.default)({},e,a)}},effects:{withdraw:n.default.mark(function e(t,a){var r,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,a.put,e.next=4,s(c.withdraw,r);case 4:e.sent,d.default.success("\u7533\u8bf7\u63d0\u73b0\u6210\u529f");case 6:case"end":return e.stop()}},e,this)}),getAddress:n.default.mark(function e(t,a){var r,s,d,u;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.payload,r=a.call,s=a.put,e.next=4,r(c.getAddress);case 4:return d=e.sent,u=d.data,e.next=8,s({type:"updateState",payload:{data:u}});case 8:case"end":return e.stop()}},e,this)})},subscriptions:{setup(e){var t=e.dispatch,a=e.history;return a.listen(e=>{var a=e.pathname;e.query;"/withdraw"===a&&t({type:"getAddress"})})}}});t.default=p}}]);