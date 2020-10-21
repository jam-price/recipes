(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(11),a(2)),i=a.n(o),u=a(5),s=a(1),m=(a(13),a(14),function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients,l=e.url,o=e.categories,i=Math.floor(a);return r.a.createElement("div",{className:"recipe"},r.a.createElement("h1",null,t),r.a.createElement("img",{className:"image",src:n,alt:t}),r.a.createElement("h2",null,"Categories"),o.map((function(e){return r.a.createElement("p",null,e)})),r.a.createElement("p",null,r.a.createElement("span",{className:"calories"},"Total Recipe Calories:")," ",i),r.a.createElement("h2",{className:"ingredient"},"Ingredients"),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e.index},e.text)}))),r.a.createElement("a",{className:"recipe-link",target:"_blank",rel:"noreferrer noopener",href:l},"CLICK HERE FOR THE FULL RECIPE"))}),p=(a(15),function(e){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"low-carb",checked:!0===e.lowCarb,onChange:!0===e.lowCarb?function(){return e.setLowCarb(!1)}:function(){return e.setLowCarb(!0)}}),"Low-Carb")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"low-fat",checked:!0===e.lowFat,onChange:!0===e.lowFat?function(){return e.setLowFat(!1)}:function(){return e.setLowFat(!0)}}),"Low-Fat")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"vegan",checked:!0===e.vegan,onChange:!0===e.vegan?function(){return e.setVegan(!1)}:function(){return e.setVegan(!0)}}),"Vegan")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"vegetarian",checked:!0===e.vegetarian,onChange:!0===e.vegetarian?function(){return e.setVegetarian(!1)}:function(){return e.setVegetarian(!0)}}),"Vegetarian")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"peanut-free",checked:!0===e.peanutFree,onChange:!0===e.peanutFree?function(){return e.setPeanutFree(!1)}:function(){return e.setPeanutFree(!0)}}),"Peanut-Free")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"tree-nut-free",checked:!0===e.treeNutFree,onChange:!0===e.treeNutFree?function(){return e.setTreeNutFree(!1)}:function(){return e.setTreeNutFree(!0)}}),"Tree-nut-Free"))))}),h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),h=o[0],b=o[1],f=Object(n.useState)(""),E=Object(s.a)(f,2),g=E[0],d=E[1],v=Object(n.useState)(!1),w=Object(s.a)(v,2),k=w[0],F=w[1],N=Object(n.useState)(!1),j=Object(s.a)(N,2),O=j[0],x=j[1],C=Object(n.useState)(!1),y=Object(s.a)(C,2),L=y[0],S=y[1],V=Object(n.useState)(!1),R=Object(s.a)(V,2),P=R[0],T=R[1],I=Object(n.useState)(!1),_=Object(s.a)(I,2),B=_[0],H=_[1],J=Object(n.useState)(!1),M=Object(s.a)(J,2),W=M[0],q=M[1],A="https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("326357f3","&app_key=").concat("562ff76fbd2e4b9eb13bc248f24c9ec5");k&&(A+="&diet=low-carb"),O&&(A+="&diet=low-fat"),L&&(A+="&health=vegan"),P&&(A+="&health=vegetarian"),B&&(A+="&health=peanut-free"),W&&(A+="&health=tree-nut-free"),console.log(A),Object(n.useEffect)((function(){D()}),[g]);var D=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(A);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=""===g?r.a.createElement("p",null):r.a.createElement("h2",{className:"recipes-head"},"Recipes");return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:""===g?"div-down":null},r.a.createElement("h1",{className:"title"},"Find your perfect Recipe"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(h),b("")},className:"search-form"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Particular Ingredient? Full Recipe?",value:h,onChange:function(e){var t=e.target;b(t.value),console.log(h)}}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search")),r.a.createElement(p,{lowCarb:k,setLowCarb:F,lowFat:O,setLowFat:x,vegan:L,setVegan:S,vegetarian:P,setVegetarian:T,peanutFree:B,setPeanutFree:H,treeNutFree:W,setTreeNutFree:q})),r.a.createElement("div",{className:"recipes"},K,a.map((function(e){return r.a.createElement(m,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url,categories:e.recipe.healthLabels})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.f735d8b0.chunk.js.map