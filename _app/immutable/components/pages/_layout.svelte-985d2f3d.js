import{C as Me,D as We,E as je,F as qe,S as ge,i as Ee,s as De,k as n,a as I,l as u,m as d,h as c,c as w,n as h,p as ae,G as de,b as K,H as t,I as Re,J as ze,B as ve,o as Oe,K as Be,L as Ae,M as Fe,N as He,O as Le,e as Te,t as ne,d as Ne,f as ue,g as Xe,w as ye,x as Ve,y as be,z as ke,P as Ge,Q as Je,R as Ke,T as Qe,U as Ue,q as me,r as _e,V as Ye}from"../../chunks/index-1f255c1c.js";import{w as Ze}from"../../chunks/index-740e1a8a.js";import{F as xe}from"../../chunks/FullPage-127c5511.js";function et(s){const e=s-1;return e*e*e+1}function Se(s){return s/=.5,s<1?.5*s*s:(s--,-.5*(s*(s-2)-1))}function tt(s){return-.5*(Math.cos(Math.PI*s)-1)}function Ce(s){return Object.prototype.toString.call(s)==="[object Date]"}function Ie(s,e){if(s===e||s!==s)return()=>s;const l=typeof s;if(l!==typeof e||Array.isArray(s)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const a=e.map((f,v)=>Ie(s[v],f));return f=>a.map(v=>v(f))}if(l==="object"){if(!s||!e)throw new Error("Object cannot be null");if(Ce(s)&&Ce(e)){s=s.getTime(),e=e.getTime();const v=e-s;return i=>new Date(s+i*v)}const a=Object.keys(e),f={};return a.forEach(v=>{f[v]=Ie(s[v],e[v])}),v=>{const i={};return a.forEach(_=>{i[_]=f[_](v)}),i}}if(l==="number"){const a=e-s;return f=>s+f*a}throw new Error(`Cannot interpolate ${l} values`)}function we(s,e={}){const l=Ze(s);let a,f=s;function v(i,_){if(s==null)return l.set(s=i),Promise.resolve();f=i;let o=a,g=!1,{delay:p=0,duration:r=400,easing:m=qe,interpolate:k=Ie}=Me(Me({},e),_);if(r===0)return o&&(o.abort(),o=null),l.set(s=f),Promise.resolve();const D=We()+p;let T;return a=je(O=>{if(O<D)return!0;g||(T=k(s,i),typeof r=="function"&&(r=r(s,i)),g=!0),o&&(o.abort(),o=null);const S=O-D;return S>r?(l.set(s=i),!1):(l.set(s=T(m(S/r))),!0)}),a.promise}return{set:v,update:(i,_)=>v(i(f,s),_),subscribe:l.subscribe}}function st(s,{delay:e=0,duration:l=400,easing:a=et,x:f=0,y:v=0,opacity:i=0}={}){const _=getComputedStyle(s),o=+_.opacity,g=_.transform==="none"?"":_.transform,p=o*(1-i);return{delay:e,duration:l,easing:a,css:(r,m)=>`
			transform: ${g} translate(${(1-r)*f}px, ${(1-r)*v}px);
			opacity: ${o-p*m}`}}function lt(s){let e,l,a,f,v,i,_,o,g,p,r,m,k,D,T,O,S,b,E,P,R,j,z,Q,U,Y,Z,x,ee,te,se,le,C,B,oe,F,ce,$,re,N,H,fe;return{c(){e=n("div"),l=n("div"),a=n("div"),f=I(),v=n("div"),i=I(),_=n("div"),o=n("div"),g=I(),p=n("div"),r=I(),m=n("div"),k=I(),D=n("div"),T=n("div"),O=I(),S=n("div"),b=I(),E=n("div"),P=I(),R=n("div"),j=I(),z=n("div"),Q=I(),U=n("div"),Y=I(),Z=n("div"),x=I(),ee=n("div"),te=I(),se=n("div"),le=I(),C=n("div"),B=n("div"),oe=I(),F=n("div"),ce=I(),$=n("div"),re=I(),N=n("div"),H=n("div"),this.h()},l(A){e=u(A,"DIV",{class:!0,style:!0});var y=d(e);l=u(y,"DIV",{class:!0});var L=d(l);a=u(L,"DIV",{class:!0}),d(a).forEach(c),f=w(L),v=u(L,"DIV",{class:!0}),d(v).forEach(c),L.forEach(c),i=w(y),_=u(y,"DIV",{class:!0});var X=d(_);o=u(X,"DIV",{class:!0}),d(o).forEach(c),g=w(X),p=u(X,"DIV",{class:!0}),d(p).forEach(c),X.forEach(c),r=w(y),m=u(y,"DIV",{class:!0}),d(m).forEach(c),k=w(y),D=u(y,"DIV",{class:!0});var V=d(D);T=u(V,"DIV",{class:!0}),d(T).forEach(c),O=w(V),S=u(V,"DIV",{class:!0}),d(S).forEach(c),b=w(V),E=u(V,"DIV",{class:!0}),d(E).forEach(c),P=w(V),R=u(V,"DIV",{class:!0}),d(R).forEach(c),j=w(V),z=u(V,"DIV",{class:!0}),d(z).forEach(c),Q=w(V),U=u(V,"DIV",{class:!0}),d(U).forEach(c),Y=w(V),Z=u(V,"DIV",{class:!0}),d(Z).forEach(c),x=w(V),ee=u(V,"DIV",{class:!0}),d(ee).forEach(c),te=w(V),se=u(V,"DIV",{class:!0}),d(se).forEach(c),V.forEach(c),le=w(y),C=u(y,"DIV",{class:!0});var W=d(C);B=u(W,"DIV",{class:!0}),d(B).forEach(c),oe=w(W),F=u(W,"DIV",{class:!0}),d(F).forEach(c),ce=w(W),$=u(W,"DIV",{class:!0}),d($).forEach(c),re=w(W),N=u(W,"DIV",{class:!0});var G=d(N);H=u(G,"DIV",{class:!0}),d(H).forEach(c),G.forEach(c),W.forEach(c),y.forEach(c),this.h()},h(){h(a,"class","foot foot1 svelte-1iu20wm"),h(v,"class","foot foot2 svelte-1iu20wm"),h(l,"class","front-feet feet svelte-1iu20wm"),h(o,"class","foot foot1 svelte-1iu20wm"),h(p,"class","foot foot2 svelte-1iu20wm"),h(_,"class","hind-feet feet svelte-1iu20wm"),h(m,"class","tail svelte-1iu20wm"),h(T,"class","fluff svelte-1iu20wm"),h(S,"class","fluff svelte-1iu20wm"),h(E,"class","fluff svelte-1iu20wm"),h(R,"class","fluff svelte-1iu20wm"),h(z,"class","fluff svelte-1iu20wm"),h(U,"class","fluff svelte-1iu20wm"),h(Z,"class","fluff svelte-1iu20wm"),h(ee,"class","fluff svelte-1iu20wm"),h(se,"class","fluff svelte-1iu20wm"),h(D,"class","body svelte-1iu20wm"),h(B,"class","ear2 svelte-1iu20wm"),h(F,"class","ear1 svelte-1iu20wm"),h($,"class","head svelte-1iu20wm"),h(H,"class","eye-ball svelte-1iu20wm"),h(N,"class","eye svelte-1iu20wm"),h(C,"class","head-wrapper svelte-1iu20wm"),h(e,"class","sheep svelte-1iu20wm"),ae(e,"left",s[6]+"px"),ae(e,"transform","scaleX("+(s[2]?1:-1)+")"),ae(e,"--startDelay",s[7]+"ms"),ae(e,"--woolColor",s[0]),de(e,"running",s[3]),de(e,"walking",s[4]),de(e,"eating",s[5])},m(A,y){K(A,e,y),t(e,l),t(l,a),t(l,f),t(l,v),t(e,i),t(e,_),t(_,o),t(_,g),t(_,p),t(e,r),t(e,m),t(e,k),t(e,D),t(D,T),t(D,O),t(D,S),t(D,b),t(D,E),t(D,P),t(D,R),t(D,j),t(D,z),t(D,Q),t(D,U),t(D,Y),t(D,Z),t(D,x),t(D,ee),t(D,te),t(D,se),t(e,le),t(e,C),t(C,B),t(C,oe),t(C,F),t(C,ce),t(C,$),t(C,re),t(C,N),t(N,H)},p(A,[y]){s=A,y&64&&ae(e,"left",s[6]+"px"),y&4&&ae(e,"transform","scaleX("+(s[2]?1:-1)+")"),y&1&&ae(e,"--woolColor",s[0]),y&8&&de(e,"running",s[3]),y&16&&de(e,"walking",s[4]),y&32&&de(e,"eating",s[5])},i(A){fe||Re(()=>{fe=ze(e,st,{y:100,duration:Math.random()*4e3+1e3}),fe.start()})},o:ve,d(A){A&&c(e)}}}let Pe=20;function rt(s,e,l){let a,f=ve,v=()=>(f(),f=Fe(o,b=>l(6,a=b)),o);s.$$.on_destroy.push(()=>f());let{woolColor:i="#dfdfdf"}=e;const _=(b,E,P)=>Math.max(Math.min(b,Math.max(E,P)),Math.min(E,P));let o=we(0,{easing:Se,duration:2e3});v();let g=Math.random()>.5,p=!1,r=!1,m=!1,k=-1,D=-1,T=Math.random()*2e3-1e3,O=0;const S=b=>"hsl("+360*b/Pe+",80%,50%)";return Oe(()=>{if(i=="#dfdfdf"){let b=Math.random();b<.05?D=setInterval(()=>{O=++O%Pe,l(0,i=S(O))},500,1e3):b>=.05&&b<.2&&l(0,i="dodgerblue")}v(l(1,o=we(_(Math.random()*document.body.clientWidth,0,document.body.clientWidth-100),{easing:Se,duration:2e3}))),setTimeout(()=>{k=setInterval(()=>{if(m)return;if(l(3,p=!1),l(4,r=!1),l(5,m=Math.random()<.2),m){setTimeout(()=>l(5,m=!1),5e3);return}if(!(Math.random()>.5))return;l(2,g=Math.random()>.5);let E=Math.random()*200;g&&(E*=-1);let P=Be(o),R=document.body.clientWidth,j=_(P+E,0,R-100),z=Math.abs(P-j);o.set(j),l(2,g=!g),z>100?l(3,p=!0):l(4,r=!0)},2e3)},T)}),Ae(()=>{k!=-1&&clearInterval(k),D!=-1&&clearInterval(D)}),s.$$set=b=>{"woolColor"in b&&l(0,i=b.woolColor)},[i,o,g,p,r,m,a,T]}class at extends ge{constructor(e){super(),Ee(this,e,rt,lt,De,{woolColor:0})}}function it(s){let e,l,a,f,v,i,_,o,g,p,r,m,k,D,T,O,S,b,E,P,R,j,z,Q,U,Y,Z,x,ee,te,se,le,C,B,oe,F,ce,$,re,N,H,fe,A,y,L,X,V,W;return{c(){e=n("div"),l=n("div"),a=I(),f=n("div"),v=I(),i=n("div"),_=n("div"),o=n("div"),g=I(),p=n("div"),r=I(),m=n("div"),k=n("div"),D=I(),T=n("div"),O=I(),S=n("div"),b=I(),E=n("div"),P=n("div"),R=I(),j=n("div"),z=I(),Q=n("div"),U=I(),Y=n("div"),Z=I(),x=n("div"),ee=I(),te=n("div"),se=I(),le=n("div"),C=I(),B=n("div"),oe=I(),F=n("div"),ce=I(),$=n("div"),re=n("div"),N=I(),H=n("div"),fe=I(),A=n("div"),y=I(),L=n("div"),X=n("div"),V=I(),W=n("div"),this.h()},l(G){e=u(G,"DIV",{class:!0,style:!0});var q=d(e);l=u(q,"DIV",{class:!0}),d(l).forEach(c),a=w(q),f=u(q,"DIV",{class:!0}),d(f).forEach(c),v=w(q),i=u(q,"DIV",{class:!0});var J=d(i);_=u(J,"DIV",{class:!0});var he=d(_);o=u(he,"DIV",{class:!0}),d(o).forEach(c),g=w(he),p=u(he,"DIV",{class:!0}),d(p).forEach(c),he.forEach(c),r=w(J),m=u(J,"DIV",{class:!0});var pe=d(m);k=u(pe,"DIV",{class:!0}),d(k).forEach(c),D=w(pe),T=u(pe,"DIV",{class:!0}),d(T).forEach(c),pe.forEach(c),O=w(J),S=u(J,"DIV",{class:!0}),d(S).forEach(c),b=w(J),E=u(J,"DIV",{class:!0});var M=d(E);P=u(M,"DIV",{class:!0}),d(P).forEach(c),R=w(M),j=u(M,"DIV",{class:!0}),d(j).forEach(c),z=w(M),Q=u(M,"DIV",{class:!0}),d(Q).forEach(c),U=w(M),Y=u(M,"DIV",{class:!0}),d(Y).forEach(c),Z=w(M),x=u(M,"DIV",{class:!0}),d(x).forEach(c),ee=w(M),te=u(M,"DIV",{class:!0}),d(te).forEach(c),se=w(M),le=u(M,"DIV",{class:!0}),d(le).forEach(c),C=w(M),B=u(M,"DIV",{class:!0}),d(B).forEach(c),oe=w(M),F=u(M,"DIV",{class:!0}),d(F).forEach(c),M.forEach(c),ce=w(J),$=u(J,"DIV",{class:!0});var ie=d($);re=u(ie,"DIV",{class:!0}),d(re).forEach(c),N=w(ie),H=u(ie,"DIV",{class:!0}),d(H).forEach(c),fe=w(ie),A=u(ie,"DIV",{class:!0}),d(A).forEach(c),y=w(ie),L=u(ie,"DIV",{class:!0});var $e=d(L);X=u($e,"DIV",{class:!0}),d(X).forEach(c),$e.forEach(c),ie.forEach(c),J.forEach(c),V=w(q),W=u(q,"DIV",{class:!0}),d(W).forEach(c),q.forEach(c),this.h()},h(){h(l,"class","rope svelte-1fpiacc"),h(f,"class","back-tire svelte-1fpiacc"),h(o,"class","foot foot1 svelte-1fpiacc"),h(p,"class","foot foot2 svelte-1fpiacc"),h(_,"class","front-feet feet svelte-1fpiacc"),h(k,"class","foot foot1 svelte-1fpiacc"),h(T,"class","foot foot2 svelte-1fpiacc"),h(m,"class","hind-feet feet svelte-1fpiacc"),h(S,"class","tail svelte-1fpiacc"),h(P,"class","fluff svelte-1fpiacc"),h(j,"class","fluff svelte-1fpiacc"),h(Q,"class","fluff svelte-1fpiacc"),h(Y,"class","fluff svelte-1fpiacc"),h(x,"class","fluff svelte-1fpiacc"),h(te,"class","fluff svelte-1fpiacc"),h(le,"class","fluff svelte-1fpiacc"),h(B,"class","fluff svelte-1fpiacc"),h(F,"class","fluff svelte-1fpiacc"),h(E,"class","body svelte-1fpiacc"),h(re,"class","ear2 svelte-1fpiacc"),h(H,"class","ear1 svelte-1fpiacc"),h(A,"class","head svelte-1fpiacc"),h(X,"class","eye-ball svelte-1fpiacc"),h(L,"class","eye svelte-1fpiacc"),h($,"class","head-wrapper svelte-1fpiacc"),h(i,"class","sheep svelte-1fpiacc"),h(W,"class","front-tire svelte-1fpiacc"),h(e,"class","tire-swing svelte-1fpiacc"),ae(e,"--rotation",s[1]+"deg")},m(G,q){K(G,e,q),t(e,l),t(e,a),t(e,f),t(e,v),t(e,i),t(i,_),t(_,o),t(_,g),t(_,p),t(i,r),t(i,m),t(m,k),t(m,D),t(m,T),t(i,O),t(i,S),t(i,b),t(i,E),t(E,P),t(E,R),t(E,j),t(E,z),t(E,Q),t(E,U),t(E,Y),t(E,Z),t(E,x),t(E,ee),t(E,te),t(E,se),t(E,le),t(E,C),t(E,B),t(E,oe),t(E,F),t(i,ce),t(i,$),t($,re),t($,N),t($,H),t($,fe),t($,A),t($,y),t($,L),t(L,X),t(e,V),t(e,W),s[3](e)},p(G,[q]){q&2&&ae(e,"--rotation",G[1]+"deg")},i:ve,o:ve,d(G){G&&c(e),s[3](null)}}}function ot(s,e,l){let a,f=we(-10,{easing:tt,duration:1300});He(s,f,r=>l(1,a=r));let v=-1,i,_=!1,o;Oe(()=>{i=new Audio("/wee-trim.mp3"),i.loop=!1,i.volume=.2,o.click(),v=setInterval(()=>{Math.random()<.05&&g()},1e3,1e3)}),Ae(()=>clearInterval(v));const g=()=>{_||(_=!0,i.load(),i.play(),setTimeout(()=>{document.body.clientWidth>600?f.set(40):f.set(30),setTimeout(()=>{f.set(-10),setTimeout(()=>_=!1,1300)},1300)},1e3))};function p(r){Le[r?"unshift":"push"](()=>{o=r,l(0,o)})}return[o,a,f,p]}class ct extends ge{constructor(e){super(),Ee(this,e,ot,it,De,{})}}function ft(s,e,l){const a=s.slice();return a[4]=e[l],a[6]=l,a}function nt(s){let e,l;return e=new xe({props:{background:"darkslategray",color:"white",$$slots:{default:[dt]},$$scope:{ctx:s}}}),{c(){ye(e.$$.fragment)},l(a){Ve(e.$$.fragment,a)},m(a,f){be(e,a,f),l=!0},p(a,f){const v={};f&9&&(v.$$scope={dirty:f,ctx:a}),e.$set(v)},i(a){l||(ue(e.$$.fragment,a),l=!0)},o(a){ne(e.$$.fragment,a),l=!1},d(a){ke(e,a)}}}function ut(s){let e,l,a,f,v,i;const _=s[1].default,o=Ge(_,s,s[3],null);let g={length:3},p=[];for(let r=0;r<g.length;r+=1)p[r]=vt(ft(s,g,r));return v=new ct({}),{c(){o&&o.c(),e=I(),l=n("div"),a=I();for(let r=0;r<p.length;r+=1)p[r].c();f=I(),ye(v.$$.fragment),this.h()},l(r){o&&o.l(r),e=w(r),l=u(r,"DIV",{class:!0}),d(l).forEach(c),a=w(r);for(let m=0;m<p.length;m+=1)p[m].l(r);f=w(r),Ve(v.$$.fragment,r),this.h()},h(){h(l,"class","grass svelte-zq69kv")},m(r,m){o&&o.m(r,m),K(r,e,m),K(r,l,m),K(r,a,m);for(let k=0;k<p.length;k+=1)p[k].m(r,m);K(r,f,m),be(v,r,m),i=!0},p(r,m){o&&o.p&&(!i||m&8)&&Je(o,_,r,r[3],i?Qe(_,r[3],m,null):Ke(r[3]),null)},i(r){if(!i){ue(o,r);for(let m=0;m<g.length;m+=1)ue(p[m]);ue(v.$$.fragment,r),i=!0}},o(r){ne(o,r),p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)ne(p[m]);ne(v.$$.fragment,r),i=!1},d(r){o&&o.d(r),r&&c(e),r&&c(l),r&&c(a),Ue(p,r),r&&c(f),ke(v,r)}}}function dt(s){let e,l,a,f,v,i,_,o,g;return{c(){e=n("h1"),l=me(`We don't meet people by accident.
            `),a=n("br"),f=me(`
            They are meant to cross our path for a reason.`),v=I(),i=n("div"),_=me("Our Story"),this.h()},l(p){e=u(p,"H1",{});var r=d(e);l=_e(r,`We don't meet people by accident.
            `),a=u(r,"BR",{}),f=_e(r,`
            They are meant to cross our path for a reason.`),r.forEach(c),v=w(p),i=u(p,"DIV",{class:!0});var m=d(i);_=_e(m,"Our Story"),m.forEach(c),this.h()},h(){h(i,"class","button svelte-zq69kv")},m(p,r){K(p,e,r),t(e,l),t(e,a),t(e,f),K(p,v,r),K(p,i,r),t(i,_),o||(g=Ye(i,"click",s[2]),o=!0)},p:ve,d(p){p&&c(e),p&&c(v),p&&c(i),o=!1,g()}}}function vt(s){let e,l;return e=new at({}),{c(){ye(e.$$.fragment)},l(a){Ve(e.$$.fragment,a)},m(a,f){be(e,a,f),l=!0},i(a){l||(ue(e.$$.fragment,a),l=!0)},o(a){ne(e.$$.fragment,a),l=!1},d(a){ke(e,a)}}}function ht(s){let e,l,a,f;const v=[ut,nt],i=[];function _(o,g){return o[0]?0:1}return e=_(s),l=i[e]=v[e](s),{c(){l.c(),a=Te()},l(o){l.l(o),a=Te()},m(o,g){i[e].m(o,g),K(o,a,g),f=!0},p(o,[g]){let p=e;e=_(o),e===p?i[e].p(o,g):(Xe(),ne(i[p],1,1,()=>{i[p]=null}),Ne(),l=i[e],l?l.p(o,g):(l=i[e]=v[e](o),l.c()),ue(l,1),l.m(a.parentNode,a))},i(o){f||(ue(l),f=!0)},o(o){ne(l),f=!1},d(o){i[e].d(o),o&&c(a)}}}function pt(s,e,l){let{$$slots:a={},$$scope:f}=e,v=!1;const i=()=>l(0,v=!0);return s.$$set=_=>{"$$scope"in _&&l(3,f=_.$$scope)},[v,a,i,f]}class wt extends ge{constructor(e){super(),Ee(this,e,pt,ht,De,{})}}export{wt as default};
