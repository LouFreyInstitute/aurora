(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(197),l=a(195);t.default=function(){return r.a.createElement(o.a,{size:"large"},r.a.createElement(l.a,{title:"Home"}),r.a.createElement("div",{className:"o-container u-margin-bottom+"},r.a.createElement("h1",{className:"c-heading is-large"},"Aurora"),r.a.createElement("p",null,"Aurora is a collection of CSS patterns, React components, icons, and color themes designed for use with"," ",r.a.createElement("a",{href:"http://loufreyinstitute.org",rel:"noopener noreferrer",target:"_blank"},"Lou Frey Institute's")," ","various products."),r.a.createElement("p",null,"It was born out of exploration of various frameworks and technologies, which always seemed to be over-engineered or bloated, and a want to be as minimalist as possible.")),r.a.createElement("div",{className:"o-layout is-horizontal section-group"},r.a.createElement("div",{className:"o-block is-large o-layout-item is-fill section is-rounded is-brand"},r.a.createElement("h1",{className:"c-heading is-large"},"Aurora Core"),r.a.createElement("p",null,"These form the foundation of Aurora."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Elements"),r.a.createElement("p",null,"CSS classes written in SCSS that are the foundation of Aurora."," ",r.a.createElement("em",null,"Elements")," can be used independently by just importing the stylesheet."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Themes"),r.a.createElement("p",null,r.a.createElement("em",null,"Themes")," override the variables found in ",r.a.createElement("em",null,"Elements"),". Themes are only designed to be imported before ",r.a.createElement("em",null,"Elements")," in order to customize the design of Aurora."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Palettes"),r.a.createElement("p",null,"Color schemes that can be consumed by ",r.a.createElement("em",null,"Themes"),". They can be imported separately into your projects if you just want to use the colors.")),r.a.createElement("div",{className:"o-block is-large o-layout-item is-fill section is-rounded"},r.a.createElement("h1",{className:"c-heading is-large"},"Aurora Extras"),r.a.createElement("p",null,"Bonuses for your app development."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Components"),r.a.createElement("p",null,"React components that use ",r.a.createElement("em",null,"Elements")," classes for styling. You can also supply your own ",r.a.createElement("code",null,"className")," property."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Icons"),r.a.createElement("p",null,"Custom vector SVG icons to be used in ",r.a.createElement("em",null,"Components"),". It should be possible to copy the SVG paths and inline them independently, though."),r.a.createElement("h2",{className:"c-heading is-small"},"Aurora Avatars"),r.a.createElement("p",null,"A framework for building user avatars. A set of SVG graphics that are customizable by the user. Your users will enjoy creating an avatar that suits their personality."))))}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext("Aurora");t.a=r},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Nav",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"NavBar",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NavItem",{enumerable:!0,get:function(){return l.default}});var n=s(a(191)),r=s(a(192)),o=s(a(193)),l=s(a(194));function s(e){return e&&e.__esModule?e:{default:e}}},188:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora"}}}}},190:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),s=a(82),i=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},191:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t,a,r,l=e.className,c=e.color,u=i(e,["className","color"]),m=(0,n.default)("c-button",(t={},a="is-".concat(c),r=c,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t),l);return o.default.createElement("button",s({className:m},u,{type:"button"}))}c.propTypes={className:r.default.string,color:r.default.string},c.defaultProps={className:"",color:void 0};var u=c;t.default=u},192:function(e,t,a){"use strict";a(198),a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.fill,r=i(e,["className","fill"]),l=(0,n.default)("o-layout-item","c-nav",{"is-fill":a},t);return o.default.createElement("nav",s({className:l},r))}c.propTypes={className:r.default.string,fill:r.default.bool},c.defaultProps={className:"",fill:!1};var u=c;t.default=u},193:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e){var t,a=e.className,r=e.color,l=e.isFixed,u=c(e,["className","color","isFixed"]),m=(0,n.default)("o-layout","c-nav-bar",(i(t={},"is-".concat(r),r),i(t,"is-fixed",l),t),a);return o.default.createElement("div",s({className:m},u))}u.propTypes={className:r.default.string,color:r.default.string,isFixed:r.default.bool},u.defaultProps={className:"",color:void 0,isFixed:!1};var m=u;t.default=m},194:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(183)),r=l(a(184)),o=l(a(185));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.Component,r=i(e,["className","Component"]),l=(0,n.default)("c-nav-item",t);return o.default.createElement(a,s({className:l},r))}c.propTypes={className:r.default.string,Component:r.default.elementType},c.defaultProps={className:"",Component:"a"};var u=c;t.default=u},195:function(e,t,a){"use strict";var n=a(196),r=a(0),o=a.n(r),l=a(11),s=a.n(l),i=a(199),c=a.n(i);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,s=n.data.site,i=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:l},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:i}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@mikebarnhardt"}}}}},197:function(e,t,a){"use strict";var n=a(189),r=a(0),o=a.n(r),l=a(11),s=a.n(l),i=a(186),c=a(58),u=a.n(c);a(188),o.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func;var m=a(187);function d(e){var t=e.changeMode,a=(e.changeTheme,e.dark),n=e.siteTitle,r=e.theme;return o.a.createElement(m.NavBar,{className:"is-top",color:"brand"},o.a.createElement(m.Nav,null,o.a.createElement(m.NavItem,{Component:"h1",className:"c-heading is-tiny"},o.a.createElement(u.a,{to:"/"},n))),o.a.createElement(m.Nav,{fill:!0},o.a.createElement("select",{name:"theme",value:r,onChange:function(e){var t=e.target;return window.__setTheme(t.value)}},o.a.createElement("option",null,"Aurora"),o.a.createElement("option",null,"Civics360")),o.a.createElement("label",{htmlFor:"dark"},o.a.createElement("input",{checked:a,id:"dark",name:"dark",type:"checkbox",onChange:t}),"Dark")),o.a.createElement(m.Nav,null,o.a.createElement(m.NavItem,{href:"https://github.com/loufreyinstitute/aurora"},"View Code on GitHub")))}d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var f=d;function p(e){Object(r.useContext)(i.a);return o.a.createElement("div",{className:"o-block "+e.className+" sidebar"},o.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},o.a.createElement(m.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h1"},"Components"),o.a.createElement(m.NavItem,{Component:u.a,to:"/button-component"},"Button")),o.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},o.a.createElement(m.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h1"},"Elements"),o.a.createElement(m.NavItem,{Component:u.a,to:"/button-element"},".c-button"),o.a.createElement(m.NavItem,{Component:u.a,to:"/card-element"},".c-card"),o.a.createElement(m.NavItem,{Component:u.a,to:"/notification-element"},".c-notification"),o.a.createElement(m.NavItem,{Component:u.a,to:"/tag-element"},o.a.createElement("div",{className:"o-layout"},o.a.createElement("div",{className:"o-layout-item is-fill"},".c-tag"),o.a.createElement("div",null,o.a.createElement("span",{className:"tag is-brand"},"New")))),o.a.createElement(m.NavItem,{Component:u.a,to:"/input-element"},".input")))}p.propTypes={className:s.a.string},p.defaultProps={className:""};var h=p,v=function(e){var t=e.children,a=e.size,l=n.data,s=Object(r.useState)(function(){return"undefined"==typeof window?"Aurora":window.__theme}),c=s[0],u=s[1],m=Object(r.useState)(!1),d=m[0],p=m[1];return o.a.createElement(i.a.Provider,{value:c},o.a.createElement("div",{className:"t-"+c.toLowerCase()+" has-overrides "+(d?"is-dark":"")+" o-layout is-vertical u-full-height"},o.a.createElement(f,{changeMode:function(){return p(function(e){return!e})},changeTheme:u,dark:d,siteTitle:l.site.siteMetadata.title,theme:c}),o.a.createElement("div",{className:"o-layout is-horizontal o-layout-item is-fill"},o.a.createElement(h,null),o.a.createElement("main",{className:"o-block is-large o-layout is-vertical o-layout-item is-fill"},o.a.createElement("div",{className:"o-layout-item is-fill u-margin-bottom+ s-prose"},o.a.createElement("div",{className:"o-container is-"+a},t)),o.a.createElement("hr",{className:"divider"}),o.a.createElement("footer",{className:"u-font-size- s-prose"},o.a.createElement("div",{className:"o-layout"},o.a.createElement("div",null,"© ",(new Date).getFullYear(),","," ",o.a.createElement("a",{href:"http://loufreyinstitute.org"},"Lou Frey Institute")," ","at the University of Central Florida."),o.a.createElement("div",{className:"o-layout-item is-fill"}),o.a.createElement("div",null,"Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),".")))))))};v.propTypes={children:s.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-index-js-643bae06dcba4f0b1a54.js.map