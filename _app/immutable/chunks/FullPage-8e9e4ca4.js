import{S,i as F,s as P,P as W,a as E,k as _,c as I,l as h,m as g,h as u,n as m,G as j,p as k,b as D,H as b,Q as A,R as C,T as q,f as y,t as G,o as H}from"./index-62599738.js";function T(f){let s,e,v,n,c,r;return{c(){s=_("div"),e=_("div"),v=_("div"),n=E(),c=_("div"),r=_("div"),this.h()},l(a){s=h(a,"DIV",{class:!0,style:!0});var t=g(s);e=h(t,"DIV",{class:!0});var d=g(e);v=h(d,"DIV",{class:!0}),g(v).forEach(u),d.forEach(u),n=I(t),c=h(t,"DIV",{class:!0});var i=g(c);r=h(i,"DIV",{class:!0}),g(r).forEach(u),i.forEach(u),t.forEach(u),this.h()},h(){m(v,"class","filler svelte-1vxjfsv"),m(e,"class","triangle triangle-left svelte-1vxjfsv"),m(r,"class","filler svelte-1vxjfsv"),m(c,"class","triangle triangle-right svelte-1vxjfsv"),m(s,"class","transition svelte-1vxjfsv"),k(s,"--background",f[1]),k(s,"--color",f[2])},m(a,t){D(a,s,t),b(s,e),b(e,v),b(s,n),b(s,c),b(c,r)},p(a,t){t&2&&k(s,"--background",a[1]),t&4&&k(s,"--color",a[2])},d(a){a&&u(s)}}}function p(f){let s;return{c(){s=_("div"),this.h()},l(e){s=h(e,"DIV",{class:!0}),g(s).forEach(u),this.h()},h(){m(s,"class","backdrop svelte-1vxjfsv")},m(e,v){D(e,s,v)},d(e){e&&u(s)}}}function M(f){let s,e,v,n,c,r,a=f[0]&&T(f),t=!f[3]&&p();const d=f[6].default,i=W(d,f,f[5],null);return{c(){a&&a.c(),s=E(),e=_("div"),t&&t.c(),v=E(),n=_("div"),c=_("div"),i&&i.c(),this.h()},l(l){a&&a.l(l),s=I(l),e=h(l,"DIV",{class:!0,style:!0});var o=g(e);t&&t.l(o),v=I(o),n=h(o,"DIV",{class:!0});var V=g(n);c=h(V,"DIV",{class:!0});var w=g(c);i&&i.l(w),w.forEach(u),V.forEach(u),o.forEach(u),this.h()},h(){m(c,"class","contentWrapper svelte-1vxjfsv"),m(n,"class","content center svelte-1vxjfsv"),j(n,"image",f[1].startsWith("url")),j(n,"tri",f[0]),m(e,"class","full-page wrapper sticky svelte-1vxjfsv"),k(e,"--background",f[1]),k(e,"--color",f[2]),j(e,"safari",f[4])},m(l,o){a&&a.m(l,o),D(l,s,o),D(l,e,o),t&&t.m(e,null),b(e,v),b(e,n),b(n,c),i&&i.m(c,null),r=!0},p(l,[o]){l[0]?a?a.p(l,o):(a=T(l),a.c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null),l[3]?t&&(t.d(1),t=null):t||(t=p(),t.c(),t.m(e,v)),i&&i.p&&(!r||o&32)&&A(i,d,l,l[5],r?q(d,l[5],o,null):C(l[5]),null),(!r||o&2)&&j(n,"image",l[1].startsWith("url")),(!r||o&1)&&j(n,"tri",l[0]),(!r||o&2)&&k(e,"--background",l[1]),(!r||o&4)&&k(e,"--color",l[2]),(!r||o&16)&&j(e,"safari",l[4])},i(l){r||(y(i,l),r=!0)},o(l){G(i,l),r=!1},d(l){a&&a.d(l),l&&u(s),l&&u(e),t&&t.d(),i&&i.d(l)}}}function N(f,s,e){let{$$slots:v={},$$scope:n}=s,{withTriangle:c=!1}=s,{background:r="white"}=s,{color:a="black"}=s,{landscape:t}=s,d=!1;return H(()=>setTimeout(()=>e(4,d=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||/CriOS/i.test(navigator.userAgent)))),f.$$set=i=>{"withTriangle"in i&&e(0,c=i.withTriangle),"background"in i&&e(1,r=i.background),"color"in i&&e(2,a=i.color),"landscape"in i&&e(3,t=i.landscape),"$$scope"in i&&e(5,n=i.$$scope)},[c,r,a,t,d,n,v]}class Q extends S{constructor(s){super(),F(this,s,N,M,P,{withTriangle:0,background:1,color:2,landscape:3})}}export{Q as F};
