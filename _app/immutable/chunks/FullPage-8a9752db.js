import{S as P,i as W,s as A,P as C,a as E,k as _,c as I,l as v,m as g,h as u,n as k,G as m,p as w,b as D,H as b,Q as q,R as G,T as H,f as M,t as N,o as O}from"./index-62599738.js";function S(f){let s,l,d,r,c,i;return{c(){s=_("div"),l=_("div"),d=_("div"),r=E(),c=_("div"),i=_("div"),this.h()},l(a){s=v(a,"DIV",{class:!0,style:!0});var t=g(s);l=v(t,"DIV",{class:!0});var h=g(l);d=v(h,"DIV",{class:!0}),g(d).forEach(u),h.forEach(u),r=I(t),c=v(t,"DIV",{class:!0});var n=g(c);i=v(n,"DIV",{class:!0}),g(i).forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){k(d,"class","filler svelte-rtk4ff"),k(l,"class","triangle triangle-left svelte-rtk4ff"),k(i,"class","filler svelte-rtk4ff"),k(c,"class","triangle triangle-right svelte-rtk4ff"),k(s,"class","transition svelte-rtk4ff"),w(s,"--background",f[1]),w(s,"--color",f[2])},m(a,t){D(a,s,t),b(s,l),b(l,d),b(s,r),b(s,c),b(c,i)},p(a,t){t&2&&w(s,"--background",a[1]),t&4&&w(s,"--color",a[2])},d(a){a&&u(s)}}}function F(f){let s;return{c(){s=_("div"),this.h()},l(l){s=v(l,"DIV",{class:!0}),g(s).forEach(u),this.h()},h(){k(s,"class","backdrop svelte-rtk4ff")},m(l,d){D(l,s,d)},d(l){l&&u(s)}}}function Q(f){let s,l,d,r,c,i,a=f[0]&&S(f),t=!f[3]&&F();const h=f[7].default,n=C(h,f,f[6],null);return{c(){a&&a.c(),s=E(),l=_("div"),t&&t.c(),d=E(),r=_("div"),c=_("div"),n&&n.c(),this.h()},l(e){a&&a.l(e),s=I(e),l=v(e,"DIV",{class:!0,style:!0});var o=g(l);t&&t.l(o),d=I(o),r=v(o,"DIV",{class:!0});var V=g(r);c=v(V,"DIV",{class:!0});var T=g(c);n&&n.l(T),T.forEach(u),V.forEach(u),o.forEach(u),this.h()},h(){k(c,"class","contentWrapper svelte-rtk4ff"),k(r,"class","content center svelte-rtk4ff"),m(r,"image",f[1].startsWith("url")),m(r,"tri",f[0]),m(r,"shadowed",f[4]),k(l,"class","full-page wrapper sticky svelte-rtk4ff"),w(l,"--background",f[1]),w(l,"--color",f[2]),m(l,"safari",f[5])},m(e,o){a&&a.m(e,o),D(e,s,o),D(e,l,o),t&&t.m(l,null),b(l,d),b(l,r),b(r,c),n&&n.m(c,null),i=!0},p(e,[o]){e[0]?a?a.p(e,o):(a=S(e),a.c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null),e[3]?t&&(t.d(1),t=null):t||(t=F(),t.c(),t.m(l,d)),n&&n.p&&(!i||o&64)&&q(n,h,e,e[6],i?H(h,e[6],o,null):G(e[6]),null),(!i||o&2)&&m(r,"image",e[1].startsWith("url")),(!i||o&1)&&m(r,"tri",e[0]),(!i||o&16)&&m(r,"shadowed",e[4]),(!i||o&2)&&w(l,"--background",e[1]),(!i||o&4)&&w(l,"--color",e[2]),(!i||o&32)&&m(l,"safari",e[5])},i(e){i||(M(n,e),i=!0)},o(e){N(n,e),i=!1},d(e){a&&a.d(e),e&&u(s),e&&u(l),t&&t.d(),n&&n.d(e)}}}function R(f,s,l){let{$$slots:d={},$$scope:r}=s,{withTriangle:c=!1}=s,{background:i="white"}=s,{color:a="black"}=s,{landscape:t=!1}=s,{shadowed:h=!1}=s,n=!1;return O(()=>setTimeout(()=>l(5,n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||/CriOS/i.test(navigator.userAgent)))),f.$$set=e=>{"withTriangle"in e&&l(0,c=e.withTriangle),"background"in e&&l(1,i=e.background),"color"in e&&l(2,a=e.color),"landscape"in e&&l(3,t=e.landscape),"shadowed"in e&&l(4,h=e.shadowed),"$$scope"in e&&l(6,r=e.$$scope)},[c,i,a,t,h,n,r,d]}class y extends P{constructor(s){super(),W(this,s,R,Q,A,{withTriangle:0,background:1,color:2,landscape:3,shadowed:4})}}export{y as F};
