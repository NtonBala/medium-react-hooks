(this["webpackJsonpmedium-react-hooks"]=this["webpackJsonpmedium-react-hooks"]||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(24),r=a.n(c),o=a(6),m=a(53),s=Object.freeze({main:"/",articles:"/articles",login:"/login",register:"/register"}),i=function(){var e=Object(m.a)().t;return l.a.createElement("nav",{className:"navbar navbar-light"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,l.a.createElement(o.b,{to:s.main,className:"navbar-brand"},"Medium")),l.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.c,{exact:!0,to:s.main,className:"nav-link"},e("common.home"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.c,{to:s.login,className:"nav-link"},e("common.signIn"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.c,{to:s.register,className:"nav-link"},e("common.signUp"))))))},u=a(3),p=function(){var e=Object(m.a)().t;return l.a.createElement("div",null,e("article.title"))},d=function(){var e=Object(m.a)().t;return l.a.createElement("div",null,e("globalFeed.title"))},g=a(10),E=a(52),b=function(){var e=Object(m.a)().t,t=Object(n.useState)(""),a=Object(g.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),u=Object(g.a)(i,2),p=u[0],d=u[1],b=Object(n.useState)(!1),f=Object(g.a)(b,2),v=f[0],h=f[1];return Object(n.useEffect)((function(){v&&Object(E.a)("https://conduit.productionready.io/api/users/login",{method:"post",data:{user:{email:c,password:p}}}).then((function(e){console.log("success",e),h(!1)})).catch((function(e){console.log("error",e),h(!1)}))}),[c,v,p]),l.a.createElement("div",{className:"auth-page"},l.a.createElement("div",{className:"container page"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},l.a.createElement("h2",{className:"text-xs-center"},e("auth.login")),l.a.createElement("p",{className:"text-xs-center"},l.a.createElement(o.b,{to:s.register},e("auth.needAccount"))),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h(!0)}},l.a.createElement("fieldset",null,l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("input",{className:"form-control form-control-lg",type:"email",placeholder:e("common.email"),value:c,onChange:function(e){return r(e.target.value)}})),l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("input",{className:"form-control form-control-lg",type:"password",placeholder:e("auth.password"),value:p,onChange:function(e){return d(e.target.value)}})),l.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:v},e("common.signIn"))))))))},f=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"200px 0"}},l.a.createElement("h2",null,"Page Not Found"))},v=function(){return l.a.createElement(u.c,null,l.a.createElement(u.a,{path:s.main,component:d,exact:!0}),l.a.createElement(u.a,{path:s.login,component:b,exact:!0}),l.a.createElement(u.a,{path:s.register,component:b,exact:!0}),l.a.createElement(u.a,{path:"".concat(s.articles,"/:slug"),component:p,exact:!0}),!1,l.a.createElement(u.a,{path:"*",component:f}))},h=a(20),N=a(11),x=a(31);h.a.use(x.a).use(N.e).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{common:{email:"Email",signIn:"Sign in",signUp:"Sign up",home:"Home"},auth:{login:"Login",needAccount:"Need an account?",password:"Password"},globalFeed:{title:"Global Feed"},article:{title:"Article"}}}}});h.a;var j=o.a,O=function(){return l.a.createElement(j,null,l.a.createElement(i,null),l.a.createElement(v,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.59c0413c.chunk.js.map