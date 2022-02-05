"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2046],{876:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return f}});var r=t(2784);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var a=r.createContext({}),c=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=c(n.components);return r.createElement(a.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,a=n.parentName,s=p(n,["components","mdxType","originalType","parentName"]),y=c(t),f=o,m=y["".concat(a,".").concat(f)]||y[f]||u[f]||i;return t?r.createElement(m,l(l({ref:e},s),{},{components:t})):r.createElement(m,l({ref:e},s))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,l=new Array(i);l[0]=y;var p={};for(var a in e)hasOwnProperty.call(e,a)&&(p[a]=e[a]);p.originalType=n,p.mdxType="string"==typeof n?n:o,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7653:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return y}});var r=t(7896),o=t(1461),i=(t(2784),t(876)),l=["components"],p={title:"Vector layers"},a=void 0,c={unversionedId:"example-vector-layers",id:"version-3.x/example-vector-layers",title:"Vector layers",description:"",source:"@site/versioned_docs/version-3.x/example-vector-layers.md",sourceDirName:".",slug:"/example-vector-layers",permalink:"/docs/example-vector-layers",tags:[],version:"3.x",frontMatter:{title:"Vector layers"},sidebar:"docs",previous:{title:"Events",permalink:"/docs/example-events"},next:{title:"SVG Overlay",permalink:"/docs/example-svg-overlay"}},s=[],u={toc:s};function y(n){var e=n.components,t=(0,o.Z)(n,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  Circle,\n  CircleMarker,\n  MapContainer,\n  Polyline,\n  Polygon,\n  Popup,\n  Rectangle,\n  TileLayer,\n} from 'react-leaflet'\n\nconst center = [51.505, -0.09]\n\nconst polyline = [\n  [51.505, -0.09],\n  [51.51, -0.1],\n  [51.51, -0.12],\n]\n\nconst multiPolyline = [\n  [\n    [51.5, -0.1],\n    [51.5, -0.12],\n    [51.52, -0.12],\n  ],\n  [\n    [51.5, -0.05],\n    [51.5, -0.06],\n    [51.52, -0.06],\n  ],\n]\n\nconst polygon = [\n  [51.515, -0.09],\n  [51.52, -0.1],\n  [51.52, -0.12],\n]\n\nconst multiPolygon = [\n  [\n    [51.51, -0.12],\n    [51.51, -0.13],\n    [51.53, -0.13],\n  ],\n  [\n    [51.51, -0.05],\n    [51.51, -0.07],\n    [51.53, -0.07],\n  ],\n]\n\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nconst fillBlueOptions = { fillColor: 'blue' }\nconst blackOptions = { color: 'black' }\nconst limeOptions = { color: 'lime' }\nconst purpleOptions = { color: 'purple' }\nconst redOptions = { color: 'red' }\n\nfunction VectorLayersExample() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />\n      <CircleMarker\n        center={[51.51, -0.12]}\n        pathOptions={redOptions}\n        radius={20}>\n        <Popup>Popup in CircleMarker</Popup>\n      </CircleMarker>\n      <Polyline pathOptions={limeOptions} positions={polyline} />\n      <Polyline pathOptions={limeOptions} positions={multiPolyline} />\n      <Polygon pathOptions={purpleOptions} positions={polygon} />\n      <Polygon pathOptions={purpleOptions} positions={multiPolygon} />\n      <Rectangle bounds={rectangle} pathOptions={blackOptions} />\n    </MapContainer>\n  )\n}\n")))}y.isMDXComponent=!0}}]);