(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{BjFu:function(e,r,s){"use strict";s.d(r,"b",(function(){return M})),s.d(r,"c",(function(){return g})),s.d(r,"a",(function(){return C}));var t=s("D57K"),i=s("nsO7"),n=s("Llzl"),m=s("yC9S"),o=s("Fvsw"),a=s("go4a"),u=s("pjml"),h=s("zdqs"),c=s("SoDU"),d=s("fYJU"),l=s("VdDF"),p=s("aHpC"),b=s("zGdY"),T=s("KiLF");const M="ultra.service.termMembership",g="termMembership";function C(e,r=new Date){let s=e.startDate,t=e.endDate;return b.x.UseTerm===e.durationType&&e.term&&(s=e.term.startDate,t=e.term.endDate),l.a.isWithinDateRange(r,{start:s,end:t})}let f=class{constructor(e,r,s,t,i,n,o,a,u){this.$q=e,this.context=s,this.CourseModel=t,this.CourseMembershipModel=i,this.TermModel=n,this.UserModel=o,this.ExternalCourseModel=a,this.contextUser=u,m.b.OnRootScope(r,"courseUltraStatusChanged",((e,r,s)=>{this.updateCourseUltraStatus(r,s)}))}clear(){this.termsAndMemberships=void 0,this.loadPromise=void 0}getTermsAndMemberships(){return this.loadPromise?this.loadPromise:this.reloadTermsAndMemberships()}filterMemberships(e,r,s,t){return e&&Array.isArray(e)?e.filter((e=>(!e.course.isOrganization===r||!!e.course.isOrganization===s)&&(!t||t(e)))):[]}getCourseMembershipsFromArray(e,r){return this.filterMemberships(e,!0,!1,r)}getOrganizationMembershipsFromArray(e,r){return this.filterMemberships(e,!1,!0,r)}parseMembershipFromExternalCourse(e){const r=this.CourseMembershipModel.$new();return r.course=this.CourseModel.$new(),r.course.id=e.id,r.course.name=e.title,r.course.description=e.description,r.course.displayName=e.title,r.course.startDate=e.startDate,r.course.endDate=e.endDate,r.course.isAvailable=!0,r.course.durationType=b.x.DateRange,r.userId=e.userId,r.isAvailable=!0,r.userHasHidden=e.isHidden,r.courseCardColorIndex=parseInt((e.id||"0").replace(/_1$/,"").replace(/[^\d]/g,""),10),r.course.ui={courseColorClass:a.a(r),isExternal:!0,description:e.description,externalUrl:e.url},r}parseExternalCourseFromMembership(e){const r=this.ExternalCourseModel.$new(e.course.id);return r.id=e.course.id,r.title=e.course.name,r.startDate=e.course.startDate,r.endDate=e.course.endDate,r.userId=e.userId,r.description=e.course.ui.description,r.url=e.course.ui.externalUrl,r.isHidden=e.userHasHidden,r}reloadTermsAndMemberships(){const e=this.$q.defer();this.loadPromise=e.promise,this.termsAndMemberships={terms:[],termsByTermId:{},memberships:[],membershipsByTermId:{}};const r=this.context.getServerTime();return this.$q.all([this.getInternalMembership(),this.getExternalCoursesMembership(),this.updateTermsAndMemberships()]).then((([s,t])=>{this.termsAndMemberships.membershipsByTermId=Object.create(null),this.termsAndMemberships.memberships.splice(0,this.termsAndMemberships.memberships.length),(s=s.filter(((e,r,s)=>s.findIndex((r=>e.$pk===r.$pk))===r))).forEach((e=>{this.termsAndMemberships.memberships.push(e)})),t.forEach((e=>{this.termsAndMemberships.memberships.push(e)})),this.associateTermsWithCourses();const n=new c.a(this.TermModel,this.termsAndMemberships.terms);let m=new h.a(n).map(this.termsAndMemberships.memberships,r);m=this.applyStudentAvailabilityRules(m),m.forEach((e=>{const r=r=>{let s=this.termsAndMemberships.membershipsByTermId[r.id];s||(s=this.termsAndMemberships.membershipsByTermId[r.id]={memberships:[]}),s.memberships.push(e.membership)};r(e.term);const s=e.membership.course.term;!s||e.term!==n.currentTerm&&e.term!==n.upcomingTerm||r(s),this.buildTermRelationships(e)})),Object.keys(this.termsAndMemberships.membershipsByTermId).forEach((e=>{const r=this.termsAndMemberships.membershipsByTermId[e];r.memberships=i.sortBy(r.memberships,(e=>e.course.name))})),e.resolve(this.termsAndMemberships)})),this.loadPromise}getInternalMembership(){return this.contextUser.getMemberships().then((e=>(e.forEach((e=>{e.course&&(e.course.term&&(e.course.term.id=e.course.term.$pk),e.course.ui={courseColorClass:a.a(e)})})),this.getActiveMemberships(e))))}getActiveMemberships(e){return e.filter((e=>e.course&&e.isAvailable))}getExternalCoursesMembership(){return this.ExternalCourseModel.$search({limit:1e4}).$asPromise().then((e=>e.map((e=>this.parseMembershipFromExternalCourse(e)))))}updateTermsAndMemberships(){return this.TermModel.$search().$asPromise().then((e=>{this.termsAndMemberships.terms=i.orderBy(e,["startDate","durationType"],["asc","desc"]);const r=c.a.decorateTerm(new this.TermModel,u.Gb.ConstantTermId.CurrentTerm),s=c.a.decorateTerm(new this.TermModel,u.Gb.ConstantTermId.UpcomingTerm);this.termsAndMemberships.terms.push(r,s)}))}associateTermsWithCourses(){this.termsAndMemberships.memberships.forEach((e=>{e.course.term&&(e.course.term=this.termsAndMemberships.terms.find((r=>r.id===e.course.term.id)))}))}buildTermRelationships(e){const r=this.termsAndMemberships.termsByTermId[e.term.id];if(e.membership.course.term){if(e.term.id!==e.membership.course.term.id){if(!r)return void(this.termsAndMemberships.termsByTermId[e.term.id]=[e.membership.course.term]);r.indexOf(e.membership.course.term)<0&&r.push(e.membership.course.term)}}else;this.termsAndMemberships.termsByTermId[e.term.id]=i.orderBy(r,["startDate","name"],["desc","asc"])}applyStudentAvailabilityRules(e){return e.filter((e=>(e.membership.isStudentOrGuestMembership()&&e.membership.course.isUndecided()&&(e.membership.course.isAvailable=!1),!0)))}getCourseMembership(e){const r=this.findCourseMembership(e,this.termsAndMemberships.memberships);if(-1!==r)return this.termsAndMemberships.memberships[r]}findCourseMembership(e,r){return r.findIndex((r=>r.course.id===e))}updateCourseUltraStatus(e,r){let s=this.findCourseMembership(e,this.termsAndMemberships.memberships);-1!==s&&(this.termsAndMemberships.memberships[s].course.ultraStatus=r),Object.keys(this.termsAndMemberships.membershipsByTermId).forEach((t=>{s=this.findCourseMembership(e,this.termsAndMemberships.membershipsByTermId[t].memberships),-1!==s&&(this.termsAndMemberships.membershipsByTermId[t].memberships[s].course.ultraStatus=r)}))}filterAssociatedWithTermCourseMembershipsByTerm(e,r){return this.filterAssociatedWithTermCourseMemberships(e).filter((e=>e.course.term.id===r.id))}filterAssociatedWithTermCourseMemberships(e){return e.filter((e=>e.course.term&&!T.a.Continuous.isEqualTo(e.course.term.durationType)))}filterAssortedDatesCourseMemberships(e){return e.filter((e=>null==e.course.term||e.course.term&&T.a.Continuous.isEqualTo(e.course.term.durationType)))}};f=Object(t.a)([Object(t.c)(0,Object(p.b)("$q")),Object(t.c)(1,Object(p.b)("$rootScope")),Object(t.c)(2,Object(p.b)(o.b)),Object(t.c)(3,Object(p.b)(u.m.serviceName)),Object(t.c)(4,Object(p.b)(u.t.serviceName)),Object(t.c)(5,Object(p.b)(u.Gb.serviceName)),Object(t.c)(6,Object(p.b)(u.Jb.serviceName)),Object(t.c)(7,Object(p.b)(u.z.serviceName)),Object(t.c)(8,Object(p.b)(d.b))],f);n.module(M,[o.a,u.N]).service(g,f)},SoDU:function(e,r,s){"use strict";s.d(r,"a",(function(){return n}));var t=s("VdDF"),i=s("pjml");class n{constructor(e,r){this.TermModel=e,this.terms=r,this.currentTerm=this.getTerm(i.Gb.ConstantTermId.CurrentTerm),this.upcomingTerm=this.getTerm(i.Gb.ConstantTermId.UpcomingTerm)}getTerm(e){return this.terms.filter((r=>r.id===e))[0]}static decorateTerm(e,r){return e.id=r,e.ui={type:r},e}createYearTerm(e){const r=e.getFullYear(),s="year-"+r;let t=this.getTerm(s);return t||(t=new this.TermModel,t.id=s,t.ui={type:"year",year:r},t.startDate=new Date(r,0),this.addTerm(t)),t}addTerm(e){if(e)for(let r=0;r<this.terms.length;r++)if(this.terms[r].startDate>=e.startDate||this.terms[r]===this.currentTerm)return void this.terms.splice(r,0,e)}filterTerm(e){return this.terms.filter((r=>!!i.Gb.TermDuration.DateRange.isEqualTo(r.durationType)&&t.a.isWithinDateRange(e,{start:r.startDate,end:r.endDate})))}}},YXyV:function(e,r,s){"use strict";s.d(r,"a",(function(){return h})),s.d(r,"b",(function(){return c}));var t=s("D57K"),i=s("Llzl"),n=s("aHpC"),m=s("IbyE"),o=s("go4a"),a=s("nmzr"),u=s("TnpK");const h="ultra.service.course-banner",c="courseBanner";let d=class{constructor(e,r,s){this.$q=e,this.$ngRedux=r,this.ultraState=s,this.listeners=new Set,this.subscribeToRedux()}subscribeToRedux(){this.$ngRedux.connect(null,(e=>({updateCourse:(r,s)=>e(m.X.course.updateCourse(r,s)),loadCourse:r=>e(m.X.course.fetchCourse(r)),loadCourseMembership:(r,s)=>e(m.X.courseMembership.loadCourseMembershipByMemberId(r,s,!1))})))(this)}notifyListeners(e){this.listeners.forEach((r=>{try{r(e)}catch(e){console.error(e)}}))}updateCourseBanner(e,r,s,t){const i=m.gc.course.getCourseById(this.$ngRedux.getState(),e),n={...i,id:e,isBannerVisible:s,bannerAltText:t};if(r){const{fileLocation:e,fileName:s}=r;n.banner={fileLocation:e,fileName:s}}return this.$q.when(this.updateCourse(i,n)).then((()=>{this.notifyListeners(e)}))}removeUpdateBannerListener(e){this.listeners.delete(e)}registerUpdateBannerListener(e){return this.listeners.add(e),()=>{this.removeUpdateBannerListener(e)}}getCourse(e){return this.$q.resolve(this.loadCourse(e)).then((()=>m.gc.course.getCourseById(this.$ngRedux.getState(),e)))}getCourseMembership(e,r){return this.$q.resolve(this.loadCourseMembership(e,r)).then((()=>m.gc.courseMembership.getCourseMembershipByMembershipId(this.$ngRedux.getState(),r)))}isBannerVisibleInCourse(e){return this.$q.resolve(this.getCourse(e)).then((e=>e.isBannerVisible))}getCustomBannerThumbnail(e){return this.$q.resolve(this.getCourse(e)).then((e=>{var r,s;return null!==(s=null===(r=e.bannerImageThumbnail)||void 0===r?void 0:r.permanentUrl)&&void 0!==s?s:""}))}getCustomOrDefaultBannerThumbnail(e,r){return this.$q.all({course:this.getCourse(e),membership:this.getCourseMembership(e,r),customBannerThumb:this.getCustomBannerThumbnail(e)}).then((e=>{const{course:r,customBannerThumb:s,membership:t}=e;return""!==s?s:Object(o.c)(t.courseCardColorIndex,r.isOrganization)}))}getCustomBanner(e){return this.$q.resolve(this.getCourse(e)).then((e=>{var r,s;return null!==(s=null===(r=e.banner)||void 0===r?void 0:r.permanentUrl)&&void 0!==s?s:""}))}getCustomOrDefaultBanner(e,r){return this.$q.all({course:this.getCourse(e),membership:r?this.getCourseMembership(e,r):this.$q.resolve(null),customBanner:this.getCustomBanner(e)}).then((e=>{const{course:r,customBanner:s,membership:t}=e;return""!==s?s:Object(o.b)(null==t?void 0:t.courseCardColorIndex,r.isOrganization)}))}getBannerAltText(e){return this.getCourse(e).then((e=>e.bannerAltText))}canAccessEditBannerPeek(e){let r=e.permissions.editBanner||e.permissions.editBannerVisibility;return Object(m.Mb)(e)&&(r=e.permissions.editBanner),!e.isClosed&&r}openEditBannerPeek(e){this.ultraState.goPeekState(a.H.Course.EDIT_BANNER,{id:e})}};d=Object(t.a)([Object(t.c)(0,Object(n.b)("$q")),Object(t.c)(1,Object(n.b)("$ngRedux")),Object(t.c)(2,Object(n.b)(u.d))],d),i.module(h,[u.b]).service(c,d)},zdqs:function(e,r,s){"use strict";s.d(r,"a",(function(){return o}));var t=s("nsO7"),i=s("VdDF"),n=s("pjml"),m=s("zGdY");class o{constructor(e){this.termUtil=e,this.membershipTermMapper=new a(this.termUtil)}getMembershipMapper(){return this.membershipTermMapper}map(e,r){return e.map((e=>({membership:e,term:this.membershipTermMapper.adjustTerm(e,r)})))}}class a{constructor(e){this.termUtil=e}adjustTerm(e,r){const s=this.getCourseDateRange(e);return s.start>r?e.course.ui.term=this.termUtil.upcomingTerm:i.a.isWithinDateRange(r,s)?e.course.ui.term=this.termUtil.currentTerm:e.course.term?e.course.ui.term=e.course.term:e.course.ui.term=this.getTermMappingBasedOnCourseDates(e,s,r),e.course.ui.term}getCourseDateRange(e){let r,s;if(m.x.DateRange===e.course.durationType)r=e.course.startDate,s=e.course.endDate;else if(m.x.FixedNumDays===e.course.durationType)r=e.enrollmentDate,s=new Date(e.enrollmentDate.getTime()),s.setDate(s.getDate()+e.course.numDaysOfUse);else if(m.x.UseTerm===e.course.durationType){const t=e.course.term?this.termUtil.getTerm(e.course.term.id):null;t&&(n.Gb.TermDuration.DateRange.isEqualTo(t.durationType)?(r=t.startDate,s=t.endDate):n.Gb.TermDuration.FixedNumDays.isEqualTo(t.durationType)&&(r=e.enrollmentDate,s=new Date(e.enrollmentDate.getTime()),s.setDate(s.getDate()+t.daysOfUse)))}return{end:s,start:r}}getTermMappingBasedOnCourseDates(e,r,s){let i=r.start||e.course.term&&e.course.term.startDate;if(!i){if(!(r.end&&s>r.end))return this.termUtil.currentTerm;i=r.end}const n=this.termUtil.filterTerm(i);if(0===n.length)return this.termUtil.createYearTerm(i);if(1===n.length)return n[0];if(n.length>1){const e=t.sortBy(n,["startDate","id"]);return e[e.length-1]}}}}}]);