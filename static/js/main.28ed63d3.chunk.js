(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{15:function(e,r,t){},18:function(e,r,t){},19:function(e,r,t){},20:function(e,r,t){},21:function(e,r,t){"use strict";t.r(r);var c=t(1),n=t.n(c),s=t(9),o=t.n(s),i=(t(15),t(2)),a=t(0);function u(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Game over"}),e.currentScore===e.highScore?Object(a.jsx)("p",{children:"New high score!"}):null,Object(a.jsxs)("p",{children:["You scored ",e.currentScore," ",e.currentScore>1?"points":"point"]}),Object(a.jsxs)("p",{children:["Your high score is ",e.highScore," points"]}),Object(a.jsx)("button",{onClick:e.newGame,children:"New Game"})]})}var h=t(7),j=t.n(h),d=t(10),b=t(4),O=t(8);t(18);function f(e){return Object(a.jsx)("div",{className:"cardContainer",onClick:function(){if(e.card.clicked)e.setIsGameOver(!0);else{var r=e.currentScore+1;e.setCurrentScore(r);var t=e.cards.findIndex((function(r){return r.id===e.card.id})),c=Object(b.a)(e.cards);c[t]=Object(O.a)(Object(O.a)({},c[t]),{},{clicked:!c[t].clicked}),e.setCards(c),r>e.highScore&&e.setHighScore(r)}},children:Object(a.jsxs)("figure",{className:"card",children:[Object(a.jsx)("img",{src:e.card.icon,alt:e.card.name}),Object(a.jsx)("figcaption",{children:e.card.name})]})})}function S(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Current Score: ",e.currentScore]}),Object(a.jsxs)("h3",{children:["High Score: ",e.highScore]})]})}t(19);function l(e){var r=Object(c.useState)([]),t=Object(i.a)(r,2),n=t[0],s=t[1],o=Object(c.useState)([]),u=Object(i.a)(o,2),h=u[0],O=u[1];function l(e){return Array.from(new Set(e.map((function(e){return e.id})))).map((function(r){return e.find((function(e){return e.id===r}))}))}function m(){return(m=Object(d.a)(j.a.mark((function e(){var r,t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.opendota.com/api/heroStats/");case 2:return r=e.sent,e.next=5,r.json();case 5:t=e.sent,c=[];case 7:if(!(c.length<6)){e.next=14;break}return e.next=10,t[Math.floor(Math.random()*t.length)];case 10:n=e.sent,c.push(n),e.next=7;break;case 14:return e.next=17,s(l(c));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){for(var r,t=e.length;0!==t;){r=Math.floor(Math.random()*t),t--;var c=[e[r],e[t]];e[t]=c[0],e[r]=c[1]}return e}return Object(c.useEffect)((function(){!function(){m.apply(this,arguments)}();var e=Object(b.a)(n);p(e),s(e)}),[]),Object(c.useEffect)((function(){var e=Object(b.a)(h);p(e),O(e)}),[e.currentScore]),Object(c.useEffect)((function(){for(var e=[],r=0;r<n.length;r++){var t={name:n[r].localized_name,icon:"https://api.opendota.com"+n[r].icon,image:"https://api.opendota.com"+n[r].img,id:n[r].id,clicked:!1};e.push(t)}O(e)}),[n]),Object(a.jsxs)("section",{children:[Object(a.jsx)("header",{children:Object(a.jsx)(S,{currentScore:e.currentScore,setCurrentScore:e.setCurrentScore,highScore:e.highScore,setHighScore:e.setHighScore})}),Object(a.jsx)("section",{className:"gameboard",children:h.map((function(r){return Object(a.jsx)(f,{card:r,cards:h,setCards:O,currentScore:e.currentScore,setCurrentScore:e.setCurrentScore,highScore:e.highScore,setHighScore:e.setHighScore,setIsGameOver:e.setIsGameOver},r.id)}))})]})}t(20);function m(){var e=Object(c.useState)(0),r=Object(i.a)(e,2),t=r[0],n=r[1],s=Object(c.useState)(0),o=Object(i.a)(s,2),h=o[0],j=o[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),O=b[0],f=b[1];return Object(a.jsx)("div",{className:"App",children:O?Object(a.jsx)(u,{currentScore:t,setCurrentScore:n,highScore:h,setIsGameOver:f,newGame:function(){f(!1),n(0)}}):Object(a.jsx)(l,{currentScore:t,setCurrentScore:n,highScore:h,setHighScore:j,setIsGameOver:f})})}o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.28ed63d3.chunk.js.map