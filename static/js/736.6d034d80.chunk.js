"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c=e(439),u=e(689),i=e(791),o=e(952),s=e(478),p=e(766),f=e(867),l=f.ZP.ul(r||(r=(0,p.Z)(["\n  list-style-type: none;\n"]))),d=f.ZP.p(a||(a=(0,p.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),h=e(184),v=function(){var n=(0,u.UO)().movieId,t=(0,i.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],p=(0,i.useState)(!1),f=(0,c.Z)(p,2),v=f[0],g=f[1];return(0,i.useEffect)((function(){g(!0),(0,o.wL)(n).then((function(n){a(n)})).catch((function(n){console.log(n)})).finally((function(){g(!1)}))}),[n]),(0,h.jsxs)("div",{children:[v&&(0,h.jsx)(s.Z,{}),(0,h.jsx)(l,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.name,c=n.character;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{width:"200px",src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r}),(0,h.jsx)(d,{children:a}),(0,h.jsxs)(d,{children:["Character: ",c]})]},t)}))})]})}},952:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return o},Y5:function(){return p},wL:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="5d1cfc828cf73d35b8e9de29e9bf01c2",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.6d034d80.chunk.js.map