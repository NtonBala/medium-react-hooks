(this["webpackJsonpmedium-react-hooks"]=this["webpackJsonpmedium-react-hooks"]||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),l=a.n(r),o=a(5),s=a(25),i=a(14),m=a(39);s.a.use(m.a).use(i.e).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{common:{email:"Email",signIn:"Sign in",signUp:"Sign up",home:"Home",password:"Password",username:"Username",newPost:"New Post",loading:"Loading...",pageNotFound:"Page Not Found",popularTags:"Popular tags"},auth:{needAccount:"Need an account?",haveAccount:"Have an account?"},globalFeed:{title:"Global Feed",bannerTitle:"Medium clone",bannerDescription:"A place to share knowledge."},article:{title:"Article",readMore:"Read more..."},errors:{general:"Something went wrong"}}}}});s.a;var u=a(3),g=a(74),b=Object.freeze({main:"/",article:"/article",articles:"/articles",login:"/login",register:"/register",newArticle:"/articles/new",profiles:"/profiles",tags:"/tags"}),E=a(4),d=function(){var e=Object(g.a)().t;return c.a.createElement("div",null,e("article.title"))},p=a(18),f=a(6),v=a(73),j=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)(null),g=Object(u.a)(m,2),b=g[0],E=g[1],d=Object(n.useState)({}),p=Object(u.a)(d,2),j=p[0],N=p[1],h=O("token"),k=Object(u.a)(h,1)[0],w=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N(e),r(!0)}),[]);return Object(n.useEffect)((function(){if(c){var t=Object(f.a)(Object(f.a)({},j),{},{headers:{authorization:k?"Token ".concat(k):""}});Object(v.a)("https://conduit.productionready.io/api"+e,t).then((function(e){i(e.data)})).catch((function(e){E(e.response.data)})).finally((function(){r(!1)}))}}),[c,j,k,e]),[{isLoading:c,response:s,error:b},w]},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)((function(){return localStorage.getItem(e)||t})),c=Object(u.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,l]},N=Object.freeze({login:"/users/login",register:"/users",currentUser:"/user",articles:"/articles",tags:"/tags"}),h=a(38),k=function(e){var t=e.location,a=Object(g.a)().t,r=function(e,t){var a=Object(p.parse)(e).page,n=a?Number(a):1;return{currentPage:n,offset:n*t-t}}(t.search,10),l=r.currentPage,o=r.offset,s=Object(p.stringify)({limit:10,offset:o}),i="".concat(N.articles,"?").concat(s),m=j(i),b=Object(u.a)(m,2),E=b[0],d=E.response,f=E.isLoading,v=E.error,O=b[1];return Object(n.useEffect)((function(){O()}),[O,l]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,a("globalFeed.bannerTitle")),c.a.createElement("p",null,a("globalFeed.bannerDescription")))),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},f&&c.a.createElement(z,null),v&&c.a.createElement(D,null),!f&&d&&c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{articles:d.articles}),c.a.createElement(M,{total:d.articlesCount,limit:10,currentPage:l}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(T,null)))))},w=Object(n.createContext)([{},function(){}]),x=function(e){var t=e.children,a=Object(n.useState)({isLoading:!1,isLoggedIn:null,currentUser:null}),r=Object(u.a)(a,2),l=r[0],o=r[1];return c.a.createElement(w.Provider,{value:[l,o]},t)},y=function(e){var t=Object(g.a)().t,a=e.match.path===b.login,r=t(a?"common.signIn":"common.signUp"),l=a?b.register:b.login,s=t(a?"auth.needAccount":"auth.haveAccount"),i=a?N.login:N.register,m=j(i),d=Object(u.a)(m,2),p=d[0],v=p.isLoading,h=p.response,k=p.error,x=d[1],y=Object(n.useState)(""),L=Object(u.a)(y,2),S=L[0],P=L[1],A=Object(n.useState)(""),C=Object(u.a)(A,2),F=C[0],U=C[1],M=Object(n.useState)(""),T=Object(u.a)(M,2),z=T[0],D=T[1],H=Object(n.useState)(!1),J=Object(u.a)(H,2),B=J[0],G=J[1],R=O("token"),V=Object(u.a)(R,2)[1],q=Object(n.useContext)(w),K=Object(u.a)(q,2)[1];return Object(n.useEffect)((function(){h&&(V(h.user.token),G(!0),K((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoggedIn:!0,isLoading:!1,currentUser:h.user})})))}),[h,K,V]),B?c.a.createElement(E.a,{to:b.main}):c.a.createElement("div",{className:"auth-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},c.a.createElement("h2",{className:"text-xs-center"},r),c.a.createElement("p",{className:"text-xs-center"},c.a.createElement(o.b,{to:l},s)),c.a.createElement("form",{onSubmit:function(e){var t=a?{email:S,password:F}:{username:z,email:S,password:F};e.preventDefault(),K((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoading:!0})})),x({method:"post",data:{user:t}})}},k&&c.a.createElement(I,{backendErrors:k.errors}),c.a.createElement("fieldset",null,!a&&c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:t("common.username"),value:z,onChange:function(e){return D(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{className:"form-control form-control-lg",type:"email",placeholder:t("common.email"),value:S,onChange:function(e){return P(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{className:"form-control form-control-lg",type:"password",placeholder:t("common.password"),value:F,onChange:function(e){return U(e.target.value)}})),c.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:v},r)))))))},L=function(){var e=Object(g.a)().t;return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"200px 0"}},c.a.createElement("h2",null,e("common.pageNotFound")))},S=function(){return c.a.createElement(E.d,null,c.a.createElement(E.b,{path:b.main,component:k,exact:!0}),c.a.createElement(E.b,{path:b.login,component:y,exact:!0}),c.a.createElement(E.b,{path:b.register,component:y,exact:!0}),c.a.createElement(E.b,{path:"".concat(b.articles,"/:slug"),component:d,exact:!0}),!1,c.a.createElement(E.b,{path:"*",component:L}))},P=function(){var e=Object(g.a)().t,t=Object(n.useContext)(w),a=Object(u.a)(t,1)[0],r=a.isLoggedIn,l=a.currentUser;return c.a.createElement("nav",{className:"navbar navbar-light"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,c.a.createElement(o.b,{to:b.main,className:"navbar-brand"},"Medium")),c.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{exact:!0,to:b.main,className:"nav-link"},e("common.home"))),!1===r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:b.login,className:"nav-link"},e("common.signIn"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:b.register,className:"nav-link"},e("common.signUp")))),r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:b.newArticle,className:"nav-link"},c.a.createElement("i",{className:"ion-compose"}),"\xa0 ",e("common.newPost"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat(b.profiles,"/").concat(l.username),className:"nav-link"},c.a.createElement("img",{className:"user-pic",src:l.image,alt:""}),"\xa0 ",l.username))))))},I=function(e){var t=e.backendErrors,a=Object.entries(t).map((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return"".concat(a," ").concat(n.join(" "))}));return c.a.createElement("ul",{className:"error-messages"},a.map((function(e){return c.a.createElement("li",{key:e},e)})))},A=function(e){var t=e.articles,a=Object(g.a)().t;return c.a.createElement("div",null,t.map((function(e,t){var n=e.author,r=e.createdAt,l=e.slug,s=e.title,i=e.description,m=e.tagList;return c.a.createElement("div",{key:t,className:"article-preview"},c.a.createElement("div",{className:"article-meta"},c.a.createElement(o.b,{to:"".concat(b.profiles,"/").concat(n.username)},c.a.createElement("img",{src:n.image,alt:""})),c.a.createElement("div",{className:"info"},c.a.createElement(o.b,{to:"".concat(b.profiles,"/").concat(n.username),className:"author"},n.username),c.a.createElement("span",{className:"date"},r))),c.a.createElement(o.b,{to:"".concat(b.article,"/").concat(l),className:"preview-link"},c.a.createElement("h1",null,s),c.a.createElement("p",null,i),c.a.createElement("span",null,a("article.readMore")),c.a.createElement("ul",{className:"tag-list"},m.map((function(e){return c.a.createElement("li",{key:e,className:"tag-default tag-pill tag-outline"},e)})))))})))},C=a(37),F=a.n(C),U=function(e){var t=e.page,a=e.currentPage,n=e.url,r=F()({"page-item":!0,active:a===t}),l="page=".concat(t),s=n?"".concat(n,"?").concat(l):function(e){return"".concat(e.pathname,"?").concat(l)};return c.a.createElement("li",{className:r},c.a.createElement(o.b,{to:s,className:"page-link"},t))},M=function(e){var t,a,n=e.total,r=e.limit,l=e.url,o=e.currentPage,s=Math.ceil(n/r),i=(t=1,a=s,Object(h.a)(Array(a-t+1).keys()).map((function(e){return e+t})));return c.a.createElement("ul",{className:"pagination"},i.map((function(e){return c.a.createElement(U,{key:e,page:e,currentPage:o,url:l})})))},T=function(){var e=Object(g.a)().t,t=j(N.tags),a=Object(u.a)(t,2),r=a[0],l=r.response,s=r.isLoading,i=r.error,m=a[1];return Object(n.useEffect)((function(){m()}),[m]),s||!l?c.a.createElement(z,null):i?c.a.createElement(D,null):c.a.createElement("div",{className:"sidebar"},c.a.createElement("p",null,e("common.popularTags")),c.a.createElement("div",{className:"tag-list"},l.tags.map((function(e){return c.a.createElement(o.b,{key:e,to:"".concat(b.tags,"/").concat(e),className:"tag-default tag-pill"},e)}))))},z=function(){var e=Object(g.a)().t;return c.a.createElement("div",null,e("common.loading"))},D=function(){var e=Object(g.a)().t;return c.a.createElement("div",null,e("errors.general"))},H=function(e){var t=e.children,a=j(N.currentUser),c=Object(u.a)(a,2),r=c[0].response,l=c[1],o=Object(n.useContext)(w),s=Object(u.a)(o,2)[1],i=O("token"),m=Object(u.a)(i,1)[0];return Object(n.useEffect)((function(){m?(s((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoading:!0})})),l()):s((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoggedIn:!1})}))}),[s,l,m]),Object(n.useEffect)((function(){r&&s((function(e){return Object(f.a)(Object(f.a)({},e),{},{currentUser:r.user,isLoading:!1,isLoggedIn:!0})}))}),[r,s]),t},J=o.a,B=function(){return c.a.createElement(x,null,c.a.createElement(H,null,c.a.createElement(J,null,c.a.createElement(P,null),c.a.createElement(S,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5d98bdb7.chunk.js.map