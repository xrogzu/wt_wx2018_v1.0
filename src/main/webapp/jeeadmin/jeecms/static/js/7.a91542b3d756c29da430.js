webpackJsonp([7],{"2PCp":function(n,e,t){var a=t("UPV+");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("8bSs")("5500f526",a,!0)},"UPV+":function(n,e,t){e=n.exports=t("l95E")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},qPoY:function(n,e,t){"use strict";function a(n){t("2PCp")}Object.defineProperty(e,"__esModule",{value:!0});var l=t("lcoF"),s=t("2sCs"),o=t.n(s),i=t("x1ym"),r={mixins:[l.a],data:function(){var n=i.a.required("此项必填");i.a.number("只能输入数字");return{params:{},rules:{field:[i.a.string("只能输入字母"),n],label:[n],dataType:[n],required:[n],single:[n]},checkRes:!1}},methods:{checkId:function(n){var e=this,t=this.$api;o.a.all([o.a.post(t.typeCheckId,{id:n})]).then(o.a.spread(function(n){n.body.result?e.checkRes=!0:e.checkRes=!1,e.loading=!1})).catch(function(n){e.loading=!1})},getDataInfo:function(n){var e=this,t=this.$api;o.a.post(t.itemGet,{id:n}).then(function(n){e.dataInfo=n.body,e.$refs.form.resetFields(),e.loading=!1}).catch(function(n){e.loading=!1})},update:function(){this.dataInfo.channel=!1,this.updateDataInfo(this.$api.itemUpdate,this.dataInfo),this.routerLink("/contentModel/list","list",0,this.$route.query)},add:function(n){if(this.dataInfo.channel=!1,this.dataInfo.modelId=this.$route.query.modelId,this.saveDataInfo(!0,this.$api.itemSave,this.dataInfo,"list"),n)return!1;this.routerLink("/contentModel/list","list",0,this.$route.query)}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"字段",prop:"field"}},[0==this.id?t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.field,callback:function(e){n.$set(n.dataInfo,"field",e)},expression:"dataInfo.field"}}):t("span",[n._v(n._s(n.dataInfo.field))])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"名称:",prop:"label"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.label,callback:function(e){n.$set(n.dataInfo,"label",e)},expression:"dataInfo.label"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"数据类型:",prop:"dataType"}},[t("el-select",{staticClass:"cms-width",attrs:{disabled:"update"==n.type},model:{value:n.dataInfo.dataType,callback:function(e){n.$set(n.dataInfo,"dataType",e)},expression:"dataInfo.dataType"}},[t("el-option",{attrs:{label:"字符串文本",value:1}}),n._v(" "),t("el-option",{attrs:{label:"整形文本",value:2}}),n._v(" "),t("el-option",{attrs:{label:"浮点形文本",value:3}}),n._v(" "),t("el-option",{attrs:{label:"文本区",value:4}}),n._v(" "),t("el-option",{attrs:{label:"日期",value:5}}),n._v(" "),t("el-option",{attrs:{label:"下拉列表",value:6}}),n._v(" "),t("el-option",{attrs:{label:"复选框",value:7}}),n._v(" "),t("el-option",{attrs:{label:"单选框",value:8}}),n._v(" "),t("el-option",{attrs:{label:"附件",value:9}}),n._v(" "),t("el-option",{attrs:{label:"图片",value:10}})],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"默认值:",prop:"defValue"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.defValue,callback:function(e){n.$set(n.dataInfo,"defValue",e)},expression:"dataInfo.defValue"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"可选项:",prop:"optValue"}},[t("el-input",{staticClass:"cms-width",attrs:{disabled:"update"==n.type},model:{value:n.dataInfo.optValue,callback:function(e){n.$set(n.dataInfo,"optValue",e)},expression:"dataInfo.optValue"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v('多个值用","分开')])],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"帮助信息:",prop:"help"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.help,callback:function(e){n.$set(n.dataInfo,"help",e)},expression:"dataInfo.help"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"是否必填:",prop:"required"}},[t("el-radio-group",{model:{value:n.dataInfo.required,callback:function(e){n.$set(n.dataInfo,"required",e)},expression:"dataInfo.required"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"独占一行:",prop:"single"}},[t("el-radio-group",{model:{value:n.dataInfo.single,callback:function(e){n.$set(n.dataInfo,"single",e)},expression:"dataInfo.single"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),t("div",{staticClass:"form-footer"},[0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentModel/add",expression:"'/contentModel/add'"}],attrs:{type:"warning"},on:{click:function(e){n.add(!0)}}},[n._v("保存并继续添加")]):n._e(),n._v(" "),0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentModel/add",expression:"'/contentModel/add'"}],attrs:{type:"primary"},on:{click:function(e){n.add(!1)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentModel/update",expression:"'/contentModel/update'"}],attrs:{type:"primary"},on:{click:function(e){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},u=f,p=t("8AGX"),v=a,m=p(r,u,!1,v,null,null);e.default=m.exports}});