var q=Object.defineProperty;var C=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var p=(e,t,r)=>(C(e,typeof t!="symbol"?t+"":t,r),r);const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};E();class I{constructor(){p(this,"theme");const t="theme"in localStorage,r=window.matchMedia("(prefers-color-scheme: light)").matches;if(t)switch(localStorage.getItem("theme")){case"light":this.setLightTheme();break;case"dark":this.setDarkTheme();break;default:throw new Error("The theme is invalid")}else r?this.setLightTheme():this.setDarkTheme()}setLocalTheme(){const t=localStorage.getItem("theme");switch(this.theme){case"light":t!=="light"&&localStorage.setItem("theme","light");break;case"dark":t!=="dark"&&localStorage.setItem("theme","dark");break;default:throw new Error("The theme is invalid")}}toggleTheme(){switch(this.theme){case"light":this.setDarkTheme();break;case"dark":this.setLightTheme();break;default:throw new Error("The theme is invalid")}}setLightTheme(){this.theme="light",document.documentElement.classList.contains("light")||document.documentElement.classList.add("light"),this.setLocalTheme()}setDarkTheme(){this.theme="dark",document.documentElement.classList.contains("light")&&document.documentElement.classList.remove("light"),this.setLocalTheme()}}var A="/social-media-dashboard/assets/icon-facebook.7acd105e.svg",x="/social-media-dashboard/assets/icon-twitter.2941e958.svg",N="/social-media-dashboard/assets/icon-instagram.4ffeb43d.svg",D="/social-media-dashboard/assets/icon-youtube.5171bd05.svg";const F=[{name:"facebook",account:"@nathanf",logo:A,order:"first",primary:{value:"1987",type:"followers",update:12},secondary:[{value:"87",type:"Page Views",update:3},{value:"52",type:"Likes",update:-2}]},{name:"twitter",account:"@nathanf",logo:x,order:"third",primary:{value:"1044",type:"followers",update:99},secondary:[{value:"117",type:"Retweets",update:303},{value:"507",type:"Likes",update:553}]},{name:"instagram",account:"@realnathanf",logo:N,order:"second",primary:{value:"11k",type:"followers",update:1099},secondary:[{value:"5462",type:"Likes",update:2257},{value:"52k",type:"Profile Views",update:1375}]},{name:"youtube",account:"Nathan F.",logo:D,order:"fourth",primary:{value:"8239",type:"subscribers",update:-144},secondary:[{value:"107",type:"Likes",update:-19},{value:"1407",type:"Total Views",update:-12}]}];var g="/social-media-dashboard/assets/icon-up.2a717b7b.svg",y="/social-media-dashboard/assets/icon-down.ee2c6085.svg";const f=document.querySelector("#social-media-grid"),M=document.querySelector("#social-media-template"),v=document.querySelector("#stat-grid"),O=document.querySelector("#stat-template"),l=document.getElementById("theme-switcher"),d=new I;d.theme==="light"&&(l.checked=!0);l.addEventListener("change",()=>{d.toggleTheme()});l.addEventListener("keyup",e=>{e.key==="Enter"&&(d.toggleTheme(),l.checked=!l.checked)});F.forEach(e=>{const t=M.content.cloneNode(!0),r=t.querySelector(".social-media__header"),c=t.querySelector(".social-media__logo"),a=t.querySelector(".social-media__account"),o=t.querySelector(".social-media__primary-count"),n=t.querySelector(".social-media__primary-type"),b=t.querySelector(".social-media__carret-icon"),m=t.querySelector(".social-media__update");r.classList.add(`social-media__header--${e.name}`),c.setAttribute("src",e.logo),c.setAttribute("alt",e.name),a.textContent=e.account,o.textContent=e.primary.value,n.textContent=e.primary.type,b.setAttribute("src",e.primary.update>0?g:y),m.classList.add(e.primary.update>0?"social-media__update--increase":"social-media__update--decrease"),m.textContent=`${String(Math.abs(e.primary.update))} Today`;const _=document.createComment(e.name);f.appendChild(_),f.appendChild(t),e.secondary.forEach(i=>{const s=O.content.cloneNode(!0),L=s.querySelector(".stat"),k=s.querySelector(".stat__name"),u=s.querySelector(".stat__icon"),T=s.querySelector(".stat__value"),S=s.querySelector(".stat__carret-icon"),h=s.querySelector(".stat__update");L.classList.add(`stat--${e.order}`),k.textContent=i.type,u.setAttribute("src",e.logo),u.setAttribute("alt",e.name),T.textContent=i.value,S.setAttribute("src",i.update>0?g:y),h.textContent=`${String(Math.abs(i.update))}%`,h.classList.add(i.update>0?"stat__update--increase":"stat__update--decrease");const w=document.createComment(e.name);v.appendChild(w),v.appendChild(s)})});