(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e49f7e"],{a09f:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),a={class:"container pt-15 border-bottom border-light pb-15 mb-15"},r={class:"breadcrumb mb-5"},d={class:"breadcrumb-item"},i=Object(c["createTextVNode"])("首頁"),n=Object(c["createVNode"])("li",{class:"breadcrumb-item active"},"收藏清單",-1),s=Object(c["createVNode"])("h3",{class:"d-flex rounded-top align-items-center\n     bg-secondary text-2xl p-4"},[Object(c["createVNode"])("span",{class:"material-icons me-3"}," favorite "),Object(c["createTextVNode"])("收藏清單 ")],-1),l={key:0,class:"p-4 border border-white border-bottom-0 bg-table text-dark"},b=Object(c["createVNode"])("p",{class:"text-center text-xl mb-6"},"目前沒有收藏商品，快去逛逛商店吧～",-1),u={class:"d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5"},m=Object(c["createTextVNode"])(" 前往商店"),p={key:1},h=Object(c["createStaticVNode"])('<div class="d-none d-md-flex row g-0 p-4 border border-white\n       border-bottom-0 bg-table text-dark"><div class="col-6">商品資料</div><div class="col-2">價格</div><div class="col-3">購買狀態</div><div class="col-1">刪除</div></div>',1),v={class:"col-11 col-md-6 mb-5 mb-md-0"},j={class:"d-flex align-items-center"},O={class:"text-base text-dark"},g={class:"col-6 col-md-2 order-4 order-md-0"},f={class:"d-flex d-md-block align-items-end"},N={class:"me-3 me-md-0"},x={key:0,class:"text-dark opacity-5 text-sm text-decoration-line-through"},V={class:"col-6 col-md-3 order-4 order-md-0 "},k={class:"position-relative"},y={key:0,type:"button",class:" btn d-flex justify-content-center\n                align-items-center position-absolute no-allow w-100\n               w-md-75 h-100 top-0 start-0 bg-light"},w=Object(c["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(c["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),C={class:"col-1 order-2 order-md-0"},F=Object(c["createVNode"])("span",{class:"material-icons"}," delete_forever ",-1),B={class:"d-flex justify-content-end\n      rounded-bottom bg-table border border-white p-6"},L=Object(c["createVNode"])("span",null,"前往商店",-1);function M(e,t,o,M,D,_){var $=Object(c["resolveComponent"])("Loading"),S=Object(c["resolveComponent"])("router-link"),T=Object(c["resolveComponent"])("FrontDelModal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])($,{isLoading:D.isLoading},null,8,["isLoading"]),Object(c["createVNode"])("div",a,[Object(c["createVNode"])("ol",r,[Object(c["createVNode"])("li",d,[Object(c["createVNode"])(S,{to:"/"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})]),n]),s,D.myFavorite.length<=0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",l,[b,Object(c["createVNode"])("div",u,[Object(c["createVNode"])(S,{class:"white-hover",to:"/shop"},{default:Object(c["withCtx"])((function(){return[m]})),_:1})])])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",p,[h,Object(c["createVNode"])("div",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(D.favoriteProduct,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t.id,class:"row g-0 p-4 border border-white align-items-center\n        bg-table text-dark border-bottom-0"},[Object(c["createVNode"])("div",v,[Object(c["createVNode"])(S,{to:"/product/".concat(t.id)},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("div",j,[Object(c["createVNode"])("img",{class:"w-40 me-4",src:t.imageUrl,alt:""},null,8,["src"]),Object(c["createVNode"])("h3",O,Object(c["toDisplayString"])(t.title),1)])]})),_:2},1032,["to"])]),Object(c["createVNode"])("div",g,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("p",N,"NT$"+Object(c["toDisplayString"])(e.toCurrency(t.price)),1),t.price!==t.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("p",x," NT$"+Object(c["toDisplayString"])(e.toCurrency(t.origin_price)),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])("div",V,[Object(c["createVNode"])("div",k,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-secondary secondary-hover text-white w-100 w-md-75",onClick:function(e){return _.addCart(t.id)}}," 加入購物車 ",8,["onClick"]),D.addloading?(Object(c["openBlock"])(),Object(c["createBlock"])("button",y,[w])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])("div",C,[Object(c["createVNode"])("a",{onClick:Object(c["withModifiers"])((function(e){return _.openModal(t.id)}),["prevent"]),href:"#",class:"text-dark scale-hover"},[F],8,["onClick"])])])})),128))]),Object(c["createVNode"])("div",B,[Object(c["createVNode"])(S,{to:"/shop",class:"btn btn-dark btn-hover px-7 "},{default:Object(c["withCtx"])((function(){return[L]})),_:1})])]))]),Object(c["createVNode"])(T,{ref:"delModal",onDelete:_.deleteFavorite},null,8,["onDelete"])],64)}o("159b"),o("99af"),o("a434");var D=o("a3a3"),_=o("1c33"),$={data:function(){return{isLoading:!1,updateLoading:!1,myFavorite:[],favoriteProduct:[],addloading:!1,tempID:""}},mixins:[_["a"]],inject:["emitter"],components:{FrontDelModal:D["a"]},methods:{getFavorite:function(){var e=this;this.myFavorite=this.get()||[],this.favoriteProduct=[],this.isLoading=!0,this.myFavorite.length>0?this.myFavorite.forEach((function(t){var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/product/").concat(t);e.$http.get(o).then((function(t){t.data.success?(e.favoriteProduct.push(t.data.product),e.isLoading=!1):e.isLoading=!1})).catch((function(e){return e}))})):this.isLoading=!1},openModal:function(e){this.tempID=e,this.$refs.delModal.openModal()},addCart:function(e){var t=this;this.addloading=!0;var o={data:{product_id:e,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),o).then((function(e){e.data.success?(t.emitter.emit("push-message",{type:"success",message:e.data.message}),t.emitter.emit("update-cart"),t.addloading=!1):(t.emitter.emit("push-message",{type:"error",message:e.data.message}),t.addloading=!1)})).catch((function(e){return e}))},deleteFavorite:function(){this.myFavorite.splice(this.myFavorite.indexOf(this.tempID),1),this.save(this.myFavorite),this.emitter.emit("update-favorite"),this.$refs.delModal.hideModal(),this.emitter.emit("push-message",{type:"success",message:"商品已移除收藏清單"}),this.getFavorite()}},mounted:function(){this.getFavorite()}};$.render=M;t["default"]=$},a3a3:function(e,t,o){"use strict";var c=o("7a23"),a={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},r={class:"modal-dialog modal-dialog-centered"},d={class:"modal-content"},i=Object(c["createStaticVNode"])('<div class="modal-header text-dark py-4 border-0"><button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p class="text-dark text-center"> 確定要移除商品嗎？ </p><p class="text-sm text-info text-center">(刪除後將無法恢復)</p></div>',2),n={class:"modal-footer"},s=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-warning","data-bs-dismiss":"modal"}," 取消 ",-1);function l(e,t,o,l,b,u){return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",d,[i,Object(c["createVNode"])("div",n,[s,Object(c["createVNode"])("button",{type:"button",class:"btn btn-warning text-white",onClick:t[1]||(t[1]=function(t){return e.$emit("delete")})}," 確認刪除 ")])])])],512)}var b=o("e0ae"),u={mixins:[b["a"]]};u.render=l;t["a"]=u}}]);
//# sourceMappingURL=chunk-34e49f7e.9a27bd7b.js.map