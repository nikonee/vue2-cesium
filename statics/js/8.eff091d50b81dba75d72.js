(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+MjB":function(e,t,a){"use strict";(function(e){var n=a("1M3H"),s=new(a.n(n).a)({html:!0}),o={bug:{label:"BUG 反馈",items:{browserVer:"浏览器版本号",depVer:"Vue 版本号",packageVer:"组件库版本号",description:{label:"现象描述",type:"textarea"},errMsg:{label:"完整异常信息",type:"textarea"},demo:"在线示例 / 仓库 URL",code:{label:"复现代码",type:"textarea"},expect:{label:"预期输出",type:"textarea"},output:{label:"实际输出",type:"textarea"}}},featrue:{label:"功能请求",items:{demo:"在线示例 URL",description:{label:"功能描述",type:"textarea"},usage:{label:"用法示例",type:"textarea"}}},documentation:{label:"文档问题",items:{url:"相关文档 URL",description:{label:"问题描述",type:"textarea"},suggestion:{label:"改进建议",type:"textarea"}}}},i=[{name:"bug",items:["browserVer","depVer","packageVer","description","errMsg","demo","code","expect","output"]},{name:"featrue",items:["demo","description","usage"]},{name:"documentation",items:["url","description","suggestion"]}];t.a={data:function(){var e=[],t={common:{},bug:{},featrue:{},documentation:{}};return i.forEach((function(a){var n={name:a.name,label:o[a.name].label,items:[]};n.items.push({name:"title",label:"ISSUE 标题",type:"input"}),a.items.forEach((function(e){n.items.push({name:e,label:o[a.name].items[e].label||o[a.name].items[e],type:o[a.name].items[e].type||"input"}),t[a.name][e]=""})),e.push(n)})),{issueType:0,formTypes:e,formData:t}},methods:{changeType:function(e){this.issueType=e},openDialog:function(e){this.$refs[e].open()},closeDialog:function(e){this.$refs[e].close()},openIssue:function(){var t=!0,a=this.issueType,n=this.content,s=this.formTypes,o=this.formData,i=this.openDialog,r=o[s[a].name];for(var m in r)r[m]||(t=!1);var l="https://github.com/zouyaoji/vue-cesium-v2/issues/new?title="+encodeURIComponent(r.title)+"&body="+encodeURIComponent(n);t?e.open(l):i("dialog")}},computed:{content:function(){var e=[],t=this.formTypes,a=this.issueType,n=this.formData,s=t[a];return s.items.forEach((function(t){"title"===t.name?(e.push("## [".concat(s.label,"] ").concat(n[s.name][t.name]||"")),e.push("")):(e.push("### ".concat(t.label)),e.push(""),"textarea"===t.type?(e.push("```"),e.push("".concat(n[s.name][t.name])),e.push("```")):e.push("".concat(n[s.name][t.name])),e.push(""))})),e.push("\x3c!-- Created by issues bot. DO NOT REMOVE. --\x3e"),e.join("\n")},preview:function(){return s.render(this.content)}}}}).call(this,a("yLpj"))},eee4:function(e,t,a){},yYJS:function(e,t,a){"use strict";a.r(t);var n=a("+MjB"),s=a("JFUb");var o=function(e){a("eee4")},i=Object(s.a)(n.a,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-layout",{staticClass:"issues"},[a("md-layout",{staticClass:"issues-card"},[a("md-dialog-alert",{ref:"dialog",attrs:{"md-content":"表单信息不完整！","md-ok-text":"确定"}}),a("md-whiteframe",[a("md-tabs",{on:{change:e.changeType}},e._l(e.formTypes,(function(t,n){return a("md-tab",{key:n,attrs:{"md-label":t.label}},[a("form",[e._l(t.items,(function(n,s){return a("md-input-container",{key:"input"+s},[a("label",{domProps:{textContent:e._s(n.label)}}),"input"===n.type?a("md-input",{attrs:{required:!0},model:{value:e.formData[t.name][n.name],callback:function(a){e.$set(e.formData[t.name],n.name,a)},expression:"formData[type.name][item.name]"}}):e._e(),"textarea"===n.type?a("md-textarea",{model:{value:e.formData[t.name][n.name],callback:function(a){e.$set(e.formData[t.name],n.name,a)},expression:"formData[type.name][item.name]"}}):e._e()],1)})),a("md-button",{staticClass:"md-raised md-primary",on:{click:e.openIssue}},[e._v("提交")])],2)])})),1)],1)],1),a("md-layout",{staticClass:"issues-card"},[a("md-whiteframe",[a("md-toolbar",[a("span",{staticClass:"md-title"},[e._v("预览")])]),a("article",{staticClass:"md-preview markdown-body",domProps:{innerHTML:e._s(e.preview)}})],1)],1)],1)}),[],!1,o,null,null);t.default=i.exports}}]);
//# sourceMappingURL=8.eff091d50b81dba75d72.js.map