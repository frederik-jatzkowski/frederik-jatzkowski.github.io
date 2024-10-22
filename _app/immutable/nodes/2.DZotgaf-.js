import{s as ee,a as U,n as Q}from"../chunks/scheduler.BfJEPAwo.js";import{S as te,i as se,e as k,s as L,t as q,c as w,a as H,f as M,b as A,d as f,k as g,g as h,h as u,j as ae,l as E,m as C,n as I,o as d,p as _,q as S,r as re}from"../chunks/index.BWJqtTvX.js";import{H as W,P as X,e as ne,a as le,A as Y,B as oe}from"../chunks/H2.DdULDlnl.js";import{a as Z}from"../chunks/paths.3EtBHCFv.js";function ie(l){let e,t,s,o,r,n;return{c(){e=k("div"),t=k("img"),o=L(),r=k("div"),n=q(l[1]),this.h()},l($){e=w($,"DIV",{class:!0});var c=H(e);t=w(c,"IMG",{src:!0,alt:!0,class:!0}),o=M(c),r=w(c,"DIV",{class:!0});var K=H(r);n=A(K,l[1]),K.forEach(f),c.forEach(f),this.h()},h(){U(t.src,s=l[0])||g(t,"src",s),g(t,"alt",l[2]),g(t,"class",""),g(r,"class","text-purple-900 p-1 text-sm"),g(e,"class","border-4 border-amber-400 bg-amber-400 ")},m($,c){h($,e,c),u(e,t),u(e,o),u(e,r),u(r,n)},p($,[c]){c&1&&!U(t.src,s=$[0])&&g(t,"src",s),c&4&&g(t,"alt",$[2]),c&2&&ae(n,$[1])},i:Q,o:Q,d($){$&&f(e)}}}function ce(l,e,t){let{src:s}=e,{caption:o}=e,{alt:r=o}=e;return l.$$set=n=>{"src"in n&&t(0,s=n.src),"caption"in n&&t(1,o=n.caption),"alt"in n&&t(2,r=n.alt)},[s,o,r]}class y extends te{constructor(e){super(),se(this,e,ce,ie,ee,{src:0,caption:1,alt:2})}}function fe(l,e,t){const s=l.slice();return s[0]=e[t],s}function $e(l){let e;return{c(){e=q("About Me")},l(t){e=A(t,"About Me")},m(t,s){h(t,e,s)},d(t){t&&f(e)}}}function me(l){let e;return{c(){e=q("Software Engineer @ CHECK24, Germany")},l(t){e=A(t,"Software Engineer @ CHECK24, Germany")},m(t,s){h(t,e,s)},d(t){t&&f(e)}}}function ue(l){let e;return{c(){e=q("Github")},l(t){e=A(t,"Github")},m(t,s){h(t,e,s)},d(t){t&&f(e)}}}function ge(l){let e;return{c(){e=q("LinkedIn")},l(t){e=A(t,"LinkedIn")},m(t,s){h(t,e,s)},d(t){t&&f(e)}}}function pe(l){let e,t,s,o;return e=new Y({props:{href:"https://github.com/frederik-jatzkowski",target:"_blank",$$slots:{default:[ue]},$$scope:{ctx:l}}}),s=new Y({props:{href:"https://www.linkedin.com/in/frederik-jatzkowski/",target:"_blank",$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment),t=q(`\r
				| `),E(s.$$.fragment)},l(r){C(e.$$.fragment,r),t=A(r,`\r
				| `),C(s.$$.fragment,r)},m(r,n){I(e,r,n),h(r,t,n),I(s,r,n),o=!0},p(r,n){const $={};n&8&&($.$$scope={dirty:n,ctx:r}),e.$set($);const c={};n&8&&(c.$$scope={dirty:n,ctx:r}),s.$set(c)},i(r){o||(d(e.$$.fragment,r),d(s.$$.fragment,r),o=!0)},o(r){_(e.$$.fragment,r),_(s.$$.fragment,r),o=!1},d(r){r&&f(t),S(e,r),S(s,r)}}}function de(l){let e;return{c(){e=q("Latest Posts")},l(t){e=A(t,"Latest Posts")},m(t,s){h(t,e,s)},d(t){t&&f(e)}}}function _e(l){let e,t;return e=new oe({props:{post:l[0]}}),{c(){E(e.$$.fragment)},l(s){C(e.$$.fragment,s)},m(s,o){I(e,s,o),t=!0},p:Q,i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function he(l){let e,t,s,o,r,n,$,c,K,D,P,N,V,T,v,G,F,O,z;o=new W({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),n=new X({props:{$$slots:{default:[me]},$$scope:{ctx:l}}}),c=new X({props:{$$slots:{default:[pe]},$$scope:{ctx:l}}}),P=new y({props:{src:`${Z}/media/mittelerde24/speaking.jpg`,caption:"Speaking at the 5th Central German Meeting on Bioinformatics."}}),V=new y({props:{src:`${Z}/media/focusdays24/me.jpg`,caption:"Collaborating at the FocusDays Hackathon 2024 hosted by CHECK24."}}),G=new W({props:{$$slots:{default:[de]},$$scope:{ctx:l}}});let x=ne(le.slice(0,4)),m=[];for(let a=0;a<x.length;a+=1)m[a]=_e(fe(l,x,a));return{c(){e=k("section"),t=k("div"),s=k("div"),E(o.$$.fragment),r=L(),E(n.$$.fragment),$=L(),E(c.$$.fragment),K=L(),D=k("div"),E(P.$$.fragment),N=L(),E(V.$$.fragment),T=L(),v=k("section"),E(G.$$.fragment),F=L(),O=k("div");for(let a=0;a<m.length;a+=1)m[a].c();this.h()},l(a){e=w(a,"SECTION",{class:!0});var i=H(e);t=w(i,"DIV",{class:!0});var p=H(t);s=w(p,"DIV",{class:!0});var b=H(s);C(o.$$.fragment,b),r=M(b),C(n.$$.fragment,b),$=M(b),C(c.$$.fragment,b),b.forEach(f),K=M(p),D=w(p,"DIV",{class:!0});var j=H(D);C(P.$$.fragment,j),N=M(j),C(V.$$.fragment,j),j.forEach(f),p.forEach(f),i.forEach(f),T=M(a),v=w(a,"SECTION",{class:!0});var B=H(v);C(G.$$.fragment,B),F=M(B),O=w(B,"DIV",{class:!0});var R=H(O);for(let J=0;J<m.length;J+=1)m[J].l(R);R.forEach(f),B.forEach(f),this.h()},h(){g(s,"class","col-span-3"),g(D,"class","col-span-2 grid grid-cols-1 gap-2 lg:grid-cols-2"),g(t,"class","grid grid-cols-2 gap-2 lg:grid-cols-5"),g(e,"class","p-4 border-2 border-amber-400"),g(O,"class","grid grid-cols-1 gap-4 lg:grid-cols-4"),g(v,"class","mt-8 p-4 border-2 border-amber-400")},m(a,i){h(a,e,i),u(e,t),u(t,s),I(o,s,null),u(s,r),I(n,s,null),u(s,$),I(c,s,null),u(t,K),u(t,D),I(P,D,null),u(D,N),I(V,D,null),h(a,T,i),h(a,v,i),I(G,v,null),u(v,F),u(v,O);for(let p=0;p<m.length;p+=1)m[p]&&m[p].m(O,null);z=!0},p(a,[i]){const p={};i&8&&(p.$$scope={dirty:i,ctx:a}),o.$set(p);const b={};i&8&&(b.$$scope={dirty:i,ctx:a}),n.$set(b);const j={};i&8&&(j.$$scope={dirty:i,ctx:a}),c.$set(j);const B={};i&8&&(B.$$scope={dirty:i,ctx:a}),G.$set(B)},i(a){if(!z){d(o.$$.fragment,a),d(n.$$.fragment,a),d(c.$$.fragment,a),d(P.$$.fragment,a),d(V.$$.fragment,a),d(G.$$.fragment,a);for(let i=0;i<x.length;i+=1)d(m[i]);z=!0}},o(a){_(o.$$.fragment,a),_(n.$$.fragment,a),_(c.$$.fragment,a),_(P.$$.fragment,a),_(V.$$.fragment,a),_(G.$$.fragment,a),m=m.filter(Boolean);for(let i=0;i<m.length;i+=1)_(m[i]);z=!1},d(a){a&&(f(e),f(T),f(v)),S(o),S(n),S(c),S(P),S(V),S(G),re(m,a)}}}class Ee extends te{constructor(e){super(),se(this,e,null,he,ee,{})}}export{Ee as component};
