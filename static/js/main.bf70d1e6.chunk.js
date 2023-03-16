(this["webpackJsonpmedium-react-hooks"]=this["webpackJsonpmedium-react-hooks"]||[]).push([[0],{41:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),o=a(3),s=a(26),i=a(15),m=a(39),u={en:{translation:{common:{email:"Email",signIn:"Sign in",signUp:"Sign up",home:"Home",password:"Password",username:"Username",newPost:"New Post",loading:"Loading...",pageNotFound:"Page Not Found",popularTags:"Popular tags",yourFeed:"Your feed",globalFeed:"Global feed",noArticlesYet:"No articles are here... yet.",readMore:"Read more...",settings:"Settings"},auth:{needAccount:"Need an account?",haveAccount:"Have an account?"},globalFeed:{title:"Global Feed",bannerTitle:"Medium clone",bannerDescription:"A place to share knowledge."},errors:{general:"Something went wrong"},articleForm:{titlePlaceholder:"Article title",descriptionPlaceholder:"What is this article about?",bodyPlaceholder:"Write your article (in markdown)",tagListPlaceholder:"Enter tags",submitButton:"Publish Article"},article:{edit:"Edit Article",delete:"Delete Article"},settings:{title:"Your settings",profilePicturePlaceholder:"URL of profile picture",bioPlaceholder:"Short bio",update:"Update settings",logout:"Or click here to logout"},profile:{posts:"My Posts",favorites:"Favorites Posts"}}}};s.a.use(m.a).use(i.e).init({fallbackLng:"en",interpolation:{escapeValue:!1},resources:u});s.a;var E=a(2),f=a(75),d=Object.freeze({main:"/",articles:"/articles",login:"/login",register:"/register",newArticle:"/articles/new",profiles:"/profiles",tags:"/tags",feed:"/feed",settings:"/settings"}),g=a(5),p=a(7),b=a(74),v=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),o=Object(E.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)(null),u=Object(E.a)(m,2),f=u[0],d=u[1],g=Object(n.useState)({}),v=Object(E.a)(g,2),O=v[0],j=v[1],h=N("token"),y=Object(E.a)(h,1)[0],x=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j(e),r(!0)}),[]);return Object(n.useEffect)((function(){if(c){var t=Object(p.a)(Object(p.a)({},O),{},{headers:{authorization:y?"Token ".concat(y):""}});Object(b.a)("https://conduit.productionready.io/api"+e,t).then((function(e){i(e.data)})).catch((function(e){d(e.response.data)})).finally((function(){r(!1)}))}}),[c,O,y,e]),[{isLoading:c,response:s,error:f},x]},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)((function(){return localStorage.getItem(e)||t})),c=Object(E.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,l]},O=Object.freeze({login:"/users/login",register:"/users",currentUser:"/user",articles:"/articles",tags:"/tags",feed:"/articles/feed",profiles:"/profiles"}),j=function(e){var t=e.tags;return t.length>0?c.a.createElement("ul",{className:"tag-list"},t.map((function(e){return c.a.createElement("li",{key:e,className:"tag-default tag-pill tag-outline"},e)}))):null},h={isLoading:!1,isLoggedIn:null,currentUser:null},y=function(e,t){switch(t.type){case"LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"SET_AUTHORIZED":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:!0,isLoading:!1,currentUser:t.payload});case"SET_UNAUTHORIZED":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:!1});case"LOGOUT":return Object(p.a)(Object(p.a)({},h),{},{isLoggedIn:!1});default:return e}},x=Object(n.createContext)(),w=function(e){var t=e.children,a=Object(n.useReducer)(y,h);return c.a.createElement(x.Provider,{value:a},t)},S=function(e){var t=e.article,a=t.title,r=t.author,l=t.createdAt,s=t.slug,i=e.deleteArticle,m=Object(f.a)().t,u=Object(n.useContext)(x),g=Object(E.a)(u,1)[0],p=Boolean(g.isLoggedIn)&&r.username===g.currentUser.username;return c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,a),c.a.createElement("div",{className:"article-meta"},c.a.createElement(o.b,{to:"".concat(d.profiles,"/").concat(r.username)},c.a.createElement("img",{src:r.image,alt:""})," "),c.a.createElement("div",{className:"info"},c.a.createElement(o.b,{to:"".concat(d.profiles,"/").concat(r.username)},r.username),c.a.createElement("span",{className:"date"},l)),p&&c.a.createElement("span",null,c.a.createElement(o.b,{className:"btn btn-outline-secondary btn-sm",to:"".concat(d.articles,"/").concat(s,"/").concat("edit")},c.a.createElement("i",{className:"ion-edit"}),"\xa0",m("article.edit")),"\xa0",c.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:i},c.a.createElement("i",{className:"ion-trash-a"}),"\xa0",m("article.delete"))))))},L=function(e){var t=e.match.params.slug,a="".concat(O.articles,"/").concat(t),r=v(a),l=Object(E.a)(r,2),o=l[0],s=o.response,i=o.isLoading,m=o.error,u=l[1],f=v(a),p=Object(E.a)(f,2),b=p[0].response,N=p[1],h=Object(n.useState)(!1),y=Object(E.a)(h,2),x=y[0],w=y[1];return Object(n.useEffect)((function(){u()}),[u]),Object(n.useEffect)((function(){null!==b&&w(!0)}),[b]),x?c.a.createElement(g.a,{to:d.main}):c.a.createElement("div",{className:"article-page"},!i&&s&&c.a.createElement(S,{article:s.article,deleteArticle:function(){N({method:"delete"})}}),c.a.createElement("div",{className:"container page"},i&&c.a.createElement(ne,null),m&&c.a.createElement(ce,null),!i&&s&&c.a.createElement("div",{className:"row article-content"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement("div",null,c.a.createElement("p",null,s.article.body)),c.a.createElement(j,{tags:s.article.tagList})))))},k=a(13),C=a(38),P=function(e,t){var a=Object(k.parse)(e).page,n=a?Number(a):1;return{currentPage:n,offset:n*t-t}},U=function(e){var t=e.location,a=P(t.search,10),r=a.currentPage,l=a.offset,o=Object(k.stringify)({limit:10,offset:l}),s="".concat(O.articles,"?").concat(o),i=v(s),m=Object(E.a)(i,2),u=m[0],f=u.response,d=u.isLoading,g=u.error,p=m[1],b=Object(n.useContext)(x),N=Object(E.a)(b,1)[0];return Object(n.useEffect)((function(){p()}),[p,r]),c.a.createElement("div",{className:"home-page"},!1===N.isLoggedIn&&c.a.createElement(se,null),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(re,null),d&&c.a.createElement(ne,{className:"article-preview"}),g&&c.a.createElement(ce,{className:"article-preview"}),!d&&f&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,{articles:f.articles}),c.a.createElement(te,{total:f.articlesCount,limit:10,currentPage:r}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(ae,null)))))},A=function(e){var t=e.isLoginView,a=Object(f.a)().t,n=a(t?"common.signIn":"common.signUp"),r=a(t?"auth.needAccount":"auth.haveAccount"),l=t?d.register:d.login;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"text-xs-center"},n),c.a.createElement("p",{className:"text-xs-center"},c.a.createElement(o.b,{to:l},r)))},I=function(e){var t=Object(f.a)().t,a=e.match.path===d.login,r=t(a?"common.signIn":"common.signUp"),l=a?O.login:O.register,o=Object(n.useState)(""),s=Object(E.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)(""),p=Object(E.a)(u,2),b=p[0],j=p[1],h=Object(n.useState)(""),y=Object(E.a)(h,2),w=y[0],S=y[1],L=function(e){var t=v(e),a=Object(E.a)(t,2),c=a[0],r=c.isLoading,l=c.response,o=c.error,s=a[1],i=N("token"),m=Object(E.a)(i,2),u=m[0],f=m[1],d=Object(n.useContext)(x),g=Object(E.a)(d,2),p=g[0],b=g[1];return Object(n.useEffect)((function(){l&&(f(l.user.token),b({type:"SET_AUTHORIZED",payload:l.user}))}),[b,l,f]),[{isLoading:r,error:o,token:u,currentUserState:p},function(e){b({type:"LOADING"}),s({method:"post",data:{user:e}})}]}(l),k=Object(E.a)(L,2),C=k[0],P=C.isLoading,U=C.error,I=C.currentUserState,F=k[1];return I.isLoggedIn?c.a.createElement(g.a,{to:d.feed}):c.a.createElement("div",{className:"auth-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},c.a.createElement(A,{isLoginView:a}),c.a.createElement("form",{onSubmit:function(e){var t=a?{email:i,password:b}:{username:w,email:i,password:b};e.preventDefault(),F(t)}},U&&c.a.createElement(q,{backendErrors:U.errors}),c.a.createElement("fieldset",null,!a&&c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:t("common.username"),value:w,onChange:function(e){return S(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{className:"form-control form-control-lg",type:"email",placeholder:t("common.email"),value:i,onChange:function(e){return m(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{className:"form-control form-control-lg",type:"password",placeholder:t("common.password"),value:b,onChange:function(e){return j(e.target.value)}})),c.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:P},r)))))))},F=function(){var e=Object(f.a)().t;return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"200px 0"}},c.a.createElement("h2",null,e("common.pageNotFound")))},T=function(e){var t=e.location,a=e.match.params.slug,r=P(t.search,10),l=r.currentPage,o=r.offset,s=Object(k.stringify)({limit:10,offset:o,tag:a}),i="".concat(O.articles,"?").concat(s),m=v(i),u=Object(E.a)(m,2),f=u[0],d=f.response,g=f.isLoading,p=f.error,b=u[1],N=Object(n.useContext)(x),j=Object(E.a)(N,1)[0];return Object(n.useEffect)((function(){b()}),[b,l,a]),c.a.createElement("div",{className:"home-page"},!1===j.isLoggedIn&&c.a.createElement(se,null),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(re,{tagName:a}),g&&c.a.createElement(ne,{className:"article-preview"}),p&&c.a.createElement(ce,{className:"article-preview"}),!g&&d&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,{articles:d.articles}),c.a.createElement(te,{total:d.articlesCount,limit:10,currentPage:l}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(ae,null)))))},D=function(e){var t=e.location,a=P(t.search,10),r=a.currentPage,l=a.offset,o=Object(k.stringify)({limit:10,offset:l}),s="".concat(O.feed,"?").concat(o),i=v(s),m=Object(E.a)(i,2),u=m[0],f=u.response,d=u.isLoading,g=u.error,p=m[1];return Object(n.useEffect)((function(){p()}),[p,r]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(re,null),d&&c.a.createElement(ne,{className:"article-preview"}),g&&c.a.createElement(ce,{className:"article-preview"}),!d&&f&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,{articles:f.articles}),c.a.createElement(te,{total:f.articlesCount,limit:10,currentPage:r}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(ae,null)))))},R={title:"",description:"",body:"",tagList:[]},H=function(){var e=O.articles,t=v(e),a=Object(E.a)(t,2),r=a[0],l=r.response,o=r.error,s=a[1],i=Object(n.useState)(!1),m=Object(E.a)(i,2),u=m[0],f=m[1];return Object(n.useEffect)((function(){l&&f(!0)}),[l]),u?c.a.createElement(g.a,{to:"".concat(d.articles,"/").concat(l.article.slug)}):c.a.createElement("div",null,c.a.createElement(le,{initialValues:R,onSubmit:function(e){s({method:"post",data:{article:e}})},errors:o&&o.errors||{}}))},G=function(e){var t=e.match.params.slug,a="".concat(d.articles,"/").concat(t),r=v(a),l=Object(E.a)(r,2),o=l[0].response,s=l[1],i=v(a),m=Object(E.a)(i,2),u=m[0],f=u.response,p=u.error,b=m[1],N=Object(n.useState)(null),j=Object(E.a)(N,2),h=j[0],y=j[1],x=Object(n.useState)(!1),w=Object(E.a)(x,2),S=w[0],L=w[1];return Object(n.useEffect)((function(){s()}),[s]),Object(n.useEffect)((function(){o&&y({title:o.article.title,description:o.article.description,body:o.article.body,tagList:o.article.tagList})}),[o]),Object(n.useEffect)((function(){f&&L(!0)}),[f]),S?c.a.createElement(g.a,{to:"".concat(O.articles,"/").concat(t)}):c.a.createElement("div",null,c.a.createElement(le,{onSubmit:function(e){b({method:"put",data:{article:e}})},errors:p&&p.errors||{},initialValues:h}))},M=function(){var e=Object(f.a)().t,t=Object(n.useContext)(x),a=Object(E.a)(t,2),r=a[0],l=a[1],o=O.currentUser,s=v(o),i=Object(E.a)(s,2),m=i[0],u=m.response,d=m.error,g=i[1],b=Object(n.useState)(""),j=Object(E.a)(b,2),h=j[0],y=j[1],w=Object(n.useState)(""),S=Object(E.a)(w,2),L=S[0],k=S[1],C=Object(n.useState)(""),P=Object(E.a)(C,2),U=P[0],A=P[1],I=Object(n.useState)(""),F=Object(E.a)(I,2),T=F[0],D=F[1],R=Object(n.useState)(""),H=Object(E.a)(R,2),G=H[0],M=H[1],V=N("token"),Z=Object(E.a)(V,2)[1];return Object(n.useEffect)((function(){r.currentUser&&(y(r.currentUser.image),k(r.currentUser.username),A(r.currentUser.bio),D(r.currentUser.email))}),[r.currentUser]),Object(n.useEffect)((function(){u&&l({type:"SET_AUTHORIZED",payload:u.user})}),[l,u]),c.a.createElement("div",{className:"settings-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},c.a.createElement("h1",{className:"text-xs-center"},e("settings.title")),d&&c.a.createElement(q,{backendErrors:d.errors}),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g({method:"put",data:{user:Object(p.a)(Object(p.a)({},r.currentUser),{},{image:h,username:L,bio:U,email:T,password:G})}})}},c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:e("settings.profilePicturePlaceholder"),value:h,onChange:function(e){return y(e.target.value)}}))),c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:e("common.username"),value:L,onChange:function(e){return k(e.target.value)}}))),c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("textarea",{className:"form-control form-control-lg",rows:"8",placeholder:e("settings.bioPlaceholder"),value:U,onChange:function(e){return A(e.target.value)}}))),c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:e("common.email"),value:T,onChange:function(e){return D(e.target.value)}}))),c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control form-control-lg",placeholder:e("common.password"),value:G,onChange:function(e){return M(e.target.value)}}))),c.a.createElement("fieldset",null,c.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right"},e("settings.update")))),c.a.createElement("hr",null),c.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),Z(""),l({type:"LOGOUT"})}},e("settings.logout"))))))},V=function(e){var t=e.profile,a=t.image,n=t.username,r=t.bio;return c.a.createElement("div",{className:"profile-page"},c.a.createElement("div",{className:"user-info"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},c.a.createElement("img",{alt:"",className:"user-img",src:a}),c.a.createElement("h4",null,n),c.a.createElement("p",null,r))))))},Z=function(e){var t=e.username,a=Object(f.a)().t;return c.a.createElement("div",{className:"articles-toggle"},c.a.createElement("ul",{className:"nav nav-pills outline-active"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",to:"".concat(d.profiles,"/").concat(t),exact:!0},a("profile.posts"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",to:"".concat(d.profiles,"/").concat(t,"/").concat("favorites")},a("profile.favorites")))))},_=function(e){var t=e.location,a=e.match.params.slug,r=(t.pathname.includes("favorites"),"".concat(O.profiles,"/").concat(a)),l=v(r),o=Object(E.a)(l,2),s=o[0].response,i=o[1];return Object(n.useEffect)((function(){i()}),[i]),s?c.a.createElement("div",{className:"profile-page"},c.a.createElement(V,{profile:s.profile}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},c.a.createElement(Z,{username:s.profile.username}),"User Articles")))):null},B=function(e){var t=e.children,a=v(O.currentUser),c=Object(E.a)(a,2),r=c[0].response,l=c[1],o=Object(n.useContext)(x),s=Object(E.a)(o,2)[1],i=N("token"),m=Object(E.a)(i,1)[0];return Object(n.useEffect)((function(){m?(s({type:"LOADING"}),l()):s({type:"SET_UNAUTHORIZED"})}),[s,l,m]),Object(n.useEffect)((function(){r&&s({type:"SET_AUTHORIZED",payload:r.user})}),[s,r]),t},Y=a(40),z=function(e){var t=e.component,a=Object(Y.a)(e,["component"]),r=Object(n.useContext)(x),l=Object(E.a)(r,1)[0];return c.a.createElement(g.b,Object.assign({},a,{render:function(e){return!1===l.isLoggedIn?c.a.createElement(g.a,{to:d.main}):c.a.createElement(t,e)}}))},J=function(){return c.a.createElement(g.d,null,c.a.createElement(g.b,{path:d.main,component:U,exact:!0}),c.a.createElement(g.b,{path:"".concat(d.profiles,"/:slug"),component:_,exact:!0}),c.a.createElement(g.b,{path:"".concat(d.profiles,"/:slug/").concat("favorites"),component:_,exact:!0}),c.a.createElement(z,{path:d.settings,component:M}),c.a.createElement(z,{path:d.newArticle,component:H}),c.a.createElement(z,{path:"".concat(d.articles,"/:slug/").concat("edit"),component:G}),c.a.createElement(z,{path:d.feed,component:D}),c.a.createElement(g.b,{path:"".concat(d.tags,"/:slug"),component:T}),c.a.createElement(g.b,{path:d.login,component:I}),c.a.createElement(g.b,{path:d.register,component:I}),c.a.createElement(g.b,{path:"".concat(d.articles,"/:slug"),component:L}),!1,c.a.createElement(g.b,{path:"*",component:F}))},W=function(){var e=Object(f.a)().t,t=Object(n.useContext)(x),a=Object(E.a)(t,1)[0],r=a.isLoggedIn,l=a.currentUser;return c.a.createElement("nav",{className:"navbar navbar-light"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,c.a.createElement(o.b,{to:d.main,className:"navbar-brand"},"Medium")),c.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{exact:!0,to:d.main,className:"nav-link"},e("common.home"))),!1===r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:d.login,className:"nav-link"},e("common.signIn"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:d.register,className:"nav-link"},e("common.signUp")))),r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:d.newArticle,className:"nav-link"},c.a.createElement("i",{className:"ion-compose"}),"\xa0 ",e("common.newPost"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:d.settings,className:"nav-link"},c.a.createElement("i",{className:"ion-gear-a"}),"\xa0 ",e("common.settings"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat(d.profiles,"/").concat(l.username),className:"nav-link"},c.a.createElement("img",{className:"user-pic",src:l.image,alt:""}),"\xa0 ",l.username))))))},q=function(e){var t=e.backendErrors,a=Object.entries(t).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return"".concat(a," ").concat(n.join(" "))}));return c.a.createElement("ul",{className:"error-messages"},a.map((function(e){return c.a.createElement("li",{key:e},e)})))},K=function(e){var t=e.article,a=t.author,r=t.createdAt,l=t.slug,s=t.title,i=t.description,m=t.tagList,u=t.favorited,g=t.favoritesCount,p=Object(f.a)().t,b=Object(n.useContext)(x),v=Object(E.a)(b,1)[0];return c.a.createElement("div",{className:"article-preview"},c.a.createElement("div",{className:"article-meta"},c.a.createElement(o.b,{to:"".concat(d.profiles,"/").concat(a.username)},c.a.createElement("img",{src:a.image,alt:""})),c.a.createElement("div",{className:"info"},c.a.createElement(o.b,{to:"".concat(d.profiles,"/").concat(a.username),className:"author"},a.username),c.a.createElement("span",{className:"date"},r)),v.isLoggedIn&&c.a.createElement("div",{className:"pull-xs-right"},c.a.createElement(oe,{isFavorite:u,favoritesCount:g,articleSlug:l}))),c.a.createElement(o.b,{to:"".concat(d.articles,"/").concat(l),className:"preview-link"},c.a.createElement("h1",null,s),c.a.createElement("p",null,i),c.a.createElement("span",null,p("common.readMore")),c.a.createElement(j,{tags:m})))},Q=function(e){var t=e.articles,a=Object(f.a)().t;return c.a.createElement("div",null,0===t.length&&c.a.createElement("div",{className:"article-preview"},a("common.noArticlesYet")),t.map((function(e,t){return c.a.createElement(K,{article:e,key:t})})))},X=a(21),$=a.n(X),ee=function(e){var t=e.page,a=e.currentPage,n=e.url,r=$()({"page-item":!0,active:a===t}),l="page=".concat(t),s=n?"".concat(n,"?").concat(l):function(e){return"".concat(e.pathname,"?").concat(l)};return c.a.createElement("li",{className:r},c.a.createElement(o.b,{to:s,className:"page-link"},t))},te=function(e){var t,a,n=e.total,r=e.limit,l=e.url,o=e.currentPage,s=Math.ceil(n/r),i=(t=1,a=s,Object(C.a)(Array(a-t+1).keys()).map((function(e){return e+t})));return c.a.createElement("ul",{className:"pagination"},i.map((function(e){return c.a.createElement(ee,{key:e,page:e,currentPage:o,url:l})})))},ae=function(){var e=Object(f.a)().t,t=v(O.tags),a=Object(E.a)(t,2),r=a[0],l=r.response,s=r.isLoading,i=r.error,m=a[1];return Object(n.useEffect)((function(){m()}),[m]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("p",null,e("common.popularTags")),s&&c.a.createElement(ne,null),i&&c.a.createElement(ce,null),l&&c.a.createElement("div",{className:"tag-list"},l.tags.map((function(e){return c.a.createElement(o.b,{key:e,to:"".concat(d.tags,"/").concat(e),className:"tag-default tag-pill"},e)}))))},ne=function(e){var t=Object(f.a)().t;return c.a.createElement("div",e,t("common.loading"))},ce=function(e){var t=Object(f.a)().t;return c.a.createElement("div",e,t("errors.general"))},re=function(e){var t=e.tagName,a=Object(f.a)().t,r=Object(n.useContext)(x),l=Object(E.a)(r,1)[0];return c.a.createElement("div",{className:"feed-toggle"},c.a.createElement("ul",{className:"nav nav-pills outline-active"},l.isLoggedIn&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:d.feed,className:"nav-link"},a("common.yourFeed"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:d.main,className:"nav-link",exact:!0},a("common.globalFeed"))),t&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat(d.tags,"/").concat(t),className:"nav-link"},c.a.createElement("i",{className:"ion-pound"}),"\xa0",t))))},le=function(e){var t=e.onSubmit,a=e.errors,r=e.initialValues,l=Object(f.a)().t,o=Object(n.useState)(""),s=Object(E.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)(""),d=Object(E.a)(u,2),g=d[0],p=d[1],b=Object(n.useState)(""),v=Object(E.a)(b,2),N=v[0],O=v[1],j=Object(n.useState)(""),h=Object(E.a)(j,2),y=h[0],x=h[1];return Object(n.useEffect)((function(){r&&(m(r.title),O(r.description),p(r.body),x(r.tagList.join(" ")))}),[r]),c.a.createElement("div",{className:"editor-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10 offset-md-1 col-xs-12"},a&&c.a.createElement(q,{backendErrors:a}),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:i,description:N,body:g,tagList:y.length>0?y.split(" "):[]})}},c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:l("articleForm.titlePlaceholder"),value:i,onChange:function(e){return m(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:l("articleForm.descriptionPlaceholder"),value:N,onChange:function(e){return O(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("textarea",{className:"form-control",rows:"8",placeholder:l("articleForm.bodyPlaceholder"),value:g,onChange:function(e){return p(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:l("articleForm.tagListPlaceholder"),value:y,onChange:function(e){return x(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("button",{type:"submit",className:"btn btn-lg pull-xs-right btn-primary"},l("articleForm.submitButton")))))))))},oe=function(e){var t=e.isFavorite,a=e.favoritesCount,n=e.articleSlug,r="".concat(d.articles,"/").concat(n,"/favorite"),l=v(r),o=Object(E.a)(l,2),s=o[0].response,i=o[1],m=s?s.article.favoritesCount:a,u=s?s.article.favorited:t,f=$()({btn:!0,"btn-sm":!0,"btn-primary":u,"btn-outline-primary":!u});return c.a.createElement("button",{className:f,onClick:function(e){e.preventDefault(),i({method:u?"delete":"post"})}},c.a.createElement("i",{className:"ion-heart"}),c.a.createElement("span",null,"\xa0 ",m))},se=function(){var e=Object(f.a)().t;return c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,e("globalFeed.bannerTitle")),c.a.createElement("p",null,e("globalFeed.bannerDescription"))))},ie=o.a,me=function(){return c.a.createElement(w,null,c.a.createElement(B,null,c.a.createElement(ie,null,c.a.createElement(W,null),c.a.createElement(J,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(me,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bf70d1e6.chunk.js.map