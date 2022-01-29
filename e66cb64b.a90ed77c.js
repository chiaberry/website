(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return m}));var o=t(3),a=t(7),i=(t(0),t(156)),r=(t(170),t(165)),c=["components"],s={id:"basic",title:"Basic Action"},l={unversionedId:"actions/basic",id:"actions/basic",isDocsHomePage:!1,title:"Basic Action",description:"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions.",source:"@site/demos/actions/basic.mdx",slug:"/actions/basic",permalink:"/demos/actions/basic",version:"current",sidebar:"sidebar",previous:{title:"Introduction",permalink:"/demos/"},next:{title:"Toolbar",permalink:"/demos/override/toolbar"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[{value:"Action Rows",id:"action-rows",children:[]},{value:"Free Actions",id:"free-actions",children:[]}]}],u={toc:d};function m(e){var n=e.components,t=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  actions={[\n    {\n      icon: () => <SaveIcon />,\n      tooltip: "Save User",\n      onClick: (event, rowData) => {\n        const rowJson = JSON.stringify(rowData, null, 2);\n        alert(`Do save operation : ${rowJson}`);\n      },\n    },\n  ]}\n/>;\n')),Object(i.b)("h2",{id:"live-demo"},"Live Demo"),Object(i.b)(r.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(i.b)("h3",{id:"action-rows"},"Action Rows"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicActionsDemo() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA}\n      columns={DEMO_COLS}\n      icons={TABLE_ICONS}\n      actions={[\n        {\n          icon: () => <SaveIcon />,\n          tooltip: "Save User",\n          onClick: (event, rowData) => {\n            const rowJson = JSON.stringify(rowData, null, 2);\n            alert(`Do save operation : ${rowJson}`);\n          },\n        },\n      ]}\n    />\n  );\n}\n')),Object(i.b)("h3",{id:"free-actions"},"Free Actions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicActionsDemo() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA}\n      columns={DEMO_COLS}\n      icons={TABLE_ICONS}\n      actions={[\n        {\n          icon: () => <SaveIcon />,\n          tooltip: "Save User",\n          isFreeAction: true,\n          onClick: (event) => {\n            alert(`Icon clicked`);\n          },\n        },\n      ]}\n    />\n  );\n}\n')))}m.isMDXComponent=!0},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t(0),a=t.n(o),i=(t(22),function(e){var n=e.type,t=e.children,o=n;return"tip"===n&&(o="success"),"note"===n&&(o="secondary"),a.a.createElement("div",{className:"admonition admonition-"+n+" alert alert--"+o},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,t)))}),r=function(){return a.a.createElement(i,{type:"note"},"See ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}}]);