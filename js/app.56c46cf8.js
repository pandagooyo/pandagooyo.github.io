(function(t){function e(e){for(var s,o,c=e[0],n=e[1],l=e[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var n=a[c];0!==r[n]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=n;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"10f2":function(t,e,a){t.exports=a.p+"img/PG-002.a2966bc2.png"},1125:function(t,e,a){},1174:function(t,e,a){"use strict";a("a59e")},"13e6":function(t,e,a){t.exports=a.p+"img/PG-004.81e02e9b.png"},1501:function(t,e,a){t.exports=a.p+"img/PG-008.59d58d67.png"},1597:function(t,e,a){t.exports=a.p+"img/002.9d95c7ad.png"},"1ba7":function(t,e,a){"use strict";a("1125")},"1d54":function(t,e,a){t.exports=a.p+"img/004.d1e1ec6a.png"},"1e9b":function(t,e,a){},"2f23":function(t,e,a){"use strict";a("1e9b")},3030:function(t,e,a){t.exports=a.p+"img/og-image.3c2f91d4.png"},"32a0":function(t,e,a){t.exports=a.p+"img/002.9d95c7ad.png"},"33be":function(t,e,a){t.exports=a.p+"img/002.9d95c7ad.png"},"3da8":function(t,e,a){},"3db8":function(t,e,a){t.exports=a.p+"img/PG-006.d106aee3.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("db4d");var s=a("2b0e"),r=a("a584"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view",{attrs:{id:"router-view"}}),a("Footer",{attrs:{id:"footer"}})],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"tj-header"},[a("div",{staticClass:"tj-header__wrapper"},[a("div",[a("div",{attrs:{name:"logo"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"tj-header__logo",attrs:{src:t.logo,alt:t.title}})])],1),a("div",{staticClass:"tj-header__aside"}),a("div",{staticClass:"tj-header__actions"},[a("nav",{staticClass:"tj-header__navigation"},t._l(t.categories,(function(e,s){return a("div",{key:s,staticClass:"tj-header__navigation-item"},[a("div",{staticClass:"tj-header__navigation-item__item"},[a("div",{attrs:{name:"navigation-item"}},[a("TjLink",{staticClass:"tj-header-navigation-item__link",attrs:{to:e.to,href:e.href,target:"category.href ? _blank : _self"}},[t._v(t._s(e.label))])],1)])])})),0)])])])])},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.is,t._b({tag:"component",attrs:{to:t.to,href:t.href,target:t.target}},"component",t.attrs,!1),[t._t("default")],2)},d=[],u={props:{to:{type:[String,Object],default:""},href:{type:[String,Object],default:""}},computed:{attrs:function(){var t={};return this.href&&(t.href=this.href),t},is:function(){return this.href?"a":this.to?"router-link":"button"},target:function(){return this.href&&!this.disabled?"_blank":"_self"}}},p=u,v=a("2877"),f=Object(v["a"])(p,l,d,!1,null,null,null),m=f.exports,g={components:{TjLink:m},data:function(){return{logo:a("3030"),title:"판다구요",categories:[{label:"구매하러 가기",href:"https://smartstore.naver.com/pandagooyo",to:""}]}}},_=g,h=(a("bb7c"),Object(v["a"])(_,c,n,!1,null,"c6a64714",null)),b=h.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"tj-footer__wrapper tj-footer__wrapper_1023"},[s("div",{staticClass:"tj-footer__wrapper__mobile"},[t._m(0),s("div",{staticClass:"tj-footer__divide"}),s("div",{staticClass:"tj-footer__content"},[s("div",{staticClass:"title"},[t._v("계좌번호")]),s("TjImage",{staticStyle:{height:"32px"},attrs:{src:a("9496"),alt:"국민은행"}}),s("div",{staticClass:"account-number"},[t._v("557501-04-267030")]),s("div",{staticStyle:{color:"#72757e"}},[t._v("예금주 : 정상훈(판다구요)")])],1)]),s("div",{staticClass:"tj-footer__wrapper__mobile"},[s("div",{staticClass:"tj-footer__divide tj-show-719"}),s("div",{staticClass:"tj-footer__wrapper__tablet"},[s("div",{staticClass:"tj-footer__divide tj-hide-1279"}),s("div",{staticClass:"tj-footer__content"},[s("div",{staticClass:"title"},[t._v("커뮤니티")]),s("TjButton",{staticClass:"tj-button__outline",attrs:{href:"https://talk.naver.com/W4N10E"}},[s("i",{staticClass:"fas fa-comment-alt"}),s("span",[t._v("네이버 톡톡"),s("br"),t._v("문의하기")])])],1),s("div",{staticClass:"tj-footer__divide"}),s("div",{staticClass:"tj-footer__content"},[s("div",{staticClass:"title"},[t._v("바로가기")]),s("div",{staticClass:"tj-footer__wrapper"},[s("TjButton",{staticClass:"tj-button__outline",attrs:{href:"https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4893600949&apv_perm_no="}},[s("i",{staticClass:"fas fa-info"}),s("span",[t._v("공정거래위원회"),s("br"),t._v("사업자정보확인")])]),s("TjButton",{staticClass:"tj-button__outline",attrs:{href:"https://smartstore.naver.com/pandagooyo"}},[s("i",{staticClass:"fas fa-store"}),s("span",[t._v("네이버"),s("br"),t._v("스마트스토어")])]),s("TjButton",{staticClass:"tj-button__outline",attrs:{href:"https://blog.naver.com/shoony86"}},[s("i",{staticClass:"fas fa-blog"}),s("span",[t._v("네이버 블로그"),s("br"),t._v("바로가기")])])],1),s("div",{staticClass:"tj-footer__wrapper"},[s("TjButton",{staticClass:"tj-button__outline",attrs:{href:"https://www.facebook.com/PandaGuYou"}},[s("i",{staticClass:"fab fa-facebook-square"}),s("span",[t._v("페이스북")])]),s("TjButton",{staticClass:"tj-button__outline",attrs:{href:"https://www.instagram.com/sanghoon.dailylife"}},[s("i",{staticClass:"fab fa-instagram-square"}),s("span",[t._v("인스타그램")])])],1)])])])]),s("div",{staticClass:"tj-footer__wrapper",staticStyle:{"margin-top":"1rem"}},[s("TjImage",{staticClass:"tj-hide-399",attrs:{src:a("3030"),alt:"배너-판다구요"}}),s("div",{staticClass:"tj-footer__divide tj-hide-399"}),t._m(1)],1)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tj-footer__content"},[a("div",{staticClass:"title"},[t._v("고객센터")]),a("div",{staticClass:"tel"},[t._v("070-8867-7267")]),a("div",[a("span",{staticClass:"label",staticStyle:{"background-color":"#8d8f9a"}},[t._v("평 일")]),t._v(" 오전 10:00 ~ 오후 6:00"),a("br"),a("span",{staticClass:"label"}),t._v(" (점심시간 12시 ~ 1시) ")]),a("div",[a("span",{staticClass:"label",staticStyle:{"background-color":"#8d8f9a"}},[t._v("토요일")]),t._v(" 오전 10:00 ~ 오후 1:00")]),a("div",[a("span",{staticClass:"label",staticStyle:{"background-color":"#d12727"}},[t._v("휴무일")]),t._v(" 일요일/공휴일")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tj-footer__content",staticStyle:{"justify-content":"center"}},[a("div",[t._v("상호 : 판다구요 / 대표자 : 정상훈")]),a("div",[t._v("사업자등록번호 : 489-36-00949 / 통신판매신고 : 2021-경남김해-0528")]),a("div",[t._v("고객센터 : 070-8867-7267 / 주소 : 경상남도 김해시 삼계중앙로5번길 37 2층 (우) 50896")]),a("div",[t._v("개인정보책임자 : 정상훈 / 이메일 : shoony86@naver.com")])])}],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.is,t._b({tag:"component",staticClass:"tj-button",class:{"is-disabled--button":t.disabled},attrs:{to:t.to,href:t.href,target:t.target,disabled:t.disabled}},"component",t.attrs,!1),[t._t("default")],2)},j=[],w={props:{disabled:{type:Boolean,default:!1},to:{type:[String,Object],default:""},href:{type:[String,Object],default:""}},computed:{attrs:function(){var t={};return this.href&&(t.href=this.href),t},is:function(){return this.href?"a":this.to?"router-link":"button"},target:function(){return this.href&&!this.disabled?"_blank":"_self"}}},x=w,N=(a("1174"),Object(v["a"])(x,P,j,!1,null,"5fcc8064",null)),k=N.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tj-image--wrapper"},[a("img",t._g(t._b({attrs:{src:t.src,alt:t.alt,width:t.width,height:t.height}},"img",t.$attrs,!1),t.$listeners))])},T=[],S=(a("a9e3"),{props:{src:{type:String,required:!0},alt:{type:String,required:!0},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},data:function(){return{loaded:!1}}}),E=S,B=(a("e840"),Object(v["a"])(E,A,T,!1,null,"2a75a334",null)),O=B.exports,L={components:{TjButton:k,TjImage:O}},G=L,I=(a("2f23"),Object(v["a"])(G,C,y,!1,null,null,null)),W=I.exports,F={components:{Header:b,Footer:W}},Q=F,M=(a("034f"),Object(v["a"])(Q,i,o,!1,null,null,null)),H=M.exports,D=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"brand-new"},[a("p",{staticClass:"brand-new__paragraph"},[t._v("최신등록순")]),a("TjButton",{staticClass:"tj-button__text",attrs:{href:"https://smartstore.naver.com/pandagooyo"}},[t._v("전체상품 보러가기")])],1),a("TjCarousel",{attrs:{items:t.recentProducts},scopedSlots:t._u([{key:"default",fn:function(t){return a("TjProductCard",{attrs:{item:t.item}})}}])}),a("iframe",{staticStyle:{"margin-top":"1rem"},attrs:{src:"https://ads-partners.coupang.com/widgets.html?id=482603&template=carousel&trackingCode=AF9555338&subId=&width=1240&height=100",width:"100%",height:"100",frameborder:"0",scrolling:"no",referrerpolicy:"unsafe-url"}}),a("div",{staticClass:"brand-new"},[a("p",{staticClass:"brand-new__paragraph"},[t._v("네이쳐스웨이, 얼라이브!")]),a("TjButton",{staticClass:"tj-button__text",attrs:{href:"https://smartstore.naver.com/pandagooyo"}},[t._v("전체상품 보러가기")])],1),a("TjCarousel",{attrs:{items:t.naturesWayProducts},scopedSlots:t._u([{key:"default",fn:function(t){return a("TjProductCard",{attrs:{item:t.item}})}}])}),a("div",{staticClass:"brand-new"},[a("p",{staticClass:"brand-new__paragraph"},[t._v("라이프익스텐션, 투퍼데이!")]),a("TjButton",{staticClass:"tj-button__text",attrs:{href:"https://smartstore.naver.com/pandagooyo"}},[t._v("전체상품 보러가기")])],1),a("TjCarousel",{attrs:{items:t.lifeExtensionProducts},scopedSlots:t._u([{key:"default",fn:function(t){return a("TjProductCard",{attrs:{item:t.item}})}}])})],1)},Y=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tj-carousel"},[a("vue-glide",{attrs:{type:t.glideConfig.type,startAt:t.glideConfig.startAt,rewind:t.glideConfig.rewind,autoplay:t.glideConfig.autoplay,perView:t.glideConfig.perView,gap:t.glideConfig.gap},model:{value:t.glideIndex,callback:function(e){t.glideIndex=e},expression:"glideIndex"}},[t._l(t.items,(function(e,s){return a("vue-glide-slide",{key:s},[a("div",{staticClass:"tj-carousel-item"},[t._t("default",null,{item:e})],2)])})),a("template",{slot:"control"},[t.numberOfPages>1?a("div",{staticClass:"tj-carousel__control--left",attrs:{"data-glide-dir":"<"}},[a("i",{staticClass:"fas fa-chevron-left"})]):t._e(),t.numberOfPages>1?a("div",{staticClass:"tj-carousel__control--right",attrs:{"data-glide-dir":">"}},[a("i",{staticClass:"fas fa-chevron-right"})]):t._e()])],2)],1)},K=[],Z=a("9029"),z={props:{items:{type:Array,default:function(){return[]}}},data:function(){return{glideIndex:0,glideConfig:{type:"carousel",rewind:!0,perView:Z["isMobileOnly"]||Z["isTablet"]?2:4,gap:0}}},computed:{numberOfPages:function(){return this.items.length},page:function(){return this.glideIndex?this.glideIndex+1:1}}},V=z,R=(a("1ba7"),Object(v["a"])(V,J,K,!1,null,"7bf1f6fa",null)),q=R.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tj-product-card"},[a("div",{staticClass:"tj-product-card__image-wrapper"},[a("TjButton",{staticClass:"tj-product-card__link",attrs:{href:t.item.href,to:t.item.to}},[a("TjImage",{staticClass:"tj-product-card__image",attrs:{src:t.item.image,alt:t.item.title,width:t.item.imageWidth,height:t.item.imageHeight}})],1),t.item.badgeLabel?a("div",{staticClass:"tj-product-card__badge tj-badge"},[t._v(t._s(t.item.badgeLabel))]):t._e()],1),a("h3",{staticClass:"tj-product-card__title"},[t._v(t._s(t.item.title))]),a("div",{staticClass:"tj-price"},[t.item.specialPrice?t._e():a("span",{staticClass:"tj-price__regular"},[t._v(t._s(t.item.regularPrice))]),t.item.specialPrice?a("del",{staticClass:"tj-price__old"},[t._v(t._s(t.item.regularPrice))]):t._e(),t.item.specialPrice?a("ins",{staticClass:"tj-price__special"},[t._v(t._s(t.item.specialPrice))]):t._e()]),a("div",{staticClass:"tj-product-card__buttons"},[t.item.youtube?a("TjButton",{staticClass:"tj-button__outline",attrs:{href:t.item.youtube}},[a("i",{staticClass:"fab fa-youtube"}),a("span",[t._v("동영상보기")])]):t._e(),t.item.cellPhone?a("TjButton",{attrs:{href:t.item.cellPhone}},[a("i",{staticClass:"fas fa-phone"}),a("span",[t._v("전화주문")])]):t._e(),t.item.naverTalk?a("TjButton",{staticClass:"tj-button__outline",attrs:{href:t.item.naverTalk}},[a("i",{staticClass:"fas fa-comment-alt"}),a("span",[t._v("톡톡문의")])]):t._e(),!t.item.to&&t.item.detailPage?a("TjButton",{attrs:{href:t.item.detailPage}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("span",[t._v("상세보기")])]):t._e(),t.item.to?a("TjButton",{attrs:{to:t.item.to}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("span",[t._v("상세보기")])]):t._e()],1)])},$=[],tt={components:{TjButton:k,TjImage:O},props:{item:{type:Object,default:function(){return{}}}}},et=tt,at=(a("5746"),Object(v["a"])(et,X,$,!1,null,"0c6f0510",null)),st=at.exports,rt={components:{TjCarousel:q,TjProductCard:st,TjButton:k},props:{modelName:{type:String,default:""}},methods:{getYoutubeSrc:function(t){return t?"https://youtu.be/"+t:""}},created:function(){this.modelName&&this.$router.push({name:"Detail",query:{modelName:this.modelName}})},data:function(){return{recentProducts:[{badgeLabel:"79% 할인",image:a("1501"),title:"라이프익스텐션 투퍼데이 하이 포텐시 멀티비타민 종합비타민 120정",regularPrice:"38,900원",specialPrice:"7,890원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5598066160",href:"https://smartstore.naver.com/pandagooyo/products/5598066160"},{badgeLabel:"4% 할인",image:a("de36"),title:"라이프익스텐션 투퍼데이 하이 포텐시 멀티비타민 종합비타민 60정",regularPrice:"10,350원",specialPrice:"9,890원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5594971097",href:"https://smartstore.naver.com/pandagooyo/products/5594971097"},{badgeLabel:"36% 할인",image:a("5ac1"),title:"얼라이브 우먼스 구미젤리 멀티비타민 종합비타민 60구미젤리 혼합 베리 맛",regularPrice:"12,600원",specialPrice:"7,960원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5592548539",href:"https://smartstore.naver.com/pandagooyo/products/5592548539"},{badgeLabel:"30% 할인",image:a("3db8"),title:"얼라이브 맨스 구미젤리 멀티비타민 종합비타민 60구미젤리 혼합 베리 맛",regularPrice:"12,600원",specialPrice:"8,800원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5592704012",href:"https://smartstore.naver.com/pandagooyo/products/5592704012"},{badgeLabel:"44% 할인",image:a("13e6"),title:"얼라이브 원스데일리 우먼스 50세 이상 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"16,340원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5572804707",href:"https://smartstore.naver.com/pandagooyo/products/5572804707"},{badgeLabel:"28% 할인",image:a("c56c"),title:"얼라이브 원스데일리 맨스 50세 이상 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"21,010원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5572740055",href:"https://smartstore.naver.com/pandagooyo/products/5572740055"},{badgeLabel:"52% 할인",image:a("10f2"),title:"얼라이브 원스데일리 우먼스 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"13,740원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5572656756",href:"https://smartstore.naver.com/pandagooyo/products/5572656756"},{badgeLabel:"28% 할인",image:a("8150"),title:"얼라이브 원스데일리 맨스 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"21,010원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5570758917",href:"https://smartstore.naver.com/pandagooyo/products/5570758917"}],naturesWayProducts:[{badgeLabel:"36% 할인",image:a("5ac1"),title:"얼라이브 우먼스 구미젤리 멀티비타민 종합비타민 60구미젤리 혼합 베리 맛",regularPrice:"12,600원",specialPrice:"7,960원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5592548539",href:"https://smartstore.naver.com/pandagooyo/products/5592548539"},{badgeLabel:"30% 할인",image:a("3db8"),title:"얼라이브 맨스 구미젤리 멀티비타민 종합비타민 60구미젤리 혼합 베리 맛",regularPrice:"12,600원",specialPrice:"8,800원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5592704012",href:"https://smartstore.naver.com/pandagooyo/products/5592704012"},{badgeLabel:"44% 할인",image:a("13e6"),title:"얼라이브 원스데일리 우먼스 50세 이상 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"16,340원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5572804707",href:"https://smartstore.naver.com/pandagooyo/products/5572804707"},{badgeLabel:"28% 할인",image:a("c56c"),title:"얼라이브 원스데일리 맨스 50세 이상 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"21,010원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5572740055",href:"https://smartstore.naver.com/pandagooyo/products/5572740055"},{badgeLabel:"52% 할인",image:a("10f2"),title:"얼라이브 원스데일리 우먼스 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"13,740원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5572656756",href:"https://smartstore.naver.com/pandagooyo/products/5572656756"},{badgeLabel:"28% 할인",image:a("8150"),title:"얼라이브 원스데일리 맨스 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"21,010원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5570758917",href:"https://smartstore.naver.com/pandagooyo/products/5570758917"}],lifeExtensionProducts:[{badgeLabel:"79% 할인",image:a("1501"),title:"라이프익스텐션 투퍼데이 하이 포텐시 멀티비타민 종합비타민 120정",regularPrice:"38,900원",specialPrice:"7,890원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5598066160",href:"https://smartstore.naver.com/pandagooyo/products/5598066160"},{badgeLabel:"4% 할인",image:a("de36"),title:"라이프익스텐션 투퍼데이 하이 포텐시 멀티비타민 종합비타민 60정",regularPrice:"10,350원",specialPrice:"9,890원",naverTalk:"https://talk.naver.com/W4N10E",detailPage:"https://smartstore.naver.com/pandagooyo/products/5594971097",href:"https://smartstore.naver.com/pandagooyo/products/5594971097"}]}}},it=rt,ot=(a("ea61"),Object(v["a"])(it,U,Y,!1,null,"db791bfe",null)),ct=ot.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content-flex-row"},[a("div",{staticClass:"aside"},[a("div",{staticClass:"aside-image-wrapper"},[a("img",{staticClass:"aside-image",attrs:{src:t.product.image,alt:"대표이미지",width:t.product.imageWidth,height:t.product.imageHeight}})])]),a("div",{staticClass:"article"},[a("div",{staticClass:"section-wrapper"},[a("div",{staticClass:"section"},[a("div",{staticClass:"product-title"},[t._v(t._s(t.product.title))]),a("div",{staticClass:"product-info-wrapper"},[a("div",{staticClass:"product-badge-wrapper"},[a("div",{staticClass:"tj-badge"},[t._v(t._s(t.product.badgeLabel))])]),a("div",{staticClass:"product-price-wrapper"},[t.product.specialPrice?t._e():a("span",{staticClass:"tj-price__regular"},[t._v(t._s(t.product.regularPrice))]),t.product.specialPrice?a("del",{staticClass:"tj-price__old"},[t._v(t._s(t.product.regularPrice))]):t._e(),t.product.specialPrice?a("ins",{staticClass:"tj-price__special"},[t._v(t._s(t.product.specialPrice))]):t._e()])])]),a("div",{staticClass:"section"},[a("div",{staticClass:"delivery-period"},[t._m(0),a("div",{staticClass:"delivery-period-article"},[a("div",{staticClass:"delivery-period-section"},["a"==t.product.deliveryPeriodType?a("div",[a("strong",[t._v("주문확인 후 제작 상품")]),t._m(1)]):t._e(),"b"==t.product.deliveryPeriodType?a("div",[a("strong",[t._v("해외직배송 상품")]),t._m(2)]):t._e(),"c"==t.product.deliveryPeriodType?a("div",[a("strong",[t._v("오늘출발 마감(오후 2시까지 결제)")]),t._m(3)]):t._e()])])])]),a("div",{staticClass:"section"},[a("div",{staticClass:"delivery-method"},[a("span",[t._v("택배배송")]),a("span",{staticClass:"delivery-method-text-1"},[a("span",{staticClass:"delivery-method-text-2"},[t._v(t._s(t.product.deliveryPrice))]),t._v("원 "),a("span",{staticClass:"delivery-method-text-3"},[t._v("(주문시 결제)")])])]),a("p",{staticClass:"delivery-method-etc"},[t._v(t._s(t.product.deliveryPriceEtc))])]),a("div",{staticClass:"section"},[a("div",{staticClass:"tj-product-card__buttons"},[a("div",{staticClass:"flex-row"},[t.product.cellPhone?a("TjButton",{attrs:{href:t.product.cellPhone}},[a("i",{staticClass:"fas fa-phone"}),a("span",[t._v("전화주문")])]):t._e(),t.product.naverTalk?a("TjButton",{staticClass:"tj-button__outline",attrs:{href:t.product.naverTalk}},[a("i",{staticClass:"fas fa-comment-alt"}),a("span",[t._v("톡톡문의")])]):t._e()],1),a("div",{staticClass:"flex-row"},[t.product.youtube?a("TjButton",{staticClass:"tj-button__outline",attrs:{href:t.product.youtube}},[a("i",{staticClass:"fab fa-youtube"}),a("span",[t._v("동영상보기")])]):t._e()],1)])])])])]),a("div",{staticClass:"content-flex-column"},[a("div",{staticClass:"section"},[a("div",{staticClass:"section-title"},[t._v("상품정보")]),a("div",{staticClass:"table-row-wrapper"},[a("div",{staticClass:"table-row"},[a("div",{staticClass:"th"},[t._v("제조사")]),a("div",{staticClass:"td"},[t._v(t._s(t.product.nameOfManufacture))])]),a("div",{staticClass:"table-row"},[a("div",{staticClass:"th"},[t._v("브랜드")]),a("div",{staticClass:"td"},[t._v(t._s(t.product.brand))])])]),a("div",{staticClass:"table-row-wrapper"},[a("div",{staticClass:"table-row"},[a("div",{staticClass:"th"},[t._v("모델명")]),a("div",{staticClass:"td"},[t._v(t._s(t.modelNameString))])]),a("div",{staticClass:"table-row"},[a("div",{staticClass:"th"},[t._v("원산지")]),a("div",{staticClass:"td"},[t._v(t._s(t.product.origin))])])]),a("div",{staticClass:"table-row-wrapper"},[a("div",{staticClass:"table-row"},[a("div",{staticClass:"th"},[t._v("제조일자")]),a("div",{staticClass:"td"},[t._v(t._s(t.product.dateOfManufacture))])]),t._m(4)]),a("div",{staticClass:"table-row-wrapper"},[a("div",{staticClass:"table-row as"},[a("div",{staticClass:"th as"},[t._v("A/S 안내")]),a("div",{staticClass:"td as"},[a("span",[t._v("070-8867-7267")]),a("br"),a("span",[t._v(t._s(t.product.afterServiceInfo))])])]),t._m(5)])]),a("div",{staticClass:"section viewer"},[t.product.youtubeHeader?a("iframe",{staticClass:"youtube-iframe",attrs:{id:"youtubeIframe",width:"100%",height:t.youtubeHeight,src:t.product.youtubeHeader,title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e(),t._l(t.product.images,(function(t,e){return a("img",{key:e,attrs:{src:t}})})),t.product.youtubeFooter?a("iframe",{staticClass:"youtube-iframe",attrs:{id:"youtubeIframe",width:"100%",height:t.youtubeHeight,src:t.product.youtubeFooter,title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()],2),t._m(6),a("div",{staticClass:"section"},[a("div",{staticClass:"section-title"},[t._v("상품정보 제공고시")]),t._m(7),t._m(8),t._m(9),a("div",{staticClass:"table-row-wrapper offer-notice"},[a("div",{staticClass:"table-row offer-notice multi-line"},[a("div",{staticClass:"th multi-line"},[t._v("동일모델의 출시연월")]),a("div",{staticClass:"td multi-line"},[t._v(t._s(t.product.dateOfManufacture))])]),a("div",{staticClass:"table-row offer-notice"},[a("div",{staticClass:"th"},[t._v("제조자(사)")]),a("div",{staticClass:"td"},[t._v(t._s(t.product.nameOfManufacture))])])]),a("div",{staticClass:"table-row-wrapper offer-notice"},[a("div",{staticClass:"table-row offer-notice"},[a("div",{staticClass:"th"},[t._v("제조국")]),a("div",{staticClass:"td"},[t._v(t._s(t.product.origin))])]),t._m(10)]),t._m(11)])])])},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"delivery-period-aside"},[a("div",{staticClass:"delivery-period-icon"},[a("i",{staticClass:"fas fa-truck"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"delivery-period-text-1"},[a("span",[t._v("이 상품은 주문확인 후 제작을 시작하는 상품으로"),a("br"),t._v("결제완료 후 ")]),a("em",{staticClass:"delivery-period-text-2"},[t._v("7일 이내 발송예정")]),a("span",{staticClass:"delivery-period-text-3"},[t._v(" (영업일 기준)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"delivery-period-text-1"},[a("span",[t._v("이 상품은 해외에서 국내로 배송되는 상품으로"),a("br"),t._v(" 배송기간은 ")]),a("em",{staticClass:"delivery-period-text-2"},[t._v("주문일로부터 평균 5~10일정도 소요")]),a("span",{staticClass:"delivery-period-text-3"},[t._v(" (영업일 기준)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"delivery-period-text-1"},[a("span",[t._v("배송기간은 ")]),a("em",{staticClass:"delivery-period-text-2"},[t._v("주문일로부터 평균 1~3일정도 소요")]),a("span",{staticClass:"delivery-period-text-3"},[t._v(" (영업일 기준)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-row"},[a("div",{staticClass:"th"},[t._v("영수증발급")]),a("div",{staticClass:"td"},[t._v("신용카드전표, 현금영수증발급")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-row as dummy"},[a("div",{staticClass:"th as"}),a("div",{staticClass:"td as"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("iframe",{attrs:{src:"https://ads-partners.coupang.com/widgets.html?id=482603&template=carousel&trackingCode=AF9555338&subId=&width=1240&height=100",width:"100%",height:"100",frameborder:"0",scrolling:"no",referrerpolicy:"unsafe-url"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-row-wrapper offer-notice"},[a("div",{staticClass:"table-row offer-notice multi-line"},[a("div",{staticClass:"th multi-line"},[t._v("품명 / 모델명")]),a("div",{staticClass:"td multi-line"},[t._v("상품 상세설명 참조")])]),a("div",{staticClass:"table-row offer-notice"},[a("div",{staticClass:"th"},[t._v("크기")]),a("div",{staticClass:"td"},[t._v("상품 상세설명 참조")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-row-wrapper offer-notice"},[a("div",{staticClass:"table-row offer-notice"},[a("div",{staticClass:"th"},[t._v("중량")]),a("div",{staticClass:"td"},[t._v("상품 상세설명 참조")])]),a("div",{staticClass:"table-row offer-notice multi-line"},[a("div",{staticClass:"th multi-line"},[t._v("색상")]),a("div",{staticClass:"td multi-line"},[t._v("상품 상세설명 참조 (모니터 화질에 따라 다소 차이가 있을 수 있음)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-row-wrapper offer-notice"},[a("div",{staticClass:"table-row offer-notice"},[a("div",{staticClass:"th"},[t._v("재질")]),a("div",{staticClass:"td"},[t._v("상품 상세설명 참조")])]),a("div",{staticClass:"table-row offer-notice"},[a("div",{staticClass:"th"},[t._v("제품구성")]),a("div",{staticClass:"td"},[t._v("상품 상세설명 참조")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-row offer-notice"},[a("div",{staticClass:"th"},[t._v("상품별 세부사양")]),a("div",{staticClass:"td"},[t._v("상품 상세설명 참조")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-row-wrapper offer-notice"},[a("div",{staticClass:"table-row offer-notice multi-line"},[a("div",{staticClass:"th multi-line"},[t._v("품질보증기준")]),a("div",{staticClass:"td multi-line"},[t._v("상품 상세설명 참조")])]),a("div",{staticClass:"table-row offer-notice multi-line"},[a("div",{staticClass:"th multi-line"},[t._v("AS 책임자와 전화번호")]),a("div",{staticClass:"td multi-line"},[t._v("상품 상세설명 참조")])])])}],dt=(a("5319"),a("ac1f"),{components:{TjButton:k},props:{modelName:{type:String,default:""}},methods:{getYoutubeSrc:function(t){return t?"https://www.youtube.com/embed/"+t:""}},mounted:function(){var t=document.getElementById("youtubeIframe");t&&(this.youtubeHeight=t.clientWidth/16*9+"px")},data:function(){return{products:{PG_004:{badgeLabel:"44% 할인",image:a("13e6"),title:"얼라이브 원스데일리 우먼스 50세 이상 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"16,340원",cellPhone:"tel:07088677267",naverTalk:"https://talk.naver.com/W4N10E",deliveryPeriodType:"b",deliveryPrice:"7,000",deliveryPriceEtc:"3~4개 9,000원, 5개 이상 11,000원",nameOfManufacture:"네이쳐스웨이",brand:"얼라이브",origin:"미국산(Nature's Way)",dateOfManufacture:"상품 하단에 표기",afterServiceInfo:"해외구매대행의 경우 서비스의 특성 상 상품의 제조사 또는 공급처와 연계되어 있지 않은 관계로 A/S는 불가능합니다.",imageHeight:"100%",youtubeHeader:"",images:[a("89f5"),a("1597"),a("f1e0"),a("c945")],youtubeFooter:this.getYoutubeSrc("QO6IlCGwdVU")},PG_003:{badgeLabel:"28% 할인",image:a("c56c"),title:"얼라이브 원스데일리 맨스 50세 이상 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"21,010원",cellPhone:"tel:07088677267",naverTalk:"https://talk.naver.com/W4N10E",deliveryPeriodType:"b",deliveryPrice:"7,000",deliveryPriceEtc:"3~4개 9,000원, 5개 이상 11,000원",nameOfManufacture:"네이쳐스웨이",brand:"얼라이브",origin:"미국산(Nature's Way)",dateOfManufacture:"상품 하단에 표기",afterServiceInfo:"해외구매대행의 경우 서비스의 특성 상 상품의 제조사 또는 공급처와 연계되어 있지 않은 관계로 A/S는 불가능합니다.",imageHeight:"100%",youtubeHeader:"",images:[a("f2eb"),a("32a0"),a("8928"),a("1d54")],youtubeFooter:this.getYoutubeSrc("QO6IlCGwdVU")},PG_002:{badgeLabel:"52% 할인",image:a("10f2"),title:"얼라이브 원스데일리 우먼스 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"13,740원",cellPhone:"tel:07088677267",naverTalk:"https://talk.naver.com/W4N10E",deliveryPeriodType:"b",deliveryPrice:"7,000",deliveryPriceEtc:"3~4개 9,000원, 5개 이상 11,000원",nameOfManufacture:"네이쳐스웨이",brand:"얼라이브",origin:"미국산(Nature's Way)",dateOfManufacture:"상품 하단에 표기",afterServiceInfo:"해외구매대행의 경우 서비스의 특성 상 상품의 제조사 또는 공급처와 연계되어 있지 않은 관계로 A/S는 불가능합니다.",imageHeight:"100%",youtubeHeader:"",images:[a("ffb5"),a("5d64"),a("e6e1"),a("72d4")],youtubeFooter:this.getYoutubeSrc("QO6IlCGwdVU")},PG_001:{badgeLabel:"28% 할인",image:a("8150"),title:"얼라이브 원스데일리 맨스 울트라 포텐시 멀티비타민 종합비타민 60정",regularPrice:"29,200원",specialPrice:"21,010원",cellPhone:"tel:07088677267",naverTalk:"https://talk.naver.com/W4N10E",deliveryPeriodType:"b",deliveryPrice:"7,000",deliveryPriceEtc:"3~4개 9,000원, 5개 이상 11,000원",nameOfManufacture:"네이쳐스웨이",brand:"얼라이브",origin:"미국산(Nature's Way)",dateOfManufacture:"상품 하단에 표기",afterServiceInfo:"해외구매대행의 경우 서비스의 특성 상 상품의 제조사 또는 공급처와 연계되어 있지 않은 관계로 A/S는 불가능합니다.",imageHeight:"100%",youtubeHeader:"",images:[a("a457"),a("33be"),a("a790"),a("7a05")],youtubeFooter:this.getYoutubeSrc("QO6IlCGwdVU")}},youtubeHeight:this.youtubeHeight}},computed:{product:function(){return this.products[this.modelName]},modelNameString:function(){return this.modelName.replace("_","-")}}}),ut=dt,pt=(a("fbae"),Object(v["a"])(ut,nt,lt,!1,null,"2df4ef1c",null)),vt=pt.exports;s["a"].use(D["a"]);var ft=[{path:"/",name:"Home",component:ct,props:function(t){return{modelName:t.query.modelName}}},{path:"/detail",name:"Detail",component:vt,props:function(t){return{modelName:t.query.modelName}}}],mt=new D["a"]({mode:"history",base:"/",routes:ft,scrollBehavior:function(t,e,a){return a||{x:0,y:0}}}),gt=mt,_t=a("c13f"),ht=a.n(_t);a("033b");s["a"].config.productionTip=!1,s["a"].use(r["a"],{config:{id:"UA-196242209-1"}}),s["a"].use(ht.a),new s["a"]({router:gt,render:function(t){return t(H)}}).$mount("#app")},5746:function(t,e,a){"use strict";a("cd2f")},"5ac1":function(t,e,a){t.exports=a.p+"img/PG-005.33639ba7.png"},"5d64":function(t,e,a){t.exports=a.p+"img/002.9d95c7ad.png"},"71c6":function(t,e,a){},"72d4":function(t,e,a){t.exports=a.p+"img/004.d1e1ec6a.png"},"7a05":function(t,e,a){t.exports=a.p+"img/004.d1e1ec6a.png"},8150:function(t,e,a){t.exports=a.p+"img/PG-001.6c0634a3.png"},"85ec":function(t,e,a){},8928:function(t,e,a){t.exports=a.p+"img/003.b9ba92cb.png"},"89f5":function(t,e,a){t.exports=a.p+"img/001.dbaa0abc.png"},"905f":function(t,e,a){},9496:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAgCAYAAAAyjgdLAAALEUlEQVRoQ+1aeVxV1Rb+zrn3njswqYBoDkj6mswKpJxTK9HMrKynz0ore5pDaJmKgiioqMDLJziQ81Pzl2Vm2Su1Mp9ZqWlOSIKJESjihIze6Zyz32/vO3Av3AGlPyLu+gsP6+yz1/rW8K2FHCGEwCdNwgOcD+wmgTMz0gd208HaB3YTwtoHtg/spuSBJmRrA3s2Aak+C2jaglP4NSG3NU5TGwS2VPIJxGMvQNEhFsr7Mlx7QKyCfPUL8GHDAF7VOL30F7l1g8A2fR8FueI4hK47wIc96+QSAgLp7BxI51LYcyGmHJwy4C/itlszgxAZHMfXeamyogwnjx1G8YVC8DyP9hGd8EDkw9BodC4/sPvzj+EfGIjefQfQQYrp0LNtPwPE5XdshzUAbALjLgEgIoT+BeC04fYLEtM1mI8Mhlx+BOAFCN33g2/WzeFS3p2VkvgWJFHE7JQM8LzC6QVRNGPFkvkov1GK4NAwjJ8SD4VCgaylKbh6+ZLLw1WCgIiOd2HIcyPhHxBUR+fbPTtxYN8e0CD1JAEBQXgnYRFT+XrXDpw5fdyleljrthjx8jhQQNPmxWFcbBzahd9p1926aRVyTv0Mjueh1epAd1t6/U2KHvoPGILHBg5lumfPZONyyUX28949O+HvH4Buvfqzf997/0NYlp6M6O69UVlRgXN5OZizaLnb63sFWyreCkjV4NuNAWeNJhZRpqswfdOSAagepGeg0ouKZ6ZCKshkH+RDn4Sy6yfgeLV3dGtpJMdNgiiZkZyW5QR22Y3ryExLgtlkQlS3nnh2+Gj7vZalJ+FKySX07Ps41BoNDXQW9GazGQX5Z3Gh8DeA4zAjMQ0Bgc6AX750EVevuA4U29W++HQrOzBubjp7tH3rBpw4egj3PxjtdPtfso+hddt2GD853gr2DIyLnWkH+1zeL9i4Zil69xuImKeGgeMsWSrLEt5fvwK/5p7G9MRUBAY1B/3m0UMHIJpFuhUBCNUlUGu1eOHFMfjgP1no2r0PqsqtYC++TbCJZIBpDyVeBJyuA5Rd1oIPplHFQb72DUw/DQDHKaAeZIJ8fR/MPw8FJL1FN/pL8P73WEoNfd8hUOqDvCuw885k4/11FmNGjBpbx8k2sKclLkJQsxZ1PvPD/q+we+d2dOvVD0OGjazPNZx0/r04ASajyQnsU8cOIzntPSe9BbMnI6RlK7dgf/nZhzh4YC/mLl4BpdKZx9wovYYlKQl48bUJLHNpUM9LiEXnLpF4bsSroFVtzbI0VFdVIH7+UiTFTYBGo4UkyZAlCXNuF2wGlPEKzAd7gdzMt4CmbgVV9E6Qa3thzpsFjhfABUaDlP0IKAOgitwGPnSg1XgCMW82pKK1UD9Rcktl3A52ahZ4hQLf7PoU+/d+CbVag9jpSS7B9AZ28YXfkbV0IaIe6Ynnhr/iAJC1BHiB/48CO/eXk9iyfgUGPDUMj/YfZP8qLeXbtqxF9okjrFU0ax6M3/LzsD7rXbw9KwUtgkNZ6hw9/D0+27YZCQsysGjO2wgOCWPVq7qyomFg224iX/sa5uP/AMylFtAUWhDppj1jFZ1mQ3lXslXdUpZoWTd+2wbEWALNYOm2wE5avBKb1mbi/LlctG0fgbGTZjDwXYknsGVZxrqV6SgsyMdbMxcgOIS2IIts2bACuTmn6h5pqZi1ggJQqQTWG2kZp5mdlJrl9G5K4hSPmU2VN67OwLmzOVAolaxcE1lGRfkN0Hv26PM4Bj8znPmLZvDipGloHhyKZ154GUaDAR9/sB6SaMbcxSuRPHMiunbrgypbz25IZjuZSgjki5shnnoNBJQFgjFsod95cEKIC/9bSBzhFNAMMrAqQSopoeHBBXUFp6pbam2H2DKb9tbKinL87e7OGD12sseAsYGt9dM5NQ2aMQaDHgFBzTBy9HgWNI5y5XIxDJQcWSxiCBuNBmxak8l6anhEJ/tzG/Nt36GjtWcfZDzASQhBm/Yd3JZxaybg+tUrOHLoAC5dLGRELbxDR0T3eBSUBDrK6ZNHsePDjTCZjOwelKS9+sbbaNnqDjvYleXlFoL2R4FdQ8Ay7KyVmsnp7oSqx0FwalpmHAwnIgy7VACvBi+EgRiKWEUAkQDZCL7136GK/NAlgDawp8YvRGbaXNarHFmqp8zuEhnNss8mJrMRFwsLQPthKO2lUxIgqD2TRgo+zdCXxryJe+570GUluXqlhGWeKxEEDe5o296JoNGJ4PPtW1zqu3s46vVYaLSWUYz2ZFpoin4/DxoAlOnTyaLzA1HQ6fyh11ezicMJA4eDvbJxmy6pyrX0bnMZFB3jWA+XLn0EDjzLckrAlJ2XQxE+seZ42QDjbq2VFPNQ9fgOfPNeLHNM+++FXJ0Hocf31mfO5joSNBrRS1LimTFdIh/B8JfGuvSNt55Nx5jNa5ejWYsW9vHJdtDmdcvYvFsjBFWVFdDq/KBQKO2PBUFg/dMmkiRaWky7CKZbWygg6fPjMPbNOBZglJyd/zWXVZnQlq29Aj/ylfGMgFGh1endlHgY9NVQa7RsZDPo9TAYbkJQazA1PgV+fu53GV7AplSfQMyZCKlwNfiQGKi6bgcUfhCzX4dYtB6K4MfAtxkFMfufAJHBt3gUyoe2gNPcwbLXBrYQvRN8y6drsm1fOGR9IYSeh6wzuHuw6ZxNZ+6lqYkoKy1F2/AIjIudUWeB4A1sWs6TZkyETGQkpa5wAJHgx+/2ouwG5SPuJfvET6y8z1lYM97QgEhNnoYxE95BRMe7vYJHFeZMf4P1WdqDb0Xey1gISjIp57CQNYuUl5UyBh8c2hKTZ9h4U92TPYJNWbSYMwmcpj1UD/8XnF+NMWLeTIj5qSwraXbSkct09GmQ69+yr/Cth0P54CaYdmsAjod6kNne2+TSAzAf6stKujqmkv2+trgavShY72UsQnFRAWPjU2bOh0pVM7p4A9tsNmLezMmsylnm97rf9eT8VZkLcbmk+I8Bu3sfPPP8rYE9L/5NNG8RgthpSbWuSbB6WRouFhUwu9yJB7AJiPEye49Th9XpA9LvK2HOmQQ+8CEIvWu2SPKNH9j2DGIloNBBFbUNfMgAECgA8zXLCrVwFasOQt9ccJo2Lu/mbqlCleniIS/nJASNGlNnpcDPP5CdYQN7wtR4BAY2t59LlxUlxRew46ONqKqoBO3pw1923QpuF+wRo8aBkjZ3QvuuIFh4As3sB6IeQczgYR4Tm7J0R2GBfqGAtREKunNmx7Nt4m1ntqebyNf/B9Ph/uB1d0Lol18n0qT8dIhnE9g61bJdE1lL4IRQKDrNAh8eay3DtZis9SRPYFOVzz/Zgp9+3M+yc+LURIS1amMHm22aagvhoFAq0LtfDJ540nmP79HjDr9clbmIrS7rlPGk6Wy75W7RSi0c+vxLeLhHXzvYtEp5WszSd+alr7Jv1+iLtGcvWRgP/c1qtj/X6nRsxUrJJN0/UDKr8/O/ncz27ALbupQuWYTH3awZiQjx/L8gnU+DKvIjy/aNcz0j1/4a2xODQKt1/6dTSthszJORFYOe7ZhdiVKptJZ818FVH8BNRiObQqhjHYVOCt6E8g5b26iPPj2v9naNfYMQFPx2DjmnjqKirAz+gRY2TvmCbe3q7i71ZuOuDjB+RcuMDHVMuTdbfb//E3igQWCLp8dDKtoA9ZN02PfJn90DDQKbLkdIxUlwQVF/djt99/P9V+KmFQMNy+ym5atGb60P7EYPYf0N8IFdf181ek0f2I0ewvob4AO7/r5q9Jo+sBs9hPU34P/B9WTsUpNKTgAAAABJRU5ErkJggg=="},a457:function(t,e,a){t.exports=a.p+"img/001.dbaa0abc.png"},a59e:function(t,e,a){},a790:function(t,e,a){t.exports=a.p+"img/003.b9ba92cb.png"},bb7c:function(t,e,a){"use strict";a("3da8")},c56c:function(t,e,a){t.exports=a.p+"img/PG-003.4ab4c357.png"},c945:function(t,e,a){t.exports=a.p+"img/004.d1e1ec6a.png"},cd2f:function(t,e,a){},d665:function(t,e,a){},de36:function(t,e,a){t.exports=a.p+"img/PG-007.97d45f61.png"},e6e1:function(t,e,a){t.exports=a.p+"img/003.b9ba92cb.png"},e840:function(t,e,a){"use strict";a("905f")},ea61:function(t,e,a){"use strict";a("d665")},f1e0:function(t,e,a){t.exports=a.p+"img/003.b9ba92cb.png"},f2eb:function(t,e,a){t.exports=a.p+"img/001.dbaa0abc.png"},fbae:function(t,e,a){"use strict";a("71c6")},ffb5:function(t,e,a){t.exports=a.p+"img/001.dbaa0abc.png"}});
//# sourceMappingURL=app.56c46cf8.js.map