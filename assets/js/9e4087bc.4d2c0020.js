"use strict";(self.webpackChunkTIL=self.webpackChunkTIL||[]).push([[3608,9514,9153],{3012:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var c=n(7294),a=n(6125),r=n(6742),l=n(4973);function o(e){var t=e.year,n=e.posts;return c.createElement(c.Fragment,null,c.createElement("h3",null,t),c.createElement("ul",null,n.map((function(e){return c.createElement("li",{key:e.metadata.date},c.createElement(r.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function i(e){var t=e.years;return c.createElement("section",{className:"margin-vert--lg"},c.createElement("div",{className:"container"},c.createElement("div",{className:"row"},t.map((function(e,t){return c.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},c.createElement(o,e))})))))}function s(e){var t,n,r=e.archive,o=(0,l.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,l.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),u=(t=r.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],c=e.get(n)||[];return e.set(n,[t].concat(c))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return c.createElement(a.Z,{title:o,description:s},c.createElement("header",{className:"hero hero--primary"},c.createElement("div",{className:"container"},c.createElement("h1",{className:"hero__title"},o),c.createElement("p",{className:"hero__subtitle"},s))),c.createElement("main",null,u.length>0&&c.createElement(i,{years:u})))}},1214:function(e,t,n){n.d(t,{Z:function(){return s}});var c=n(7462),a=n(7294),r=n(3773),l=n(2389),o=n(6010),i=(0,a.memo)((function(e){var t=e.className,n=e.styles,c=e.icons,r=e.checked,l=e.disabled,i=e.onChange,s=(0,a.useState)(r),u=s[0],m=s[1],d=(0,a.useState)(!1),h=d[0],g=d[1],f=(0,a.useRef)(null);return a.createElement("div",{className:(0,o.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":h,"toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=f.current)?void 0:e.click()}},a.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},c.unchecked),a.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},c.checked),a.createElement("input",{ref:f,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return m(!u)},onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=f.current)||t.click())}}))}));function s(e){var t=(0,r.LU)().colorMode.switchConfig,n=t.darkIcon,o=t.darkIconStyle,s=t.lightIcon,u=t.lightIconStyle,m=(0,l.Z)();return a.createElement(i,(0,c.Z)({disabled:!m,styles:{unchecked:u,checked:o},icons:{unchecked:s,checked:n}},e))}i.displayName="ToggleMemo"}}]);