(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return n?o.a.createElement(b,a(a({ref:t},p),{},{components:n})):o.a.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(156)),i=["components"],a={id:"columns",title:"columns"},l={unversionedId:"api/props/columns",id:"api/props/columns",isDocsHomePage:!1,title:"columns",description:"Props for MaterialTable.columns objects.",source:"@site/docs/api/props/columns.md",slug:"/api/props/columns",permalink:"/docs/api/props/columns",editUrl:"https://github.com/material-table-core/website/tree/master/docs/api/props/columns.md",version:"current",sidebar:"docs",previous:{title:"actions",permalink:"/docs/api/props/mt_prop_actions"},next:{title:"components",permalink:"/docs/api/props/mt_prop_components"}},p=[{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>hiddenByColumnsButton</code>",id:"hiddenbycolumnsbutton",children:[]},{value:"<code>filterComponent</code>",id:"filtercomponent",children:[]},{value:"<code>filterOnItemSelect</code>",id:"filteronitemselect",children:[]}],u={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Props for ",Object(c.b)("inlineCode",{parentName:"p"},"MaterialTable.columns")," objects."),Object(c.b)("h2",{id:"hidden"},Object(c.b)("inlineCode",{parentName:"h2"},"hidden")),Object(c.b)("p",null,"Hide from table"),Object(c.b)("h2",{id:"hiddenbycolumnsbutton"},Object(c.b)("inlineCode",{parentName:"h2"},"hiddenByColumnsButton")),Object(c.b)("p",null,"Hide from column selection action menu"),Object(c.b)("h2",{id:"filtercomponent"},Object(c.b)("inlineCode",{parentName:"h2"},"filterComponent")),Object(c.b)("p",null,"Custom component for filtering"),Object(c.b)("p",null,"Signature: ({ columnDef, onFilterChanged }) => ReactElement"),Object(c.b)("h2",{id:"filteronitemselect"},Object(c.b)("inlineCode",{parentName:"h2"},"filterOnItemSelect")),Object(c.b)("p",null,"The data of the table is filtered by default only on blur of the filter component for performance reasons.\nSet this flag to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," to filter the table on change."))}s.isMDXComponent=!0}}]);