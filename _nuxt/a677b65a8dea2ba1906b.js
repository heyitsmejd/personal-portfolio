(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(t,e,n){var content=n(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1fcd4353",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var r=n(172);n.n(r).a},174:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".navbar{background:none!important}.navbar-burger{color:#e8e8e8}.is-faded{background:#1f1e1e!important}.is-logo{color:#fff;font-family:Quicksand;font-weight:400}@media screen and (max-width:1087px){.navbar-menu{background-color:#2b2828!important}.navbar-item,.navbar-link{color:#00d1b2}}@media screen and (max-width:992px){a.navbar-item.is-logo.nuxt-link-active{height:3.25em}}@media screen and (min-width:1088px){.nuxt-link-exact-active{color:#fff!important;border-bottom:3px solid #00d1b2}.navbar-item{color:#d3d3d3;font-weight:700;font-size:1em;margin-right:2em}.navbar-item:last-child{margin-right:0}.navbar-item:hover{color:#00d1b2!important}a.navbar-item.is-logo:hover{color:#fff!important}}",""])},175:function(t,e,n){"use strict";var r={mounted:function(){var t=document.getElementById("burger"),e=document.getElementById("navMenu");t.addEventListener("click",function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")});var n=document.querySelector("#navScroll");window.onscroll=function(){window.pageYOffset>=50?(n.classList.add("is-faded"),n.classList.remove("navScroll")):(n.classList.add("navScroll"),n.classList.remove("is-faded"))}},data:function(){return{startY:120}}},o=(n(173),n(18)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-fixed-top is-transparent navScroll",attrs:{id:"navScroll",role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("nuxt-link",{staticClass:"navbar-item is-logo",attrs:{to:"/"}},[n("span",{staticClass:"is-size-3"},[t._v("JD"),n("span",{staticClass:"has-text-primary"},[t._v("K")])])]),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"navbar-menu navbar-end",attrs:{id:"navMenu"}},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n        Home\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v("\n        Projects\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v("\n        Contact\n      ")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger",attrs:{role:"button",id:"burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},191:function(t,e,n){"use strict";n.r(e);var r={components:{Navbar:n(175).a},head:function(){return{title:"Odyssey Boost Project - Heyitsmejd"}},data:function(){return{projectSelected:!1}},methods:{selectProject:function(t){console.log(t),this.projectSelected=!0}}},o=n(18),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"body-bg"}),this._v(" "),e("Navbar"),this._v(" "),this._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container fixed-top"},[n("div",{staticClass:"middle-content"},[n("div",{staticClass:"columns mt-2"},[n("div",{staticClass:"column is-one-quarter"},[n("div",{staticClass:"project-title is-size-3 has-text-white"},[n("span",{staticClass:"green-underline"},[t._v("Odyssey Boost")])]),t._v(" "),n("div",{staticClass:"project-descript has-text-white-ter mt-2"},[t._v("\n                A landing page design for a League of Legends website.\n              ")]),t._v(" "),n("div",{staticClass:"mt-2 has-text-light"},[n("span",{staticClass:"has-text-primary has-text-weight-bold"},[t._v("Technologies")]),t._v(" "),n("ul",{staticClass:"project-stack "},[n("li",[t._v("Bootstrap")]),t._v(" "),n("li",[t._v("CSS")]),t._v(" "),n("li",[t._v("HTML")])])]),t._v(" "),n("div",{staticClass:"project-links"})]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("div",{staticClass:"image is-16by9"},[n("img",{attrs:{src:"/images/projects/odyssey-1.png",width:"100%",height:"100%"}})])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content has-text-white-ter"},[n("div",{staticClass:"project-content is-size-6 has-text-weight-bold"},[t._v("\n                      A screenshot of the Odyssey Boost landing page.\n                    ")])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);