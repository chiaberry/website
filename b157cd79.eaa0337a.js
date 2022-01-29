(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return m})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(156)),o=(t(170),t(165)),l=["components"],m={id:"render-image",title:"Render Image",hide_title:!0},s={unversionedId:"columns/render-image",id:"columns/render-image",isDocsHomePage:!1,title:"Render Image",description:"Custom Column Rendering",source:"@site/demos/columns/render-image.mdx",slug:"/columns/render-image",permalink:"/demos/columns/render-image",version:"current",sidebar:"sidebar",previous:{title:"Toolbar",permalink:"/demos/override/toolbar"},next:{title:"Hiding Columns",permalink:"/demos/columns/hide"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],d={toc:c};function u(e){var n=e.components,t=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"custom-column-rendering"},"Custom Column Rendering"),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import MaterialTable from '@material-table/core';\n\n<MaterialTable\n    // ...\n    columns={[\n      {\n        field: 'url',\n        title: 'Avatar',\n        render: rowData => {\n          return <img src={rowData.url} style={{width: 50, borderRadius: '50%'}}/>\n        }\n      }\n    ]}\n/>\n")),Object(i.b)("h2",{id:"live-demo"},"Live Demo"),Object(i.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function RenderImage() {\n  return (\n    <MaterialTable\n      icons={TABLE_ICONS}\n      data={[\n        { \n          name: 'Mehmet', \n          surname: 'Baran', \n          birthYear: 1987, \n          birthCity: 63, \n          imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' \n        },\n        { \n          name: 'Zerya Bet\xfcl', \n          surname: 'Baran', \n          birthYear: 2017, \n          birthCity: 34, \n          imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' \n        },\n      ]} \n      columns={[\n        { \n          title: 'Avatar', \n          field: 'imageUrl', \n          /**\n           * Custom column rendering \n           */\n          render: rowData => {\n            const styles = { width: 40, borderRadius: '50%' };\n            return <img src={rowData.imageUrl} style={styles}/> \n          }\n        },\n        { \n          title: 'Name', \n          field: 'name' \n        },\n        { \n          title: 'Surname', \n          field: 'surname' \n        },\n        { \n          title: 'Birth Year', \n          field: 'birthYear', \n          type: 'numeric' \n        },\n        {\n          title: 'Birth Place',\n          field: 'birthCity',\n          lookup: { \n            34: '\u0130stanbul', \n            63: '\u015eanl\u0131urfa' \n          },\n        },\n      ]}       \n    />\n  )\n}\n")))}u.isMDXComponent=!0},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t.n(a),i=(t(22),function(e){var n=e.type,t=e.children,a=n;return"tip"===n&&(a="success"),"note"===n&&(a="secondary"),r.a.createElement("div",{className:"admonition admonition-"+n+" alert alert--"+a},r.a.createElement("div",{className:"admonition-heading"},r.a.createElement("h5",null,r.a.createElement("span",{className:"admonition-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),r.a.createElement("div",{className:"admonition-content"},r.a.createElement("p",null,t)))}),o=function(){return r.a.createElement(i,{type:"note"},"See ",r.a.createElement("a",{href:"/demos/#demo-environment"},r.a.createElement("b",null,r.a.createElement("i",null,"here")))," for more on the ",r.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}}]);