(this.webpackJsonpdeputados=this.webpackJsonpdeputados||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=a(1),u=a.n(c),d=a(4),m=a(5);a(12);function s(){Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]);var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];function o(){return(o=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome",e.next=3,fetch("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome").then((function(e){return e.json()})).then((function(e){l(e.dados)})).catch((function(e){console.error("Houve um erro: ".concat(e))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var c=a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:".concat(e.email)},e.nome)),r.a.createElement("td",null,e.siglaPartido),r.a.createElement("td",null,e.SiglaUf),r.a.createElement("td",null,r.a.createElement("img",{src:e.urlFoto,alt:e.nome,title:e.nome})))}));return r.a.createElement("div",{className:"principal"},r.a.createElement("h1",null,"Rela\xe7\xe3o dos Deputados"),r.a.createElement("table",{border:"1"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"C\xf3digo"),r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"Partido"),r.a.createElement("th",null,"Estado"),r.a.createElement("th",null,"Foto"))),r.a.createElement("tbody",null,c)))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.361b42ad.chunk.js.map