(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(84)),c={id:"get_progress",title:"Fortschritt abfragen",sidebar_label:"Fortschritt abfragen"},s={unversionedId:"get_progress",id:"get_progress",isDocsHomePage:!1,title:"Fortschritt abfragen",description:"API Endpoint",source:"@site/docs/get_progress.md",slug:"/get_progress",permalink:"/wranglab-documentation/get_progress",version:"current",lastUpdatedAt:1612253745,sidebar_label:"Fortschritt abfragen",sidebar:"docs",previous:{title:"Artikeldaten hochladen",permalink:"/wranglab-documentation/daten_upload"},next:{title:"EPIDs runterladen",permalink:"/wranglab-documentation/download_epid"}},i=[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Response",id:"response",children:[]},{value:"Response abgeschlossener Auftr\xe4ge",id:"response-abgeschlossener-auftr\xe4ge",children:[]}],l={toc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"api-endpoint"},"API Endpoint"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"GET: api/v1/get/progress/<api_token>\n")),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code ",Object(o.b)("strong",{parentName:"li"},"200")),Object(o.b)("li",{parentName:"ul"},"Liste an JSON Objekten")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "task_id": "<id_des_epid_erzeugen_auftrags>",\n        "status": "PROGRESS",\n        "result": {\n            "current": 1,\n            "total": 2,\n            "percent": 50\n        },\n        "task_origin": {\n            "name": "<erzeugter_name_des_hochgeladenen_dateiepakets>",\n            "id": "<id_des_hochgeladenen_dateipakets>"\n        },\n        "task_name": "<name_des_auftrags>",\n        "worker": "celery@worker_2",\n        "date_created": "2020-04-21T07:46:25.268119Z",\n        "date_done": "2020-04-21T07:46:26.262774Z"\n    }\n]\n')),Object(o.b)("h2",{id:"response-abgeschlossener-auftr\xe4ge"},"Response abgeschlossener Auftr\xe4ge"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code ",Object(o.b)("strong",{parentName:"li"},"200")),Object(o.b)("li",{parentName:"ul"},"Liste an JSON Objekten")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "task_id": "<id_des_epid_erzeugen_auftrags>",\n        "status": "SUCCESS",\n        "result": null,\n        "task_origin": null,\n        "task_name": "<name_des_auftrags>",\n        "worker": "celery@worker_1",\n        "date_created": "2020-04-21T07:45:06.594256Z",\n        "date_done": "2020-04-21T07:45:59.479185Z"\n    }\n]\n')),Object(o.b)("p",null,"Abgeschlossene Auftr\xe4ge werden nach deren Abfrage automatisch aus der Queue gel\xf6scht."))}u.isMDXComponent=!0},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,g=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(g,s(s({ref:n},l),{},{components:t})):a.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);