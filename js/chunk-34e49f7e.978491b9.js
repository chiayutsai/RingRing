(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e49f7e"],{a09f:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),c={class:"container pt-15 border-bottom border-light pb-15 mb-15"},r={class:"breadcrumb mb-5"},d={class:"breadcrumb-item"},s=Object(a["createTextVNode"])("首頁"),i=Object(a["createVNode"])("li",{class:"breadcrumb-item active"},"收藏清單",-1),n=Object(a["createVNode"])("h3",{class:"d-flex rounded-top align-items-center\n      bg-title text-xl p-4"},[Object(a["createVNode"])("span",{class:"material-icons me-3"}," favorite "),Object(a["createTextVNode"])("收藏清單 ")],-1),l={key:0,class:"p-4 border border-white border-bottom-0 bg-table text-dark"},b=Object(a["createVNode"])("p",{class:"text-center text-xl mb-6"},"目前沒有收藏商品，快去逛逛商店吧～",-1),m={class:"d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5"},u=Object(a["createTextVNode"])(" 前往商店"),p={key:1},h=Object(a["createVNode"])("tr",{class:"d-none d-md-flex row g-0 p-4 border border-white\n        border-bottom-0 bg-table text-dark"},[Object(a["createVNode"])("td",{class:"col-6"},"商品資料"),Object(a["createVNode"])("td",{class:"col-2"},"價格"),Object(a["createVNode"])("td",{class:"col-3"},"購買狀態"),Object(a["createVNode"])("td",{class:"col-1"},"刪除")],-1),j={class:"col-11 col-md-6 mb-5 mb-md-0"},O={class:"d-flex align-items-center"},g={class:"text-base text-dark"},v={class:"col-6 col-md-2 order-4 order-md-0"},f={class:"d-flex d-md-block align-items-end"},N={class:"me-3 me-md-0"},V={key:0,class:"text-dark opacity-5 text-sm text-decoration-line-through"},x={class:"col-6 col-md-3 order-4 order-md-0 "},y={class:"position-relative"},k={key:0,type:"button",class:" btn d-flex justify-content-center\n                align-items-center position-absolute no-allow w-100\n                w-md-75 h-100 top-0 start-0 bg-light"},w=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),C={class:"col-1 order-2 order-md-0"},F=Object(a["createVNode"])("span",{class:"material-icons"}," delete_forever ",-1),B={class:"d-flex justify-content-end rounded-bottom bg-table border border-white p-6"},L=Object(a["createVNode"])("span",null,"前往商店",-1);function M(e,t,o,M,D,_){var $=Object(a["resolveComponent"])("Loading"),S=Object(a["resolveComponent"])("router-link"),T=Object(a["resolveComponent"])("FrontDelModal");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])($,{isLoading:D.isLoading},null,8,["isLoading"]),Object(a["createVNode"])("div",c,[Object(a["createVNode"])("ol",r,[Object(a["createVNode"])("li",d,[Object(a["createVNode"])(S,{to:"/"},{default:Object(a["withCtx"])((function(){return[s]})),_:1})]),i]),n,D.myFavorite.length<=0?(Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[b,Object(a["createVNode"])("div",m,[Object(a["createVNode"])(S,{class:"white-hover",to:"/shop"},{default:Object(a["withCtx"])((function(){return[u]})),_:1})])])):(Object(a["openBlock"])(),Object(a["createBlock"])("table",p,[h,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(D.favoriteProduct,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id,class:"row g-0 p-4 border border-white align-items-center\n          bg-table text-dark border-bottom-0"},[Object(a["createVNode"])("td",j,[Object(a["createVNode"])(S,{to:"/product/".concat(t.id)},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("div",O,[Object(a["createVNode"])("img",{class:"w-40 me-4",src:t.imageUrl,alt:t.title},null,8,["src","alt"]),Object(a["createVNode"])("h3",g,Object(a["toDisplayString"])(t.title),1)])]})),_:2},1032,["to"])]),Object(a["createVNode"])("td",v,[Object(a["createVNode"])("div",f,[Object(a["createVNode"])("p",N,"NT$"+Object(a["toDisplayString"])(e.toCurrency(t.price)),1),t.price!==t.origin_price?(Object(a["openBlock"])(),Object(a["createBlock"])("p",V," NT$"+Object(a["toDisplayString"])(e.toCurrency(t.origin_price)),1)):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("td",x,[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-secondary secondary-hover text-white w-100 w-md-75",onClick:function(e){return _.addCart(t.id)}}," 加入購物車 ",8,["onClick"]),D.addloading?(Object(a["openBlock"])(),Object(a["createBlock"])("button",k,[w])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("td",C,[Object(a["createVNode"])("a",{onClick:Object(a["withModifiers"])((function(e){return _.openModal(t.id)}),["prevent"]),href:"#",class:"text-dark scale-hover"},[F],8,["onClick"])])])})),128)),Object(a["createVNode"])("tr",B,[Object(a["createVNode"])("td",null,[Object(a["createVNode"])(S,{to:"/shop",class:"btn btn-dark btn-hover px-7"},{default:Object(a["withCtx"])((function(){return[L]})),_:1})])])]))]),Object(a["createVNode"])(T,{ref:"delModal",onDelete:_.deleteFavorite},null,8,["onDelete"])],64)}o("159b"),o("99af"),o("a434");var D=o("a3a3"),_=o("1c33"),$={data:function(){return{isLoading:!1,updateLoading:!1,myFavorite:[],favoriteProduct:[],addloading:!1,tempID:""}},mixins:[_["a"]],inject:["emitter"],components:{FrontDelModal:D["a"]},methods:{getFavorite:function(){var e=this;this.myFavorite=this.getLocalStorage()||[],this.favoriteProduct=[],this.isLoading=!0,this.myFavorite.length>0?this.myFavorite.forEach((function(t){var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/product/").concat(t);e.$http.get(o).then((function(t){t.data.success?(e.favoriteProduct.push(t.data.product),e.isLoading=!1):e.isLoading=!1})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))})):this.isLoading=!1},openModal:function(e){this.tempID=e,this.$refs.delModal.openModal()},addCart:function(e){var t=this;this.addloading=!0;var o={data:{product_id:e,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),o).then((function(e){e.data.success?(t.emitter.emit("push-message",{type:"success",message:e.data.message}),t.emitter.emit("update-cart"),t.addloading=!1):(t.emitter.emit("push-message",{type:"error",message:e.data.message}),t.addloading=!1)})).catch((function(){t.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},deleteFavorite:function(){this.myFavorite.splice(this.myFavorite.indexOf(this.tempID),1),this.saveLocalStorage(this.myFavorite),this.emitter.emit("update-favorite"),this.$refs.delModal.hideModal(),this.emitter.emit("push-message",{type:"success",message:"商品已移除收藏清單"}),this.getFavorite()}},mounted:function(){this.getFavorite()}};$.render=M;t["default"]=$},a3a3:function(e,t,o){"use strict";var a=o("7a23"),c={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},r={class:"modal-dialog modal-dialog-centered"},d={class:"modal-content"},s=Object(a["createStaticVNode"])('<div class="modal-header text-dark py-4 border-0"><button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p class="text-dark text-center"> 確定要移除商品嗎？ </p><p class="text-sm text-info text-center">(刪除後將無法恢復)</p></div>',2),i={class:"modal-footer"},n=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-warning","data-bs-dismiss":"modal"}," 取消 ",-1);function l(e,t,o,l,b,m){return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",d,[s,Object(a["createVNode"])("div",i,[n,Object(a["createVNode"])("button",{type:"button",class:"btn btn-warning text-white",onClick:t[1]||(t[1]=function(t){return e.$emit("delete")})}," 確認刪除 ")])])])],512)}var b=o("e0ae"),m={emits:["delete"],mixins:[b["a"]]};m.render=l;t["a"]=m}}]);
//# sourceMappingURL=chunk-34e49f7e.978491b9.js.map