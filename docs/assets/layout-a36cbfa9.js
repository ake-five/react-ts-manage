import{R as c,u as v,r as u,a as e,b as m,c as d,B as f,d as C,I as S,S as h,O as g}from"./index-18a15bee.js";import{I as k,H as x,F as H,C as I,S as N,D as R,a as $,M as D}from"./dropdown-361a661f.js";import{C as b}from"./CaretDownFilled-3f6aab3d.js";import"./RightOutlined-f34e454d.js";import"./Overflow-cb0a7c9b.js";function p(t=c){const n=t===c?v:()=>u.useContext(t);return function(){const{store:a}=n();return a}}const F=p();function w(t=c){const n=t===c?F:p(t);return function(){return n().dispatch}}const L=w();var l=k;l.Header=x;l.Footer=H;l.Content=I;l.Sider=N;const i=l;const M=t=>{m();const n=d(),s=r=>{localStorage.removeItem("token"),n("/login")},a=[{key:"1",label:e.createElement(f,{type:"text",onClick:s},"退出 登录")}];return e.createElement("div",{className:"ht-block"},e.createElement("div",null),e.createElement("div",null,e.createElement(R,{menu:{items:a},className:"dropdown"},e.createElement("div",null,e.createElement($,null,"admin",e.createElement(b,null))))))},O=e.memo(M);const{Content:T,Footer:A,Sider:B}=i;function J(){const{menu:{menus:t,loading:n}}=C(o=>o.menu),s=L(),a=d();m();const[r,y]=u.useState(!1),E=o=>{o.key&&a(`/${o.key}`)};return u.useEffect(()=>{s({type:S.INIT})},[]),e.createElement(i,{style:{minHeight:"100vh"}},e.createElement(B,{collapsible:!0,collapsed:r,onCollapse:o=>y(o)},r?e.createElement("div",{className:"layout-container"},"React.vite"):e.createElement("div",{className:"layout-container"},"欢迎登录 React.vite 练习项目"),t.length&&e.createElement(D,{theme:"dark",defaultSelectedKeys:["layout/coms"],defaultOpenKeys:["layout/coms"],mode:"inline",items:t||[],onClick:E})),e.createElement(i,{className:"site-layout"},e.createElement(O,null),e.createElement(T,{style:{margin:"16px"}},e.createElement("div",{className:"site-layout-background",style:{height:"100%"}},e.createElement(h,{spinning:n,delay:500},e.createElement(g,null)))),e.createElement(A,{style:{textAlign:"center"}},"react vite components")))}export{J as default};
