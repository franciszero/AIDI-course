(window.webpackJsonp=window.webpackJsonp||[]).push([[56,752],{BjFu:function(e,t,s){"use strict";s.d(t,"b",(function(){return g})),s.d(t,"c",(function(){return T})),s.d(t,"a",(function(){return M}));var r=s("D57K"),i=s("nsO7"),n=s("Llzl"),o=s("yC9S"),m=s("Fvsw"),a=s("go4a"),l=s("pjml"),d=s("zdqs"),u=s("SoDU"),c=s("fYJU"),h=s("VdDF"),p=s("aHpC"),b=s("zGdY"),f=s("KiLF");const g="ultra.service.termMembership",T="termMembership";function M(e,t=new Date){let s=e.startDate,r=e.endDate;return b.x.UseTerm===e.durationType&&e.term&&(s=e.term.startDate,r=e.term.endDate),h.a.isWithinDateRange(t,{start:s,end:r})}let w=class{constructor(e,t,s,r,i,n,m,a,l){this.$q=e,this.context=s,this.CourseModel=r,this.CourseMembershipModel=i,this.TermModel=n,this.UserModel=m,this.ExternalCourseModel=a,this.contextUser=l,o.b.OnRootScope(t,"courseUltraStatusChanged",((e,t,s)=>{this.updateCourseUltraStatus(t,s)}))}clear(){this.termsAndMemberships=void 0,this.loadPromise=void 0}getTermsAndMemberships(){return this.loadPromise?this.loadPromise:this.reloadTermsAndMemberships()}filterMemberships(e,t,s,r){return e&&Array.isArray(e)?e.filter((e=>(!e.course.isOrganization===t||!!e.course.isOrganization===s)&&(!r||r(e)))):[]}getCourseMembershipsFromArray(e,t){return this.filterMemberships(e,!0,!1,t)}getOrganizationMembershipsFromArray(e,t){return this.filterMemberships(e,!1,!0,t)}parseMembershipFromExternalCourse(e){const t=this.CourseMembershipModel.$new();return t.course=this.CourseModel.$new(),t.course.id=e.id,t.course.name=e.title,t.course.description=e.description,t.course.displayName=e.title,t.course.startDate=e.startDate,t.course.endDate=e.endDate,t.course.isAvailable=!0,t.course.durationType=b.x.DateRange,t.userId=e.userId,t.isAvailable=!0,t.userHasHidden=e.isHidden,t.courseCardColorIndex=parseInt((e.id||"0").replace(/_1$/,"").replace(/[^\d]/g,""),10),t.course.ui={courseColorClass:a.a(t),isExternal:!0,description:e.description,externalUrl:e.url},t}parseExternalCourseFromMembership(e){const t=this.ExternalCourseModel.$new(e.course.id);return t.id=e.course.id,t.title=e.course.name,t.startDate=e.course.startDate,t.endDate=e.course.endDate,t.userId=e.userId,t.description=e.course.ui.description,t.url=e.course.ui.externalUrl,t.isHidden=e.userHasHidden,t}reloadTermsAndMemberships(){const e=this.$q.defer();this.loadPromise=e.promise,this.termsAndMemberships={terms:[],termsByTermId:{},memberships:[],membershipsByTermId:{}};const t=this.context.getServerTime();return this.$q.all([this.getInternalMembership(),this.getExternalCoursesMembership(),this.updateTermsAndMemberships()]).then((([s,r])=>{this.termsAndMemberships.membershipsByTermId=Object.create(null),this.termsAndMemberships.memberships.splice(0,this.termsAndMemberships.memberships.length),(s=s.filter(((e,t,s)=>s.findIndex((t=>e.$pk===t.$pk))===t))).forEach((e=>{this.termsAndMemberships.memberships.push(e)})),r.forEach((e=>{this.termsAndMemberships.memberships.push(e)})),this.associateTermsWithCourses();const n=new u.a(this.TermModel,this.termsAndMemberships.terms);let o=new d.a(n).map(this.termsAndMemberships.memberships,t);o=this.applyStudentAvailabilityRules(o),o.forEach((e=>{const t=t=>{let s=this.termsAndMemberships.membershipsByTermId[t.id];s||(s=this.termsAndMemberships.membershipsByTermId[t.id]={memberships:[]}),s.memberships.push(e.membership)};t(e.term);const s=e.membership.course.term;!s||e.term!==n.currentTerm&&e.term!==n.upcomingTerm||t(s),this.buildTermRelationships(e)})),Object.keys(this.termsAndMemberships.membershipsByTermId).forEach((e=>{const t=this.termsAndMemberships.membershipsByTermId[e];t.memberships=i.sortBy(t.memberships,(e=>e.course.name))})),e.resolve(this.termsAndMemberships)})),this.loadPromise}getInternalMembership(){return this.contextUser.getMemberships().then((e=>(e.forEach((e=>{e.course&&(e.course.term&&(e.course.term.id=e.course.term.$pk),e.course.ui={courseColorClass:a.a(e)})})),this.getActiveMemberships(e))))}getActiveMemberships(e){return e.filter((e=>e.course&&e.isAvailable))}getExternalCoursesMembership(){return this.ExternalCourseModel.$search({limit:1e4}).$asPromise().then((e=>e.map((e=>this.parseMembershipFromExternalCourse(e)))))}updateTermsAndMemberships(){return this.TermModel.$search().$asPromise().then((e=>{this.termsAndMemberships.terms=i.orderBy(e,["startDate","durationType"],["asc","desc"]);const t=u.a.decorateTerm(new this.TermModel,l.Gb.ConstantTermId.CurrentTerm),s=u.a.decorateTerm(new this.TermModel,l.Gb.ConstantTermId.UpcomingTerm);this.termsAndMemberships.terms.push(t,s)}))}associateTermsWithCourses(){this.termsAndMemberships.memberships.forEach((e=>{e.course.term&&(e.course.term=this.termsAndMemberships.terms.find((t=>t.id===e.course.term.id)))}))}buildTermRelationships(e){const t=this.termsAndMemberships.termsByTermId[e.term.id];if(e.membership.course.term){if(e.term.id!==e.membership.course.term.id){if(!t)return void(this.termsAndMemberships.termsByTermId[e.term.id]=[e.membership.course.term]);t.indexOf(e.membership.course.term)<0&&t.push(e.membership.course.term)}}else;this.termsAndMemberships.termsByTermId[e.term.id]=i.orderBy(t,["startDate","name"],["desc","asc"])}applyStudentAvailabilityRules(e){return e.filter((e=>(e.membership.isStudentOrGuestMembership()&&e.membership.course.isUndecided()&&(e.membership.course.isAvailable=!1),!0)))}getCourseMembership(e){const t=this.findCourseMembership(e,this.termsAndMemberships.memberships);if(-1!==t)return this.termsAndMemberships.memberships[t]}findCourseMembership(e,t){return t.findIndex((t=>t.course.id===e))}updateCourseUltraStatus(e,t){let s=this.findCourseMembership(e,this.termsAndMemberships.memberships);-1!==s&&(this.termsAndMemberships.memberships[s].course.ultraStatus=t),Object.keys(this.termsAndMemberships.membershipsByTermId).forEach((r=>{s=this.findCourseMembership(e,this.termsAndMemberships.membershipsByTermId[r].memberships),-1!==s&&(this.termsAndMemberships.membershipsByTermId[r].memberships[s].course.ultraStatus=t)}))}filterAssociatedWithTermCourseMembershipsByTerm(e,t){return this.filterAssociatedWithTermCourseMemberships(e).filter((e=>e.course.term.id===t.id))}filterAssociatedWithTermCourseMemberships(e){return e.filter((e=>e.course.term&&!f.a.Continuous.isEqualTo(e.course.term.durationType)))}filterAssortedDatesCourseMemberships(e){return e.filter((e=>null==e.course.term||e.course.term&&f.a.Continuous.isEqualTo(e.course.term.durationType)))}};w=Object(r.a)([Object(r.c)(0,Object(p.b)("$q")),Object(r.c)(1,Object(p.b)("$rootScope")),Object(r.c)(2,Object(p.b)(m.b)),Object(r.c)(3,Object(p.b)(l.m.serviceName)),Object(r.c)(4,Object(p.b)(l.t.serviceName)),Object(r.c)(5,Object(p.b)(l.Gb.serviceName)),Object(r.c)(6,Object(p.b)(l.Jb.serviceName)),Object(r.c)(7,Object(p.b)(l.z.serviceName)),Object(r.c)(8,Object(p.b)(c.b))],w);n.module(g,[m.a,l.N]).service(T,w)},GkCm:function(e,t,s){var r=s("ziER"),i=s("5JeM"),n=new r({id:"icon-small-main-menu",use:"icon-small-main-menu-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-main-menu"><path d="M1 3h14M15 8H1M1 13h14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});i.add(n);e.exports=n},SHbF:function(e,t,s){var r=s("ziER"),i=s("5JeM"),n=new r({id:"icon-medium-attention",use:"icon-medium-attention-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-attention"><circle cx="12" cy="12" r="11" stroke-width="2" /><path d="M12.75 18.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" /><path d="M12 15l-.5-10h1L12 15z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});i.add(n);e.exports=n},SY8P:function(e,t,s){var r=s("Llzl");r.module("dibari.angular-ellipsis",[]).directive("ellipsis",["$timeout","$window","$sce",function(e,t,s){var i=function(t){var s=null,r=[];this.remove=function(t){-1!==r.indexOf(t)&&(r.splice(r.indexOf(t),1),0===r.length&&(e.cancel(s),s=null))},this.add=function(i){-1===r.indexOf(i)&&r.push(i),s||(s=e((function(){var e=r.slice();s=null,r.length=0,e.forEach((function(e){e()}))}),t))}},n=new i(0),o=new i(75);return{restrict:"A",scope:{ngShow:"=",ngBind:"=",ngBindHtml:"=",ellipsisAppend:"@",ellipsisAppendClick:"&",ellipsisSymbol:"@",ellipsisSeparator:"@",useParent:"@",ellipsisSeparatorReg:"=",ellipsisFallbackFontSize:"@"},compile:function(e,i,m){return function(e,i,m){function a(){var t=e.ngBind||e.ngBindHtml,n=!1;if(s.isEnabled()&&r.isObject(t)&&s.getTrustedHtml(t)&&(n=!0,t=s.getTrustedHtml(t)),t){var o=!e.ngBind&&!!e.ngBindHtml,a=0,d=void 0!==m.ellipsisSymbol?m.ellipsisSymbol:"&hellip;",u=void 0!==e.ellipsisSeparator?m.ellipsisSeparator:" ",c=void 0!==e.ellipsisSeparatorReg&&e.ellipsisSeparatorReg,h=void 0!==e.ellipsisAppend&&""!==e.ellipsisAppend?d+"<span class='angular-ellipsis-append'>"+e.ellipsisAppend+"</span>":d,p=c?t.match(c):t.split(u);if(m.isTruncated=!1,o?i.html(t):i.text(t),void 0!==m.ellipsisFallbackFontSize&&l(i)&&i.css("font-size",m.ellipsisFallbackFontSize),l(i,e.useParent)){var b=p.length,f=e.useParent?function(e){var t=0;return r.forEach(e.parent().children(),(function(s){s!=e[0]&&(t+=s.clientHeight)})),e.parent()[0].clientHeight-t}(i):i[0].clientHeight;for(o?i.html(t+h):i.text(t).html(i.html()+h),i.attr("data-overflowed","true");a<b;a++){var g=p.pop();if(0===p.length&&(p[0]=g.substring(0,Math.min(g.length,5))),o?i.html(p.join(u)+h):i.text(p.join(u)).html(i.html()+h),(e.useParent?i.parent()[0]:i[0]).scrollHeight<f||!1===l(i,e.useParent)){m.isTruncated=!0;break}}d!=h&&void 0!==e.ellipsisAppendClick&&""!==e.ellipsisAppendClick&&i.find("span.angular-ellipsis-append").bind("click",(function(t){e.$apply((function(){e.ellipsisAppendClick.call(e,{event:t})}))})),!n&&s.isEnabled()&&s.trustAsHtml(t)}else i.attr("data-overflowed","false")}}function l(e,t){return(e=t?e.parent():e)[0].scrollHeight>e[0].clientHeight}function d(){m.lastWindowResizeWidth==window.innerWidth&&m.lastWindowResizeHeight==window.innerHeight||a(),m.lastWindowResizeWidth=window.innerWidth,m.lastWindowResizeHeight=window.innerHeight}m.lastWindowResizeTime=0,m.lastWindowResizeWidth=0,m.lastWindowResizeHeight=0,m.lastWindowTimeoutEvent=null,m.isTruncated=!1,e.$watch("ngShow",(function(){n.add(a)})),e.$watch("ngBind",(function(){n.add(a)})),e.$watch("ngBindHtml",(function(){n.add(a)})),e.$watch("ellipsisAppend",(function(){a()})),e.$watch((function(){return 0!=i[0].offsetWidth&&0!=i[0].offsetHeight}),(function(){o.add(a)}));var u=e.$on("dibari:refresh-ellipsis",(function(){n.add(a)}));function c(){o.add(d)}var h=r.element(t);h.bind("resize",c),e.$on("$destroy",(function(){h.unbind("resize",c),n.remove(a),o.remove(d),u&&(u(),u=null)}))}}}}])},SoDU:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("VdDF"),i=s("pjml");class n{constructor(e,t){this.TermModel=e,this.terms=t,this.currentTerm=this.getTerm(i.Gb.ConstantTermId.CurrentTerm),this.upcomingTerm=this.getTerm(i.Gb.ConstantTermId.UpcomingTerm)}getTerm(e){return this.terms.filter((t=>t.id===e))[0]}static decorateTerm(e,t){return e.id=t,e.ui={type:t},e}createYearTerm(e){const t=e.getFullYear(),s="year-"+t;let r=this.getTerm(s);return r||(r=new this.TermModel,r.id=s,r.ui={type:"year",year:t},r.startDate=new Date(t,0),this.addTerm(r)),r}addTerm(e){if(e)for(let t=0;t<this.terms.length;t++)if(this.terms[t].startDate>=e.startDate||this.terms[t]===this.currentTerm)return void this.terms.splice(t,0,e)}filterTerm(e){return this.terms.filter((t=>!!i.Gb.TermDuration.DateRange.isEqualTo(t.durationType)&&r.a.isWithinDateRange(e,{start:t.startDate,end:t.endDate})))}}},ptBS:function(e,t,s){var r=s("ziER"),i=s("5JeM"),n=new r({id:"icon-medium-messages",use:"icon-medium-messages-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-messages"><path d="M1 4v16h22V4H1z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M1 4l8.4419 7.6744L12 14l2.5581-2.3256L23 4M23 20c-3.3676-3.5207-5.5754-5.3288-8.4418-8.3256M1 20l8.4419-8.3256" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});i.add(n);e.exports=n},q1bP:function(e,t,s){s("Llzl");s("SY8P"),e.exports="dibari.angular-ellipsis"},vgq2:function(e,t,s){var r=s("ziER"),i=s("5JeM"),n=new r({id:"icon-medium-discussion",use:"icon-medium-discussion-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-discussion"><path d="M8 21.4025a10.4446 10.4446 0 01-1.75-.8072L1 22l1.4318-5.2034C1.5217 15.2417 1 13.4318 1 11.5 1 5.701 5.701 1 11.5 1c4.5718 0 8.4611 2.9218 9.9025 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M9 16c0 3.866 3.134 7 7 7 1.3878 0 2.6812-.3803 3.7692-1.0769L23 23l-1.0769-3.2308C22.6197 18.6812 23 17.3878 23 16c0-3.866-3.134-7-7-7s-7 3.134-7 7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="13" cy="16" r=".5" /><circle cx="16" cy="16" r=".5" /><circle cx="19" cy="16" r=".5" /></symbol>'});i.add(n);e.exports=n},zdqs:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var r=s("nsO7"),i=s("VdDF"),n=s("pjml"),o=s("zGdY");class m{constructor(e){this.termUtil=e,this.membershipTermMapper=new a(this.termUtil)}getMembershipMapper(){return this.membershipTermMapper}map(e,t){return e.map((e=>({membership:e,term:this.membershipTermMapper.adjustTerm(e,t)})))}}class a{constructor(e){this.termUtil=e}adjustTerm(e,t){const s=this.getCourseDateRange(e);return s.start>t?e.course.ui.term=this.termUtil.upcomingTerm:i.a.isWithinDateRange(t,s)?e.course.ui.term=this.termUtil.currentTerm:e.course.term?e.course.ui.term=e.course.term:e.course.ui.term=this.getTermMappingBasedOnCourseDates(e,s,t),e.course.ui.term}getCourseDateRange(e){let t,s;if(o.x.DateRange===e.course.durationType)t=e.course.startDate,s=e.course.endDate;else if(o.x.FixedNumDays===e.course.durationType)t=e.enrollmentDate,s=new Date(e.enrollmentDate.getTime()),s.setDate(s.getDate()+e.course.numDaysOfUse);else if(o.x.UseTerm===e.course.durationType){const r=e.course.term?this.termUtil.getTerm(e.course.term.id):null;r&&(n.Gb.TermDuration.DateRange.isEqualTo(r.durationType)?(t=r.startDate,s=r.endDate):n.Gb.TermDuration.FixedNumDays.isEqualTo(r.durationType)&&(t=e.enrollmentDate,s=new Date(e.enrollmentDate.getTime()),s.setDate(s.getDate()+r.daysOfUse)))}return{end:s,start:t}}getTermMappingBasedOnCourseDates(e,t,s){let i=t.start||e.course.term&&e.course.term.startDate;if(!i){if(!(t.end&&s>t.end))return this.termUtil.currentTerm;i=t.end}const n=this.termUtil.filterTerm(i);if(0===n.length)return this.termUtil.createYearTerm(i);if(1===n.length)return n[0];if(n.length>1){const e=r.sortBy(n,["startDate","id"]);return e[e.length-1]}}}}}]);