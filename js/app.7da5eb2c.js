(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/piano/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0059":function(e,t,n){e.exports=n.p+"img/tilde.4e570124.svg"},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"090b":function(e,t,n){"use strict";var r=n("282c"),s=n.n(r);s.a},"091e":function(e,t,n){"use strict";var r=n("162f"),s=n.n(r);s.a},"0975":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var r=n("2b0e"),s=n("8c4f"),a=n("1cc6"),i=n("4291"),o=n("b445");r["a"].use(s["a"]);var c=new s["a"]({base:e,routes:[{path:"/",component:a["a"],meta:{title:"Home - Piano",metaTags:[{name:"description",content:"Learning scales and beautiful songs"},{property:"og:description",content:"Learning scales and beautiful songs"}]}},{path:"/scales",component:i["a"],meta:{title:"Scales - Piano",metaTags:[{name:"description",content:"Learning scales and beautiful songs"},{property:"og:description",content:"Learning scales and beautiful songs"}]}},{path:"/key-signatures",component:o["a"],meta:{title:"Key signatures - Piano",metaTags:[{name:"description",content:"Learning scales and beautiful songs"},{property:"og:description",content:"Learning scales and beautiful songs"}]}}]})}).call(this,"/")},"0a0f":function(e,t,n){},"0a3e":function(e,t,n){"use strict";var r=n("3c67"),s=n.n(r);s.a},"0e7a":function(e,t,n){"use strict";var r=n("45a1"),s=n.n(r);s.a},"162f":function(e,t,n){},1952:function(e,t,n){"use strict";var r=n("9033"),s=n.n(r);s.a},"19c5":function(e,t,n){"use strict";var r=n("49ad"),s=n.n(r);s.a},"1cc6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Main",{scopedSlots:e._u([{key:"content",fn:function(){return[n("SongContainer")]},proxy:!0}])})},s=[],a=n("2da9"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-custom"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectFilter,expression:"selectFilter"}],staticStyle:{"margin-bottom":"8px"},attrs:{name:"selectFilter",id:"selectFilter"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectFilter=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"all"}},[e._v("All")]),n("option",{attrs:{value:"completed"}},[e._v("Completed")]),n("option",{attrs:{value:"inprogress"}},[e._v("In progress")]),n("option",{attrs:{value:"uncompleted"}},[e._v("Uncompleted")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchedMusic,expression:"searchedMusic"}],attrs:{type:"text",placeholder:"Search music"},domProps:{value:e.searchedMusic},on:{input:function(t){t.target.composing||(e.searchedMusic=t.target.value)}}}),e.filteredSong?[e._l(e.filteredSong,(function(e){return[n("SongPanel",{key:e.title,attrs:{song:e}})]}))]:e._e()],2)},o=[],c=(n("4de4"),n("caad"),n("d3b7"),n("2532"),n("5530"));n("ac1f"),n("1276");function l(e){var t=e.split(":");return 60*parseInt(t[0])+parseInt(t[1])}var u=function(e,t){if(e&&t){var n=l(e),r=l(t);return 100*r/n}return 0},p=n("2f62"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("details",[r("summary",[r("div",{staticClass:"list-group-item-custom"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-5"},[r("h4",{staticClass:"list-group-item-heading"},[100==e.getSuccessPercent(e.song.duration,e.song.completed)?r("img",{attrs:{src:n("d8e7"),widht:"20",height:"20",alt:"Star",title:"Star"}}):e._e(),e.song.full?r("img",{attrs:{src:n("0059"),widht:"20",height:"20",alt:"Star",title:"Star"}}):e._e(),e._v(" "+e._s(e.song.title)+" ")]),r("p",{staticClass:"list-group-item-text"},[e._v(e._s(e.song.origin))])]),r("div",{staticClass:"col-sm-6"},[e.song.full?[r("p",{staticClass:"list-group-item-text"},[e._v("Full OST")])]:[r("p",{staticClass:"list-group-item-text"},[e._v("Duration: "+e._s(e.song.duration))]),r("p",{staticClass:"list-group-item-text"},[e._v("Learned: "+e._s(e.song.completed?e.song.completed:"0:00"))])]],2),r("div",{staticClass:"col-sm-12"},[r("progressBar",{attrs:{percent:e.song.full?"Full OST":e.getSuccessPercent(e.song.duration,e.song.completed)}})],1)])])]),r("div",{staticClass:"content"},[r("p",{staticClass:"list-group-item-text"},[r("strong",[e._v("Artist :")]),e._v(" "+e._s(e.song.credit)+" ")]),r("p",{staticClass:"list-group-item-text"},[r("strong",[e._v("Video link :")]),r("a",{attrs:{href:e.song.link}},[e._v(" "+e._s(e.song.link))])]),r("p",{staticClass:"list-group-item-text"},[r("strong",[e._v("Sheet :")]),e.song.sheet?r("a",{attrs:{href:e.song.sheet}},[e._v(" Sheet - "+e._s(e.song.title))]):[e._v(" NA")]],2),r("div",{staticClass:"video-wrapper"},[r("div",{staticClass:"yt-video"},[r("iframe",{staticClass:"responsive-iframe",attrs:{src:e.getEmbedLink(e.song.link),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])])},g=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",staticStyle:{width:"100%","background-color":"#BDBDBD"}},["100"!=e.percent?n("div",{staticClass:"progress-bar progress-bar-uncompleted",style:{width:"Full OST"===e.percent?0:e.percent+"%"}}):n("div",{staticClass:"progress-bar progress-bar-completed",style:{width:"Full OST"===e.percent?0:e.percent+"%"}})])},m=[],v={props:["percent"]},h=v,_=(n("0e7a"),n("2877")),b=Object(_["a"])(h,d,m,!1,null,null,null),S=b.exports,y={props:["song"],methods:{getSuccessPercent:function(e,t){return u(e,t)},getEmbedLink:function(e){var t=e.split("?v=")[1],n="https://www.youtube.com/embed/"+t;return n}},components:{progressBar:S}},j=y,w=(n("bdeb"),Object(_["a"])(j,f,g,!1,null,null,null)),x=w.exports,C={data:function(){return{searchedMusic:"",selectFilter:"all"}},mounted:function(){0===this.listSong.length&&this.fetchListMusic()},computed:Object(c["a"])(Object(c["a"])({},Object(p["c"])({listSong:"listSong"})),{},{filteredSong:function(){switch(this.selectFilter){case"all":return this.searchSong(this.listSong);case"completed":return this.searchSong(this.listSong.filter((function(e){return 100==u(e.duration,e.completed)})));case"inprogress":return this.searchSong(this.listSong.filter((function(e){return u(e.duration,e.completed)<100&&u(e.duration,e.completed)>0})));case"uncompleted":return this.searchSong(this.listSong.filter((function(e){return 0==u(e.duration,e.completed)})))}return this.listSong}}),methods:Object(c["a"])(Object(c["a"])({},Object(p["b"])({updateListSong:"updateListSong"})),{},{fetchListMusic:function(){var e=this;fetch("https://raw.githubusercontent.com/s0nnyhu/piano/develop/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.updateListSong(t)}))},searchSong:function(e){var t=this.searchedMusic,n=e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.origin.toLowerCase().includes(t.toLowerCase())}));return n}}),components:{SongPanel:x}},O=C,M=(n("19c5"),Object(_["a"])(O,i,o,!1,null,null,null)),k=M.exports,F={components:{Main:a["a"],SongContainer:k}},T=F,E=Object(_["a"])(T,r,s,!1,null,null,null);t["a"]=E.exports},"282c":function(e,t,n){},"2da9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu"),n("Delimiter",{staticClass:"hr-1"}),e._t("content")],2)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",e._l(e.listMenu,(function(t){return n("router-link",{key:t.name,attrs:{to:t.link}},[e._v(e._s(t.name))])})),1)},i=[],o={data:function(){return{listMenu:[{name:"Song",link:"/"},{name:"Scales",link:"/scales"},{name:"Key signatures",link:"/key-signatures"}]}}},c=o,l=(n("090b"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null),p=u.exports,f=n("9067"),g={name:"Main",components:{Menu:p,Delimiter:f["a"]}},d=g,m=Object(l["a"])(d,r,s,!1,null,null,null);t["a"]=m.exports},3374:function(e,t,n){e.exports=n.p+"img/major_scale_with_fingers.1ee0db59.jpg"},"364a":function(e,t,n){},"3c67":function(e,t,n){},4291:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Main",{scopedSlots:e._u([{key:"content",fn:function(){return[n("Scales")]},proxy:!0}])})},s=[],a=n("2da9"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"switch-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.scaleType,expression:"scaleType"}],attrs:{type:"radio",id:"major",name:"scale-type",value:"major",checked:""},domProps:{checked:e._q(e.scaleType,"major")},on:{change:function(t){e.scaleType="major"}}}),n("label",{attrs:{for:"major"}},[e._v("Major")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.scaleType,expression:"scaleType"}],attrs:{type:"radio",id:"minor",name:"scale-type",value:"minor"},domProps:{checked:e._q(e.scaleType,"minor")},on:{change:function(t){e.scaleType="minor"}}}),n("label",{attrs:{for:"minor"}},[e._v("Minor")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.scaleFinger,expression:"scaleFinger"}],attrs:{type:"checkbox",id:"finger"},domProps:{checked:Array.isArray(e.scaleFinger)?e._i(e.scaleFinger,null)>-1:e.scaleFinger},on:{change:function(t){var n=e.scaleFinger,r=t.target,s=!!r.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);r.checked?i<0&&(e.scaleFinger=n.concat([a])):i>-1&&(e.scaleFinger=n.slice(0,i).concat(n.slice(i+1)))}else e.scaleFinger=s}}}),n("label",{attrs:{for:"finger"}},[e._v("Finger")])]),n("Delimiter",{staticClass:"hr-5"}),n("transition",{attrs:{name:"fade"}},["major"==e.scaleType?n("MajorScale",{attrs:{finger:e.scaleFinger}}):e._e(),"minor"==e.scaleType?n("MinorScale",{attrs:{finger:e.scaleFinger}}):e._e()],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("img",{staticClass:"responsive",attrs:{src:n("bb6e")("./"+(e.finger?e.scaleWithFinger:e.scale)),alt:"Major scale",title:"Major scale",loading:"lazy"}})])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notes"},[n("h4",[e._v("The pattern of the major scale is: WS - WS - HS - WS - WS - WS - HS")])])}],u={props:["finger"],data:function(){return{scale:"major_scale.png",scaleWithFinger:"major_scale_with_fingers.png"}}},p=u,f=(n("1952"),n("2877")),g=Object(f["a"])(p,c,l,!1,null,null,null),d=g.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("img",{staticClass:"responsive",attrs:{src:n("bb6e")("./"+(e.finger?e.scaleWithFinger:e.scale)),alt:"Minor scale",title:"Minor scale",loading:"lazy"}})])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notes"},[n("h4",[e._v("The pattern that characterizes the sound of the natural minor scale is: WS - HS - WS - WS - HS - WS - WS")]),n("h4",[n("strong",[e._v("Harmonic :")]),e._v(" To convert any natural minor scale into harmonic minor, raise the seventh note by a half step. ")]),n("h4",[n("strong",[e._v("Melodic :")]),e._v(" To convert a natural minor scale into melodic minor, raise both the sixth and seventh notes by a half step. ")])])}],h={props:["finger"],data:function(){return{scale:"minor_scale.png",scaleWithFinger:"minor_scale_with_fingers.png"}}},_=h,b=(n("4dfb"),Object(f["a"])(_,m,v,!1,null,null,null)),S=b.exports,y=n("9067"),j={data:function(){return{scaleType:"major",scaleFinger:!1}},components:{MajorScale:d,MinorScale:S,Delimiter:y["a"]}},w=j,x=(n("61d4"),Object(f["a"])(w,i,o,!1,null,null,null)),C=x.exports,O={components:{Main:a["a"],Scales:C}},M=O,k=Object(f["a"])(M,r,s,!1,null,null,null);t["a"]=k.exports},"45a1":function(e,t,n){},"49ad":function(e,t,n){},"4a0c":function(e,t,n){e.exports=n.p+"img/minor_scale_with_fingers.aab191c0.jpg"},"4dfb":function(e,t,n){"use strict";var r=n("ba92"),s=n.n(r);s.a},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.3e902853.png"},"537c":function(e,t,n){e.exports=n.p+"img/circle-of-fifths-v2.aa23584b.png"},5555:function(e,t,n){e.exports=n.p+"img/circle-of-fifths-v1.27a30b76.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",width:"130",height:"90",src:n("4ffd")}}),r("router-view",{staticClass:"view"})],1)},a=[],i={name:"App",watch:{$route:function(e){document.title=e.meta.title||"s0nnyHu"}}},o=i,c=(n("034f"),n("2877")),l=Object(c["a"])(o,s,a,!1,null,null,null),u=l.exports,p=n("2f62");r["a"].use(p["a"]);var f=new p["a"].Store({state:{listSong:[]},mutations:{updateListSong:function(e,t){e.listSong=t}},actions:{updateListSong:function(e,t){e.commit("updateListSong",t)}},getters:{listSong:function(e){return e.listSong}}}),g=n("0975");r["a"].config.productionTip=!1,new r["a"]({store:f,router:g["a"],render:function(e){return e(u)}}).$mount("#app")},"5ed2":function(e,t,n){e.exports=n.p+"img/minor_scale.4b0ff8e9.png"},"61d4":function(e,t,n){"use strict";var r=n("0a0f"),s=n.n(r);s.a},"79ae":function(e,t,n){e.exports=n.p+"img/major_scale.49be9927.png"},"85ec":function(e,t,n){},9033:function(e,t,n){},9067:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hr",{class:e.className})},s=[],a={props:["className"]},i=a,o=(n("0a3e"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,null,null);t["a"]=c.exports},aca7:function(e,t,n){e.exports=n.p+"img/logo.f423f92c.jpg"},b445:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Main",{scopedSlots:e._u([{key:"content",fn:function(){return[n("KeySignatures")]},proxy:!0}])})},s=[],a=n("2da9"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("hr"),r("img",{staticClass:"responsive circle-fifths",attrs:{src:n("537c"),alt:"Circle of fifths",title:"Circle of fifths",loading:"lazy",width:"200",height:"500"}})])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notes"},[n("h4",[e._v(" #: "),n("strong",[e._v("F")]),e._v("ather "),n("strong",[e._v("C")]),e._v("harles "),n("strong",[e._v("G")]),e._v("oes "),n("strong",[e._v("D")]),e._v("own "),n("strong",[e._v("A")]),e._v("nd "),n("strong",[e._v("E")]),e._v("nds "),n("strong",[e._v("B")]),e._v("attle ")]),n("h4",[e._v(" ♭: "),n("strong",[e._v("B")]),e._v("attle "),n("strong",[e._v("E")]),e._v("nds "),n("strong",[e._v("A")]),e._v("nd "),n("strong",[e._v("D")]),e._v("own "),n("strong",[e._v("G")]),e._v("oes "),n("strong",[e._v("C")]),e._v("harles' "),n("strong",[e._v("F")]),e._v("ather ")])])}],c={},l=c,u=(n("091e"),n("2877")),p=Object(u["a"])(l,i,o,!1,null,null,null),f=p.exports,g={components:{Main:a["a"],KeySignatures:f}},d=g,m=Object(u["a"])(d,r,s,!1,null,null,null);t["a"]=m.exports},ba92:function(e,t,n){},bb6e:function(e,t,n){var r={"./circle-of-fifths-v1.png":"5555","./circle-of-fifths-v2.png":"537c","./circle-of-fifths-v3.png":"d715","./logo.jpg":"aca7","./logo.png":"4ffd","./major_scale.png":"79ae","./major_scale_with_fingers.jpg":"3374","./major_scale_with_fingers.png":"f3ca","./minor_scale.png":"5ed2","./minor_scale_with_fingers.jpg":"4a0c","./minor_scale_with_fingers.png":"cde4","./star.svg":"d8e7","./tilde.svg":"0059"};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id="bb6e"},bdeb:function(e,t,n){"use strict";var r=n("364a"),s=n.n(r);s.a},cde4:function(e,t,n){e.exports=n.p+"img/minor_scale_with_fingers.b7a37eb6.png"},d715:function(e,t,n){e.exports=n.p+"img/circle-of-fifths-v3.11aa9065.png"},d8e7:function(e,t,n){e.exports=n.p+"img/star.231f9cc7.svg"},f3ca:function(e,t,n){e.exports=n.p+"img/major_scale_with_fingers.e6fa32de.png"}});
//# sourceMappingURL=app.7da5eb2c.js.map