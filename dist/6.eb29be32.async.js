(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0e1J":function(e,t,a){"use strict";var n=a("284h"),s=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(a("o0o1")),r=n(a("PiK8")),i=s(a("Aeqt")),u={namespace:"login",state:{},reducers:{},effects:{login:o.default.mark(function e(t,a){var n,s,u;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,a.put,e.next=4,s(r.login,n);case 4:u=e.sent,window.localStorage.setItem(`${i.default.prefix}token`,u.token),window.localStorage.setItem(`${i.default.prefix}username`,u.username);case 7:case"end":return e.stop()}},e,this)})},subscriptions:{setup(e){e.dispatch,e.history}}};t.default=u}}]);