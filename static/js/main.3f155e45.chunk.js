(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{133:function(e,n,t){},134:function(e,n,t){},135:function(e,n,t){},136:function(e,n,t){},245:function(e,n,t){},563:function(e,n,t){"use strict";t.r(n);var i=t(1),s=t(0),a=t.n(s),l=t(117),c=t.n(l),r=(t(133),t(17)),o=(t.p,t(134),t.p+"static/media/topography-logo.b4fa3f8c.png"),d=(t(135),function(e){return Object(i.jsx)("div",{className:"element fill-width",style:{position:"fixed",top:0},children:Object(i.jsxs)("div",{className:"container flex row flex-center",style:{justifyContent:"space-between",paddingRight:"1.5rem",paddingLeft:"1.5rem"},children:[Object(i.jsxs)("div",{className:"link margin-none padding-half large title flex row flex-center",children:[Object(i.jsx)("img",{src:o,style:{height:"2rem",marginRight:".5rem"}})," ",Object(i.jsx)("div",{children:"topography css"})]}),Object(i.jsxs)("div",{className:"flex row flex-center",children:[Object(i.jsx)("a",{className:"link-out",href:"https://github.com/JohnnyRacket/topography-css",children:Object(i.jsx)("div",{className:"input highlight margin-none padding",children:"Github"})}),Object(i.jsx)("a",{className:"link-out",href:"https://www.npmjs.com/package/topography-css",children:Object(i.jsx)("div",{className:"input highlight margin-none padding",children:"NPM"})}),Object(i.jsx)("button",{className:"input accent semi-rounded ",onClick:function(){return e.toggleTheme()},children:"Switch Theme"})]})]})})}),h=(t(136),t(126)),m=function(e){var n=e.initialColor,t=e.name,a=e.colors,l=Object(s.useState)(n),c=Object(r.a)(l,2),o=c[0],d=c[1],m=Object(s.useState)(!1),u=Object(r.a)(m,2),j=u[0],x=u[1];return document.documentElement.style.setProperty("--".concat(t),o),Object(i.jsxs)("div",{className:"margin-half",children:[Object(i.jsxs)("div",{className:"flex flex-row flex-align-center",onClick:function(){return x((function(e){return!e}))},children:[Object(i.jsx)("div",{className:"semi-rounded padding",style:{backgroundColor:o}}),Object(i.jsx)("div",{className:"margin-half",children:t})]}),j?Object(i.jsx)(h.a,{color:o,onChangeComplete:function(e,n){d(e.hex),x((function(e){return!e}))},colors:a||["#05a3f0","#581908","#E2AEDD","#0C8346","#E0C879","#9D8DF1","#686963","#0fbcf9","#983628","#EBCBF4","#329F5B","#D5D887","#B8CDF8","#8AA29E"],width:187}):""]})},u=function(e){var n=Object(s.useState)([]),t=Object(r.a)(n,2),a=t[0],l=t[1],c=Object(s.useState)(""),o=Object(r.a)(c,2),d=o[0],h=o[1],u=[{name:"Surfaces",href:"surface",text:"#### There are 3 key surface concepts in this library:\n            | Class      | Description |\n            | ----------- | ----------- |\n            | **background** | the background color/surface |\n            | **input** | something the user will input into, i.e. a text input or a button |\n            | **element** | a div that is tangible (i.e. visually shows on screen), this will be like a card holding text or anything that needs styling  inherited |"},{name:"Themes",href:"theme",text:"\n            #### There are 3 main theme concepts in this library:\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **light** | a light theme |\n            | **dark** | a dark mode theme |\n            | **accent** | a chosen accent color to make certain things pop, honestly more a modifier than a theme, but it is changable via css vars like a theme |\n            "},{name:"Basic Modifiers",href:"basic",text:"\n            #### Within a given theme there are a few base style modifiers:\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **accent**| modifier to make something pop by using color |\n            | **contrast**| a high sontrast surface |\n            | **outline**| a surface that has the same color as the background but with an outline to denote it |\n            | **link**| no surface, but bold text that will brighten/contrast when hovered |\n            "},{name:"Interaction Modifiers",href:"interaction",text:"\n            #### Interaction modifiers:\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **highlight** | highlights the element on hover and makes cursor a pointer ot show it is interactable |\n            \n            "},{name:"Elevation Modifiers",href:"elevation",text:"\n            #### Elevation modifiers (drop shadow):\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **elevation-0** | no drop shadow |\n            | **elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on |\n            | **elevation-2** | medium drop shadow, more elevated looking |\n            | **elevation-3** | medium drop shadow, even more elevated looking |\n            | **elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on |\n            \n            #### Elevation modifier on hover (hence the verb float):\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **float-0** | no drop shadow when hoveered |\n            | **float-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on when hovered |\n            | **float-2** | medium drop shadow, more elevated looking when hovered |\n            | **float-3** | medium drop shadow, even more elevated looking when hovered |\n            | **float-4** | largest, but also lightest, gives illusion of being far off the surface its on when hovered |\n            \n            A common way to combine the above is to have an element have a low/no elevation and a higher float\n            "},{name:"Shape Modifiers",href:"shape",text:"\n            #### Shape modifiers (by default everything is square):\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **square** | default, but included class for resetting, or changing via js |\n            | **semi-rounded** | rounded corners |\n            | **rounded** | pill-like shape |\n            | **round** | round, as in a circle, as long as your height and width are set the same |\n            \n            "},{name:"Size Modifiers",href:"size",text:"\n            #### Size modifiers (this affects text size, so it will change the size of inputs/buttons/things that contain text):\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **small** |\n            | **medium** |\n            | **large** |\n            \n            "},{name:"Layout",href:"layout",text:"## Layout\n        #### Layout modifiers help to lay out pages:\n        \n        | Class      | Description |\n        | ----------- | ----------- |\n        | **container** | a standard with centering container i.e. like these docs |\n        | **line-length** | a set reasonable size for inputs you dont want max width |\n        "},{name:"Flex Helpers",href:"flex",text:"\n            ### Helpers\n            these are classes that are just shorhand utiliy classes for styling\n            \n            #### Flex helpers (allowing you to build flex layouts faster using classes):\n            \n            | Class      | Description |\n            | ----------- | ----------- |\n            | **flex** |    display: flex; |\n            | **column** | flex-direction: column; |\n            | **row** | flex-direction: row; |\n            | **align-center** | align-Items: center; |\n            | **justify-center** | justify-content: center; |\n            | **flex-center** | align-items: center;justify-content: center; |\n            | **flex-wrap** | flex-wrap: wrap; |\n            | **flex-fill** | flex: 1; |\n            "},{name:"Spacing Helpers",href:"spacing",text:"coming soon...\n            "}];function j(e,n){return e.filter((function(e){return Object.keys(e).some((function(t){return e[t].toLowerCase().includes(n.toLowerCase())}))}))}return Object(i.jsxs)("div",{className:"element semi-rounded spaced margin text-left",style:{width:"300px",position:"fixed"},children:[Object(i.jsx)("h3",{children:"Search"}),Object(i.jsxs)("div",{className:"flex row flex-center",children:[Object(i.jsx)("input",{value:d,className:"input rounded fill-width margin-none contrast",placeholder:"Search...",onChange:function(e){h(e.target.value),l(j(u,e.target.value))}}),Object(i.jsx)("button",{style:{marginRight:0},className:"input rounded accent text-center",onClick:function(){l(j(u,d)),console.log(j(u,d))},children:"Go"})]}),Object(i.jsx)("h3",{children:"Sections"}),0===d.length?u.map((function(e){return Object(i.jsx)("a",{href:"#".concat(e.href),children:Object(i.jsx)("div",{className:"link padding-half",children:e.name})})})):a.map((function(e){return Object(i.jsx)("a",{href:"#".concat(e.href),children:Object(i.jsx)("div",{className:"link padding-half",children:e.name})})})),Object(i.jsx)("h3",{children:"Accent Color Picker"}),Object(i.jsx)(m,{initialColor:"#05a3f0",name:"accent-element"}),Object(i.jsx)(m,{initialColor:"#0fbcf9",name:"accent-highlight"}),Object(i.jsx)(m,{initialColor:"#fff",name:"accent-text",colors:["#fff","#000"]})]})},j=(t(245),function(e){return Object(i.jsx)("div",{className:"element semi-rounded margin flex row flex-center padding",style:{justifyContent:"space-between"},children:Object(i.jsx)("div",{className:"bold",style:{marginLeft:"1rem"},children:"Documentation"})})}),x=function(e){return Object(i.jsx)("div",{className:"contrast",children:Object(i.jsxs)("div",{className:"container flex row",style:{justifyContent:"space-between"},children:[Object(i.jsx)("div",{className:"element contrast",style:{fontSize:".8rem"},children:"Topography CSS Demo "}),Object(i.jsx)("div",{className:"element contrast",children:"MIT License"})]})})},b=t(568),p=t(566),g=t(567),v=t(4),f=t.n(v),O=t(7),w=t.n(O),N=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Surfaces\n\n| Class      | Description |\n| ----------- | ----------- |\n| **background** | the background color/surface |\n| **element** | a div that is tangible (i.e. visually shows on screen), this will be like a card holding text or anything that needs styling  inherited |\n| **contrast** | a deep contrasting color, by default true black and true white |\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double flex row flex-wrap",children:[Object(i.jsx)("div",{className:"background outline spaced",style:{width:"120px",height:"120px"},children:" background"}),Object(i.jsx)("div",{className:"element outline spaced",style:{width:"120px",height:"120px"},children:"element"}),Object(i.jsx)("div",{className:"contrast outline spaced",style:{width:"120px",height:"120px"},children:"contrast"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:"\n~~~js\n<div className=\"background outline spaced\" style={{ width: '120px', height: '120px' }}> background</div>\n<div className=\"element outline spaced\" style={{ width: '120px', height: '120px' }}>element</div>\n<div className=\"contrast outline spaced\" style={{ width: '120px', height: '120px' }}>contrast</div>\n~~~\n"})]})]})},y=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Themes\n\n| Class      | Description |\n| ----------- | ----------- |\n| **light** | a light theme |\n| **dark** | a dark mode theme |\n| **accent** | a chosen accent color to make certain things pop, honestly more a modifier than a theme, but it is changable via css vars like a theme |\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double",children:[Object(i.jsx)("button",{className:"input light",children:"light"}),Object(i.jsx)("button",{className:"input dark",children:"dark"}),Object(i.jsx)("button",{className:"input accent",children:"accent"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:'\n~~~js\n<button className="input light">light</button>\n<button className="input dark">dark</button>\n<button className="input accent">accent</button>\n~~~\n'})]})]})},k=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Modifiers\n\n| Class      | Description |\n| ----------- | ----------- |\n| **outline**| adds an outline to denote it |\n| **link**| no surface, but bold text that will brighten/contrast when hovered |\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double flex row flex-wrap",children:[Object(i.jsx)("div",{className:"element margin spaced",style:{width:"100px",height:"100px"},children:"basic element"}),Object(i.jsx)("div",{className:"element outline margin spaced",style:{width:"100px",height:"100px"},children:" outline element"}),Object(i.jsx)("div",{className:"element link margin spaced",style:{width:"100px",height:"100px"},children:"link element"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:"\n~~~js\n<div className=\"element margin spaced\" style={{ width: '100px', height: '100px' }}>basic element</div>\n<div className=\"element outline margin spaced\" style={{ width: '100px', height: '100px' }}> outline element</div>\n<div className=\"element link margin spaced\" style={{ width: '100px', height: '100px' }}>link element</div>\n~~~\n"})]})]})},C=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Elevation\n\n| Class      | Description |\n| ----------- | ----------- |\n| **elevation-0** | no drop shadow |\n| **elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on |\n| **elevation-2** | medium drop shadow, more elevated looking |\n| **elevation-3** | medium drop shadow, even more elevated looking |\n| **elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on |\n\n#### Elevation modifier on hover (hence the verb hover-elevation):\n\n| Class      | Description |\n| ----------- | ----------- |\n| **hover-elevation-0** | no drop shadow when hoveered |\n| **hover-elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on when hovered |\n| **hover-elevation-2** | medium drop shadow, more elevated looking when hovered |\n| **hover-elevation-3** | medium drop shadow, even more elevated looking when hovered |\n| **hover-elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on when hovered |\n\nA common way to combine the above is to have an element have a low/no elevation and a higher hover-elevation\n",plugins:[w.a],wrapLongLines:!0})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double",children:[Object(i.jsxs)("div",{className:"flex row flex-wrap",children:[Object(i.jsx)("div",{className:"element margin spaced semi-rounded elevation-0",style:{width:"100px",height:"100px"},children:"elevation 0"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded elevation-1",style:{width:"100px",height:"100px"},children:"elevation 1"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded elevation-2",style:{width:"100px",height:"100px"},children:"elevation 2"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded elevation-3",style:{width:"100px",height:"100px"},children:"elevation 3"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded elevation-4",style:{width:"100px",height:"100px"},children:"elevation 4"})]}),Object(i.jsxs)("div",{className:"flex row flex-wrap",children:[Object(i.jsx)("div",{className:"element margin spaced semi-rounded hover-elevation-0",style:{width:"100px",height:"100px"},children:"hover-elevation 0"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded hover-elevation-1",style:{width:"100px",height:"100px"},children:"hover-elevation 1"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded hover-elevation-2",style:{width:"100px",height:"100px"},children:"hover-elevation 2"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded hover-elevation-3",style:{width:"100px",height:"100px"},children:"hover-elevation 3"}),Object(i.jsx)("div",{className:"element margin spaced semi-rounded hover-elevation-4",style:{width:"100px",height:"100px"},children:"hover-elevation 4"})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)("div",{style:{overflowX:"hidden",minHeight:0,minWidth:0},children:Object(i.jsx)(f.a,{renderers:e.renderers,children:"\n~~~js\n<div className=\"element margin spaced semi-rounded elevation-0\" style={{ width: '100px', height: '100px' }}>elevation 0</div>\n<div className=\"element margin spaced semi-rounded elevation-1\" style={{ width: '100px', height: '100px' }}>elevation 1</div>\n<div className=\"element margin spaced semi-rounded elevation-2\" style={{ width: '100px', height: '100px' }}>elevation 2</div>\n<div className=\"element margin spaced semi-rounded elevation-3\" style={{ width: '100px', height: '100px' }}>elevation 3</div>\n<div className=\"element margin spaced semi-rounded elevation-4\" style={{ width: '100px', height: '100px' }}>elevation 4</div>\n\n<div className=\"element margin spaced semi-rounded hover-elevation-0\" style={{ width: '100px', height: '100px' }}>hover-elevation 0</div>\n<div className=\"element margin spaced semi-rounded hover-elevation-1\" style={{ width: '100px', height: '100px' }}>hover-elevation 1</div>\n<div className=\"element margin spaced semi-rounded hover-elevation-2\" style={{ width: '100px', height: '100px' }}>hover-elevation 2</div>\n<div className=\"element margin spaced semi-rounded hover-elevation-3\" style={{ width: '100px', height: '100px' }}>hover-elevation 3</div>\n<div className=\"element margin spaced semi-rounded hover-elevation-4\" style={{ width: '100px', height: '100px' }}>hover-elevation 4</div>\n~~~\n"})})]})]})},D=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Interaction\n\n| Class      | Description |\n| ----------- | ----------- |\n| **highlight** | highlights the element on hover and makes cursor a pointer ot show it is interactable |\n\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double",children:[Object(i.jsx)("div",{className:"element semi-rounded spaced",children:"normal"}),Object(i.jsx)("div",{className:"element semi-rounded spaced highlight",children:"highlight"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:'\n~~~js\n<div className="element semi-rounded spaced">normal</div>\n<div className="element semi-rounded spaced highlight">highlight</div>\n~~~\n'})]})]})},S=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Shape\n\n| Class      | Description |\n| ----------- | ----------- |\n| **square** | default, but included class for resetting, or changing via js |\n| **semi-rounded** | rounded corners |\n| **rounded** | pill-like shape |\n| **round** | round, as in a circle, as long as your height and width are set the same |\n\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double",children:[Object(i.jsx)("button",{className:"input accent",children:"square"}),Object(i.jsx)("button",{className:"input accent semi-rounded",children:"semi-rounded"}),Object(i.jsx)("button",{className:"input accent rounded",children:"rounded"}),Object(i.jsx)("button",{className:"input accent round",style:{width:"5rem",height:"5rem"},children:"round"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:'\n~~~js\n<button className="input accent">square</button>\n<button className="input accent semi-rounded">semi-rounded</button>\n<button className="input accent rounded">rounded</button>\n<button className="input accent round" style={{ width: \'5rem\', height: \'5rem\' }}>round</button>\n~~~\n'})]})]})},E=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Size\n\n| Class      | Description |\n| ----------- | ----------- |\n| **small** | small font size |\n| **medium** | medium font size |\n| **large** | large font size |\n\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double",children:[Object(i.jsx)("button",{className:"input accent small semi-rounded",children:"small"}),Object(i.jsx)("button",{className:"input accent medium semi-rounded",children:"medium"}),Object(i.jsx)("button",{className:"input accent large semi-rounded",children:"large"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:'\n~~~js\n<button className="input accent small semi-rounded">small</button>\n<button className="input accent medium semi-rounded">medium</button>\n<button className="input accent large semi-rounded">large</button>\n~~~\n'})]})]})},B=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Layout\n\n| Class      | Description |\n| ----------- | ----------- |\n| **container** | a standard with centering container i.e. like these docs |\n| **line-length** | a set reasonable size for inputs you dont want max width |\n\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsxs)("div",{className:"background outline padding-double",children:[Object(i.jsx)("input",{className:"input semi-rounded line-length",placeholder:"line-length input"}),Object(i.jsx)("input",{className:"input semi-rounded fill-width",placeholder:"fill-width input"}),Object(i.jsx)("div",{className:"note spaced",children:"container examples cant be appreciably displayed here, it is what centers these docs, and keeps them from exceeding a comfortable reading width."})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:'\n~~~js\n<input className="input semi-rounded line-length" placeholder="line-length input"></input>\n<input className="input semi-rounded fill-width" placeholder="fill-width input"></input>\n~~~\n'})]})]})},z=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Flex Helpers\nthese are classes that are just shorhand utiliy classes for styling\n\n#### Flex helpers (allowing you to build flex layouts faster using classes):\n\n| Class      | Description |\n| ----------- | ----------- |\n| **flex** |    display: flex; |\n| **flex-column** | flex-direction: column; |\n| **flex-row** | flex-direction: row; |\n| **flex-align-center** | align-Items: center; |\n| **flex-justify-center** | justify-content: center; |\n| **flex-center** | align-items: center;justify-content: center; |\n| **flex-wrap** | flex-wrap: wrap; |\n| **flex-fill** | flex: 1; |\n",plugins:[w.a]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:"\n~~~js\n// coming soon...\n~~~\n"})]})]})},L=function(e){return Object(i.jsxs)("div",{className:"text-left",style:{marginBottom:"4rem"},children:[Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(f.a,{source:"\n## Spacing Helpers\n\n| Class      | Description |\n| ----------- | ----------- |\n| **coming soon** | coming soon |\n\n",plugins:[w.a]})}),Object(i.jsx)("h3",{children:"Examples"}),Object(i.jsx)("div",{className:"background outline padding-double",children:Object(i.jsx)("div",{children:"coming soon... "})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Code"}),Object(i.jsx)(f.a,{renderers:e.renderers,children:"\n~~~js\n// coming soon...\n~~~\n"})]})]})},T=function(e){var n={code:function(n){var t=n.language,s=n.value;return Object(i.jsx)(b.a,{style:"dark"===e.theme?p.a:g.a,language:t,children:s})}};return Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{id:"theme",children:Object(i.jsx)(y,{renderers:n})}),Object(i.jsx)("a",{id:"surface",children:Object(i.jsx)(N,{renderers:n})}),Object(i.jsx)("a",{id:"modifier",children:Object(i.jsx)(k,{renderers:n})}),Object(i.jsx)("a",{id:"elevation",children:Object(i.jsx)(C,{renderers:n})}),Object(i.jsx)("a",{id:"interaction",children:Object(i.jsx)(D,{renderers:n})}),Object(i.jsx)("a",{id:"shape",children:Object(i.jsx)(S,{renderers:n})}),Object(i.jsx)("a",{id:"size",children:Object(i.jsx)(E,{renderers:n})}),Object(i.jsx)("a",{id:"layout",children:Object(i.jsx)(B,{renderers:n})}),Object(i.jsx)("a",{id:"flex",children:Object(i.jsx)(z,{renderers:n})}),Object(i.jsx)("a",{id:"spacing",children:Object(i.jsx)(L,{renderers:n})})]})};var F=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",n=Object(s.useState)(e),t=Object(r.a)(n,2),a=t[0],l=t[1];return Object(i.jsxs)("div",{className:"App background ".concat(a),style:{minHeight:"100vh"},children:[Object(i.jsx)(d,{toggleTheme:function(){l("dark"==a?"light":"dark")}}),Object(i.jsx)("div",{className:"container",style:{paddingTop:"3.5rem"},children:Object(i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[Object(i.jsxs)("div",{className:"margin-double padding flex-fill content",style:{minWidth:0},children:[Object(i.jsx)(j,{}),Object(i.jsx)("div",{className:"element contrast spaced semi-rounded margin",children:Object(i.jsx)(T,{theme:a})})]}),Object(i.jsx)("div",{className:"sidebar",style:{width:"300px",marginTop:"3rem",marginRight:"3rem"},children:Object(i.jsx)(u,{})})]})}),Object(i.jsx)(x,{})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,569)).then((function(n){var t=n.getCLS,i=n.getFID,s=n.getFCP,a=n.getLCP,l=n.getTTFB;t(e),i(e),s(e),a(e),l(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root")),M()}},[[563,1,2]]]);
//# sourceMappingURL=main.3f155e45.chunk.js.map