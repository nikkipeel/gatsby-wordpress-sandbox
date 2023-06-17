/*! For license information please see components-Atoms-Buttons-Button-stories.19cc179e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_wordpress_sandbox=self.webpackChunkgatsby_wordpress_sandbox||[]).push([[131],{"./src/components/Atoms/Buttons/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=(__webpack_require__("./src/components/Atoms/Buttons/buttons.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Button=({id,link,classes,label,...props})=>(0,jsx_runtime.jsx)("a",{href:link,className:classes,...props,children:label});Button.displayName="Button",Button.propTypes={link:prop_types_default().string.isRequired,classes:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired,onClick:prop_types_default().func},Button.defaultProps={onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction\r\n link, id, classes, text,",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},link:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!0},label:{description:"",type:{name:"string"},required:!0}}};const Button_stories={title:"Design System/Atoms/Buttons/Primary",component:Button,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{margin:"3em"},children:(0,jsx_runtime.jsx)(Story,{})})]},Template=args=>(0,jsx_runtime.jsx)(Button,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={primary:!0,label:"Primary Button",classes:"button button--primary"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Atoms/Buttons/buttons.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button {\n  width: max-content;\n  border-radius: 3.5px;\n  padding: 8px 14px;\n  position: relative;\n  transition: all 0.3s ease;\n  display: flex;\n  cursor: pointer;\n  font-size: var(--ts-body);\n  font-family: var(--font-body);\n  font-weight: 500;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.button--primary {\n  background: var(--primary);\n  color: var(--light);\n  border: none;\n}\n\n.button--secondary {\n  background: var(--secondary);\n  color: var(--light);\n  border: none;\n}\n\n.button--accent {\n  background: var(--accent);\n  color: var(--dark);\n  border: none;\n}\n\n.button--with-icon {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n","",{version:3,sources:["webpack://./src/components/Atoms/Buttons/buttons.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,gBAAgB;EAChB,4EAA4E;AAC9E;;AAEA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb",sourcesContent:[".button {\r\n  width: max-content;\r\n  border-radius: 3.5px;\r\n  padding: 8px 14px;\r\n  position: relative;\r\n  transition: all 0.3s ease;\r\n  display: flex;\r\n  cursor: pointer;\r\n  font-size: var(--ts-body);\r\n  font-family: var(--font-body);\r\n  font-weight: 500;\r\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r\n}\r\n\r\n.button--primary {\r\n  background: var(--primary);\r\n  color: var(--light);\r\n  border: none;\r\n}\r\n\r\n.button--secondary {\r\n  background: var(--secondary);\r\n  color: var(--light);\r\n  border: none;\r\n}\r\n\r\n.button--accent {\r\n  background: var(--accent);\r\n  color: var(--dark);\r\n  border: none;\r\n}\r\n\r\n.button--with-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Atoms/Buttons/buttons.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_buttons_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Atoms/Buttons/buttons.css"),options={};options.styleTagTransform=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_buttons_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_buttons_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_buttons_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_buttons_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);