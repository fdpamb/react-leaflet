"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5851],{876:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2051:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7896),o=r(1461),a=(r(2784),r(876)),l=["components"],i={title:"Setup"},p=void 0,s={unversionedId:"start-setup",id:"start-setup",title:"Setup",description:"1. Follow all the steps from the installation page",source:"@site/docs/start-setup.md",sourceDirName:".",slug:"/start-setup",permalink:"/docs/next/start-setup",tags:[],version:"current",frontMatter:{title:"Setup"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/start-installation"},next:{title:"Popup with Marker",permalink:"/docs/next/example-popup-marker"}},u=[],c={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow all the steps from the ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/start-installation"},"installation page")),(0,a.kt)("li",{parentName:"ol"},"Add the following code to your app and check it displays correctly:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>\n  <TileLayer\n    attribution=\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors\'\n    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n  />\n  <Marker position={[51.505, -0.09]}>\n    <Popup>\n      A pretty CSS3 popup. <br /> Easily customizable.\n    </Popup>\n  </Marker>\n</MapContainer>\n')),(0,a.kt)("p",null,"If the map is not displayed properly, it is most likely because you haven't followed all the prerequisites."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure all dependencies are installed and using supported versions"),(0,a.kt)("li",{parentName:"ol"},"Make sure Leaflet's CSS is loaded"),(0,a.kt)("li",{parentName:"ol"},"Make sure your map container has a defined height")),(0,a.kt)("p",null,"If you're still having trouble, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/react-leaflet"},(0,a.kt)("inlineCode",{parentName:"a"},"react-leaflet")," tag on Stack Overflow"),"."))}f.isMDXComponent=!0}}]);