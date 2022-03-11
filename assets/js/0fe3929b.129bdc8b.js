"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9348],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.createElement(e,l({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,h=m["".concat(o,".").concat(p)]||m[p]||c[p]||l;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=h;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>l,default:()=>o});var a=n(52263),i=n(13919);function l(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var l=void 0===a?{}:a,o=l.forcePrependBaseUrl,r=void 0!==o&&o,d=l.absolute,s=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+m:m}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294);const i=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(87462),i=n(67294),l=n(72389),o=n(79443);const r=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var d=n(83039),s=n(86010);const m="tabItem_1uMI";function u(e){var t,n,a,l=e.lazy,o=e.block,u=e.defaultValue,p=e.values,c=e.groupId,h=e.className,x=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:x.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,d.duplicates)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(t=null!=u?u:null==(n=x.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=x[0])?void 0:a.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=r(),v=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,i.useState)(y),C=N[0],E=N[1],T=[],_=(0,d.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=c){var A=v[c];null!=A&&A!==C&&f.some((function(e){return e.value===A}))&&E(A)}var L=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==C&&(_(t),E(a),null!=c&&w(c,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":o},h)},f.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,s.default)("tabs__item",m,{"tabs__item--active":C===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:L,onClick:L},null!=n?n:t)}))),l?(0,i.cloneElement)(x.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,l.default)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},62146:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>m,toc:()=>u,default:()=>c});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),o=n(44996),r=(n(55064),n(58215),["components"]),d={id:"flexbox-yoga",title:"Layout System with Flexbox",hide_table_of_contents:!0},s=void 0,m={unversionedId:"mainconcepts/flexbox-yoga",id:"mainconcepts/flexbox-yoga",isDocsHomePage:!1,title:"Layout System with Flexbox",description:"Litho uses the Yoga library, which is an implementation of Flexbox, to measure and layout on-screen components. If you have used Flexbox on the web before then this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you of LinearLayout.",source:"@site/../docs/mainconcepts/flexbox-yoga.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/flexbox-yoga",permalink:"/docs/mainconcepts/flexbox-yoga",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/flexbox-yoga.mdx",tags:[],version:"current",frontMatter:{id:"flexbox-yoga",title:"Layout System with Flexbox",hide_table_of_contents:!0},sidebar:"mainSidebar",previous:{title:"useErrorBoundary",permalink:"/docs/mainconcepts/use-error-boundary"},next:{title:"Keys and Component Identity",permalink:"/docs/mainconcepts/coordinate-state-actions/keys-and-identity"}},u=[{value:"Flexbox Attributes",id:"flexbox-attributes",children:[{value:"Layout Direction",id:"layout-direction",children:[],level:3},{value:"Distribution Along the Main Axis",id:"distribution-along-the-main-axis",children:[],level:3},{value:"Distribution Along the Cross Axis",id:"distribution-along-the-cross-axis",children:[],level:3},{value:"Wrapping to Multiple Lines",id:"wrapping-to-multiple-lines",children:[{value:"Line Distribution",id:"line-distribution",children:[],level:4}],level:3}],level:2},{value:"Yoga Playground",id:"yoga-playground",children:[],level:2},{value:"Android Views vs. Litho with Yoga",id:"android-views-vs-litho-with-yoga",children:[{value:"Vertically Stacked Items",id:"vertically-stacked-items",children:[],level:3},{value:"Two Items Equally Stretched Horizontally",id:"two-items-equally-stretched-horizontally",children:[],level:3},{value:"Absolutely Positioned Items",id:"absolutely-positioned-items",children:[],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Litho uses the ",(0,l.mdx)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," library, which is an implementation of ",(0,l.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox"),", to measure and layout on-screen components. If you have used Flexbox on the web before then this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you of ",(0,l.mdx)("inlineCode",{parentName:"p"},"LinearLayout"),"."),(0,l.mdx)("h2",{id:"flexbox-attributes"},"Flexbox Attributes"),(0,l.mdx)("p",null,"This section shows how various attributes of FlexBox are used for on-screen layout."),(0,l.mdx)("h3",{id:"layout-direction"},"Layout Direction"),(0,l.mdx)("p",null,"Flexbox is a ",(0,l.mdx)("strong",{parentName:"p"},"one dimensional layout model"),", which means all elements are placed along one line.\nThis leads to the question, ",(0,l.mdx)("em",{parentName:"p"},'"Should your elements be laid out horizontally, or vertically?"'),"."),(0,l.mdx)("p",null,"The primary axis of layout is called the ",(0,l.mdx)("strong",{parentName:"p"},"Main Axis"),", and the direction perpendicular to it is called the ",(0,l.mdx)("strong",{parentName:"p"},"Cross Axis"),". For example, if you wanted your children to be laid out left to right, then the Main Axis would be the horizontal axis, and the Cross Axis would be the vertical axis."),(0,l.mdx)("p",null,"Litho uses special container components to define direction of the layout:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},"Component"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Main Axis"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Child Elements Layout"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"If Wrapping is Enabled"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Row")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"left to right"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the left of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Row (reverse)")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"right to left"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the right of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Column")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"top to bottom"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the top of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Column (reverse)")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"bottom to top"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the bottom of the container.")))),(0,l.mdx)("p",null,"The above container components are illustrated in the following diagram."),(0,l.mdx)("img",{src:(0,o.default)("/images/litho-layout-flex-direction.png"),alt:"flex-direction"}),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"(reverse)")," option is available through the ",(0,l.mdx)("inlineCode",{parentName:"p"},".reverse(boolean)")," method on ",(0,l.mdx)("inlineCode",{parentName:"p"},"Row"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"Column")," objects."))),(0,l.mdx)("h3",{id:"distribution-along-the-main-axis"},"Distribution Along the Main Axis"),(0,l.mdx)("p",null,"If your container has more space than is necessary along the Main Axis then the way children are positioned across that axis needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"justifyContent")," method specifies how the child elements are distributed across the Main Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," enum input, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - position children at the start of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - position children at the end of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - position children in the centre of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - Distribute extra space evenly between children."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - Distribute space evenly around each child. Note that adjacent children will have '2x' space between them (because each child has its own 'padding'."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_EVENLY")," - Distribute space evenly around all children.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," values are illustrated below."),(0,l.mdx)("img",{src:(0,o.default)("/images/litho-layout-justify-content.png"),alt:"justify-content"}),(0,l.mdx)("h3",{id:"distribution-along-the-cross-axis"},"Distribution Along the Cross Axis"),(0,l.mdx)("p",null,"If the elements in your line have different heights then the way they are positioned along the line needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignItems")," method specifies how the container's children are distributed across the Cross Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum input, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - stretch the size of all elements to completely fill the line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - align elements with the start of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - align elements with the end of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - align elements with the centre of the line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"BASELINE")," - align elements with respect to their baselines.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values are illustrated below."),(0,l.mdx)("img",{src:(0,o.default)("/images/litho-layout-align-items.png"),alt:"align-items"}),(0,l.mdx)("h3",{id:"wrapping-to-multiple-lines"},"Wrapping to Multiple Lines"),(0,l.mdx)("p",null,"In addition to the one-dimensional Flexbox laying out its children in one line, Flexboxes can also wrap their children onto multiple lines, much like text wraps. You specify wrapping behavior with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Wrap")," method, which takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," enum value that has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"NO_WRAP")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - there is no wrapping. Children are forced into a single line; if they cannot fit, they will overflow."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP")," - elements that overflow a single line will be moved to the next line. If the main axis is horizontal, then the next line will be ",(0,l.mdx)("strong",{parentName:"li"},"below")," the previous line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP_REVERSE")," - similar to ",(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP")," except the order of lines is reversed. If the main axis is horizontal, then the next line will be ",(0,l.mdx)("strong",{parentName:"li"},"above")," the previous line.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," values are illustrated below."),(0,l.mdx)("img",{src:(0,o.default)("/images/litho-layout-wrap.png"),alt:"wrap"}),(0,l.mdx)("h4",{id:"line-distribution"},"Line Distribution"),(0,l.mdx)("p",null,"If your container has extra space in the Cross Axis direction then the way lines are distributed in that space needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignContent")," method specifies how lines are distributed along the Cross Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum value, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - lines are stretched evenly to fill the available space in the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - lines are placed at the start of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - lines are placed at the end of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - lines are placed in the centre of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - evenly distributes extra space between all lines."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - pads lines above and below with extra space.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values, for Lines, are illustrated below."),(0,l.mdx)("img",{src:(0,o.default)("/images/litho-layout-align-content.png"),alt:"align-content"}),(0,l.mdx)("p",null,"For more information on specific Flexbox properties, refer to the ",(0,l.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga documentation")," or explore any web resource on how Flexbox functions."),(0,l.mdx)("h2",{id:"yoga-playground"},"Yoga Playground"),(0,l.mdx)("p",null,"You can also use the ",(0,l.mdx)("a",{parentName:"p",href:"https://yogalayout.com/playground"},"Yoga Playground")," to try different layout configurations and generate corresponding Litho code, as shown in the following screenshot."),(0,l.mdx)("img",{src:(0,o.default)("/images/yoga-playground.png"),alt:"Yoga Playground",className:"white-background"}),(0,l.mdx)("h2",{id:"android-views-vs-litho-with-yoga"},"Android Views vs. Litho with Yoga"),(0,l.mdx)("p",null,"This section lists typical layout configurations in Android and how they translate to Litho with Yoga."),(0,l.mdx)("h3",{id:"vertically-stacked-items"},"Vertically Stacked Items"),(0,l.mdx)("p",null,"The following table shows vertically stacked items for Android Views and Litho with Yoga."),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Android Views"),(0,l.mdx)("th",null,"Litho with Yoga")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical">\n    <TextView\n        android:id="@+id/text1"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 1" />\n    <TextView\n        android:id="@+id/text2"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 2" />\n</LinearLayout>\n'))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},'Column.create(c)\n    .child(\n        Text.create(c)\n            .text("Text 1"))\n    .child(\n        Text.create(c)\n            .text("Text 2"))\n    .build();\n'))))),(0,l.mdx)("h3",{id:"two-items-equally-stretched-horizontally"},"Two Items Equally Stretched Horizontally"),(0,l.mdx)("p",null,"To achieve an effect similar to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"LinearLayout")," with weights, Flexbox provides a concept called ",(0,l.mdx)("inlineCode",{parentName:"p"},"flexGrow(<weight>)"),", as featured in the following table."),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Android Views"),(0,l.mdx)("th",null,"Litho with Yoga")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="horizontal">\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/red"\n        android:layout_weight="1"/>\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/blue"\n        android:layout_weight="1"/>\n</LinearLayout>\n'))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"Row.create(c)\n    .child(\n        SolidColor.create(c)\n            .color(RED)\n            .flexGrow(1))\n    .child(\n        SolidColor.create(c)\n            .color(BLUE)\n            .flexGrow(1))\n    .build();\n"))))),(0,l.mdx)("h3",{id:"absolutely-positioned-items"},"Absolutely Positioned Items"),(0,l.mdx)("p",null,"If you'd like to overlay one view on top of the other, similar to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"FrameLayout"),", Flexbox can achieve that with ",(0,l.mdx)("inlineCode",{parentName:"p"},"positionType(ABSOLUTE)"),", as featured in the following table."),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Android Views"),(0,l.mdx)("th",null,"Litho with Yoga")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<FrameLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent">\n    <ImageView\n        android:layout_width="100dp"\n        android:layout_height="100dp"\n        android:src="@drawable/some_big_image"/>\n    <TextView\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Overlaid text"/>\n</FrameLayout>\n'))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},'Column.create(c)\n    .child(\n        Image.create(c)\n            .drawableRes(R.drawable.some_big_image)\n            .widthDip(100)\n            .heightDip(100))\n    .child(\n        Text.create(c)\n            .text("Overlaid text")\n            .positionType(ABSOLUTE))\n    .build();\n'))))))}c.isMDXComponent=!0}}]);