"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3126],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,y=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?a.createElement(y,o(o({ref:n},l),{},{components:t})):a.createElement(y,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17929:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],c={sidebar_label:"1. Update Candy Machine"},p="Update Candy Machine",d={unversionedId:"candy-machine-v1/update-cm",id:"candy-machine-v1/update-cm",title:"Update Candy Machine",description:"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use Candy Machine v2 instead.",source:"@site/docs/candy-machine-v1/02-update-cm.md",sourceDirName:"candy-machine-v1",slug:"/candy-machine-v1/update-cm",permalink:"/candy-machine-v1/update-cm",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v1/02-update-cm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"1. Update Candy Machine"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/candy-machine-v1/introduction"},next:{title:"2. Mint Tokens",permalink:"/candy-machine-v1/mint-tokens"}},l=[],s={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update-candy-machine"},"Update Candy Machine"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use ",(0,i.kt)("a",{parentName:"p",href:"../candy-machine-v2/introduction"},"Candy Machine v2")," instead."))),(0,i.kt)("p",null,"To update an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv1"),", type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},'ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts \\\n  update_candy_machine \\\n  --env mainnet-beta \\\n  --keypair ~/.config/solana/wallet.json \\\n  -p 1 \\\n  --date "10 Jan 2022 00:00:00 GMT"\n')),(0,i.kt)("p",null,"Your keypair might have a different name, but it always ends with the .json extension. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," at the end stands for price. "),(0,i.kt)("p",null,"Make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"--date")," option is set to when you want your mint to begin. Setting the date in the past will allow anyone to mint your NFTs. "),(0,i.kt)("p",null,"Your result should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wallet public key: <public key>\n - updated startDate timestamp: <timestamp>\n - updated price: <price>\nupdate_candy_machine finished <transaction_id>\n")),(0,i.kt)("p",null,"You can look up your transaction id by going to the ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/"},"Solana Explorer"),". Once there, paste in your ",(0,i.kt)("inlineCode",{parentName:"p"},"<transaction_id>")," into the search bar."))}u.isMDXComponent=!0}}]);