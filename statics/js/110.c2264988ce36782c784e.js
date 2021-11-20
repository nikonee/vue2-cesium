(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{eDMt:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{modelUrl:"./statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",pointDrawing:!1,polylineDrawing:!1,polygonDrawing:!1,clampToGround:!1,editable:!1}},methods:{ready:function(t){t.Cesium;var s=t.viewer;this.cesiumInstance=t,s.scene.globe.depthTestAgainstTerrain=!0},toggle:function(t){console.log(t),this.$refs[t].drawing=!this.$refs[t].drawing},clear:function(){this.$refs.handlerPoint.clear(),this.$refs.handlerLine.clear(),this.$refs.handlerPolygon.clear()},activeEvt:function(t){this[t.type]=t.isActive},movingEvt:function(t){},drawEvt:function(t){console.log(t)},readyPromise:function(t){this.cesiumInstance.viewer.zoomTo(t,new Cesium.HeadingPitchRange(0,-.5,2*t.boundingSphere.radius))}}},r=a("JFUb"),v=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("DrawTools")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),a("h3",[t._v("Draw Polyline")]),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{attrs:{scene3DOnly:""},on:{ready:t.ready}},[a("vc-handler-draw-point",{ref:"handlerPoint",attrs:{editable:t.editable},on:{activeEvt:t.activeEvt,movingEvt:t.movingEvt,drawEvt:t.drawEvt}}),t._v(" "),a("vc-handler-draw-polyline",{ref:"handlerLine",attrs:{clampToGround:t.clampToGround,editable:t.editable},on:{activeEvt:t.activeEvt,movingEvt:t.movingEvt,drawEvt:t.drawEvt}}),t._v(" "),a("vc-handler-draw-polygon",{ref:"handlerPolygon",attrs:{clampToGround:t.clampToGround,editable:t.editable},on:{activeEvt:t.activeEvt,movingEvt:t.movingEvt,drawEvt:t.drawEvt}}),t._v(" "),a("vc-primitive-tileset",{attrs:{url:t.modelUrl},on:{readyPromise:t.readyPromise}})],1),t._v(" "),a("div",{staticClass:"demo-tool"},[a("md-button",{staticClass:"md-raised md-accent",on:{click:function(s){return t.toggle("handlerPoint")}}},[t._v(t._s(t.pointDrawing?"Stop":"Point"))]),t._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(s){return t.toggle("handlerLine")}}},[t._v(t._s(t.polylineDrawing?"Stop":"Polyline"))]),t._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(s){return t.toggle("handlerPolygon")}}},[t._v(t._s(t.polygonDrawing?"Stop":"Polygon"))]),t._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:t.clear}},[t._v("clear")]),t._v(" "),a("md-checkbox",{staticClass:"md-primary",model:{value:t.editable,callback:function(s){t.editable=s},expression:"editable"}},[t._v("Editable")]),t._v(" "),a("md-checkbox",{staticClass:"md-primary",model:{value:t.clampToGround,callback:function(s){t.clampToGround=s},expression:"clampToGround"}},[t._v("ClampToGround(Polyline、Polygon)")])],1)],1)]],2),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),a("h3",[t._v("vc-handler-draw-point")]),t._v(" "),t._m(2),t._v(" "),a("h3",[t._v("vc-handler-draw-polyline")]),t._v(" "),t._m(3),t._v(" "),a("h3",[t._v("vc-handler-draw-polygon")]),t._v(" "),t._m(4),t._v(" "),a("hr"),t._v(" "),a("h2",[t._v("Event")]),t._v(" "),t._m(5),t._v(" "),a("h2",[t._v("Method")]),t._v(" "),t._m(6)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-handler-draw-point")]),this._v(" component is used to draw point.\nThe "),s("code",{pre:!0},[this._v("vc-handler-draw-polyline")]),this._v(" component is used to draw polyline.\nThe "),s("code",{pre:!0},[this._v("vc-handler-draw-polygon")]),this._v(" component is used to draw polygon.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scene3DOnly")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-handler-draw-point")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handlerPoint"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@activeEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"activeEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@movingEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"movingEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@drawEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"drawEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":editable")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"editable"')]),t._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-handler-draw-point")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-handler-draw-polyline")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":clampToGround")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clampToGround"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handlerLine"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@activeEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"activeEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@movingEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"movingEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@drawEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"drawEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":editable")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"editable"')]),t._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-handler-draw-polyline")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-handler-draw-polygon")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":clampToGround")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clampToGround"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handlerPolygon"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@activeEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"activeEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@movingEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"movingEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@drawEvt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"drawEvt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":editable")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"editable"')]),t._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-handler-draw-polygon")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"modelUrl"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@readyPromise")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readyPromise"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"demo-tool"')]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"toggle('handlerPoint')\"")]),t._v(">")]),t._v("{{ pointDrawing ? 'Stop' : 'Point' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"toggle('handlerLine')\"")]),t._v("\n        >")]),t._v("{{ polylineDrawing ? 'Stop' : 'Polyline' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v("\n      >")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"toggle('handlerPolygon')\"")]),t._v("\n        >")]),t._v("{{ polygonDrawing ? 'Stop' : 'Polygon' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v("\n      >")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clear"')]),t._v(">")]),t._v("clear"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-checkbox")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"editable"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-primary"')]),t._v(">")]),t._v("Editable"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-checkbox")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-checkbox")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clampToGround"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-primary"')]),t._v(">")]),t._v("ClampToGround(Polyline、Polygon)"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-checkbox")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("modelUrl")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'./statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pointDrawing")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("polylineDrawing")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("polygonDrawing")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("clampToGround")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("editable")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      },\n      toggle(type) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(type)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[type].drawing = !"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[type].drawing\n      },\n      clear() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.handlerPoint.clear()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.handlerLine.clear()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.handlerPolygon.clear()\n      },\n      activeEvt(_) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v("[_.type] = _.isActive\n      },\n      movingEvt(windowPosition) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// this.tooltip.showAt(windowPosition, '<p>left click to draw, right click end.</p>')")]),t._v("\n      },\n      drawEvt(result) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// result.finished && this.tooltip.setVisible(false)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(result)\n      },\n      readyPromise(tileset) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.HeadingPitchRange("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-0.5")]),t._v(", tileset.boundingSphere.radius * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2.0")]),t._v("))\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Draw mode, 0 draws continuously, 1 ends once drawn.")])]),t._v(" "),a("tr",[a("td",[t._v("pointColor")]),t._v(" "),a("td",[t._v("String|Array|Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("'rgb(255,229,0)'")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the point color.")])]),t._v(" "),a("tr",[a("td",[t._v("pointPixelSize")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("8")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the point pixel size.")])]),t._v(" "),a("tr",[a("td",[t._v("editable")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("false")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否可编辑。")])]),t._v(" "),a("tr",[a("td",[t._v("showDrawTip")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否显示绘制提示。")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Draw mode, 0 draws continuously, 1 ends once drawn.")])]),t._v(" "),a("tr",[a("td",[t._v("depthTest")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specifies whether drawn polyline objects participate in depth testing.")])]),t._v(" "),a("tr",[a("td",[t._v("pointColor")]),t._v(" "),a("td",[t._v("String|Array|Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("'rgb(255,229,0)'")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the point color.")])]),t._v(" "),a("tr",[a("td",[t._v("pointPixelSize")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("8")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the point pixel size.")])]),t._v(" "),a("tr",[a("td",[t._v("polylineMaterial")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the material of polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("polylineWidth")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("2")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the polyline width.")])]),t._v(" "),a("tr",[a("td",[t._v("clampToGround")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("false")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specifies whether the line drawn is grounded. Only method is valid for Entity.")])]),t._v(" "),a("tr",[a("td",[t._v("editable")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("false")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify whether to enable editing.")])]),t._v(" "),a("tr",[a("td",[t._v("showDrawTip")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Whether to show the drawing prompter.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Draw mode, 0 draws continuously, 1 ends once drawn.")])]),t._v(" "),a("tr",[a("td",[t._v("depthTest")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specifies whether drawn line objects participate in depth testing.")])]),t._v(" "),a("tr",[a("td",[t._v("pointColor")]),t._v(" "),a("td",[t._v("String|Array|Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("'rgb(255,229,0)'")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the point color.")])]),t._v(" "),a("tr",[a("td",[t._v("pointPixelSize")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("8")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the point pixel size.")])]),t._v(" "),a("tr",[a("td",[t._v("polylineMaterial")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the drawn line material。")])]),t._v(" "),a("tr",[a("td",[t._v("polylineWidth")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("2")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the polyline width.")])]),t._v(" "),a("tr",[a("td",[t._v("polygonMaterial")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("fabric: { type: 'Color', uniforms: { color: 'rgba(255,165,0,0.25)' } }")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify the face material.")])]),t._v(" "),a("tr",[a("td",[t._v("clampToGround")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("false")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specifies whether the drawn surface is ground-attached.")])]),t._v(" "),a("tr",[a("td",[t._v("editable")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("false")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Specify whether to enable editing.")])]),t._v(" "),a("tr",[a("td",[t._v("showDrawTip")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Whether to show the drawing prompter.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("activeEvt")]),t._v(" "),a("td",[t._v("{ type: String, isActive: Boolean }")]),t._v(" "),a("td",[t._v("Fires when drawing starts or stops.")])]),t._v(" "),a("tr",[a("td",[t._v("movingEvt")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("Triggered during the drawing process. Returns the mouse position.")])]),t._v(" "),a("tr",[a("td",[t._v("drawEvt")]),t._v(" "),a("td",[t._v("{ polyline: Object, type: Object, finished: Boolean }")]),t._v(" "),a("td",[t._v("Triggered during drawing. Returns the coordinate points of the drawn line.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("clear")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Clear the drawing object (and stopping drawing).")])])])])}],!1,null,null,null);s.default=v.exports},fq2i:function(t,s,a){t.exports=a("eDMt")}}]);
//# sourceMappingURL=110.c2264988ce36782c784e.js.map