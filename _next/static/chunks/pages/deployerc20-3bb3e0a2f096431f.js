(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{8448:function(e,n,t){"use strict";t.d(n,{M:function(){return a}});var r=t(1440),s=t(3808);t(7294);var a=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});s.Ts&&(a.displayName="Center")},8736:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deployerc20",function(){return t(3612)}])},3612:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Q}});var r=t(5893),s=t(8017),a=t(7150),o=t(1539),i=t(58),l=t(5079),c=t(7086),u=t(1440),d=t(7294),x=t(5434),h=t(9327),p=t(9583),f=t(9227),m=t(6766),j=t(3666),g=t(5666),C=t.n(g),v=t(4056),b=t(9725),y=t(6618),w=t(1962),S=t(336),k=t(9345),I=t(8448),E=t(4003),P=t(6893),N=t(2517),R=t(9157),T=t(8494);function M(e,n,t,r,s,a,o){try{var i=e[a](o),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,s)}function z(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function o(e){M(a,r,s,o,i,"next",e)}function i(e){M(a,r,s,o,i,"throw",e)}o(void 0)}))}}function _(){return(_=z(C().mark((function e(n,t,r,s){var a,o;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==r&&(r="210000000000"),""==s&&(s="10000"),""!==n&&""!==t){e.next=5;break}return(0,N.s)("DeployERC20","Invalid amount!"),e.abrupt("return",!1);case 5:return e.next=7,(0,R.O9)(n,t,r,s);case 7:if(a=e.sent,console.log(a),!(0,T.aT)()){e.next=23;break}return e.prev=10,e.next=13,window.ethereum.request({method:"eth_sendTransaction",params:[a.tx]});case 13:return o=e.sent,e.abrupt("return",(0,N.r)("Transfer","Transaction sent with hash: ".concat(o)));case 17:e.prev=17,e.t0=e.catch(10),console.error(e.t0),(0,N.s)("Transfer","Metamask error on submitting transaction");case 21:e.next=25;break;case 23:return(0,N.s)("Transfer","ERC20 token transfers are only available on metamask!"),e.abrupt("return",!1);case 25:case"end":return e.stop()}}),e,null,[[10,17]])})))).apply(this,arguments)}var Z=function(){var e=(0,d.useState)(""),n=e[0],t=e[1],s=(0,d.useState)(""),a=s[0],o=s[1],i=(0,d.useState)("210000000000"),u=i[0],x=i[1],h=(0,d.useState)("10000"),p=h[0],f=h[1];return(0,r.jsxs)(l.gC,{p:10,alignItems:"flex-start",border:"1px",h:"full",borderRadius:25,children:[(0,r.jsx)(S.X,{size:"md",children:"ERC20 Contract"}),(0,r.jsx)(E.i,{}),(0,r.jsxs)(c.M,{columns:[1,2],columnGap:3,rowGap:6,w:"full",children:[(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"destSendControl",children:[(0,r.jsx)(y.l,{id:"destSend",children:"Name"}),(0,r.jsx)(w.I,{placeholder:"Hanchon",type:"text",onChange:function(e){return t(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"amountSendControl",children:[(0,r.jsx)(y.l,{id:"amountSend",children:"Symbol"}),(0,r.jsx)(w.I,{placeholder:"HCH",type:"text",onChange:function(e){return o(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,1],children:(0,r.jsxs)(b.NI,{id:"gascontrol",children:[(0,r.jsx)(y.l,{id:"gaslabel",children:"Gas(Optional)"}),(0,r.jsx)(w.I,{placeholder:"210000000000",type:"number",onChange:function(e){return x(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,1],children:(0,r.jsxs)(b.NI,{id:"gaspricecontrol",children:[(0,r.jsx)(y.l,{id:"gaspricelabel",children:"GasPrice(Optional)"}),(0,r.jsx)(w.I,{placeholder:"10000",type:"number",onChange:function(e){return f(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],h:"full",children:(0,r.jsx)(I.M,{w:"full",children:(0,r.jsx)(b.NI,{id:"buttonSendControl",children:(0,r.jsxs)(v.z,{w:"full",bg:"teal.300",color:"white",onClick:function(){!function(e,n,t,r){_.apply(this,arguments)}(n,a,u,p)},children:["Deploy ERC20"," ",(0,r.jsx)(P.LbG,{style:{marginLeft:"5px"}})]})})})})]})]})},G=t(4239),L=t(5902),O=t(3283);function W(e,n,t,r,s,a,o){try{var i=e[a](o),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,s)}function A(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function o(e){W(a,r,s,o,i,"next",e)}function i(e){W(a,r,s,o,i,"throw",e)}o(void 0)}))}}function D(){return(D=A(C().mark((function e(n,t,r,s,a){var o,i;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==s&&(s="21000000"),""==a&&(a="10000"),2==n.split("0x").length){e.next=5;break}return(0,N.s)("Mint ERC20","Invalid Contract!"),e.abrupt("return",!1);case 5:if(2!=t.split("evmos1").length){e.next=9;break}t=(0,O.e7)(t),e.next=12;break;case 9:if(2==t.split("0x").length){e.next=12;break}return(0,N.s)("Mint ERC20","Invalid Contract!"),e.abrupt("return",!1);case 12:if(NaN!==Number(r)){e.next=15;break}return(0,N.s)("Mint ERC20","Invalid amount!"),e.abrupt("return",!1);case 15:return e.next=17,(0,R.mf)(n,t,r,s,a);case 17:if(o=e.sent,!(0,T.aT)()){e.next=32;break}return e.prev=19,e.next=22,window.ethereum.request({method:"eth_sendTransaction",params:[o.tx]});case 22:return i=e.sent,e.abrupt("return",(0,N.r)("MintERC20","Transaction sent with hash: ".concat(i)));case 26:e.prev=26,e.t0=e.catch(19),console.error(e.t0),(0,N.s)("MintERC20","Metamask error on submitting transaction");case 30:e.next=34;break;case 32:return(0,N.s)("MintERC20","ERC20 minting is only available on metamask!"),e.abrupt("return",!1);case 34:case"end":return e.stop()}}),e,null,[[19,26]])})))).apply(this,arguments)}var F=function(){var e=(0,d.useState)(""),n=e[0],t=e[1],s=(0,d.useState)(""),a=s[0],o=s[1],i=(0,d.useState)(""),u=i[0],x=i[1],h=(0,d.useState)("21000000"),p=h[0],f=h[1],m=(0,d.useState)("10000"),j=m[0],g=m[1];return(0,r.jsxs)(l.gC,{p:10,alignItems:"flex-start",border:"1px",h:"full",borderRadius:25,children:[(0,r.jsx)(S.X,{size:"md",children:"Mint ERC20"}),(0,r.jsx)(E.i,{}),(0,r.jsxs)(c.M,{columns:[1,2],columnGap:3,rowGap:6,w:"full",children:[(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"destSendControl",children:[(0,r.jsx)(y.l,{id:"destSend",children:"Contract address"}),(0,r.jsx)(w.I,{placeholder:"0x..",type:"text",onChange:function(e){return t(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"destSendControl",children:[(0,r.jsx)(y.l,{id:"destSend",children:"Destination address"}),(0,r.jsx)(w.I,{placeholder:"0x../evmos1...",type:"text",onChange:function(e){return o(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"amountSendControl",children:[(0,r.jsx)(y.l,{id:"amountSend",children:"Amount"}),(0,r.jsx)(w.I,{placeholder:"10000",type:"number",onChange:function(e){return x(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,1],children:(0,r.jsxs)(b.NI,{id:"gascontrol",children:[(0,r.jsx)(y.l,{id:"gaslabel",children:"Gas(Optional)"}),(0,r.jsx)(w.I,{placeholder:"21000000",type:"number",onChange:function(e){return f(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,1],children:(0,r.jsxs)(b.NI,{id:"gaspricecontrol",children:[(0,r.jsx)(y.l,{id:"gaspricelabel",children:"GasPrice(Optional)"}),(0,r.jsx)(w.I,{placeholder:"10000",type:"number",onChange:function(e){return g(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],h:"full",children:(0,r.jsx)(I.M,{w:"full",children:(0,r.jsx)(b.NI,{id:"buttonRegisterERC20",children:(0,r.jsxs)(v.z,{w:"full",bg:"teal.300",color:"white",onClick:function(){!function(e,n,t,r,s){D.apply(this,arguments)}(n,a,u,p,j)},children:["Mint Coins"," ",(0,r.jsx)(P.LbG,{style:{marginLeft:"5px"}})]})})})})]})]})};function $(e,n,t,r,s,a,o){try{var i=e[a](o),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,s)}function X(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function o(e){$(a,r,s,o,i,"next",e)}function i(e){$(a,r,s,o,i,"throw",e)}o(void 0)}))}}function q(){return(q=X(C().mark((function e(n,t,r,s,a){var o,i,l;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),""==s&&(s="21000000"),""==a&&(a="10000"),null!=(o=(0,T.pj)())){e.next=7;break}return(0,N.s)("Transfer","Invalid user wallet!"),e.abrupt("return",!1);case 7:if(NaN!==Number(r)){e.next=10;break}return(0,N.s)("Transfer","Invalid amount!"),e.abrupt("return",!1);case 10:return e.next=12,(0,R.aV)(o,t,n,r,s,a);case 12:if(i=e.sent,!(0,T.aT)()){e.next=27;break}return e.prev=14,e.next=17,window.ethereum.request({method:"eth_sendTransaction",params:[i.tx]});case 17:return l=e.sent,e.abrupt("return",(0,N.r)("Transfer","Transaction sent with hash: ".concat(l)));case 21:e.prev=21,e.t0=e.catch(14),console.error(e.t0),(0,N.s)("Transfer","Metamask error on submitting transaction");case 25:e.next=29;break;case 27:return(0,N.s)("Transfer","ERC20 token transfers are only available on metamask!"),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[14,21]])})))).apply(this,arguments)}var H=function(){var e=(0,d.useState)(""),n=e[0],t=e[1],s=(0,d.useState)(""),a=s[0],o=s[1],i=(0,d.useState)(""),u=i[0],x=i[1],h=(0,d.useState)("21000000"),p=h[0],f=h[1],m=(0,d.useState)("10000"),j=m[0],g=m[1];return(0,r.jsxs)(l.gC,{p:10,alignItems:"flex-start",border:"1px",borderRadius:25,children:[(0,r.jsx)(S.X,{size:"md",children:"Transfer ERC20 Token"}),(0,r.jsx)(E.i,{}),(0,r.jsxs)(c.M,{columns:[1,2],columnGap:3,rowGap:6,w:"full",children:[(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"destSendControl",children:[(0,r.jsx)(y.l,{id:"destSend",children:"Contract Address"}),(0,r.jsx)(w.I,{placeholder:"0x..",type:"text",onChange:function(e){t(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"destSendControl2",children:[(0,r.jsx)(y.l,{id:"destSend2",children:"Transfer to: (wallet address)"}),(0,r.jsx)(w.I,{placeholder:"0x.. or evmos1...",type:"text",onChange:function(e){if(2==e.target.value.toLocaleLowerCase().split("0x").length)o(e.target.value);else if(2==e.target.value.toLocaleLowerCase().split("evmos1").length){var n="";try{n=(0,O.e7)(e.target.value),o(n)}catch(e){o("")}}else o("")}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],children:(0,r.jsxs)(b.NI,{id:"destSendControl",children:[(0,r.jsx)(y.l,{id:"destSend",children:"Amount:"}),(0,r.jsx)(w.I,{placeholder:"1",type:"number",onChange:function(e){x(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,1],children:(0,r.jsxs)(b.NI,{id:"gascontrol",children:[(0,r.jsx)(y.l,{id:"gaslabel",children:"Gas(Optional)"}),(0,r.jsx)(w.I,{placeholder:"21000000",type:"number",onChange:function(e){return f(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,1],children:(0,r.jsxs)(b.NI,{id:"gaspricecontrol",children:[(0,r.jsx)(y.l,{id:"gaspricelabel",children:"GasPrice(Optional)"}),(0,r.jsx)(w.I,{placeholder:"10000",type:"number",onChange:function(e){return g(e.target.value)}})]})}),(0,r.jsx)(k.P,{colSpan:[1,2],h:"full",children:(0,r.jsx)(I.M,{w:"full",children:(0,r.jsx)(b.NI,{id:"buttonSendControl",children:(0,r.jsxs)(v.z,{w:"full",bg:"teal.300",color:"white",onClick:function(){!function(e,n,t,r,s){q.apply(this,arguments)}(n,a,u,p,j)},children:["Transfer tokens"," ",(0,r.jsx)(P.LbG,{style:{marginLeft:"5px"}})]})})})})]})]})},V=t(3750);function B(){return(0,r.jsx)(L.Z,{content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(G.Z,{content:"ERC20"})," helper.",(0,r.jsx)("br",{}),"Deploy an ERC20 contract using ",(0,r.jsx)(G.Z,{content:"Open Zeppelin - ERC20PresetMinterPauser"}),"."]})})}function K(){return(0,r.jsx)(i.Z,{viewBox:"0 0 40 35",mt:14,boxSize:10,color:"teal.200",children:(0,r.jsx)(x.VzD,{fill:"currentColor",size:"40px"})})}function U(){(0,d.useContext)(f.h);return(0,r.jsxs)(l.gC,{w:"full",children:[(0,r.jsx)(u.m$.h1,{py:5,fontSize:35,fontFamily:"Work Sans",fontWeight:"bold",color:(0,o.ff)("gray.700","gray.50"),children:"Deployment"}),(0,r.jsxs)(c.M,{columns:[1,1,1,1,2],spacing:"20",mt:16,mx:"auto",children:[(0,r.jsx)(m.A,{name:"ERC20PresetMinterPauser",role:"Submit the ERC20 contract.",content:[(0,r.jsx)(Z,{},"deployerc20content")],iconComponents:[(0,r.jsx)(j.Z,{icon:(0,r.jsx)(p.UCj,{size:"25"})},"msgsendicon")]},"deploy erc20"),(0,r.jsx)(m.A,{name:"Mint Coins",role:"Mint coins on your ERC20 contract.",content:[(0,r.jsx)(F,{},"minterc20cotent")],iconComponents:[(0,r.jsx)(j.Z,{icon:(0,r.jsx)(V.xEK,{size:"24"})},"msgmint")]},"minterc20"),(0,r.jsx)(m.A,{name:"Transfer ERC20",role:"Transfer your tokens to another wallet.",content:[(0,r.jsx)(H,{},"transfertokencontent")],iconComponents:[(0,r.jsx)(j.Z,{icon:(0,r.jsx)(h.$Os,{size:"24"})},"msgtt")]},"transfererc20")]})]})}var J=function(){return(0,r.jsx)(m.Z,{title:"Deploy ERC20 Tokens on EVMOS",subtitle:[(0,r.jsx)(B,{},"deploysub")],content:[(0,r.jsx)(U,{},"deploygrid")],icon:[(0,r.jsx)(K,{},"deployfooter")]})},Q=function(){return(0,r.jsx)(a.Z,{section:"deployerc20",element:[(0,r.jsx)(s.xu,{h:"full",children:(0,r.jsx)(J,{},"deploypage")},"deployerc20box")]})}},3666:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(58);function a(e){var n=e.icon;return(0,r.jsx)(s.Z,{height:"60px",width:"60px",alignSelf:"center",m:{base:"0 0 35px 0",md:"0 0 0 20px"},color:"teal.300",children:n})}},6766:function(e,n,t){"use strict";t.d(n,{A:function(){return c},Z:function(){return u}});var r=t(5893),s=t(4096),a=t(8017),o=t(1440),i=t(1539),l=t(8322);function c(e){var n=e.name,t=e.role,a=e.content,c=e.avatar,u=e.iconComponents;return(0,r.jsxs)(s.k,{h:"fit-content",minW:[10,450,500,600,400,600],boxShadow:"lg",maxW:"640px",direction:{base:"column-reverse",md:"row"},width:"full",rounded:"xl",p:10,justifyContent:"space-between",position:"relative",bg:(0,i.ff)("white","gray.800"),_after:{content:'""',position:"absolute",height:"21px",width:"29px",left:"35px",top:"-10px",backgroundSize:"cover",backgroundImage:"url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%234FD1C5'/%3E%3C/svg%3E\")"},_before:{content:'""',position:"absolute",zIndex:"-1",height:"full",maxW:"640px",width:"full",filter:"blur(40px)",transform:"scale(0.98)",backgroundRepeat:"no-repeat",backgroundSize:"cover",top:0,left:0},children:[(0,r.jsxs)(s.k,{direction:"column",textAlign:"left",justifyContent:"space-between",w:"full",children:[(0,r.jsx)(o.m$.div,{fontFamily:"monospace",fontWeight:"medium",fontSize:["md","2xl"],pb:4,children:a}),(0,r.jsxs)(o.m$.p,{fontFamily:"Work Sans",fontWeight:"bold",fontSize:14,children:[n,(0,r.jsxs)(o.m$.span,{fontFamily:"Inter",fontWeight:"medium",color:"gray.500",children:[" ","- ",t]})]})]},"flex2"),c?(0,r.jsx)(l.E,{src:c,height:"80px",width:"80px",alignSelf:"center",m:{base:"0 0 35px 0",md:"0 0 0 50px"}},"avatar"):(0,r.jsx)(r.Fragment,{children:u})]},"flex")}function u(e){var n=e.title,t=e.subtitle,l=e.content,c=e.icon;return(0,r.jsxs)(s.k,{textAlign:"center",pt:3,justifyContent:"center",direction:"column",width:"full",children:[(0,r.jsxs)(a.xu,{width:{base:"full",sm:"lg",lg:"xl"},margin:"auto",children:[(0,r.jsx)(o.m$.h1,{py:5,fontSize:48,fontFamily:"Work Sans",fontWeight:"bold",color:(0,i.ff)("gray.700","gray.50"),children:n}),t]}),l,(0,r.jsx)(a.xu,{children:c})]})}},4239:function(e,n,t){"use strict";var r=t(5893),s=t(1440),a=t(1539);n.Z=function(e){var n=e.content;return(0,r.jsx)(s.m$.strong,{color:(0,a.ff)("gray.700","gray.50"),children:n})}}},function(e){e.O(0,[774,228,445,937,13,617,874,876,90,56,316,760,757,113,700,888,179],(function(){return n=8736,e(e.s=n);var n}));var n=e.O();_N_E=n}]);