(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{jjzQ:function(s,a,t){s.exports=t("vUVW")},vUVW:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{animation:!1,timeline:!1,fullscreenButton:!0,fullscreenElement:document.body,point:{pixelSize:28,color:"red"},label:{text:"Hello World",pixelOffset:[0,150]},billboard:{},offset:[10,25],otherOpts:{offset:[0,32],position:"bottom-right"},cesiumPath:"https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js"}},mounted:function(){this.$refs.vcViewer.createPromise.then((function(s){s.Cesium,s.viewer;console.log("viewer is loaded.")}))},methods:{onViewerReady:function(s){s.Cesium;var a=s.dcViewer;console.log(a);var t=DC.ImageryLayerFactory.createAmapImageryLayer({style:"img"});a.addBaseLayer(t);var r=new DC.HtmlLayer("layer");a.addLayer(r),function(s){for(var a=[],t=0;t<s;t++){var r=120.38105869+.5*Math.random(),e=31.10115627+.5*Math.random();a.push(new DC.Position(r,e))}return a}(5).forEach((function(s,a){var t=new DC.DivIcon(s,'<div style="width:200px;background:rgba(255,255,0,0.2)">我是一个div，你可以对我添加css样式和内容</div>');r.addOverlay(t)}))},onEntityClick:function(s){console.log(s)},onLeftClick:function(s){console.log(s)},load:function(){this.$refs.vcViewer.load().then((function(s){console.log(s)}))},unload:function(){this.$refs.vcViewer.unload().then((function(s){console.log(s)}))},reload:function(){this.$refs.vcViewer.reload().then((function(s){console.log(s)}))}}};var e=t("JFUb"),n=Object(e.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("DC-SDK Demo")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("使用 VueCesium 加载 dc-sdk")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{ref:"viewerContainer",staticClass:"viewer"},[t("vc-viewer",{ref:"vcViewer",attrs:{cesiumPath:s.cesiumPath,animation:s.animation,timeline:s.timeline,fullscreenButton:s.fullscreenButton,fullscreenElement:s.fullscreenElement},on:{ready:s.onViewerReady,leftClick:s.onLeftClick}},[t("vc-navigation"),s._v(" "),t("vc-entity",{ref:"entity",attrs:{position:{lng:108,lat:32},point:s.point,label:s.label},on:{click:s.onEntityClick}},[t("vc-graphics-billboard",{ref:"billboard",attrs:{image:"https://zouyaoji.top/vue-cesium/favicon.png"}}),s._v(" "),t("vc-graphics-rectangle",{attrs:{coordinates:[130,20,80,25],material:"green"}})],1),s._v(" "),t("vc-layer-imagery",{attrs:{sortOrder:20}},[t("vc-provider-imagery-tianditu",{attrs:{mapStyle:"cva_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1),s._v(" "),t("vc-layer-imagery",{attrs:{sortOrder:10}},[t("vc-provider-imagery-tianditu",{attrs:{mapStyle:"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("动画部件")]),s._v(" "),t("md-switch",{model:{value:s.animation,callback:function(a){s.animation=a},expression:"animation"}}),s._v(" "),t("span",[s._v("时间轴部件")]),s._v(" "),t("md-switch",{model:{value:s.timeline,callback:function(a){s.timeline=a},expression:"timeline"}}),s._v(" "),t("span",[s._v("基础图层拾取器")]),s._v(" "),t("md-switch",{model:{value:s.baseLayerPicker,callback:function(a){s.baseLayerPicker=a},expression:"baseLayerPicker"}}),s._v(" "),t("span",[s._v("全屏按钮")]),s._v(" "),t("md-switch",{model:{value:s.fullscreenButton,callback:function(a){s.fullscreenButton=a},expression:"fullscreenButton"}}),s._v(" "),t("span",[s._v("信息提示框")]),s._v(" "),t("md-switch",{model:{value:s.infoBox,callback:function(a){s.infoBox=a},expression:"infoBox"}}),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:s.unload}},[s._v("销毁")]),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:s.load}},[s._v("加载")]),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:s.reload}},[s._v("重载")])],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(4),s._v(" "),t("hr"),s._v(" "),s._m(5)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("vue-cesium 使用数字视觉的 dc-sdk 开发时只需要在引入 VueCesium 时通过配置项 "),a("code",{pre:!0},[this._v("cesiumPath")]),this._v(" 指定为 dc-sdk 库地址即可。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("Vue.use(VueCesium, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("cesiumPath")]),this._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'")]),this._v("\n})\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("或者在 "),a("code",{pre:!0},[this._v("vc-viewer")]),this._v(" 组件上将 "),a("code",{pre:!0},[this._v("cesiumPath")]),this._v(" 地址指定为 dc-sdk 路径。 如下面的例子：")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-viewer")]),this._v(" 加载成功会返回 { Cesium, viewer, dcViewer }, 通过该 "),a("code",{pre:!0},[this._v("dcViewer")]),this._v(" 使用 dc-sdk API 进行相关开发即可， 如下面的例子：")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewerContainer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vcViewer"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cesiumPath")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cesiumPath"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreenButton")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenButton"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreenElement")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenElement"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onViewerReady"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@leftClick")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onLeftClick"')]),s._v("\n    >")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onEntityClick"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{lng: 108, lat: 32}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":point")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"point"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"label"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-billboard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboard"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://zouyaoji.top/vue-cesium/favicon.png"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-billboard")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"[130, 20, 80, 25]"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 天地图注记 --\x3e")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sortOrder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cva_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 天地图影像 --\x3e")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sortOrder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("动画部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("时间轴部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("基础图层拾取器"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"baseLayerPicker"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("全屏按钮"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenButton"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("信息提示框"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"infoBox"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"unload"')]),s._v(">")]),s._v("销毁"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"load"')]),s._v(">")]),s._v("加载"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"reload"')]),s._v(">")]),s._v("重载"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenButton")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenElement")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body,\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("point")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pixelSize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello World'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pixelOffset")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("150")]),s._v("]\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("otherOpts")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom-right'")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'")]),s._v("\n      }\n    },\n    mounted() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.vcViewer.createPromise.then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'viewer is loaded.'")]),s._v(")\n      })\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onViewerReady({ Cesium, dcViewer }) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(dcViewer)\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" baselayer = DC.ImageryLayerFactory.createAmapImageryLayer({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'img'")]),s._v("\n        })\n        dcViewer.addBaseLayer(baselayer)\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" layer = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" DC.HtmlLayer("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'layer'")]),s._v(")\n        dcViewer.addLayer(layer)\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" positions = generatePosition("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(")\n        positions.forEach("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("item, index")]),s._v(") =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" divIcon = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" DC.DivIcon(\n            item,\n            "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('`<div style="width:200px;background:rgba(255,255,0,0.2)">我是一个div，你可以对我添加css样式和内容</div>`')]),s._v("\n          )\n          layer.addOverlay(divIcon)\n        })\n      },\n      onEntityClick(e) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(e)\n      },\n      onLeftClick(e) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(e)\n      },\n      load() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.vcViewer.load().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(" =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(e)\n        })\n      },\n      unload() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.vcViewer.unload().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(" =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(e)\n        })\n      },\n      reload() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.vcViewer.reload().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(" =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(e)\n        })\n      }\n    }\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("generatePosition")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("num")]),s._v(") ")]),s._v("{\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" list = []\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < num; i++) {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" lng = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("120.38105869")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" lat = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.10115627")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v("\n      list.push("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" DC.Position(lng, lat))\n    }\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" list\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("官网："),a("strong",[a("a",{attrs:{href:"http://dc.dvgis.cn/#/index"}},[this._v("dc-sdk")])])])])}],!1,null,null,null);a.default=n.exports}}]);
//# sourceMappingURL=189.81301106f9402bac7f24.js.map