"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6827],{876:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var l=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),s=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),c=a,u=k["".concat(i,".").concat(c)]||k[c]||d[c]||r;return n?l.createElement(u,o(o({ref:t},m),{},{components:n})):l.createElement(u,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9343:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var l=n(7896),a=n(1461),r=(n(2784),n(876)),o=["components"],p={title:"Core API"},i=void 0,s={unversionedId:"core-api",id:"version-3.x/core-api",title:"Core API",description:"Interfaces and types",source:"@site/versioned_docs/version-3.x/core-api.md",sourceDirName:".",slug:"/core-api",permalink:"/docs/core-api",tags:[],version:"3.x",frontMatter:{title:"Core API"},sidebar:"docs",previous:{title:"Core architecture",permalink:"/docs/core-architecture"},next:{title:"Logo & Branding",permalink:"/docs/extra-logo-branding"}},m=[{value:"Interfaces and types",id:"interfaces-and-types",children:[{value:"ControlledLayer",id:"controlledlayer",children:[],level:3},{value:"LeafletContextInterface",id:"leafletcontextinterface",children:[],level:3},{value:"LeafletElement",id:"leafletelement",children:[],level:3},{value:"ElementHook",id:"elementhook",children:[],level:3},{value:"DivOverlay",id:"divoverlay",children:[],level:3},{value:"SetOpenFunc",id:"setopenfunc",children:[],level:3},{value:"DivOverlayLifecycleHook",id:"divoverlaylifecyclehook",children:[],level:3},{value:"DivOverlayHook",id:"divoverlayhook",children:[],level:3},{value:"EventedProps",id:"eventedprops",children:[],level:3},{value:"LayerProps",id:"layerprops",children:[],level:3},{value:"PathProps",id:"pathprops",children:[],level:3},{value:"CircleMarkerProps",id:"circlemarkerprops",children:[],level:3},{value:"MediaOverlayProps",id:"mediaoverlayprops",children:[],level:3},{value:"PropsWithChildren",id:"propswithchildren",children:[],level:3},{value:"EventedWithChildrenProps",id:"eventedwithchildrenprops",children:[],level:3},{value:"PathWithChildrenProps",id:"pathwithchildrenprops",children:[],level:3}],level:2},{value:"Context",id:"context",children:[{value:"LeafletContext",id:"leafletcontext",children:[],level:3},{value:"LeafletProvider",id:"leafletprovider",children:[],level:3},{value:"useLeafletContext",id:"useleafletcontext",children:[],level:3}],level:2},{value:"Hook factories",id:"hook-factories",children:[{value:"createElementHook",id:"createelementhook",children:[],level:3},{value:"createControlHook",id:"createcontrolhook",children:[],level:3},{value:"createDivOverlayHook",id:"createdivoverlayhook",children:[],level:3},{value:"createLayerHook",id:"createlayerhook",children:[],level:3},{value:"createPathHook",id:"createpathhook",children:[],level:3}],level:2},{value:"Lifecycle hooks",id:"lifecycle-hooks",children:[{value:"useEventHandlers",id:"useeventhandlers",children:[],level:3},{value:"useLayerLifecycle",id:"uselayerlifecycle",children:[],level:3},{value:"usePathOptions",id:"usepathoptions",children:[],level:3}],level:2},{value:"Update functions",id:"update-functions",children:[{value:"updateCircle",id:"updatecircle",children:[],level:3},{value:"updateGridLayer",id:"updategridlayer",children:[],level:3},{value:"updateMediaOverlay",id:"updatemediaoverlay",children:[],level:3}],level:2},{value:"DOM interactions",id:"dom-interactions",children:[{value:"addClassName",id:"addclassname",children:[],level:3},{value:"removeClassName",id:"removeclassname",children:[],level:3},{value:"updateClassName",id:"updateclassname",children:[],level:3}],level:2},{value:"Component factories",id:"component-factories",children:[{value:"createContainerComponent",id:"createcontainercomponent",children:[],level:3},{value:"createDivOverlayComponent",id:"createdivoverlaycomponent",children:[],level:3},{value:"createLeafComponent",id:"createleafcomponent",children:[],level:3}],level:2},{value:"High-level component factories",id:"high-level-component-factories",children:[{value:"createControlComponent",id:"createcontrolcomponent",children:[],level:3},{value:"createLayerComponent",id:"createlayercomponent",children:[],level:3},{value:"createOverlayComponent",id:"createoverlaycomponent",children:[],level:3},{value:"createPathComponent",id:"createpathcomponent",children:[],level:3},{value:"createTileLayerComponent",id:"createtilelayercomponent",children:[],level:3}],level:2}],d={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"interfaces-and-types"},"Interfaces and types"),(0,r.kt)("h3",{id:"controlledlayer"},"ControlledLayer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ControlledLayer {\n  addLayer(layer: Layer): void\n  removeLayer(layer: Layer): void\n}\n")),(0,r.kt)("h3",{id:"leafletcontextinterface"},"LeafletContextInterface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface LeafletContextInterface {\n  map: Map\n  layerContainer?: ControlledLayer | LayerGroup\n  layersControl?: Control.Layers\n  overlayContainer?: Layer\n  pane?: string\n}\n")),(0,r.kt)("h3",{id:"leafletelement"},"LeafletElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface LeafletElement<T, C = any> {\n  instance: T\n  context: LeafletContextInterface\n  container?: C | null\n}\n")),(0,r.kt)("h3",{id:"elementhook"},"ElementHook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type ElementHook<E, P> = (\n  props: P,\n  context: LeafletContextInterface,\n) => MutableRefObject<LeafletElement<E>>\n")),(0,r.kt)("h3",{id:"divoverlay"},"DivOverlay"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DivOverlay = Popup | Tooltip\n")),(0,r.kt)("h3",{id:"setopenfunc"},"SetOpenFunc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type SetOpenFunc = (open: boolean) => void\n")),(0,r.kt)("h3",{id:"divoverlaylifecyclehook"},"DivOverlayLifecycleHook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DivOverlayLifecycleHook<E, P> = (\n  element: LeafletElement<E>,\n  context: LeafletContextInterface,\n  props: P,\n  setOpen: SetOpenFunc,\n) => void\n")),(0,r.kt)("h3",{id:"divoverlayhook"},"DivOverlayHook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DivOverlayHook<E extends DivOverlay, P> = (\n  useElement: ElementHook<E, P>,\n  useLifecycle: DivOverlayLifecycleHook<E, P>,\n) => (props: P, setOpen: SetOpenFunc) => ReturnType<ElementHook<E, P>>\n")),(0,r.kt)("h3",{id:"eventedprops"},"EventedProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EventedProps {\n  eventHandlers?: LeafletEventHandlerFnMap\n}\n")),(0,r.kt)("h3",{id:"layerprops"},"LayerProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface LayerProps extends EventedProps, LayerOptions {}\n")),(0,r.kt)("h3",{id:"pathprops"},"PathProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PathProps extends EventedProps {\n  pathOptions?: PathOptions\n}\n")),(0,r.kt)("h3",{id:"circlemarkerprops"},"CircleMarkerProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface CircleMarkerProps extends CircleMarkerOptions, PathProps {\n  center: LatLngExpression\n  children?: ReactNode\n}\n")),(0,r.kt)("h3",{id:"mediaoverlayprops"},"MediaOverlayProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface MediaOverlayProps extends ImageOverlayOptions, EventedProps {\n  bounds: LatLngBoundsExpression\n}\n")),(0,r.kt)("h3",{id:"propswithchildren"},"PropsWithChildren"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PropsWithChildren {\n  children?: ReactNode\n}\n")),(0,r.kt)("h3",{id:"eventedwithchildrenprops"},"EventedWithChildrenProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EventedWithChildrenProps extends EventedProps, PropsWithChildren {}\n")),(0,r.kt)("h3",{id:"pathwithchildrenprops"},"PathWithChildrenProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PathWithChildrenProps extends PathProps, PropsWithChildren {}\n")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("h3",{id:"leafletcontext"},"LeafletContext"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context")," used by React Leaflet, implementing the ",(0,r.kt)("a",{parentName:"p",href:"#leafletcontextinterface"},(0,r.kt)("inlineCode",{parentName:"a"},"LeafletContextInterface"))),(0,r.kt)("h3",{id:"leafletprovider"},"LeafletProvider"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LeafletContext.Provider")," component."),(0,r.kt)("h3",{id:"useleafletcontext"},"useLeafletContext"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hook")," returning the ",(0,r.kt)("a",{parentName:"p",href:"#leafletcontext"},(0,r.kt)("inlineCode",{parentName:"a"},"LeafletContext")),". Calling this hook will throw an error if the context is not provided."),(0,r.kt)("h2",{id:"hook-factories"},"Hook factories"),(0,r.kt)("p",null,"The following functions return ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hooks")," for specific purposes."),(0,r.kt)("h3",{id:"createelementhook"},"createElementHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P"),": the component's props"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"C = any"),": the element's container, if relevant")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createcontrolhook"},"createControlHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Control"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends ControlOptions"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createdivoverlayhook"},"createDivOverlayHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends DivOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useLifecycle: DivOverlayLifecycleHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createlayerhook"},"createLayerHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Layer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends LayerProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createpathhook"},"createPathHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends FeatureGroup | Path"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PathProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h2",{id:"lifecycle-hooks"},"Lifecycle hooks"),(0,r.kt)("p",null,"These hooks implement specific pieces of logic used by multiple components."),(0,r.kt)("h3",{id:"useeventhandlers"},"useEventHandlers"),(0,r.kt)("p",null,"This hook adds support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventHandlers")," prop, adding and removing event listeners as needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: LeafletElement<Evented>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"eventHandlers: LeafletEventHandlerFnMap | null | undefined"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"uselayerlifecycle"},"useLayerLifecycle"),(0,r.kt)("p",null,"This hook adds support for adding and removing the layer to/from its parent container or the map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: LeafletElement<Layer>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"context: LeafletContextInterface"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"usepathoptions"},"usePathOptions"),(0,r.kt)("p",null,"This hook adds support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pathOptions")," prop, updating the layer as needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: LeafletElement<FeatureGroup | Path>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: PathProps"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h2",{id:"update-functions"},"Update functions"),(0,r.kt)("p",null,"Shared update logic for different components."),(0,r.kt)("h3",{id:"updatecircle"},"updateCircle"),(0,r.kt)("p",null,"Updates the circle's ",(0,r.kt)("inlineCode",{parentName:"p"},"center")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"radius")," if the props change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends CircleMarker"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends CircleMarkerProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"layer: E")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: P")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevProps: P"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"updategridlayer"},"updateGridLayer"),(0,r.kt)("p",null,"Updates the layer's ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"zIndex")," if the props change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends GridLayer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends GridLayerOptions"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"layer: E")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: P")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevProps: P"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"updatemediaoverlay"},"updateMediaOverlay"),(0,r.kt)("p",null,"Updates the overlay's ",(0,r.kt)("inlineCode",{parentName:"p"},"bounds"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"zIndex")," if the props change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends ImageOverlay | SVGOverlay | VideoOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends MediaOverlayProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"overlay: E")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: P")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevProps: P"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h2",{id:"dom-interactions"},"DOM interactions"),(0,r.kt)("p",null,"Utility functions to change the class of a ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement"),"."),(0,r.kt)("h3",{id:"addclassname"},"addClassName"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: HTMLElement")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"className: string"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"removeclassname"},"removeClassName"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: HTMLElement")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"className: string"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"updateclassname"},"updateClassName"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element?: HTMLElement")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevClassName?: string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nextClassName?: string"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h2",{id:"component-factories"},"Component factories"),(0,r.kt)("p",null,"These functions create components from the provided element hook."),(0,r.kt)("h3",{id:"createcontainercomponent"},"createContainerComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PropsWithChildren"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createdivoverlaycomponent"},"createDivOverlayComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends DivOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PropsWithChildren"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ReturnType<DivOverlayHook<E, P>>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createleafcomponent"},"createLeafComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h2",{id:"high-level-component-factories"},"High-level component factories"),(0,r.kt)("p",null,"These functions combine hooks and component factories to provide high-level factories for common component types."),(0,r.kt)("h3",{id:"createcontrolcomponent"},"createControlComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Control"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends ControlOptions"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createInstance: (props: P) => E"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createlayercomponent"},"createLayerComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Layer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedWithChildrenProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createoverlaycomponent"},"createOverlayComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends DivOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedWithChildrenProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useLifecycle: DivOverlayLifecycleHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createpathcomponent"},"createPathComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends FeatureGroup | Path"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PathWithChildrenProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createtilelayercomponent"},"createTileLayerComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Layer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")))}k.isMDXComponent=!0}}]);