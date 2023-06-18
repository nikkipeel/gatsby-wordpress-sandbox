/*! For license information please see components-Molecules-Cards-Card-stories.5883832c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_wordpress_sandbox=self.webpackChunkgatsby_wordpress_sandbox||[]).push([[965],{"./src/components/Molecules/Cards/Card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Flip:()=>Flip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cards=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Molecules/Cards/cards.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cards.Z,options);cards.Z&&cards.Z.locals&&cards.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=({classes,key,url,label,title,imageSrc,content,...props})=>{const bgImage=imageSrc||"https://source.unsplash.com/random/?camping";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[classes.includes("card--basic")&&(0,jsx_runtime.jsx)("div",{className:"card-shadow"}),(0,jsx_runtime.jsx)("a",{className:classes,href:url,"aria-label":label,...props,children:classes.includes("card--flip")?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"front",children:[(0,jsx_runtime.jsxs)("div",{className:"card-title",children:[(0,jsx_runtime.jsx)("h2",{children:title}),(0,jsx_runtime.jsx)("span",{})]}),(0,jsx_runtime.jsx)("img",{src:bgImage,alt:title}),(0,jsx_runtime.jsx)("div",{className:"overlay"})]}),(0,jsx_runtime.jsxs)("div",{className:"back",children:[(0,jsx_runtime.jsx)("div",{className:"card-info",dangerouslySetInnerHTML:{__html:content}}),(0,jsx_runtime.jsx)("strong",{children:"Read More..."})]})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"card-inner",children:[(0,jsx_runtime.jsx)("h2",{children:title}),(0,jsx_runtime.jsx)("div",{className:"card-info",dangerouslySetInnerHTML:{__html:content}}),(0,jsx_runtime.jsx)("strong",{children:"Read More..."})]})})},key)]})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{classes:{description:"",type:{name:"string"},required:!0},url:{description:"",type:{name:"string"},required:!0},label:{description:"",type:{name:"string"},required:!0}}};const Cards_Card=Card;Card.propTypes={classes:prop_types_default().string.isRequired,url:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired};const Card_stories={title:"Design System/Molecules/Cards",component:Cards_Card,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{margin:"3em"},children:(0,jsx_runtime.jsx)(Story,{})})]},Template=args=>(0,jsx_runtime.jsx)(Cards_Card,{...args});Template.displayName="Template";const Basic=Template.bind({}),Flip=Template.bind({});Basic.args={content:"This is some content within a card element",classes:"card card--basic",title:"Basic Card",url:"/"},Flip.args={content:"This is some content within a card element",classes:"card card--flip",title:"Flip Card",url:"/"},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...Basic.parameters?.docs?.source}}},Flip.parameters={...Flip.parameters,docs:{...Flip.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...Flip.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Flip"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Molecules/Cards/cards.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.card {\n  display: block;\n  color: #121212;\n  width: calc(33% - 2rem);\n  min-width: calc(33% - 2rem);\n  height: 250px;\n  min-height: 250px;\n  margin: 1rem;\n  position: relative;\n  text-decoration: none;\n  height: 100%;\n  transition: all 0.4s ease-in-out;\n}\n\n@media and (max-width: 768px) {\n  .card {\n    width: 100%;\n  }\n}\n\n@media and (max-width: 1024px) {\n  .card {\n    width: calc(50% - 2rem);\n  }\n}\n\n.card h2 {\n  width: 100%;\n  font-weight: 700;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n}\n\n.card.card--basic {\n  padding: 2rem;\n  background: var(--light);\n  box-shadow: -18px 18px 0 var(--accent);\n}\n\n.card.card--basic .card-info {\n  margin-bottom: 1rem;\n}\n\n.card.card--flip {\n  perspective: 1000px;\n}\n\n.card .card-title {\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  position: relative;\n  bottom: -70px;\n  padding-left: 2rem;\n  z-index: 5;\n  /* background: var(--highlight); */\n}\n\n.card .card-title span {\n  height: 8px;\n  width: 80%;\n  border-radius: 1px;\n  position: relative;\n  background: var(--highlight);\n  transform: skew(-30deg);\n}\n\n.card.card--flip .card-title h2 {\n  text-align: left;\n  width: max-content;\n  position: relative;\n  margin: 0.5rem 0;\n}\n\n.card--flip .front,\n.card--flip .back {\n  display: flex;\n  border-radius: 6px;\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform-style: preserve-3d;\n  transition: ease-in-out 600ms;\n}\n\n.card--flip .front {\n  background-size: cover;\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: var(--neutral-lightest);\n  overflow: hidden;\n  font-family: sans-serif;\n}\n\n.card--flip img {\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n}\n\n.card--flip h2 {\n  z-index: 3;\n}\n\n.card--flip .overlay {\n  position: absolute;\n  display: block;\n  content: "";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(transparent 20px, var(--dark));\n  z-index: 2;\n}\n\n.card--flip:hover .front {\n  transform: rotateY(180deg);\n}\n\n.card--flip:nth-child(even) .front {\n  transform: rotateY(-180deg);\n}\n\n.card--flip .back {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: start;\n  gap: 1rem;\n  text-align: left;\n  background: var(--highlight);\n  color: var(--dark);\n  transform: rotateY(-180deg);\n}\n\n.card--flip .card-info,\n.card--flip strong {\n  padding: 2rem;\n}\n\n.card--flip:hover .back {\n  transform: rotateY(0deg);\n}\n\n/* \n.card:nth-child(even) .back {\n  transform: rotateY(180deg);\n}\n\n.card:nth-child(even) button {\n  background: var(--highlight);\n}\n\n.card:nth-child(even) button::before {\n  box-shadow: 0 0 10px 10px rgba(119, 72, 54, 0.25);\n  background-color: rgba(119, 72, 54, 0.25);\n}\n\n.card:nth-child(even):hover .back {\n  transform: rotateY(0deg);\n} */\n',"",{version:3,sources:["webpack://./src/components/Molecules/Cards/cards.css"],names:[],mappings:"AAAA;EACE,cAAc;EACd,cAAc;EACd,uBAAuB;EACvB,2BAA2B;EAC3B,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;AACF;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,4BAA4B;EAC5B,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,2BAA2B;EAC3B,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,8BAA8B;EAC9B,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,0DAA0D;EAC1D,UAAU;AACZ;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,gBAAgB;EAChB,4BAA4B;EAC5B,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;;;;;;;;;;;;;;;GAgBG",sourcesContent:['.card {\r\n  display: block;\r\n  color: #121212;\r\n  width: calc(33% - 2rem);\r\n  min-width: calc(33% - 2rem);\r\n  height: 250px;\r\n  min-height: 250px;\r\n  margin: 1rem;\r\n  position: relative;\r\n  text-decoration: none;\r\n  height: 100%;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n@media and (max-width: 768px) {\r\n  .card {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media and (max-width: 1024px) {\r\n  .card {\r\n    width: calc(50% - 2rem);\r\n  }\r\n}\r\n\r\n.card h2 {\r\n  width: 100%;\r\n  font-weight: 700;\r\n  font-size: 1.5rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.card.card--basic {\r\n  padding: 2rem;\r\n  background: var(--light);\r\n  box-shadow: -18px 18px 0 var(--accent);\r\n}\r\n\r\n.card.card--basic .card-info {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.card.card--flip {\r\n  perspective: 1000px;\r\n}\r\n\r\n.card .card-title {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: max-content;\r\n  position: relative;\r\n  bottom: -70px;\r\n  padding-left: 2rem;\r\n  z-index: 5;\r\n  /* background: var(--highlight); */\r\n}\r\n\r\n.card .card-title span {\r\n  height: 8px;\r\n  width: 80%;\r\n  border-radius: 1px;\r\n  position: relative;\r\n  background: var(--highlight);\r\n  transform: skew(-30deg);\r\n}\r\n\r\n.card.card--flip .card-title h2 {\r\n  text-align: left;\r\n  width: max-content;\r\n  position: relative;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.card--flip .front,\r\n.card--flip .back {\r\n  display: flex;\r\n  border-radius: 6px;\r\n  background-position: center;\r\n  background-size: cover;\r\n  text-align: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  transform-style: preserve-3d;\r\n  transition: ease-in-out 600ms;\r\n}\r\n\r\n.card--flip .front {\r\n  background-size: cover;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n  color: var(--neutral-lightest);\r\n  overflow: hidden;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.card--flip img {\r\n  height: 100%;\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.card--flip h2 {\r\n  z-index: 3;\r\n}\r\n\r\n.card--flip .overlay {\r\n  position: absolute;\r\n  display: block;\r\n  content: "";\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(transparent 20px, var(--dark));\r\n  z-index: 2;\r\n}\r\n\r\n.card--flip:hover .front {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.card--flip:nth-child(even) .front {\r\n  transform: rotateY(-180deg);\r\n}\r\n\r\n.card--flip .back {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  gap: 1rem;\r\n  text-align: left;\r\n  background: var(--highlight);\r\n  color: var(--dark);\r\n  transform: rotateY(-180deg);\r\n}\r\n\r\n.card--flip .card-info,\r\n.card--flip strong {\r\n  padding: 2rem;\r\n}\r\n\r\n.card--flip:hover .back {\r\n  transform: rotateY(0deg);\r\n}\r\n\r\n/* \r\n.card:nth-child(even) .back {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.card:nth-child(even) button {\r\n  background: var(--highlight);\r\n}\r\n\r\n.card:nth-child(even) button::before {\r\n  box-shadow: 0 0 10px 10px rgba(119, 72, 54, 0.25);\r\n  background-color: rgba(119, 72, 54, 0.25);\r\n}\r\n\r\n.card:nth-child(even):hover .back {\r\n  transform: rotateY(0deg);\r\n} */\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);