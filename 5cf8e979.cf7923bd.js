(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(l,".").concat(b)]||m[b]||p[b]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=(n(21),n(745)),l=n(235),i=function(e){var t=e.type,n=e.children,r=t;return"tip"===t&&(r="success"),"note"===t&&(r="secondary"),a.a.createElement(o.a,{theme:Object(l.b)()},a.a.createElement("div",{className:"admonition admonition-"+t+" alert alert--"+r},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,n))))},c=function(){return a.a.createElement(i,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(162)),l=(n(175),n(173)),i=["components"],c={id:"rows",title:"Row",hide_title:!0},s={unversionedId:"style/rows",id:"style/rows",isDocsHomePage:!1,title:"Row",description:"Styling Rows",source:"@site/demos/style/rows.mdx",slug:"/style/rows",permalink:"/demos/style/rows",version:"current",sidebar:"sidebar",previous:{title:"Header and Cell",permalink:"/demos/style/header-cell"},next:{title:"Selected Row",permalink:"/demos/style/selected-row"}},u=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],m={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"styling-rows"},"Styling Rows"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Field"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"options.rowStyle")),Object(o.b)("td",{parentName:"tr",align:null},"style object or func"),Object(o.b)("td",{parentName:"tr",align:null},"style to apply in all rows cells")))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  options={{\n    rowStyle: {\n      backgroundColor: "#6ABAC9",\n    },\n  }}\n/>;\n')),Object(o.b)("h2",{id:"live-demo"},"Live Demo"),Object(o.b)(l.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function StyledRow() {\n  return (\n    <MaterialTable\n      data={[\n        {\n          name: "Mehmet",\n          surname: "Baran",\n          birthYear: 1987,\n          birthCity: 63,\n        },\n        {\n          name: "Zerya Bet\xfcl",\n          surname: "Baran",\n          birthYear: 2017,\n          birthCity: 34,\n        },\n      ]}\n      columns={[\n        {\n          title: "Name",\n          field: "name",\n        },\n        { title: "Surname", field: "surname" },\n        { title: "Birth Year", field: "birthYear", type: "numeric" },\n        {\n          title: "Birth Place",\n          field: "birthCity",\n          lookup: { 34: "\u0130stanbul", 63: "\u015eanl\u0131urfa" },\n        },\n      ]}\n      options={{\n        rowStyle: {\n          backgroundColor: "#6ABAC9",\n        },\n      }}\n    />\n  );\n}\n')))}p.isMDXComponent=!0}}]);