import{C as Mt,D as Wt,E as jt,F as qt,S as gt,i as Et,s as Dt,k as f,a as w,l as u,m as d,h as c,c as I,n as h,p as ot,G as dt,b as K,H as e,I as Rt,J as zt,B as vt,o as Ot,K as Bt,L as At,M as Ft,N as Ht,O as Lt,e as Tt,t as ft,d as Nt,f as ut,g as Xt,w as kt,x as yt,y as Vt,z as bt,P as Gt,Q as Jt,R as Kt,T as Qt,U as Ut,q as _t,r as pt,V as Yt}from"../../chunks/index-62599738.js";import{w as Zt}from"../../chunks/index-c724c0d0.js";import{F as xt}from"../../chunks/FullPage-dacca6ac.js";function te(s){const t=s-1;return t*t*t+1}function St(s){return s/=.5,s<1?.5*s*s:(s--,-.5*(s*(s-2)-1))}function ee(s){return-.5*(Math.cos(Math.PI*s)-1)}function Ct(s){return Object.prototype.toString.call(s)==="[object Date]"}function wt(s,t){if(s===t||s!==s)return()=>s;const l=typeof s;if(l!==typeof t||Array.isArray(s)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const o=t.map((n,v)=>wt(s[v],n));return n=>o.map(v=>v(n))}if(l==="object"){if(!s||!t)throw new Error("Object cannot be null");if(Ct(s)&&Ct(t)){s=s.getTime(),t=t.getTime();const v=t-s;return a=>new Date(s+a*v)}const o=Object.keys(t),n={};return o.forEach(v=>{n[v]=wt(s[v],t[v])}),v=>{const a={};return o.forEach(p=>{a[p]=n[p](v)}),a}}if(l==="number"){const o=t-s;return n=>s+n*o}throw new Error(`Cannot interpolate ${l} values`)}function It(s,t={}){const l=Zt(s);let o,n=s;function v(a,p){if(s==null)return l.set(s=a),Promise.resolve();n=a;let i=o,g=!1,{delay:m=0,duration:r=400,easing:_=qt,interpolate:b=wt}=Mt(Mt({},t),p);if(r===0)return i&&(i.abort(),i=null),l.set(s=n),Promise.resolve();const D=Wt()+m;let T;return o=jt(O=>{if(O<D)return!0;g||(T=b(s,a),typeof r=="function"&&(r=r(s,a)),g=!0),i&&(i.abort(),i=null);const S=O-D;return S>r?(l.set(s=a),!1):(l.set(s=T(_(S/r))),!0)}),o.promise}return{set:v,update:(a,p)=>v(a(n,s),p),subscribe:l.subscribe}}function se(s,{delay:t=0,duration:l=400,easing:o=te,x:n=0,y:v=0,opacity:a=0}={}){const p=getComputedStyle(s),i=+p.opacity,g=p.transform==="none"?"":p.transform,m=i*(1-a);return{delay:t,duration:l,easing:o,css:(r,_)=>`
			transform: ${g} translate(${(1-r)*n}px, ${(1-r)*v}px);
			opacity: ${i-m*_}`}}function le(s){let t,l,o,n,v,a,p,i,g,m,r,_,b,D,T,O,S,V,E,P,R,j,z,Q,U,Y,Z,x,tt,et,st,lt,C,B,it,F,ct,$,rt,N,H,nt;return{c(){t=f("div"),l=f("div"),o=f("div"),n=w(),v=f("div"),a=w(),p=f("div"),i=f("div"),g=w(),m=f("div"),r=w(),_=f("div"),b=w(),D=f("div"),T=f("div"),O=w(),S=f("div"),V=w(),E=f("div"),P=w(),R=f("div"),j=w(),z=f("div"),Q=w(),U=f("div"),Y=w(),Z=f("div"),x=w(),tt=f("div"),et=w(),st=f("div"),lt=w(),C=f("div"),B=f("div"),it=w(),F=f("div"),ct=w(),$=f("div"),rt=w(),N=f("div"),H=f("div"),this.h()},l(A){t=u(A,"DIV",{class:!0,style:!0});var k=d(t);l=u(k,"DIV",{class:!0});var L=d(l);o=u(L,"DIV",{class:!0}),d(o).forEach(c),n=I(L),v=u(L,"DIV",{class:!0}),d(v).forEach(c),L.forEach(c),a=I(k),p=u(k,"DIV",{class:!0});var X=d(p);i=u(X,"DIV",{class:!0}),d(i).forEach(c),g=I(X),m=u(X,"DIV",{class:!0}),d(m).forEach(c),X.forEach(c),r=I(k),_=u(k,"DIV",{class:!0}),d(_).forEach(c),b=I(k),D=u(k,"DIV",{class:!0});var y=d(D);T=u(y,"DIV",{class:!0}),d(T).forEach(c),O=I(y),S=u(y,"DIV",{class:!0}),d(S).forEach(c),V=I(y),E=u(y,"DIV",{class:!0}),d(E).forEach(c),P=I(y),R=u(y,"DIV",{class:!0}),d(R).forEach(c),j=I(y),z=u(y,"DIV",{class:!0}),d(z).forEach(c),Q=I(y),U=u(y,"DIV",{class:!0}),d(U).forEach(c),Y=I(y),Z=u(y,"DIV",{class:!0}),d(Z).forEach(c),x=I(y),tt=u(y,"DIV",{class:!0}),d(tt).forEach(c),et=I(y),st=u(y,"DIV",{class:!0}),d(st).forEach(c),y.forEach(c),lt=I(k),C=u(k,"DIV",{class:!0});var W=d(C);B=u(W,"DIV",{class:!0}),d(B).forEach(c),it=I(W),F=u(W,"DIV",{class:!0}),d(F).forEach(c),ct=I(W),$=u(W,"DIV",{class:!0}),d($).forEach(c),rt=I(W),N=u(W,"DIV",{class:!0});var G=d(N);H=u(G,"DIV",{class:!0}),d(H).forEach(c),G.forEach(c),W.forEach(c),k.forEach(c),this.h()},h(){h(o,"class","foot foot1 svelte-1iu20wm"),h(v,"class","foot foot2 svelte-1iu20wm"),h(l,"class","front-feet feet svelte-1iu20wm"),h(i,"class","foot foot1 svelte-1iu20wm"),h(m,"class","foot foot2 svelte-1iu20wm"),h(p,"class","hind-feet feet svelte-1iu20wm"),h(_,"class","tail svelte-1iu20wm"),h(T,"class","fluff svelte-1iu20wm"),h(S,"class","fluff svelte-1iu20wm"),h(E,"class","fluff svelte-1iu20wm"),h(R,"class","fluff svelte-1iu20wm"),h(z,"class","fluff svelte-1iu20wm"),h(U,"class","fluff svelte-1iu20wm"),h(Z,"class","fluff svelte-1iu20wm"),h(tt,"class","fluff svelte-1iu20wm"),h(st,"class","fluff svelte-1iu20wm"),h(D,"class","body svelte-1iu20wm"),h(B,"class","ear2 svelte-1iu20wm"),h(F,"class","ear1 svelte-1iu20wm"),h($,"class","head svelte-1iu20wm"),h(H,"class","eye-ball svelte-1iu20wm"),h(N,"class","eye svelte-1iu20wm"),h(C,"class","head-wrapper svelte-1iu20wm"),h(t,"class","sheep svelte-1iu20wm"),ot(t,"left",s[6]+"px"),ot(t,"transform","scaleX("+(s[2]?1:-1)+")"),ot(t,"--startDelay",s[7]+"ms"),ot(t,"--woolColor",s[0]),dt(t,"running",s[3]),dt(t,"walking",s[4]),dt(t,"eating",s[5])},m(A,k){K(A,t,k),e(t,l),e(l,o),e(l,n),e(l,v),e(t,a),e(t,p),e(p,i),e(p,g),e(p,m),e(t,r),e(t,_),e(t,b),e(t,D),e(D,T),e(D,O),e(D,S),e(D,V),e(D,E),e(D,P),e(D,R),e(D,j),e(D,z),e(D,Q),e(D,U),e(D,Y),e(D,Z),e(D,x),e(D,tt),e(D,et),e(D,st),e(t,lt),e(t,C),e(C,B),e(C,it),e(C,F),e(C,ct),e(C,$),e(C,rt),e(C,N),e(N,H)},p(A,[k]){s=A,k&64&&ot(t,"left",s[6]+"px"),k&4&&ot(t,"transform","scaleX("+(s[2]?1:-1)+")"),k&1&&ot(t,"--woolColor",s[0]),k&8&&dt(t,"running",s[3]),k&16&&dt(t,"walking",s[4]),k&32&&dt(t,"eating",s[5])},i(A){nt||Rt(()=>{nt=zt(t,se,{y:100,duration:Math.random()*4e3+1e3}),nt.start()})},o:vt,d(A){A&&c(t)}}}let Pt=20;function re(s,t,l){let o,n=vt,v=()=>(n(),n=Ft(i,V=>l(6,o=V)),i);s.$$.on_destroy.push(()=>n());let{woolColor:a="white"}=t;const p=(V,E,P)=>Math.max(Math.min(V,Math.max(E,P)),Math.min(E,P));let i=It(0,{easing:St,duration:2e3});v();let g=Math.random()>.5,m=!1,r=!1,_=!1,b=-1,D=-1,T=Math.random()*2e3-1e3,O=0;const S=V=>"hsl("+360*V/Pt+",80%,50%)";return Ot(()=>{if(a=="white"){let V=Math.random();V<.05?D=setInterval(()=>{O=++O%Pt,l(0,a=S(O))},500,1e3):V>=.05&&V<.2&&l(0,a="dodgerblue")}v(l(1,i=It(p(Math.random()*document.body.clientWidth,0,document.body.clientWidth-100),{easing:St,duration:2e3}))),setTimeout(()=>{b=setInterval(()=>{if(_)return;if(l(3,m=!1),l(4,r=!1),l(5,_=Math.random()<.2),_){setTimeout(()=>l(5,_=!1),5e3);return}if(!(Math.random()>.5))return;l(2,g=Math.random()>.5);let E=Math.random()*200;g&&(E*=-1);let P=Bt(i),R=document.body.clientWidth,j=p(P+E,0,R-100),z=Math.abs(P-j);i.set(j),l(2,g=!g),z>100?l(3,m=!0):l(4,r=!0)},2e3)},T)}),At(()=>{b!=-1&&clearInterval(b),D!=-1&&clearInterval(D)}),s.$$set=V=>{"woolColor"in V&&l(0,a=V.woolColor)},[a,i,g,m,r,_,o,T]}class oe extends gt{constructor(t){super(),Et(this,t,re,le,Dt,{woolColor:0})}}function ae(s){let t,l,o,n,v,a,p,i,g,m,r,_,b,D,T,O,S,V,E,P,R,j,z,Q,U,Y,Z,x,tt,et,st,lt,C,B,it,F,ct,$,rt,N,H,nt,A,k,L,X,y,W;return{c(){t=f("div"),l=f("div"),o=w(),n=f("div"),v=w(),a=f("div"),p=f("div"),i=f("div"),g=w(),m=f("div"),r=w(),_=f("div"),b=f("div"),D=w(),T=f("div"),O=w(),S=f("div"),V=w(),E=f("div"),P=f("div"),R=w(),j=f("div"),z=w(),Q=f("div"),U=w(),Y=f("div"),Z=w(),x=f("div"),tt=w(),et=f("div"),st=w(),lt=f("div"),C=w(),B=f("div"),it=w(),F=f("div"),ct=w(),$=f("div"),rt=f("div"),N=w(),H=f("div"),nt=w(),A=f("div"),k=w(),L=f("div"),X=f("div"),y=w(),W=f("div"),this.h()},l(G){t=u(G,"DIV",{class:!0,style:!0});var q=d(t);l=u(q,"DIV",{class:!0}),d(l).forEach(c),o=I(q),n=u(q,"DIV",{class:!0}),d(n).forEach(c),v=I(q),a=u(q,"DIV",{class:!0});var J=d(a);p=u(J,"DIV",{class:!0});var ht=d(p);i=u(ht,"DIV",{class:!0}),d(i).forEach(c),g=I(ht),m=u(ht,"DIV",{class:!0}),d(m).forEach(c),ht.forEach(c),r=I(J),_=u(J,"DIV",{class:!0});var mt=d(_);b=u(mt,"DIV",{class:!0}),d(b).forEach(c),D=I(mt),T=u(mt,"DIV",{class:!0}),d(T).forEach(c),mt.forEach(c),O=I(J),S=u(J,"DIV",{class:!0}),d(S).forEach(c),V=I(J),E=u(J,"DIV",{class:!0});var M=d(E);P=u(M,"DIV",{class:!0}),d(P).forEach(c),R=I(M),j=u(M,"DIV",{class:!0}),d(j).forEach(c),z=I(M),Q=u(M,"DIV",{class:!0}),d(Q).forEach(c),U=I(M),Y=u(M,"DIV",{class:!0}),d(Y).forEach(c),Z=I(M),x=u(M,"DIV",{class:!0}),d(x).forEach(c),tt=I(M),et=u(M,"DIV",{class:!0}),d(et).forEach(c),st=I(M),lt=u(M,"DIV",{class:!0}),d(lt).forEach(c),C=I(M),B=u(M,"DIV",{class:!0}),d(B).forEach(c),it=I(M),F=u(M,"DIV",{class:!0}),d(F).forEach(c),M.forEach(c),ct=I(J),$=u(J,"DIV",{class:!0});var at=d($);rt=u(at,"DIV",{class:!0}),d(rt).forEach(c),N=I(at),H=u(at,"DIV",{class:!0}),d(H).forEach(c),nt=I(at),A=u(at,"DIV",{class:!0}),d(A).forEach(c),k=I(at),L=u(at,"DIV",{class:!0});var $t=d(L);X=u($t,"DIV",{class:!0}),d(X).forEach(c),$t.forEach(c),at.forEach(c),J.forEach(c),y=I(q),W=u(q,"DIV",{class:!0}),d(W).forEach(c),q.forEach(c),this.h()},h(){h(l,"class","rope svelte-1tth9ko"),h(n,"class","back-tire svelte-1tth9ko"),h(i,"class","foot foot1 svelte-1tth9ko"),h(m,"class","foot foot2 svelte-1tth9ko"),h(p,"class","front-feet feet svelte-1tth9ko"),h(b,"class","foot foot1 svelte-1tth9ko"),h(T,"class","foot foot2 svelte-1tth9ko"),h(_,"class","hind-feet feet svelte-1tth9ko"),h(S,"class","tail svelte-1tth9ko"),h(P,"class","fluff svelte-1tth9ko"),h(j,"class","fluff svelte-1tth9ko"),h(Q,"class","fluff svelte-1tth9ko"),h(Y,"class","fluff svelte-1tth9ko"),h(x,"class","fluff svelte-1tth9ko"),h(et,"class","fluff svelte-1tth9ko"),h(lt,"class","fluff svelte-1tth9ko"),h(B,"class","fluff svelte-1tth9ko"),h(F,"class","fluff svelte-1tth9ko"),h(E,"class","body svelte-1tth9ko"),h(rt,"class","ear2 svelte-1tth9ko"),h(H,"class","ear1 svelte-1tth9ko"),h(A,"class","head svelte-1tth9ko"),h(X,"class","eye-ball svelte-1tth9ko"),h(L,"class","eye svelte-1tth9ko"),h($,"class","head-wrapper svelte-1tth9ko"),h(a,"class","sheep svelte-1tth9ko"),h(W,"class","front-tire svelte-1tth9ko"),h(t,"class","tire-swing svelte-1tth9ko"),ot(t,"--rotation",s[1]+"deg")},m(G,q){K(G,t,q),e(t,l),e(t,o),e(t,n),e(t,v),e(t,a),e(a,p),e(p,i),e(p,g),e(p,m),e(a,r),e(a,_),e(_,b),e(_,D),e(_,T),e(a,O),e(a,S),e(a,V),e(a,E),e(E,P),e(E,R),e(E,j),e(E,z),e(E,Q),e(E,U),e(E,Y),e(E,Z),e(E,x),e(E,tt),e(E,et),e(E,st),e(E,lt),e(E,C),e(E,B),e(E,it),e(E,F),e(a,ct),e(a,$),e($,rt),e($,N),e($,H),e($,nt),e($,A),e($,k),e($,L),e(L,X),e(t,y),e(t,W),s[3](t)},p(G,[q]){q&2&&ot(t,"--rotation",G[1]+"deg")},i:vt,o:vt,d(G){G&&c(t),s[3](null)}}}function ie(s,t,l){let o,n=It(-10,{easing:ee,duration:1300});Ht(s,n,r=>l(1,o=r));let v=-1,a,p=!1,i;Ot(()=>{a=new Audio("/wee-trim.mp3"),a.loop=!1,a.volume=.2,i.click(),v=setInterval(()=>{Math.random()<.05&&g()},1e3,1e3)}),At(()=>clearInterval(v));const g=()=>{p||(p=!0,a.load(),a.play(),setTimeout(()=>{document.body.clientWidth>600?n.set(40):n.set(30),setTimeout(()=>{n.set(-10),setTimeout(()=>p=!1,1300)},1300)},1e3))};function m(r){Lt[r?"unshift":"push"](()=>{i=r,l(0,i)})}return[i,o,n,m]}class ce extends gt{constructor(t){super(),Et(this,t,ie,ae,Dt,{})}}function ne(s,t,l){const o=s.slice();return o[4]=t[l],o[6]=l,o}function fe(s){let t,l;return t=new xt({props:{background:"darkslategray",color:"white",$$slots:{default:[de]},$$scope:{ctx:s}}}),{c(){kt(t.$$.fragment)},l(o){yt(t.$$.fragment,o)},m(o,n){Vt(t,o,n),l=!0},p(o,n){const v={};n&9&&(v.$$scope={dirty:n,ctx:o}),t.$set(v)},i(o){l||(ut(t.$$.fragment,o),l=!0)},o(o){ft(t.$$.fragment,o),l=!1},d(o){bt(t,o)}}}function ue(s){let t,l,o,n,v,a;const p=s[1].default,i=Gt(p,s,s[3],null);let g={length:3},m=[];for(let r=0;r<g.length;r+=1)m[r]=ve(ne(s,g,r));return v=new ce({}),{c(){i&&i.c(),t=w(),l=f("div"),o=w();for(let r=0;r<m.length;r+=1)m[r].c();n=w(),kt(v.$$.fragment),this.h()},l(r){i&&i.l(r),t=I(r),l=u(r,"DIV",{class:!0}),d(l).forEach(c),o=I(r);for(let _=0;_<m.length;_+=1)m[_].l(r);n=I(r),yt(v.$$.fragment,r),this.h()},h(){h(l,"class","grass svelte-zq69kv")},m(r,_){i&&i.m(r,_),K(r,t,_),K(r,l,_),K(r,o,_);for(let b=0;b<m.length;b+=1)m[b].m(r,_);K(r,n,_),Vt(v,r,_),a=!0},p(r,_){i&&i.p&&(!a||_&8)&&Jt(i,p,r,r[3],a?Qt(p,r[3],_,null):Kt(r[3]),null)},i(r){if(!a){ut(i,r);for(let _=0;_<g.length;_+=1)ut(m[_]);ut(v.$$.fragment,r),a=!0}},o(r){ft(i,r),m=m.filter(Boolean);for(let _=0;_<m.length;_+=1)ft(m[_]);ft(v.$$.fragment,r),a=!1},d(r){i&&i.d(r),r&&c(t),r&&c(l),r&&c(o),Ut(m,r),r&&c(n),bt(v,r)}}}function de(s){let t,l,o,n,v,a,p,i,g;return{c(){t=f("h1"),l=_t(`We don't meet people by accident.
            `),o=f("br"),n=_t(`
            They are meant to cross our path for a reason.`),v=w(),a=f("div"),p=_t("Our Story"),this.h()},l(m){t=u(m,"H1",{});var r=d(t);l=pt(r,`We don't meet people by accident.
            `),o=u(r,"BR",{}),n=pt(r,`
            They are meant to cross our path for a reason.`),r.forEach(c),v=I(m),a=u(m,"DIV",{class:!0});var _=d(a);p=pt(_,"Our Story"),_.forEach(c),this.h()},h(){h(a,"class","button svelte-zq69kv")},m(m,r){K(m,t,r),e(t,l),e(t,o),e(t,n),K(m,v,r),K(m,a,r),e(a,p),i||(g=Yt(a,"click",s[2]),i=!0)},p:vt,d(m){m&&c(t),m&&c(v),m&&c(a),i=!1,g()}}}function ve(s){let t,l;return t=new oe({}),{c(){kt(t.$$.fragment)},l(o){yt(t.$$.fragment,o)},m(o,n){Vt(t,o,n),l=!0},i(o){l||(ut(t.$$.fragment,o),l=!0)},o(o){ft(t.$$.fragment,o),l=!1},d(o){bt(t,o)}}}function he(s){let t,l,o,n;const v=[ue,fe],a=[];function p(i,g){return i[0]?0:1}return t=p(s),l=a[t]=v[t](s),{c(){l.c(),o=Tt()},l(i){l.l(i),o=Tt()},m(i,g){a[t].m(i,g),K(i,o,g),n=!0},p(i,[g]){let m=t;t=p(i),t===m?a[t].p(i,g):(Xt(),ft(a[m],1,1,()=>{a[m]=null}),Nt(),l=a[t],l?l.p(i,g):(l=a[t]=v[t](i),l.c()),ut(l,1),l.m(o.parentNode,o))},i(i){n||(ut(l),n=!0)},o(i){ft(l),n=!1},d(i){a[t].d(i),i&&c(o)}}}function me(s,t,l){let{$$slots:o={},$$scope:n}=t,v=!1;const a=()=>l(0,v=!0);return s.$$set=p=>{"$$scope"in p&&l(3,n=p.$$scope)},[v,o,a,n]}class Ie extends gt{constructor(t){super(),Et(this,t,me,he,Dt,{})}}export{Ie as default};