(this.webpackJsonpproject_four=this.webpackJsonpproject_four||[]).push([[0],[,,,,,,,,,,,,,function(t,s,e){},function(t,s,e){},function(t,s,e){},function(t,s,e){},function(t,s,e){},function(t,s,e){},function(t,s,e){},function(t,s,e){},function(t,s,e){"use strict";e.r(s);var a=e(0),i=e(1),c=e.n(i),n=e(3),o=e.n(n),r=(e(13),e(14),e(4)),l=e(5),h=e(7),j=e(6);function u(t){var s=t.status,e={width:"".concat(s/10*100,"%")};return Object(a.jsx)("div",{className:"health-bar-wrapper",children:Object(a.jsx)("div",{className:"health-bar",style:e})})}e(15);function d(t){var s=t.hunger,e=t.boredom,i=t.dirty,c=t.toilet,n=t.healthPoints;return Object(a.jsxs)("aside",{className:"health-status",children:[Object(a.jsxs)("h2",{children:["Health status: ",n]}),Object(a.jsx)("h3",{children:"Hunger:"}),Object(a.jsx)(u,{status:s}),Object(a.jsx)("h3",{children:"Bored:"}),Object(a.jsx)(u,{status:e}),Object(a.jsx)("h3",{children:"Dirty:"}),Object(a.jsx)(u,{status:i}),Object(a.jsx)("h3",{children:"Toilet:"}),Object(a.jsx)(u,{status:c})]})}e(16);function m(t){var s=t.wash,e=t.feed,i=t.party,c=t.train,n=t.toilet;return Object(a.jsx)("div",{className:"actions-wrapper",children:Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)("div",{onClick:s,className:"action",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/2868/2868940.svg",alt:""})}),Object(a.jsx)("div",{onClick:e,className:"action",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/878/878052.svg",alt:""})}),Object(a.jsx)("div",{onClick:i,className:"action",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/2836/2836310.svg",alt:""})}),Object(a.jsx)("div",{onClick:c,className:"action",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/563/563777.svg",alt:""})}),Object(a.jsx)("div",{onClick:n,className:"action",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/3142/3142620.svg",alt:""})})]})})}e(17);var g=e.p+"static/media/Bath.7dadfaf2.png";function b(){return Object(a.jsxs)("div",{className:"koala-shower",children:[Object(a.jsxs)("div",{className:"shower",children:[Object(a.jsx)("div",{className:"water water-one",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/427/427112.svg",alt:""})}),Object(a.jsx)("div",{className:"water water-two",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/427/427112.svg",alt:""})}),Object(a.jsx)("div",{className:"water water-three",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/427/427112.svg",alt:""})}),Object(a.jsx)("div",{className:"water water-four",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/427/427112.svg",alt:""})}),Object(a.jsx)("div",{className:"water water-five",children:Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/427/427112.svg",alt:""})})]}),Object(a.jsx)("img",{className:"character",src:g,alt:""})]})}e(18);function v(t){var s=t.koalaImg;return document.body.style.backgroundImage="url('https://img.freepik.com/free-vector/illustration-night-mountains-landscape-with-tent-camp-starry-sky_296045-251.jpg?size=626&ext=jpg')",Object(a.jsxs)("div",{className:"party-wrapper",children:[s,Object(a.jsx)("img",{className:"discoball",src:"https://www.flaticon.com/svg/static/icons/svg/3699/3699065.svg",alt:""}),Object(a.jsx)("img",{className:"bar",src:"https://www.flaticon.com/svg/static/icons/svg/3673/3673663.svg",alt:""}),Object(a.jsx)("div",{className:"light1",children:Object(a.jsx)("div",{style:{left:"30%"},className:"ray"})}),Object(a.jsx)("div",{className:"light2",children:Object(a.jsx)("div",{style:{right:"0%"},className:"ray"})})]})}e(19);function w(t){var s=t.koalaImg;return Object(a.jsxs)("div",{className:"train-wrapper",children:[s,Object(a.jsx)("img",{className:"weigths",src:"https://www.flaticon.com/svg/static/icons/svg/2997/2997088.svg",alt:""})]})}var p=e.p+"static/media/Norm.6e4d7585.png",f=e.p+"static/media/Winky.bd433d97.png",O=(e(20),function(t){Object(h.a)(e,t);var s=Object(j.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=s.call.apply(s,[this].concat(i))).state={hunger:10,boredom:6,dirty:10,toilet:4,action:null,healthPoints:10},t.isNotFull=function(t){return t<10},t.isDead=function(){return 0==t.state.healthPoints},t.isHappy=function(){return t.state.hunger<5&&t.state.dirty<5&&t.state.toilet<5&&t.state.boredom<5},t.adjustDirtyStatus=function(s){var e=t.state.dirty;t.isNotFull(t.state.dirty)&&(s=e+s>10?10-e:s,t.setState({dirty:t.state.dirty+=s}))},t.adjustHungerStatus=function(s){var e=t.state.hunger;t.isNotFull(e)&&(s=e+s>10?10-e:s,t.setState({hunger:e+=s}))},t.adjustToiletStatus=function(s){var e=t.state.toilet;t.isNotFull(t.state.toilet)&&(s=e+s>10?10-e:s,t.setState({toilet:t.state.toilet+=s}))},t.adjustBoredomStatus=function(s){t.isNotFull(t.state.boredom)&&t.setState({boredom:t.state.boredom+=s})},t.feed=function(){var s=4;s=t.state.hunger<4?t.state.hunger:4,t.setState({hunger:t.state.hunger-=s}),t.adjustToiletStatus(3),t.isHappy()?t.setState({healthPoints:t.state.healthPoints+=1}):t.setState({healthPoints:t.state.healthPoints-=1})},t.party=function(s){t.setState({boredom:0,action:"party"}),t.adjustDirtyStatus(2),t.adjustHungerStatus(3),t.adjustToiletStatus(3),t.isHappy()?t.setState({healthPoints:t.state.healthPoints+=1}):t.setState({healthPoints:t.state.healthPoints-=1}),setTimeout((function(){t.setState({action:null}),document.body.style.backgroundImage=""}),7e3)},t.wash=function(){t.setState({dirty:0,action:"wash"}),t.adjustBoredomStatus(2),setTimeout((function(){t.setState({action:null})}),4e3),t.isHappy()?t.setState({healthPoints:t.state.healthPoints+=1}):t.setState({healthPoints:t.state.healthPoints-=1})},t.train=function(){t.state.boredom>2?t.setState({boredom:t.state.boredom-=3,action:"train"}):t.setState({boredom:0,action:"train"}),t.adjustHungerStatus(3),t.adjustDirtyStatus(3),t.isHappy()?t.setState({healthPoints:t.state.healthPoints+=1}):t.setState({healthPoints:t.state.healthPoints-=1})},t.toilet=function(){t.setState({toilet:0,action:"toilet"}),t.adjustDirtyStatus(2),t.isHappy()?t.setState({healthPoints:t.state.healthPoints+=1}):t.setState({healthPoints:t.state.healthPoints-=1}),setTimeout((function(){t.setState({action:null})}),2e3)},t}return Object(l.a)(e,[{key:"render",value:function(){var t=this,s=Object(a.jsx)("img",{className:"character",src:p,alt:""});return this.isHappy()?s=Object(a.jsx)("img",{className:"character",src:f,alt:""}):this.isDead()&&(s=Object(a.jsx)("img",{className:"character",src:"",alt:""})),Object(a.jsxs)("div",{className:"functionality",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)(d,{hunger:this.state.hunger,boredom:this.state.boredom,dirty:this.state.dirty,toilet:this.state.toilet,healthPoints:this.state.healthPoints}),Object(a.jsx)("div",{className:"koala",children:"wash"===t.state.action?Object(a.jsx)(b,{}):"party"===t.state.action?Object(a.jsx)(v,{koalaImg:s}):"toilet"===t.state.action?Object(a.jsx)("img",{className:"poop",src:"https://www.flaticon.com/svg/static/icons/svg/2636/2636941.svg",alt:""}):"train"===t.state.action?Object(a.jsx)(w,{koalaImg:s}):s})]}),Object(a.jsx)(m,{wash:this.wash,feed:this.feed,party:this.party,train:this.train,toilet:this.toilet})]})}}]),e}(i.Component));var x=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(O,{})})},y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(s){var e=s.getCLS,a=s.getFID,i=s.getFCP,c=s.getLCP,n=s.getTTFB;e(t),a(t),i(t),c(t),n(t)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.389e11e0.chunk.js.map