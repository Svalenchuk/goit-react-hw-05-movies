"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,i,c,o,s=t(439),u=t(791),l=t(689),p=t(87),d=t(952),f=t(478),x=t(766),h=t(867),v=h.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),g=h.ZP.ul(a||(a=(0,x.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),m=h.ZP.ul(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),j=(0,h.ZP)(p.rU)(c||(c=(0,x.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),w=h.ZP.button(o||(o=(0,x.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),y=t(184),Z=function(){var n,e,t=(0,l.UO)().movieId,r=(0,u.useState)(null),a=(0,s.Z)(r,2),i=a[0],c=a[1],o=(0,u.useState)(!1),x=(0,s.Z)(o,2),h=x[0],Z=x[1],b=(0,l.TH)(),k=(0,u.useRef)(null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");if((0,u.useEffect)((function(){Z(!0),(0,d.Y5)(t).then((function(n){c(n)})).catch((function(n){console.log(n)})).finally((function(){Z(!1)}))}),[t]),i){var _=i||{},U=_.title,S=_.release_date,P=_.popularity,C=_.overview,R=_.genres,q=_.poster_path,z=_.original_title;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.rU,{to:k.current,children:(0,y.jsx)(w,{type:"button",children:"Go back"})}),h&&(0,y.jsx)(f.Z,{}),i&&(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{width:"300px",src:q?"https://image.tmdb.org/t/p/w500".concat(q):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:z}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("h1",{children:[U," (",S.slice(0,4),")"]}),(0,y.jsxs)("p",{children:["User score: ",P]}),(0,y.jsx)("h2",{children:"Overview"}),(0,y.jsx)("p",{children:C}),(0,y.jsx)("h2",{children:"Genres"}),(0,y.jsx)(g,{children:R.map((function(n){return(0,y.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,y.jsx)("hr",{}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{children:"Additional information"}),(0,y.jsxs)(m,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)("hr",{}),(0,y.jsx)(l.j3,{})]})]})}}},952:function(n,e,t){t.d(e,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return s},Y5:function(){return l},wL:function(){return p}});var r=t(861),a=t(757),i=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="5d1cfc828cf73d35b8e9de29e9bf01c2",s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.e0d680da.chunk.js.map