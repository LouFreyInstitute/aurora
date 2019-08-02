(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(197),o=a(195);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Input"}),r.a.createElement("h1",{className:"c-heading is-large"},"Input"),r.a.createElement("p",null,"Form field used for a single line of short text."),r.a.createElement("div",{className:"o-block section"},r.a.createElement("div",{className:"o-container is-small",style:{margin:"2rem auto"}},r.a.createElement("h1",{className:"c-heading is-small"},"Create an Account"),r.a.createElement("p",null,"Enter your information to get started!"),r.a.createElement("div",{className:"o-grid"},r.a.createElement("div",{className:"o-grid-column is-1/2"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"c-label",htmlFor:"firstName"},"First Name"),r.a.createElement("input",{className:"input",id:"firstName",name:"firstName",type:"text"}))),r.a.createElement("div",{className:"o-grid-column is-1/2"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"c-label",htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{className:"input is-error",id:"lastName",name:"lastName",type:"text",defaultValue:"This is an invalid value."}),r.a.createElement("div",{className:"c-input-helper"},"Please use letters only.")))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"c-label",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"input",id:"email",name:"email",type:"email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"c-label",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"input is-error",id:"password",name:"password",type:"password",defaultValue:"It's a secret!"}),r.a.createElement("div",{className:"c-input-helper"},"Password not ridiculous enough.")))))}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext("Aurora");t.a=r},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Nav",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"NavBar",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"NavItem",{enumerable:!0,get:function(){return o.default}});var n=i(a(191)),r=i(a(192)),l=i(a(193)),o=i(a(194));function i(e){return e&&e.__esModule?e:{default:e}}},188:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora"}}}}},190:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),i=a(82),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},191:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(183)),r=o(a(184)),l=o(a(185));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t,a,r,o=e.className,c=e.color,u=s(e,["className","color"]),m=(0,n.default)("c-button",(t={},a="is-".concat(c),r=c,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t),o);return l.default.createElement("button",i({className:m},u,{type:"button"}))}c.propTypes={className:r.default.string,color:r.default.string},c.defaultProps={className:"",color:void 0};var u=c;t.default=u},192:function(e,t,a){"use strict";a(198),a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(183)),r=o(a(184)),l=o(a(185));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.fill,r=s(e,["className","fill"]),o=(0,n.default)("o-layout-item","c-nav",{"is-fill":a},t);return l.default.createElement("nav",i({className:o},r))}c.propTypes={className:r.default.string,fill:r.default.bool},c.defaultProps={className:"",fill:!1};var u=c;t.default=u},193:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(183)),r=o(a(184)),l=o(a(185));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e){var t,a=e.className,r=e.color,o=e.isFixed,u=c(e,["className","color","isFixed"]),m=(0,n.default)("o-layout","c-nav-bar",(s(t={},"is-".concat(r),r),s(t,"is-fixed",o),t),a);return l.default.createElement("div",i({className:m},u))}u.propTypes={className:r.default.string,color:r.default.string,isFixed:r.default.bool},u.defaultProps={className:"",color:void 0,isFixed:!1};var m=u;t.default=m},194:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(45),a(20),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(183)),r=o(a(184)),l=o(a(185));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function c(e){var t=e.className,a=e.Component,r=s(e,["className","Component"]),o=(0,n.default)("c-nav-item",t);return l.default.createElement(a,i({className:o},r))}c.propTypes={className:r.default.string,Component:r.default.elementType},c.defaultProps={className:"",Component:"a"};var u=c;t.default=u},195:function(e,t,a){"use strict";var n=a(196),r=a(0),l=a.n(r),o=a(11),i=a.n(o),s=a(199),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,s=t||i.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=u},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Aurora",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@mikebarnhardt"}}}}},197:function(e,t,a){"use strict";var n=a(189),r=a(0),l=a.n(r),o=a(11),i=a.n(o),s=a(186),c=a(58),u=a.n(c);a(188),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func;var m=a(187);function d(e){var t=e.changeMode,a=e.changeTheme,n=e.dark,r=e.siteTitle,o=e.theme;return l.a.createElement(m.NavBar,{className:"is-top",color:"brand"},l.a.createElement(m.Nav,null,l.a.createElement(m.NavItem,{Component:"h1",className:"c-heading is-tiny"},l.a.createElement(u.a,{to:"/"},r))),l.a.createElement(m.Nav,{fill:!0},l.a.createElement("select",{name:"theme",value:o,onChange:function(e){var t=e.target;return a(t.value)}},l.a.createElement("option",null,"Aurora"),l.a.createElement("option",null,"Civics360")),l.a.createElement("label",{htmlFor:"dark"},l.a.createElement("input",{checked:n,id:"dark",name:"dark",type:"checkbox",onChange:t}),"Dark")),l.a.createElement(m.Nav,null,l.a.createElement(m.NavItem,{href:"https://github.com/loufreyinstitute/aurora"},"View Code on GitHub")))}d.propTypes={siteTitle:i.a.string},d.defaultProps={siteTitle:""};var f=d;function p(e){Object(r.useContext)(s.a);return l.a.createElement("div",{className:"o-block "+e.className+" sidebar"},l.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},l.a.createElement(m.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h1"},"Components"),l.a.createElement(m.NavItem,{Component:u.a,to:"/button-component"},"Button")),l.a.createElement("nav",{className:"o-layout is-vertical u-margin-bottom"},l.a.createElement(m.NavItem,{className:"c-heading is-tiny u-margin-none",Component:"h1"},"Elements"),l.a.createElement(m.NavItem,{Component:u.a,to:"/button-element"},".c-button"),l.a.createElement(m.NavItem,{Component:u.a,to:"/card-element"},".c-card"),l.a.createElement(m.NavItem,{Component:u.a,to:"/notification-element"},".c-notification"),l.a.createElement(m.NavItem,{Component:u.a,to:"/tag-element"},l.a.createElement("div",{className:"o-layout"},l.a.createElement("div",{className:"o-layout-item is-fill"},".c-tag"),l.a.createElement("div",null,l.a.createElement("span",{className:"tag is-brand"},"New")))),l.a.createElement(m.NavItem,{Component:u.a,to:"/input-element"},".input")))}p.propTypes={className:i.a.string},p.defaultProps={className:""};var v=p,b=function(e){var t=e.children,a=e.size,o=n.data,i=Object(r.useState)("Aurora"),c=i[0],u=i[1],m=Object(r.useState)(!1),d=m[0],p=m[1];return l.a.createElement(s.a.Provider,{value:c},l.a.createElement("div",{className:"t-"+c.toLowerCase()+" has-overrides "+(d?"is-dark":"")+" o-layout is-vertical u-full-height"},l.a.createElement(f,{changeMode:function(){return p(function(e){return!e})},changeTheme:u,dark:d,siteTitle:o.site.siteMetadata.title,theme:c}),l.a.createElement("div",{className:"o-layout is-horizontal o-layout-item is-fill"},l.a.createElement(v,null),l.a.createElement("main",{className:"o-block is-large o-layout is-vertical o-layout-item is-fill"},l.a.createElement("div",{className:"o-layout-item is-fill u-margin-bottom+ s-prose"},l.a.createElement("div",{className:"o-container is-"+a},t)),l.a.createElement("hr",{className:"divider"}),l.a.createElement("footer",{className:"u-font-size- s-prose"},l.a.createElement("div",{className:"o-layout"},l.a.createElement("div",null,"© ",(new Date).getFullYear(),","," ",l.a.createElement("a",{href:"http://loufreyinstitute.org"},"Lou Frey Institute")," ","at the University of Central Florida."),l.a.createElement("div",{className:"o-layout-item is-fill"}),l.a.createElement("div",null,"Built with ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),".")))))))};b.propTypes={children:i.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-input-element-js-cbf72cf3a612dfae3582.js.map