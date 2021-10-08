(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(41),s=n.n(c),r=n(28),o=n(12),i=n(36),l=n(0),j=n.n(l),u=n(2),b=n(54),d=n.n(b),m=n(24),p=n(53),O=n(74),h=(Object(O.a)({apiKey:"AIzaSyDXVfSLQ7uCbU_NFgEdC3go_20uAGCqJnk",authDomain:"react-apps-learning-361b0.firebaseapp.com",projectId:"react-apps-learning-361b0",storageBucket:"react-apps-learning-361b0.appspot.com",messagingSenderId:"799019611136",appId:"1:799019611136:web:31f65ec076e5dfc19f54e5"}),Object(p.a)(),new m.a),x="[Auth] Login",f="[Auth] Logout",g="[UI] Set Error",_="[UI] Remove Error",v="[UI] Start Loading",N="[UI] Finish Loading",y=function(e){return{type:g,payload:e}},w=function(){return{type:N}},E=function(e,t){return function(n){n({type:v});var a=Object(m.c)();Object(m.d)(a,e,t).then((function(e){var t=e.user;n(k(t.uid,t.displayName)),n(w())})).catch((function(e){console.log(e),n(w()),d.a.fire("Error",e.message,"error")}))}},k=function(e,t){return{type:x,payload:{uid:e,displayName:t}}},C=function(){return{type:f}},A=n(30),L=n(16),S=n(75),I=n.n(S),D=n(4),P=n(17),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(o.a)(t,2),c=n[0],s=n[1],r=function(){s(e)},i=function(e){var t=e.target;s(Object(P.a)(Object(P.a)({},c),{},Object(D.a)({},t.name,t.value)))};return[c,i,r]},B=n(6),F=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).msgError,n=U({name:"Antonio",email:"josek106@gmail.com",password:123456,password2:123456}),a=Object(o.a)(n,2),c=a[0],s=a[1],i=c.name,l=c.email,b=c.password,p=c.password2,O=function(){return 0===i.trim().length?(e(y("Name is required")),!1):I.a.isEmail(l)?b.length<6?(e(y("Password should be at least 6 characters")),!1):b!==p?(e(y("Password doesn\xb4t match")),!1):(e({type:_}),!0):(e(y("Email is not valid")),!1)};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h3",{className:"auth__title",children:"Register"}),Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O()&&e(function(e,t,n){return function(a){var c=Object(m.c)();Object(m.b)(c,e,t).then(function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,Object(m.g)(c,{displayName:n});case 3:a(k(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),d.a.fire("Error",e.message,"error")}))}}(l,b,i))},children:[t&&Object(B.jsx)("div",{className:"auth__alert-error",children:t}),Object(B.jsx)("input",{className:"auth__input",type:"text",placeholder:"Name",name:"name",value:i,autoComplete:"off",onChange:s}),Object(B.jsx)("input",{className:"auth__input",type:"text",placeholder:"Email",name:"email",value:l,autoComplete:"off",onChange:s}),Object(B.jsx)("input",{className:"auth__input",type:"password",placeholder:"Password",name:"password",value:b,onChange:s}),Object(B.jsx)("input",{className:"auth__input",type:"password",placeholder:"Confirm Password",name:"password2",value:p,onChange:s}),Object(B.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Register"}),Object(B.jsx)(A.b,{className:"link mt-5",to:"/auth/login",children:"Already registered?"})]})]})},G=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).loading,n=U({email:"josek106@gmail.com",password:"123456"}),a=Object(o.a)(n,2),c=a[0],s=a[1],i=c.email,l=c.password;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h3",{className:"auth__title",children:"Login"}),Object(B.jsxs)("form",{children:[Object(B.jsx)("input",{className:"auth__input",type:"text",placeholder:"Email",name:"email",autoComplete:"off",value:i,onChange:s}),Object(B.jsx)("input",{className:"auth__input",type:"password",placeholder:"Password",name:"password",value:l,onChange:s}),Object(B.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",onClick:function(t){t.preventDefault(),e(E(i,l))},disabled:t,children:"Login"}),Object(B.jsx)("hr",{}),Object(B.jsxs)("div",{className:"auth__social-networks",children:[Object(B.jsx)("p",{children:"Login with Social Networks"}),Object(B.jsxs)("div",{className:"google-btn",onClick:function(t){t.preventDefault(),e((function(e){var t=Object(m.c)();Object(m.e)(t,h).then((function(t){var n=t.user;e(k(n.uid,n.displayName))}))}))},children:[Object(B.jsx)("div",{className:"google-icon-wrapper",children:Object(B.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(B.jsx)("p",{className:"btn-text",children:Object(B.jsx)("b",{children:"Sign in with google"})})]})]}),Object(B.jsx)(A.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},R=function(){return Object(B.jsx)("div",{className:"auth__main",children:Object(B.jsx)("div",{className:"auth__box-container",children:Object(B.jsxs)(L.d,{children:[Object(B.jsx)(L.b,{path:"/auth/login",component:G}),Object(B.jsx)(L.b,{path:"/auth/register",component:F}),Object(B.jsx)(L.a,{to:"/auth/login"})]})})})},T=n(45),Z=["isAuthenticated","component"],z=function(e){var t=e.isAuthenticated,n=e.component,a=Object(T.a)(e,Z);return Object(B.jsx)(L.b,Object(P.a)(Object(P.a)({},a),{},{component:function(e){return t?Object(B.jsx)(L.a,{to:"/"}):Object(B.jsx)(n,Object(P.a)({},e))}}))},J=["isAuthenticated","component"],K=function(e){var t=e.isAuthenticated,n=e.component,a=Object(T.a)(e,J);return Object(B.jsx)(L.b,Object(P.a)(Object(P.a)({},a),{},{component:function(e){return t?Object(B.jsx)(n,Object(P.a)({},e)):Object(B.jsx)(L.a,{to:"/auth/login"})}}))},M=function(){return Object(B.jsxs)("div",{className:"notes__appbar",children:[Object(B.jsx)("span",{children:" 28 de Agosto de 2020"}),Object(B.jsxs)("div",{children:[Object(B.jsx)("button",{className:"btn",children:"Picture"}),Object(B.jsx)("button",{className:"btn",children:"Save"})]})]})},Q=function(){return Object(B.jsxs)("div",{className:"notes_main-content",children:[Object(B.jsx)(M,{}),Object(B.jsxs)("div",{className:"notes__content",children:[Object(B.jsx)("input",{className:"notes__title-input",type:"text",placeholder:"Title",autoComplete:"off"}),Object(B.jsx)("textarea",{className:"notes__textarea",placeholder:"Entry content"}),Object(B.jsx)("div",{className:"notes__image",children:Object(B.jsx)("img",{src:"https://www.alvientooo.com/wp-content/uploads/2019/03/Lamprea_arbo_lamprea_en_galicia_blog_gastronomia-36-1.jpeg",alt:"Imagen"})})]})]})},V=function(){return Object(B.jsxs)("div",{className:"journal__entry pointer",children:[Object(B.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(https://lh3.googleusercontent.com/_0OiZeWgElIETUMZW8B9wEZR-V0BLMyDBHfK6hdYQVGzsryLQAZ0GEL9_PDi5NlzmpK8bETuJcZ0CtUQKnErvs36Xw=w640-h400-e365-rj-sc0x00ffffff)"}}),Object(B.jsxs)("div",{className:"journal__entry-body",children:[Object(B.jsx)("p",{className:"journal__entry-title",children:"Ad Astrum"}),Object(B.jsx)("p",{className:"journal__entry-content",children:"Lorem Ipsum"})]}),Object(B.jsxs)("div",{className:"journal__entry-date-box",children:[Object(B.jsx)("span",{children:"Monday"}),Object(B.jsx)("h4",{children:"28"})]})]})},X=function(){return Object(B.jsx)("div",{className:"journal__entries",children:[1,2,3,4,5].map((function(e){return Object(B.jsx)(V,{},e)}))})},q=function(){var e=Object(r.b)();return Object(B.jsxs)("aside",{className:"journal__sidebar",children:[Object(B.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(B.jsxs)("h3",{className:"mt-5",children:[Object(B.jsx)("i",{className:"far fa-moon"}),Object(B.jsx)("span",{children:"Fernando"})]}),Object(B.jsx)("button",{className:"btn",onClick:function(){e((function(e){var t=Object(m.c)();Object(m.f)(t),e(C())}))},children:"Logout"})]}),Object(B.jsxs)("div",{className:"journal__new-entry",children:[Object(B.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(B.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object(B.jsx)(X,{})]})},W=function(){return Object(B.jsxs)("div",{className:"journal__main-content",children:[Object(B.jsx)(q,{}),Object(B.jsx)("main",{children:Object(B.jsx)(Q,{})})]})},H=function(){var e=Object(r.b)(),t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(!1),j=Object(o.a)(l,2),u=j[0],b=j[1];return Object(a.useEffect)((function(){var t=Object(i.c)();Object(i.d)(t,(function(t){(null===t||void 0===t?void 0:t.uid)?(e(k(t.uid,t.displayName)),b(!0)):b(!1),s(!1)}))}),[e,s,b]),c?Object(B.jsx)("h1",{children:"Espere..."}):Object(B.jsx)(A.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(L.d,{children:[Object(B.jsx)(z,{path:"/auth",component:R,isAuthenticated:u}),Object(B.jsx)(K,{exact:!0,path:"/",component:W,isAuthenticated:u}),Object(B.jsx)(L.a,{to:"/auth/login"})]})})})},Y=n(39),$=n(77),ee={loading:!1,msgError:null},te="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,ne=Object(Y.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{uid:t.payload.uid,name:t.payload.displayName};case f:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(P.a)(Object(P.a)({},e),{},{msgError:t.payload});case _:return Object(P.a)(Object(P.a)({},e),{},{msgError:null});case v:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case N:return Object(P.a)(Object(P.a)({},e),{},{loading:!1});default:return e}}}),ae=Object(Y.d)(ne,te(Object(Y.a)($.a))),ce=function(){return Object(B.jsx)(r.a,{store:ae,children:Object(B.jsx)(H,{})})};n(177);s.a.render(Object(B.jsx)(ce,{}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.6acf5072.chunk.js.map