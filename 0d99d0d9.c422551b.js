(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return u}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),c=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,u=p["".concat(i,".").concat(m)]||p[m]||s[m]||o;return t?a.a.createElement(u,l(l({ref:r},b),{},{components:t})):a.a.createElement(u,l({ref:r},b))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return d})),t.d(r,"toc",(function(){return b})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(162)),i=(t(175),["components"]),l={id:"demos",title:"Introduction",hide_title:!0,slug:"/"},d={unversionedId:"demos",id:"demos",isDocsHomePage:!1,title:"Introduction",description:"Demos",source:"@site/demos/index.mdx",slug:"/",permalink:"/demos/",version:"current",sidebar:"sidebar",next:{title:"Basic Action",permalink:"/demos/actions/basic"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"How To Add Demo",id:"how-to-add-demo",children:[{value:"General Info",id:"general-info",children:[]},{value:"Sidebar",id:"sidebar",children:[]}]},{value:"Demo Environment",id:"demo-environment",children:[]},{value:"Environmental Variables",id:"environmental-variables",children:[{value:"Important Note",id:"important-note",children:[]},{value:"<code>DEMO_DATA</code>",id:"demo_data",children:[]},{value:"<code>DEMO_COLS</code>",id:"demo_cols",children:[]},{value:"<code>TABLE_ICONS</code>",id:"table_icons",children:[]}]}],c={toc:b};function p(e){var r=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"demos"},"Demos"),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"More info on demos. Each demo should have a live code block for you to tinker with."),Object(o.b)("h2",{id:"how-to-add-demo"},"How To Add Demo"),Object(o.b)("h3",{id:"general-info"},"General Info"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your demo should be placed in a folder under ",Object(o.b)("inlineCode",{parentName:"li"},"~/demos"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For example, ",Object(o.b)("inlineCode",{parentName:"li"},"~/demos/override/row")))),Object(o.b)("li",{parentName:"ul"},"You have the ability to use React inside of markdown",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Make sure your file ends in ",Object(o.b)("inlineCode",{parentName:"li"},".mdx")),Object(o.b)("li",{parentName:"ul"},"Refer to an existing demo file for a better understanding"))),Object(o.b)("li",{parentName:"ul"},"Each ",Object(o.b)("inlineCode",{parentName:"li"},".mdx")," or ",Object(o.b)("inlineCode",{parentName:"li"},".md")," file has to have a header",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("a",{parentName:"li",href:"https://github.com/material-table-core/website/blob/master/.github/contributing/example-header.md"},"here")," for an example"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"id")," is required and needs to be unique ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"per folder"))),Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/markdown-features/#markdown-headers"},"here")," for more on markdown headers"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Highly recommend reading ",Object(o.b)("a",{parentName:"strong",href:"https://v2.docusaurus.io/docs/markdown-features/"},"more on markdown features here")))))),Object(o.b)("h3",{id:"sidebar"},"Sidebar"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To show your demo in the sidebar you need to edit ",Object(o.b)("inlineCode",{parentName:"li"},"~/sidebar.demos.js"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If I wanted to add a demo to the URL ",Object(o.b)("inlineCode",{parentName:"li"},"/demo/override/row")," I would",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rowmdx"},"Create")," a file at ",Object(o.b)("inlineCode",{parentName:"li"},"~/demos/override/row.md")," ",Object(o.b)("em",{parentName:"li"},"could also use ",Object(o.b)("inlineCode",{parentName:"em"},".mdx")," extension")),Object(o.b)("li",{parentName:"ul"},"Update ",Object(o.b)("a",{parentName:"li",href:"#sidebardemosjs"},"sidebar.demos.js")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"*","The ",Object(o.b)("inlineCode",{parentName:"strong"},"id"))," needs to be the same as the ending of the path you put into ",Object(o.b)("inlineCode",{parentName:"li"},"~/sidebar.demos.js"))))))),Object(o.b)("h4",{id:"rowmdx"},"row.mdx"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"---\nid: row\n// ...\n---\n")),Object(o.b)("h4",{id:"sidebardemosjs"},"sidebar.demos.js"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'module.exports = {\n  sidebar: [\n  // ...\n    {\n      type: "category",\n      label: "Override Components",\n      items: [\n        "override/toolbar"\n+       "override/row"\n      ],\n    },\n  // ...\n  ]\n}\n')),Object(o.b)("h2",{id:"demo-environment"},"Demo Environment"),Object(o.b)("p",null,'In order to keep our demos succinct, we take advantage of "global variables". Global variables will be in all caps snake case.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<MaterialTable\n  // highlight-start\n  data={DEMO_DATA}\n  columns={DEMO_COLS}\n  // highlight-end\n  // ...\n/>\n")),Object(o.b)("h2",{id:"environmental-variables"},"Environmental Variables"),Object(o.b)("p",null,"The values for our global environmental variables can be found below."),Object(o.b)("h3",{id:"important-note"},"Important Note"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"PLEASE NOTE")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The list below may not be up to date! Please see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/material-table-core/website/blob/master/demos/demo.global-variables.js"},"here")," for more"))),Object(o.b)("h3",{id:"demo_data"},Object(o.b)("inlineCode",{parentName:"h3"},"DEMO_DATA")),Object(o.b)("p",null,"This data is passed into ",Object(o.b)("inlineCode",{parentName:"p"},"<MaterialTable data={...} />")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'const DEMO_DATA = [\n  { id: 2, name: "Joe" },\n  { id: 1, name: "Mary" },\n];\n')),Object(o.b)("h3",{id:"demo_cols"},Object(o.b)("inlineCode",{parentName:"h3"},"DEMO_COLS")),Object(o.b)("p",null,"This data is passed into ",Object(o.b)("inlineCode",{parentName:"p"},"<MaterialTable columns={...} />")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'const DEMO_COLS = [\n  { field: "id", title: "Id" },\n  { field: "name", title: "Name" },\n];\n')),Object(o.b)("h3",{id:"table_icons"},Object(o.b)("inlineCode",{parentName:"h3"},"TABLE_ICONS")),Object(o.b)("p",null,"This data is passed into ",Object(o.b)("inlineCode",{parentName:"p"},"<MaterialTable icons={...} />")),Object(o.b)("p",null,"The base icons are supplied out of the box."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const TABLE_ICONS = {\n  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),\n  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),\n  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),\n  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),\n  DetailPanel: forwardRef((props & { level?: number; row?: RowData }, ref) => (\n    <ChevronRight {...props} ref={ref} />\n  )),\n  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),\n  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),\n  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),\n  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),\n  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),\n  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),\n  PreviousPage: forwardRef((props, ref) => (\n    <ChevronLeft {...props} ref={ref} />\n  )),\n  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),\n  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),\n  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),\n  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),\n  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),\n};\n")))}p.isMDXComponent=!0}}]);