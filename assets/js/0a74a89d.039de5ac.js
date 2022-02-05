"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2540],{876:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1846:function(e,t,a){var n=a(2784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},7370:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7896),r=a(2784),l=a(9741),i=a(2809),o=a(6277),s="tabItem_yrY8";function p(e){var t,a,l,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),b=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(y),T=w[0],x=w[1],j=[],L=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=b[m];null!=O&&O!==T&&h.some((function(e){return e.value===O}))&&x(O)}var E=function(e){var t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==T&&(L(t),x(n),null!=m&&N(m,n))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;a=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;a=j[r]||j[j.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},h.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return j.push(e)},onKeyDown:R,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},7590:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var n=a(7896),r=a(1461),l=(a(2784),a(876)),i=a(7370),o=a(1846),s=["components"],p={title:"Installation"},u=void 0,c={unversionedId:"start-installation",id:"start-installation",title:"Installation",description:"React prerequisites",source:"@site/docs/start-installation.mdx",sourceDirName:".",slug:"/start-installation",permalink:"/docs/next/start-installation",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/start-introduction"},next:{title:"Setup",permalink:"/docs/next/start-setup"}},d=[{value:"React prerequisites",id:"react-prerequisites",children:[],level:2},{value:"Leaflet prerequisites",id:"leaflet-prerequisites",children:[],level:2},{value:"Adding React Leaflet",id:"adding-react-leaflet",children:[{value:"Using ESM imports",id:"using-esm-imports",children:[],level:3},{value:"Using a package registry",id:"using-a-package-registry",children:[],level:3}],level:2},{value:"TypeScript support",id:"typescript-support",children:[],level:2}],m={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"react-prerequisites"},"React prerequisites"),(0,l.kt)("p",null,"This documentation assumes you are already familiar with ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and have a project setup. If it is not the case, you should read ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html"},"React's Getting Started documentation")," first."),(0,l.kt)("h2",{id:"leaflet-prerequisites"},"Leaflet prerequisites"),(0,l.kt)("p",null,"This documentation assumes you are already familiar with ",(0,l.kt)("a",{parentName:"p",href:"https://leafletjs.com/"},"Leaflet"),". React Leaflet ",(0,l.kt)("strong",{parentName:"p"},"does not replace Leaflet"),", it only provides bindings between React and Leaflet."),(0,l.kt)("p",null,"This documentation ",(0,l.kt)("strong",{parentName:"p"},"is not a replacement")," for ",(0,l.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html"},"Leaflet's documentation"),", it only focuses on aspects specific to React Leaflet."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Read this before going further")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Before using React Leaflet, you must setup your project following ",(0,l.kt)("a",{parentName:"p",href:"https://leafletjs.com/examples/quick-start/"},"Leaflet's Quick Start Guide"),"."))),(0,l.kt)("h2",{id:"adding-react-leaflet"},"Adding React Leaflet"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Alpha version")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"React Leaflet v4 is currently in alpha and will only officially support React v18, even if it works with React v17."))),(0,l.kt)("h3",{id:"using-esm-imports"},"Using ESM imports"),(0,l.kt)("p",null,"React Leaflet export ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES Modules")," that can be imported by URL, notably from CDNs such as ",(0,l.kt)("a",{parentName:"p",href:"https://www.skypack.dev/"},"Skypack"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { MapContainer } from 'https://cdn.skypack.dev/react-leaflet@next/MapContainer.js'\nimport { TileLayer } from 'https://cdn.skypack.dev/react-leaflet@next/TileLayer.js'\nimport { useMap } from 'https://cdn.skypack.dev/react-leaflet@next/hooks.js'\n")),(0,l.kt)("p",null,"Or importing the full library at once:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  MapContainer,\n  TileLayer,\n  useMap,\n} from 'https://cdn.skypack.dev/react-leaflet@next/index.js'\n")),(0,l.kt)("h3",{id:"using-a-package-registry"},"Using a package registry"),(0,l.kt)("p",null,"A package registry such as ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," can be used to install React Leaflet and its dependencies."),(0,l.kt)("p",null,"React, React DOM and Leaflet are required peer dependencies. You must add them to your project if they are not already installed:"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react@^18.0.0-rc react-dom@^18.0.0-rc leaflet\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react@^18.0.0-rc react-dom@^18.0.0-rc leaflet\n")))),(0,l.kt)("p",null,"Then you can install React Leaflet:"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-leaflet@next\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-leaflet\n")))),(0,l.kt)("p",null,"Modules can then be imported using bare specifiers when supported by a bundler such as ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { MapContainer } from 'react-leaflet/MapContainer'\nimport { TileLayer } from 'react-leaflet/TileLayer'\nimport { useMap } from 'react-leaflet/hooks'\n")),(0,l.kt)("p",null,"Alternatively, all the components and hooks can be imported from the module entry-point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { MapContainer, TileLayer, useMap } from 'react-leaflet'\n")),(0,l.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,l.kt)("p",null,"React Leaflet provides TypeScript definitions in the installed packages, but needs Leaflet's definitions to be present. If you have not installed them yet, you will need to add them:"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @types/leaflet\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @types/leaflet\n")))))}f.isMDXComponent=!0}}]);