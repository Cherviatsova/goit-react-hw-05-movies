"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[254],{254:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r,c=t(885),a=t(791),o=t(390),i=t(168),u=t(751).ZP.h1(r||(r=(0,i.Z)(["\n font-size: 24px;\n margin-bottom: 20px;   \n"]))),s=t(874),f=t(184);function p(){var n=(0,a.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1];(0,a.useEffect)((function(){(0,o.wr)().then((function(n){r(n.results)}))}),[]);var i=(new Date).toLocaleDateString();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(u,{children:["Trending today: ",i,t&&(0,f.jsx)(s.Z,{list:t})]})})}},874:function(n,e,t){t.d(e,{Z:function(){return s}});var r,c=t(523),a=t(271),o=t(168),i=t(751).ZP.ul(r||(r=(0,o.Z)(["\nfont-size: 20px"]))),u=t(184);function s(n){var e=n.list,t=(0,a.TH)();return(0,u.jsx)(i,{children:e&&e.map((function(n){var e=n.id,r=n.title,a=n.name;return(0,u.jsx)("li",{children:(0,u.jsxs)(c.rU,{to:{pathname:"/movies/".concat(e),state:{from:t}},children:[a||r,r]})},e)}))})}},390:function(n,e,t){t.d(e,{wr:function(){return l},bI:function(){return d},fS:function(){return h},yd:function(){return m},SB:function(){return g}});var r=t(861),c=t(757),a=t.n(c),o=t(7),i=t.n(o),u="0a29e3a518908cfc1b2eed264f85542b",s="https://api.themoviedb.org/3";function f(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var e,t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Nothing found for this query"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function l(){return f("".concat(s,"/trending/movie/day?api_key=").concat(u))}function d(n){return f("".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1"))}function h(n){return f("".concat(s,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"))}function m(n){return f("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"))}function g(n){return f("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"))}m.propTypes={id:i().number.isRequired}}}]);
//# sourceMappingURL=254.50a1e40b.chunk.js.map