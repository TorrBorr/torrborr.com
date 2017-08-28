webpackJsonp([0],{428:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(431);r.d(t,"default",function(){return n.a})},430:function(e,t,r){"use strict";function n(e){var t={fontFamily:e.fontFamily,color:e.color,fontSize:e.size,letterSpacing:e.spacing,textAlign:e.center?"center":e.align,textDecoration:e.decoration,textTransform:e.uppercase?"uppercase":e.transform,fontWeight:e.bold?"bold":e.weight};e.italic&&(t.fontStyle="italic"),e.underline&&(t.textDecoration?t.textDecoration+=" underline":t.textDecoration="underline"),e.ellipsis&&(t.textOverflow="ellipsis",t.overflow="hidden",t.whiteSpace="nowrap"),e.antialiased&&(t.WebkitFontSmoothing="antialiased",t.MozOsxFontSmoothing="grayscale");var r=e.height;return"number"==typeof r?t.lineHeight=r+"px":"string"==typeof r&&(t.lineHeight=r),t}function o(e){return c(e,u)}var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),s=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),l=r(57),c=r(32),u=["antialiased","align","bold","center","color","decoration","ellipsis","fontFamily","height","italic","size","spacing","tag","transform","underline","uppercase","weight","refNode"],p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=n(this.props),t=o(this.props),r=s({},e,this.props.css);return t.css=r,this.props.refNode&&(t.ref=this.props.refNode),l.createElement(this.props.tag,t)},t}(a.PureComponent);p.defaultProps={tag:"span",fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell, "Helvetica Neue", sans-serif'},t.default=p},431:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=r(58),a=(r.n(s),r(4)),l=r.n(a),c=r(433),u=r.n(c),p=r(170),f=r.n(p),_=r(430),m=r.n(_);r.d(t,"a",function(){return g});var h="/Users/kylepoole/github/torrborr/src/scenes/Home/Home.js",y="#311B92",b="rgba(49,27,146,0.4)",d=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return l.a.createElement("a",{href:this.props.url,style:{textDecoration:"none",color:y,fontFamily:"'Roboto', sans-serif",fontWeight:300,fontSize:24},__source:{fileName:h,lineNumber:32}},this.props.label)},t}(l.a.Component),g=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return l.a.createElement(s.Col,{center:!0,grow:!0,__source:{fileName:h,lineNumber:51}},l.a.createElement(f.a,{borderRadius:64,__source:{fileName:h,lineNumber:55}},l.a.createElement(s.View,{overflow:"hidden",__source:{fileName:h,lineNumber:58}},l.a.createElement("img",{src:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAvNAAAAJDQ0NDE3Mzg1LTk3ZDUtNDhlOC05ZTg0LTNiM2Q1NDUwMWE5Yw.jpg",height:128,width:128,style:{opacity:.8},__source:{fileName:h,lineNumber:61}}),l.a.createElement(p.Style,{fit:!0,position:"absolute",backgroundColor:y,opacity:.3,__source:{fileName:h,lineNumber:69}}))),l.a.createElement(u.a,{size:8,__source:{fileName:h,lineNumber:77}}),l.a.createElement(m.a,{size:24,fontFamily:"'Roboto', sans-serif",weight:300,color:y,__source:{fileName:h,lineNumber:79}},"Victoria Aston"),l.a.createElement(u.a,{size:64,__source:{fileName:h,lineNumber:88}}),l.a.createElement("span",{style:{padding:"0 32px"},__source:{fileName:h,lineNumber:90}},l.a.createElement("span",{style:{color:y,fontFamily:"'Roboto', sans-serif",fontSize:24,letterSpacing:1},__source:{fileName:h,lineNumber:95}},"Data Scientist"),l.a.createElement("span",{style:{color:b,fontFamily:"'Roboto', sans-serif",fontSize:24,letterSpacing:1},__source:{fileName:h,lineNumber:105}},", Engineer, Consultant")),l.a.createElement(u.a,{size:64,__source:{fileName:h,lineNumber:117}}),l.a.createElement(d,{url:"https://github.com/TorrBorr",label:"Github",__source:{fileName:h,lineNumber:119}}),l.a.createElement(u.a,{size:8,__source:{fileName:h,lineNumber:121}}),l.a.createElement(d,{url:"https://www.linkedin.com/in/victoria-aston/",label:"LinkedIn",__source:{fileName:h,lineNumber:123}}))},t}(l.a.Component);!function(){"undefined"==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(y,"PURPLE","/Users/kylepoole/github/torrborr/src/scenes/Home/Home.js"),__REACT_HOT_LOADER__.register(b,"PURPLE_LIGHT","/Users/kylepoole/github/torrborr/src/scenes/Home/Home.js"),__REACT_HOT_LOADER__.register(d,"Link","/Users/kylepoole/github/torrborr/src/scenes/Home/Home.js"),__REACT_HOT_LOADER__.register(g,"Home","/Users/kylepoole/github/torrborr/src/scenes/Home/Home.js"))}()},433:function(e,t,r){"use strict";function n(e){return{flexGrow:0,flexShrink:0,flexBasis:"number"==typeof e.size?e.size+"px":e.size}}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),s=r(57),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return s.createElement("div",{css:n(this.props)})},t}(i.PureComponent);t.Space=a;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return s.createElement("div",{css:n(this.props)})},t}(i.Component);t.SPACE=l,t.default=a}});
//# sourceMappingURL=0.js.map