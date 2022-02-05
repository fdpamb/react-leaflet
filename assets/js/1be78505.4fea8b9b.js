"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514],{1400:function(n,e,t){t.d(e,{Z:function(){return _n}});var r={};t.r(r),t.d(r,{CONTEXT_VERSION:function(){return l},LeafletContext:function(){return s},LeafletProvider:function(){return p},addClassName:function(){return O},createContainerComponent:function(){return v},createControlComponent:function(){return z},createControlHook:function(){return C},createDivOverlayComponent:function(){return y},createDivOverlayHook:function(){return w},createElementHook:function(){return k},createElementObject:function(){return x},createLayerComponent:function(){return H},createLayerHook:function(){return R},createLeafComponent:function(){return m},createOverlayComponent:function(){return M},createPathComponent:function(){return N},createPathHook:function(){return S},createTileLayerComponent:function(){return j},extendContext:function(){return f},removeClassName:function(){return E},updateCircle:function(){return i},updateClassName:function(){return P},updateGridLayer:function(){return T},updateMediaOverlay:function(){return _},useAttribution:function(){return a},useEventHandlers:function(){return b},useLayerLifecycle:function(){return Z},useLeafletContext:function(){return d},usePathOptions:function(){return I},withPane:function(){return h}});var u={};t.r(u),t.d(u,{AttributionControl:function(){return V},Circle:function(){return F},CircleMarker:function(){return W},FeatureGroup:function(){return X},GeoJSON:function(){return K},ImageOverlay:function(){return $},LayerGroup:function(){return en},LayersControl:function(){return rn},MapContainer:function(){return ln},Marker:function(){return sn},Pane:function(){return mn},Polygon:function(){return bn},Polyline:function(){return wn},Popup:function(){return gn},Rectangle:function(){return On},SVGOverlay:function(){return Rn},ScaleControl:function(){return En},TileLayer:function(){return Sn},Tooltip:function(){return zn},VideoOverlay:function(){return Mn},WMSTileLayer:function(){return jn},ZoomControl:function(){return Tn},useMap:function(){return G},useMapEvent:function(){return A},useMapEvents:function(){return B}});var o=t(2784);function a(n,e){var t=(0,o.useRef)(e);(0,o.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function i(n,e,t){e.center!==t.center&&n.setLatLng(e.center),null!=e.radius&&e.radius!==t.radius&&n.setRadius(e.radius)}var c=t(8316),l=1;function f(n,e){return Object.freeze(Object.assign({},n,e))}var s=(0,o.createContext)(null),p=s.Provider;function d(){var n=(0,o.useContext)(s);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function v(n){function e(e,t){var r=n(e).current,u=r.instance,a=r.context;return(0,o.useImperativeHandle)(t,(function(){return u})),null==e.children?null:o.createElement(p,{value:a},e.children)}return(0,o.forwardRef)(e)}function y(n){function e(e,t){var r=(0,o.useState)(!1),u=r[0],a=r[1],i=n(e,a).current.instance;(0,o.useImperativeHandle)(t,(function(){return i})),(0,o.useEffect)((function(){u&&i.update()}),[i,u,e.children]);var l=i._contentNode;return l?(0,c.createPortal)(e.children,l):null}return(0,o.forwardRef)(e)}function m(n){function e(e,t){var r=n(e).current.instance;return(0,o.useImperativeHandle)(t,(function(){return r})),null}return(0,o.forwardRef)(e)}function C(n){return function(e){var t=d(),r=n(e,t),u=r.current.instance,a=(0,o.useRef)(e.position),i=e.position;return(0,o.useEffect)((function(){return u.addTo(t.map),function(){u.remove()}}),[t.map,u]),(0,o.useEffect)((function(){null!=i&&i!==a.current&&(u.setPosition(i),a.current=i)}),[u,i]),r}}function b(n,e){var t=(0,o.useRef)();(0,o.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function h(n,e){var t,r=null!=(t=n.pane)?t:e.pane;return r?Object.assign({},n,{pane:r}):n}function w(n,e){return function(t,r){var u=d(),o=n(h(t,u),u);return a(u.map,t.attribution),b(o.current,t.eventHandlers),e(o.current,u,t,r),o}}var g=t(5062);function L(n){return n.split(" ").filter(Boolean)}function O(n,e){L(e).forEach((function(e){g.DomUtil.addClass(n,e)}))}function E(n,e){L(e).forEach((function(e){g.DomUtil.removeClass(n,e)}))}function P(n,e,t){null!=n&&t!==e&&(null!=e&&e.length>0&&E(n,e),null!=t&&t.length>0&&O(n,t))}function x(n,e,t){return Object.freeze({instance:n,context:e,container:t})}function k(n,e){return null==e?function(e,t){return(0,o.useRef)(n(e,t))}:function(t,r){var u=(0,o.useRef)(n(t,r)),a=(0,o.useRef)(t),i=u.current.instance;return(0,o.useEffect)((function(){a.current!==t&&(e(i,t,a.current),a.current=t)}),[i,t,r]),u}}function Z(n,e){(0,o.useEffect)((function(){var t;return(null!=(t=e.layerContainer)?t:e.map).addLayer(n.instance),function(){var t;null==(t=e.layerContainer)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}function R(n){return function(e){var t=d(),r=n(h(e,t),t);return a(t.map,e.attribution),b(r.current,e.eventHandlers),Z(r.current,t),r}}function I(n,e){var t=(0,o.useRef)();(0,o.useEffect)((function(){if(e.pathOptions!==t.current){var r,u=null!=(r=e.pathOptions)?r:{};n.instance.setStyle(u),t.current=u}}),[n,e])}function S(n){return function(e){var t=d(),r=n(h(e,t),t);return b(r.current,e.eventHandlers),Z(r.current,t),I(r.current,e),r}}function z(n){return m(C(k((function(e,t){return x(n(e),t)}))))}function H(n,e){return v(R(k(n,e)))}function M(n,e){return y(w(k(n),e))}function N(n,e){return v(S(k(n,e)))}function j(n,e){return m(R(k(n,e)))}function T(n,e,t){var r=e.opacity,u=e.zIndex;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=u&&u!==t.zIndex&&n.setZIndex(u)}function _(n,e,t){e.bounds instanceof g.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=e.zIndex&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}function G(){return d().map}function A(n,e){var t=G();return(0,o.useEffect)((function(){return t.on(n,e),function(){t.off(n,e)}}),[t,n,e]),t}function B(n){var e=G();return(0,o.useEffect)((function(){return e.on(n),function(){e.off(n)}}),[e,n]),e}var V=z((function(n){return new g.Control.Attribution(n)})),D=t(1461),U=["center","children"],F=N((function(n,e){var t=n.center,r=(n.children,(0,D.Z)(n,U)),u=new g.Circle(t,r);return x(u,f(e,{overlayContainer:u}))}),i),J=["center","children"],W=N((function(n,e){var t=n.center,r=(n.children,(0,D.Z)(n,J)),u=new g.CircleMarker(t,r);return x(u,f(e,{overlayContainer:u}))}),i),q=["children"],X=N((function(n,e){n.children;var t=(0,D.Z)(n,q),r=new g.FeatureGroup([],t);return x(r,f(e,{layerContainer:r,overlayContainer:r}))})),Y=["data"],K=N((function(n,e){var t=n.data,r=(0,D.Z)(n,Y),u=new g.GeoJSON(t,r);return x(u,f(e,{overlayContainer:u}))}),(function(n,e,t){e.style!==t.style&&(null==e.style?n.resetStyle():n.setStyle(e.style))})),Q=["bounds","url"],$=H((function(n,e){var t=n.bounds,r=n.url,u=(0,D.Z)(n,Q),o=new g.ImageOverlay(r,t,u);return x(o,f(e,{overlayContainer:o}))}),(function(n,e,t){_(n,e,t),e.url!==t.url&&n.setUrl(e.url)})),nn=["children"],en=H((function(n,e){n.children;var t=(0,D.Z)(n,nn),r=new g.LayerGroup([],t);return x(r,f(e,{layerContainer:r}))})),tn=["children"],rn=v(C(k((function(n,e){n.children;var t=(0,D.Z)(n,tn),r=new g.Control.Layers(void 0,void 0,t);return x(r,f(e,{layersControl:r}))}),(function(n,e,t){e.collapsed!==t.collapsed&&(!0===e.collapsed?n.collapse():n.expand())}))));function un(n){return function(e){var t=d(),r=(0,o.useRef)(e),u=(0,o.useState)(null),a=u[0],i=u[1],c=t.layersControl,l=t.map,s=(0,o.useCallback)((function(e){null!=c&&(r.current.checked&&l.addLayer(e),n(c,e,r.current.name),i(e))}),[c,l]),v=(0,o.useCallback)((function(n){null==c||c.removeLayer(n),i(null)}),[c]),y=(0,o.useMemo)((function(){return f(t,{layerContainer:{addLayer:s,removeLayer:v}})}),[t,s,v]);return(0,o.useEffect)((function(){null!==a&&r.current!==e&&(!0!==e.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=e.checked&&!1!==e.checked||l.removeLayer(a):l.addLayer(a),r.current=e)})),e.children?o.createElement(p,{value:y},e.children):null}}rn.BaseLayer=un((function(n,e,t){n.addBaseLayer(e,t)})),rn.Overlay=un((function(n,e,t){n.addOverlay(e,t)}));var on=["bounds","boundsOptions","center","children","className","id","placeholder","style","whenReady","zoom"];function an(){return an=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},an.apply(this,arguments)}function cn(n,e){var t=n.bounds,r=n.boundsOptions,u=n.center,a=n.children,i=n.className,c=n.id,f=n.placeholder,s=n.style,d=n.whenReady,v=n.zoom,y=(0,D.Z)(n,on),m=(0,o.useState)({className:i,id:c,style:s})[0],C=(0,o.useState)(null),b=C[0],h=C[1];(0,o.useImperativeHandle)(e,(function(){var n;return null!=(n=null==b?void 0:b.map)?n:null}),[b]);var w=(0,o.useCallback)((function(n){if(null!==n&&null===b){var e=new g.Map(n,y);null!=u&&null!=v?e.setView(u,v):null!=t&&e.fitBounds(t,r),null!=d&&e.whenReady(d),h(Object.freeze({__version:l,map:e}))}}),[]);(0,o.useEffect)((function(){return function(){null==b||b.map.remove()}}),[]);var L=b?o.createElement(p,{value:b},a):null!=f?f:null;return o.createElement("div",an({},m,{ref:w}),L)}var ln=(0,o.forwardRef)(cn),fn=["position"],sn=H((function(n,e){var t=n.position,r=(0,D.Z)(n,fn),u=new g.Marker(t,r);return x(u,f(e,{overlayContainer:u}))}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),pn=t(2530),dn=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function vn(n,e){n[e];return(0,D.Z)(n,[e].map(pn.Z))}function yn(n,e){var t=(0,o.useState)(n.name)[0],r=(0,o.useState)(null),u=r[0],a=r[1];(0,o.useImperativeHandle)(e,(function(){return u}),[u]);var i=d(),l=(0,o.useMemo)((function(){return Object.assign({},i,{pane:t})}),[i]);return(0,o.useEffect)((function(){return a(function(n,e,t){var r;if(-1!==dn.indexOf(n))throw new Error("You must use a unique name for a pane that is not a default Leaflet pane: "+n);if(null!=t.map.getPane(n))throw new Error("A pane with this name already exists: "+n);var u=null!=(r=e.pane)?r:t.pane,o=u?t.map.getPane(u):void 0,a=t.map.createPane(n,o);return null!=e.className&&O(a,e.className),null!=e.style&&Object.keys(e.style).forEach((function(n){a.style[n]=e.style[n]})),a}(t,n,i)),function(){var n=i.map.getPane(t);null==n||null==n.remove||n.remove(),null!=i.map._panes&&(i.map._panes=vn(i.map._panes,t),i.map._paneRenderers=vn(i.map._paneRenderers,t))}}),[]),null!=n.children&&null!=u?(0,c.createPortal)(o.createElement(p,{value:l},n.children),u):null}var mn=(0,o.forwardRef)(yn),Cn=["positions"],bn=N((function(n,e){var t=n.positions,r=(0,D.Z)(n,Cn),u=new g.Polygon(t,r);return x(u,f(e,{overlayContainer:u}))}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),hn=["positions"],wn=N((function(n,e){var t=n.positions,r=(0,D.Z)(n,hn),u=new g.Polyline(t,r);return x(u,f(e,{overlayContainer:u}))}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),gn=M((function(n,e){return x(new g.Popup(n,e.overlayContainer),e)}),(function(n,e,t,r){var u=t.position;(0,o.useEffect)((function(){var t=n.instance;function o(n){n.popup===t&&(t.update(),r(!0))}function a(n){n.popup===t&&r(!1)}return e.map.on({popupopen:o,popupclose:a}),null==e.overlayContainer?(null!=u&&t.setLatLng(u),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){var n;e.map.off({popupopen:o,popupclose:a}),null==(n=e.overlayContainer)||n.unbindPopup(),e.map.removeLayer(t)}}),[n,e,r,u])})),Ln=["bounds"],On=N((function(n,e){var t=n.bounds,r=(0,D.Z)(n,Ln),u=new g.Rectangle(t,r);return x(u,f(e,{overlayContainer:u}))}),(function(n,e,t){e.bounds!==t.bounds&&n.setBounds(e.bounds)})),En=z((function(n){return new g.Control.Scale(n)})),Pn=["attributes","bounds"],xn=["children"],kn=R(k((function(n,e){var t=n.attributes,r=n.bounds,u=(0,D.Z)(n,Pn),o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach((function(n){o.setAttribute(n,t[n])})),x(new g.SVGOverlay(o,r,u),e,o)}),_));function Zn(n,e){var t=n.children,r=(0,D.Z)(n,xn),u=kn(r).current,a=u.instance,i=u.container;return(0,o.useImperativeHandle)(e,(function(){return a})),null==i||null==t?null:(0,c.createPortal)(t,i)}var Rn=(0,o.forwardRef)(Zn),In=["url"],Sn=j((function(n,e){var t=n.url,r=(0,D.Z)(n,In);return x(new g.TileLayer(t,h(r,e)),e)}),T),zn=M((function(n,e){return x(new g.Tooltip(n,e.overlayContainer),e)}),(function(n,e,t,r){var u=t.position;(0,o.useEffect)((function(){var t=e.overlayContainer;if(null!=t){var o=n.instance,a=function(n){n.tooltip===o&&(null!=u&&o.setLatLng(u),o.update(),r(!0))},i=function(n){n.tooltip===o&&r(!1)};return t.on({tooltipopen:a,tooltipclose:i}),t.bindTooltip(o),function(){t.off({tooltipopen:a,tooltipclose:i}),null!=t._map&&t.unbindTooltip()}}}),[n,e,r,u])})),Hn=["bounds","url"],Mn=H((function(n,e){var t,r=n.bounds,u=n.url,o=(0,D.Z)(n,Hn),a=new g.VideoOverlay(u,r,o);!0===o.play&&(null==(t=a.getElement())||t.play());return x(a,f(e,{overlayContainer:a}))}),(function(n,e,t){_(n,e,t),"string"==typeof e.url&&e.url!==t.url&&n.setUrl(e.url);var r=n.getElement();null!=r&&(!0!==e.play||t.play?e.play||!0!==t.play||r.pause():r.play())})),Nn=["params","url"],jn=j((function(n,e){var t=n.params,r=void 0===t?{}:t,u=n.url,o=(0,D.Z)(n,Nn);return x(new g.TileLayer.WMS(u,Object.assign({},r,h(o,e))),e)}),(function(n,e,t){T(n,e,t),null!=e.params&&e.params!==t.params&&n.setParams(e.params)})),Tn=z((function(n){return new g.Control.Zoom(n)})),_n=Object.assign({L:g,React:o},r,o,u)}}]);