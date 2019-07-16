(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(192),l=a(190);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement("div",{className:"s-prose"},r.a.createElement("h1",{className:"c-heading is-large"},"Aurora"),r.a.createElement("p",null,"Aurora is a collection of CSS patterns, React components, icons, and color themes designed for use with"," ",r.a.createElement("a",{href:"http://loufreyinstitute.org",rel:"noopener noreferrer",target:"_blank"},"Lou Frey Institute's")," ","various products."),r.a.createElement("p",null,"It was born out of exploration of various frameworks and technologies, which always seemed to be over-engineered or bloated, and a want to be as minimalist as possible."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Components"),r.a.createElement("p",null,"React components that use ",r.a.createElement("em",null,"Elements")," classes for styling. You can also supply your own ",r.a.createElement("code",null,"className")," property."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Elements"),r.a.createElement("p",null,"CSS classes written in SCSS that are the foundation of Aurora."," ",r.a.createElement("em",null,"Elements")," can be used independently by just importing the stylesheet."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Icons"),r.a.createElement("p",null,"Custom vector SVG icons to be used in ",r.a.createElement("em",null,"Components"),". It should be possible to copy the SVG paths and inline them independently, though."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Palettes"),r.a.createElement("p",null,"Color schemes that can be consumed by ",r.a.createElement("em",null,"Themes"),". They can be imported separately into your projects if you just want to use the colors."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Themes"),r.a.createElement("p",null,r.a.createElement("em",null,"Themes")," override the variables found in ",r.a.createElement("em",null,"Elements"),". Themes are only designed to be imported before ",r.a.createElement("em",null,"Elements")," in order to customize the design of Aurora.")))}},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Nav",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"NavBar",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NavItem",{enumerable:!0,get:function(){return l.default}});var n=i(a(186)),r=i(a(187)),o=i(a(188)),l=i(a(189));function i(e){return e&&e.__esModule?e:{default:e}}},183:function(e,t,a){var n;e.exports=(n=a(185))&&n.default||n},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora"}}}}},185:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),i=a(82),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},186:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(179)),r=l(a(180)),o=l(a(181));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t,a,r,l=e.className,c=e.color,u=s(e,["className","color"]),m=(0,n.default)("c-button",(t={},a="is-".concat(c),r=c,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t),l);return o.default.createElement("button",i({className:m},u,{type:"button"}))}c.propTypes={className:r.default.string,color:r.default.string},c.defaultProps={className:"",color:void 0};var u=c;t.default=u},187:function(e,t,a){"use strict";a(193),a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(179)),r=l(a(180)),o=l(a(181));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.fill,r=s(e,["className","fill"]),l=(0,n.default)("o-layout-item","c-nav",{"is-fill":a},t);return o.default.createElement("nav",i({className:l},r))}c.propTypes={className:r.default.string,fill:r.default.bool},c.defaultProps={className:"",fill:!1};var u=c;t.default=u},188:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(179)),r=l(a(180)),o=l(a(181));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e){var t,a=e.className,r=e.color,l=e.isFixed,u=c(e,["className","color","isFixed"]),m=(0,n.default)("o-layout","c-nav-bar",(s(t={},"is-".concat(r),r),s(t,"is-fixed",l),t),a);return o.default.createElement("div",i({className:m},u))}u.propTypes={className:r.default.string,color:r.default.string,isFixed:r.default.bool},u.defaultProps={className:"",color:void 0,isFixed:!1};var m=u;t.default=m},189:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(179)),r=l(a(180)),o=l(a(181));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.Component,r=s(e,["className","Component"]),l=(0,n.default)("c-nav-item",t);return o.default.createElement(a,i({className:l},r))}c.propTypes={className:r.default.string,Component:r.default.elementType},c.defaultProps={className:"",Component:"a"};var u=c;t.default=u},190:function(e,t,a){"use strict";var n=a(191),r=a(0),o=a.n(r),l=a(11),i=a.n(l),s=a(194),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,i=n.data.site,s=t||i.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=u},191:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@mikebarnhardt"}}}}},192:function(e,t,a){"use strict";var n=a(184),r=a(0),o=a.n(r),l=a(11),i=a.n(l),s=a(58),c=a.n(s);a(183),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func;var u=a(182),m=function(e){var t=e.siteTitle;return o.a.createElement(u.NavBar,{color:"brand"},o.a.createElement(u.Nav,null,o.a.createElement(u.NavItem,{Component:"h1",className:"c-heading is-tiny"},o.a.createElement(c.a,{to:"/"},t))),o.a.createElement(u.Nav,null,o.a.createElement(u.NavItem,{Component:c.a,to:"/blog"},"Blog"),o.a.createElement(u.NavItem,{href:"https://github.com/loufreyinstitute/aurora"},"GitHub")))};m.propTypes={siteTitle:i.a.string},m.defaultProps={siteTitle:""};var f=m;var p=function(){return o.a.createElement("div",{className:"o-block is-large"},o.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},o.a.createElement(u.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h4"},"Components"),o.a.createElement(u.NavItem,{Component:c.a,to:"/button-component"},"Button"),o.a.createElement(u.NavItem,{Component:c.a,to:"/nav"},"Nav"),o.a.createElement(u.NavItem,{Component:c.a,to:"/nav-bar"},"NavBar")),o.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},o.a.createElement(u.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h4"},"Elements"),o.a.createElement(u.NavItem,{Component:c.a,to:"/button-element"},".c-button"),o.a.createElement(u.NavItem,{Component:c.a,to:"/c-nav"},".c-nav"),o.a.createElement(u.NavItem,{Component:c.a,to:"/c-nav-bar"},".c-nav-bar"),o.a.createElement(u.NavItem,{Component:c.a,to:"/c-nav-item"},".c-nav-item"),o.a.createElement(u.NavItem,{Component:c.a,to:"/layout-object"},".o-layout")),o.a.createElement("nav",{className:"o-layout is-vertical"},o.a.createElement(u.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h4"},"Themes"),o.a.createElement(u.NavItem,{Component:c.a,to:"/aurora-theme"},"Aurora"),o.a.createElement(u.NavItem,{Component:c.a,to:"/civics360-theme"},"Civics360"),o.a.createElement(u.NavItem,{Component:c.a,to:"/citizen-theme"},"Citizen"),o.a.createElement(u.NavItem,{Component:c.a,to:"/institute-theme"},"Institute")))},d=function(e){var t=e.children,a=n.data;return o.a.createElement("div",{className:"o-layout is-vertical u-full-height"},o.a.createElement(f,{siteTitle:a.site.siteMetadata.title}),o.a.createElement("div",{className:"o-layout is-horizontal o-layout-item is-fill"},o.a.createElement(p,null),o.a.createElement("main",{className:"o-block is-large"},o.a.createElement("div",{className:"o-container"},t))),o.a.createElement("footer",{className:"o-block"},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};d.propTypes={children:i.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-38325eb8e6c9d8c7aa56.js.map