(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{6468:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/image",function(){return n(8035)}])},5721:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2322),o=(n(2784),n(6277)),a=(n(3977),n(7465)),i=n.n(a);function s(e){var t=e.code,n=e.className,a=e.name,s=(0,o.Z)(i().root,n),l=a?i().name:i().hiddenName,c=(0,o.Z)(i().code,"language-".concat(a&&a.endsWith("css")?"css":"js"));return(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("div",{className:l,children:a}),(0,r.jsx)("pre",{className:c,children:(0,r.jsx)("code",{children:t})})]})}},4799:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2322),o=(n(2784),n(6277)),a=(n(3977),n(5373)),i=n.n(a);function s(e){var t=e.code,n=e.className,a=(0,o.Z)(i().root,n);return(0,r.jsx)("span",{className:a,children:(0,r.jsx)("code",{dangerouslySetInnerHTML:{__html:t}})})}},6744:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2322),o=n(2784),a=n(8476),i=n.n(a),s=n(1497),l=n(6351),c=n(7434),d=n(2587);function u(e){var t=e.children;return(0,o.useEffect)((function(){i().highlightAll()}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(l.Z,{}),t,(0,r.jsx)(c.Z,{}),(0,r.jsx)(d.Z,{})]})}},8035:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Me}});var r=n(2322),o=n(2784),a=n(6769),i=n(7619),s=n(397),l=n(5754),c=n.n(l),d=n(5721),u=n(1503),p=n(4705),f=n(1747),m=n(2674),g=n.n(m);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?h(e):t}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},C=[(0,f.Z)()],P={entityMap:{0:{type:"IMAGE",mutability:"IMMUTABLE",data:{src:"/images/canada-landscape-small.jpg"}}},blocks:[{key:"9gm3s",text:"You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"See advanced examples further down \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},E=function(e){function t(){var e;return y(this,t),v(h(e=S(this,x(t).apply(this,arguments))),"state",{editorState:u.EditorState.createWithContent((0,u.convertFromRaw)(P))}),v(h(e),"onChange",(function(t){e.setState({editorState:t})})),v(h(e),"focus",(function(){e.editor.focus()})),e}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:g().editor,onClick:this.focus,children:(0,r.jsx)(p.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:C,ref:function(t){e.editor=t}})})})}}])&&b(n.prototype,o),a&&b(n,a),t}(o.Component),w=n(6347),k=n(5597),O=n(3816),N=n(4782);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e){return new Promise((function(t){var n=new FileReader;n.onload=function(n){t({lastModifiedDate:e.lastModifiedDate,lastModified:e.lastModified,name:e.name,size:e.size,type:e.type,src:n.target.result})},0===e.type.indexOf("text/")||"application/json"===e.type?n.readAsText(e):0===e.type.indexOf("image/")?n.readAsDataURL(e):n.readAsBinaryString(e)}))}function A(e){return function(t,n,r){var o=r.getEditorState,a=r.setEditorState;if(e.handleUpload){for(var i,s={files:[],formData:new FormData},l=R(n);!(i=l()).done;){var c=i.value;c&&c instanceof File&&(s.formData.append("files",c),s.files.push(c))}return a(u.EditorState.acceptSelection(o(),t)),function(e){return Promise.all(e.map(B))}(s.files).then((function(t){var n=o();t.forEach((function(t){e.addImage&&(n=e.addImage(n,t.src))})),a(n)})),"handled"}return"not-handled"}}var Z=n(4375),M=n.n(Z);function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return!t||"object"!==G(t)&&"function"!==typeof t?D(e):t}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K,G=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Y=(0,k.Z)(),X=(0,O.Z)(),q=(0,N.Z)(),Q=(0,w.Z)(),H=Q.AlignmentTool,J=(0,p.lM)(X.decorator,Q.decorator,Y.decorator,q.decorator),V=(0,f.Z)({decorator:J}),$=[(void 0===(K={handleUpload:function(e,t,n,r){!function n(o){r(o||1),100===o?Promise.all(e.files.map(B)).then((function(e){return t(e,{retainSrc:!0})})):setTimeout(n,250,(o||0)+10)}()},addImage:V.addImage})&&(K={}),{handleDroppedFiles:A(K)}),q,Y,Q,X,V],ee={entityMap:{0:{type:"IMAGE",mutability:"IMMUTABLE",data:{src:"/images/canada-landscape-small.jpg"}}},blocks:[{key:"9gm3s",text:"You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"See advanced examples further down \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},te=function(e){function t(){var e;return T(this,t),L(D(e=U(this,F(t).apply(this,arguments))),"state",{editorState:u.EditorState.createWithContent((0,u.convertFromRaw)(ee))}),L(D(e),"onChange",(function(t){e.setState({editorState:t})})),L(D(e),"focus",(function(){e.editor.focus()})),e}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this;return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:M().editor,onClick:this.focus,children:[(0,r.jsx)(p.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:$,ref:function(t){e.editor=t}}),(0,r.jsx)(H,{})]})})}}])&&z(n.prototype,o),a&&z(n,a),t}(o.Component),ne=n(6672),re=n.n(ne);function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e,t){return!t||"object"!==ue(t)&&"function"!==typeof t?oe(e):t}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ue=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},pe=function(e){function t(){var e;return ae(this,t),se(oe(e=ce(this,le(t).apply(this,arguments))),"state",{url:"",open:!1}),se(oe(e),"onPopoverClick",(function(){e.preventNextClose=!0})),se(oe(e),"openPopover",(function(){e.state.open||(e.preventNextClose=!0,e.setState({open:!0}))})),se(oe(e),"closePopover",(function(){!e.preventNextClose&&e.state.open&&e.setState({open:!1}),e.preventNextClose=!1})),se(oe(e),"addImage",(function(){var t=e.props,n=t.editorState;(0,t.onChange)(e.props.modifier(n,e.state.url))})),se(oe(e),"changeUrl",(function(t){e.setState({url:t.target.value})})),e}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){document.addEventListener("click",this.closePopover)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.closePopover)}},{key:"render",value:function(){var e=this.state.open?re().addImagePopover:re().addImageClosedPopover,t=this.state.open?re().addImagePressedButton:re().addImageButton;return(0,r.jsxs)("div",{className:re().addImage,children:[(0,r.jsx)("button",{className:t,onMouseUp:this.openPopover,type:"button",children:"+"}),(0,r.jsxs)("div",{className:e,onClick:this.onPopoverClick,children:[(0,r.jsx)("input",{type:"text",placeholder:"Paste the image url \u2026",className:re().addImageInput,onChange:this.changeUrl,value:this.state.url}),(0,r.jsx)("button",{className:re().addImageConfirmButton,type:"button",onClick:this.addImage,children:"Add"})]})]})}}])&&ie(n.prototype,o),a&&ie(n,a),t}(o.Component),fe=n(6594),me=n.n(fe);function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t){return!t||"object"!==je(t)&&"function"!==typeof t?ge(e):t}function Se(e,t){return(Se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var je=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},_e=(0,f.Z)(),Ce=[_e],Pe='Click on the + button below and insert "/images/canada-landscape-small.jpg" to add the landscape image. Alternativly you can use any image url on the web.',Ee=function(e){function t(){var e;return he(this,t),be(ge(e=xe(this,ve(t).apply(this,arguments))),"state",{editorState:(0,p.bf)(Pe)}),be(ge(e),"onChange",(function(t){e.setState({editorState:t})})),be(ge(e),"focus",(function(){e.editor.focus()})),e}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Se(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:me().editor,onClick:this.focus,children:(0,r.jsx)(p.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:Ce,ref:function(t){e.editor=t}})}),(0,r.jsx)(pe,{editorState:this.state.editorState,onChange:this.onChange,modifier:_e.addImage})]})}}])&&ye(n.prototype,o),a&&ye(n,a),t}(o.Component),we=n(8598),ke=n(4799),Oe=n(6744);function Ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Re(e){return(Re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Be(e,t){return!t||"object"!==Ze(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ze=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Me=function(e){function t(){return Ne(this,t),Be(this,Re(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return(0,r.jsxs)(Oe.Z,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{level:2,children:"Image"}),(0,r.jsx)(s.Z,{level:3,children:"Supported Environment"}),(0,r.jsxs)("ul",{className:c().list,children:[(0,r.jsx)("li",{className:c().listEntry,children:"Desktop: Yes"}),(0,r.jsx)("li",{className:c().listEntry,children:"Mobile: Yes"}),(0,r.jsx)("li",{className:c().listEntry,children:"Screen-reader: No"})]})]}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{level:2,children:"Getting Started"}),(0,r.jsx)(d.Z,{code:"npm install @draft-js-plugins/editor"}),(0,r.jsx)(d.Z,{code:"npm install @draft-js-plugins/image"}),(0,r.jsx)(d.Z,{code:"// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport React from 'react';\n\nconst imagePlugin = createImagePlugin();\n\n// The Editor accepts an array of plugins. In this case, only the imagePlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[imagePlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,r.jsx)(s.Z,{level:3,children:"Importing the default styles"}),(0,r.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,r.jsx)(ke.Z,{code:"node_modules/@draft-js-plugins/image/lib/plugin.css"})]}),(0,r.jsx)(s.Z,{level:4,children:"Webpack Usage"}),(0,r.jsxs)("ul",{className:c().list,children:[(0,r.jsxs)("li",{className:c().listEntry,children:["1. Install Webpack loaders: \xa0",(0,r.jsx)(ke.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,r.jsxs)("li",{className:c().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,r.jsx)(d.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:c().guideCodeBlock})]}),(0,r.jsxs)("li",{className:c().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,r.jsx)(d.Z,{code:"import '@draft-js-plugins/image/lib/plugin.css';",className:c().guideCodeBlock})]}),(0,r.jsx)("li",{className:c().listEntry,children:"4. Restart Webpack."})]}),(0,r.jsx)(s.Z,{level:4,children:"Browserify Usage"}),(0,r.jsxs)("p",{children:["Please help, by submiting a Pull Request to the"," ",(0,r.jsx)(we.Z,{href:"https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js",children:"documentation"}),"."]})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{level:2,children:"Configuration Parameters"}),(0,r.jsxs)("div",{className:c().param,children:[(0,r.jsx)("span",{className:c().paramName,children:"theme"}),(0,r.jsx)("span",{children:"Object of CSS classes with the following keys."}),(0,r.jsxs)("div",{className:c().subParams,children:[(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"image:"})," CSS class for the image."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImage:"})," CSS class."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImagePopover:"})," ","CSS class."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImageClosedPopover:"})," ","CSS class."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImageBottomGradient:"})," ","CSS class."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImageButton:"})," CSS class."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImagePressedButton:"})," ","CSS class."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImageInput:"})," CSS class."]}),(0,r.jsxs)("div",{className:c().subParam,children:[(0,r.jsx)("span",{className:c().subParamName,children:"addImageConfirmButton:"})," ","CSS class."]})]})]}),(0,r.jsxs)("div",{className:c().paramBig,children:[(0,r.jsx)("span",{className:c().paramName,children:"imageComponent"}),(0,r.jsx)("span",{children:"Pass in a custom image component to be rendered."})]}),(0,r.jsxs)("div",{className:c().paramBig,children:[(0,r.jsx)("span",{className:c().paramName,children:"addImageButtonContent"}),(0,r.jsx)("span",{children:"Content of button which opens add image popup. (Default content is \ud83d\udcf7)"})]})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{level:2,children:"Simple Example"}),(0,r.jsx)(E,{}),(0,r.jsx)(d.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport editorStyles from './editorStyles.module.css';\n\nconst imagePlugin = createImagePlugin();\nconst plugins = [imagePlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class SimpleImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleImageEditor.js"}),(0,r.jsx)(d.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{level:2,children:"Alignment + Resize + Focus + Drag'n'Drop + Drag'n'Drop Upload Example"}),(0,r.jsx)(te,{}),(0,r.jsx)(d.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\n\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\n\nimport createResizeablePlugin from '@draft-js-plugins/resizeable';\n\nimport createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';\n\nimport createDragNDropUploadPlugin from '@draft-js-plugins/drag-n-drop-upload';\nimport editorStyles from './editorStyles.module.css';\nimport mockUpload from './mockUpload';\n\nconst focusPlugin = createFocusPlugin();\nconst resizeablePlugin = createResizeablePlugin();\nconst blockDndPlugin = createBlockDndPlugin();\nconst alignmentPlugin = createAlignmentPlugin();\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  resizeablePlugin.decorator,\n  alignmentPlugin.decorator,\n  focusPlugin.decorator,\n  blockDndPlugin.decorator\n);\nconst imagePlugin = createImagePlugin({ decorator });\n\nconst dragNDropFileUploadPlugin = createDragNDropUploadPlugin({\n  handleUpload: mockUpload,\n  addImage: imagePlugin.addImage,\n});\n\nconst plugins = [\n  dragNDropFileUploadPlugin,\n  blockDndPlugin,\n  focusPlugin,\n  alignmentPlugin,\n  resizeablePlugin,\n  imagePlugin,\n];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <AlignmentTool />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"AddImageEditor.js"}),(0,r.jsx)(d.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{level:2,children:"Add Image Button Example"}),(0,r.jsx)(Ee,{}),(0,r.jsx)(d.Z,{code:"import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport ImageAdd from './ImageAdd';\n\nimport editorStyles from './editorStyles.module.css';\n\nconst imagePlugin = createImagePlugin();\nconst plugins = [imagePlugin];\n\nconst text =\n  'Click on the + button below and insert \"/images/canada-landscape-small.jpg\" to add the landscape image. Alternativly you can use any image url on the web.';\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <ImageAdd\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          modifier={imagePlugin.addImage}\n        />\n      </div>\n    );\n  }\n}\n",name:"AddImageEditor.js"}),(0,r.jsx)(d.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]})]})}}])&&Ie(n.prototype,o),l&&Ie(n,l),t}(o.Component)},7465:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},6672:function(e){e.exports={addImage:"styles_addImage__1xY_q",addImagePopover:"styles_addImagePopover__3i69b",addImageClosedPopover:"styles_addImageClosedPopover__1Jq7k",addImageButton:"styles_addImageButton__3L2ZC",addImagePressedButton:"styles_addImagePressedButton__1RvA8 styles_addImageButton__3L2ZC",addImageBottomGradient:"styles_addImageBottomGradient__3ircD",addImageInput:"styles_addImageInput__1VLTX",addImageConfirmButton:"styles_addImageConfirmButton__1ke48"}},6594:function(e){e.exports={editor:"editorStyles_editor__2AWmD",options:"editorStyles_options__3CCGe"}},4375:function(e){e.exports={editor:"editorStyles_editor__1Tpwm",options:"editorStyles_options__1kqgG"}},2674:function(e){e.exports={editor:"editorStyles_editor__1burQ",options:"editorStyles_options__3xQKk"}},5373:function(e){e.exports={root:"InlineCode_root__1EGp7"}},5754:function(e){e.exports={root:"styles_root__2Zw7c",param:"styles_param__24TIr",paramBig:"styles_paramBig__18mcN",paramName:"styles_paramName__3RlGv",subParams:"styles_subParams__3fEXX",subParam:"styles_subParam__cOQn5",subParamName:"styles_subParamName__O3FFC",list:"styles_list__1gBQ7",listEntry:"styles_listEntry__1eLIS",guideCodeBlock:"styles_guideCodeBlock__OTTDR"}},4782:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(1503),o=n(6670),a=n(2784);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s="DRAFTJS_BLOCK_KEY",l=function(e,t,n,a){var l=a.getEditorState,c=a.setEditorState,d=l(),u=t.data.getData("text"),p=u?u.split(":"):[];if(2!==p.length)return"not-handled";if(p[0]===s){var f=p[1],m=d.getCurrentContent(),g=m.getBlockForKey(f),h=m.getEntity(g.getEntityAt(0)),y=function(e,t){var n,o=e.getKeyAfter(t),a=e.getBlockForKey(o);n=a&&"unstyled"===a.getType()&&0===a.getLength()&&a===e.getBlockMap().last()?new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:o,focusOffset:0}):new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});var i=r.Modifier.setBlockType(e,n,"unstyled");return r.Modifier.removeRange(i,n,"backward")}(function(e,t,n,a,s,l){void 0===l&&(l=" ");var c,d,u=e.getCurrentContent(),p=t,f=r.Modifier.removeRange(u,p,"backward"),m=f.getSelectionAfter(),g=m.get("focusKey"),h=u.getBlockForKey(g),y=0===h.getLength()&&null===h.getEntityAt(0),b=0===p.getStartOffset();y||b?(c=m,d=f):c=(d=r.Modifier.splitBlock(f,m)).getSelectionAfter();var v=r.Modifier.setBlockType(d,c,n),x=v.createEntity(s||n,"IMMUTABLE",i({},a)).getLastCreatedEntityKey(),S=r.CharacterMetadata.create({entity:x}),j=[new r.ContentBlock({key:(0,r.genKey)(),type:n,text:l,characterList:(0,o.List)((0,o.Repeat)(S,l.length||1))}),new r.ContentBlock({key:(0,r.genKey)(),type:"unstyled",text:"",characterList:(0,o.List)()})],_=r.BlockMapBuilder.createFromArray(j);return r.Modifier.replaceWithFragment(v,c,_)}(d,e,g.getType(),h.getData(),h.getType()),f),b=new r.SelectionState({anchorKey:f,anchorOffset:0,focusKey:f,focusOffset:0}),v=r.EditorState.push(d,y,"insert-fragment");c(r.EditorState.forceSelection(v,b))}return"handled"},c=function(e){var t=e.store;return function(e){var n=a.forwardRef((function(n,r){var o=!t.getReadOnly||t.getReadOnly();return a.createElement(e,i({ref:r},n,{onDragStart:o?void 0:function(e){e.dataTransfer.dropEffect="move",e.dataTransfer.setData("text","DRAFTJS_BLOCK_KEY:"+n.block.getKey())}}))}));return n.displayName="BlockDraggable("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",n.WrappedComponent=e.WrappedComponent||e,n}};function d(){var e={getReadOnly:void 0};return{initialize:function(t){var n=t.getReadOnly;e.getReadOnly=n},decorator:c({store:e}),handleDrop:l}}},1747:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2784),o=n(1503),a=n(6277);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var l=function(e,t,n){var r=e.getCurrentContent().createEntity("IMAGE","IMMUTABLE",i({},n,{src:t})).getLastCreatedEntityKey(),a=o.AtomicBlockUtils.insertAtomicBlock(e,r," ");return o.EditorState.forceSelection(a,a.getCurrentContent().getSelectionAfter())},c=["block","className","theme"],d=["blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","blockStyleFn","preventScroll","contentState"],u=r.forwardRef((function(e,t){var n=e.block,o=e.className,l=e.theme,u=void 0===l?{}:l,p=s(e,c);p.blockProps,p.customStyleMap,p.customStyleFn,p.decorator,p.forceSelection,p.offsetKey,p.selection,p.tree,p.blockStyleFn,p.preventScroll;var f=p.contentState,m=s(p,d),g=(0,a.Z)(u.image,o),h=f.getEntity(n.getEntityAt(0)).getData().src;return r.createElement("img",i({},m,{ref:t,src:h,role:"presentation",className:g}))})),p={},f=function(e){void 0===e&&(e={});var t=e.theme?e.theme:p,n=e.imageComponent||u;e.decorator&&(n=e.decorator(n));var o=function(e){return r.createElement(n,i({},e,{theme:t}))};return{blockRendererFn:function(e,t){var n=t.getEditorState;if("atomic"===e.getType()){var r=n().getCurrentContent(),a=e.getEntityAt(0);if(!a)return null;var i=r.getEntity(a).getType();return"IMAGE"===i||"image"===i?{component:o,editable:!1}:null}return null},addImage:l}}},3816:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(1503),o=n(2784);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=["blockProps","isResizable","resizeSteps"],s=function(e,t){return Math.ceil(e/t)*t},l=function(e){var t=e.config,n=e.store;return function(e){var r=o.forwardRef((function(r,l){var c=r.blockProps,d=r.isResizable,u=void 0===d||d,p=r.resizeSteps,f=void 0===p?1:p,m=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(r,i),g=t.vertical,h=void 0!==g&&g,y=t.horizontal,b=void 0===y?"relative":y,v=t.initialWidth,x=t.initialHeight,S=(0,o.useState)(!1),j=S[0],_=S[1],C=(0,o.useState)(0),P=C[0],E=C[1],w=(0,o.useState)(0),k=w[0],O=w[1],N=(0,o.useState)({}),I=N[0],R=N[1],B=(0,o.useRef)(),A=(0,o.useCallback)((function(){j||R({})}),[j]),Z=(0,o.useCallback)((function(e){var t=B.current.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=!(!h||"auto"===h)&&r<6,a=!!b&&n<6,i=!!b&&n>=t.width-6,s=!(!h||"auto"===h)&&(r>=t.height-6&&r<t.height),l={isTop:o,isLeft:a,isRight:i,isBottom:s,canResize:(o||a||i||s)&&u};R((function(e){return Object.keys(l).filter((function(t){return e[t]!==l[t]})).length?l:e}))}),[h,b,u]),M=(0,o.useCallback)((function(e){if(I.canResize){e.preventDefault();var t=I.isTop,r=I.isLeft,o=I.isRight,a=I.isBottom,i=B.current,l=e.clientX,d=e.clientY,u=parseInt(document.defaultView.getComputedStyle(i).width,10),p=parseInt(document.defaultView.getComputedStyle(i).height,10),m=P,g=k,y=function(e){var i=u+(r?l-e.clientX:e.clientX-l),c=p+e.clientY-d,y=n.getEditorRef(),v=y.refs&&y.refs.editor?y.refs.editor:y.editor;i=Math.min(v.clientWidth,i),c=Math.min(v.clientHeight,c);var x=100/v.clientWidth*i,S=100/v.clientHeight*c;(r||o)&&"relative"===b?(m=f?s(x,f):x,E(m)):(r||o)&&"absolute"===b&&(m=f?s(i,f):i,E(m)),(t||a)&&"relative"===h?(g=f?s(S,f):S,O(g)):(t||a)&&"absolute"===h&&(g=f?s(c,f):c,O(g)),e.preventDefault()};document.addEventListener("mousemove",y,!1),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",y,!1),document.removeEventListener("mouseup",e,!1),_(!1),c.setResizeData({width:m,height:g})}),!1),_(!0)}}),[I,P,k,c]),D=(0,o.useMemo)((function(){var e={position:"relative"},t=I.isTop,n=I.isLeft,r=I.isRight,o=I.isBottom;if("auto"===b)e.width="auto";else if("relative"===b){var a=P||c.resizeData.width;e.width=!a&&v?v:(a||40)+"%"}else if("absolute"===b){var i=P||c.resizeData.width;e.width=!i&&v?v:(i||40)+"px"}if("auto"===h)e.height="auto";else if("relative"===h){var s=k||c.resizeData.height;e.height=!s&&x?x:(s||40)+"%"}else if("absolute"===h){var l=k||c.resizeData.height;e.height=!l&&x?x:(l||40)+"%"}return e.cursor=u?r&&o||n&&t?"nwse-resize":r&&t||o&&n?"nesw-resize":r||n?"ew-resize":o||t?"ns-resize":"default":"default",e}),[I,k,P]),T=!n.getReadOnly||n.getReadOnly()?{}:{onMouseDown:M,onMouseMove:Z,onMouseLeave:A};return o.createElement(e,a({},m,T,{blockProps:c,ref:function(e){B.current=e,"function"===typeof l?l(e):l&&(l.current=e)},style:D}))}));return r.displayName="BlockResizeable("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",r.WrappedComponent=e.WrappedComponent||e,r}},c=function(e,t){var n=t.getEditorState,o=t.setEditorState;return function(t){var i=e.getEntityAt(0);if(i){var s=n();s.getCurrentContent().mergeEntityData(i,a({},t)),o(r.EditorState.forceSelection(s,s.getSelection()))}}},d=function(e){void 0===e&&(e={});var t={getEditorRef:void 0,getReadOnly:void 0,getEditorState:void 0,setEditorState:void 0};return{initialize:function(e){var n=e.getEditorRef,r=e.getReadOnly,o=e.getEditorState,a=e.setEditorState;t.getReadOnly=r,t.getEditorRef=n,t.getEditorState=o,t.setEditorState=a},decorator:l({config:e,store:t}),blockRendererFn:function(e,t){var n=t.getEditorState,r=t.setEditorState,o=e.getEntityAt(0),a=n().getCurrentContent();return{props:{resizeData:o?a.getEntity(o).getData():{},setResizeData:c(e,{getEditorState:n,setEditorState:r})}}}}}}},function(e){e.O(0,[774,140,476,433,138,888,179],(function(){return t=6468,e(e.s=t);var t}));var t=e.O();_N_E=t}]);