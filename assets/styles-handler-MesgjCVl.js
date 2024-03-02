import{_ as o}from"./vanilla-jsoneditor-U4k4X-Kz.js";import"./commonjsHelpers-5-cIlDoe.js";const n=(t,d)=>{if(window!=null&&window.document.getElementById(t))return;const a=window==null?void 0:window.document.getElementsByTagName("head")[0],e=window==null?void 0:window.document.createElement("style");e.setAttribute("id",t),e.textContent=d,a.appendChild(e)},l=async()=>{const{fullWidthButton:t}=await o(()=>import("./string-styles-uCJdoCP1.js"),__vite__mapDeps([]));n("full-width-button",t)},s=async()=>{const{darkTheme:t}=await o(()=>import("./string-styles-uCJdoCP1.js"),__vite__mapDeps([]));n("dark-theme",t)};export{s as setDarkThemeStyle,l as setFullWidthButtonStyle};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
