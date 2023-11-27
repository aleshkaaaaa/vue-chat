(function(){"use strict";var t={7648:function(t,e,n){var s=n(9242),o=n(3396);const r={id:"app"};function i(t,e,n,s,i,a){const c=(0,o.up)("ChatWidget");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(c)])}var a=n(7139);const c={class:"chat-wrapper"},u={class:"chat-widget",ref:"chatContainer"},h={class:"chat-container",ref:"chatMessages"},d={key:0,class:"bot-message"},l={key:1,class:"user-message"};function f(t,e,n,r,i,f){const p=(0,o.up)("ButtonOptions");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",u,[(0,o._)("div",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.chatHistory,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id},["bot"===t.from?((0,o.wg)(),(0,o.iD)("div",d,(0,a.zw)(t.text),1)):((0,o.wg)(),(0,o.iD)("div",l,(0,a.zw)(t.text),1))])))),128))],512),i.showOptions?((0,o.wg)(),(0,o.j4)(p,{key:0,onUserMessage:f.handleUserMessage},null,8,["onUserMessage"])):(0,o.kq)("",!0),i.showOptions?(0,o.kq)("",!0):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,"onUpdate:modelValue":e[0]||(e[0]=t=>i.userInput=t),onKeyup:e[1]||(e[1]=(0,s.D2)(((...t)=>f.sendMessage&&f.sendMessage(...t)),["enter"])),placeholder:"Введите сообщение..."},null,544)),[[s.nr,i.userInput]])],512)])}n(560);const p={class:"button-options"};function g(t,e,n,s,r,i){return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("button",{onClick:e[0]||(e[0]=t=>i.sendMessage("Заказать пиццу"))},"Заказать пиццу"),(0,o._)("button",{onClick:e[1]||(e[1]=t=>i.sendMessage("Установить будильник"))},"Установить будильник"),(0,o._)("button",{onClick:e[2]||(e[2]=t=>i.sendMessage("Вывести погоду"))},"Вывести погоду")])}var v={methods:{sendMessage(t){this.$emit("user-message",t)}}},w=n(89);const m=(0,w.Z)(v,[["render",g],["__scopeId","data-v-708c4172"]]);var b=m,y={components:{ButtonOptions:b},data(){return{chatHistory:[{id:1,text:"Привет! Что я могу для Вас сделать?",from:"bot"}],showOptions:!0,userInput:""}},methods:{handleUserMessage(t){this.addUserMessage(t),this.showOptions=!1,setTimeout((()=>{this.addBotMessage(`Хорошо, я ${t.toLowerCase()}. Что еще могу сделать?`)}),5e3)},addUserMessage(t){this.chatHistory.push({id:this.chatHistory.length+1,text:t,from:"user"}),this.scrollChatToBottom()},addBotMessage(t){this.chatHistory.push({id:this.chatHistory.length+1,text:t,from:"bot"}),this.showOptions=!0,this.scrollChatToBottom()},sendMessage(){const t=this.userInput.trim();""!==t&&(this.addUserMessage(t),this.userInput="")},scrollChatToBottom(){this.$nextTick((()=>{const t=this.$refs.chatContainer;t.scrollTop=t.scrollHeight}))}}};const M=(0,w.Z)(y,[["render",f],["__scopeId","data-v-ede9801e"]]);var O=M,k={components:{ChatWidget:O}};const _=(0,w.Z)(k,[["render",i]]);var C=_;(0,s.ri)(C).mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(h=0;h<t.length;h++){s=t[h][0],o=t[h][1],r=t[h][2];for(var a=!0,c=0;c<s.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(a=!1,r<i&&(i=r));if(a){t.splice(h--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var h=t.length;h>0&&t[h-1][2]>r;h--)t[h]=t[h-1];t[h]=[s,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],a=s[1],c=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var h=c(n)}for(e&&e(s);u<i.length;u++)r=i[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(h)},s=self["webpackChunkmy_chat_bot"]=self["webpackChunkmy_chat_bot"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7648)}));s=n.O(s)})();
//# sourceMappingURL=app.c67dd9b4.js.map