(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(84)),o={id:"api",title:"Einleitung",sidebar_label:"Einleitung"},u={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"Einleitung",description:"API Zugang",source:"@site/docs/api.md",slug:"/api",permalink:"/api",version:"current",lastUpdatedAt:1612253745,sidebar_label:"Einleitung",sidebar:"docs",previous:{title:"Abonnement",permalink:"/subscription"},next:{title:"Artikeldaten hochladen",permalink:"/daten_upload"}},c=[{value:"API Zugang",id:"api-zugang",children:[{value:"Token erzeugen",id:"token-erzeugen",children:[]}]},{value:"API Prefix",id:"api-prefix",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"api-zugang"},"API Zugang"),Object(i.b)("p",null,"Zur Nutzung der API ist es notwendig einen Token zu erzeugen. Dieser dient als Zentrale Authentifikation\nund muss bei jeder API Anfrage enthalten sein."),Object(i.b)("h3",{id:"token-erzeugen"},"Token erzeugen"),Object(i.b)("p",null,"Navigiere auf dem Wranglab Dashboard zu dem Men","\xfc","punkt ",Object(i.b)("strong",{parentName:"p"},"Einstellungen > Externe API"),". Hier kannst du dir durch klicken auf den\nButton ",Object(i.b)("em",{parentName:"p"},"NEUER TOKEN")," einen Token erzeugen."),Object(i.b)("h2",{id:"api-prefix"},"API Prefix"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"https://api.wranglab.com/\n")))}l.isMDXComponent=!0},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,f=d["".concat(o,".").concat(b)]||d[b]||s[b]||i;return t?a.a.createElement(f,u(u({ref:n},p),{},{components:t})):a.a.createElement(f,u({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);