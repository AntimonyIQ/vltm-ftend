(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{8448:function(n,t,e){"use strict";e.d(t,{M:function(){return a}});var o=e(1440),r=e(3808);e(7294);var a=(0,o.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});r.Ts&&(a.displayName="Center")},9345:function(n,t,e){"use strict";e.d(t,{r:function(){return m},P:function(){return d}});var o=e(63),r=e(1440),a=e(3808),i=e(6678),s=e(4651),l=e(7294);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function u(n,t){if(null==n)return{};var e,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}var m=(0,o.G)(((n,t)=>{var{area:e,templateAreas:o,gap:a,rowGap:i,columnGap:s,column:m,row:f,autoFlow:d,autoRows:p,templateRows:g,autoColumns:x,templateColumns:h}=n,C=u(n,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),w={display:"grid",gridArea:e,gridTemplateAreas:o,gridGap:a,gridRowGap:i,gridColumnGap:s,gridAutoColumns:x,gridColumn:m,gridRow:f,gridAutoFlow:d,gridAutoRows:p,gridTemplateRows:g,gridTemplateColumns:h};return l.createElement(r.m$.div,c({ref:t,__css:w},C))}));function f(n){return(0,i.XQ)(n,(n=>"auto"===n?"auto":"span "+n+"/span "+n))}a.Ts&&(m.displayName="Grid");var d=(0,o.G)(((n,t)=>{var{colSpan:e,colStart:o,colEnd:a,rowEnd:i,rowSpan:m,rowStart:d}=n,p=u(n,["colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"]),g=(0,s.YU)({gridColumn:f(e),gridRow:f(m),gridColumnStart:o,gridColumnEnd:a,gridRowStart:d,gridRowEnd:i});return l.createElement(r.m$.div,c({ref:t,__css:g},p))}))},7086:function(n,t,e){"use strict";e.d(t,{M:function(){return c}});var o=e(63),r=e(3808),a=e(6678),i=e(7294),s=e(9345);function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var c=(0,o.G)(((n,t)=>{var e,o,{columns:c,spacingX:u,spacingY:m,spacing:f,minChildWidth:d}=n,p=function(n,t){if(null==n)return{};var e,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["columns","spacingX","spacingY","spacing","minChildWidth"]),g=d?(o=d,(0,a.XQ)(o,(n=>{return(0,r.Ft)(n)?null:"repeat(auto-fit, minmax("+(t=n,((0,r.hj)(t)?t+"px":t)+", 1fr))");var t}))):(e=c,(0,a.XQ)(e,(n=>(0,r.Ft)(n)?null:"repeat("+n+", minmax(0, 1fr))")));return i.createElement(s.r,l({ref:t,gap:f,columnGap:u,rowGap:m,templateColumns:g},p))}));r.Ts&&(c.displayName="SimpleGrid")},5762:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cosmos",function(){return e(2976)}])},2976:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return v}});var o=e(5893),r=e(1539),a=e(58),i=e(7086),s=e(8448),l=e(7294),c=e(9583),u=e(520),m=e(9227),f=e(6766),d=e(4239),p=e(5902);function g(){return(0,o.jsx)(p.Z,{content:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.Z,{content:"Cosmos Coins"})," balances.",(0,o.jsx)("br",{}),"(",(0,o.jsx)(d.Z,{content:"Aevmos"}),", ",(0,o.jsx)(d.Z,{content:"IBC"}),", ",(0,o.jsx)(d.Z,{content:"evmos' ERC20 coins"}),")"]})})}function x(){return(0,o.jsx)(a.Z,{viewBox:"0 0 40 35",mt:14,boxSize:10,color:"teal.200",children:(0,o.jsx)(c.huN,{fill:"currentColor",size:"40px"})})}function h(n){var t=n.globalState;return(0,o.jsx)(i.M,{columns:{base:1,xl:t.state.balanceCosmos.length>2?2:1},spacing:"20",mt:16,mx:"auto",children:t.state.balanceCosmos.length>0?t.state.balanceCosmos.map((function(n,t){return(0,o.jsx)(f.A,{name:n.denom,role:"Current ".concat(n.denom," balance."),content:[(0,o.jsx)(u.Z,{content:"".concat(n.amount," ").concat(n.denom)},"".concat(n.denom,"key"))],avatar:"aevmos"==n.denom?(0,r.ff)("./evmos-black.svg","./evmos-white.svg"):(0,r.ff)("./coins.png","./coins-white.png")},t)})):(0,o.jsx)(f.A,{name:"No balance",role:"There is no balance for this wallet.",content:[(0,o.jsx)(s.M,{textAlign:"center",children:"This wallet has not coins! Send coins or login with another wallet!"},"nobalancetext")]},"no_balance")})}var C=function(){var n=(0,l.useContext)(m.h);return(0,o.jsx)(f.Z,{title:"Your Cosmos Coins",subtitle:[(0,o.jsx)(g,{},"sub")],content:[(0,o.jsx)(h,{globalState:n},"grid")],icon:[(0,o.jsx)(x,{},"footer")]})},w=e(7150),v=function(){return(0,o.jsx)(w.Z,{element:[(0,o.jsx)(C,{},"cosmos")],section:"cosmos"})}},6766:function(n,t,e){"use strict";e.d(t,{A:function(){return c},Z:function(){return u}});var o=e(5893),r=e(4096),a=e(8017),i=e(1440),s=e(1539),l=e(8322);function c(n){var t=n.name,e=n.role,a=n.content,c=n.avatar,u=n.iconComponents;return(0,o.jsxs)(r.k,{h:"fit-content",minW:[10,450,500,600,400,600],boxShadow:"lg",maxW:"640px",direction:{base:"column-reverse",md:"row"},width:"full",rounded:"xl",p:10,justifyContent:"space-between",position:"relative",bg:(0,s.ff)("white","gray.800"),_after:{content:'""',position:"absolute",height:"21px",width:"29px",left:"35px",top:"-10px",backgroundSize:"cover",backgroundImage:"url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%234FD1C5'/%3E%3C/svg%3E\")"},_before:{content:'""',position:"absolute",zIndex:"-1",height:"full",maxW:"640px",width:"full",filter:"blur(40px)",transform:"scale(0.98)",backgroundRepeat:"no-repeat",backgroundSize:"cover",top:0,left:0},children:[(0,o.jsxs)(r.k,{direction:"column",textAlign:"left",justifyContent:"space-between",w:"full",children:[(0,o.jsx)(i.m$.div,{fontFamily:"monospace",fontWeight:"medium",fontSize:["md","2xl"],pb:4,children:a}),(0,o.jsxs)(i.m$.p,{fontFamily:"Work Sans",fontWeight:"bold",fontSize:14,children:[t,(0,o.jsxs)(i.m$.span,{fontFamily:"Inter",fontWeight:"medium",color:"gray.500",children:[" ","- ",e]})]})]},"flex2"),c?(0,o.jsx)(l.E,{src:c,height:"80px",width:"80px",alignSelf:"center",m:{base:"0 0 35px 0",md:"0 0 0 50px"}},"avatar"):(0,o.jsx)(o.Fragment,{children:u})]},"flex")}function u(n){var t=n.title,e=n.subtitle,l=n.content,c=n.icon;return(0,o.jsxs)(r.k,{textAlign:"center",pt:3,justifyContent:"center",direction:"column",width:"full",children:[(0,o.jsxs)(a.xu,{width:{base:"full",sm:"lg",lg:"xl"},margin:"auto",children:[(0,o.jsx)(i.m$.h1,{py:5,fontSize:48,fontFamily:"Work Sans",fontWeight:"bold",color:(0,s.ff)("gray.700","gray.50"),children:t}),e]}),l,(0,o.jsx)(a.xu,{children:c})]})}},4239:function(n,t,e){"use strict";var o=e(5893),r=e(1440),a=e(1539);t.Z=function(n){var t=n.content;return(0,o.jsx)(r.m$.strong,{color:(0,a.ff)("gray.700","gray.50"),children:t})}},520:function(n,t,e){"use strict";e.d(t,{Z:function(){return r}});var o=e(5893);function r(n){var t=n.content;return(0,o.jsx)("div",{style:{overflowWrap:"anywhere"},children:t})}}},function(n){n.O(0,[774,228,445,937,13,617,874,876,56,316,760,757,700,888,179],(function(){return t=5762,n(n.s=t);var t}));var t=n.O();_N_E=t}]);