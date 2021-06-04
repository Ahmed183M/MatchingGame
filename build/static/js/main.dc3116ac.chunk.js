(this["webpackJsonpmatching-game"]=this["webpackJsonpmatching-game"]||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(4),r=a.n(c),o=a(10),i=(a(18),a(2)),d=0,l=[];var u=a(1);function m(e){var t=Object(i.c)((function(e){return e.cards})),a=Object(i.b)();return Object(u.jsx)("div",{className:"flip-card",children:Object(u.jsxs)("div",{className:"flip-card-inner "+e.id,id:e.id,children:[Object(u.jsx)("div",{className:"flip-card-front",onClick:function(e){return function(e,t,a){var n=e.target.closest(".flip-card-inner");if("flip-card-inner"===n.className.split(" ")[0]){var s=!1;t.forEach((function(e){e.id===n.className.split(" ")[1]&&!0===e.isMatched&&(s=!0)})),s||"rotateX(180deg)"!==n.style.transform&&(n.style.transform="rotateX(180deg)",d++,l[d-1]=n.className.split(" ")[1]),2===d&&(document.getElementsByTagName("body")[0].style.pointerEvents="none",l[0]===l[1]?(d=0,a(function(){return{type:"Match_Cards",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}(l)),a({type:"Use_Move"}),a({type:"Correct_Move"}),document.getElementsByTagName("body")[0].style.pointerEvents=""):setTimeout((function(){document.getElementsByClassName("flip-card-inner "+l[0])[0].style.transform=document.getElementsByClassName("flip-card-inner "+l[0])[1].style.transform=document.getElementsByClassName("flip-card-inner "+l[1])[0].style.transform=document.getElementsByClassName("flip-card-inner "+l[1])[1].style.transform="rotateX(0deg)",d=0,a({type:"Use_Move"}),document.getElementsByTagName("body")[0].style.pointerEvents=""}),1e3))}}(e,t,a)}}),Object(u.jsx)("div",{className:"flip-card-back",children:Object(u.jsx)("img",{src:e.link,alt:"cardback"})})]})})}function j(){var e=Object(i.c)((function(e){return e}));return Object(u.jsxs)("div",{className:"game-statuses",children:[Object(u.jsxs)("span",{className:"game-status",children:["Remaining Moves: ",e.remainingMoves]}),Object(u.jsxs)("span",{className:"game-status",children:["Used Moves: ",25-e.remainingMoves]}),Object(u.jsxs)("span",{className:"game-status",children:["Matches Found: ",e.correctMoves]})]})}function h(e){var t=Object(i.b)();return Object(u.jsx)("div",{className:"modal "+e.status.show,children:Object(u.jsxs)("div",{className:"modal-content w3-animate-top",children:[Object(u.jsx)("h1",{children:e.status.state}),Object(u.jsx)("h2",{children:e.status.score}),Object(u.jsx)("h3",{children:"Wanna Play Again?"}),Object(u.jsx)("button",{onClick:function(a){a.target.closest(".modal").style.class="modal "+e.status.show,t({type:"Play_Again"})},children:"Play Again"})]})})}var b=a(8),f=a(9),v=a(13),O=a(11),p=function(e){Object(v.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={hidden:!0},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({hidden:!1})}),this.props.waitBeforeShow)}},{key:"render",value:function(){return this.state.hidden?"":this.props.children}}]),a}(s.a.Component);function g(){var e=Object(i.c)((function(e){return e})),t=Object(i.b)(),a=Object(n.useState)({show:"hidden",state:"",score:""}),s=Object(o.a)(a,2),c=s[0],r=s[1];return Object(n.useEffect)((function(){fetch("https://picsum.photos/v2/list?page="+(Math.floor(99*Math.random())+1)+"&limit=8").then((function(e){return e.json()})).then((function(e){e.push.apply(e,e),function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(e),t({type:"Save_Cards",payload:e.map((function(e){return{id:e.id,download_url:e.download_url,isMatched:!1}}))})})),r({show:"hidden",state:"",score:""})}),[e.start]),Object(n.useEffect)((function(){8===e.correctMoves&&setTimeout((function(){return r({show:"shown",state:"You Won The Game \u2714",score:"Your Score is: "+e.remainingMoves})}),500),0===e.remainingMoves&&setTimeout((function(){return r({show:"shown",state:"You Lost The Game \u274c",score:""})}),500)}),[e.remainingMoves]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(h,{status:c}),Object(u.jsx)("div",{className:"card-holder",children:0==e.start?Object(u.jsx)("button",{onClick:function(){return t({type:"Start_Game"})},className:"start-button",children:"Start Game"}):e.cards.map((function(e,t){return Object(u.jsx)(p,{waitBeforeShow:125*t,children:Object(u.jsx)(m,{id:e.id,link:e.download_url})})}))}),Object(u.jsx)(j,{})]})}var y=a(12),M=a(3);var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{start:!1,remainingMoves:25,correctMoves:0,cards:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Start_Game":return Object(M.a)(Object(M.a)({},e),{},{start:!0});case"Save_Cards":return Object(M.a)(Object(M.a)({},e),{},{cards:t.payload});case"Match_Cards":return Object(M.a)(Object(M.a)({},e),{},{cards:e.cards.map((function(e){return t.payload.includes(e.id)&&(e.isMatched=!0),e}))});case"Use_Move":return Object(M.a)(Object(M.a)({},e),{},{remainingMoves:e.remainingMoves-1});case"Correct_Move":return Object(M.a)(Object(M.a)({},e),{},{correctMoves:e.correctMoves+1});case"Play_Again":return{start:!1,remainingMoves:25,correctMoves:0,cards:[]};default:return e}},N=Object(y.a)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=document.getElementById("root");r.a.render(Object(u.jsx)(n.StrictMode,{children:Object(u.jsx)(i.a,{store:N,children:Object(u.jsx)(g,{})})}),x)}},[[24,1,2]]]);
//# sourceMappingURL=main.dc3116ac.chunk.js.map