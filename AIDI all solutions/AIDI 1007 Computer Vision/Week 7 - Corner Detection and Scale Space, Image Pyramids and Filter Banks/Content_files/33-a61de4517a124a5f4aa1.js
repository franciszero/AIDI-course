(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"3OhA":function(e,t){e.exports='<div class="course" bb-dir>\n  <div class="panel-wrap classic-learn-wrapper">\n    <header class="panel-header">\n      <div class="columns">\n        <h1 class="panel-title">{{ course.model.displayName }}</h1>\n        <button class="left-off-canvas-toggle menu-toggle"\n                type="button"\n                analytics-id="course.original.menu.button">\n          <bb-svg-icon size="small" icon="main-menu"></bb-svg-icon>\n          <span class="sr-only" bb-translate>base.menu</span>\n        </button>\n      </div>\n    </header>\n    <div class="panel-content iframe-wrapper">\n      \x3c!-- Please do not change the class name of this iframe (classic-learn-iframe). There are dependencies on this class in Learn Java / JavaScript code, such as LaunchBasicLTIReturnAction.java. --\x3e\n      <iframe bb-iframe-max-height class="classic-learn-iframe" name="classic-learn-iframe" ng-if="::course.getIframeUrl()"\n              ng-src="{{::course.getIframeUrl()}}" bb-iframe-event-repeater="keydown" title="{{course.model.displayName}}"\n              bb-iframe-location-interceptor="course.handleClassicRedirect(location, preventDefault)"\n              allow="geolocation *;microphone *;camera *;midi *;encrypted-media *;fullscreen *"></iframe>\n      <div ui-view="course-classic-peek"></div>\n    </div>\n  </div>\n</div>\n'},D1Wg:function(e,t,n){var o=n("ziER"),i=n("5JeM"),r=new o({id:"icon-medium-calendar",use:"icon-medium-calendar-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-calendar"><path d="M4 3H1v20h22V3h-3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 1h5v4H4zM15 1h5v4h-5z" /><path d="M1 9h22" stroke-width="2" /><path d="M5 14v-1h2v1H5zM11 14v-1h2v1h-2zM17 14v-1h2v1h-2zM5 19v-1h2v1H5zM11 19v-1h2v1h-2zM17 19v-1h2v1h-2zM9 3h6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});i.add(r);e.exports=r},LtE5:function(e,t,n){var o=n("ziER"),i=n("5JeM"),r=new o({id:"icon-medium-courses",use:"icon-medium-courses-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-courses"><path d="M8 5v18M21 1H3v22h18V5H3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M19 1v4" stroke-width="2" /><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 11h5v3h-5z" /></symbol>'});i.add(r);e.exports=r},Pz5j:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var o=n("Llzl");const i="ultra.directives.iframeLocationInterceptor";class r{constructor(t){this.$parse=t,this.restrict="A",this.link=(t,n,o)=>{const i=this.$parse(o.bbIframeLocationInterceptor);let s=null;const a=function(o){if(!o||!o.target)return;const s=r.getElementLocation(e(o.target));if(!s)return;const a=n.get(0).contentWindow;i(t,{event:o,location:new URL(s,a.location.href),preventDefault:o.preventDefault.bind(o)})};n.on("load",(o=>{const r=n.get(0).contentWindow;s&&s.off("click",a),s=e(r),s.on("click",a),i(t,{event:o,location:r&&r.location,preventDefault(){}})})),t.$on("$destroy",(()=>{s&&s.off("click",a)}))}}static getElementLocation(e){const t=(e.attr("onclick")||"").match(/document.location=['"](.*)['"];/);if(t&&!(t.length<2))return t[1]}}r.$inject=["$parse"],o.module(i,[]).directive("bbIframeLocationInterceptor",["$injector",e=>e.instantiate(r)])}).call(this,n("71td"))},VbY5:function(e,t){e.exports='\n<div class="course courseConversion" bb-dir ng-class="course.courseColorClass"\n     bb-first-time-container bb-course-membership-markups="{{::course.model.id}}">\n  <div class="student-preview-header"\n    id="student-preview-header"\n    ng-if="course.showStudentPreviewIframeAndHeader" bb-foundation-defer>\n    <h2 class="preview-header-text" bb-translate course-org-token-resolver>course.studentPreview</h2>\n    <div class="preview-header-spacer"></div>\n    <bb-exit-student-preview\n      is-in-student-preview="course.showStudentPreviewIframeAndHeader"\n      is-exit-modal-open="course.isExitModalOpen"\n      on-open="course.openExitStudentPreviewModal"\n      on-cancel="course.closeExitStudentPreviewModal"\n      on-continue="course.exitStudentPreview"\n      course-id="course.model.id"\n    ></bb-exit-student-preview>\n  </div>\n  <div ng-if="!course.showStudentPreviewIframeAndHeader" class="course-content-container">\n    <div class="panel-wrap" ng-class="{\'course-calendar-overflow\': course.isCourseCalendar(), grades: course.isCourseGrades()}">\n      <bb-preview-header class="preview-header-large-screen" course="course.model"\n                         bb-focus="{{ course.model.isUltraPreview() === true }}" keep-trigger-focus="true"></bb-preview-header>\n      <div class="show-for-large-up">\n        <div class="complete-banner-wrapper" ng-if="course.showCompleteBanner()">\n          <span class="complete-banner-text" role="alert">\n            <bb-translate course-org-token-resolver>course.complete</bb-translate>\n          </span>\n        </div>\n      </div>\n      <bb-editable-panel-header\n        ng-if="course.canEditCourseName()"\n        header-text="course.model.displayName"\n        sub-header-text="course.model.displayId"\n        on-header-text-change="course.onHeaderTextChange"\n        edit-button-aria-label="course.getPanelHeaderEditButtonAriaLabel()"\n        action-buttons-props="course.panelHeaderActionButtonsProps"\n        dropdown-menu-props="course.panelHeaderDropdownMenuProps"\n        analytics-id-prefix="\'course\'"\n        settings-button-props="course.settingsButtonProps"\n        ready-to-focus="course.titleIsReadyToFocus"\n        show-menu-toggle-button="!course.studentPreviewStatus.previewing"\n        skip-link-class-name="\'course-skip-link\'"\n        skip-link-focus-next="\'.js-course-outline-tool\'"\n        skip-link-target="\'.js-course-skip-link-target\'"\n        class="bb-editable-panel-header"\n      ></bb-editable-panel-header>\n      <bb-readonly-panel-header\n        ng-if="!course.canEditCourseName()"\n        header-text="course.model.displayName"\n        sub-header-text="course.model.displayId"\n        analytics-id-prefix="\'course\'"\n        ready-to-focus="course.titleIsReadyToFocus"\n        show-menu-toggle-button="!course.studentPreviewStatus.previewing"\n        skip-link-class-name="\'course-skip-link\'"\n        skip-link-focus-next="\'.js-course-outline-tool\'"\n        skip-link-target="\'.js-course-skip-link-target\'"\n        class="bb-readonly-panel-header"\n        settings-button-props="course.settingsButtonProps"\n      ></bb-readonly-panel-header>\n\n      <div class="panel-content">\n        <bb-course-navigation navigation-list-items="course.navigationListItems"\n          show-student-preview-button="!course.studentPreviewStatus.previewing && !course.model.isComplete() && course.canEnableStudentPreview"\n          student-preview-onclick="course.startStudentPreview"\n          class="bb-course-navigation"></bb-course-navigation>\n        <bb-preview-header class="preview-header-medium-screen" course="course.model"></bb-preview-header>\n        <div class="hide-for-large-up">\n          <div class="complete-banner-wrapper" ng-if="course.showCompleteBanner()">\n            <span class="complete-banner-text" role="alert">\n              <bb-translate>course.complete</bb-translate>\n            </span>\n          </div>\n        </div>\n        <div ui-view="course@" class="course-tool-content">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div ng-if="course.showStudentPreviewIframeAndHeader" class="student-preview-container">\n    <iframe id="preview-iframe" frameborder="0" ng-src="{{course.previewUrl}}" ng-onload="attachMobileAppConfig()"></iframe>\n  </div>\n  <bb-conversion-status-bar ng-show="course.isCourseOutline()" class="course-conversion-bar">\n  </bb-conversion-status-bar>\n</div>\n'},Vxkz:function(e,t,n){var o=n("ziER"),i=n("5JeM"),r=new o({id:"icon-medium-search",use:"icon-medium-search-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-search"><g clip-path="url(#icon-medium-search_clip0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="9" /><path d="M17 17l6 6" /></g><defs><clipPath id="icon-medium-search_clip0"><path d="M0 0h24v24H0z" /></clipPath></defs></symbol>'});i.add(r);e.exports=r},dcnw:function(e,t,n){var o=n("ziER"),i=n("5JeM"),r=new o({id:"icon-medium-grade",use:"icon-medium-grade-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-grade"><path d="M21 11V1H3v22h8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.5 12l1.2348 3.8004h3.996l-3.2328 2.3488 1.2348 3.8004L17.5 19.6008l-3.2328 2.3488 1.2348-3.8004-3.2328-2.3488h3.996L17.5 12zM7 5h8M7 9h10M7 13h3M7 17h2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});i.add(r);e.exports=r},lGua:function(e,t,n){var o=n("ziER"),i=n("5JeM"),r=new o({id:"icon-small-settings",use:"icon-small-settings-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-settings"><path d="M7.5977 1.5453c.1998-.2709.6048-.2709.8046 0l.9644 1.307a.5.5 0 00.5534.1798l1.5484-.4906c.3209-.1016.6485.1364.651.473l.0119 1.6242a.5001.5001 0 00.342.4707l1.5411.5133c.3193.1064.4445.4916.2486.7653l-.945 1.321a.5002.5002 0 000 .582l.945 1.321c.1959.2737.0707.6589-.2486.7653l-1.5411.5133a.5.5 0 00-.342.4706l-.0119 1.6243c-.0025.3366-.3301.5746-.651.473L9.92 12.9679a.5.5 0 00-.5533.1798l-.9644 1.307c-.1998.2709-.6048.2709-.8046 0l-.9644-1.307a.5.5 0 00-.5534-.1798l-1.5484.4906c-.3209.1016-.6485-.1364-.651-.473l-.012-1.6243a.4999.4999 0 00-.342-.4706l-1.541-.5133c-.3193-.1064-.4445-.4916-.2486-.7653l.945-1.321a.5.5 0 000-.582l-.945-1.321c-.1959-.2737-.0707-.6589.2486-.7653l1.541-.5133a.5.5 0 00.342-.4707l.012-1.6242c.0025-.3366.3301-.5746.651-.473l1.5484.4906a.5.5 0 00.5534-.1798l.9644-1.307z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 8c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});i.add(r);e.exports=r},"ogn+":function(e,t,n){"use strict";n.r(t);n("q1bP"),n("67oV"),n("l+9M"),n("GkCm"),n("lGua"),n("vgq2"),n("SHbF"),n("D1Wg"),n("LtE5"),n("dcnw"),n("xDBi"),n("ptBS"),n("Vxkz");var o=n("Llzl"),i=n("wSk3"),r=n("Fvsw"),s=n("4lp/"),a=n("zu5+"),c=n("r4Oz"),l=n("Pz5j"),d=n("pjml"),u=n("CPqS"),p=n("IVCC"),v=n("0Fb7"),m=n("3FFP"),h=n("BjFu"),b=n("1zDl"),w=n("+brj"),g=n("zEHu"),f=n("ZzYr"),k=n("eQBN"),y=n("ERkP"),x=n.n(y),P=n("1ZbL"),E=n("AuQm"),C=n("tN4z"),I=n("0JpG");const M="ultra.components.directives.react-toolkit.editable-panel-header",z={Class:e=>{const{actionButtonsProps:t,dropdownMenuProps:n,...o}=e;return y.createElement(E.l,{...o},y.createElement(y.Fragment,null,t&&t.map((e=>y.createElement(C.AnalyticsIconButton,{...e,key:e.analyticsId},e.icon))),n?y.createElement(E.P,{...n}):null))},bindingNames:["headerText","onHeaderTextChange","subHeaderText","editButtonAriaLabel","actionButtonsProps","dropdownMenuProps","analyticsIdPrefix","readyToFocus","showMenuToggleButton","skipLinkClassName","skipLinkFocusNext","skipLinkTarget","settingsButtonProps"],renderLocalized:!0,withProvider:!0};o.module(M,[I.moduleName]).component("bbEditablePanelHeader",Object(P.a)(z));var j=n("qGpL"),L=n("zYa8"),B=n("4tAP");const S="ultra.components.directives.bbUiIcon.medium.LeaveSession";Object(L.a)(B.a,S,"bbUiIconMediumLeaveSession");const N="ultra.components.directives.course.courseNavigation",A={Class:n("/5AG").p,bindingNames:["navigationListItems","showStudentPreviewButton","studentPreviewOnclick"],renderLocalized:!0,withProvider:!0};o.module(N,[I.moduleName]).component("bbCourseNavigation",Object(P.a)(A));var H=n("uDfI"),O=n("VQ4P"),T=n("HuI8"),D=n("GuFu"),R=n("IbyE"),$=n("Agfx"),F=n("THXI");const J=Object($.makeStyles)((e=>Object($.createStyles)({paper:{width:"320px",height:"auto",border:"transparent"},actions:{background:"transparent",borderTop:"transparent",paddingTop:"0px"},title:{"& h1":{fontSize:e.typography.h2.fontSize,color:e.palette.common.white}},buttonDiscard:{color:e.palette.common.white,"&:hover":{background:F.d.redHover},background:"transparent",border:"transparent"},buttonSave:{color:e.palette.common.white,"&:hover":{background:e.palette.background.b10},background:"transparent",border:"transparent"}}))),U="ultra.features.course.student-preview.exit-student-preview",V={Class:e=>{const{courseId:t,isInStudentPreview:n,isExitModalOpen:o,onOpen:i,onCancel:r,onContinue:s}=e,a=Object(H.d)(),c=Object(O.a)(),{isRtl:l}=Object(T.a)(),d=J(e),[u,p]=x.a.useState(null),[v,m]=x.a.useState(!1),[h,b]=x.a.useState(o),w=x.a.useRef(null),g=x.a.useRef(null),f=()=>{b(!1),p(null),r()},k=e=>()=>{m(!0),s(e),f(),a(R.X.studentPreview.exitStudentPreview(t))},P=Object(D.i)("studentPreview.course","studentPreview.organization"),E=Object(D.i)("studentPreview.modal.content.course","studentPreview.modal.content.organization");return Object(y.useEffect)((()=>{n&&m(!1)}),[n]),Object(y.useEffect)((()=>()=>{a(R.X.studentPreview.exitStudentPreview(t))}),[a,t]),Object(y.useEffect)((()=>{b(o)}),[o]),x.a.createElement(x.a.Fragment,null,x.a.createElement(C.AnalyticsIconButton,{disabled:v,className:"preview-exit",name:"student-preview-header-button",id:"student-preview-header-button",onClick:e=>{var t,n;b(!0),p((null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.parentElement)||void 0===n?void 0:n.parentElement)||null),i()},analyticsId:"course.studentPreview.modalExitStudentPreview.button","aria-haspopup":"dialog","aria-hidden":h,"aria-controls":"exit-student-preview-bbmodal","aria-label":c(P("studentPreview.course.tooltip"))},c("studentPreview.button.content.label")),x.a.createElement(C.AnalyticsJssThemeProvider,{theme:"dark",cssReset:"none",isRtl:l()},x.a.createElement(C.AnalyticsPopover,{anchorEl:u,open:h,onClose:f,marginThreshold:0,anchorOrigin:{vertical:"bottom",horizontal:l()?"left":"right"},transformOrigin:{vertical:"top",horizontal:l()?"left":"right"},PaperProps:{className:d.paper},"aria-labelledby":"exit-student-preview-dialog-title",id:"exit-student-preview-bbmodal",role:h?"dialog":void 0,analyticsId:"studentPreview.modal.title",onKeyDownCapture:e=>{var t,n,o,i;"Tab"===e.key&&e.shiftKey&&"exit-student-preview-modal-save-button"!==(null===(t=e.target)||void 0===t?void 0:t.id)?(e.preventDefault(),null===(n=g.current)||void 0===n||n.focus()):"Tab"===e.key&&"exit-student-preview-modal-save-button"===(null===(o=e.target)||void 0===o?void 0:o.id)&&(e.preventDefault(),null===(i=w.current)||void 0===i||i.focus())}},x.a.createElement(C.AnalyticsDialogTitle,{onClose:f,id:"exit-student-preview-dialog-title",analyticsId:"studentPreview.modal.title",hideCloseButton:!0,className:d.title},c("studentPreview.modal.title",{previewUser:c(P("studentPreview.course.previewUser"))})),x.a.createElement(C.AnalyticsDialogContent,{analyticsId:"studentPreview.modal.dialog.content",id:"exit-student-preview-dialog-description"},x.a.createElement(C.AnalyticsTypography,{variant:"body1",gutterBottom:!0},c(E("studentPreview.modal.content.course.description")))),x.a.createElement(C.AnalyticsDialogActions,{analyticsId:"studentPreview.modal.dialog.actions",className:d.actions},x.a.createElement(C.AnalyticsDefaultButton,{ref:w,onClick:k(!0),id:"exit-student-preview-modal-discard-button",analyticsId:"studentPreview.modal.buttons.discard","aria-label":c("studentPreview.modal.buttons.discard"),className:d.buttonDiscard},c("studentPreview.modal.buttons.discard")),x.a.createElement(C.AnalyticsPrimaryButton,{ref:g,onClick:k(!1),id:"exit-student-preview-modal-save-button",analyticsId:"studentPreview.modal.buttons.save","aria-label":c("studentPreview.modal.buttons.save"),className:d.buttonSave},c("studentPreview.modal.buttons.save"))))))},renderLocalized:!0,withProvider:!0,bindingNames:["courseId","isInStudentPreview","isExitModalOpen","onOpen","onCancel","onContinue"]};o.module(U,[I.moduleName]).component("bbExitStudentPreview",Object(P.a)(V));var G=n("VbY5"),W=n("3OhA");n.d(t,"moduleName",(function(){return q})),n.d(t,"controllerName",(function(){return Q})),n.d(t,"templateProvider",(function(){return Y})),n.d(t,"courseTemplate",(function(){return G})),n.d(t,"classicCourseTemplate",(function(){return W}));const q="ultra.course",Q=s.c,Y=["currentCourse",e=>e.isUltra()?G:W];o.module(q,["dibari.angular-ellipsis",i.a,r.a,c.a,a.a,l.a,d.N,u.a,m.b,h.b,v.a,p.a,b.a,b.a,w.b,g.a,f.a,M,j.a,N,S,U,k.b]).controller(s.c,s.a)},qGpL:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("Llzl"),i=n("1ZbL"),r=n("AuQm"),s=n("0JpG");const a="ultra.components.directives.react-toolkit.readonly-panel-header",c={Class:r.R,bindingNames:["headerText","subHeaderText","analyticsIdPrefix","readyToFocus","showMenuToggleButton","skipLinkClassName","skipLinkFocusNext","skipLinkTarget","settingsButtonProps"],renderLocalized:!0,withProvider:!0};o.module(a,[s.moduleName]).component("bbReadonlyPanelHeader",Object(i.a)(c))},r4Oz:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var o=n("Llzl");const i="ultra.directives.accessibility.iframeEventRepeater";class r{constructor(){this.restrict="A",this.link=(t,n,o)=>{if("IFRAME"!==n[0].tagName)throw new Error('Directive "bb-iframe-event-repeater" is only available on <iframe>');const i=o.bbIframeEventRepeater.split(/\s*,\s*/);n.on("load",(t=>{const o=e(t.target);if(o.attr("src")){const t=o[0].contentWindow;i.forEach((function(o){t.addEventListener(o,(function(t){n.trigger(e.Event(t.type,t))}))}))}}))}}}o.module(i,[]).directive("bbIframeEventRepeater",["$injector",e=>e.instantiate(r)])}).call(this,n("71td"))},xDBi:function(e,t,n){var o=n("ziER"),i=n("5JeM"),r=new o({id:"icon-medium-grades",use:"icon-medium-grades-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-grades"><path d="M21 11V1H3v22h11M7 5h8M7 9h10M7 13h9M7 17h3M18 21v2l2-1 3-6-2-1-3 6z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M19 21.2361l2.4472-4.8945.2112.1056-2.4038 4.8074L19 21.382v-.1459z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});i.add(r);e.exports=r},zEHu:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("Llzl"),i=n("jhBu");const r="ultra.components.directives.courseEntitlement";class s{constructor(e,t){this.$entitlementService=e,this.ngIfDirective=t,this.scope={bbCourseEntitlement:"@",courseId:"@",entitlementAction:"@",showContents:"@"},this.restrict=this.ngIfDirective[0].restrict,this.priority=this.ngIfDirective[0].priority,this.transclude=this.ngIfDirective[0].transclude,this.terminal=this.ngIfDirective[0].terminal,this.link=(e,t,n,o,i)=>{n.ngIf="::showContents";this.ngIfDirective[0].compile(t,n,void 0)(e,t,n,o,i);let r,s=!0;if(e.entitlementAction&&"hide"===e.entitlementAction.toLowerCase()&&(s=!1),!e.bbCourseEntitlement)throw e.showContents=!1,new Error("No entitlementUid has been provided");r=e.bbCourseEntitlement;const a=e.$parent.$watch(e.courseId,(t=>{t&&(this.$entitlementService.hasCourseEntitlement(r,t).then((t=>{e.showContents=s===t}),(t=>{e.showContents=!1})),a())}))}}}s.$inject=[i.b,"ngIfDirective","$parse"],o.module(r,[i.a]).directive("bbCourseEntitlement",["$injector",e=>e.instantiate(s)])},"zu5+":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var o=n("Llzl"),i=n("0+Qs"),r=n("yC9S");const s="ultra.directives.iframeMaxHeight";class a{constructor(t,n){this.$window=t,this.interval=n,this.restrict="A",this.scope={hideBodyScroll:"=?",hasPanelHeader:"=?",hasContentNavigator:"=?"},this.link=(t,n)=>{const i=o.element(this.$window),s=this.$window;let a,c,l;n.load((()=>{try{n.contents().find("body").css("padding-top","0"),t.hideBodyScroll&&(o.element("body").css("overflow","hidden"),o.element("body").scrollTop(0))}catch(e){}a=this.interval((()=>{u(d())}),t,500,0,!1)})),u(d());function d(){const e=s.innerHeight,t=i.height();return e&&e>t?e:t}function u(o){l=o,c||(c=n.offset().top);let i=o-c;if(t.hasPanelHeader){let e=0;const t=n.closest(".panel-content");if(t.length>0){const n=t.find(".panel-header");n.length>0&&(e=n.height())}i-=e}if(t.hasContentNavigator){const t=e(".content-navigator-container");t.length>0&&(i-=t.height())}n.css("height",i+"px");n.parent().css("height",i+"px")}r.b.OnWindow("resize",(()=>{u(d())}),t),t.$on("$destroy",(()=>{t.hideBodyScroll&&o.element("body").css("overflow","")}))}}}a.$inject=["$window",i.b],o.module(s,[i.a]).directive("bbIframeMaxHeight",["$injector",e=>e.instantiate(a)])}).call(this,n("71td"))}}]);