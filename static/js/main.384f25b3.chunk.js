(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.6f6dd185.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/header2.fa2cae8d.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.b0ac7b5f.jpg"},,function(e,t,a){e.exports=a(36)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=(a(27),a(7)),o=a(8),m=a(12),u=a(9),s=a(13),p=(a(28),a(38)),d=(a(29),a(40)),E=a(20),h=a(14),f=a.n(h),g=a(18),b=a.n(g),v=a(19),y=a.n(v),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:f.a,alt:"dom"})}}),r.a.createElement(E.a,{path:"/products",render:function(){return r.a.createElement("img",{src:b.a,alt:"dom"})}}),r.a.createElement(E.a,{path:"/contact",render:function(){return r.a.createElement("img",{src:y.a,alt:"dom"})}}),r.a.createElement(E.a,{path:"/admin",render:function(){return r.a.createElement("img",{src:f.a,alt:"dom"})}}),r.a.createElement(E.a,{render:function(){return r.a.createElement("img",{src:f.a,alt:"dom"})}})))},k=a(37),w=(a(33),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"Panel admina",path:"/admin"}]),j=function(){var e=w.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(k.a,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},O=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBotttom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:16}},n))},z=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores et nemo architecto sed exercitationem velit, quis rem fuga accusamus minima rerum repellendus facere, possimus nobis itaque sunt mollitia laborum corporis."},{id:2,title:"Czym jest paradoks fermiego",author:"Jan Kowalski",text:"222Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores et nemo architecto sed exercitationem velit, quis rem fuga accusamus minima rerum repellendus facere, possimus nobis itaque sunt mollitia laborum corporis."},{id:3,title:"Ciemna strona",author:"Asia Kwiatkowska",text:"333Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores et nemo architecto sed exercitationem velit, quis rem fuga accusamus minima rerum repellendus facere, possimus nobis itaque sunt mollitia laborum corporis."}],C=function(){var e=z.map(function(e){return r.a.createElement(O,Object.assign({key:"article.id"},e))});return r.a.createElement("div",{className:"home"},e)},N=a(15),S=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},q=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona Produktu"),r.a.createElement(S,{id:t.params.id}),r.a.createElement(N.a,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},F=(a(34),["car","bike","motorcicle"]),J=function(){var e=F.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(N.a,{to:"./product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("ul",null,e))},A=(a(35),a(41)),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas!"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(A.a,{when:!this.state.isEmpty,message:"Masz nie wype\u0142niony formularz. Czy na pewno chcesz opu\u015bci\u0107 t\u0119stron\u0119"}))}}]),t}(r.a.Component),B=a(39),P=function(){return r.a.createElement(E.a,{render:function(){return r.a.createElement(B.a,{to:"./login"})}})},K=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"login"},"Login ",r.a.createElement("input",{type:"text"})," "),r.a.createElement("label",{htmlFor:"has\u0142o"},"Has\u0142o ",r.a.createElement("input",{type:"password"})),r.a.createElement("button",{style:{margin:"20px",padding:"5px 30px",backgroundColor:"white",border:"1px solid black"}},"Zaloguj"))},T=function(){return r.a.createElement("div",null,"Nie ma takiej strony :{")},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:C}),r.a.createElement(E.a,{path:"/products",component:J}),r.a.createElement(E.a,{path:"/product/:id",component:q}),r.a.createElement(E.a,{path:"/contact",component:L}),r.a.createElement(E.a,{path:"/admin",component:P}),r.a.createElement(E.a,{path:"/login",component:K}),r.a.createElement(E.a,{component:T})))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,render:function(){return r.a.createElement("p",null,"Jeste\u015b na stronie g\u0142\xf3wnej")}}),r.a.createElement(E.a,{path:"/:page",render:function(e){return r.a.createElement("p",null,"Jeste\u015b na stronie ",e.match.params.page)}}))))},H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(x,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(j,null)),r.a.createElement("section",{className:"page"},r.a.createElement(W,null))),r.a.createElement("footer",null,r.a.createElement(D,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(H,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.384f25b3.chunk.js.map