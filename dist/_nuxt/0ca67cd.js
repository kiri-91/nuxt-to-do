(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{203:function(t,e,n){"use strict";n.r(e);n(156);var o={props:["lists"],methods:{clear:function(i){this.lists.splice(i,1)}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.lists,(function(e,i){return n("li",{key:i},[t._v("「"+t._s(e.title)+"」 "+t._s(e.body)),n("button",{on:{click:function(e){return t.clear(i)}}},[t._v("削除")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},204:function(t,e,n){"use strict";n.r(e);n(156);var o={data:function(){return{lists:[{title:"買い物",body:"牛乳を買う"},{title:"宿題",body:"数学12~24ページ"}],title:"",body:"",index:1}},components:{Todo:n(203).default},methods:{add:function(){""!==this.title&&""!==this.body&&(this.lists.push({title:this.title,body:this.body}),this.title="",this.body="")},hensyu:function(t){t>this.lists.length||t<=0||(this.title=this.lists[t-1].title,this.body=this.lists[t-1].body)},edit:function(t){""!==this.title&&""!==this.body&&(this.lists.splice(t-1,1,{title:this.title,body:this.body}),this.title="",this.body="")}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Nuxt To Do App")]),t._v(" "),n("div",[n("label",{attrs:{for:"title"}},[t._v("タイトル：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"タイトル"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"body"}},[t._v("内容：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],attrs:{type:"text",placeholder:"内容"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"submit",value:"追加"},on:{click:t.add}}),t._v(" "),n("input",{attrs:{type:"submit",value:"編集"},on:{click:function(e){return t.edit(t.index)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"hensyu"}},[t._v("編集したいもの：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.index,expression:"index"}],attrs:{type:"number"},domProps:{value:t.index},on:{input:function(e){e.target.composing||(t.index=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){return t.hensyu(t.index)}},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[t._v("番目")])]),t._v(" "),n("div",[n("Todo",{attrs:{lists:t.lists}})],1)])}),[],!1,null,"2c01baa2",null);e.default=component.exports;installComponents(component,{Todo:n(203).default})}}]);