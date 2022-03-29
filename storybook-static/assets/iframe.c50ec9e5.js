var w=Object.defineProperty,D=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var y=(e,a,s)=>a in e?w(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,p=(e,a)=>{for(var s in a||(a={}))_.call(a,s)&&y(e,s,a[s]);if(m)for(var s of m(a))T.call(a,s)&&y(e,s,a[s]);return e},g=(e,a)=>D(e,O(a));var A=(e,a)=>{var s={};for(var i in e)_.call(e,i)&&a.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&m)for(var i of m(e))a.indexOf(i)<0&&T.call(e,i)&&(s[i]=e[i]);return s};import{o as d,c as x,r as k,a as c,t as u,b as P,F as v,n as M,d as n,A as N,M as L,C as $,S as B,e as z,f as j,g as I,h as X,i as F,j as Z,l as K,k as J,m as R,p as V,q as H,s as Q,u as W,v as Y,w as G,x as ee,y as ae}from"./vendor.2e27e4dd.js";const se=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};se();const ie={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var re=Object.freeze(Object.defineProperty({__proto__:null,parameters:ie},Symbol.toStringTag,{value:"Module"}));var oe=(e,a)=>{const s=e.__vccOpts||e;for(const[i,r]of a)s[i]=r;return s};const U={name:"color-swatches",data(){return{colors:{}}},computed:{flatColors(){return this.colors}},methods:{toNormalCase(e){return e.replace(/([A-Z])(?<=[a-z]\1|[A-Za-z]\1(?=[a-z]))/g," $1")},toSassCase(e){return`$color-${this.toNormalCase(e).toLowerCase().split(" ").join("-")}`}},beforeCreate(){fetch("https://figma-style-dictionary.herokuapp.com/").then(e=>e.json()).then(e=>this.colors=e.color)}},te={class:"color-title"},ce={class:"color-list"},ne={class:"color-info"},le={class:"color-subtitle"},pe={class:"color-text"},me={class:"color-text"};function de(e,a,s,i,r,o){return d(!0),x(v,null,k(r.colors,(t,C)=>(d(),x("div",{class:"color-container",key:Object.keys(t)[0]},[c("h2",te,u(C),1),P(e.$slots,C.toLowerCase()),c("ul",ce,[(d(!0),x(v,null,k(t,(b,h)=>(d(),x("li",{class:"color-list__item",key:b.value,style:M({"--color":b.value})},[c("div",ne,[c("h3",le,u(this.toNormalCase(h)),1),c("p",pe,u(this.toSassCase(h)),1),c("p",me,u(b.value),1)])],4))),128))])]))),128)}var E=oe(U,[["render",de]]);U.__docgenInfo={displayName:"color-swatches",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const xe={},ue="wrapper";function S(s){var i=s,{components:e}=i,a=A(i,["components"]);return n(ue,g(p(p({},xe),a),{components:e,mdxType:"MDXLayout"}),n(L,{title:"Colors",component:E,mdxType:"Meta"}),n($,{mdxType:"Canvas"},n(B,{name:"Colors",mdxType:"Story"},()=>({components:{ColorSwatches:E},template:`
        <div class="flow">
          <ColorSwatches>
              <template #gamefication>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #bg>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #grays>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #content>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #support>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #neutral>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #brand>
                <p class="text-block">
                  Color Brand Primary \xE9 a cor principal do Passei Direto. Usada em CTA's principais. Importante n\xE3o existir mais de um CTA com a cor prim\xE1ria em uma mesma p\xE1gina ou scroll.
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
          </ColorSwatches>
        </div>
        `}))))}S.isMDXComponent=!0;const f=()=>({components:{ColorSwatches:E},template:`
        <div class="flow">
          <ColorSwatches>
              <template #gamefication>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #bg>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #grays>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #content>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #support>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #neutral>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #brand>
                <p class="text-block">
                  Color Brand Primary \xE9 a cor principal do Passei Direto. Usada em CTA's principais. Importante n\xE3o existir mais de um CTA com a cor prim\xE1ria em uma mesma p\xE1gina ou scroll.
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
          </ColorSwatches>
        </div>
        `});f.storyName="Colors";f.parameters={storySource:{source:`() => {
  return {
    components: {
      ColorSwatches
    },
    template: \`
        <div class="flow">
          <ColorSwatches>
              <template #gamefication>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #bg>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #grays>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #content>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #support>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #neutral>
                <p class="text-block">
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
              <template #brand>
                <p class="text-block">
                  Color Brand Primary \xE9 a cor principal do Passei Direto. Usada em CTA's principais. Importante n\xE3o existir mais de um CTA com a cor prim\xE1ria em uma mesma p\xE1gina ou scroll.
                  Usada em locais que poderia ser a cor prim\xE1ria, mas j\xE1 existe um CTA prim\xE1rio ou necessita de uma repeti\xE7\xE3o de btns (ex: lista de disciplinas btn com cor secund\xE1ria, p\xE1gina da disciplina btn com cor prim\xE1ria)
                </p>
              </template>
          </ColorSwatches>
        </div>
        \`
  };
}`}};const l={title:"Colors",component:E,includeStories:["colors"]},Ee={Colors:"colors"};l.parameters=l.parameters||{};l.parameters.docs=g(p({},l.parameters.docs||{}),{page:()=>n(N,{mdxStoryNameToKey:Ee,mdxComponentAnnotations:l},n(S,null))});var be=Object.freeze(Object.defineProperty({__proto__:null,colors:f,default:l},Symbol.toStringTag,{value:"Module"}));function q(e){return{"C:/Users/camilo.micheletto/Desktop/refresh/sb-ds/src/stories/Colors.stories.mdx":be}[e]}Object.assign(q,{keys:()=>["C:/Users/camilo.micheletto/Desktop/refresh/sb-ds/src/stories/Colors.stories.mdx"],resolve:e=>({"C:/Users/camilo.micheletto/Desktop/refresh/sb-ds/src/stories/Colors.stories.mdx":"./src/stories/Colors.stories.mdx"})[e]});function ge(){z(q,{hot:!1},!1)}const fe=[J,R,V,H,Q,W,Y,G,ee,ae,re].filter(Boolean);fe.forEach(e=>{Object.keys(e).forEach(a=>{const s=e[a];switch(a){case"args":case"argTypes":return K.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(s));case"decorators":return s.forEach(i=>Z(i,!1));case"loaders":return s.forEach(i=>F(i,!1));case"parameters":return j(p({},s),!1);case"argTypesEnhancers":return s.forEach(i=>X(i));case"argsEnhancers":return s.forEach(i=>I(i));case"globals":case"globalTypes":{const i={};return i[a]=s,j(i,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(a+" was not supported :( !")}})});ge();
//# sourceMappingURL=iframe.c50ec9e5.js.map
