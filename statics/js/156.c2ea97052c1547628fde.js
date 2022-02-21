(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{lOXC:function(s,t,a){s.exports=a("nft3")},nft3:function(s,t,a){"use strict";a.r(t);var r=a("eVuF"),e=a.n(r),l={data:function(){return{appearance:null,geometry:null,attributes:null,modelMatrix:null,vertexFormat:null,radii:{x:2e5,y:2e5,z:3e5},modelMatrixOutline:null}},mounted:function(){e.a.all([this.$refs.ellipsoid.createPromise,this.$refs.ellipsoidOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var a=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(a.boundingSphere,t.vm.$parent.modelMatrix):a.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.viewer=a;var r=t.Matrix4,e=t.PerInstanceColorAppearance,l=t.Transforms,v=t.Cartesian3,_=t.ColorGeometryInstanceAttribute;this.appearance=new e({flat:!0}),this.vertexFormat=e.VERTEX_FORMAT,this.attributes={color:new _(Math.random(),Math.random(),Math.random(),.5)},this.modelMatrix=r.multiplyByTranslation(l.eastNorthUpToFixedFrame(v.fromDegrees(105,35)),new v(0,0,1e5),new r),this.modelMatrixOutline=r.multiplyByTranslation(l.eastNorthUpToFixedFrame(v.fromDegrees(110,35)),new v(0,0,2e5),new r)},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},v=a("JFUb"),_=Object(v.a)(l,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("html",[a("head"),a("body",[a("h1",[s._v("EllipsoidGeometry、 EllipsoidOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载椭球体")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{ref:"viewer",on:{ready:s.ready,left_click:s.LEFT_CLICK}},[a("vc-primitive",{ref:"primitive",attrs:{appearance:s.appearance}},[a("vc-instance-geometry",{ref:"geometry",attrs:{geometry:s.geometry,attributes:s.attributes,"model-matrix":s.modelMatrix},on:{"update:geometry":function(t){s.geometry=t}}},[a("vc-geometry-ellipsoid",{ref:"ellipsoid",attrs:{radii:s.radii,"vertex-format":s.vertexFormat}})],1)],1),s._v(" "),a("vc-primitive",{attrs:{appearance:s.appearance}},[a("vc-instance-geometry",{attrs:{attributes:s.attributes,"model-matrix":s.modelMatrixOutline}},[a("vc-geometry-outline-ellipsoid",{ref:"ellipsoidOutline",attrs:{radii:s.radii}})],1)],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(7),s._v(" "),a("hr")],1)])])}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("code",{pre:!0},[s._v("vc-geometry-ellipsoid")]),s._v(" 组件用于加载椭球体。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("vc-geometry-outline-ellipsoid")]),s._v(" 组件用于加载椭球体轮廓。")]),s._v(" "),a("li",[s._v("需要作为 "),a("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),a("code",{pre:!0},[s._v("vc-primitive")]),s._v("。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primitive"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":model-matrix")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipsoid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipsoid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radii")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radii"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertex-format")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipsoid")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":model-matrix")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrixOutline"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-ellipsoid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipsoidOutline"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radii")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radii"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-ellipsoid")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radii")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrixOutline")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Promise")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("all")]),s._v("(["),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("ellipsoid")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("ellipsoidOutline")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("])."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reduce")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("constructor")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("createGeometry")]),s._v("(cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v(")\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v("\n            ? "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("transform")]),s._v("(geometry."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v(", cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(")\n            : geometry."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("union")]),s._v("(prev, boundingSphere)\n        }, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("flyToBoundingSphere")]),s._v("(boundingSphereUnion)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v(" = viewer\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Matrix4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Transforms")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v(" } = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v("({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vertexFormat")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("VERTEX_FORMAT")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("attributes")]),s._v(" = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Matrix4")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("multiplyByTranslation")]),s._v("(\n          "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Transforms")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("eastNorthUpToFixedFrame")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromDegrees")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Matrix4")]),s._v("()\n        )\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrixOutline")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Matrix4")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("multiplyByTranslation")]),s._v("(\n          "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Transforms")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("eastNorthUpToFixedFrame")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromDegrees")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Matrix4")]),s._v("()\n        )\n      },\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("LEFT_CLICK")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("movement")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("pick")]),s._v("(movement."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(feature)\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-ellipsoid")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("radii")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在x、y、z方向上的半径。 "),a("strong",[s._v("结构: { x: number, y: number, z: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("innerRadii")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在x、y、z方向上的内半径。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumClock")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在xy平面内从x轴到y轴的最小角度。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumClock")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2*PI")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在xy平面内从x轴到y轴的最大角度。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumCone")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体从z轴正半轴到z轴负半轴的最小角度。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumCone")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("PI")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体从z轴正半轴到z轴负半轴的最大角度。")])]),s._v(" "),a("tr",[a("td",[s._v("stackPartitions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("64")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定将椭球体横向划分为层的次数。")])]),s._v(" "),a("tr",[a("td",[s._v("slicePartitions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("64")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定将椭球体纵向划分为片的次数。")])]),s._v(" "),a("tr",[a("td",[s._v("vertexFormat")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体顶点属性渲染方式。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-ellipsoid")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("radii")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在x、y、z方向上的半径。 "),a("strong",[s._v("结构: { x: number, y: number, z: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("innerRadii")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在x、y、z方向上的内半径。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumClock")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在xy平面内从x轴到y轴的最小角度。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumClock")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2*PI")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体在xy平面内从x轴到y轴的最大角度。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumCone")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体从z轴正半轴到z轴负半轴的最小角度。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumCone")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("PI")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体从z轴正半轴到z轴负半轴的最大角度。")])]),s._v(" "),a("tr",[a("td",[s._v("stackPartitions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("10")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定将椭球体横向划分为层的次数。")])]),s._v(" "),a("tr",[a("td",[s._v("slicePartitions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("8")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定将椭球体纵向划分为片的次数。")])]),s._v(" "),a("tr",[a("td",[s._v("vertexFormat")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体顶点属性渲染方式。")])]),s._v(" "),a("tr",[a("td",[s._v("subdivisions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("128")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体轮廓线上的点数，确定弧线的光滑粒度。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGeometry.html"}},[this._v("EllipsoidGeometry")])]),this._v("、 "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidOutlineGeometry.html"}},[this._v("EllipsoidOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=_.exports}}]);
//# sourceMappingURL=156.c2ea97052c1547628fde.js.map