(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(1),n=t.n(s),i=t(3),l=t.n(i),r=(t(11),t(5)),j=function(e){var c=e.closeClick;return Object(a.jsx)("div",{className:"fixed z-10 inset-0",children:Object(a.jsxs)("div",{className:"flex justify-center items-center min-h-screen",children:[Object(a.jsx)("div",{className:"absolute inset-0 bg-gray-300 opacity-75","aria-hidden":"true",onClick:c}),Object(a.jsx)("div",{className:"bg-white animate-popIn rounded-lg shadow-xl z-20 p-5",role:"dialog","aria-modal":"true",children:Object(a.jsx)("div",{className:"bg-red-500",children:e.children})})]})})},h=function(e){var c=e.project;return Object(a.jsxs)("div",{className:"flex flex-col",children:[Object(a.jsx)("img",{src:c.images[0],alt:"".concat(c.name," picture")}),Object(a.jsxs)("div",{className:"px-5",children:[Object(a.jsx)("h4",{children:"Description"}),Object(a.jsx)("p",{children:c.description}),Object(a.jsx)("h4",{children:"Tech Stack"}),Object(a.jsx)("p",{children:c.techStack}),Object(a.jsx)("h4",{children:"Challenges"}),Object(a.jsx)("p",{children:c.challenges}),Object(a.jsx)("h4",{children:"Takeaways"}),Object(a.jsx)("p",{children:c.takeaways})]})]})},o=function(e){var c=Object(s.useState)(!1),t=Object(r.a)(c,2),n=t[0],i=t[1],l=e.project,o=null,b=null;return null!==l.gitHubLink&&(o=Object(a.jsx)("a",{href:l.gitHubLink,target:"blank",children:Object(a.jsx)("img",{className:"w-8 h-8",src:"/icons/github_icon.png",alt:"".concat(l.name," gitHub link")})})),n&&(b=Object(a.jsx)(j,{closeClick:function(e){i(!1)},children:Object(a.jsx)(h,{project:l})})),Object(a.jsxs)(a.Fragment,{children:[b,Object(a.jsxs)("div",{className:"flex flex-col bg-purple-500 border border-black",children:[Object(a.jsx)("img",{className:"border border-black",src:l.images[0],alt:"".concat(l.name," image"),onClick:function(e){i(!0)}}),Object(a.jsxs)("div",{className:"flex space-x-4 p-4",children:[Object(a.jsx)("p",{className:"flex-auto text-center",children:l.name}),o,Object(a.jsx)("a",{href:l.projectLink,target:"blank",children:Object(a.jsx)("img",{className:"w-8 h-8",src:"/icons/external_link_icon.png",alt:"".concat(l.name," project link")})})]})]})]})},b=t(4),d=function e(c,t,a,s,n,i,l){var r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;Object(b.a)(this,e),this.name=c,this.images=t,this.description=a,this.techStack=s,this.challenges=n,this.takeaways=i,this.projectLink=l,this.gitHubLink=r},x=function(e){var c=new d("Sample Project",["logo192.png"],"desc example","tech example","challenges example","takeaways example","https://github.com/lucasencarnacao","https://github.com/lucasencarnacao");return Object(a.jsx)(o,{project:c})};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d5d34695.chunk.js.map