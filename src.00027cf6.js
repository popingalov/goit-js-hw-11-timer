parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"cKsY":[function(require,module,exports) {
!function(){var t=50,e=new Image(20,20);e.src="https://pngicon.ru/file/uploads/snejinka.png";var n=document,i=180/3.14,a=3.14/180,r=void 0!==n.getElementsByTagName?n.getElementsByTagName("div").length:0,o={w:0,h:0,cx:0,cy:0,flake:[],x:[],y:[],cutRight:[],cutLeft:[],dst:[],size:[],vel:[],acc:[],blo:[],rate:[],rng:[],ang:[],counter:[]},l=n.createElement("div");l.setAttribute("style","display:block;position:fixed;height:100%;width:100%;margin:auto;padding:0px;top:0;left:0;left:0;right:0;overflow:hidden;visibility:hidden;"),n.body.appendChild(l);for(var c=0;c<t;c++){o.counter[c]=0;var d=n.createElement("img");d.setAttribute("id","flake"+(r+c)),d.setAttribute("src",e.src),d.setAttribute("style","display:none;position:absolute;transform: translate3d(0px,0px,0)height:2vh;width:2vh;visibility:visible;"),l.appendChild(d)}function s(){var t=n.documentElement.clientWidth,e=n.documentElement.clientHeight,i="number"==typeof t?window.innerWidth-t:0,a="number"==typeof e?window.innerHeight-e:0;o.h=window.innerHeight-a-1,o.w=window.innerWidth-i-1,o.cy=o.h/2|0,o.cx=o.w/2|0}function h(t){o.counter[t]>1&&(o.flake[t].style.display="block"),o.counter[t]<2&&o.counter[t]++,o.cutLeft[t]=0+Math.random()*o.cx/2,o.cutRight[t]=o.w-Math.random()*o.cx/2,o.y[t]=0+Math.random()*o.h,o.x[t]=o.cx-o.cx/3+Math.random()*o.cx/1.5,o.rng[t]=o.cx-100+50*Math.random();var e=o.y[t]-o.cy/6,n=o.x[t]-o.rng[t];o.ang[t]=Math.atan2(e,n)*i,o.dst[t]=5+Math.sqrt(e*e+n*n),o.size[t]=.1,o.acc[t]=0,o.blo[t]=0,o.vel[t]=o.dst[t]/2*1.8/100,o.rate[t]=.02*Math.random()-.01}function u(){requestAnimationFrame(u),function(){for(var e=0;e<t;e++)o.y[e]+=o.vel[e]*Math.sin(o.ang[e]*a),o.x[e]+=o.vel[e]*Math.cos((o.ang[e]+=o.blo[e])*a),o.acc[e]=o.vel[e]/(o.dst[e]+400*o.vel[e]/100)*o.vel[e],o.vel[e]+=o.acc[e],o.size[e]+=.6*o.vel[e]/(190*o.dst[e]/100),o.blo[e]+=o.rate[e],o.y[e]<-o.cy/2&&(o.ang[e]*=-1),(o.x[e]+o.size[e]<o.cutLeft[e]||o.x[e]>o.cutRight[e]||o.y[e]>o.h||o.x[e]>o.w||o.x[e]+o.size[e]<0)&&h(e),o.flake[e].style.transform="translate3d("+o.x[e]+"px, "+o.y[e]+"px,0) scale("+o.size[e]+")"}()}window.addEventListener("resize",function(){s();for(var e=0;e<t;e++)o.flake[e].style.display="none",o.counter[e]=0,h(e)},!1),window.addEventListener("load",function(){s();for(var e=0;e<t;e++)o.flake[e]=n.getElementById("flake"+(r+e)),h(e);u()},!1)}();
},{}],"Focm":[function(require,module,exports) {
"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}require("./sass/main.scss"),require("./js/snow.js");class t{constructor({selector:t,targetDate:r}){e(this,"start",()=>{setInterval(()=>{const e=Date.now(),t=s((new Date(this.targetDate)-e)/1e3),{days:r,hours:a,mins:n,secs:o}=t;this.refs.fieldDays.textContent=r,this.refs.fieldHours.textContent=a,this.refs.fieldMins.textContent=n,this.refs.fieldSecs.textContent=o},1e3)}),this.selector=t,this.targetDate=r,this.refs={fieldDays:document.querySelector(`${this.selector} span[data-value="days"]`),fieldHours:document.querySelector(`${this.selector} span[data-value="hours"]`),fieldMins:document.querySelector(`${this.selector} span[data-value="mins"]`),fieldSecs:document.querySelector(`${this.selector} span[data-value="secs"]`)}}}function s(e){let t=Math.floor(e/3600/24),s=Math.floor(e/3600%24);s=String(s).padStart(2,"0");let r=Math.floor(e/60%60);r=String(r).padStart(2,"0");let a=Math.floor(e%60);return{days:t,hours:s,mins:r,secs:a=String(a).padStart(2,"0")}}const r=new t({selector:"#timer-1",targetDate:new Date("Dec 31, 2021")});r.start();
},{"./sass/main.scss":"clu1","./js/snow.js":"cKsY"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.00027cf6.js.map