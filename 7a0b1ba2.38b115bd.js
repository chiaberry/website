(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(162)),l=(n(175),n(173)),o=["components"],c={id:"fixed",title:"Fixed Columns"},s={unversionedId:"columns/fixed",id:"columns/fixed",isDocsHomePage:!1,title:"Fixed Columns",description:"Material Table supports fixed columns, both from the left and the right end.",source:"@site/demos/columns/fixed.mdx",slug:"/columns/fixed",permalink:"/demos/columns/fixed",version:"current",sidebar:"sidebar",previous:{title:"Hiding Columns",permalink:"/demos/columns/hide"},next:{title:"Basic Details Panel",permalink:"/demos/details-panel/basic"}},m=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],u={toc:m};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Material Table supports fixed columns, both from the left and the right end."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import MaterialTable from '@material-table/core';\n\n<MaterialTable\n  options={{\n    fixedColumns: { left: number, right: number },\n  }}\n/>;\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For keeping left columns fixed in the table"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fixedColumns: { left: number }")," (value should be a non-zero integer)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For keeping right columns fixed in the table"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fixedColumns: { right: number }")," (value should be a non-zero integer)")))),Object(i.b)("h2",{id:"live-demo"},"Live Demo"),Object(i.b)(l.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function LeftFixedColumn() {\n  const [data, setData] = useState(EDITABLE_DATA);\n  const columns = [\n    { field: 'id', title: 'Id', editable: 'never', width: 100 },\n    { field: 'firstName', title: 'First Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n  ];\n  return (\n    <MaterialTable\n      data={data}\n      columns={columns}\n      icons={TABLE_ICONS}\n      options={{\n        fixedColumns: { left: 1 },\n      }}\n    />\n  );\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function RightFixedColumn() {\n  const [data, setData] = useState(EDITABLE_DATA);\n  const columns = [\n    { field: 'id', title: 'Id', editable: 'never', width: 100 },\n    { field: 'firstName', title: 'First Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n    { field: 'lastName', title: 'Last Name', width: 200 },\n  ];\n  return (\n    <MaterialTable\n      data={data}\n      columns={columns}\n      icons={TABLE_ICONS}\n      options={{\n        fixedColumns: { right: 1 },\n      }}\n    />\n  );\n}\n")))}d.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,b=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.a.createElement(b,o(o({ref:t},s),{},{components:n})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),i=(n(21),n(745)),l=n(235),o=function(e){var t=e.type,n=e.children,a=t;return"tip"===t&&(a="success"),"note"===t&&(a="secondary"),r.a.createElement(i.a,{theme:Object(l.b)()},r.a.createElement("div",{className:"admonition admonition-"+t+" alert alert--"+a},r.a.createElement("div",{className:"admonition-heading"},r.a.createElement("h5",null,r.a.createElement("span",{className:"admonition-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),r.a.createElement("div",{className:"admonition-content"},r.a.createElement("p",null,n))))},c=function(){return r.a.createElement(o,{type:"note"},"See"," ",r.a.createElement("a",{href:"/demos/#demo-environment"},r.a.createElement("b",null,r.a.createElement("i",null,"here")))," ","for more on the ",r.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}}]);