webpackJsonp([37],{"ZZW/":function(n,a,e){"use strict";function t(n){e("ne7N")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("2sCs"),i=e.n(s),o=e("x1ym"),l=e("lcoF"),r=e("vV/h"),d={mixins:[l.a],data:function(){var n=this,a=o.a.required();o.a.number();return{memberGroup:[],checkApiPwd:!1,rules:{disabled:[a],apiPwd:[{validator:function(a,e,t){if(""===e)t(new Error("请输入独立密码")),n.valueType="password";else{var s=Object(r.a)(e,"S9u978Q31NGPGc5H","X83yESM9iShLxfwS");i.a.post(n.$api.apiAccountValPwd,{password:s}).then(function(a){a.body.result?(n.show=!0,t()):(n.show=!1,t(new Error("请输入正确的独立密码")))})}},trigger:"blur"}]},valueType:"password",show:!1}},methods:{showpwd:function(){this.show?this.valueType="text":this.valueType="password"},getDataInfo:function(n){var a=this,e=this.$api;i.a.all([i.a.post(e.apiAccountGet,{id:n})]).then(i.a.spread(function(n){a.dataInfo=n.body,a.$refs.form.resetFields(),a.loading=!1})).catch(function(n){a.loading=!1})},creatAppId:function(){this.dataInfo.setAppId=this.randomWord(!1,!0,16)},creatAppKey:function(){this.dataInfo.appKey=this.randomWord(!1,!1,32)},creatAesKey:function(){this.dataInfo.aesKey=this.randomWord(!1,!1,16)},creatIvKey:function(){this.dataInfo.ivKey=this.randomWord(!1,!1,16)},randomWord:function(n,a,e,t){var s="",i=e,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];n&&(i=Math.round(Math.random()*(t-e))+e),a&&(o=["0","1","2","3","4","5","6","7","8","9"]);for(var l=0;l<i;l++){s+=o[Math.round(Math.random()*(o.length-1))]}return s},checkPwd:function(n){},add:function(n){var a=this;this.$refs.form.validate(function(e){if(!e)return!1;a.loading=!0,a.dataInfo.apiPwd=Object(r.a)(a.dataInfo.apiPwd,"S9u978Q31NGPGc5H","X83yESM9iShLxfwS"),i.a.post(a.$api.apiAccountSave,a.dataInfo).then(function(e){"200"==e.code&&(a.successMessage("添加成功"),n?a.reset():setTimeout(function(){a.routerLink("list")},1e3)),a.loading=!1}).catch(function(n){a.loading=!1})})}},created:function(){"save"==this.type?(this.valueType="text",this.getDataInfo(this.id)):"update"==this.type&&(this.valueType="password",this.getDataInfo(this.id))}},p=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"190px"}},[e("el-form-item",{staticClass:"flex-100",attrs:{label:"独立密码",prop:"apiPwd"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.apiPwd,callback:function(a){n.$set(n.dataInfo,"apiPwd",a)},expression:"dataInfo.apiPwd"}}),n._v(" "),"update"==n.type?e("el-button",{on:{click:n.showpwd}},[n._v("查看")]):n._e(),n._v(" "),"update"==n.type?e("span",{staticClass:"gray"},[n._v("输入密码后查看信息")]):n._e()],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"是否默认管理后台API账户",prop:"admin"}},[e("el-radio-group",{model:{value:n.dataInfo.admin,callback:function(a){n.$set(n.dataInfo,"admin",a)},expression:"dataInfo.admin"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"是否限制单设备同时登陆",prop:"limitSingleDevice"}},[e("el-radio-group",{model:{value:n.dataInfo.limitSingleDevice,callback:function(a){n.$set(n.dataInfo,"limitSingleDevice",a)},expression:"dataInfo.limitSingleDevice"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"APP ID",prop:"setAppId"}},[e("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.setAppId,callback:function(a){n.$set(n.dataInfo,"setAppId",a)},expression:"dataInfo.setAppId"}}),n._v(" "),"save"==n.type?e("el-button",{attrs:{type:"primary"},on:{click:n.creatAppId}},[n._v("生成")]):n._e()],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"APP KEY",prop:"appKey"}},[e("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.appKey,callback:function(a){n.$set(n.dataInfo,"appKey",a)},expression:"dataInfo.appKey"}}),n._v(" "),"save"==n.type?e("el-button",{attrs:{type:"primary"},on:{click:n.creatAppKey}},[n._v("生成")]):n._e()],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"aesKey",prop:"aesKey"}},[e("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.aesKey,callback:function(a){n.$set(n.dataInfo,"aesKey",a)},expression:"dataInfo.aesKey"}}),n._v(" "),"save"==n.type?e("el-button",{attrs:{type:"primary"},on:{click:n.creatAesKey}},[n._v("生成")]):n._e()],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"ivKey",prop:"ivKey"}},[e("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.ivKey,callback:function(a){n.$set(n.dataInfo,"ivKey",a)},expression:"dataInfo.ivKey"}}),n._v(" "),"save"==n.type?e("el-button",{attrs:{type:"primary"},on:{click:n.creatIvKey}},[n._v("生成")]):n._e()],1),n._v(" "),"save"==n.type?e("el-form-item",{staticClass:"flex-100",attrs:{label:"禁用",prop:"disabled"}},[e("el-radio-group",{model:{value:n.dataInfo.disabled,callback:function(a){n.$set(n.dataInfo,"disabled",a)},expression:"dataInfo.disabled"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1):n._e(),n._v(" "),"save"==n.type?e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiAccount/add",expression:"'/apiManage/apiAccount/add'"}],attrs:{type:"warning"},on:{click:function(a){n.add(!0)}}},[n._v("保存并继续添加")]),n._v(" "),e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiAccount/add",expression:"'/apiManage/apiAccount/add'"}],attrs:{type:"primary"},on:{click:function(a){n.add(!1)}}},[n._v("提交")]),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")]),n._v(" "),e("span",{staticClass:"gray"},[n._v("\n               选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")])],1):n._e()],1)],1)},c=[],f={render:p,staticRenderFns:c},u=f,v=e("8AGX"),m=t,y=v(d,u,!1,m,null,null);a.default=y.exports},hSTY:function(n,a,e){a=n.exports=e("l95E")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},ne7N:function(n,a,e){var t=e("hSTY");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e("8bSs")("46fcccbb",t,!0)}});