(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(1),n=a.n(i),c=a(4),r=a.n(c),o=(a(11),a(2)),l=function(e){var t=e.closeClick;return Object(s.jsx)("div",{className:"fixed z-30 inset-0",children:Object(s.jsxs)("div",{className:"flex justify-center items-center min-h-screen",children:[Object(s.jsx)("div",{className:"absolute inset-0 bg-gray-300 opacity-75","aria-hidden":"true",onClick:t}),Object(s.jsx)("div",{className:"bg-white rounded-lg shadow-xl z-20 p-5 m-10",role:"dialog","aria-modal":"true",children:Object(s.jsx)("div",{children:e.children})})]})})},g=function(e){var t=e.images,a=e.currImage,i=e.setCurrImage,n=t.map((function(e,t){var n=" bg-gray-300";t==a&&(n=" bg-gray-800");return Object(s.jsx)("div",{className:"w-4 h-4 rounded-full transition-all duration-500 cursor-pointer"+n,onClick:function(e){i(t)}},e)}));return Object(s.jsx)("div",{className:"flex space-x-2",children:n})},m=function(e){var t=Object(i.useState)(0),a=Object(o.a)(t,2),n=a[0],c=a[1],r=e.images;return Object(s.jsxs)("div",{className:"flex flex-col space-y-4 items-center",children:[Object(s.jsxs)("div",{className:"flex space-x-4 items-center",children:[Object(s.jsx)("p",{className:"cursor-pointer",onClick:function(e){var t=n-1;t<0&&(t=r.length-1),c(t)},children:"<"}),Object(s.jsx)("img",{src:r[n],alt:"Project Image"}),Object(s.jsx)("p",{className:"cursor-pointer",onClick:function(e){var t=n+1;t>=r.length&&(t=0),c(t)},children:">"})]}),Object(s.jsx)(g,{images:r,currImage:n,setCurrImage:c})]})},p=function(e){var t=e.project;return Object(s.jsxs)("div",{className:"flex flex-col",children:[Object(s.jsx)(m,{images:t.images}),Object(s.jsxs)("div",{className:"px-5",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("h4",{children:"Description"}),Object(s.jsx)("p",{children:t.description}),Object(s.jsx)("h4",{children:"Tech Used"}),Object(s.jsx)("p",{children:t.techStack})]})]})},u=function(e){var t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],r=Object(i.useState)("transform transition-all duration-500 object-contain z-10 m-auto"),g=Object(o.a)(r,2),m=g[0],u=g[1],d=Object(i.useState)("absolute flex justify-center items-center inset-0 z-20 invisible"),h=Object(o.a)(d,2),j=h[0],b=h[1],f=e.project,x=null,O=null;return x=null!==f.gitHubLink?Object(s.jsx)("a",{href:f.gitHubLink,target:"blank",children:Object(s.jsx)("img",{className:"w-8 h-8",src:"/icons/github_icon.png",alt:"".concat(f.name," gitHub link")})}):Object(s.jsx)("div",{className:"w-8 h-8"}),n&&(O=Object(s.jsx)(l,{closeClick:function(e){c(!1)},children:Object(s.jsx)(p,{project:f})})),Object(s.jsxs)(s.Fragment,{children:[O,Object(s.jsxs)("div",{className:"flex flex-col border border-black",children:[Object(s.jsxs)("div",{className:"flex relative h-full overflow-hidden cursor-pointer bg-gray-600",onClick:function(e){c(!0)},onMouseEnter:function(e){u(m+" scale-110"),b(j.replaceAll(" invisible",""))},onMouseLeave:function(e){u(m.replaceAll(" scale-110","")),b(j+" invisible")},children:[Object(s.jsx)("img",{className:m,src:f.images[1],alt:"".concat(f.name," image")}),Object(s.jsxs)("div",{className:j,children:[Object(s.jsx)("div",{className:"absolute bg-red-300 opacity-30 inset-0"}),Object(s.jsx)("h5",{className:"bg-blue-300 p-2",children:"Learn More"})]})]}),Object(s.jsxs)("div",{className:"flex space-x-4 p-4",children:[Object(s.jsx)("p",{className:"flex-auto text-center",children:f.name}),x,Object(s.jsx)("a",{href:f.projectLink,target:"blank",children:Object(s.jsx)("img",{className:"w-8 h-8",src:"/icons/external_link_icon.png",alt:"".concat(f.name," project link")})})]})]})]})},d=a(5),h=function e(t,a,s,i,n){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;Object(d.a)(this,e),this.name=t,this.images=a,this.description=s,this.techStack=i,this.projectLink=n,this.gitHubLink=c},j=new h("Beat Machine",["/gifs/beat_machine.gif","/images/beat_machine/image_1.png","/images/beat_machine/image_2.png"],"Mintbean Hackathon Submission (Winner) - Desktop app built in 6 days for a Mintbean Hackathon. The challenge was to create a front end only beat machine that plays beat sounds at a user specified tempo.","React.js / Material-UI","https://beat-machine.netlify.app/","https://github.com/lucasEncarnacao/beat-machine"),b=new h("Best Quest",["/gifs/best_quest.gif","/images/best_quest/image_1.png","/images/best_quest/image_2.png","/images/best_quest/image_3.png","/images/best_quest/image_4.png"],"Launch Academy Capstone Project - Mobile-friendly scavenger hunt app meant to be played with friends. Disappointed with current apps on the market, I wanted to create my own ideal scavenger hunt app I could use with my friends. Incorporating Google Maps API, users can create and venture on scavenger hunts around their area by following clues and riddles to the next destination. When they think they've arrived at the correct location, the app will check their distance to the correct location and show the next clue if they are close enough. Websocket connections via lobbies allow multiple players to play simultaneously and sync their screens.","React.js / Ruby on Rails / Material-UI / Google Maps API / Action Cable / JWT Tokens","https://best-quest.herokuapp.com/","https://github.com/lucasEncarnacao/best-quest"),f=new h("Giraffe Spot",["/gifs/giraffe_spot.gif","/images/giraffe_spot/image_1.png","/images/giraffe_spot/image_2.png","/images/giraffe_spot/image_3.png","/images/giraffe_spot/image_4.png"],"Launch Academy Group Project - Giraffe review site built in a team of 4 for Launch Academy. Users can upload giraffes with a picture and description and review others' giraffes. Users can also upvote and downvote others' reviews.","React.js / Ruby on Rails / Foundation / Devise","https://giraffe-spot.herokuapp.com/","https://github.com/dpaulsen/giraffe-gambit"),x=new h("Target Star",["/gifs/target_star.gif","/images/target_star/image_1.png","/images/target_star/image_2.png","/images/target_star/image_3.png"],"Mobile App on Google Play - Casual 2D puzzle exploration game where users destroy colored targets by combining tools and upgrading them.","C# / Unity Game Engine","https://play.google.com/store/apps/details?id=com.GooseGames.TargetStar"),O=new h("ReRoute",["/gifs/reroute.gif","/images/re_route/image_1.png"],"Mobile App on Google Play - Casual 2D puzzle game where users maneuver on a grid from start to finish using move tiles and avoiding obstacles.","Java / Android Studio","https://play.google.com/store/apps/details?id=com.encarnacao.lucas.reroute"),v=function(e){return Object(s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8",children:[Object(s.jsx)(u,{project:j}),Object(s.jsx)(u,{project:b}),Object(s.jsx)(u,{project:f}),Object(s.jsx)(u,{project:x}),Object(s.jsx)(u,{project:O})]})};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.be6882db.chunk.js.map