webpackJsonp([139],{IV2x:function(n,a,t){var e=t("b/uP");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("8bSs")("31f6d052",e,!0)},"b/uP":function(n,a,t){a=n.exports=t("l95E")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},n7ci:function(n,a,t){"use strict";function e(n){t("IV2x")}Object.defineProperty(a,"__esModule",{value:!0});var s=t("3cXf"),l=t.n(s),i=t("hRKE"),o=t.n(i),r=t("lcoF"),d=t("2sCs"),c=t.n(d),f=t("x1ym"),p=t("P9l9"),u={mixins:[r.a],data:function(){var n=this,a=f.a.required("此项必填"),t=f.a.number("只能输入数字"),e=f.a.email("请输入正确的邮箱地址"),s=(f.a.validateName("用户名已存在"),f.a.tel("请输入正确的固定电话")),l=f.a.mobile("请输入正确的手机号");f.a.level(this.$route.query.type);return{params:{queryUsername:"",https:""},rules:{username:[a],email:[e],password:[function(){return{validator:function(a,t,e){""===t?e():(""!==n.dataInfo.confirmPassword&&n.$refs.form.validateField("confirmPassword"),e())},trigger:"blur"}}()],confirmPassword:[function(){return{validator:function(a,t,e){""===t?e():t!==n.dataInfo.password?e(new Error("前后密码不一致")):e()},trigger:"blur"}}()],groupId:[a,t],grain:[a,t],phone:[s],mobile:[l],disabled:[a],rank:[function(){return{validator:function(n,a,t){""!=a&&c.a.post(p.a.adminValRank,{id:"",rank:a}).then(function(n){""==a?t():"200"==n.code?n.body.result?t():t(new Error("不能大于自身级别")):t(new Error("服务器响应异常"))})},trigger:"blur"}}()]},memberGroup:[],roles:[],dialogDepartments:!1,parents:[],departmentList:[],siteList:[],roleIds:[],steps:[],siteIds:[],allChannels:[],allControlChannels:[],defaultProps:{label:"name",value:"id",children:"child"},dialogVisible:!1}},methods:{getRoleIds:function(n){this.dataInfo.roleIds=n},getSiteIds:function(n,a){this.siteIds.indexOf(n)>=0?(this.allChannels[a]=!0,this.allControlChannels[a]=!0):(this.allChannels[a]=!1,this.allControlChannels[a]=!1)},getDataInfo:function(n,a){var t=this,e=this.$api;c.a.all([c.a.post(e.adminGlobleGet,{id:n,https:a}),c.a.post(e.groupList),c.a.post(e.roleList),c.a.post(e.siteList)]).then(c.a.spread(function(n,a,e,s){t.dataInfo=n.body,t.memberGroup=a.body,t.roles=e.body,t.siteList=s.body,t.parents=t.dataInfo.departmentIds;for(var l in t.dataInfo.sites)t.siteIds[l]=t.dataInfo.sites[l].id,t.steps[l]=t.dataInfo.steps[l],t.allChannels[l]=t.dataInfo.allChannels[l];t.$refs.form.resetFields(),t.loading=!1})).catch(function(n){t.loading=!1})},update:function(){var n={};n=this.dataInfo;for(var a in this.dataInfo)n[a]=this.dataInfo[a];n.roleIds=n.roleIds.join(","),n.siteIds=this.siteIds.join(","),n.steps=this.siteIds.join(",");for(var t in n)"object"==o()(n[t])&&delete n[t];var e=[];for(var s in this.siteIds)for(var i in this.siteList)if(this.siteList[i].id===this.siteIds[s]){var r={siteIds:this.siteIds[s],steps:this.steps[i],allChannels:this.allChannels[i],allControlChannels:this.allControlChannels[i]};e.push(r)}n.source=l()(e),this.updateDataInfo(this.$api.adminGlobleUpdate,n,"list")}},created:function(){this.getDataInfo(this.$route.query.id)}},m=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{"label-width":"162px",model:n.dataInfo,rules:n.rules}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"用户名",prop:"username"}},[n._v("\n              "+n._s(n.dataInfo.username)+"       \n         ")]),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"电子邮箱",prop:"email"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.email,callback:function(a){n.$set(n.dataInfo,"email",a)},expression:"dataInfo.email"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"密码",prop:"password"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.password,callback:function(a){n.$set(n.dataInfo,"password",a)},expression:"dataInfo.password"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v("不修改请留空")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"确认密码",prop:"confirmPassword"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.confirmPassword,callback:function(a){n.$set(n.dataInfo,"confirmPassword",a)},expression:"dataInfo.confirmPassword"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v("不修改请留空")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"会员组",prop:"groupId"}},[t("el-select",{staticClass:"cms-width",model:{value:n.dataInfo.groupId,callback:function(a){n.$set(n.dataInfo,"groupId",a)},expression:"dataInfo.groupId"}},n._l(n.memberGroup,function(n,a){return t("el-option",{key:a,attrs:{label:n.name,value:n.id}})}))],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"等级",prop:"rank"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.rank,callback:function(a){n.$set(n.dataInfo,"rank",a)},expression:"dataInfo.rank"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v("越大等级越高")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"禁用",prop:"disabled"}},[t("el-radio-group",{model:{value:n.dataInfo.disabled,callback:function(a){n.$set(n.dataInfo,"disabled",a)},expression:"dataInfo.disabled"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"登录次数",prop:"loginCount"}},[n._v("\n             "+n._s(n.dataInfo.loginCount)+" \n         ")]),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"注册",prop:"loginCount"}},[n._v("\n             "+n._s(n.dataInfo.registerTime)+" "+n._s(n.dataInfo.registerIp)+" \n         ")]),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"最后登录",prop:"lastLoginTime"}},[n._v("\n             "+n._s(n.dataInfo.lastLoginTime)+" \n         ")]),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"真实姓名",prop:"realname"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"username"},model:{value:n.dataInfo.userRealName,callback:function(a){n.$set(n.dataInfo,"userRealName",a)},expression:"dataInfo.userRealName"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"\t性别",prop:"gender"}},[t("el-radio-group",{model:{value:n.dataInfo.gender,callback:function(a){n.$set(n.dataInfo,"gender",a)},expression:"dataInfo.gender"}},[t("el-radio",{attrs:{label:!0}},[n._v("男")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("女")])],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"受限管理员",prop:"selfAdmin"}},[t("el-radio-group",{model:{value:n.dataInfo.selfAdmin,callback:function(a){n.$set(n.dataInfo,"selfAdmin",a)},expression:"dataInfo.selfAdmin"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1),n._v(" "),t("span",{staticClass:"gray"},[n._v("只能管理自己的数据")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"角色",prop:"roleIds"}},[t("el-checkbox-group",{on:{change:n.getRoleIds},model:{value:n.dataInfo.roleIds,callback:function(a){n.$set(n.dataInfo,"roleIds",a)},expression:"dataInfo.roleIds"}},n._l(n.roles,function(a,e){return t("el-checkbox",{key:e,attrs:{label:a.id}},[n._v(n._s(a.name))])})),n._v(" "),t("span",{staticClass:"gray"},[n._v("功能权限的控制在角色中")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"站群权限"}},[t("el-button",{on:{click:function(a){n.dialogVisible=!0}}},[n._v("站群权限")]),n._v(" "),t("el-dialog",{attrs:{title:"站群权限设置",visible:n.dialogVisible},on:{"update:visible":function(a){n.dialogVisible=a}}},[t("div",{staticClass:"channels-box"},[t("el-checkbox-group",{staticClass:"pull-left check-vertical",model:{value:n.siteIds,callback:function(a){n.siteIds=a},expression:"siteIds"}},n._l(n.siteList,function(a,e){return t("el-checkbox",{key:e,attrs:{label:a.id},on:{change:function(t){n.getSiteIds(a.id,e)}}},[n._v(n._s(a.name))])})),n._v(" "),t("div",{staticClass:"pull-left"},n._l(n.siteList,function(a,e){return t("div",{key:e,staticClass:"cms-channels"},[t("div",{staticClass:"pull-left",staticStyle:{"margin-right":"12px"}},[t("label",{staticClass:"font-size:12px;",attrs:{for:""}},[n._v("审核级别")]),n._v(" "),t("el-input",{staticClass:"w50",attrs:{type:"number",disabled:"-1"==n.siteIds.indexOf(a.id)},model:{value:n.steps[e],callback:function(a){n.$set(n.steps,e,a)},expression:"steps[index]"}})],1),n._v(" "),t("el-checkbox",{staticClass:"pull-left",attrs:{"false-label":"",disabled:"-1"==n.siteIds.indexOf(a.id)},model:{value:n.allChannels[e],callback:function(a){n.$set(n.allChannels,e,a)},expression:"allChannels[index]"}},[n._v("所有栏目内容权限")])],1)}))],1),n._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{on:{click:function(a){n.dialogVisible=!1}}},[n._v("确定")])],1)]),n._v(" "),t("span",{staticClass:"gray"})],1),n._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlobal/edit",expression:"'/adminGlobal/edit'"}],attrs:{type:"primary"},on:{click:function(a){n.update()}}},[n._v("修改")]),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},v=[],b={render:m,staticRenderFns:v},I=b,h=t("8AGX"),_=e,C=h(u,I,!1,_,null,null);a.default=C.exports}});