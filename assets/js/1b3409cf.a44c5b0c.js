"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8752,4957,8723,8e3,5730],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.createElement(e,r({},t,{components:n}))}},u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(87462),o=n(67294),r=n(72389),i=n(79443);const s=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(83039),c=n(86010);const d="tabItem_1uMI";function u(e){var t,n,a,r=e.lazy,i=e.block,u=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,l.duplicates)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),x=b.tabGroupChoices,w=b.setTabGroupChoices,k=(0,o.useState)(g),N=k[0],C=k[1],E=[],O=(0,l.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=x[m];null!=T&&T!==N&&v.some((function(e){return e.value===T}))&&C(T)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==N&&(O(t),C(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":i},f)},v.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.default)("tabs__item",d,{"tabs__item--active":N===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:P,onClick:P},null!=n?n:t)}))),r?(0,o.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,r.default)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},82924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(67294).createContext(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(82924);const r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(24544),i=n(7694),s=n(13618),l="0.41.1",c="0.41.2-SNAPSHOT",d="0.9.0",u="0.46.0",p=n(85350);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,d).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,u).trim(),m=(0,p.Z)().isDarkTheme?s.Z:i.Z;return o.createElement(r.ZP,(0,a.Z)({},r.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,i=e.getTokenProps;return o.createElement("pre",{className:t,style:n},a.map((function(e,t){return o.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.createElement("span",i({token:e,key:t}))})))})))}))}},46437:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=(n(55064),n(58215),n(75960),["components"]),s={id:"use-effect",title:"useEffect"},l=void 0,c={unversionedId:"mainconcepts/use-effect",id:"mainconcepts/use-effect",isDocsHomePage:!1,title:"useEffect",description:"useEffect is a hook that allows a component to perform side effects when it's attached and/or detached from the tree, or in response to changes in committed props or state.",source:"@site/../docs/mainconcepts/use-effect.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/use-effect",permalink:"/docs/mainconcepts/use-effect",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/use-effect.mdx",tags:[],version:"current",frontMatter:{id:"use-effect",title:"useEffect"},sidebar:"mainSidebar",previous:{title:"useState",permalink:"/docs/mainconcepts/use-state"},next:{title:"useRef",permalink:"/docs/mainconcepts/use-ref"}},d=[{value:"Performing side effects",id:"performing-side-effects",children:[],level:2},{value:"Side effects with dependencies",id:"side-effects-with-dependencies",children:[{value:"Cleanup",id:"cleanup",children:[],level:3},{value:"Unconditionally triggering side effects",id:"unconditionally-triggering-side-effects",children:[],level:3},{value:"Listening to prop/state changes",id:"listening-to-propstate-changes",children:[],level:3}],level:2},{value:"Known Problems",id:"known-problems",children:[{value:"<code>useEffect</code> in Components that can return null from <code>render</code>",id:"useeffect-in-components-that-can-return-null-from-render",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," is a hook that allows a component to perform side effects when it's attached and/or detached from the tree, or in response to changes in committed props or state."),(0,r.mdx)("p",null,"To familiarize yourself with the concept and rules for hooks, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page."),(0,r.mdx)("h2",{id:"performing-side-effects"},"Performing side effects"),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," lambdas and cleanup are both invoked on the main thread. This means it's safe to trigger animations or mutate the view hierarchy from it - however avoid expensive operations to keep your app responsive!"))),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," accepts an ",(0,r.mdx)("em",{parentName:"p"},"effect lambda")," to invoke when the component is attached to the tree. Besides performing a side-effect, like subscribing to a data store, the effect lambda should also return a ",(0,r.mdx)("em",{parentName:"p"},"cleanup lambda")," which will be invoked when the component no longer exists in the tree."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'useEffect {\n  println("I\'ve been attached!")\n  onCleanup { println("I\'ve been detached!") }\n}\n')),(0,r.mdx)("p",null,"Without any dependency args, these lambdas will be invoked ",(0,r.mdx)("strong",{parentName:"p"},"every time")," a new layout is committed that includes this component, with the previous cleanup lambda invoked before the next effect lambda."),(0,r.mdx)("p",null,"You can have a more fine-grained control of how often your effect and cleanup lambdas need to be executed using dependency args, as shown in the next section."),(0,r.mdx)("h2",{id:"side-effects-with-dependencies"},"Side effects with dependencies"),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Dependencies are checked for equivalence by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"equals"),". If any are not equal, the hook will be cleaned up and called again."))),(0,r.mdx)("p",null,"In addition, the effect lambda, ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," also accepts a var-arg list of ",(0,r.mdx)("em",{parentName:"p"},"dependencies"),". These dependencies are the props and/or state which affect the side effect performed. When dependencies are supplied, the effect lambda (along with the previous cleanup lambda if applicable) will only be invoked on initial attach and any commit in which any of those dependencies have changed."),(0,r.mdx)("p",null,"In the sample code below, when the first render is committed, Litho will invoke the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," lambda, subscribing to the current ",(0,r.mdx)("inlineCode",{parentName:"p"},"userId"),". On subsequent commits, ",(0,r.mdx)("strong",{parentName:"p"},"if ",(0,r.mdx)("inlineCode",{parentName:"strong"},"userId")," or ",(0,r.mdx)("inlineCode",{parentName:"strong"},"store")," changed"),", Litho will invoke the cleanup callback to unsubscribe the existing subscription (if there is one) and then subscribe to the current ",(0,r.mdx)("inlineCode",{parentName:"p"},"userId")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"store"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'class UserStatusComponent(private val userId: Int, private val store: StatusStore) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val status = useState { Status.PENDING }\n    val subscription = useRef<Subscription?> { null }\n\n    useEffect(userId, store) {\n      subscription.value = store.subscribe(userId) { newStatus -> status.update(newStatus) }\n      onCleanup { store.unsubscribe(subscription.value) }\n    }\n\n    return Text(text = "$userId is ${status.value}")\n  }\n}\n')),(0,r.mdx)("p",null,"In general, your dependencies should include ",(0,r.mdx)("strong",{parentName:"p"},"all")," the props/state read by you useEffect/cleanup calls. If they don't, you risk incorrect behavior. For example, in the above component, if ",(0,r.mdx)("inlineCode",{parentName:"p"},"userId")," hadn't been specified, then if the component received a different ",(0,r.mdx)("inlineCode",{parentName:"p"},"userId")," as a prop, it would remain subscribed to the wrong ",(0,r.mdx)("inlineCode",{parentName:"p"},"userId"),"."),(0,r.mdx)("h3",{id:"cleanup"},"Cleanup"),(0,r.mdx)("p",null,"The return value of the lambda passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," is a cleanup method. In it, you should perform any cleanup necessary to undo and side-effects done in the main body of that ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," call, for example canceling a subscription to a data store, or canceling an animation. If you don't have any cleanup you need to do, you can return ",(0,r.mdx)("inlineCode",{parentName:"p"},"null")," instead, i.e.:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'useEffect {\n  Toast.makeText(androidContext, "Component rendered", Toast.LENGTH_SHORT).show()\n  null // return null, no cleanup necessary\n}\n')),(0,r.mdx)("h3",{id:"unconditionally-triggering-side-effects"},"Unconditionally triggering side effects"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," can be called without dependencies. In that case on each new commit, the cleanup for the previous ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," call will be invoked, followed by the current useEffect call."),(0,r.mdx)("h3",{id:"listening-to-propstate-changes"},"Listening to prop/state changes"),(0,r.mdx)("p",null,"An important functionality that ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," adds is the ability to trigger code when props/state change. For example, this can be used to trigger an animation as a side-effect whenever some prop changes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt",start:"start_example",end:"end_example"},'class AnimatingCounter(private val count: Int) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val animation = useRef<AnimatedAnimation?> { null }\n    val translationY = useBinding(0f)\n\n    useEffect(count) {\n      // Animate the text to a Y-offset based on count\n      val newAnimation = Animated.spring(translationY, to = count * 10.dp.toPixels().toFloat())\n      newAnimation.start()\n      animation.value = newAnimation\n\n      onCleanup { animation.value?.cancel() }\n    }\n\n    return Text(style = Style.translationY(translationY), text = "$count", textSize = 24.sp)\n  }\n}\n')),(0,r.mdx)("h2",{id:"known-problems"},"Known Problems"),(0,r.mdx)("h3",{id:"useeffect-in-components-that-can-return-null-from-render"},(0,r.mdx)("inlineCode",{parentName:"h3"},"useEffect")," in Components that can return null from ",(0,r.mdx)("inlineCode",{parentName:"h3"},"render")),(0,r.mdx)("p",null,"If you specify an effect via ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," and then return null from ",(0,r.mdx)("inlineCode",{parentName:"p"},"render")," - or render to a child which returns null from render - the effect won't run."),(0,r.mdx)("p",null,"Until this is fixed, the workaround is to return an empty ",(0,r.mdx)("inlineCode",{parentName:"p"},"Row()")," from render instead of null."))}p.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>f,lG:()=>i});var a=n(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var r=n(67294),i={Prism:a.default,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var c=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==o&&(r.style=void 0!==r.style?l({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var i=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,i=l({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,i=0,s=[],l=[s];i>-1;){for(;(r=a[i]++)<o[i];){var p=void 0,m=t[i],f=n[i][r];if("string"==typeof f?(m=i>0?m:["plain"],p=f):(m=u(m,f.type),f.alias&&(m=u(m,f.alias)),p=f.content),"string"==typeof p){var h=p.split(c),v=h.length;s.push({types:m,content:h[0]});for(var y=1;y<v;y++)d(s),l.push(s=[]),s.push({types:m,content:h[y]})}else i++,t.push(m),n.push(p),a.push(0),o.push(p.length)}i--,t.pop(),n.pop(),a.pop(),o.pop()}return d(s),l}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);