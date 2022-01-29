(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{138:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return s})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return d})),a.d(n,"default",(function(){return u}));var t=a(3),i=a(7),l=(a(0),a(156)),r=(a(170),a(165)),o=["components"],s={id:"basic",title:"Basic Details Panel"},c={unversionedId:"details-panel/basic",id:"details-panel/basic",isDocsHomePage:!1,title:"Basic Details Panel",description:"Usage",source:"@site/demos/details-panel/basic.mdx",slug:"/details-panel/basic",permalink:"/demos/details-panel/basic",version:"current",sidebar:"sidebar",previous:{title:"Hiding Columns",permalink:"/demos/columns/hide"},next:{title:"Editable",permalink:"/demos/edit/editable"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],m={toc:d};function u(e){var n=e.components,a=Object(i.a)(e,o);return Object(l.b)("wrapper",Object(t.a)({},m,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import MaterialTable from '@material-table/core';\n\n<MaterialTable\n  // ... other props\n  detailPanel={({rowData}) => {\n    return (\n      <div\n        style={{\n          fontSize: 20,\n          textAlign: 'center',\n          height: 100\n        }}\n      >\n        This is a detailed panel for {rowData.name}\n      </div>\n    )\n  }}\n/>\n")),Object(l.b)("h2",{id:"live-demo"},"Live Demo"),Object(l.b)(r.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicDetailsPanelDemo() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA} \n      columns={DEMO_COLS} \n      icons={TABLE_ICONS}\n      detailPanel={({rowData}) => {\n        return (\n          <div\n            style={{\n              fontSize: 20,\n              textAlign: 'center',\n              height: 100\n            }}\n          >\n            This is a detailed panel for {rowData.name}\n          </div>\n        )\n      }}\n    />\n  );\n}\n")))}u.isMDXComponent=!0},165:function(e,n,a){"use strict";a.d(n,"a",(function(){return r}));var t=a(0),i=a.n(t),l=(a(22),function(e){var n=e.type,a=e.children,t=n;return"tip"===n&&(t="success"),"note"===n&&(t="secondary"),i.a.createElement("div",{className:"admonition admonition-"+n+" alert alert--"+t},i.a.createElement("div",{className:"admonition-heading"},i.a.createElement("h5",null,i.a.createElement("span",{className:"admonition-icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),i.a.createElement("div",{className:"admonition-content"},i.a.createElement("p",null,a)))}),r=function(){return i.a.createElement(l,{type:"note"},"See ",i.a.createElement("a",{href:"/demos/#demo-environment"},i.a.createElement("b",null,i.a.createElement("i",null,"here")))," for more on the ",i.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}}]);