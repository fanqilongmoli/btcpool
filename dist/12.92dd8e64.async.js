(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{A0qh:function(e,t,a){e.exports={normal:"normal___2M-6v",content:"content___nS3bb",main:"main___2DlXA",qrcode:"qrcode___a6U2H",qrpic:"qrpic___39sPu",name:"name___2lefU"}},GVD7:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var n=l(a("CtXQ"));a("lUTK");var d=l(a("BvKs")),u=l(a("q1tI")),r=l(a("mOP9")),f=(d.default.SubMenu,d.default.ItemGroup),o=e=>{var t=e.onMenuClick,a=e.selectedKeys;return u.default.createElement(d.default,{mode:"inline",theme:"dark",defaultSelectedKeys:[a],style:{height:"100%",background:"#262835"}},u.default.createElement(d.default.Item,{key:"1",onClick:()=>{t("1")}},u.default.createElement(r.default,{to:"/dashboard"},u.default.createElement(n.default,{type:"desktop"}),u.default.createElement("span",null,"\u72b6\u6001\u603b\u89c8"))),u.default.createElement(d.default.Item,{key:"2",onClick:()=>{t("2")}},u.default.createElement(r.default,{to:"/buy-power"},u.default.createElement(n.default,{type:"shopping-cart"}),u.default.createElement("span",null,"\u8d2d\u4e70\u7b97\u529b"))),u.default.createElement(d.default.Item,{key:"3",onClick:()=>{t("3")}},u.default.createElement(r.default,{to:"/withdraw"},u.default.createElement(n.default,{type:"desktop"}),u.default.createElement("span",null,"\u63d0\u73b0"))),u.default.createElement(f,{key:"g2",title:"\u8d26\u6237\u7ba1\u7406"},u.default.createElement(d.default.Item,{key:"4",onClick:()=>{t("4")}},u.default.createElement(r.default,{to:"/userinfo"},u.default.createElement(n.default,{type:"user"}),u.default.createElement("span",null,"\u4e2a\u4eba\u4fe1\u606f"))),u.default.createElement(d.default.Item,{key:"5",onClick:()=>{t("5")}},u.default.createElement(r.default,{to:"/update-password"},u.default.createElement(n.default,{type:"key"}),u.default.createElement("span",null,"\u4fee\u6539\u5bc6\u7801"))),u.default.createElement(d.default.Item,{key:"6",onClick:()=>{t("6")}},u.default.createElement(r.default,{to:"/address-manage"},u.default.createElement(n.default,{type:"database"}),u.default.createElement("span",null,"\u5730\u5740\u7ba1\u7406"))),u.default.createElement(d.default.Item,{key:"7",onClick:()=>{t("7")}},u.default.createElement(r.default,{to:"/common-problem"},u.default.createElement(n.default,{type:"question"}),u.default.createElement("span",null,"\u5e38\u89c1\u95ee\u9898")))))},c=o;t.default=c},GgRX:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var n=l(a("BMrR"));a("+L6B");var d=l(a("2/Rp"));a("Telt");var u=l(a("Tckk"));a("jCWc");var r=l(a("kPKH")),f=l(a("q1tI")),o=l(a("usdK")),c=(l(a("IGtV")),l(a("Aeqt"))),m=e=>{e.location;var t={color:"#FFF",fontSize:30,fontWeight:400,fontFamily:"Montserrat",lineHeight:"64px",cursor:"pointer"},a=()=>{window.localStorage.removeItem(`${c.default.prefix}username`),window.localStorage.removeItem(`${c.default.prefix}token`),o.default.push("/login")},l=window.localStorage.getItem(`${c.default.prefix}username`);return f.default.createElement("div",null,f.default.createElement(n.default,null,f.default.createElement(r.default,{span:6},f.default.createElement("span",{style:t},"\u8702\u9e1f\u79d1\u6280")),f.default.createElement(r.default,{span:17},f.default.createElement("div",{style:{float:"right",marginRight:20}},f.default.createElement(u.default,null,"User"),f.default.createElement("span",{style:{marginTop:10,marginLeft:5}},l))),f.default.createElement(r.default,{span:1},f.default.createElement(d.default,{type:"primary",icon:"logout",onClick:a},"\u6ce8\u9500"))))},i=m;t.default=i},IGtV:function(e,t,a){e.exports={header:"header___1KKEi",textlogo:"textlogo___1d1Jb",topbaricon:"topbaricon___3ATv1",topbaricon2:"topbaricon2___3yhrm"}},UMGs:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("sPJy");var n=l(a("bE4q")),d=l(a("q1tI")),u={"/dashboard":"\u72b6\u6001\u603b\u89c8","/buy-power":"\u8d2d\u4e70\u7b97\u529b","/withdraw":"\u63d0\u73b0","/userinfo":"\u4e2a\u4eba\u4fe1\u606f","/update-password":"\u4fee\u6539\u5bc6\u7801","/address-manage":"\u5730\u5740\u7ba1\u7406","/common-problem":"\u5e38\u89c1\u95ee\u9898"},r=e=>{var t=e.location;return console.log("location",t),d.default.createElement(n.default,null,d.default.createElement(n.default.Item,null,d.default.createElement("span",{style:{color:"#ffffff",fontSize:"20px",fontWeight:700}},"\u5f53\u524d\u6240\u5728\u4f4d\u7f6e : ",u[t.pathname])))},f=r;t.default=f},aArQ:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Ksrn");var n=l(a("MR/8")),d=l(a("q1tI")),u=l(a("utR0")),r=l(a("xc/l")),f=l(a("msaX")),o=(0,u.default)(e=>{return d.default.createElement(n.default,{locale:r.default},d.default.createElement(f.default,null,e.children))});t.default=o},msaX:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("B9cy");var n=l(a("Ol7k")),d=l(a("q1tI")),u=l(a("GVD7")),r=l(a("GgRX")),f=l(a("UMGs")),o=l(a("utR0")),c=a("MuoO"),m=l(a("Aeqt")),i=l(a("A0qh")),s=l(a("usdK")),p=n.default.Header,E=n.default.Content,y=n.default.Sider,g=e=>{var t=e.dispatch,a=e.children,l=e.location,o=e.app,c=o.selectedKeys,g={selectedKeys:c,onMenuClick(e){t({type:"app/updateState",payload:{selectedKeys:e}})}};return l.pathname===m.default.loginPage||l.pathname===m.default.register||l.pathname===m.default.forget?d.default.createElement("div",null,a):(null==window.localStorage.getItem(`${m.default.prefix}token`)&&l.pathname!==m.default.loginPage&&s.default.push("/login"),d.default.createElement("div",null,d.default.createElement(n.default,null,d.default.createElement(p,{style:{position:"fixed",zIndex:1,width:"100%",background:"#262835"}},d.default.createElement(r.default,null)),d.default.createElement(n.default,{style:{background:"#131720",marginTop:64}},d.default.createElement(y,{width:200,style:{height:"100vh"}},d.default.createElement(u.default,g)),d.default.createElement(E,{style:{padding:"24px",minHeight:280}},d.default.createElement(f.default,{location:l}),a))),d.default.createElement("div",{className:i.default.qrcode},d.default.createElement("span",{className:i.default.name},"\u7acb\u5373\u54a8\u8be2"),d.default.createElement("div",{className:i.default.qrpic}))))},v=(0,o.default)((0,c.connect)(e=>{var t=e.app,a=e.loading;return{app:t,loading:a}})(g));t.default=v}}]);