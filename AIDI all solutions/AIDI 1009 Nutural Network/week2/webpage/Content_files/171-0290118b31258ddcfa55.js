(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{"1zDl":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return u}));var o=r("nsO7"),s=r("Llzl"),a=r("pjml"),i=r("+brj");const n="ultra.service.course.content.copy",u="courseContentCopy";class l{constructor(e,t){this.browserStorage=e,this.$q=t,this.COPY_TASKS_KEY="COPY-TASKS-ID",this.DISMISSED_TASKS_KEY="DISMISSED-COPY-TASKS-ID",this.getCurrentCopyTaskErrorSummaries=e=>this.getCurrentCopyTasks().then(((t=[])=>t.length?this.getErrorSummaries(e,t):[])),this.getCopyTaskErrorCountsByCategory=(e,t)=>(t?this.getErrorSummaries(e,[t]):this.getCurrentCopyTaskErrorSummaries(e)).then((e=>o.map(e,(e=>this.mergeTasksWithinCourseGrouping(e))))),this.mergeTasksWithinCourseGrouping=e=>{const{sourceCourseName:t,sourceCourseId:r}=o.first(e);return{errorCountsByCategory:o(e).flatMap((e=>e.errorCountsByCategory)).groupBy((e=>e.name)).map(((e,t)=>this.mergeErrorCountsOfSameCategory(e))).sortBy((e=>this.localizedCategoryName(e.name))).value(),sourceCourseId:r,sourceCourseName:t,taskIds:o.map(e,(e=>e.taskId))}},this.mergeErrorCountsOfSameCategory=e=>o.reduce(e,((e,t)=>({count:e.count+t.count,name:t.name})),{count:0,name:""}),this.localizedCategoryName=e=>{const t=a.l.ConversionContentCategory.parse(e);return t?t.getLocalizableCategoryNameKey():null},this.getErrorSummaries=(e,t=[])=>e.getGranularCopyTaskStatus(t).then((e=>{a.l.ConversionReportStatus.Success;const t=o(e.results).groupBy((e=>e.sourceCourseId)).mapValues(((e,t)=>o.head(e).sourceCourseName)).value();return o(e.results).filter((e=>!!e.errorCountsByCategory.length)).groupBy((e=>e.sourceCourseId)).sortBy(((e,r)=>t[r])).map(((e,t)=>e)).value()})),this.copyDetailsNotificationCount=e=>this.getCopyDetailsNotificationTasks().then((t=>o(e).flatMap().filter((e=>o.includes(t,e.taskId))).flatMap((e=>e.errorCountsByCategory)).reduce(((e,t)=>e+t.count),0))),this.resetCopyDetailsNotificationCount=()=>{this.getCurrentCopyTasks().then(((e=[])=>{this.browserStorage.saveToStorage(this.DISMISSED_TASKS_KEY,e,i.a.SessionStorage)}))}}getCurrentCopyTasks(){return this.browserStorage.getFromStorage(this.COPY_TASKS_KEY,i.a.SessionStorage)}getCopyDetailsNotificationTasks(){const e=this.browserStorage.getFromStorage(this.DISMISSED_TASKS_KEY,i.a.SessionStorage),t=this.browserStorage.getFromStorage(this.COPY_TASKS_KEY,i.a.SessionStorage);return this.$q.all([e,t]).then((([e=[],t=[]])=>t.filter((t=>!o.includes(e,t)))))}appendToCurrentCopyTasks(e=[]){return this.browserStorage.getFromStorage(this.COPY_TASKS_KEY,i.a.SessionStorage).then(((t=[])=>this.browserStorage.saveToStorage(this.COPY_TASKS_KEY,[...t,...e],i.a.SessionStorage)))}clearCopyTasks(){this.browserStorage.deleteFromStorage(this.DISMISSED_TASKS_KEY,i.a.SessionStorage),this.browserStorage.deleteFromStorage(this.COPY_TASKS_KEY,i.a.SessionStorage)}}l.$inject=[i.c,"$q"];s.module(n,[a.N]).service(u,l)},QIw5:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return l}));var o=r("Llzl"),s=r("pjml"),a=r("TnpK"),i=r("Si89");const n="ultra.components.services.routing",u="routing";var l;!function(e){e.Already="Already",e.Failure="Failure",e.Unavailable="Unavailable"}(l||(l={}));class c{constructor(e,t,r){this.CourseModel=e,this.ultraState=t,this.landingPage=r}goToPostRegistrationPage(e){"succeeded"!==e.enrollStatusCode&&"alreadyEnrolledInCourse"!==e.enrollStatusCode||!e.courseId?e.courseId&&"invalidInput"===e.enrollStatusCode?this.ultraState.go("base.courses",{enrollmentMessage:l.Failure}):this.landingPage.navigateToLandingPage():this.CourseModel.$find(e.courseId,{fields:"isAvailable"}).$then((t=>{t.isAvailable?"succeeded"===e.enrollStatusCode?this.ultraState.goPeekState("course.outline",{courseId:e.courseId}):"alreadyEnrolledInCourse"===e.enrollStatusCode&&this.ultraState.goPeekState("course.outline",{courseId:e.courseId,enrollmentMessage:l.Already}):this.ultraState.go("base.courses",{enrollmentMessage:l.Unavailable})}))}}c.$inject=[s.m.serviceName,a.d,i.b];o.module(n,[a.b,i.a]).service(u,c)},"k+3c":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("ZQey");class s{constructor(e,t,r,o,s,a,i,n,u){this.modalTitle=e,this.modalText=t,this.secondaryButtonText=r,this.primaryButtonText=o,this.modalDismissText=s,this.secondaryButtonStatus=a,this.primaryButtonStatus=i,this.courseStatusName=n,this.courseDescription=u}}class a{}a.Open=new s(".openCourse.modalTitle",".openCourse.modalText",".openCourse.makePrivate",".openCourse.makeComplete","global.cancelTakeMeBack","PRIVATE","COMPLETE",".openCourse.courseStatus",".openCourse.courseDescription"),a.Complete=new s(".completeCourse.modalTitle",".completeCourse.modalText",".completeCourse.makeOpen",".completeCourse.makePrivate","global.cancelTakeMeBack","OPEN","PRIVATE",".completeCourse.courseStatus",".completeCourse.courseDescription"),a.Private=new s(".privateCourse.modalTitle",".privateCourse.modalText","global.cancel",".privateCourse.makeOpen","","","OPEN",".privateCourse.courseStatus",".privateCourse.courseDescription"),a.PrivateDuration=new s(".privateCourse.modalTitle",".privateDurationCourse.modalText","","global.close","","","",".privateCourse.courseStatus",".privateCourse.courseDescription"),a.PrivateDurationClassic=new s(".privateCourse.modalTitle",".privateDurationClassicCourse.modalText","","global.close","","","",".privateCourse.courseStatus",".privateCourse.courseDescription"),a.OpenTermClassic=new s(".openTermClassicCourse.modalTitle",".openTermClassicCourse.modalText","global.cancel","","","","OPEN",".openTermClassicCourse.courseStatus",".openTermClassicCourse.courseDescription"),a.PrivateTermClassic=new s(".privateTermClassicCourse.modalTitle",".privateTermClassicCourse.modalText","global.cancel","","","","PRIVATE",".privateTermClassicCourse.courseStatus",".privateTermClassicCourse.courseDescription"),a.TermOpen=new s(".openTermCourse.modalTitle",".openTermCourse.modalText","global.cancel",".openTermCourse.makeComplete","","","COMPLETE",".openTermCourse.courseStatus",".openTermCourse.courseDescription"),a.TermComplete=new s(".completeTermCourse.modalTitle",".completeTermCourse.modalText","global.cancel",".completeTermCourse.makeOpen","","","OPEN",".completeTermCourse.courseStatus",".completeTermCourse.courseDescription"),a.TermPrivate=new s(".privateTermCourse.modalTitle",".privateTermCourse.modalText","global.cancel","","","","OPEN",".privateTermCourse.courseStatus",".privateTermCourse.courseDescription"),a.OpenClassic=new s(".openClassicCourse.modalTitle",".openClassicCourse.modalText","global.cancel",".openClassicCourse.makePrivate","","","PRIVATE",".openClassicCourse.courseStatus",".openClassicCourse.courseDescription");class i{constructor(e,t){switch(this.course=e,this.status=t,t){case o.a.Open:this.optionsForCurrentStatus=a.Open;break;case o.a.Complete:this.optionsForCurrentStatus=a.Complete;break;case o.a.Private:this.optionsForCurrentStatus=a.Private;break;case o.a.PrivateDuration:this.optionsForCurrentStatus=a.PrivateDuration;break;case o.a.PrivateDurationClassic:this.optionsForCurrentStatus=a.PrivateDurationClassic;break;case o.a.OpenTermClassic:this.optionsForCurrentStatus=a.OpenTermClassic;break;case o.a.PrivateTermClassic:this.optionsForCurrentStatus=a.PrivateTermClassic;break;case o.a.TermOpen:this.optionsForCurrentStatus=a.TermOpen;break;case o.a.TermComplete:this.optionsForCurrentStatus=a.TermComplete;break;case o.a.TermPrivate:this.optionsForCurrentStatus=a.TermPrivate;break;case o.a.OpenClassic:this.optionsForCurrentStatus=a.OpenClassic;break;default:throw new Error("Unknown CourseStatus")}}getLocalizationKey(e){const t=this.course.isOrganization?"organization.outline":"course.outline";return(e||"").startsWith(".")?t+e:e}getStatus(){return this.status}getModalTitle(){return this.getLocalizationKey(this.optionsForCurrentStatus.modalTitle)}getModalDismissText(){return this.getLocalizationKey(this.optionsForCurrentStatus.modalDismissText)}getModalText(){return this.getLocalizationKey(this.optionsForCurrentStatus.modalText)}getSecondaryButtonText(){return this.getLocalizationKey(this.optionsForCurrentStatus.secondaryButtonText)}getPrimaryButtonText(){return this.getLocalizationKey(this.optionsForCurrentStatus.primaryButtonText)}getSecondaryButtonStatus(){return this.getLocalizationKey(this.optionsForCurrentStatus.secondaryButtonStatus)}getPrimaryButtonStatus(){return this.getLocalizationKey(this.optionsForCurrentStatus.primaryButtonStatus)}getCourseStatusName(){return this.getLocalizationKey(this.optionsForCurrentStatus.courseStatusName)}getCourseDescription(){return this.getLocalizationKey(this.optionsForCurrentStatus.courseDescription)}}},lGua:function(e,t,r){var o=r("ziER"),s=r("5JeM"),a=new o({id:"icon-small-settings",use:"icon-small-settings-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-settings"><path d="M7.5977 1.5453c.1998-.2709.6048-.2709.8046 0l.9644 1.307a.5.5 0 00.5534.1798l1.5484-.4906c.3209-.1016.6485.1364.651.473l.0119 1.6242a.5001.5001 0 00.342.4707l1.5411.5133c.3193.1064.4445.4916.2486.7653l-.945 1.321a.5002.5002 0 000 .582l.945 1.321c.1959.2737.0707.6589-.2486.7653l-1.5411.5133a.5.5 0 00-.342.4706l-.0119 1.6243c-.0025.3366-.3301.5746-.651.473L9.92 12.9679a.5.5 0 00-.5533.1798l-.9644 1.307c-.1998.2709-.6048.2709-.8046 0l-.9644-1.307a.5.5 0 00-.5534-.1798l-1.5484.4906c-.3209.1016-.6485-.1364-.651-.473l-.012-1.6243a.4999.4999 0 00-.342-.4706l-1.541-.5133c-.3193-.1064-.4445-.4916-.2486-.7653l.945-1.321a.5.5 0 000-.582l-.945-1.321c-.1959-.2737-.0707-.6589.2486-.7653l1.541-.5133a.5.5 0 00.342-.4707l.012-1.6242c.0025-.3366.3301-.5746.651-.473l1.5484.4906a.5.5 0 00.5534-.1798l.9644-1.307z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 8c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(a);e.exports=a}}]);