(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-250e2986"],{"159b":function(e,t,a){var o=a("da84"),r=a("fdbc"),i=a("17c2"),l=a("9112");for(var n in r){var c=o[n],s=c&&c.prototype;if(s&&s.forEach!==i)try{l(s,"forEach",i)}catch(d){s.forEach=i}}},"17c2":function(e,t,a){"use strict";var o=a("b727").forEach,r=a("a640"),i=r("forEach");e.exports=i?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},"5f67":function(e,t,a){},a640:function(e,t,a){"use strict";var o=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&o((function(){a.call(null,t||function(){throw 1},1)}))}},ae8d:function(e,t,a){"use strict";var o=a("7a23"),r={class:" card"},i={class:"card-body"},l={key:0},n={class:"mb-2"},c={class:"text-dark text-sm opacity-5 text-decoration-line-through ms-2"},s={key:1,class:"d-flex align-items-center justify-content-between"},d={class:"card-title mb-3"},u={class:"text-light text-decoration-line-through ms-2"},p={class:"d-flex"},f=Object(o["createVNode"])("a",{href:"",class:"border rounded-circle  p-2  me-4 icon-hover"},[Object(o["createVNode"])("span",{class:"material-icons"}," favorite_border ")],-1),b={key:0,class:"add-loading border rounded-circle  p-2 "},v=Object(o["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark",role:"status"},[Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),h={class:"position-relative"},m=Object(o["createVNode"])("span",{class:"material-icons"}," shopping_cart ",-1);function y(e,t,a,y,g,O){var j=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(j,{class:["card-img ",{"card-img-rotate":!a.cartCard,"card-small-img":a.cartCard}],onMouseover:O.changeImg,onMouseleave:O.recoveryImg,to:"/product/".concat(a.product.id)},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:a.product.imageUrl,class:{"show-card-img":g.showFirstImg},alt:""},null,10,["src"]),a.product.imagesUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,class:{"show-card-img":!g.showFirstImg},src:a.product.imagesUrl[0],alt:""},null,10,["src"])):Object(o["createCommentVNode"])("",!0)]})),_:1},8,["class","onMouseover","onMouseleave","to"]),Object(o["createVNode"])("div",i,[a.cartCard?(Object(o["openBlock"])(),Object(o["createBlock"])("div",l,[Object(o["createVNode"])("p",n,[Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(a.product.price),1),Object(o["createVNode"])("span",c,"NT$"+Object(o["toDisplayString"])(a.product.origin_price),1)]),Object(o["createVNode"])("div",{class:"btn btn-sm btn-secondary text-white secondary-hover",onClick:t[1]||(t[1]=function(e){return O.addCart(a.product.id)})}," 加入購物車 ")])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",s,[Object(o["createVNode"])("div",null,[Object(o["createVNode"])("h3",d,[Object(o["createVNode"])(j,{to:"/product/".concat(a.product.id),class:{"text-dark ":a.cartCard,"text-base":a.cartCard}},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(a.product.title),1)]})),_:1},8,["to","class"])]),Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(a.product.price),1),Object(o["createVNode"])("span",u,"NT$"+Object(o["toDisplayString"])(a.product.origin_price),1)])]),Object(o["createVNode"])("div",p,[f,g.loading?(Object(o["openBlock"])(),Object(o["createBlock"])("div",b,[v])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",h,[g.loading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"",class:" border rounded-circle  p-2  icon-hover",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(e){return O.addCart(a.product.id)}),["prevent"]))},[m]))])])]))])])}a("99af");var g={props:{product:Object,cartCard:Boolean},data:function(){return{showFirstImg:!0,loading:!1}},inject:["emitter"],methods:{changeImg:function(){this.product.imagesUrl&&(this.showFirstImg=!1)},recoveryImg:function(){this.showFirstImg=!0},addCart:function(e){var t=this;this.loading=!0;var a={data:{product_id:e,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),a).then((function(e){console.log(e),e.data.success?(t.emitter.emit("push-message",{type:"success",message:e.data.message}),t.emitter.emit("update-cart"),t.loading=!1):(t.emitter.emit("push-message",{type:"error",message:e.data.message}),t.loading=!1)})).catch((function(e){console.log(e)}))}}};g.render=y;t["a"]=g},d2f1:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),r={class:"container pt-15"},i=Object(o["createVNode"])("div",{class:"img-overlay"},null,-1),l={class:"row g-5"},n={class:"col-6"},c={class:"col-5 offset-1"},s={class:"text-light mb-3"},d={class:"text-3xl mb-7"},u=Object(o["createVNode"])("ul",{class:"mb-7 text-sm text-light point"},[Object(o["createVNode"])("li",{class:"mb-2"},"商品材質：鋯石 / 銅 (保色電鍍)"),Object(o["createVNode"])("li",null,"SIZE長寬約：7 cm x 0.9 cm")],-1),p={class:"fw-bold text-xl mb-7"},f={class:"text-light text-lg fw-normal text-decoration-line-through ms-4"},b={key:0,class:"text-sm text-primary opacity-5 mb-7"},v={class:"w-75 btn btn-secondary text-white shadow secondary-hover mb-7"},h=Object(o["createVNode"])("span",{class:"material-icons"}," shopping_cart ",-1),m=Object(o["createTextVNode"])("加入購物車"),y=Object(o["createStaticVNode"])('<a href="" class="d-flex mb-7"><span class="material-icons me-3"> favorite_border </span>加入收藏清單</a><ul class="border-start border-3 border-secondary text-sm ps-5"><li class="mb-2"><span class="fw-bold text-primary opacity-8">限時活動</span> 全館$101免運 </li><li><span class="fw-bold text-primary opacity-8">夏季優惠</span> 全館單件9/兩件85/三件8折 </li></ul>',2),g={key:0,class:"container mb-17"},O=Object(o["createVNode"])("p",{class:"text-3xl text-center border-bottom border-light pb-4 mb-8"},"相關產品",-1),j={class:"row row-cols-4 g-5"};function w(e,t,a,w,S,N){var x=Object(o["resolveComponent"])("SwiperComponent"),B=Object(o["resolveComponent"])("Tab"),k=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",r,[i,Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",n,[S.product.imagesUrl?(Object(o["openBlock"])(),Object(o["createBlock"])(x,{key:1,product:S.product},null,8,["product"])):(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,class:"rounded shadow",src:S.product.imageUrl,alt:""},null,8,["src"]))]),Object(o["createVNode"])("div",c,[Object(o["createVNode"])("p",s,Object(o["toDisplayString"])(S.product.category),1),Object(o["createVNode"])("h1",d,Object(o["toDisplayString"])(S.product.title),1),u,Object(o["createVNode"])("p",p,[Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(S.product.price),1),Object(o["createVNode"])("span",f,"NT$"+Object(o["toDisplayString"])(S.product.origin_price),1)]),Object(o["createVNode"])("div",{class:["d-flex w-75 mb-3",{"mb-7":!S.failQty}]},[Object(o["createVNode"])("button",{class:"quantity-btn remove text-xl",type:"button",onClick:t[1]||(t[1]=function(){return N.minusQty&&N.minusQty.apply(N,arguments)}),disabled:S.qty<=1},"-",8,["disabled"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"text-center quantity w-100 text-lg",type:"number",min:"1","onUpdate:modelValue":t[2]||(t[2]=function(e){return S.qty=e}),onChange:t[3]||(t[3]=function(){return N.checkQty&&N.checkQty.apply(N,arguments)})},null,544),[[o["vModelText"],S.qty]]),Object(o["createVNode"])("button",{type:"button",class:"quantity-btn plus text-xl",onClick:t[4]||(t[4]=function(){return N.addQty&&N.addQty.apply(N,arguments)})},"+")],2),S.failQty?(Object(o["openBlock"])(),Object(o["createBlock"])("p",b,"商品數量最少為一件!")):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",v,[Object(o["createVNode"])("a",{href:"",class:"d-flex justify-content-center white-hover",onClick:t[5]||(t[5]=Object(o["withModifiers"])((function(e){return N.addCart(S.product.id,S.qty)}),["prevent"]))},[h,m])]),y])])]),Object(o["createVNode"])(B,{product:S.product},null,8,["product"]),S.relativeProduct.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])("div",g,[O,Object(o["createVNode"])("ul",j,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(S.relativeProduct,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(k,{key:e.id,product:e},null,8,["product"])})),128))])])):Object(o["createCommentVNode"])("",!0)],64)}a("99af"),a("159b"),a("b0c0");var S=a("ae8d");function N(e,t,a,r,i,l){var n=Object(o["resolveComponent"])("swiper-slide"),c=Object(o["resolveComponent"])("swiper");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(c,{loop:!1,spaceBetween:10,navigation:!1,thumbs:{swiper:i.thumbsSwiper},class:"mySwiper2"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:a.product.imageUrl},null,8,["src"])]})),_:1}),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.product.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(n,{key:t},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:a.product.imagesUrl[t]},null,8,["src"])]})),_:2},1024)})),128))]})),_:1},8,["thumbs"]),Object(o["createVNode"])(c,{onSwiper:l.setThumbsSwiper,loop:!1,spaceBetween:10,slidesPerView:6,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,class:"mySwiper"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:a.product.imageUrl},null,8,["src"])]})),_:1}),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.product.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(n,{key:t},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:a.product.imagesUrl[t]},null,8,["src"])]})),_:2},1024)})),128))]})),_:1},8,["onSwiper"])],64)}var x=a("6d3b");function B(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function k(e,t){var a=["__proto__","constructor","prototype"];Object.keys(t).filter((function(e){return a.indexOf(e)<0})).forEach((function(a){"undefined"===typeof e[a]?e[a]=t[a]:B(t[a])&&B(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:k(e[a],t[a]):e[a]=t[a]}))}function C(e){return void 0===e&&(e={}),e.navigation&&"undefined"===typeof e.navigation.nextEl&&"undefined"===typeof e.navigation.prevEl}function V(e){return void 0===e&&(e={}),e.pagination&&"undefined"===typeof e.pagination.el}function _(e){return void 0===e&&(e={}),e.scrollbar&&"undefined"===typeof e.scrollbar.el}function P(e){void 0===e&&(e="");var t=e.split(" ").map((function(e){return e.trim()})).filter((function(e){return!!e})),a=[];return t.forEach((function(e){a.indexOf(e)<0&&a.push(e)})),a.join(" ")}var E=["init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_freeModeMomentum","_freeModeMomentumRatio","_freeModeMomentumBounce","_freeModeMomentumBounceRatio","_freeModeMomentumVelocityRatio","_freeModeSticky","_freeModeMinimumVelocity","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","_slidesPerColumn","_slidesPerColumnFill","_slidesPerGroup","_slidesPerGroupSkip","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_watchSlidesVisibility","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopFillGroupWithBlank","loopPreventsSlide","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function M(e){void 0===e&&(e={});var t={on:{}},a={};k(t,x["a"].defaults),k(t,x["a"].extendedDefaults),t._emitClasses=!0,t.init=!1;var o={},r=E.map((function(e){return e.replace(/_/,"")})),i=Object.assign({},e);return Object.keys(i).forEach((function(i){"undefined"!==typeof e[i]&&(r.indexOf(i)>=0?B(e[i])?(t[i]={},a[i]={},k(t[i],e[i]),k(a[i],e[i])):(t[i]=e[i],a[i]=e[i]):0===i.search(/on[A-Z]/)&&"function"===typeof e[i]?t.on[""+i[2].toLowerCase()+i.substr(3)]=e[i]:o[i]=e[i])})),["navigation","pagination","scrollbar"].forEach((function(e){!0===t[e]&&(t[e]={})})),{params:t,passedParams:a,rest:o}}function T(e){return new x["a"](e)}function D(e,t){var a=e.el,o=e.nextEl,r=e.prevEl,i=e.paginationEl,l=e.scrollbarEl,n=e.swiper;C(t)&&o&&r&&(n.params.navigation.nextEl=o,n.originalParams.navigation.nextEl=o,n.params.navigation.prevEl=r,n.originalParams.navigation.prevEl=r),V(t)&&i&&(n.params.pagination.el=i,n.originalParams.pagination.el=i),_(t)&&l&&(n.params.scrollbar.el=l,n.originalParams.scrollbar.el=l),n.init(a)}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},I.apply(this,arguments)}function R(e,t){var a=t.slidesPerView;if(t.breakpoints){var o=x["a"].prototype.getBreakpoint(t.breakpoints),r=o in t.breakpoints?t.breakpoints[o]:void 0;r&&r.slidesPerView&&(a=r.slidesPerView)}var i=Math.ceil(parseFloat(t.loopedSlides||a,10));return i+=t.loopAdditionalSlides,i>e.length&&(i=e.length),i}function z(e,t,a){var r=t.map((function(t,a){return t.props||(t.props={}),t.props.swiperRef=e,t.props["data-swiper-slide-index"]=a,t}));function i(e,t,r){return e.props||(e.props={}),Object(o["h"])(e.type,I({},e.props,{key:e.key+"-duplicate-"+t+"-"+r,class:(e.props.className||"")+" "+a.slideDuplicateClass+" "+(e.props.class||"")}),e.children)}if(a.loopFillGroupWithBlank){var l=a.slidesPerGroup-r.length%a.slidesPerGroup;if(l!==a.slidesPerGroup)for(var n=0;n<l;n+=1){var c=Object(o["h"])("div",{class:a.slideClass+" "+a.slideBlankClass});r.push(c)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=r.length);var s=R(r,a),d=[],u=[];return r.forEach((function(e,t){t<s&&u.push(i(e,t,"prepend")),t<r.length&&t>=r.length-s&&d.push(i(e,t,"append"))})),e.value&&(e.value.loopedSlides=s),[].concat(d,r,u)}function F(e,t,a,o){var r=[];if(!t)return r;var i=function(e){r.indexOf(e)<0&&r.push(e)},l=o.map((function(e){return e.props&&e.props.key})),n=a.map((function(e){return e.props&&e.props.key}));l.join("")!==n.join("")&&r.push("children"),o.length!==a.length&&r.push("children");var c=E.filter((function(e){return"_"===e[0]})).map((function(e){return e.replace(/_/,"")}));return c.forEach((function(a){if(a in e&&a in t)if(B(e[a])&&B(t[a])){var o=Object.keys(e[a]),r=Object.keys(t[a]);o.length!==r.length?i(a):(o.forEach((function(o){e[a][o]!==t[a][o]&&i(a)})),r.forEach((function(o){e[a][o]!==t[a][o]&&i(a)})))}else e[a]!==t[a]&&i(a)})),r}function A(e,t,a){void 0===e&&(e={});var o=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},i=function e(t,a){Array.isArray(t)&&t.forEach((function(t){var i="symbol"===typeof t.type;"default"===a&&(a="container-end"),i&&t.children?e(t.children,"default"):!t.type||"SwiperSlide"!==t.type.name&&"AsyncComponentWrapper"!==t.type.name?r[a]&&r[a].push(t):o.push(t)}))};return Object.keys(e).forEach((function(t){var a=e[t]();i(a,t)})),a.value=t.value,t.value=o,{slides:o,slots:r}}function U(e,t,a,o){var r,i,l,n,c,s=o.filter((function(e){return"children"!==e&&"direction"!==e})),d=e.params,u=e.pagination,p=e.navigation,f=e.scrollbar,b=e.virtual,v=e.thumbs;if(o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(r=!0),o.includes("controller")&&a.controller&&a.controller.control&&d.controller&&!d.controller.control&&(i=!0),o.includes("pagination")&&a.pagination&&a.pagination.el&&(d.pagination||!1===d.pagination)&&u&&!u.el&&(l=!0),o.includes("scrollbar")&&a.scrollbar&&a.scrollbar.el&&(d.scrollbar||!1===d.scrollbar)&&f&&!f.el&&(n=!0),o.includes("navigation")&&a.navigation&&a.navigation.prevEl&&a.navigation.nextEl&&(d.navigation||!1===d.navigation)&&p&&!p.prevEl&&!p.nextEl&&(c=!0),s.forEach((function(e){B(d[e])&&B(a[e])?k(d[e],a[e]):d[e]=a[e]})),o.includes("children")&&b&&d.virtual.enabled?(b.slides=t,b.update(!0)):o.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),r){var h=v.init();h&&v.update(!0)}i&&(e.controller.control=d.controller.control),l&&(u.init(),u.render(),u.update()),n&&(f.init(),f.updateSize(),f.setTranslate()),c&&(p.init(),p.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&e.changeDirection(a.direction,!1),e.update()}function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},q.apply(this,arguments)}function L(e){!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load())}function $(e,t,a){var r;if(!a)return null;var i=e.value.isHorizontal()?(r={},r[e.value.rtlTranslate?"right":"left"]=a.offset+"px",r):{top:a.offset+"px"};return t.filter((function(e,t){return t>=a.from&&t<=a.to})).map((function(t){return t.props||(t.props={}),t.props.style||(t.props.style={}),t.props.swiperRef=e,t.props.style=i,Object(o["h"])(t.type,q({},t.props),t.children)}))}var Q={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},freeMode:{type:Boolean,default:void 0},freeModeMomentum:{type:Boolean,default:void 0},freeModeMomentumRatio:{type:Number,default:void 0},freeModeMomentumBounce:{type:Boolean,default:void 0},freeModeMomentumBounceRatio:{type:Number,default:void 0},freeModeMomentumVelocityRatio:{type:Number,default:void 0},freeModeSticky:{type:Boolean,default:void 0},freeModeMinimumVelocity:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:Number,default:void 0},slidesPerView:{type:[Number,String],default:void 0},slidesPerColumn:{type:Number,default:void 0},slidesPerColumnFill:{type:String,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},watchSlidesVisibility:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},preloadImages:{type:Boolean,default:void 0},updateOnImagesReady:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopedSlides:{type:Number,default:void 0},loopFillGroupWithBlank:{type:Boolean,default:void 0},loopPreventsSlide:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideDuplicateActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideDuplicateClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slideDuplicateNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},slideDuplicatePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},lazy:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","doubleTap","doubleClick","destroy","fromEdge","hashChange","hashSet","imagesReady","init","keyPress","lazyImageLoad","lazyImageReady","lock","loopFix","momentumBounce","navigationHide","navigationShow","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","zoomChange"],setup:function(e,t){var a=t.slots,r=t.emit,i=e.tag,l=e.wrapperTag,n=Object(o["ref"])("swiper-container"),c=Object(o["ref"])(null),s=Object(o["ref"])(!1),d=Object(o["ref"])(!1),u=Object(o["ref"])(null),p=Object(o["ref"])(null),f=Object(o["ref"])(null),b={value:[]},v={value:[]},h=Object(o["ref"])(null),m=Object(o["ref"])(null),y=Object(o["ref"])(null),g=Object(o["ref"])(null),O=M(e),j=O.params,w=O.passedParams;A(a,b,v),f.value=w,v.value=b.value;var S=function(){A(a,b,v),s.value=!0};if(j.onAny=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];r.apply(void 0,[e].concat(a))},Object.assign(j.on,{_beforeBreakpoint:S,_containerClasses:function(e,t){n.value=t}}),p.value=T(j),p.value.loopCreate=function(){},p.value.loopDestroy=function(){},j.loop&&(p.value.loopedSlides=R(b.value,j)),p.value.virtual&&p.value.params.virtual.enabled){p.value.virtual.slides=b.value;var N={cache:!1,renderExternal:function(e){c.value=e},renderExternalUpdate:!1};k(p.value.params.virtual,N),k(p.value.originalParams.virtual,N)}function x(e){return j.virtual?$(p,e,c.value):!j.loop||p.value&&p.value.destroyed?(e.forEach((function(e){e.props||(e.props={}),e.props.swiperRef=p})),e):z(p,e,j)}return Object(o["onUpdated"])((function(){!d.value&&p.value&&(p.value.emitSlidesClasses(),d.value=!0);var t=M(e),a=t.passedParams,o=F(a,f.value,b.value,v.value);f.value=a,(o.length||s.value)&&p.value&&!p.value.destroyed&&U(p.value,b.value,a,o),s.value=!1})),Object(o["watch"])(c,(function(){Object(o["nextTick"])((function(){L(p.value)}))})),Object(o["onMounted"])((function(){u.value&&(D({el:u.value,nextEl:h.value,prevEl:m.value,paginationEl:y.value,scrollbarEl:g.value,swiper:p.value},j),r("swiper",p.value))})),Object(o["onBeforeUnmount"])((function(){p.value&&!p.value.destroyed&&p.value.destroy(!0,!1)})),function(){var t=A(a,b,v),r=t.slides,c=t.slots;return Object(o["h"])(i,{ref:u,class:P(n.value)},[c["container-start"],C(e)&&[Object(o["h"])("div",{ref:m,class:"swiper-button-prev"}),Object(o["h"])("div",{ref:h,class:"swiper-button-next"})],_(e)&&Object(o["h"])("div",{ref:g,class:"swiper-scrollbar"}),V(e)&&Object(o["h"])("div",{ref:y,class:"swiper-pagination"}),Object(o["h"])(l,{class:"swiper-wrapper"},[c["wrapper-start"],x(r),c["wrapper-end"]]),c["container-end"]])}}},G={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:Object,zoom:{type:Boolean,default:void 0},virtualIndex:{type:[String,Number],default:void 0}},setup:function(e,t){var a=t.slots,r=!1,i=e.swiperRef,l=Object(o["ref"])(null),n=Object(o["ref"])("swiper-slide");function c(e,t,a){t===l.value&&(n.value=a)}Object(o["onMounted"])((function(){i.value&&(i.value.on("_slideClass",c),r=!0)})),Object(o["onBeforeUpdate"])((function(){!r&&i&&i.value&&(i.value.on("_slideClass",c),r=!0)})),Object(o["onUpdated"])((function(){l.value&&i&&i.value&&i.value.destroyed&&"swiper-slide"!==n.value&&(n.value="swiper-slide")})),Object(o["onBeforeUnmount"])((function(){i&&i.value&&i.value.off("_slideClass",c)}));var s=Object(o["computed"])((function(){return{isActive:n.value.indexOf("swiper-slide-active")>=0||n.value.indexOf("swiper-slide-duplicate-active")>=0,isVisible:n.value.indexOf("swiper-slide-visible")>=0,isDuplicate:n.value.indexOf("swiper-slide-duplicate")>=0,isPrev:n.value.indexOf("swiper-slide-prev")>=0||n.value.indexOf("swiper-slide-duplicate-prev")>=0,isNext:n.value.indexOf("swiper-slide-next")>=0||n.value.indexOf("swiper-slide-duplicate-next")>=0}}));return function(){return Object(o["h"])(e.tag,{class:P(""+n.value),ref:l,"data-swiper-slide-index":e.virtualIndex},e.zoom?Object(o["h"])("div",{class:"swiper-zoom-container","data-swiper-zoom":"number"===typeof e.zoom?e.zoom:void 0},a.default&&a.default(s.value)):a.default&&a.default(s.value))}}},W=(a("5f67"),a("8343")),H=a("cc84");x["a"].use([W["a"],H["a"]]);var J={props:{product:Object},components:{Swiper:Q,SwiperSlide:G},data:function(){return{thumbsSwiper:null}},methods:{setThumbsSwiper:function(e){this.thumbsSwiper=e}}};J.render=N;var Z=J,K=(a("a4d3"),a("e01a"),{class:"container my-17"}),X=Object(o["createVNode"])("ul",{class:"nav nav-tabs mb-10",id:"myTab",role:"tablist"},[Object(o["createVNode"])("li",{class:"nav-item",role:"presentation"},[Object(o["createVNode"])("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"}," 商品詳情 ")]),Object(o["createVNode"])("li",{class:"nav-item",role:"presentation"},[Object(o["createVNode"])("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"}," 商品規格 ")]),Object(o["createVNode"])("li",{class:"nav-item",role:"presentation"},[Object(o["createVNode"])("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"}," 購物須知 ")])],-1),Y={class:"tab-content px-8",id:"myTabContent"},ee={class:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},te={class:"mb-8"},ae=Object(o["createVNode"])("div",{class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},[Object(o["createVNode"])("ul",{class:"d-flex flex-wrap w-50 mx-auto\n            text-center border-bottom border-light mb-4 pb-2"},[Object(o["createVNode"])("li",{class:"w-50 fw-bold"},"商品材質："),Object(o["createVNode"])("li",{class:"w-50"},"鋯石 / 銅 (保色電鍍)")]),Object(o["createVNode"])("ul",{class:"d-flex flex-wrap w-50 mx-auto\n            text-center border-bottom border-light mb-4 pb-2"},[Object(o["createVNode"])("li",{class:"w-50 fw-bold"},"商品尺寸："),Object(o["createVNode"])("li",{class:"w-50"},"長寬約：7 cm x 0.9 cm")]),Object(o["createVNode"])("ul",{class:"d-flex flex-wrap w-50 mx-auto\n            text-center border-bottom border-light mb-4 pb-2"},[Object(o["createVNode"])("li",{class:"w-50 fw-bold"},"商品製造："),Object(o["createVNode"])("li",{class:"w-50"},"Made In Korea")]),Object(o["createVNode"])("ul",{class:"d-flex flex-wrap w-50 mx-auto text-center"},[Object(o["createVNode"])("li",{class:"w-50 fw-bold"},"販售形式："),Object(o["createVNode"])("li",{class:"w-50"},"單件販售")])],-1),oe=Object(o["createVNode"])("div",{class:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},[Object(o["createVNode"])("p",{class:"fw-bold"},"商品購買須知"),Object(o["createVNode"])("p",{class:"mb-6"},[Object(o["createTextVNode"])(" 產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。 商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。 "),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" RingRing盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。 ")]),Object(o["createVNode"])("p",{class:"fw-bold"},"退換貨須知"),Object(o["createVNode"])("p",null,"依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。")],-1);function re(e,t,a,r,i,l){return Object(o["openBlock"])(),Object(o["createBlock"])("div",K,[X,Object(o["createVNode"])("div",Y,[Object(o["createVNode"])("div",ee,[Object(o["createVNode"])("p",te,Object(o["toDisplayString"])(a.product.description),1),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.product.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:t,class:"mx-auto mb-8",src:e,alt:""},null,8,["src"])})),128))]),ae,oe])])}var ie={props:{product:Object},methods:{},mounted:function(){}};ie.render=re;var le=ie,ne={components:{SwiperComponent:Z,Tab:le,Card:S["a"]},data:function(){return{allProduct:[],product:[],thumbsSwiper:null,qty:1,failQty:!1,relativeProduct:[],routeID:""}},methods:{setThumbsSwiper:function(e){this.thumbsSwiper=e},addQty:function(){this.failQty=!1,this.qty+=1},minusQty:function(){this.qty-=1},checkQty:function(){this.qty<=1&&(this.failQty=!0,this.qty=1)},getAll:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(t){console.log(t),t.data.success?e.allProduct=t.data.products:alert(t.data.message)})).catch((function(e){console.log(e)}))},getProduct:function(e){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/product/").concat(e);this.$http.get(a).then((function(e){console.log(e),e.data.success?(t.product=e.data.product,t.getRelativeProduct()):(alert(e.data.message),t.$router.push("/shop"))})).catch((function(e){console.log(e)}))},getRelativeProduct:function(){var e=this;this.relativeProduct=[],this.allProduct.forEach((function(t){e.relativeProduct.length<4&&t.category===e.product.category&&t.id!==e.product.id&&e.relativeProduct.push(t)}))},addCart:function(e,t){var a={data:{product_id:e,qty:t}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),a).then((function(e){console.log(e),e.data.success,alert(e.data.message)})).catch((function(e){console.log(e)}))}},computed:{id:function(){return this.$route.params.id}},watch:{id:function(e){this.routeID=e,"product"===this.$route.name&&this.getProduct(this.routeID)}},created:function(){this.routeID=this.$route.params.id,this.getAll(),this.getProduct(this.routeID)}};ne.render=w;t["default"]=ne}}]);
//# sourceMappingURL=chunk-250e2986.e74dae25.js.map