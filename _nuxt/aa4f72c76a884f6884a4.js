(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(t,e,c){var content=c(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(33).default)("1fcd4353",content,!0,{sourceMap:!1})},174:function(t,e,c){"use strict";var n=c(173);c.n(n).a},175:function(t,e,c){(t.exports=c(32)(!1)).push([t.i,".navbar{background:none!important}.navbar-burger{color:#e8e8e8}.is-faded{background:#1f1e1e!important}.is-logo{color:#fff;font-family:Quicksand;font-weight:400}@media screen and (max-width:1087px){.navbar-menu{background-color:#2b2828!important}.navbar-item,.navbar-link{color:#00d1b2}}@media screen and (max-width:992px){a.navbar-item.is-logo.nuxt-link-active{height:3.25em}}@media screen and (min-width:1088px){.nuxt-link-exact-active{color:#fff!important;border-bottom:3px solid #00d1b2}.navbar-item{color:#d3d3d3;font-weight:700;font-size:1em;margin-right:2em}.navbar-item:last-child{margin-right:0}.navbar-item:hover{color:#00d1b2!important}a.navbar-item.is-logo:hover{color:#fff!important}}",""])},176:function(t,e,c){"use strict";var n={mounted:function(){var t=document.getElementById("burger"),e=document.getElementById("navMenu");t.addEventListener("click",function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")});var c=document.querySelector("#navScroll");window.onscroll=function(){window.pageYOffset>=50?(c.classList.add("is-faded"),c.classList.remove("navScroll")):(c.classList.add("navScroll"),c.classList.remove("is-faded"))}},data:function(){return{startY:120}}},l=(c(174),c(18)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("nav",{staticClass:"navbar is-fixed-top is-transparent navScroll",attrs:{id:"navScroll",role:"navigation","aria-label":"main navigation"}},[c("div",{staticClass:"container"},[c("div",{staticClass:"navbar-brand"},[c("nuxt-link",{staticClass:"navbar-item is-logo",attrs:{to:"/"}},[c("span",{staticClass:"is-size-3"},[t._v("JD"),c("span",{staticClass:"has-text-primary"},[t._v("K")])])]),t._v(" "),t._m(0)],1),t._v(" "),c("div",{staticClass:"navbar-menu navbar-end",attrs:{id:"navMenu"}},[c("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n        Home\n      ")]),t._v(" "),c("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("\n        About\n      ")]),t._v(" "),c("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v("\n        Projects\n      ")]),t._v(" "),c("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/heyitsmejd/",target:"_blank"}},[t._v("\n        Github\n      ")]),t._v(" "),c("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v("\n        Contact\n      ")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger",attrs:{role:"button",id:"burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},179:function(t,e,c){var content=c(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(33).default)("48a668d6",content,!0,{sourceMap:!1})},185:function(t,e,c){"use strict";var n=c(179);c.n(n).a},186:function(t,e,c){(t.exports=c(32)(!1)).push([t.i,".project-card:hover{background:#424141}p.title.project-title.is-size-3.has-text-white.has-text-centered{margin-bottom:.5em}.project-action{margin-bottom:1.5rem}.content.has-text-white-ter{height:5em}.content.has-text-white-ter,li.tech-icon{display:flex;justify-content:center;align-items:center}li.tech-icon{flex-direction:column}.first-intro{font-size:2.5em;color:#fff}.second-intro{font-size:2em;color:#fff}.mb-2{margin-bottom:2em!important}.third-intro{font-size:2em;color:#fff}.middle-content{width:100%;display:flex;justify-content:center;flex-direction:column}.project-techs{margin:0!important;display:flex;justify-content:space-between;align-items:center}.tech{background:#209cee;list-style:none;padding:8px;border-radius:.25em;color:#fff;margin-right:.25em}.tech:last-child{margin-right:0}.fixed-top{margin-top:60px}.body-bg{position:fixed;top:0;background-image:URL(/images/jumbo-bg.jpg);height:100vh;width:100%;-webkit-filter:grayscale(95%) brightness(20%);filter:grayscale(95%) brightness(20%);background-size:cover;z-index:-1;background-attachment:fixed}.mt-2{margin-top:2em}.mr-2{margin-right:2em}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.flex-row{display:flex;flex-direction:row}.card{background-color:#363636;border-radius:8px;overflow:hidden}@media only screen and (max-width:980px){.middle-content{align-items:center;padding:0 10%}.first-intro{font-size:1.75em;color:#fff}.second-intro,.third-intro{font-size:1.2em;color:#fff}}@media only screen and (max-width:637px){.first-intro{font-size:1.5em;color:#fff}.second-intro,.third-intro{font-size:1em;color:#fff}}",""])},196:function(t,e,c){"use strict";c.r(e);var n={components:{Navbar:c(176).a},head:function(){return{title:"Recent Projects - Heyitsmejd"}}},l=(c(185),c(18)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"body-bg"}),t._v(" "),c("Navbar"),t._v(" "),c("section",{staticClass:"container fixed-top"},[c("div",{staticClass:"middle-content"},[t._m(0),t._v(" "),c("div",{staticClass:"columns is-multiline  mt-2 mb-2"},[c("div",{staticClass:"column is-one-third full-height"},[c("nuxt-link",{attrs:{to:"/couponcodego"}},[c("div",{staticClass:"card full-height has-text-centered project-card"},[c("div",{staticClass:"card-image"},[c("div",{staticClass:"image is-16by9"},[c("img",{attrs:{src:"/images/projects/ccg-sm.jpg",alt:"Example image of the Coupon Code Go landing page"}})])]),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title project-title is-size-3 has-text-white has-text-centered has-text-weight-bold"},[c("span",{staticClass:"green-underline"},[t._v("Coupon Code Go")])])])]),t._v(" "),c("div",{staticClass:"content has-text-white-ter"},[t._v("\n                    A coupon and deals website that provides users with discounts from their favorite brands.\n                  ")]),t._v(" "),c("div",{staticClass:"tech-stack"},[c("ul",{staticClass:"project-techs"},[c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-css3-alt"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("CSS3")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-html5"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("HTML5")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-node-js"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("NodeJs")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-vuejs"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("Vue")])])])])])])])],1),t._v(" "),c("div",{staticClass:"column is-one-third full-height"},[c("nuxt-link",{attrs:{to:"/visionary"}},[c("div",{staticClass:"card full-height has-text-centered project-card"},[c("div",{staticClass:"card-image"},[c("div",{staticClass:"image is-16by9"},[c("img",{attrs:{src:"/images/projects/visionary-1.jpg",alt:"Example image of the Visionary Services landing page"}})])]),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title project-title is-size-3 has-text-white has-text-centered has-text-weight-bold"},[c("span",{staticClass:"green-underline"},[t._v("Visionary Services")])])])]),t._v(" "),c("div",{staticClass:"content has-text-white-ter"},[t._v("\n                    A service that provides secondary citizenships and visas.\n                  ")]),t._v(" "),c("div",{staticClass:"tech-stack"},[c("ul",{staticClass:"project-techs"},[c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-css3-alt"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("CSS3")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-html5"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("HTML5")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-node-js"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("NodeJs")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-vuejs"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("Vue")])])])])])])])],1),t._v(" "),c("div",{staticClass:"column is-one-third full-height"},[c("nuxt-link",{attrs:{to:"/classicguru"}},[c("div",{staticClass:"card full-height has-text-centered project-card"},[c("div",{staticClass:"card-image"},[c("div",{staticClass:"image is-16by9"},[c("img",{attrs:{src:"/images/projects/classic-sm.jpg",alt:"Example image of a WowW DB map search result"}})])]),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title project-title is-size-3 has-text-white has-text-centered has-text-weight-bold"},[c("span",{staticClass:"green-underline"},[t._v("Classic Guru")])])])]),t._v(" "),c("div",{staticClass:"content has-text-white-ter"},[t._v("\n                    A one stop World of Warcraft Classic community portal featuring detailed game information, guides, and Twitch.tv integration.\n                  ")]),t._v(" "),c("div",{staticClass:"tech-stack"},[c("ul",{staticClass:"project-techs"},[c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-css3-alt"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("CSS3")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-html5"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("HTML5")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-node-js"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("NodeJs")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-vuejs"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("Vue")])])])])])])])],1),t._v(" "),c("div",{staticClass:"column is-one-third full-height"},[c("nuxt-link",{attrs:{to:"/tempest"}},[c("div",{staticClass:"card full-height has-text-centered project-card"},[c("div",{staticClass:"card-image"},[c("div",{staticClass:"image is-16by9"},[c("img",{attrs:{src:"/images/projects/tempest-sm.jpg",alt:"Screenshot of the Tempest game server landing page"}})])]),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title project-title is-size-3 has-text-white has-text-centered has-text-weight-bold"},[c("span",{staticClass:"green-underline"},[t._v("Tempest")])])])]),t._v(" "),c("div",{staticClass:"content has-text-white-ter"},[t._v("\n                    A game server landing page featuring user registration, server status, and an introduction to the server.\n                  ")]),t._v(" "),c("div",{staticClass:"tech-stack"},[c("ul",{staticClass:"project-techs"},[c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-css3-alt"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("CSS3")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-html5"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("HTML5")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-node-js"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("NodeJs")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-vuejs"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("Vue")])])])])])])])],1),t._v(" "),c("div",{staticClass:"column is-one-third full-height"},[c("nuxt-link",{attrs:{to:"/recess"}},[c("div",{staticClass:"card full-height has-text-centered project-card"},[c("div",{staticClass:"card-image"},[c("div",{staticClass:"image is-16by9"},[c("img",{attrs:{src:"/images/projects/recess-sm.jpg",alt:"Example image of a Recess profile page feed."}})])]),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title project-title is-size-3 has-text-white has-text-centered has-text-weight-bold"},[c("span",{staticClass:"green-underline"},[t._v("Recess")])])])]),t._v(" "),c("div",{staticClass:"content has-text-white-ter"},[t._v("\n                    A travel oriented social media platform.\n                  ")]),t._v(" "),c("div",{staticClass:"tech-stack"},[c("ul",{staticClass:"project-techs"},[c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-css3-alt"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("CSS3")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-html5"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("HTML5")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-node-js"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("NodeJs")])])])])])])])],1),t._v(" "),c("div",{staticClass:"column is-one-third full-height"},[c("nuxt-link",{attrs:{to:"/heroes"}},[c("div",{staticClass:"card full-height has-text-centered project-card"},[c("div",{staticClass:"card-image"},[c("div",{staticClass:"image is-16by9"},[c("img",{attrs:{src:"/images/projects/heroes-sm.jpg",alt:"Example image of Heroes of the World"}})])]),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title project-title is-size-3 has-text-white has-text-centered has-text-weight-bold"},[c("span",{staticClass:"green-underline"},[t._v("Heroes of the World")])])])]),t._v(" "),c("div",{staticClass:"content has-text-white-ter"},[t._v("\n                    A mobile friendly adventure game where the players can fight monsters, collect items, level up, and recruit new heroes.\n                  ")]),t._v(" "),c("div",{staticClass:"tech-stack"},[c("ul",{staticClass:"project-techs"},[c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-css3-alt"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("CSS3")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-html5"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("HTML5")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-node-js"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("NodeJs")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fas fa-mobile-alt"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("PWA")])]),t._v(" "),c("li",{staticClass:"tech-icon has-text-grey-lighter"},[c("span",{staticClass:"is-size-2"},[c("i",{staticClass:"fab fa-vuejs"})]),c("span",{staticClass:"icon-descript is-size-6"},[t._v("Vue")])])])])])])])],1)])])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"has-text-centered is-size-1 has-text-primary"},[this._v("Recent Projects")])])}],!1,null,null,null);e.default=component.exports}}]);