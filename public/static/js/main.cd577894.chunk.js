(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{40:function(e,a,n){e.exports=n.p+"static/media/logo.ab10d000.png"},42:function(e,a,n){e.exports=n(58)},47:function(e,a,n){},56:function(e,a,n){},58:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(32),r=n.n(l),s=(n(47),n(41)),m=n(8),u=n(17),i=n(14),o=n(21),h=n(16),E=n.n(h),p=n(19),d=n(24),g=n.n(d),_=n(33),b=n.n(_),f=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:g()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(b.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(u.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))},N=function(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))};function y(){var e=Object(o.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return y=function(){return e},e}var k=E()(y()),v=function(){var e=Object(p.a)(k),a=e.loading,n=e.error,l=e.data;return n&&console.log(n),c.a.createElement(t.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(N,null),a?c.a.createElement("h4",null,"Loading..."):l.launches.map((function(e){return c.a.createElement(f,{key:e.flight_number,launch:e})})))};function x(){var e=Object(o.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return x=function(){return e},e}var L=E()(x()),w=function(e){var a=e.match.params.flight_number;a=parseInt(a);var n=Object(p.a)(L,{variables:{flight_number:a}}),l=n.loading,r=n.error,s=n.data;return console.log(s),r&&console.log(r),c.a.createElement(t.Fragment,null,c.a.createElement("h1",null,"Launch"),l?c.a.createElement("h4",null,"Loading..."):c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:"),s.launch.mission_name),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number:",s.launch.flight_number),c.a.createElement("li",{className:"list-group-item"},"Launch Year:",s.launch.launch_year),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:",c.a.createElement("span",{className:g()({"text-success":s.launch.launch_success,"text-danger":!s.launch.launch_success})}," ",s.launch.launch_success?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID:",s.launch.rocket.rocket_id),c.a.createElement("li",{className:"list-group-item"},"Rocket Name:",s.launch.rocket.rocket_name),c.a.createElement("li",{className:"list-group-item"},"Rocket Type:",s.launch.rocket.rocket_type)),c.a.createElement("hr",null),c.a.createElement(u.b,{to:"/",className:"btn btn-secondary"},"Back")))},D=(n(56),n(40)),Y=n.n(D),j=new s.a({uri:"/graphql"}),F=function(){return c.a.createElement(m.a,{client:j},c.a.createElement(u.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:Y.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(i.a,{exact:!0,path:"/",component:v}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:w}))))};r.a.render(c.a.createElement(F,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cd577894.chunk.js.map