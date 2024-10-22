import{s as U,a as F,c as Z,n as ee}from"../chunks/scheduler.BfJEPAwo.js";import{S as W,i as X,k as J,e as k,t as j,s as q,l as M,c as E,a as D,b as B,d,f as y,m as L,n as v,g as H,h as _,o as A,j as G,p as K,q as I,r as N,u as w,v as C,w as Q}from"../chunks/index.XIGGrj6i.js";import{p as te}from"../chunks/stores.U-DHwMYf.js";import{P as Y,M as re}from"../chunks/posts.CVXxWdyX.js";function se(a){let t,r;return t=new Y({props:{$$slots:{default:[le]},$$scope:{ctx:a}}}),{c(){M(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),r=!0},p(e,s){const c={};s&3&&(c.$$scope={dirty:s,ctx:e}),t.$set(c)},i(e){r||(w(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function ae(a){let t,r,e,s,c,i,m,g;return m=new Y({props:{$$slots:{default:[ne]},$$scope:{ctx:a}}}),{c(){t=k("div"),r=k("div"),e=k("img"),c=q(),i=k("div"),M(m.$$.fragment),this.h()},l(f){t=E(f,"DIV",{class:!0});var u=D(t);r=E(u,"DIV",{class:!0});var h=D(r);e=E(h,"IMG",{src:!0,class:!0}),h.forEach(d),c=y(u),i=E(u,"DIV",{class:!0});var p=D(i);L(m.$$.fragment,p),p.forEach(d),u.forEach(d),this.h()},h(){F(e.src,s=a[0].heroImage)||v(e,"src",s),v(e,"class","border-4 border-amber-400"),v(r,"class","col-span-1"),v(i,"class","col-span-2"),v(t,"class","grid grid-cols-1 mb-8 lg:grid-cols-3 lg:gap-8")},m(f,u){H(f,t,u),_(t,r),_(r,e),_(t,c),_(t,i),A(m,i,null),g=!0},p(f,u){(!g||u&1&&!F(e.src,s=f[0].heroImage))&&v(e,"src",s);const h={};u&3&&(h.$$scope={dirty:u,ctx:f}),m.$set(h)},i(f){g||(w(m.$$.fragment,f),g=!0)},o(f){I(m.$$.fragment,f),g=!1},d(f){f&&d(t),C(m)}}}function le(a){let t=a[0].intro+"",r;return{c(){r=j(t)},l(e){r=B(e,t)},m(e,s){H(e,r,s)},p(e,s){s&1&&t!==(t=e[0].intro+"")&&G(r,t)},d(e){e&&d(r)}}}function ne(a){let t=a[0].intro+"",r;return{c(){r=j(t)},l(e){r=B(e,t)},m(e,s){H(e,r,s)},p(e,s){s&1&&t!==(t=e[0].intro+"")&&G(r,t)},d(e){e&&d(r)}}}function oe(a){let t,r,e=a[0].title+"",s,c,i,m=a[0].subtitle+"",g,f,u,h,p,$,T,l,x;const O=[ae,se],b=[];function R(n,o){return n[0].heroImage?0:1}p=R(a),$=b[p]=O[p](a);var S=a[0].body;function z(n,o){return{}}return S&&(l=J(S,z())),{c(){t=k("article"),r=k("h2"),s=j(e),c=q(),i=k("h3"),g=j(m),f=q(),u=k("div"),h=q(),$.c(),T=q(),l&&M(l.$$.fragment),this.h()},l(n){t=E(n,"ARTICLE",{});var o=D(t);r=E(o,"H2",{class:!0});var V=D(r);s=B(V,e),V.forEach(d),c=y(o),i=E(o,"H3",{class:!0});var P=D(i);g=B(P,m),f=y(P),u=E(P,"DIV",{class:!0}),D(u).forEach(d),P.forEach(d),h=y(o),$.l(o),T=y(o),l&&L(l.$$.fragment,o),o.forEach(d),this.h()},h(){v(r,"class","font-sans text-3xl text-center text-purple-900 mb-4"),v(u,"class","h-px bg-amber-400 w-1/2 mx-auto mt-4"),v(i,"class","font-sans text-xl text-center text-purple-900 mb-16")},m(n,o){H(n,t,o),_(t,r),_(r,s),_(t,c),_(t,i),_(i,g),_(i,f),_(i,u),_(t,h),b[p].m(t,null),_(t,T),l&&A(l,t,null),x=!0},p(n,[o]){(!x||o&1)&&e!==(e=n[0].title+"")&&G(s,e),(!x||o&1)&&m!==(m=n[0].subtitle+"")&&G(g,m);let V=p;if(p=R(n),p===V?b[p].p(n,o):(K(),I(b[V],1,1,()=>{b[V]=null}),N(),$=b[p],$?$.p(n,o):($=b[p]=O[p](n),$.c()),w($,1),$.m(t,T)),o&1&&S!==(S=n[0].body)){if(l){K();const P=l;I(P.$$.fragment,1,0,()=>{C(P,1)}),N()}S?(l=J(S,z()),M(l.$$.fragment),w(l.$$.fragment,1),A(l,t,null)):l=null}},i(n){x||(w($),l&&w(l.$$.fragment,n),x=!0)},o(n){I($),l&&I(l.$$.fragment,n),x=!1},d(n){n&&d(t),b[p].d(),l&&C(l)}}}function ie(a,t,r){let{post:e}=t;return a.$$set=s=>{"post"in s&&r(0,e=s.post)},[e]}class ce extends W{constructor(t){super(),X(this,t,ie,oe,U,{post:0})}}function fe(a){let t,r;return t=new ce({props:{post:a[0]}}),{c(){M(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),r=!0},p:ee,i(e){r||(w(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function ue(a){let t,r,e=a[0]&&fe(a);return{c(){e&&e.c(),t=Q()},l(s){e&&e.l(s),t=Q()},m(s,c){e&&e.m(s,c),H(s,t,c),r=!0},p(s,[c]){s[0]&&e.p(s,c)},i(s){r||(w(e),r=!0)},o(s){I(e),r=!1},d(s){s&&d(t),e&&e.d(s)}}}function pe(a,t,r){let e;Z(a,te,i=>r(1,e=i));let s=e.params.title;return[re.get(s)]}class ge extends W{constructor(t){super(),X(this,t,pe,ue,U,{})}}export{ge as component};