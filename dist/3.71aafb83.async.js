(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{zXjN:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("o0o1")),u=n(a("MVZn")),c=r(a("tHhv")),p={namespace:"users",state:{list:[],total:null,page:null},reducers:{save(e,t){var a=t.payload,r=a.data,n=a.total,s=a.page;return(0,u.default)({},e,{list:r,total:n,page:s})}},effects:{fetch:s.default.mark(function e(t,a){var r,n,u,p,l,o,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload.page,n=void 0===r?1:r,u=a.call,p=a.put,e.next=4,u(c.fetch,{page:n});case 4:return l=e.sent,o=l.data,d=l.headers,e.next=9,p({type:"save",payload:{data:o,total:parseInt(d["x-total-count"],10),page:parseInt(n,10)}});case 9:case"end":return e.stop()}},e,this)}),remove:s.default.mark(function e(t,a){var r,n,u,p,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,p=a.select,e.next=4,n(c.remove,r);case 4:return e.next=6,p(e=>e.users.page);case 6:return l=e.sent,e.next=9,u({type:"fetch",payload:{page:l}});case 9:case"end":return e.stop()}},e,this)}),patch:s.default.mark(function e(t,a){var r,n,u,p,l,o,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=r.id,u=r.values,p=a.call,l=a.put,o=a.select,e.next=4,p(c.patch,n,u);case 4:return e.next=6,o(e=>e.users.page);case 6:return d=e.sent,e.next=9,l({type:"fetch",payload:{page:d}});case 9:case"end":return e.stop()}},e,this)}),create:s.default.mark(function e(t,a){var r,n,u,p,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,p=a.select,e.next=4,n(c.create,r);case 4:return e.next=6,p(e=>e.users.page);case 6:return l=e.sent,e.next=9,u({type:"fetch",payload:{page:l}});case 9:case"end":return e.stop()}},e,this)})},subscriptions:{setup(e){var t=e.dispatch,a=e.history;return a.listen(e=>{var a=e.pathname,r=e.query;"/users"===a&&t({type:"fetch",payload:r})})}}};t.default=p}}]);