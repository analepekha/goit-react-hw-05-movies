"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[161],{454:function(n,e,t){t.d(e,{a:function(){return i}});var r,a=t(243),c=t(168),u=t(444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  \n \n"]))),o=t(184),i=function(){return(0,o.jsx)(u,{children:(0,o.jsx)(a.iT,{height:80,width:80,color:"#1a526c",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#1a526c",strokeWidth:2,strokeWidthSecondary:2})})}},161:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(861),a=t(885),c=t(757),u=t.n(c),o=t(454),i=t(731),s=t(470),p=t(184),f=function(n){var e=n.movies,t=(0,s.TH)();return(0,p.jsx)("ul",{children:e.map((function(n){var e=n.title,r=n.id;return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{state:{from:t},to:"/movies/".concat(r),children:e})},r)}))})},v=t(791),l=t(390),d="idle",h="pending",x="resolved",m="rejected",w=function(){var n=(0,v.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],i=(0,v.useState)(!1),s=(0,a.Z)(i,2),w=s[0],k=s[1],g=(0,v.useState)(d),y=(0,a.Z)(g,2),Z=y[0],b=y[1];return(0,v.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.prev=1,b(h),n.next=5,(0,l.JN)();case 5:e=n.sent,console.log(e.results),b(x),c(e.results),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0),b(m);case 15:return n.prev=15,k(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,11,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[c]),(0,p.jsxs)(p.Fragment,{children:[Z===h&&w&&(0,p.jsx)(o.a,{}),Z===m&&(0,p.jsx)("p",{children:"Oops, something went wrong... Reload the page"}),(0,p.jsx)("h2",{children:"Trending Movies"}),t&&(0,p.jsx)(f,{movies:t})]})}},390:function(n,e,t){t.d(e,{JN:function(){return s},M1:function(){return v},TP:function(){return f},gH:function(){return p},tx:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(44),o="688b72699ca330044e2cd0625f24cfe3",i="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=161.9d626833.chunk.js.map