(self.webpackChunktemplate_editor=self.webpackChunktemplate_editor||[]).push([[3111],{3111:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>D,keyboardDidClose:()=>c,keyboardDidOpen:()=>l,keyboardDidResize:()=>w,resetKeyboardAssist:()=>h,setKeyboardClose:()=>g,setKeyboardOpen:()=>b,startKeyboardAssist:()=>n,trackViewportChanges:()=>u});const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},d={},r=!1;const h=()=>{a={},d={},r=!1},n=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),l()||w(e)?b(e):c(e)&&g(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>b(e,t)),e.addEventListener("keyboardDidHide",()=>g(e))},b=(e,t)=>{f(e,t),r=!0},g=e=>{y(e),r=!1},l=()=>!r&&a.width===d.width&&(a.height-d.height)*d.scale>150,w=e=>r&&!c(e),c=e=>r&&d.height===e.innerHeight,f=(e,t)=>{const i=new CustomEvent(o,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);