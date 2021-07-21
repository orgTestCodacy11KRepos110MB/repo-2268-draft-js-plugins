(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{16347:function(e,t,n){"use strict";var r=n(2784),o=n(1503),c=n(52367),i=n(20138);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=["blockProps","block","style"],u=function(e){var t=e.store;return function(e){var n=r.forwardRef((function(n,o){var c=n.blockProps,i=n.block,u=n.style,s=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,a),f=(0,r.useRef)();(0,r.useEffect)((function(){if(c.isFocused&&c.isCollapsedSelection){var e=f.current.getBoundingClientRect();t.updateItem("setAlignment",c.setAlignment),t.updateItem("alignment",c.alignment),t.updateItem("boundingRect",e),t.updateItem("visibleBlock",i.getKey())}else t.getItem("visibleBlock")===i.getKey()&&t.updateItem("visibleBlock",null)}),[c.isFocused,c.isCollapsedSelection,t]);var g=c.alignment,d=u;return"left"===g?d=l({},u,{float:"left"}):"right"===g?d=l({},u,{float:"right"}):"center"===g&&(d=l({},u,{marginLeft:"auto",marginRight:"auto",display:"block"})),r.createElement(e,l({},s,{block:i,blockProps:c,style:d,ref:function(e){f.current=e,"function"===typeof o?o(e):o&&(o.current=e)}}))}));return n.displayName="Alignment("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",n.WrappedComponent=e.WrappedComponent||e,n}};function s(e){return e?"static"!==window.getComputedStyle(e).getPropertyValue("position")?e:s(e.parentElement):null}function f(e){var t=e.store,n=e.theme,o=(0,r.useState)({}),c=o[0],l=o[1],a=(0,r.useState)(null),u=a[0],f=a[1],g=(0,r.useRef)(null),d=(0,r.useRef)(),h=(0,r.useCallback)((function(e){var n=setTimeout((function(){var n,r=t.getItem("boundingRect");if(e&&r){var o=s(g.current.parentElement),c=g.current.clientHeight,i=o?o.getBoundingClientRect():document.body.getBoundingClientRect();n={top:r.top-i.top-c,left:r.left-i.left+r.width/2,transform:"translate(-50%) scale(1)",transition:"transform 0.15s cubic-bezier(.3,1.2,.2,1)"}}else n={transform:"translate(-50%) scale(0)"};var a=t.getItem("alignment")||"default";f(a),l(n),d.current=void 0}),0);d.current=n}),[]),v=(0,r.useCallback)((function(e){e&&f(e)}),[]);(0,r.useEffect)((function(){return function(){d.current&&clearTimeout(d.current)}}),[]),(0,r.useEffect)((function(){return t.subscribeToItem("visibleBlock",h),t.subscribeToItem("alignment",v),function(){t.unsubscribeFromItem("visibleBlock",h),t.unsubscribeFromItem("alignment",v)}}),[h,v]);var m=[i.f9,i.qA,i.xM,i.Tj];return r.createElement("div",{className:n.alignmentToolStyles.alignmentTool,style:c,ref:g},m.map((function(e,o){return r.createElement(e,{key:o,alignment:u,setAlignment:t.getItem("setAlignment"),theme:n.buttonStyles})})))}var g={buttonStyles:{buttonWrapper:"b1qfpj3o",button:"bgspekh",active:"autuw9p"},alignmentToolStyles:{alignmentTool:"awlhfjh"}},d=function(e,t){var n=t.getEditorState,r=t.setEditorState;return function(t){var c=e.getEntityAt(0);if(c){var i=n();i.getCurrentContent().mergeEntityData(c,l({},t)),r(o.EditorState.forceSelection(i,i.getSelection()))}}};t.Z=function(e){void 0===e&&(e={});var t=(0,c.MT)({isVisible:!1}),n=e.theme,o=void 0===n?g:n;return{initialize:function(e){var n=e.getReadOnly,r=e.getEditorState,o=e.setEditorState;t.updateItem("getReadOnly",n),t.updateItem("getEditorState",r),t.updateItem("setEditorState",o)},decorator:u({store:t}),blockRendererFn:function(e,t){var n=t.getEditorState,r=t.setEditorState,o=e.getEntityAt(0),c=n().getCurrentContent();return{props:{alignment:(o?c.getEntity(o).getData():{}).alignment||"default",setAlignment:d(e,{getEditorState:n,setEditorState:r})}}},AlignmentTool:function(){return r.createElement(f,{store:t,theme:o})}}}},20138:function(e,t,n){"use strict";n.d(t,{xM:function(){return w},f9:function(){return S},qA:function(){return L},Tj:function(){return k},YC:function(){return y},n3:function(){return s},Ou:function(){return E},Ed:function(){return f},gS:function(){return d},R8:function(){return v},oV:function(){return h},BI:function(){return u},pu:function(){return p},tg:function(){return g},cU:function(){return m}});var r=n(2784),o=n(1503),c=n(6277);function i(e){var t=e.blockType,n=e.children;return function(e){var i=e.theme,l=function(){if(!e.getEditorState)return!1;var n=e.getEditorState();return n.getCurrentContent().getBlockForKey(n.getSelection().getStartKey()).getType()===t}()?(0,c.Z)(i.button,i.active):i.button;return r.createElement("div",{className:i.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:l,onClick:function(n){n.preventDefault(),e.setEditorState(o.RichUtils.toggleBlockType(e.getEditorState(),t))},type:"button",children:n}))}}function l(e){var t=e.style,n=e.children;return function(e){var i=e.theme,l=e.getEditorState&&e.getEditorState().getCurrentInlineStyle().has(t)?(0,c.Z)(i.button,i.active):i.button;return r.createElement("div",{className:i.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:l,onClick:function(n){n.preventDefault(),e.setEditorState(o.RichUtils.toggleInlineStyle(e.getEditorState(),t))},type:"button",children:n}))}}function a(e){var t=e.alignment,n=e.children;return function(e){var o=e.theme,i=e.alignment===t?(0,c.Z)(o.button,o.active):o.button;return r.createElement("div",{className:o.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:i,onClick:function(n){n.preventDefault(),e.setAlignment({alignment:t})},type:"button",children:n}))}}var u=l({style:"ITALIC",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}))}),s=l({style:"BOLD",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),f=l({style:"CODE",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),g=l({style:"UNDERLINE",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}))}),d=i({blockType:"header-one",children:"H1"}),h=i({blockType:"header-two",children:"H2"}),v=i({blockType:"header-three",children:"H3"}),m=i({blockType:"unordered-list-item",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))}),p=i({blockType:"ordered-list-item",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),y=i({blockType:"blockquote",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),E=i({blockType:"code-block",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),S=a({alignment:"default",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),w=a({alignment:"center",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),L=a({alignment:"left",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),k=a({alignment:"right",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))});l({style:"SUBSCRIPT",children:r.createElement("div",null,"x",r.createElement("sub",null,"2"))}),l({style:"SUPERSCRIPT",children:r.createElement("div",null,"x",r.createElement("sup",null,"2"))})},95597:function(e,t,n){"use strict";var r=n(1503),o=n(46670),c=n(52358),i=n.n(c),l=n(2784),a=n(6277);function u(e){var t=function(e,t,n){var o=t.getStartKey(),c=[];return e.getBlockMap().forEach((function(e,t){c.push(e),t===o&&c.push(n)})),e.merge({blockMap:r.BlockMapBuilder.createFromArray(c),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new r.ContentBlock({key:(0,r.genKey)(),type:"unstyled",text:"",characterList:(0,o.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return r.EditorState.push(e,n,"insert-fragment")}var s=function(e,t,n,o){var c=e(),l=c.getSelection().getAnchorKey(),a="up"===n?c.getCurrentContent().getBlockBefore(l):c.getCurrentContent().getBlockAfter(l);if((!a||a.get("key")!==l)&&a){var u=i().encode(a.getKey(),0,0),s=document.querySelectorAll('[data-offset-key="'+u+'"]')[0],f=window.getSelection(),g=document.createRange();g.setStart(s,0),g.setEnd(s,0),f.removeAllRanges(),f.addRange(g);var d="up"===n?a.getLength():0;o.preventDefault(),t(r.EditorState.forceSelection(c,new r.SelectionState({anchorKey:a.getKey(),anchorOffset:d,focusKey:a.getKey(),focusOffset:d,isBackward:!1})))}};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var r=l.forwardRef((function(r,o){(0,l.useEffect)((function(){return n.add(r.block.getKey()),function(){n.remove(r.block.getKey())}}),[]);var c=r.blockProps,i=r.className,u=c.isFocused?(0,a.Z)(i,t.focused):(0,a.Z)(i,t.unfocused);return l.createElement(e,f({},r,{ref:o,onClick:function(e){e.preventDefault(),r.blockProps.isFocused||r.blockProps.setFocusToBlock()},className:u}))}));return r.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",r.WrappedComponent=e.WrappedComponent||e,r}};var d=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},h=function(e,t){return function(e){var t=e.getSelection(),n=e.getCurrentContent();return d(n,t.getStartKey(),t.getEndKey())}(e).includes(t)};var v={unfocused:"uz5k6rs",focused:"f1vn2c6d"},m=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var r=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(r.getKey())},p=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function y(e){return r.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}t.Z=function(e){void 0===e&&(e={});var t,n,c=function(){var e=(0,o.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),l=e.theme?e.theme:v;return{handleReturn:function(e,t,n){var r=n.setEditorState;return m(t,c)?(r(u(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,o){var i=o.setEditorState;if(p.includes(e)&&m(t,c)){var l=t.getSelection().getStartKey(),a=function(e,t){var n=e.getCurrentContent(),o=n.getKeyBefore(t),c=n.getBlockForKey(o);if(void 0===c){var i=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,i,"backward"),n=r.Modifier.setBlockType(n,i,"unstyled");var l=r.EditorState.push(e,n,"remove-range"),a=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return r.EditorState.forceSelection(l,a)}var u=new r.SelectionState({anchorKey:o,anchorOffset:c.getLength(),focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,u,"backward");var s=r.EditorState.push(e,n,"remove-range"),f=new r.SelectionState({anchorKey:o,anchorOffset:c.getLength(),focusKey:o,focusOffset:c.getLength()});return r.EditorState.forceSelection(s,f)}(t,l);if(a!==t)return i(a),"handled"}return"not-handled"},onChange:function(e){var r=e.getCurrentContent();if(!r.equals(n))return n=r,e;n=r;var o=e.getSelection();if(t&&o.equals(t))return t=e.getSelection(),e;var i=c.getAll();if(t&&d(r,t.getStartKey(),t.getEndKey()).some((function(e){return i.includes(e)})))return t=o,y(e);return d(r,o.getStartKey(),o.getEndKey()).some((function(e){return i.includes(e)}))?(t=o,y(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,r=t.setEditorState,o=n();if(m(o,c)&&(37===e.keyCode&&s(n,r,"up",e),39===e.keyCode&&s(n,r,"down",e),38===e.keyCode&&s(n,r,"up",e),40===e.keyCode))s(n,r,"down",e);else if(!e.shiftKey){if(37===e.keyCode){var i=o.getSelection(),l=i.getAnchorKey(),a=o.getCurrentContent().getBlockBefore(l);a&&0===i.getAnchorOffset()&&c.includes(a.getKey())&&s(n,r,"up",e)}if(39===e.keyCode){var u=o.getSelection(),f=u.getFocusKey(),g=o.getCurrentContent().getBlockForKey(f),d=o.getCurrentContent().getBlockAfter(f),h="atomic"!==g.getType()&&g.getLength()===u.getFocusOffset();d&&h&&c.includes(d.getKey())&&s(n,r,"down",e)}if(38===e.keyCode){var v=o.getSelection().getAnchorKey(),p=o.getCurrentContent().getBlockBefore(v);p&&c.includes(p.getKey())&&s(n,r,"up",e)}if(40===e.keyCode){var y=o.getSelection().getAnchorKey(),E=o.getCurrentContent().getBlockAfter(y);E&&c.includes(E.getKey())&&s(n,r,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,o=t.setEditorState;if("atomic"===e.getType()){var c=n();return{props:{isFocused:c.getSelection().getHasFocus()&&h(c,e.getKey()),isCollapsedSelection:c.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var o=e(),c=i().encode(n.getKey(),0,0),l=document.querySelectorAll('[data-offset-key="'+c+'"]')[0],a=window.getSelection(),u=document.createRange();u.setStart(l,0),u.setEnd(l,0),a.removeAllRanges(),a.addRange(u),t(r.EditorState.forceSelection(o,new r.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,o,e)}}}}},decorator:g({theme:l,blockKeyStore:c})}}},52367:function(e,t,n){"use strict";n.d(t,{MT:function(){return c},$m:function(){return i}});var r=n(1503);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){void 0===e&&(e={});var t=e,n={};return{subscribeToItem:function(e,t){n[e]=n[e]||[],n[e].push(t)},unsubscribeFromItem:function(e,t){var r=n[e];r&&(n[e]=r.filter((function(e){return e!==t})))},updateItem:function(e,r){var c;t=o({},t,((c={})[e]=r,c));var i=n[e];i&&i.forEach((function(n){return n(t[e])}))},getItem:function(e){return t[e]}}}function i(e,t,n){for(var r,o,c=t.getText();null!==(r=e.exec(c));)r.index===e.lastIndex&&(e.lastIndex+=1),n(o=r.index,o+r[0].length)}var l={decodeOffsetKey:function(e){var t=e.split("-"),n=t[0],r=t[1],o=t[2];return{blockKey:n,decoratorKey:parseInt(r,10),leafKey:parseInt(o,10)}},createLinkAtSelection:function(e,t){var n=e.getCurrentContent().createEntity("LINK","MUTABLE",{url:t}).getLastCreatedEntityKey(),o=r.RichUtils.toggleLink(e,e.getSelection(),n);return r.EditorState.forceSelection(o,e.getSelection())},removeLinkAtSelection:function(e){var t=e.getSelection();return r.RichUtils.toggleLink(e,t,null)},collapseToEnd:function(e){var t=e.getSelection();return r.EditorState.forceSelection(e,t.merge({anchorKey:t.getEndKey(),focusKey:t.getEndKey(),anchorOffset:t.getEndOffset(),focusOffset:t.getEndOffset()}))},getCurrentEntityKey:function(e){var t=e.getSelection(),n=t.getAnchorKey(),r=e.getCurrentContent().getBlockForKey(n),o=t.getAnchorOffset(),c=t.getIsBackward()?o-1:o;return r.getEntityAt(c)},getCurrentEntity:function(e){var t=e.getCurrentContent(),n=this.getCurrentEntityKey(e);return n?t.getEntity(n):null},hasEntity:function(e,t){var n=this.getCurrentEntity(e);return Boolean(n&&n.getType()===t)}};t.ZP=l}}]);