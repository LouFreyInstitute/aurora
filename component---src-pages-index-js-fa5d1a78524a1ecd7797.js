(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(197),l=a(195);t.default=function(){return r.a.createElement(o.a,{size:"large"},r.a.createElement(l.a,{title:"Home"}),r.a.createElement("div",{className:"o-container u-margin-bottom+"},r.a.createElement("h1",{className:"c-heading is-large"},"Aurora"),r.a.createElement("p",null,"Aurora is a collection of CSS patterns, React components, icons, and color themes designed for use with"," ",r.a.createElement("a",{href:"http://loufreyinstitute.org",rel:"noopener noreferrer",target:"_blank"},"Lou Frey Institute's")," ","various products."),r.a.createElement("p",null,"It was born out of exploration of various frameworks and technologies, which always seemed to be over-engineered or bloated, and a want to be as minimalist as possible.")),r.a.createElement("div",{className:"o-layout is-horizontal section-group"},r.a.createElement("div",{className:"o-block is-large o-layout-item is-fill section is-rounded is-brand"},r.a.createElement("h1",{className:"c-heading is-large"},"Aurora Core"),r.a.createElement("p",null,"These form the foundation of Aurora."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Elements"),r.a.createElement("p",null,"CSS classes written in SCSS that are the foundation of Aurora."," ",r.a.createElement("em",null,"Elements")," can be used independently by just importing the stylesheet."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Themes"),r.a.createElement("p",null,r.a.createElement("em",null,"Themes")," override the variables found in ",r.a.createElement("em",null,"Elements"),". Themes are only designed to be imported before ",r.a.createElement("em",null,"Elements")," in order to customize the design of Aurora."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Palettes"),r.a.createElement("p",null,"Color schemes that can be consumed by ",r.a.createElement("em",null,"Themes"),". They can be imported separately into your projects if you just want to use the colors.")),r.a.createElement("div",{className:"o-block is-large o-layout-item is-fill section is-rounded"},r.a.createElement("h1",{className:"c-heading is-large"},"Aurora Extras"),r.a.createElement("p",null,"Bonuses for your app development."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Components"),r.a.createElement("p",null,"React components that use ",r.a.createElement("em",null,"Elements")," classes for styling. You can also supply your own ",r.a.createElement("code",null,"className")," property."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Icons"),r.a.createElement("p",null,"Custom vector SVG icons to be used in ",r.a.createElement("em",null,"Components"),". It should be possible to copy the SVG paths and inline them independently, though."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Avatars"),r.a.createElement("p",null,"A framework for building user avatars. A set of SVG graphics that are customizable by the user. Your users will enjoy creating an avatar that suits their personality."))))}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext("Aurora");t.a=r},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Nav",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"NavBar",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NavItem",{enumerable:!0,get:function(){return l.default}});var n=i(a(191)),r=i(a(192)),o=i(a(193)),l=i(a(194));function i(e){return e&&e.__esModule?e:{default:e}}},188:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora"}}}}},190:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),i=a(82),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},191:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t,a,r,l=e.className,c=e.color,u=s(e,["className","color"]),m=(0,n.default)("c-button",(t={},a="is-".concat(c),r=c,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t),l);return o.default.createElement("button",i({className:m},u,{type:"button"}))}c.propTypes={className:r.default.string,color:r.default.string},c.defaultProps={className:"",color:void 0};var u=c;t.default=u},192:function(e,t,a){"use strict";a(198),a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.fill,r=s(e,["className","fill"]),l=(0,n.default)("o-layout-item","c-nav",{"is-fill":a},t);return o.default.createElement("nav",i({className:l},r))}c.propTypes={className:r.default.string,fill:r.default.bool},c.defaultProps={className:"",fill:!1};var u=c;t.default=u},193:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e){var t,a=e.className,r=e.color,l=e.isFixed,u=c(e,["className","color","isFixed"]),m=(0,n.default)("o-layout","c-nav-bar",(s(t={},"is-".concat(r),r),s(t,"is-fixed",l),t),a);return o.default.createElement("div",i({className:m},u))}u.propTypes={className:r.default.string,color:r.default.string,isFixed:r.default.bool},u.defaultProps={className:"",color:void 0,isFixed:!1};var m=u;t.default=m},194:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.Component,r=s(e,["className","Component"]),l=(0,n.default)("c-nav-item",t);return o.default.createElement(a,i({className:l},r))}c.propTypes={className:r.default.string,Component:r.default.elementType},c.defaultProps={className:"",Component:"a"};var u=c;t.default=u},195:function(e,t,a){"use strict";var n=a(196),r=a(0),o=a.n(r),l=a(11),i=a.n(l),s=a(199),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,i=n.data.site,s=t||i.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=u},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@mikebarnhardt"}}}}},197:function(e,t,a){"use strict";var n=a(189),r=a(0),o=a.n(r),l=a(11),i=a.n(l),s=a(58),c=a.n(s),u=(a(188),o.a.createContext({}));function m(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,l=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,l&&r(l),!l&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return o.a.createElement(u.Consumer,null,function(e){return o.a.createElement(m,{data:t,query:a,render:n||r,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};var f=a(186),p=a(187);function h(e){var t=e.changeMode,a=e.changeTheme,n=e.dark,r=e.siteTitle,l=e.theme;return o.a.createElement(p.NavBar,{className:"is-top",color:"brand"},o.a.createElement(p.Nav,null,o.a.createElement(p.NavItem,{Component:"h1",className:"c-heading is-tiny"},o.a.createElement(c.a,{to:"/"},r))),o.a.createElement(p.Nav,{fill:!0},o.a.createElement("select",{name:"theme",value:l,onChange:function(e){var t=e.target;return a(t.value)}},o.a.createElement("option",null,"Aurora"),o.a.createElement("option",null,"Civics360")),o.a.createElement("label",{htmlFor:"dark"},o.a.createElement("input",{checked:n,id:"dark",name:"dark",type:"checkbox",onChange:t}),"Dark")),o.a.createElement(p.Nav,null,o.a.createElement(p.NavItem,{href:"https://github.com/loufreyinstitute/aurora"},"View Code on GitHub")))}h.propTypes={siteTitle:i.a.string},h.defaultProps={siteTitle:""};var v=h;function y(e){Object(r.useContext)(f.a);return o.a.createElement("div",{className:"o-block "+e.className+" sidebar"},o.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},o.a.createElement(p.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h1"},"Components"),o.a.createElement(p.NavItem,{Component:c.a,to:"/button-component"},"Button")),o.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},o.a.createElement(p.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h1"},"Elements"),o.a.createElement(p.NavItem,{Component:c.a,to:"/button-element"},".c-button"),o.a.createElement(p.NavItem,{Component:c.a,to:"/card-element"},".c-card"),o.a.createElement(p.NavItem,{Component:c.a,to:"/notification-element"},".c-notification"),o.a.createElement(p.NavItem,{Component:c.a,to:"/tag-element"},o.a.createElement("div",{className:"o-layout"},o.a.createElement("div",{className:"o-layout-item is-fill"},".c-tag"),o.a.createElement("div",null,o.a.createElement("span",{className:"tag is-brand"},"New")))),o.a.createElement(p.NavItem,{Component:c.a,to:"/input-element"},".input")))}y.propTypes={className:i.a.string},y.defaultProps={className:""};var b=y;function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={theme:"Aurora",dark:!1},a.setTheme=a.setTheme.bind(g(a)),a.setDark=a.setDark.bind(g(a)),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.setTheme=function(e){this.setState({theme:e}),"undefined"!=typeof window&&window.localStorage.setItem("theme",e)},l.setDark=function(){var e=this;this.setState(function(e){return{dark:!e.dark}},function(){"undefined"!=typeof window&&window.localStorage.setItem("dark",e.state.dark)})},l.componentDidMount=function(){if("undefined"!=typeof window){var e=window.localStorage.getItem("theme")||"Aurora",t="true"===window.localStorage.getItem("dark");this.setState({theme:e,dark:t})}},l.render=function(){var e=this,t=this.props,a=t.children,r=t.size,l=this.state,i=l.theme,s=l.dark;return o.a.createElement(d,{query:"1166153303",render:function(t){return o.a.createElement(f.a.Provider,{value:i},o.a.createElement("div",{className:"t-"+i.toLowerCase()+" has-overrides "+(s?"is-dark":"")+" o-layout is-vertical u-full-height"},o.a.createElement(v,{changeMode:e.setDark,changeTheme:e.setTheme,dark:s,siteTitle:t.site.siteMetadata.title,theme:i}),o.a.createElement("div",{className:"o-layout is-horizontal o-layout-item is-fill"},o.a.createElement(b,null),o.a.createElement("main",{className:"o-block is-large o-layout is-vertical o-layout-item is-fill"},o.a.createElement("div",{className:"o-layout-item is-fill u-margin-bottom+ s-prose"},o.a.createElement("div",{className:"o-container is-"+r},a)),o.a.createElement("hr",{className:"divider"}),o.a.createElement("footer",{className:"u-font-size- s-prose"},o.a.createElement("div",{className:"o-layout"},o.a.createElement("div",null,"© ",(new Date).getFullYear(),","," ",o.a.createElement("a",{href:"http://loufreyinstitute.org"},"Lou Frey Institute")," ","at the University of Central Florida."),o.a.createElement("div",{className:"o-layout-item is-fill"}),o.a.createElement("div",null,"Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),".")))))))},data:n})},r}(o.a.Component);E.propTypes={children:i.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-index-js-fa5d1a78524a1ecd7797.js.map