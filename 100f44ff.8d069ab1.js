(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=(n(21),n(745)),i=n(235),c=function(e){var t=e.type,n=e.children,r=t;return"tip"===t&&(r="success"),"note"===t&&(r="secondary"),a.a.createElement(o.a,{theme:Object(i.b)()},a.a.createElement("div",{className:"admonition admonition-"+t+" alert alert--"+r},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,n))))},l=function(){return a.a.createElement(c,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(162)),i=(n(175),n(173)),c=["components"],l={id:"basic",title:"Basic Tree Data"},s={unversionedId:"tree-data/basic",id:"tree-data/basic",isDocsHomePage:!1,title:"Basic Tree Data",description:"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions.",source:"@site/demos/tree-data/basic.mdx",slug:"/tree-data/basic",permalink:"/demos/tree-data/basic",version:"current",sidebar:"sidebar",previous:{title:"Selected Row",permalink:"/demos/style/selected-row"},next:{title:"Cell Validation",permalink:"/demos/validation/basic"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],d={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}\n/>;\n')),Object(o.b)("h2",{id:"live-demo"},"Live Demo"),Object(o.b)(i.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicTreeData() {\n  return (\n    <MaterialTable\n      data={TREE_DATA}\n      columns={TREE_COLUMNS}\n      parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}\n      options={{\n        selection: true,\n      }}\n    />\n  );\n}\n")))}p.isMDXComponent=!0}}]);