(()=>{"use strict";var e,n={4602:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(3645),a=r.n(t)()((function(e){return e[1]}));a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);"]),a.push([e.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\nbody {\r\n  background: #202020;\r\n  color: #dfdfdf;\r\n}\r\n\r\n.nav-link{\r\n  display: block;\r\n  color: #dfdfdf;\r\n  width: 50%;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 1.7rem;\r\n  padding: 0.5rem 0;\r\n  height: 100%;\r\n}\r\n\r\n.nav-link:hover {\r\n  background: rgba(255, 255,255, 0.1);\r\n}\r\n\r\n.form-control {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.form-label {\r\n  color: #dfdfdf !important;\r\n  font-size: 1.5rem !important;\r\n  margin: 0.5rem 0 !important;\r\n}\r\n\r\n.form-input {\r\n  font-size: 1.2rem !important;\r\n  color: #dfdfdf !important;\r\n  margin-bottom: 1rem !important;\r\n  background: rgba(255, 255,255, 0.1);\r\n  padding: 0.5rem !important\r\n}\r\n\r\n.form-button {\r\n  width: 100%;\r\n  padding: 1rem !important;\r\n}\r\n\r\n.error {\r\n  position: absolute;\r\n  top: 5rem;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  padding: 1rem 2rem;\r\n  font-size: 1.2rem;\r\n  background: rgb(145, 32, 32);\r\n}',""]);const o=a},82:(e,n,r)=>{r.d(n,{Z:()=>v});var t=r(7294),a=r(7209),o=r(3727),l=r(5977),i=r(8568),s=r(8358);const c=function(){return t.createElement(i.Z,{position:"static"},t.createElement(s.Z,null,t.createElement(o.OL,{className:"nav-link",to:"/"},"List of People"),t.createElement(o.OL,{className:"nav-link",to:"/new"},"Create new entry")))};var u=r(9956);const m=function(){var e=(0,t.useState)([]),n=e[0],r=e[1];return(0,t.useEffect)((function(){fetch("http://localhost:3001/api/person").then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]),t.createElement(u.Z,{width:"70%",margin:"auto",display:"flex",flexDirection:"column"},n.map((function(e,n){return t.createElement(u.Z,{key:e.id,marginTop:"0.5rem",borderTop:0!=n?"1px solid #afafaf":"",padding:"0.5rem"},t.createElement(u.Z,{padding:"0.5rem 0",fontSize:"1.2rem"},t.createElement("b",null,"First name: ")," ",e.first_name),t.createElement(u.Z,{padding:"0.5rem 0",fontSize:"1.2rem"},t.createElement("b",null,"Last name: ")," ",e.last_name),e.address&&t.createElement(u.Z,{padding:"0.5rem 0",fontSize:"1.2rem"},t.createElement("b",null,"Address: ")," ",e.address))})))};var d=r(4094),f=r(3446),p=r(1603),h=function(e,n,r,t){return new(r||(r=Promise))((function(a,o){function l(e){try{s(t.next(e))}catch(e){o(e)}}function i(e){try{s(t.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,i)}s((t=t.apply(e,n||[])).next())}))},b=function(e,n){var r,t,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,t&&(a=2&o[0]?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;switch(t=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,t=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],t=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};const g=function(){var e=(0,t.useState)(""),n=e[0],r=e[1],a=(0,t.useState)(""),o=a[0],i=a[1],s=(0,t.useState)(""),c=s[0],m=s[1],g=(0,t.useState)(""),v=g[0],y=g[1],E=(0,l.k6)();return t.createElement(u.Z,{width:"70%",margin:"1rem auto"},v&&t.createElement("div",{className:"error"},v),t.createElement(d.Z,{htmlFor:"name",className:"form-label"},"Name"),t.createElement(f.Z,{id:"name",fullWidth:!0,className:"form-input",onChange:function(e){var n=e.target;return r(n.value)}}),t.createElement(d.Z,{htmlFor:"surname",className:"form-label"},"Surname"),t.createElement(f.Z,{id:"surname",fullWidth:!0,className:"form-input",onChange:function(e){var n=e.target;return i(n.value)}}),t.createElement(d.Z,{htmlFor:"address",className:"form-label"},"Address"),t.createElement(f.Z,{id:"address",fullWidth:!0,className:"form-input",onChange:function(e){var n=e.target;return m(n.value)}}),t.createElement(p.Z,{variant:"contained",color:"primary",className:"form-button",onClick:function(){return h(void 0,void 0,void 0,(function(){var e;return b(this,(function(r){switch(r.label){case 0:n&&o||(y("Missing name or username"),setTimeout((function(){return y("")}),3e3)),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,fetch("http://localhost:3001/api/person",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,surname:o,address:c})})];case 2:return r.sent(),E.push("/"),[3,4];case 3:return e=r.sent(),y(e.response.error),setTimeout((function(){return y("")}),3e3),[3,4];case 4:return[2]}}))}))}},"Submit"))};e=r.hmd(e);const v=(0,a.wU)(e)((function(){return t.createElement("div",{className:"App"},t.createElement(o.VK,null,t.createElement(c,null),t.createElement(l.rs,null,t.createElement(l.AW,{path:"/new"},t.createElement(g,null)),t.createElement(l.AW,{path:"/"},t.createElement(m,null)))))}))},6491:(e,n,r)=>{var t=r(7294),a=r(3935),o=r(82),l=r(3379),i=r.n(l),s=r(7795),c=r.n(s),u=r(569),m=r.n(u),d=r(3565),f=r.n(d),p=r(9216),h=r.n(p),b=r(4589),g=r.n(b),v=r(4602),y={};y.styleTagTransform=g(),y.setAttributes=f(),y.insert=m().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=h();i()(v.Z,y);v.Z&&v.Z.locals&&v.Z.locals;(0,a.render)(t.createElement(t.Fragment,null,t.createElement(o.Z,null)),document.getElementById("root"))}},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return n[e](o,o.exports,t),o.loaded=!0,o.exports}t.m=n,e=[],t.O=(n,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],i=!0,s=0;s<r.length;s++)(!1&o||l>=o)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var a,o,[l,i,s]=r,c=0;if(l.some((n=>0!==e[n]))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(s)var u=s(t)}for(n&&n(r);c<l.length;c++)o=l[c],t.o(e,o)&&e[o]&&e[o][0](),e[l[c]]=0;return t.O(u)},r=self.webpackChunkfrontend=self.webpackChunkfrontend||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var a=t.O(void 0,[325],(()=>t(6491)));a=t.O(a)})();