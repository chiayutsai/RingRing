(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5aad448"],{"057f":function(e,t,c){var o=c("fc6a"),r=c("241c").f,a={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return r(e)}catch(t){return n.slice()}};e.exports.f=function(e){return n&&"[object Window]"==a.call(e)?l(e):r(o(e))}},"746f":function(e,t,c){var o=c("428f"),r=c("5135"),a=c("e538"),n=c("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});r(t,e)||n(t,e,{value:a.f(e)})}},a4d3:function(e,t,c){"use strict";var o=c("23e7"),r=c("da84"),a=c("d066"),n=c("c430"),l=c("83ab"),i=c("4930"),s=c("fdbf"),d=c("d039"),u=c("5135"),b=c("e8b5"),p=c("861d"),m=c("825a"),f=c("7b0b"),O=c("fc6a"),j=c("c04e"),h=c("5c6c"),g=c("7c73"),v=c("df75"),y=c("241c"),V=c("057f"),k=c("7418"),N=c("06cf"),x=c("9bf2"),w=c("d1e7"),P=c("9112"),C=c("6eeb"),U=c("5692"),B=c("f772"),S=c("d012"),F=c("90e3"),T=c("b622"),D=c("e538"),A=c("746f"),I=c("d44e"),M=c("69f3"),L=c("b727").forEach,$=B("hidden"),_="Symbol",E="prototype",J=T("toPrimitive"),q=M.set,z=M.getterFor(_),Q=Object[E],W=r.Symbol,G=a("JSON","stringify"),H=N.f,K=x.f,R=V.f,X=w.f,Y=U("symbols"),Z=U("op-symbols"),ee=U("string-to-symbol-registry"),te=U("symbol-to-string-registry"),ce=U("wks"),oe=r.QObject,re=!oe||!oe[E]||!oe[E].findChild,ae=l&&d((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,c){var o=H(Q,t);o&&delete Q[t],K(e,t,c),o&&e!==Q&&K(Q,t,o)}:K,ne=function(e,t){var c=Y[e]=g(W[E]);return q(c,{type:_,tag:e,description:t}),l||(c.description=t),c},le=s?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},ie=function(e,t,c){e===Q&&ie(Z,t,c),m(e);var o=j(t,!0);return m(c),u(Y,o)?(c.enumerable?(u(e,$)&&e[$][o]&&(e[$][o]=!1),c=g(c,{enumerable:h(0,!1)})):(u(e,$)||K(e,$,h(1,{})),e[$][o]=!0),ae(e,o,c)):K(e,o,c)},se=function(e,t){m(e);var c=O(t),o=v(c).concat(me(c));return L(o,(function(t){l&&!ue.call(c,t)||ie(e,t,c[t])})),e},de=function(e,t){return void 0===t?g(e):se(g(e),t)},ue=function(e){var t=j(e,!0),c=X.call(this,t);return!(this===Q&&u(Y,t)&&!u(Z,t))&&(!(c||!u(this,t)||!u(Y,t)||u(this,$)&&this[$][t])||c)},be=function(e,t){var c=O(e),o=j(t,!0);if(c!==Q||!u(Y,o)||u(Z,o)){var r=H(c,o);return!r||!u(Y,o)||u(c,$)&&c[$][o]||(r.enumerable=!0),r}},pe=function(e){var t=R(O(e)),c=[];return L(t,(function(e){u(Y,e)||u(S,e)||c.push(e)})),c},me=function(e){var t=e===Q,c=R(t?Z:O(e)),o=[];return L(c,(function(e){!u(Y,e)||t&&!u(Q,e)||o.push(Y[e])})),o};if(i||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=F(e),c=function(e){this===Q&&c.call(Z,e),u(this,$)&&u(this[$],t)&&(this[$][t]=!1),ae(this,t,h(1,e))};return l&&re&&ae(Q,t,{configurable:!0,set:c}),ne(t,e)},C(W[E],"toString",(function(){return z(this).tag})),C(W,"withoutSetter",(function(e){return ne(F(e),e)})),w.f=ue,x.f=ie,N.f=be,y.f=V.f=pe,k.f=me,D.f=function(e){return ne(T(e),e)},l&&(K(W[E],"description",{configurable:!0,get:function(){return z(this).description}}),n||C(Q,"propertyIsEnumerable",ue,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!i,sham:!i},{Symbol:W}),L(v(ce),(function(e){A(e)})),o({target:_,stat:!0,forced:!i},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var c=W(t);return ee[t]=c,te[c]=t,c},keyFor:function(e){if(!le(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),o({target:"Object",stat:!0,forced:!i,sham:!l},{create:de,defineProperty:ie,defineProperties:se,getOwnPropertyDescriptor:be}),o({target:"Object",stat:!0,forced:!i},{getOwnPropertyNames:pe,getOwnPropertySymbols:me}),o({target:"Object",stat:!0,forced:d((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(f(e))}}),G){var fe=!i||d((function(){var e=W();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));o({target:"JSON",stat:!0,forced:fe},{stringify:function(e,t,c){var o,r=[e],a=1;while(arguments.length>a)r.push(arguments[a++]);if(o=t,(p(t)||void 0!==e)&&!le(e))return b(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!le(t))return t}),r[1]=t,G.apply(null,r)}})}W[E][J]||P(W[E],J,W[E].valueOf),I(W,_),S[$]=!0},da51:function(e,t,c){"use strict";c("a4d3"),c("e01a");var o=c("7a23"),r={class:"row"},a={class:"col-12 mb-8"},n={for:"productTitle",class:"form-label"},l=Object(o["createTextVNode"])("產品名稱"),i={key:0},s={class:"col-6 mb-8"},d={for:"productOriginPrice",class:"form-label"},u=Object(o["createTextVNode"])("產品原價"),b={key:0},p={class:"col-6 mb-8"},m={for:"productPrice",class:"form-label"},f=Object(o["createTextVNode"])("產品售價"),O={key:0},j={class:"row row-cols-2 align-items-end"},h={class:"col mb-8"},g={class:"form-label"},v=Object(o["createTextVNode"])("產品分類"),y={key:0},V={class:"col mb-8"},k={key:0,class:"d-flex"},N={class:"row row-cols-2 align-items-end"},x={class:"col "},w=Object(o["createVNode"])("label",{class:"form-label"},"產品規格",-1),P=Object(o["createVNode"])("p",null,":",-1),C={class:"col mb-8"},U={class:"row"},B={class:"col-6 mb-8"},S={for:"productUnit",class:"form-label"},F=Object(o["createTextVNode"])("產品單位"),T={key:0},D={class:"col-6 mb-8"},A=Object(o["createVNode"])("p",{class:"mb-3"},"是否上架產品",-1),I={class:"form-check mt-4"},M={key:0,class:"form-check-label",for:"flexCheckDefault"},L={key:1,class:"form-check-label",for:"flexCheckDefault"},$={class:"col-12 mb-8"},_=Object(o["createVNode"])("label",{for:"productDescription",class:"form-label"},"產品描述",-1),E={class:"col-12 mb-8"},J=Object(o["createVNode"])("label",{for:"productContent",class:"form-label"},"說明內容",-1),q={class:"col-12 mb-8"},z=Object(o["createVNode"])("p",{class:"mb-3"},"主要圖片",-1),Q={class:"row row-cols-2 align-items-center"},W={class:"col"},G=Object(o["createVNode"])("label",{for:"productImage",class:"form-label text-xs"},"圖片位址",-1),H=Object(o["createVNode"])("p",{class:"text-xs mb-2"},"或",-1),K={key:0,class:"btn btn-primary text-sm text-secondary",type:"button",disabled:""},R=Object(o["createVNode"])("span",{class:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"},null,-1),X=Object(o["createTextVNode"])(" 上傳中... "),Y={key:1,class:"btn btn-primary text-sm text-secondary"},Z=Object(o["createVNode"])("span",{class:"material-icons text-base "}," file_upload ",-1),ee=Object(o["createTextVNode"])(" 上傳圖片 "),te={class:"col"},ce={class:"col-12 mb-8"},oe=Object(o["createVNode"])("p",{class:"mb-3"},"輪播圖片",-1),re={class:"row row-cols-3 align-items-end"},ae=Object(o["createVNode"])("p",{class:"text-xs  mb-2"},"或",-1),ne={key:0,class:"d-block w-100 btn btn-primary text-sm  text-secondary mb-4",type:"button",disabled:""},le=Object(o["createVNode"])("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ie=Object(o["createTextVNode"])(" 上傳中... "),se={key:1,class:"d-block btn btn-primary text-sm text-secondary mb-4"},de=Object(o["createVNode"])("span",{class:"material-icons text-base align-text-bottom"}," file_upload ",-1),ue=Object(o["createTextVNode"])(" 上傳圖片 ");function be(e,t,c,be,pe,me){var fe=this,Oe=Object(o["resolveComponent"])("Field"),je=Object(o["resolveComponent"])("error-message"),he=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createBlock"])(he,{ref:"addForm",class:"text-dark"},{default:Object(o["withCtx"])((function(e){var be=e.errors;return[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("label",n,[l,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",i,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"text",class:["form-control",{"is-backend-invalid":be["產品名稱"]}],id:"productTitle",name:"產品名稱",placeholder:"輸入產品標題",rules:"required",modelValue:pe.tempProduct.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return pe.tempProduct.title=e}),modelModifiers:{lazy:!0,trim:!0}},null,8,["class","modelValue"]),Object(o["createVNode"])(je,{name:"產品名稱",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",s,[Object(o["createVNode"])("label",d,[u,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",b,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"number",class:["form-control",{"is-backend-invalid":be["產品原價"]}],id:"productOriginPrice",name:"產品原價",min:"0",placeholder:"輸入產品原價",rules:me.isPositive,modelValue:pe.tempProduct.origin_price,"onUpdate:modelValue":t[2]||(t[2]=function(e){return pe.tempProduct.origin_price=e}),modelModifiers:{number:!0}},null,8,["rules","class","modelValue"]),Object(o["createVNode"])(je,{name:"產品原價",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",p,[Object(o["createVNode"])("label",m,[f,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",O,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"number",class:["form-control",{"is-backend-invalid":be["產品售價"]}],id:"productPrice",min:"0",name:"產品售價",placeholder:"輸入產品售價",rules:me.isPositive,modelValue:pe.tempProduct.price,"onUpdate:modelValue":t[3]||(t[3]=function(e){return pe.tempProduct.price=e}),modelModifiers:{number:!0}},null,8,["rules","class","modelValue"]),Object(o["createVNode"])(je,{name:"產品售價",class:"backend-invalid-feedback"})])]),Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("label",g,[v,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",y,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{name:"產品分類",class:["form-select",{"is-backend-invalid":be["產品分類"]}],placeholder:"產品分類",rules:"required",as:"select",modelValue:pe.tempProduct.category,"onUpdate:modelValue":t[4]||(t[4]=function(e){return pe.tempProduct.category=e})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("option",{disabled:c.product.category},"請選擇",8,["disabled"]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(pe.productsCategory,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{value:e,key:e},Object(o["toDisplayString"])(e),9,["value"])})),128))]})),_:2},1032,["class","modelValue"]),Object(o["createVNode"])(je,{name:"產品分類",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",V,[pe.isAddCategory?(Object(o["openBlock"])(),Object(o["createBlock"])("div",k,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return pe.tempCategory=e}),class:"form-control",placeholder:"新增分類"},null,512),[[o["vModelText"],pe.tempCategory,void 0,{trim:!0}]]),Object(o["createVNode"])("div",{class:"btn btn-secondary text-white flex-shrink-0 ms-4",onClick:t[6]||(t[6]=function(){return me.addCategory&&me.addCategory.apply(me,arguments)})}," 新增 ")])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:1,class:"btn btn-secondary text-white",onClick:t[7]||(t[7]=function(e){return fe.isAddCategory=!0})}," 新增產品分類 "))])]),Object(o["createVNode"])("div",N,[Object(o["createVNode"])("div",x,[w,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(pe.tempProduct.formats,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"d-flex align-items-center mb-8",key:t},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"規格",class:" form-control  me-2",placeholder:"規格","onUpdate:modelValue":function(t){return e.format=t}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],e.format]]),P,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"內容",class:"form-control ms-2",placeholder:"內容","onUpdate:modelValue":function(t){return e.content=t}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],e.content]])])})),128))]),Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",{class:"btn btn-secondary text-white",onClick:t[8]||(t[8]=function(e){return me.addFormat()})}," 新增產品規格 ")])]),Object(o["createVNode"])("div",U,[Object(o["createVNode"])("div",B,[Object(o["createVNode"])("label",S,[F,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",T,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"text",class:["form-control",{"is-backend-invalid":be["產品單位"]}],id:"productUnit",name:"產品單位",placeholder:"輸入產品單位",rules:"required",modelValue:pe.tempProduct.unit,"onUpdate:modelValue":t[9]||(t[9]=function(e){return pe.tempProduct.unit=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(o["createVNode"])(je,{name:"產品單位",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",D,[A,Object(o["createVNode"])("div",I,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox",name:"check",id:"flexCheckDefault","onUpdate:modelValue":t[10]||(t[10]=function(e){return pe.tempProduct.is_enabled=e}),"true-value":1,"false-value":0},null,512),[[o["vModelCheckbox"],pe.tempProduct.is_enabled]]),c.product.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("label",M,"上架")):(Object(o["openBlock"])(),Object(o["createBlock"])("label",L,"未上架"))])]),Object(o["createVNode"])("div",$,[_,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",rows:"5",name:"產品描述",class:"form-control",id:"productDescription",placeholder:"輸入產品描述","onUpdate:modelValue":t[11]||(t[11]=function(e){return pe.tempProduct.description=e})},null,512),[[o["vModelText"],pe.tempProduct.description]])]),Object(o["createVNode"])("div",E,[J,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",rows:"5",name:"說明內容",class:"form-control",id:"productContent",placeholder:"輸入說明內容","onUpdate:modelValue":t[12]||(t[12]=function(e){return pe.tempProduct.content=e})},null,512),[[o["vModelText"],pe.tempProduct.content]])]),Object(o["createVNode"])("div",q,[z,Object(o["createVNode"])("div",Q,[Object(o["createVNode"])("div",W,[G,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"主要圖片",class:"form-control mb-2",id:"productImage",placeholder:"輸入圖片位址","onUpdate:modelValue":t[13]||(t[13]=function(e){return pe.tempProduct.imageUrl=e})},null,512),[[o["vModelText"],pe.tempProduct.imageUrl]]),H,pe.isUpload?(Object(o["openBlock"])(),Object(o["createBlock"])("button",K,[R,X])):(Object(o["openBlock"])(),Object(o["createBlock"])("label",Y,[Object(o["createVNode"])("input",{style:{display:"none"},type:"file",onChange:t[14]||(t[14]=function(e){return me.uploadImage("main",e)})},null,32),Z,ee]))]),Object(o["createVNode"])("div",te,[Object(o["createVNode"])("img",{class:"w-100 h-auto",src:pe.tempProduct.imageUrl,alt:""},null,8,["src"])])])]),Object(o["createVNode"])("div",ce,[oe,Object(o["createVNode"])("div",re,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(pe.tempProduct.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"col mb-8",key:t},[Object(o["createVNode"])("img",{class:"w-100 h-auto",src:pe.tempProduct.imagesUrl[t],alt:""},null,8,["src"]),Object(o["createVNode"])("label",{for:"productImage"+t,class:"form-label text-xs"},"圖片位址",8,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"輪播圖片",class:"form-control mb-2",id:"productImage"+t,placeholder:"輸入圖片位址","onUpdate:modelValue":function(e){return pe.tempProduct.imagesUrl[t]=e}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],pe.tempProduct.imagesUrl[t]]]),ae,pe.isUploads[t]?(Object(o["openBlock"])(),Object(o["createBlock"])("button",ne,[le,ie])):(Object(o["openBlock"])(),Object(o["createBlock"])("label",se,[Object(o["createVNode"])("input",{style:{display:"none"},type:"file",onChange:function(e){return me.uploadImage(t,e)}},null,40,["onChange"]),de,ue])),pe.tempProduct.imagesUrl[t]?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:2,class:"btn btn-outline-secondary text-xs white-hover",onClick:function(e){return me.deleteImage(t)}}," 刪除圖片 ",8,["onClick"])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:3,class:"btn btn-outline-secondary white-hover text-xs",onClick:function(e){return me.deleteImage(t)}}," 取消 ",8,["onClick"]))])})),128))]),Object(o["createVNode"])("div",{class:"btn btn-secondary text-white text-sm",onClick:t[15]||(t[15]=function(){return me.createImage&&me.createImage.apply(me,arguments)})},"新增輪播圖片")])])]})),_:1},512)}c("99af"),c("159b"),c("caad"),c("2532"),c("a434");var pe={props:{product:{type:Object,default:function(){return{formats:[{format:"",content:""}],imagesUrl:[]}}},isAdd:Boolean},data:function(){return{tempProduct:{},productsAll:[],productsCategory:[],isUpload:!1,isUploads:[],isAddCategory:!1,tempCategory:""}},watch:{product:function(){this.tempProduct=this.product}},methods:{getData:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(t){console.log(t),t.data.success?(e.productsAll=t.data.products,e.productsAll.forEach((function(t){e.productsCategory.includes(t.category)||e.productsCategory.push(t.category)}))):alert(t.data.message)})).catch((function(e){console.log(e)}))},addFormat:function(){var e={format:"",content:""};this.tempProduct.formats.push(e)},addCategory:function(){this.productsCategory.push(this.tempCategory),alert("新增".concat(this.tempCategory,"分類")),this.tempCategory="",this.isAddCategory=!1},uploadImage:function(e,t){var c=this,o=t.target.files[0],r=new FormData;r.append("file-to-upload",o),"main"===e?this.isUpload=!0:this.isUploads[e]=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/upload"),r).then((function(t){console.log(t),t.data.success&&("main"===e?(c.tempProduct.imageUrl=t.data.imageUrl,c.isUpload=!1):(c.tempProduct.imagesUrl[e]=t.data.imageUrl,c.isUploads[e]=!1))}))},createImage:function(){void 0===this.tempProduct.imagesUrl&&(this.tempProduct.imagesUrl=[]),this.isUploads.push(!1),this.tempProduct.imagesUrl.push("")},deleteImage:function(e){this.tempProduct.imagesUrl.splice(e,1),this.isUploads.pop()},isPositive:function(e){return e>0&&e%1===0||"請輸入正整數"},cleanForm:function(){this.$refs.addForm.resetForm(),this.tempProduct.description="",this.tempProduct.content="",this.tempProduct.imageUrl="",this.tempProduct.formats=[{format:"",content:""}],this.tempProduct.imagesUrl=[]}},created:function(){this.isAdd&&(this.tempProduct={formats:[{format:"",content:""}],imagesUrl:[]}),this.getData()}};pe.render=be;t["a"]=pe},dd08:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),r=Object(o["createVNode"])("div",{class:"d-flex align-items-center justify-content-between mb-5 "},[Object(o["createVNode"])("h2",{class:"text-dark"},"新增產品")],-1),a={class:"bg-white rounded overflow-hidden border border-secondary "},n={class:"container-fluid py-6"},l={class:"d-flex justify-content-end border-top pt-6"};function i(e,t,c,i,s,d){var u=Object(o["resolveComponent"])("Loading"),b=Object(o["resolveComponent"])("ProductForm");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,{isLoading:s.isLoading},null,8,["isLoading"]),r,Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])(b,{isAdd:!0,ref:"productForm"},null,512),Object(o["createVNode"])("div",l,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary white-hover me-4",onClick:t[1]||(t[1]=function(){return d.clean&&d.clean.apply(d,arguments)})}," 重填產品資訊 "),Object(o["createVNode"])("button",{type:"submit",class:"btn btn-secondary text-white px-12",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(){return d.add&&d.add.apply(d,arguments)}),["prevent"]))}," 新增產品 ")])])])],64)}c("99af");var s=c("da51"),d={data:function(){return{isLoading:!1}},components:{ProductForm:s["a"]},inject:["emitter"],methods:{add:function(){var e=this,t=this.$refs.productForm;t.$refs.addForm.validate().then((function(c){if(c.valid){e.isLoading=!0;var o={data:t.tempProduct};e.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/product"),o).then((function(c){console.log(c),c.data.success?(e.emitter.emit("push-message",{type:"success",message:c.data.message}),t.cleanForm(),e.isLoading=!1):(e.emitter.emit("push-message",{type:"error",message:c.data.message}),e.isLoading=!1)})).catch((function(e){console.log(e)}))}}))},clean:function(){var e=this.$refs.productForm;e.cleanForm()}}};d.render=i;t["default"]=d},e01a:function(e,t,c){"use strict";var o=c("23e7"),r=c("83ab"),a=c("da84"),n=c("5135"),l=c("861d"),i=c("9bf2").f,s=c("e893"),d=a.Symbol;if(r&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};s(b,d);var p=b.prototype=d.prototype;p.constructor=b;var m=p.toString,f="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;i(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=m.call(e);if(n(u,e))return"";var c=f?t.slice(7,-1):t.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}},e538:function(e,t,c){var o=c("b622");t.f=o}}]);
//# sourceMappingURL=chunk-b5aad448.35af8abb.js.map