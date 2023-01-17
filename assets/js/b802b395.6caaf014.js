"use strict";(self.webpackChunkTIL=self.webpackChunkTIL||[]).push([[8177],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return t?r.createElement(f,u(u({ref:n},l),{},{components:t})):r.createElement(f,u({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8787:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),u=["components"],i={},p="\ud568\uc218",c={unversionedId:"frontend/TypeScript/02-03",id:"frontend/TypeScript/02-03",isDocsHomePage:!1,title:"\ud568\uc218",description:"\ud568\uc218\uc758 \ud0c0\uc785 \uc815\uc758",source:"@site/docs/frontend/02_TypeScript/02-03.md",sourceDirName:"frontend/02_TypeScript",slug:"/frontend/TypeScript/02-03",permalink:"/TIL/docs/frontend/TypeScript/02-03",tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"\uae30\ubcf8 \ud0c0\uc785",permalink:"/TIL/docs/frontend/TypeScript/02-02"},next:{title:"\uc778\ud130\ud398\uc774\uc2a4",permalink:"/TIL/docs/frontend/TypeScript/02-04"}},l=[{value:"\ud568\uc218\uc758 \ud0c0\uc785 \uc815\uc758",id:"\ud568\uc218\uc758-\ud0c0\uc785-\uc815\uc758",children:[],level:2},{value:"\ud0c0\uc785 \uc120\uc5b8",id:"\ud0c0\uc785-\uc120\uc5b8",children:[],level:2},{value:"\ud568\uc218\uc758 \uc778\uc790",id:"\ud568\uc218\uc758-\uc778\uc790",children:[],level:2}],m={toc:l};function s(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ud568\uc218"},"\ud568\uc218"),(0,o.kt)("h2",{id:"\ud568\uc218\uc758-\ud0c0\uc785-\uc815\uc758"},"\ud568\uc218\uc758 \ud0c0\uc785 \uc815\uc758"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \ud30c\ub77c\ubbf8\ud130(\ub9e4\uac1c\ubcc0\uc218) \ud0c0\uc785"),(0,o.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785"),(0,o.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \uad6c\uc870 \ud0c0\uc785")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\ud0c0\uc785-\uc120\uc5b8"},"\ud0c0\uc785 \uc120\uc5b8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// javascript\n\nfunction sum(a, b) {\n  return a + b;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// typescript\n\nfunction sum(a: number, b: number): number {\n  return a + b;\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"return\ud560 \uc790\ub8cc\uac00 \uc5c6\ub294 \uacbd\uc6b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," \uc0ac\uc6a9"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function myfung(x: number): void {\n  return x * 2; // error\n}\n")))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\ud568\uc218\uc758-\uc778\uc790"},"\ud568\uc218\uc758 \uc778\uc790"),(0,o.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ud568\uc218\uc758 \uc778\uc790\ub294 \ubaa8\ub450 \ud544\uc218 \uac12\uc774\uba70 \ucd94\uac00\ub85c \uc778\uc790\ub97c \ubc1b\uc744 \uc218\ub3c4 \uc5c6\ub2e4. \ub530\ub77c\uc11c, \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc124\uc815\ud558\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\ub098 ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\uc774\ub77c\ub3c4 \uc778\uc790\ub85c \ub118\uaca8\uc57c\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function sum(a: number, b: number): number {\n  return a + b;\n}\nsum(10, 20); // 30\nsum(10, 20, 30); // error, too many parameters\nsum(10); // error, too few parameters\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"\uc815\uc758\ub41c \ub9e4\uac1c\ubcc0\uc218\uc758 \uac1c\uc218\ub9cc\ud07c \ub118\uae30\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub3c4\ub85d \uc124\uc815\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc815\uc758\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function sum(a: number, b?: number): number {\n  return a + b;\n}\nsum(10, 20); // 30\nsum(10, 20, 30); // error, too many parameters\nsum(10); // 10\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"\ub9e4\uac1c\ubcc0\uc218 \ucd08\uae30\ud654\ub294 ES6 \ubb38\ubc95\uacfc \ub3d9\uc77c\ud558\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'function sum(a: number, b = "100"): number {\n  return a + b;\n}\nsum(10, undefined); // 110\nsum(10, 20, 30); // error, too many parameters\nsum(10); // 110\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"rest \ubb38\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function sum(a: number, ...nums: number[]): number {\n  const totalOfNums = 0;\n  for (let key in nums) {\n    totalOfNums += nums[key];\n  }\n  return a + totalOfNums;\n}\n")))}s.isMDXComponent=!0}}]);