(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"Vi+m":function(e,t,s){"use strict";var a=s("284h"),r=s("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("MVZn")),u=r(s("o0o1"));s("miYZ");var c=r(s("tsqr")),i=a(s("tRUG")),d={namespace:"register",state:{status:void 0},effects:{register:u.default.mark(function e(t,s){var a,r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=s.call,s.put,e.next=4,r(i.register,a);case 4:e.sent,c.default.success("\u6ce8\u518c\u6210\u529f");case 6:case"end":return e.stop()}},e,this)}),sms:u.default.mark(function e(t,s){var a,r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=s.call,s.put,e.next=4,r(i.sms,a);case 4:e.sent,c.default.success("\u83b7\u53d6\u9a8c\u8bc1\u7801\u6210\u529f");case 6:case"end":return e.stop()}},e,this)})},reducers:{registerHandle(e,t){var s=t.payload;return(0,n.default)({},e,{status:s.status})}}};t.default=d}}]);