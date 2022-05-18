(this["webpackJsonpmodulo-3-repaso-final"]=this["webpackJsonpmodulo-3-repaso-final"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(14),i=s.n(n),c=s(8),r=s(3),l=s(2),o=s(0),u=function(e){return Object(o.jsxs)("header",{className:"col2 border--medium",children:[Object(o.jsx)(c.b,{className:"nav__link",to:"/",children:Object(o.jsx)("h1",{className:"title--big",children:"Netflix"})}),Object(o.jsx)("nav",{className:"text-align-right",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(c.b,{className:"nav__link",to:"/",children:"Inicio"})}),function(){if(!1===e.isUserLogged)return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(c.b,{className:"nav__link",to:"/login",children:"Login"})}),Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(c.b,{className:"nav__link",to:"/signup",children:"Registro"})})]})}(),function(){if(!0===e.isUserLogged)return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(c.b,{className:"nav__link",to:"/profile",children:"Mi perfil"})}),Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(c.b,{className:"nav__link",to:"/my-movies",children:"Mis pel\xedculas"})}),Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)("span",{className:"nav__link",onClick:e.logout,children:"Cerrar sesi\xf3n"})})]})}()]})})]})},d=function(e){var t=function(){return e.movies.map((function(e){return Object(o.jsxs)("li",{className:"card",children:[Object(o.jsx)("img",{className:"card__img",src:e.image,alt:"Car\xe1tula de ".concat(e.title)}),Object(o.jsx)("h3",{className:"card__title",children:e.title}),Object(o.jsxs)("p",{className:"card__description",children:["G\xe9nero: ",e.gender]})]},e.id)}))};return e.movies.length?Object(o.jsx)("ul",{className:"cards",children:t()}):Object(o.jsx)("p",{children:"No hay pel\xedculas en este listado"})},j=(s(30),function(e){var t=function(t){e.handleAllMoviesOptions({value:t.target.value,key:t.target.name})};return Object(o.jsxs)("section",{className:"border--medium",children:[Object(o.jsx)("h1",{className:"title--medium",children:"Estas son todas las pel\xedculas de nuestro cat\xe1logo"}),Object(o.jsxs)("form",{className:"movies__filters",children:[Object(o.jsxs)("div",{className:"movies__filters--gender",children:[Object(o.jsx)("label",{htmlFor:"filterGender",children:"Filtrar por g\xe9nero"}),Object(o.jsxs)("select",{className:"form__input-text",id:"filterGender",name:"gender",value:e.allMoviesOptionGender,onChange:t,children:[Object(o.jsx)("option",{value:"",children:"Todas"}),Object(o.jsx)("option",{value:"Drama",children:"Drama"}),Object(o.jsx)("option",{value:"Comedia",children:"Comedia"})]})]}),Object(o.jsxs)("div",{className:"movies__filters--sort",children:[Object(o.jsxs)("label",{children:["Ordernar: A-Z",Object(o.jsx)("input",{className:"movies__radio",type:"radio",name:"sort",value:"asc",checked:"asc"===e.allMoviesOptionSort,onChange:t})]}),Object(o.jsxs)("label",{children:["Z-A",Object(o.jsx)("input",{className:"movies__radio",type:"radio",name:"sort",value:"desc",checked:"desc"===e.allMoviesOptionSort,onChange:t})]})]})]}),Object(o.jsx)(d,{movies:e.movies})]})}),m=function(e){return Object(o.jsxs)("section",{className:"border--medium",children:[Object(o.jsx)("h1",{className:"title--medium",children:"Estas son todas tus pel\xedculas"}),Object(o.jsx)(d,{movies:e.movies})]})},b=function(e){var t=Object(a.useState)(""),s=Object(r.a)(t,2),n=s[0],i=s[1],c=Object(a.useState)(""),l=Object(r.a)(c,2),u=l[0],d=l[1];return Object(o.jsxs)("section",{className:"border--medium",children:[Object(o.jsx)("h1",{children:"Identif\xedcate"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendLoginToApi({email:n,password:u})},children:[Object(o.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Escribe tu email"}),Object(o.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Escribe tu contrase\xf1a"}),Object(o.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:u,onChange:function(e){d(e.target.value)}}),Object(o.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Entrar"}),function(){if(""!==e.loginErrorMessage)return Object(o.jsxs)("p",{className:"border--medium border--warning mt-1",children:["Error en el login: ",Object(o.jsx)("span",{className:"text--bold",children:e.loginErrorMessage})]})}()]})]})},p=function(e){var t=Object(a.useState)(e.userName||""),s=Object(r.a)(t,2),n=s[0],i=s[1],c=Object(a.useState)(e.userEmail||""),l=Object(r.a)(c,2),u=l[0],d=l[1],j=Object(a.useState)(e.userPassword||""),m=Object(r.a)(j,2),b=m[0],p=m[1];return Object(o.jsxs)("section",{className:"border--medium",children:[Object(o.jsx)("h1",{children:"Mi perfil"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendProfileToApi({name:n,email:u,password:b})},children:[Object(o.jsx)("label",{className:"form__label display-block",htmlFor:"name",children:"Mi nombre"}),Object(o.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Mi email"}),Object(o.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:u,onChange:function(e){d(e.target.value)}}),Object(o.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Mi contrase\xf1a"}),Object(o.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:b,onChange:function(e){p(e.target.value)}}),Object(o.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Guardar"})]})]})},f=function(e){var t=Object(a.useState)(""),s=Object(r.a)(t,2),n=s[0],i=s[1],c=Object(a.useState)(""),l=Object(r.a)(c,2),u=l[0],d=l[1];return Object(o.jsxs)("section",{className:"border--medium",children:[Object(o.jsx)("h1",{children:"Reg\xedstrate"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendSingUpToApi({email:n,password:u})},children:[Object(o.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Escribe tu email"}),Object(o.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Escribe tu contrase\xf1a"}),Object(o.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:u,onChange:function(e){d(e.target.value)}}),Object(o.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Registrar"}),function(){if(""!==e.signUpErrorMessage)return Object(o.jsxs)("p",{className:"border--medium border--warning mt-1",children:["Error en el registro: ",Object(o.jsx)("span",{className:"text--bold",children:e.signUpErrorMessage})]})}()]})]})},O={getMoviesFromApi:function(){return console.log("Se est\xe1n pidiendo las pel\xedculas de la app"),fetch("http://localhost:4000/movies").then((function(e){return e.json()})).then((function(e){return e}))}},h={sendLoginToApi:function(e){return console.log("Se est\xe1n enviando datos al login:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return e.email.includes("gmail")?{success:!0,userId:"123"}:{success:!1,errorMessage:"Usuario no encontrado"}}))},sendSingUpToApi:function(e){return console.log("Se est\xe1n enviando datos al signup:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!1,errorMessage:"Usuario ya existente"}}))},sendProfileToApi:function(e,t){return console.log("Se est\xe1n enviando datos al profile:",e,t),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json")},getProfileFromApi:function(e){return console.log("Se est\xe1n pidiendo datos del profile del usuario:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!0,name:"Maricarmen",email:"mari@mail.com",password:"1234567"}}))},getUserMoviesFromApi:function(e){return console.log("Se est\xe1n pidiendo datos de las pel\xedculas de la usuaria:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!0,movies:[{id:1,title:"Gambita de dama",gender:"Drama",image:"//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg"}]}}))}},x={redirect:function(e){window.location.replace("#".concat(e))},reload:function(e){window.location.reload()}},g=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)(""),c=Object(r.a)(i,2),d=c[0],g=c[1],v=Object(a.useState)(""),_=Object(r.a)(v,2),N=_[0],y=_[1],S=Object(a.useState)(""),k=Object(r.a)(S,2),M=k[0],w=k[1],A=Object(a.useState)([]),E=Object(r.a)(A,2),F=E[0],C=E[1],U=Object(a.useState)(""),T=Object(r.a)(U,2),P=T[0],L=T[1],G=Object(a.useState)(""),D=Object(r.a)(G,2),I=D[0],R=D[1],J=Object(a.useState)([]),Z=Object(r.a)(J,2),q=Z[0],z=Z[1],B=Object(a.useState)(""),H=Object(r.a)(B,2),K=H[0],Q=H[1],V=Object(a.useState)("asc"),W=Object(r.a)(V,2),X=W[0],Y=W[1];Object(a.useEffect)((function(){var e={gender:K,sort:X};O.getMoviesFromApi(e).then((function(e){z(e.movies)}))}),[K,X]),Object(a.useEffect)((function(){""!==s&&h.getProfileFromApi(s).then((function(e){g(e.name),y(e.email),w(e.password)}))}),[s]),Object(a.useEffect)((function(){""!==s&&h.getUserMoviesFromApi(s).then((function(e){C(e.movies)}))}),[s]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{isUserLogged:!!s,logout:function(){x.redirect("/"),x.reload()}}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(j,{movies:q,allMoviesOptionGender:K,allMoviesOptionSort:X,handleAllMoviesOptions:function(e){"gender"===e.key?Q(e.value):"sort"===e.key&&Y(e.value)}})}),Object(o.jsx)(l.a,{path:"/my-movies",children:Object(o.jsx)(m,{movies:F})}),Object(o.jsx)(l.a,{path:"/login",children:Object(o.jsx)(b,{loginErrorMessage:P,sendLoginToApi:function(e){L(""),h.sendLoginToApi(e).then((function(e){!0===e.success?(n(e.userId),x.redirect("/")):L(e.errorMessage)}))}})}),Object(o.jsx)(l.a,{path:"/signup",children:Object(o.jsx)(f,{signUpErrorMessage:I,sendSingUpToApi:function(e){R(""),h.sendSingUpToApi(e).then((function(e){!0===e.success?(n(e.userId),x.redirect("/")):R(e.errorMessage)}))}})}),Object(o.jsx)(l.a,{path:"/profile",children:Object(o.jsx)(p,{userName:d,userEmail:N,userPassword:M,sendProfileToApi:function(e,t){h.sendProfileToApi(e,t).then((function(){h.getProfileFromApi(e).then((function(e){g(e.name),y(e.email),w(e.password)}))}))}})})]})]})};s(31);i.a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(g,{})}),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.21a7a48a.chunk.js.map