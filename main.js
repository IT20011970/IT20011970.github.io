(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/student-reg/student-reg.component */ "./src/app/views/student-reg/student-reg.component.ts");
/* harmony import */ var _views_student_reg_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/student-reg/student-details/student-details.component */ "./src/app/views/student-reg/student-details/student-details.component.ts");
/* harmony import */ var _views_student_reg_student_registrations_student_registrations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/student-reg/student-registrations/student-registrations.component */ "./src/app/views/student-reg/student-registrations/student-registrations.component.ts");
/* harmony import */ var _views_student_reg_semester_payments_semester_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/student-reg/semester-payments/semester-payments.component */ "./src/app/views/student-reg/semester-payments/semester-payments.component.ts");
/* harmony import */ var _views_student_reg_semester_registration_semester_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/student-reg/semester-registration/semester-registration.component */ "./src/app/views/student-reg/semester-registration/semester-registration.component.ts");
/* harmony import */ var _views_student_reg_student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/student-reg/student-summary/student-summary.component */ "./src/app/views/student-reg/student-summary/student-summary.component.ts");
/* harmony import */ var _views_lecturer_subjects_registrations_lecturer_subjects_registrations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/lecturer-subjects-registrations/lecturer-subjects-registrations.component */ "./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.ts");
/* harmony import */ var _views_lecturer_subjects_registrations_lecturer_details_lecturer_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component */ "./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.ts");
/* harmony import */ var _views_lecturer_subjects_registrations_subjects_details_subjects_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/lecturer-subjects-registrations/subjects-details/subjects-details.component */ "./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.ts");
/* harmony import */ var _views_login_screen_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/login-screen/login/login.component */ "./src/app/views/login-screen/login/login.component.ts");
/* harmony import */ var _views_login_screen_lock_lock_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/login-screen/lock/lock.component */ "./src/app/views/login-screen/lock/lock.component.ts");
/* harmony import */ var _views_login_screen_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/login-screen/email-verify/email-verify.component */ "./src/app/views/login-screen/email-verify/email-verify.component.ts");
/* harmony import */ var _views_login_screen_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/login-screen/password-reset/password-reset.component */ "./src/app/views/login-screen/password-reset/password-reset.component.ts");
/* harmony import */ var _views_login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/login-screen/login-screen.component */ "./src/app/views/login-screen/login-screen.component.ts");
/* harmony import */ var _views_login_screen_login_login_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/login-screen/login/login.guard */ "./src/app/views/login-screen/login/login.guard.ts");
/* harmony import */ var _views_login_screen_login_screen_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/login-screen/login-screen.guard */ "./src/app/views/login-screen/login-screen.guard.ts");
/* harmony import */ var _views_login_screen_lock_lock_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/login-screen/lock/lock.guard */ "./src/app/views/login-screen/lock/lock.guard.ts");
/* harmony import */ var _views_login_screen_password_reset_password_reset_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/login-screen/password-reset/password-reset.guard */ "./src/app/views/login-screen/password-reset/password-reset.guard.ts");
/* harmony import */ var _views_root_root_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/root/root.component */ "./src/app/views/root/root.component.ts");
/* harmony import */ var _views_course_work_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/course-work/subjects/subjects.component */ "./src/app/views/course-work/subjects/subjects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    {
        path: "root", component: _views_root_root_component__WEBPACK_IMPORTED_MODULE_22__["RootComponent"],
        children: [
            { path: "dashboard", component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            {
                path: "main", component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
                children: [
                    {
                        path: "student-reg", component: _views_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_4__["StudentRegComponent"],
                        children: [
                            { path: "student-details", component: _views_student_reg_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_5__["StudentDetailsComponent"] },
                            { path: "student-registrations", component: _views_student_reg_student_registrations_student_registrations_component__WEBPACK_IMPORTED_MODULE_6__["StudentRegistrationsComponent"] },
                            { path: "semester-registrations", component: _views_student_reg_semester_registration_semester_registration_component__WEBPACK_IMPORTED_MODULE_8__["SemesterRegistrationComponent"], canActivate: [_views_login_screen_login_login_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuard"]] },
                            { path: "semester-payments", component: _views_student_reg_semester_payments_semester_payments_component__WEBPACK_IMPORTED_MODULE_7__["SemesterPaymentsComponent"] },
                            { path: "student-payments", component: _views_student_reg_semester_payments_semester_payments_component__WEBPACK_IMPORTED_MODULE_7__["SemesterPaymentsComponent"] },
                            { path: "student-summary", component: _views_student_reg_student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_9__["StudentSummaryComponent"] },
                        ]
                    },
                    {
                        path: "subjects", component: _views_course_work_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_23__["SubjectsComponent"], canActivate: [_views_login_screen_login_login_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuard"]]
                    },
                    {
                        path: "lecturers-subjects", component: _views_lecturer_subjects_registrations_lecturer_subjects_registrations_component__WEBPACK_IMPORTED_MODULE_10__["LecturerSubjectsRegistrationsComponent"], canActivate: [_views_login_screen_login_login_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuard"]],
                        children: [
                            { path: "lecturer-details", component: _views_lecturer_subjects_registrations_lecturer_details_lecturer_details_component__WEBPACK_IMPORTED_MODULE_11__["LecturerDetailsComponent"] },
                            { path: "subject-details", component: _views_lecturer_subjects_registrations_subjects_details_subjects_details_component__WEBPACK_IMPORTED_MODULE_12__["SubjectsDetailsComponent"] },
                        ]
                    },
                ]
            },
            {
                path: "log-screen", component: _views_login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_17__["LoginScreenComponent"],
                children: [
                    { path: "login", component: _views_login_screen_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], canActivate: [_views_login_screen_login_screen_guard__WEBPACK_IMPORTED_MODULE_19__["LoginScreenGuard"]] },
                    { path: "lock", component: _views_login_screen_lock_lock_component__WEBPACK_IMPORTED_MODULE_14__["LockComponent"], canActivate: [_views_login_screen_lock_lock_guard__WEBPACK_IMPORTED_MODULE_20__["LockGuard"]] },
                    { path: "email-verify", component: _views_login_screen_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_15__["EmailVerifyComponent"] },
                    { path: "password-reset", component: _views_login_screen_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_16__["PasswordResetComponent"], canActivate: [_views_login_screen_password_reset_password_reset_guard__WEBPACK_IMPORTED_MODULE_21__["PasswordResetGuard"]] }
                ]
            },
        ]
    },
    { path: "", pathMatch: "full", redirectTo: "/root/dashboard" },
    { path: "root", pathMatch: "full", redirectTo: "/root/dashboard" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_student_reg_student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/student-reg/student-summary/student-summary.component */ "./src/app/views/student-reg/student-summary/student-summary.component.ts");
/* harmony import */ var _views_student_reg_student_settings_student_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/student-reg/student-settings/student-settings.component */ "./src/app/views/student-reg/student-settings/student-settings.component.ts");
/* harmony import */ var _views_student_reg_student_registrations_student_registrations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/student-reg/student-registrations/student-registrations.component */ "./src/app/views/student-reg/student-registrations/student-registrations.component.ts");
/* harmony import */ var _views_student_reg_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/student-reg/student-details/student-details.component */ "./src/app/views/student-reg/student-details/student-details.component.ts");
/* harmony import */ var _views_student_reg_semester_registration_semester_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/student-reg/semester-registration/semester-registration.component */ "./src/app/views/student-reg/semester-registration/semester-registration.component.ts");
/* harmony import */ var _views_student_reg_semester_payments_semester_payments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/student-reg/semester-payments/semester-payments.component */ "./src/app/views/student-reg/semester-payments/semester-payments.component.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _views_login_screen_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/login-screen/password-reset/password-reset.component */ "./src/app/views/login-screen/password-reset/password-reset.component.ts");
/* harmony import */ var _views_login_screen_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login-screen/login/login.component */ "./src/app/views/login-screen/login/login.component.ts");
/* harmony import */ var _views_login_screen_lock_lock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/login-screen/lock/lock.component */ "./src/app/views/login-screen/lock/lock.component.ts");
/* harmony import */ var _views_login_screen_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/login-screen/email-verify/email-verify.component */ "./src/app/views/login-screen/email-verify/email-verify.component.ts");
/* harmony import */ var _views_lecturer_subjects_registrations_lecturer_details_lecturer_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component */ "./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.ts");
/* harmony import */ var _views_lecturer_subjects_registrations_subjects_details_subjects_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/lecturer-subjects-registrations/subjects-details/subjects-details.component */ "./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.ts");
/* harmony import */ var _views_lecturer_subjects_registrations_lecturer_subjects_registrations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/lecturer-subjects-registrations/lecturer-subjects-registrations.component */ "./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.ts");
/* harmony import */ var _views_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/student-reg/student-reg.component */ "./src/app/views/student-reg/student-reg.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_dashboard_events_calendar_events_calendar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/dashboard/events-calendar/events-calendar.component */ "./src/app/views/dashboard/events-calendar/events-calendar.component.ts");
/* harmony import */ var _views_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/chat-room/chat-room.component */ "./src/app/views/chat-room/chat-room.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/login-screen/login-screen.component */ "./src/app/views/login-screen/login-screen.component.ts");
/* harmony import */ var _views_login_screen_login_login_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/login-screen/login/login.guard */ "./src/app/views/login-screen/login/login.guard.ts");
/* harmony import */ var _views_login_screen_login_screen_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/login-screen/login-screen.guard */ "./src/app/views/login-screen/login-screen.guard.ts");
/* harmony import */ var _views_login_screen_password_reset_password_reset_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/login-screen/password-reset/password-reset.guard */ "./src/app/views/login-screen/password-reset/password-reset.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _views_login_screen_lock_lock_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/login-screen/lock/lock.guard */ "./src/app/views/login-screen/lock/lock.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
/* harmony import */ var _services_student_reg_student_details_student_details_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/student-reg/student-details/student-details.service */ "./src/app/services/student-reg/student-details/student-details.service.ts");
/* harmony import */ var _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/student-reg/student-registration/student-registration.service */ "./src/app/services/student-reg/student-registration/student-registration.service.ts");
/* harmony import */ var _services_common_file_file_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/common/file/file.service */ "./src/app/services/common/file/file.service.ts");
/* harmony import */ var _services_common_degree_degree_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/common/degree/degree.service */ "./src/app/services/common/degree/degree.service.ts");
/* harmony import */ var _services_common_faculty_faculty_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/common/faculty/faculty.service */ "./src/app/services/common/faculty/faculty.service.ts");
/* harmony import */ var _services_common_intake_intake_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/common/intake/intake.service */ "./src/app/services/common/intake/intake.service.ts");
/* harmony import */ var _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/common/socket/socket.service */ "./src/app/services/common/socket/socket.service.ts");
/* harmony import */ var _views_root_root_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./views/root/root.component */ "./src/app/views/root/root.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _views_course_work_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./views/course-work/subjects/subjects.component */ "./src/app/views/course-work/subjects/subjects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _views_student_reg_student_summary_student_summary_component__WEBPACK_IMPORTED_MODULE_3__["StudentSummaryComponent"],
                _views_student_reg_student_settings_student_settings_component__WEBPACK_IMPORTED_MODULE_4__["StudentSettingsComponent"],
                _views_student_reg_student_registrations_student_registrations_component__WEBPACK_IMPORTED_MODULE_5__["StudentRegistrationsComponent"],
                _views_student_reg_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsComponent"],
                _views_student_reg_semester_registration_semester_registration_component__WEBPACK_IMPORTED_MODULE_7__["SemesterRegistrationComponent"],
                _views_student_reg_semester_payments_semester_payments_component__WEBPACK_IMPORTED_MODULE_8__["SemesterPaymentsComponent"],
                _views_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _views_login_screen_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_10__["PasswordResetComponent"],
                _views_login_screen_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _views_login_screen_lock_lock_component__WEBPACK_IMPORTED_MODULE_12__["LockComponent"],
                _views_login_screen_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_13__["EmailVerifyComponent"],
                _views_lecturer_subjects_registrations_lecturer_details_lecturer_details_component__WEBPACK_IMPORTED_MODULE_14__["LecturerDetailsComponent"],
                _views_lecturer_subjects_registrations_subjects_details_subjects_details_component__WEBPACK_IMPORTED_MODULE_15__["SubjectsDetailsComponent"],
                _views_lecturer_subjects_registrations_lecturer_subjects_registrations_component__WEBPACK_IMPORTED_MODULE_16__["LecturerSubjectsRegistrationsComponent"],
                _views_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_17__["StudentRegComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _views_dashboard_events_calendar_events_calendar_component__WEBPACK_IMPORTED_MODULE_19__["EventsCalendarComponent"],
                _views_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_20__["ChatRoomComponent"],
                _views_login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_23__["LoginScreenComponent"],
                _views_root_root_component__WEBPACK_IMPORTED_MODULE_39__["RootComponent"],
                _views_course_work_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_42__["SubjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_40__["NgxPaginationModule"]
            ],
            providers: [
                _services_student_reg_student_details_student_details_service__WEBPACK_IMPORTED_MODULE_32__["StudentDetailsService"],
                _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_33__["StudentRegistrationService"],
                _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_31__["LoginService"],
                _services_common_faculty_faculty_service__WEBPACK_IMPORTED_MODULE_36__["FacultyService"],
                _services_common_intake_intake_service__WEBPACK_IMPORTED_MODULE_37__["IntakeService"],
                _services_common_degree_degree_service__WEBPACK_IMPORTED_MODULE_35__["DegreeService"],
                _services_common_file_file_service__WEBPACK_IMPORTED_MODULE_34__["FileService"],
                _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_30__["WizardColorService"],
                _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_38__["SocketService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_41__["CookieService"],
                _views_login_screen_login_login_guard__WEBPACK_IMPORTED_MODULE_24__["LoginGuard"],
                _views_login_screen_login_screen_guard__WEBPACK_IMPORTED_MODULE_25__["LoginScreenGuard"],
                _views_login_screen_lock_lock_guard__WEBPACK_IMPORTED_MODULE_28__["LockGuard"],
                _views_login_screen_password_reset_password_reset_guard__WEBPACK_IMPORTED_MODULE_26__["PasswordResetGuard"],
                _angular_common__WEBPACK_IMPORTED_MODULE_27__["DatePipe"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/login-status.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/login-status.ts ***!
  \*****************************************/
/*! exports provided: LoginStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStatus", function() { return LoginStatus; });
var LoginStatus = /** @class */ (function () {
    function LoginStatus() {
    }
    LoginStatus.getLoginStatus = function () {
        this.accountType = localStorage.getItem('accountType');
        if (this.accountType == "admin") {
            return 1;
        }
        else if (this.accountType == "student") {
            return 2;
        }
        else if (this.accountType == "lecturer") {
            return 3;
        }
        else if (this.accountType == "locked") {
            return 4;
        }
        else {
            return 5;
        }
    };
    return LoginStatus;
}());



/***/ }),

/***/ "./src/app/dtos/degree.ts":
/*!********************************!*\
  !*** ./src/app/dtos/degree.ts ***!
  \********************************/
/*! exports provided: Degree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Degree", function() { return Degree; });
var Degree = /** @class */ (function () {
    function Degree() {
    }
    return Degree;
}());



/***/ }),

/***/ "./src/app/dtos/email.ts":
/*!*******************************!*\
  !*** ./src/app/dtos/email.ts ***!
  \*******************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email() {
        this.reply = "";
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/dtos/faculty.ts":
/*!*********************************!*\
  !*** ./src/app/dtos/faculty.ts ***!
  \*********************************/
/*! exports provided: Faculty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faculty", function() { return Faculty; });
var Faculty = /** @class */ (function () {
    function Faculty() {
    }
    return Faculty;
}());



/***/ }),

/***/ "./src/app/dtos/intake.ts":
/*!********************************!*\
  !*** ./src/app/dtos/intake.ts ***!
  \********************************/
/*! exports provided: Intake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intake", function() { return Intake; });
var Intake = /** @class */ (function () {
    function Intake() {
    }
    return Intake;
}());



/***/ }),

/***/ "./src/app/dtos/payments/card-payment.ts":
/*!***********************************************!*\
  !*** ./src/app/dtos/payments/card-payment.ts ***!
  \***********************************************/
/*! exports provided: CardPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPayment", function() { return CardPayment; });
var CardPayment = /** @class */ (function () {
    function CardPayment() {
    }
    return CardPayment;
}());



/***/ }),

/***/ "./src/app/dtos/payments/cash-payment.ts":
/*!***********************************************!*\
  !*** ./src/app/dtos/payments/cash-payment.ts ***!
  \***********************************************/
/*! exports provided: CashPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPayment", function() { return CashPayment; });
var CashPayment = /** @class */ (function () {
    function CashPayment() {
    }
    return CashPayment;
}());



/***/ }),

/***/ "./src/app/dtos/payments/cheque-payment.ts":
/*!*************************************************!*\
  !*** ./src/app/dtos/payments/cheque-payment.ts ***!
  \*************************************************/
/*! exports provided: ChequePayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequePayment", function() { return ChequePayment; });
var ChequePayment = /** @class */ (function () {
    function ChequePayment() {
    }
    return ChequePayment;
}());



/***/ }),

/***/ "./src/app/dtos/registration/postgraduate-details.ts":
/*!***********************************************************!*\
  !*** ./src/app/dtos/registration/postgraduate-details.ts ***!
  \***********************************************************/
/*! exports provided: PostgraduateDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostgraduateDetails", function() { return PostgraduateDetails; });
var PostgraduateDetails = /** @class */ (function () {
    function PostgraduateDetails() {
    }
    return PostgraduateDetails;
}());



/***/ }),

/***/ "./src/app/dtos/registration/registration-carrier.ts":
/*!***********************************************************!*\
  !*** ./src/app/dtos/registration/registration-carrier.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationCarrier", function() { return RegistrationCarrier; });
var RegistrationCarrier = /** @class */ (function () {
    function RegistrationCarrier() {
    }
    return RegistrationCarrier;
}());



/***/ }),

/***/ "./src/app/dtos/registration/registration.ts":
/*!***************************************************!*\
  !*** ./src/app/dtos/registration/registration.ts ***!
  \***************************************************/
/*! exports provided: Registration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registration", function() { return Registration; });
/* harmony import */ var _degree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../degree */ "./src/app/dtos/degree.ts");

var Registration = /** @class */ (function () {
    function Registration() {
        this.degree = new _degree__WEBPACK_IMPORTED_MODULE_0__["Degree"]();
    }
    return Registration;
}());



/***/ }),

/***/ "./src/app/dtos/registration/undergraduate-details.ts":
/*!************************************************************!*\
  !*** ./src/app/dtos/registration/undergraduate-details.ts ***!
  \************************************************************/
/*! exports provided: UndergraduateDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndergraduateDetails", function() { return UndergraduateDetails; });
var UndergraduateDetails = /** @class */ (function () {
    function UndergraduateDetails() {
    }
    return UndergraduateDetails;
}());



/***/ }),

/***/ "./src/app/dtos/student.ts":
/*!*********************************!*\
  !*** ./src/app/dtos/student.ts ***!
  \*********************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/dtos/user.ts":
/*!******************************!*\
  !*** ./src/app/dtos/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/common/degree/degree.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/common/degree/degree.service.ts ***!
  \**********************************************************/
/*! exports provided: DegreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreeService", function() { return DegreeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = "/api/v1/degree";
var DegreeService = /** @class */ (function () {
    function DegreeService(http) {
        this.http = http;
    }
    DegreeService.prototype.loadCoursesViaFaculty = function (faculty) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/coursesViaFaculty?faculty=" + faculty);
    };
    DegreeService.prototype.getGraduationTypeAndFee = function (degree) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/graduationTypeAndFee?degree=" + degree);
    };
    DegreeService.prototype.getCourseFee = function (degree) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/courseFee?degree=" + degree);
    };
    DegreeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DegreeService);
    return DegreeService;
}());



/***/ }),

/***/ "./src/app/services/common/faculty/faculty.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/common/faculty/faculty.service.ts ***!
  \************************************************************/
/*! exports provided: FacultyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyService", function() { return FacultyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = "/api/v1/faculty";
var FacultyService = /** @class */ (function () {
    function FacultyService(http) {
        this.http = http;
    }
    FacultyService.prototype.getAllFaculties = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/facultyNames");
    };
    FacultyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FacultyService);
    return FacultyService;
}());



/***/ }),

/***/ "./src/app/services/common/file/file.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/common/file/file.service.ts ***!
  \******************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = "/api/v1/user/upload";
var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
        this.uploadedPercentage = 0;
    }
    FileService.prototype.uploadFile = function (formData) {
        var _this = this;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend_url + URL, formData, { reportProgress: true, observe: 'events' }).subscribe(function (event) {
            if (event.type == 1) {
                if (Math.round(_this.uploadedPercentage) !== Math.round(event['loaded'] / event['total'] * 100)) {
                    _this.uploadedPercentage = event['loaded'] / event['total'] * 100;
                    console.log(Math.round(_this.uploadedPercentage));
                }
            }
        });
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/common/intake/intake.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/common/intake/intake.service.ts ***!
  \**********************************************************/
/*! exports provided: IntakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntakeService", function() { return IntakeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = "/api/v1/intake";
var IntakeService = /** @class */ (function () {
    function IntakeService(http) {
        this.http = http;
    }
    IntakeService.prototype.getAllMonths = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/intakeMonths");
    };
    IntakeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IntakeService);
    return IntakeService;
}());



/***/ }),

/***/ "./src/app/services/common/socket/socket.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/common/socket/socket.service.ts ***!
  \**********************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/index.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocketService = /** @class */ (function () {
    function SocketService() {
        this.established = false;
        this.onlineCount = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.websiteVisits = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // isSidebarVisible: boolean;
    SocketService.prototype.initSocket = function () {
        this.socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3___default.a(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + "/lms-web-socket");
        this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__["over"](this.socket);
        this.stompClient.debug = null;
        var that = this;
        this.stompClient.connect({}, function () {
            that.stompClient.subscribe('/topic/greetings1', function (user) {
                console.log("ACC1");
            });
            that.stompClient.subscribe('/topic/greetings2', function (user) {
                console.log("ACC2");
            });
            that.stompClient.subscribe('/topic/onlineCount', function (socket) {
                that.onlineCount.next(JSON.parse(socket.body).onlineCount);
                // new DashboardComponent().setOnlineCount(JSON.parse(socket.body).onlineCount);
            });
            that.stompClient.subscribe('/topic/websiteVisits', function (socket) {
                that.websiteVisits.next(JSON.parse(socket.body).websiteVisits);
            });
            that.stompClient.subscribe('/topic/sessionId', function (socket) {
                that.websiteVisits.next(JSON.parse(socket.body).sessionId);
            });
            that.stompClient.send("/app/online", { 'token': localStorage.getItem('token') });
            that.established = true;
        });
    };
    SocketService.prototype.send = function () {
        this.stompClient.send("/app/hello2");
    };
    SocketService.prototype.sendOnlineMessage = function () {
        if (this.established) {
            this.stompClient.send("/app/online");
        }
    };
    SocketService.prototype.sendOfflineMessage = function () {
        this.stompClient.send("/app/offline");
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/common/wizard-color/wizard-color.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/common/wizard-color/wizard-color.service.ts ***!
  \**********************************************************************/
/*! exports provided: WizardColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardColorService", function() { return WizardColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardColorService = /** @class */ (function () {
    function WizardColorService() {
        this.elementLecturer = 0;
        this.studentReg = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.lecturerReg = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    WizardColorService.prototype.setStudentWizardGreen = function (elementStudent) {
        this.studentReg.next(elementStudent);
    };
    WizardColorService.prototype.setLecturerWizardGreen = function (elementLecturer) {
        this.lecturerReg.next(elementLecturer);
    };
    WizardColorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WizardColorService);
    return WizardColorService;
}());



/***/ }),

/***/ "./src/app/services/login-screen/login/login.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/login-screen/login/login.service.ts ***!
  \**************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = "/api/v1/user";
var LoginService = /** @class */ (function () {
    function LoginService(router, http) {
        this.router = router;
        this.http = http;
    }
    LoginService.prototype.getLogin = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend_url + URL + "/authenticate", user);
    };
    LoginService.prototype.isAuthenticated = function () {
        return localStorage.getItem("login") == 'logged' ? true : false;
    };
    LoginService.prototype.sendEmail = function (email) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend_url + URL + "/forgotPassword", email);
    };
    LoginService.prototype.getProfileImage = function () {
        return (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend_url + URL + "/file?path=" + localStorage.getItem('profile-image') + "");
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/student-reg/student-details/student-details.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/services/student-reg/student-details/student-details.service.ts ***!
  \*********************************************************************************/
/*! exports provided: StudentDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsService", function() { return StudentDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = "/api/v1/student";
var StudentDetailsService = /** @class */ (function () {
    function StudentDetailsService(http, router) {
        this.http = http;
        this.router = router;
    }
    // saveStudent(): Observable<boolean> {
    //   return this.http.post<boolean>("", "")
    //     .pipe(
    //       map((result) => {
    //         // sessionStorage.setItem("token", result + "");
    //         if (result) {
    //           this.router.navigate(['/main/student-reg/student-registrations']);
    //         } else {
    //           this.router.navigate(['/main/student-reg/student-registrations']);
    //         }
    //         return result;
    //       })
    //     )
    // }
    StudentDetailsService.prototype.getStudentData = function (studentId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend_url + URL + "/getStudentData?studentId=" + studentId);
    };
    StudentDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentDetailsService);
    return StudentDetailsService;
}());



/***/ }),

/***/ "./src/app/services/student-reg/student-registration/student-registration.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/services/student-reg/student-registration/student-registration.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: StudentRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegistrationService", function() { return StudentRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dtos_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dtos/email */ "./src/app/dtos/email.ts");
/* harmony import */ var _dtos_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dtos/student */ "./src/app/dtos/student.ts");
/* harmony import */ var _dtos_degree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dtos/degree */ "./src/app/dtos/degree.ts");
/* harmony import */ var _dtos_registration_undergraduate_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dtos/registration/undergraduate-details */ "./src/app/dtos/registration/undergraduate-details.ts");
/* harmony import */ var _dtos_registration_postgraduate_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dtos/registration/postgraduate-details */ "./src/app/dtos/registration/postgraduate-details.ts");
/* harmony import */ var _dtos_registration_registration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dtos/registration/registration */ "./src/app/dtos/registration/registration.ts");
/* harmony import */ var _dtos_payments_cash_payment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dtos/payments/cash-payment */ "./src/app/dtos/payments/cash-payment.ts");
/* harmony import */ var _dtos_payments_card_payment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dtos/payments/card-payment */ "./src/app/dtos/payments/card-payment.ts");
/* harmony import */ var _dtos_payments_cheque_payment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../dtos/payments/cheque-payment */ "./src/app/dtos/payments/cheque-payment.ts");
/* harmony import */ var _dtos_registration_registration_carrier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../dtos/registration/registration-carrier */ "./src/app/dtos/registration/registration-carrier.ts");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../classes/login-status */ "./src/app/classes/login-status.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var URL = "/api/v1/student";
var StudentRegistrationService = /** @class */ (function () {
    function StudentRegistrationService(http) {
        this.http = http;
        this.student = new _dtos_student__WEBPACK_IMPORTED_MODULE_4__["Student"]();
        this.degree = new _dtos_degree__WEBPACK_IMPORTED_MODULE_5__["Degree"]();
        this.registration = new _dtos_registration_registration__WEBPACK_IMPORTED_MODULE_8__["Registration"]();
        this.underGraduate = new _dtos_registration_undergraduate_details__WEBPACK_IMPORTED_MODULE_6__["UndergraduateDetails"]();
        this.postGraduate = new _dtos_registration_postgraduate_details__WEBPACK_IMPORTED_MODULE_7__["PostgraduateDetails"]();
        this.cashPayment = new _dtos_payments_cash_payment__WEBPACK_IMPORTED_MODULE_9__["CashPayment"]();
        this.cardPayment = new _dtos_payments_card_payment__WEBPACK_IMPORTED_MODULE_10__["CardPayment"]();
        this.chequePayment = new _dtos_payments_cheque_payment__WEBPACK_IMPORTED_MODULE_11__["ChequePayment"]();
        this.email = new _dtos_email__WEBPACK_IMPORTED_MODULE_3__["Email"]();
        this.registration.degree = new _dtos_degree__WEBPACK_IMPORTED_MODULE_5__["Degree"]();
    }
    StudentRegistrationService.prototype.setStudent = function (student) {
        this.student = student;
    };
    StudentRegistrationService.prototype.getStudent = function () {
        return this.student;
    };
    StudentRegistrationService.prototype.setRegistration = function (underGraduate, postGraduate, graduationType, registration) {
        this.underGraduate = underGraduate;
        this.postGraduate = postGraduate;
        this.graduationType = graduationType;
        this.underGraduate.registration.student = this.student;
        this.postGraduate.registration.student = this.student;
        this.registration = registration;
    };
    StudentRegistrationService.prototype.setPayment = function (cashPayment, cardPayment, chequePayment, paymentType) {
        this.cashPayment = cashPayment;
        this.cardPayment = cardPayment;
        this.chequePayment = chequePayment;
        this.paymentType = paymentType;
    };
    StudentRegistrationService.prototype.getFee = function () {
        return this.registration.degree.courseFee;
    };
    StudentRegistrationService.prototype.submitStudentRegistration = function () {
        var registrationCarrier = new _dtos_registration_registration_carrier__WEBPACK_IMPORTED_MODULE_12__["RegistrationCarrier"]();
        registrationCarrier.underGraduate = this.underGraduate;
        registrationCarrier.postGraduate = this.postGraduate;
        registrationCarrier.graduationType = this.graduationType;
        registrationCarrier.cashPay = this.cashPayment;
        registrationCarrier.cardPay = this.cardPayment;
        registrationCarrier.chequePay = this.chequePayment;
        registrationCarrier.payType = this.paymentType;
        if (_classes_login_status__WEBPACK_IMPORTED_MODULE_13__["LoginStatus"].getLoginStatus() == 5) {
            registrationCarrier.submitType = "Free";
        }
        else if (_classes_login_status__WEBPACK_IMPORTED_MODULE_13__["LoginStatus"].getLoginStatus() == 2) {
            registrationCarrier.submitType = "Student";
        }
        console.log(registrationCarrier);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/submitStudentRegistration", registrationCarrier);
    };
    StudentRegistrationService.prototype.updateStudent = function (student) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/updateStudent", student);
    };
    StudentRegistrationService.prototype.getAllStudentData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/getAllStudentData");
    };
    StudentRegistrationService.prototype.setEmailReply = function (email) {
        this.email = email;
    };
    StudentRegistrationService.prototype.getEmailReply = function () {
        return this.email;
    };
    StudentRegistrationService.prototype.setRegistrationId = function (id) {
        this.registration.registrationId = id;
    };
    StudentRegistrationService.prototype.getRegistrationId = function () {
        return this.registration.registrationId;
    };
    StudentRegistrationService.prototype.getRegistration = function () {
        return this.registration;
    };
    StudentRegistrationService.prototype.getAllRegistrationData = function (studentId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/getAllStudentRegistrations?studentId=" + studentId);
    };
    StudentRegistrationService.prototype.getUndergraduateData = function (regId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/getUndergraduateData?regId=" + regId);
    };
    StudentRegistrationService.prototype.getPostgraduateData = function (regId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/getPostgraduateData?regId=" + regId);
    };
    StudentRegistrationService.prototype.getPaymentData = function (regId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/getPaymentData?regId=" + regId);
    };
    StudentRegistrationService.prototype.getGraduationType = function () {
        return this.graduationType;
    };
    StudentRegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentRegistrationService);
    return StudentRegistrationService;
}());



/***/ }),

/***/ "./src/app/views/chat-room/chat-room.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/chat-room/chat-room.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/chat-room/chat-room.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/chat-room/chat-room.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat-room works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/chat-room/chat-room.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/chat-room/chat-room.component.ts ***!
  \********************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent() {
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
    };
    ChatRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! ./chat-room.component.html */ "./src/app/views/chat-room/chat-room.component.html"),
            styles: [__webpack_require__(/*! ./chat-room.component.css */ "./src/app/views/chat-room/chat-room.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/views/course-work/subjects/subjects.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/course-work/subjects/subjects.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subjectStyle {\n  color: #3c322a;\n  font-size: 16px;\n  margin-top: 20px;\n  /*background-color: #e9b500;*/\n  padding: inherit;\n  /*width: 300px;*/\n  border-radius: 15px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n  margin-left: 25px;\n  border: 1.5px #bf9730 solid;\n  /*transform: translateX(-50%);*/\n  display: inline-block;\n  /*position: absolute*/\n}\n"

/***/ }),

/***/ "./src/app/views/course-work/subjects/subjects.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/course-work/subjects/subjects.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- multistep form -->\n<div class=\"main-panel\">\n  <nav class=\"navbar navbar-transparent navbar-absolute\" style=\"background-color: #FAFAFA\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" style=\"color: grey\"> Subjects </a>\n      </div>\n    </div>\n\n    <div class=\"row\" style=\"min-height: 75vh\">\n      <div class=\"col-md-12 col-12\">\n        <li style=\"list-style-type: none\">\n          <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#degree1\">\n            <p style=\"padding: 10px;margin-bottom: 0px;\"> BSc(CS) - Faculty Of Science\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n          <div class=\"collapse\" id=\"degree1\" style=\"margin-left: 60px\">\n            <ul class=\"nav\">\n              <li class=\"btnMain\">\n                <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#dep1\">\n                  <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Department Of Maths\n                    <b class=\"caret\"></b>\n                  </p>\n                </a>\n                <div class=\"collapse\" id=\"dep1\">\n                  <ul class=\"nav\">\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 1\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 2\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 3\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester3\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 4\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n\n              </li>\n              <li>\n                <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#dep2\">\n                  <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Department Of Computer Science\n                    <b class=\"caret\"></b>\n                  </p>\n                </a>\n                <div class=\"collapse\" id=\"dep2\" style=\"margin-left: 160px\">\n                  <ul class=\"nav\">\n                    <li>\n                      <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#sem1\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 1\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                      <div class=\"collapse\" id=\"sem1\" style=\"margin-left: 80px\">\n                        <ul class=\"nav\">\n                          <li>\n                            <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#stuff1\">\n                              <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Java\n                                <b class=\"caret\"></b>\n                              </p>\n                            </a>\n                            <div class=\"collapse\" id=\"stuff1\" style=\"margin-left: 80px\">\n                              <ul class=\"nav\">\n                                <li>\n                                  <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester2\">\n                                    <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Lecture Notes\n\n                                    </p>\n                                  </a>\n                                </li>\n                                <li>\n                                  <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester2\">\n                                    <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Assignments\n\n                                    </p>\n                                  </a>\n                                </li>\n                                <li>\n                                  <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester2\">\n                                    <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Tutorials\n\n                                    </p>\n                                  </a>\n                                </li>\n                              </ul>\n                            </div>\n\n                          </li>\n                          <li>\n                            <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester2\">\n                              <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Database\n                                <b class=\"caret\"></b>\n                              </p>\n                            </a>\n                          </li>\n                          <li>\n                            <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester2\">\n                              <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Software Engineering\n                                <b class=\"caret\"></b>\n                              </p>\n                            </a>\n                          </li>\n                        </ul>\n                      </div>\n\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 2\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 3\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#semester3\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 4\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n\n              </li>\n              <li class=\"btnMain\">\n                <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#dep3\">\n                  <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Department Of Physics\n                    <b class=\"caret\"></b>\n                  </p>\n                </a>\n                <div class=\"collapse\" id=\"dep3\">\n                  <ul class=\"nav\">\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 1\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 2\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester2\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 3\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"subjectStyle\" style=\"margin-left: 160px\" data-toggle=\"collapse\" href=\"#semester3\">\n                        <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Semester 4\n                          <b class=\"caret\"></b>\n                        </p>\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n\n              </li>\n            </ul>\n          </div>\n        </li>\n\n        <li style=\"list-style-type: none\">\n          <a class=\"subjectStyle\" data-toggle=\"collapse\" href=\"#degree2\">\n            <p style=\"padding: 10px;margin-bottom: 0px;\"> MSc(CS) - Faculty Of Science\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n          <div class=\"collapse\" id=\"degree2\" style=\"margin-left: 60px\">\n            <ul class=\"nav\">\n              <li class=\"btnMain\">\n                <a class=\"subjectStyle\">\n                  <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Department Of Maths\n                    <b class=\"caret\"></b>\n                  </p>\n                </a>\n              </li>\n              <li>\n                <a class=\"subjectStyle\">\n                  <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Department Of Computer Science\n                    <b class=\"caret\"></b>\n                  </p>\n                </a>\n              </li>\n              <li class=\"btnMain\">\n                <a class=\"subjectStyle\">\n                  <p class=\"sidebar-normal\" style=\"padding: 10px;margin-bottom: 0px;\"> Department Of Physics\n                    <b class=\"caret\"></b>\n                  </p>\n                </a>\n              </li>\n            </ul>\n          </div>\n\n        </li>\n      </div>\n    </div>\n\n    <footer class=\"footer\" style=\"background-color: white;border-top: 1px solid #e7e7e7\">\n      <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n          Copyright &copy; {{getYear()}} - TeaBot , Liquid Fertilizer  /\n          Developed\n          by\n          Imalka Gunawardana\n        </p>\n      </div>\n    </footer>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/views/course-work/subjects/subjects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/course-work/subjects/subjects.component.ts ***!
  \******************************************************************/
/*! exports provided: SubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsComponent", function() { return SubjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectsComponent = /** @class */ (function () {
    function SubjectsComponent(datePipe) {
        this.datePipe = datePipe;
    }
    SubjectsComponent.prototype.ngOnInit = function () {
    };
    SubjectsComponent.prototype.getYear = function () {
        var latest_date = this.datePipe.transform(new Date(), 'yyyy');
        return latest_date;
    };
    SubjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subjects',
            template: __webpack_require__(/*! ./subjects.component.html */ "./src/app/views/course-work/subjects/subjects.component.html"),
            styles: [__webpack_require__(/*! ./subjects.component.css */ "./src/app/views/course-work/subjects/subjects.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], SubjectsComponent);
    return SubjectsComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-lead-in,\r\n.intro-heading {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n/* Add a transparent box using ::before pseudo-element */\r\n\r\n.intro-lead-in::before,\r\n.intro-heading::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity (last value) to control the intensity of the background */\r\n    z-index: -1; /* Place the background behind the text */\r\n}\r\n\r\n/* CSS Code */\r\n\r\n.pricing-table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.plan {\r\n    border: 2px solid green; /* Change border color to green */\r\n    border-radius: 20px; /* Add border-radius for curved border */\r\n    padding: 20px;\r\n    width: 250px;\r\n    text-align: center;\r\n    margin: 20px;\r\n    background-color: #f0f9f0; /* Change background color to a light green shade */\r\n}\r\n\r\n.one-time-cost {\r\n    color: green;\r\n}\r\n\r\n.footer {\r\n    background-color: #333;\r\n    color: #fff;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n}\r\n\r\n.footer-content {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.footer-address, .footer-contact {\r\n    flex: 1;\r\n}\r\n\r\n.newsletter {\r\n    margin-top: 20px;\r\n}\r\n\r\n.newsletter-form input[type=\"email\"] {\r\n    padding: 8px;\r\n    margin-right: 10px;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.newsletter-form button {\r\n    background-color: #f6c837;\r\n    color: #333;\r\n    border: none;\r\n    padding: 8px 15px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.footer-bottom {\r\n    background-color: #222;\r\n    padding: 10px 0;\r\n}\r\n\r\n/* Optional: Style the heading and other elements further as per your design */\r\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" style=\"color: white\">TeaBot</a>\n      </div>\n    </div>\n  </nav>\n\n  <!--New-->\n\n  <!-- Header -->\n  <header class=\"masthead\" style=\"position: relative\">\n\n    <div class=\"container\">\n      <div class=\"intro-text\" style=\"padding-bottom: 320px\">\n\n\n        <diV class=\"intro-lead-in\" style=\"height: 450px;\">\n          <div\n            style=\"color: rgba(145, 234, 163, 0.55);padding-top: 180px;font-family: 'Raleway', sans-serif;font-size: 45px;margin-bottom: 40px;font-weight: 500\">\n            \"Inspiring green thumbs in the digital age\"\n          </div>\n          <div class=\"text-uppercase\"\n            style=\"color: rgba(240, 236, 239, 0.51);font-family: 'Raleway', sans-serif;font-weight: 500\"> The\n            Revolutionizing Liquid Fertilizing System\n          </div>\n          <diV></diV>\n        </diV>\n        <div class=\"row\" *ngIf=\"loginStatus()==5\" style=\"padding-top: 30px\">\n          <div class=\"col-sm-12\">\n            <!-- <button type=\"button\"\n                    style=\"font-size: 20px;border: 1px white solid;width: 300px;background-color: rgba(249,254,242,0);border-radius: 5px\"\n                    class=\"btn btn-fill\" (click)=\"login()\">Sign in\n            </button> -->\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"loginStatus()!=5\">\n          <div class=\"col-sm-12\">\n            <div class=\"row\">\n              <div class=\"row\" style=\"padding-top: 20px\">\n                <div class=\"col-sm-12\">\n                  <div class=\"card card-profile card-hidden\" style=\"background-color: #f0f8ff00;border: none;\">\n                    <div class=\"card-avatar\">\n                      <img class=\"avatar\" [src]=\"imagePath\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12\">\n                  <span style=\"font-weight: 400;font-size: 23px;color: #e6e9dd\">\n                    {{userName}}\n                  </span>\n                </div>\n              </div>\n              <div class=\"row\" style=\"padding-top: 60px\">\n                <div class=\"col-sm-6\">\n                  <button type=\"button\"\n                    style=\"font-size: 20px;border: 1px white solid;width: 300px;background-color: rgba(249,254,242,0);border-radius: 5px;right: 10px;position: absolute\"\n                    class=\"btn btn-fill\" (click)=\"lock()\">{{textLock}}\n                  </button>\n                </div>\n                <div class=\"col-sm-6\">\n                  <button type=\"button\"\n                    style=\"font-size: 20px;border: 1px white solid;width: 300px;background-color: rgba(249,254,242,0);border-radius: 5px;left: 10px;position: absolute;\"\n                    class=\"btn btn-fill\" (click)=\"logout()\">Sign out\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--<div style=\"background-color: black;opacity: 0.5;position: absolute;width: 100%;height: 100%\"></div>-->\n  </header>\n\n  <!-- Services -->\n  <section id=\"services\" style=\"padding-bottom: 100px;padding-top: 100px;background-color: #FAFAFA\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\"\n            style=\"background-color: #f6c837;border-radius: 30px;display: inline-block;padding-left: 20px;padding-right: 20px;color: #2b2200\">\n            About TeaBot</h2>\n          <h3 class=\"section-subheading text-muted\">\"Introducing a groundbreaking concept set to bloom: the Watering\n            Robot. This innovative learning kit, equipped with watering arms,\n            stem detection & path navigation interactive modules, invites farmers to\n            explore the fascinating world of robotics. Our Watering Robot combines agriculture and technology,\n            offering an interactive approach to nurturing plants. This system bridging the gap between\n            technology and nature in an exciting way.\"</h3>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-12\"\n      style=\"padding-bottom: 30px; background-image: url('assets/img/dashboard/image-9.png'); background-size: cover; height: 900px; width: 100%; margin-bottom: 100px\">\n  \n    </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\"\n            style=\"background-color: #f6c837;border-radius: 30px;display: inline-block;padding-left: 20px;padding-right: 20px;color: #2b2200\">\n            Awsome Features</h2>\n            <div class=\"row text-center\" style=\"margin-top: 50px;\">\n              <div class=\"col-md-3\" style=\"cursor: pointer\" (click)=\"routeToFree()\">\n                <span class=\"fa-stack fa-4x\">\n                  <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                  <i class=\"fa fa-microchip fa-stack-1x fa-inverse\"></i>\n      \n                </span>\n                <h4 class=\"service-heading\">Embedded Electronics<br></h4>\n                <p class=\"text-muted\" style=\"padding-bottom: 12px\">This Robot will embedded with best cutting edge\n                  electronics\n                  to deliver the finest, and the bes</p>\n                <i *ngIf=\"loginStatus()==1\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==2\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==3\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==4\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n                <i *ngIf=\"loginStatus()==5\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n              </div>\n              <div class=\"col-md-3\" style=\"cursor: pointer\" (click)=\"routeToAdmin()\">\n                <span class=\"fa-stack fa-4x\">\n                  <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n      \n                  <i class=\"fa fa-certificate fa-stack-1x fa-inverse\"></i>\n                </span>\n                <h4 class=\"service-heading\">Automated System<br></h4>\n                <p class=\"text-muted\" style=\"padding-bottom: 12px\">The system automatically detect plants and water\n                  automatically.</p>\n                <i *ngIf=\"loginStatus()==1\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==2\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==3\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==4\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n                <i *ngIf=\"loginStatus()==5\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n              </div>\n              <div class=\"col-md-3\" style=\"cursor: pointer\" (click)=\"routeToStudent()\">\n                <span class=\"fa-stack fa-4x\">\n                  <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                  <i class=\"fa fa-cloud fa-stack-1x fa-inverse\"></i>\n                </span>\n                <h4 class=\"service-heading\">IOT Enabled<br></h4>\n                <p class=\"text-muted\" style=\"padding-bottom: 12px\">The whole system will work based on the IOT concepts in\n                  real-time </p>\n                <i *ngIf=\"loginStatus()==1\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==2\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==3\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==4\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n                <i *ngIf=\"loginStatus()==5\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n              </div>\n              <div class=\"col-md-3\" style=\"cursor: pointer\" (click)=\"routeToLecturer()\">\n                <span class=\"fa-stack fa-4x\">\n                  <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                  <i class=\"fa fa-plus fa-stack-1x fa-inverse\"></i>\n                </span>\n                <h4 class=\"service-heading\">Flexible<br></h4>\n                <p class=\"text-muted\" style=\"padding-bottom: 12px\">Flexibility of the robot can be used to water any\n                  platation\n                  and it can add or remove any parts according to the requirement.</p>\n                <i *ngIf=\"loginStatus()==1\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==2\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==3\" class=\"fa fa-times fa-4x\" style=\"color: red\"></i>\n                <i *ngIf=\"loginStatus()==4\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n                <i *ngIf=\"loginStatus()==5\" class=\"fa fa-check fa-4x\" style=\"color: green\"></i>\n              </div>\n      \n            </div>\n        </div>\n      </div>\n    \n    </div>\n\n  </section>\n  <div class=\"col-md-12 col-12\"\n    style=\"padding-bottom: 30px; background-image: url('assets/img/dashboard/image-6.png'); background-size: cover; height: 900px; width: 100%;\">\n\n  </div>\n\n\n  <!--New-->\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <h2 class=\"section-heading text-uppercase\"\n        style=\"background-color: #f6c837;border-radius: 30px;display: inline-block;padding-left: 20px;padding-right: 20px;color: #2b2200\">\n        Choose your plan</h2>\n        <div class=\"col-md-12 col-12\"\n        style=\"padding-bottom: 30px; background-image: url('background-image.jpg'); background-size: cover;\">\n        <div class=\"card\">\n          <form class=\"form-horizontal\">\n            <div class=\"pricing-table\">\n              <div class=\"plan\">\n                <h2>Starter Plan</h2>\n                <p>Powerful & Awesome Features</p>\n                <p>$5/ Month</p>\n                <p>8 cubes (<span class=\"one-time-cost\">$62</span>-One Time Cost)</p>\n                <p>Learning Activities</p>\n                <p>Analytics of the child</p>\n                <p>Mobile Application</p>\n              </div>\n    \n              <div class=\"plan\">\n                <h2>Advance Plan</h2>\n                <p>Powerful & Awesome Features</p>\n                <p>$10/ Month</p>\n                <p>10 cubes (<span class=\"one-time-cost\">$79</span>-One Time Cost)</p>\n                <p>Learning Activities</p>\n                <p>Analytics of the child</p>\n                <p>Mobile Application</p>\n              </div>\n    \n              <div class=\"plan\">\n                <h2>Premium Plan</h2>\n                <p>Powerful & Awesome Features</p>\n                <p>$15/ Month</p>\n                <p>12 cubes (<span class=\"one-time-cost\">$100</span>-One Time Cost)</p>\n                <p>Learning Activities</p>\n                <p>Analytics of the child</p>\n                <p>Mobile Application</p>\n              </div>\n            </div>\n            <!-- /.card-header -->\n           \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-12\"\n    style=\"padding-bottom: 30px; background-image: url('assets/img/dashboard/image-8.png'); background-size: cover; height: 900px; width: 100%;\">\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <h2 class=\"section-heading text-uppercase\"\n        style=\"background-color: #f6c837;border-radius: 30px;display: inline-block;padding-left: 20px;padding-right: 20px;color: #2b2200\">\n        Contact Us</h2>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-12\">\n  \n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <!-- <h2 class=\"section-heading text-uppercase\">Contact Us</h2> -->\n                <p class=\"section-subheading text-muted\">\n                  <strong>Get In Touch!</strong><br>\n                  Hello! Please feel free to reach out to us. We are here to assist you.\n              </p>\n              \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <form id=\"contactForm\" name=\"sentMessage\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Your Name *\" required\n                                    data-validation-required-message=\"Please enter your name.\" />\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Your Email *\" required\n                                    data-validation-required-message=\"Please enter your email address.\" />\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"subject\" type=\"text\" placeholder=\"Subject *\" required\n                                    data-validation-required-message=\"Please enter the subject.\" />\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control\" id=\"message\" placeholder=\"Leave a message here *\" required\n                                    data-validation-required-message=\"Please enter your message.\"></textarea>\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                        <div class=\"col-lg-12 text-center\">\n                            <div id=\"success\"></div>\n                            <button id=\"sendMessageButton\" class=\"btn btn-primary btn-xl text-uppercase\" type=\"submit\">Send\n                                Message</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    \n     \n    </div>\n    <!-- /.card -->\n  </div>\n</div>\n<!--  -->\n\n\n\n<div class=\"row\">\n\n\n  <div class=\"content\" style=\"background-color: #FAFAFA;margin-top: 0px;padding-top: 50px;\">\n    <div class=\"container-fluid\">\n\n      <div class=\"row\">\n        <!-- <div class=\"col-md-12 col-12\" style=\"padding-bottom: 30px\">\n          <div class=\"card\">\n            <form class=\"form-horizontal\">\n              <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                <h4 class=\"card-title\" style=\"font-weight: lighter\">QUICK REFERENCE</h4>\n              </div>\n              \n              <div class=\"card-content\">\n                <div class=\"row\" style=\"height: 40px\"></div>\n                <div class=\"row\" style=\"font-weight: bold;font-size: 16px\">\n                  <div class=\"col-12\"><a target=\"_blank\" style=\"color: black\"\n                                         href=\"http://www.ugc.ac.lk/en/university-admissions/academic-year-20112012.html\">Undergraduate\n                    Handbook - 2017</a></div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div> -->\n\n\n\n\n        <!-- \n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header\" data-background-color=\"orange\">\n              <i class=\"material-icons\">weekend</i>\n            </div>\n            <div class=\"card-content\">\n              <p class=\"category\">Website Visits</p>\n              <h3 class=\"card-title\">{{websiteVisits}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">date_range</i> Last 5 Minutes\n                <i class=\"material-icons text-danger\">warning</i> <a href=\"#pablo\">Get More Space...</a>\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n        <!-- <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header\" data-background-color=\"orange\">\n              <i class=\"fa fa-globe\"></i>\n            </div>\n            <div class=\"card-content\">\n              <p class=\"category\">Online</p>\n              <h3 class=\"card-title\">{{onlineCount}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">update</i> Just Updated\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n        <!-- <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header\" data-background-color=\"orange\">\n              <i class=\"material-icons\">equalizer</i>\n            </div>\n            <div class=\"card-content\">\n              <p class=\"category\">Enrolled Students</p>\n              <h3 class=\"card-title\">75</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">local_offer</i> Tracked from Google Analytics\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n\n        <!-- <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header\" data-background-color=\"orange\">\n              <i class=\"material-icons\">store</i>\n            </div>\n            <div class=\"card-content\">\n              <p class=\"category\">Enrolled Subjects</p>\n              <h3 class=\"card-title\">34</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">date_range</i> Last 24 Hours\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n      </div>\n    </div>\n  </div>\n\n  <footer class=\"footer\" style=\"height: 500px;\">\n    <div class=\"footer-content\">\n        <div class=\"footer-address\">\n            Address: Main Street, Galle, Sri Lanka\n        </div>\n        <div class=\"footer-contact\">\n            Phone: +94 77 048 0725 <br>\n            Email: teabotsolutions@gmail.com\n        </div>\n    </div>\n    <div class=\"newsletter\" style=\"height: 380px;\">\n        <h3>Newsletter</h3>\n        <form class=\"newsletter-form\">\n            <input type=\"email\" placeholder=\"Your Email\">\n            <button type=\"submit\">Subscribe</button>\n        </form>\n    </div>\n    <div class=\"footer-bottom\">\n        © TeaBot, All Rights Reserved.\n    </div>\n  </footer>\n\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
/* harmony import */ var _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common/socket/socket.service */ "./src/app/services/common/socket/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(datePipe, socketService, router, loginService) {
        var _this = this;
        this.datePipe = datePipe;
        this.socketService = socketService;
        this.router = router;
        this.loginService = loginService;
        this.onlineCount = 0;
        this.websiteVisits = 0;
        this.userName = localStorage.getItem('userName');
        socketService.onlineCount.subscribe(function (value) {
            _this.onlineCount = value;
        });
        socketService.websiteVisits.subscribe(function (value) {
            _this.websiteVisits = value;
        });
    }
    DashboardComponent.prototype.login = function () {
        this.router.navigate(['/root/log-screen/login']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.setProfileImage();
        this.socketService.sendOnlineMessage();
        if (_classes_login_status__WEBPACK_IMPORTED_MODULE_2__["LoginStatus"].getLoginStatus() != 4) {
            this.textLock = "Lock";
        }
        else {
            this.textLock = "Unlock";
        }
    };
    DashboardComponent.prototype.loginStatus = function () {
        return _classes_login_status__WEBPACK_IMPORTED_MODULE_2__["LoginStatus"].getLoginStatus();
    };
    DashboardComponent.prototype.setProfileImage = function () {
        if (localStorage.getItem('profile-image') != "images/No") {
            this.imagePath = this.loginService.getProfileImage();
        }
        else {
            this.imagePath = "../../../assets/img/faces/User.png";
        }
    };
    DashboardComponent.prototype.getYear = function () {
        var latest_date = this.datePipe.transform(new Date(), 'yyyy');
        return latest_date;
    };
    DashboardComponent.prototype.logout = function () {
        var accType = localStorage.getItem("accountTypeForLogin");
        localStorage.clear();
        localStorage.setItem("accountTypeForLogin", accType);
        this.router.navigate(['/root/log-screen/login']);
    };
    DashboardComponent.prototype.lock = function () {
        localStorage.removeItem('login');
        localStorage.setItem('accountType', 'locked');
        this.router.navigate(['/root/log-screen/lock']);
    };
    DashboardComponent.prototype.routeToFree = function () {
        if (_classes_login_status__WEBPACK_IMPORTED_MODULE_2__["LoginStatus"].getLoginStatus() == 4 || _classes_login_status__WEBPACK_IMPORTED_MODULE_2__["LoginStatus"].getLoginStatus() == 5) {
            this.router.navigate(['/root/main/student-reg/student-details']);
        }
    };
    DashboardComponent.prototype.routeToAdmin = function () {
        if (_classes_login_status__WEBPACK_IMPORTED_MODULE_2__["LoginStatus"].getLoginStatus() == 1) {
            this.router.navigate(['/root/main/student-reg/student-details']);
        }
    };
    DashboardComponent.prototype.routeToStudent = function () {
        if (_classes_login_status__WEBPACK_IMPORTED_MODULE_2__["LoginStatus"].getLoginStatus() == 2) {
            this.router.navigate(['/root/main/student-reg/student-details']);
        }
    };
    DashboardComponent.prototype.routeToLecturer = function () {
        if (_classes_login_status__WEBPACK_IMPORTED_MODULE_2__["LoginStatus"].getLoginStatus() == 3) {
            this.router.navigate(['/root/main/student-reg/student-details']);
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/views/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

// , private cookieService: CookieService, private socketService: SocketService


/***/ }),

/***/ "./src/app/views/dashboard/events-calendar/events-calendar.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/dashboard/events-calendar/events-calendar.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\ncode,\ndel,\ndfn,\nem,\nimg,\nq,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ndialog,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: inherit;\n  font-style: inherit;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  text-decoration: none;\n  list-style: none;\n}\nimg {\n  width: 100%\n}\n.anim04c {\n  transition: all .4s cubic-bezier(.5, .35, .15, 1.4);\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Source Sans Pro', sans-serif;\n  background: #eee;\n  color: #666;\n}\nbody {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n/*-----*/\n.outer {\n  position: relative;\n  top: 50%;\n  z-index: 1;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n/*-----*/\n.signboard {\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  color: #fff;\n  border-radius: 10px;\n}\n/*-----*/\n.front {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  background: #ff726b;\n  text-align: center;\n}\n.right {\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  -webkit-transform: rotate(-10deg) translate(7px, 8px);\n  transform: rotate(-10deg) translate(7px, 8px);\n  background: #EFC94C;\n}\n.left {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  -webkit-transform: rotate(5deg) translate(-4px, 4px);\n  transform: rotate(5deg) translate(-4px, 4px);\n  background: #3498DB;\n}\n/*-----*/\n.outer:hover .inner {\n  -webkit-transform: rotate(0) translate(0);\n  transform: rotate(0) translate(0);\n}\n/*-----*/\n.outer:active .inner {\n  -webkit-transform: rotate(0) translate(0) scale(0.9);\n  transform: rotate(0) translate(0) scale(0.9);\n}\n.outer:active .front .date {\n  -webkit-transform: scale(2);\n}\n.outer:active .front .day,\n.outer:active .front .month {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.outer:active .right {\n  -webkit-transform: rotate(-5deg) translateX(80px) scale(0.9);\n  transform: rotate(-5deg) translateX(80px) scale(0.9);\n}\n.outer:active .left {\n  -webkit-transform: rotate(5deg) translateX(-80px) scale(0.9);\n  transform: rotate(5deg) translateX(-80px) scale(0.9);\n}\n/*-----*/\n.outer:active .calendarMain {\n  -webkit-transform: scale(1.8);\n  opacity: 0;\n  visibility: hidden;\n}\n.outer:active .clock {\n  -webkit-transform: scale(1.4);\n  opacity: 1;\n  visibility: visible;\n}\n.outer:active .calendarNormal {\n  bottom: -30px;\n  opacity: 1;\n  visibility: visible;\n}\n.outer:active .year {\n  top: -30px;\n  opacity: 1;\n  visibility: visible;\n  letter-spacing: 3px;\n}\n/*-----*/\n.calendarMain {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 1;\n}\n.month,\n.day {\n  font-size: 10px;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n.date {\n  font-size: 40px;\n  line-height: 40px;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n/*-----*/\n.clock {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  font-size: 40px;\n  line-height: 100px;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-align: center;\n  opacity: 0;\n  visibility: hidden;\n}\n/*-----*/\n.year {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  font-size: 20px;\n  line-height: 30px;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  text-align: center;\n  opacity: 0;\n  visibility: hidden;\n  color: #ff726b;\n}\n.calendarNormal {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  font-size: 14px;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-align: center;\n  opacity: 0;\n  visibility: hidden;\n}\n.date2 {\n  color: #ff726b;\n}\n.day2 {\n  color: #3498DB;\n}\n.month2 {\n  color: #EFC94C;\n}\n/* -- usable codes end -- */\n/* -- unusable codes (text, logo, etc.) -- */\n.info {\n  width: 100%;\n  height: 25%;\n  position: absolute;\n  top: 15%;\n  text-align: center;\n  opacity: 0;\n}\n.info li {\n  width: 100%;\n}\n.hover,\n.click,\n.yeaa {\n  font-size: 14px;\n  line-height: 25px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  text-align: center;\n  bottom: 0;\n  opacity: 1;\n}\n.dribbble {\n  position: absolute;\n  top: -60px;\n  font-size: 14px;\n  opacity: 0;\n}\nem {\n  color: #ed4988;\n}\n.designer {\n  width: 100%;\n  height: 50%;\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  opacity: 0;\n}\n.designer li {\n  width: 100%;\n  position: absolute;\n  bottom: 30%;\n}\n.designer a {\n  width: 30px;\n  height: 30px;\n  display: block;\n  position: relative;\n  border-radius: 100%;\n  margin: auto;\n  color: rgba(46, 204, 113, 0.55);\n}\n.designer a:after {\n  content: \"see designs\";\n  position: absolute;\n  top: 0;\n  left: 40px;\n  font-size: 14px;\n  line-height: 33px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  white-space: nowrap;\n}\n.designer a:hover:after {\n  color: #2ecc71;\n}\n.designer img {\n  display: block;\n  border-radius: 100%;\n}\nbody:hover .info,\nbody:hover .designer {\n  opacity: 1;\n}\n::-moz-selection {\n  background: transparent;\n}\n::selection {\n  background: transparent;\n}\n::-moz-selection {\n  background: transparent;\n}\n"

/***/ }),

/***/ "./src/app/views/dashboard/events-calendar/events-calendar.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/events-calendar/events-calendar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info anim04c\">\n  <li class=\"dribbble anim04c\">\n            <span>I need to be a\n                <em> dribbble </em>player?!.</span>\n  </li>\n  <li class=\"hover anim04c\">\n    <span>hover!</span>\n  </li>\n  <li class=\"click anim04c\">\n    <span>click!</span>\n  </li>\n  <li class=\"yeaa anim04c\">\n    <span>- yeaa! -</span>\n  </li>\n</div>\n\n\n<!-- main codes start -->\n<div class=\"signboard outer\">\n  <div class=\"signboard front inner anim04c\">\n    <li class=\"year anim04c\">\n      <span></span>\n    </li>\n    <ul class=\"calendarMain anim04c\">\n      <li class=\"month anim04c\">\n        <span></span>\n      </li>\n      <li class=\"date anim04c\">\n        <span></span>\n      </li>\n      <li class=\"day anim04c\">\n        <span></span>\n      </li>\n    </ul>\n    <li class=\"clock minute anim04c\">\n      <span></span>\n    </li>\n    <li class=\"calendarNormal date2 anim04c\">\n      <span></span>\n    </li>\n  </div>\n  <div class=\"signboard left inner anim04c\">\n    <li class=\"clock hour anim04c\">\n      <span></span>\n    </li>\n    <li class=\"calendarNormal day2 anim04c\">\n      <span></span>\n    </li>\n  </div>\n  <div class=\"signboard right inner anim04c\">\n    <li class=\"clock second anim04c\">\n      <span></span>\n    </li>\n    <li class=\"calendarNormal month2 anim04c\">\n      <span></span>\n    </li>\n  </div>\n</div>\n<!-- main codes end -->\n\n\n<!--<div class=\"designer anim04c\">-->\n<!--<li>-->\n<!--<a href=\"https://creativemarket.com/mselmany\" target=\"_blank\">-->\n<!--<img src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/t5/1117447_100001638983788_1284464661_q.jpg\" alt=\"\">-->\n<!--</a>-->\n<!--</li>-->\n<!--</div>-->\n\n"

/***/ }),

/***/ "./src/app/views/dashboard/events-calendar/events-calendar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/events-calendar/events-calendar.component.ts ***!
  \******************************************************************************/
/*! exports provided: EventsCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCalendarComponent", function() { return EventsCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_events_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/events-calendar.js */ "./src/assets/js/events-calendar.js");
/* harmony import */ var _assets_js_events_calendar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_events_calendar_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsCalendarComponent = /** @class */ (function () {
    function EventsCalendarComponent() {
    }
    EventsCalendarComponent.prototype.ngOnInit = function () {
        loadCalendar();
    };
    EventsCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-calendar',
            template: __webpack_require__(/*! ./events-calendar.component.html */ "./src/app/views/dashboard/events-calendar/events-calendar.component.html"),
            styles: [__webpack_require__(/*! ./events-calendar.component.css */ "./src/app/views/dashboard/events-calendar/events-calendar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsCalendarComponent);
    return EventsCalendarComponent;
}());



/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n\n      <div class=\"card-content\">\n        <h4 class=\"card-title\" style=\"color: #4e4e4e;font-size: 17px\">LECTURER DETAILS</h4>\n        <div class=\"toolbar\">\n          <!--        Here you can write extra buttons/actions for the toolbar              -->\n        </div>\n        <div class=\"material-datatables\">\n          <table class=\"table table-striped table-no-bordered table-hover datatables\" cellspacing=\"0\"\n                 width=\"100%\" style=\"width:100%\">\n            <thead>\n            <tr>\n              <th>Lecturer ID</th>\n              <th>Name With Initials</th>\n              <th>Email</th>\n              <th class=\"disabled-sorting text-right\">Remove</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n              <th>Lecturer ID</th>\n              <th>Name With Initials</th>\n              <th>Email</th>\n              <th class=\"text-right\">Remove</th>\n            </tr>\n            </tfoot>\n            <tbody>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px\">\n              <td>L1</td>\n              <td>K.Silva</td>\n              <td>kamal@gmail.com</td>\n              <td class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px\">\n              <td>L2</td>\n              <td>N.Silva</td>\n              <td>nimal@gmail.com</td>\n              <td class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div><!-- end content-->\n      <div class=\"row\">\n        <div class=\"col-sm-8\"></div>\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-2\">\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\" (click)=\"nextPage()\">Next</button>\n          </div>\n        </div>\n      </div>\n    </div><!--  end card  -->\n  </div>\n</div> <!-- end col-md-12 -->\n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"saveStudent()\">\n        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n          <h4 class=\"card-title\" style=\"font-weight: lighter\">LECTURER DETAILS</h4>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"card-footer\">\n                <div style=\"font-weight: bold\">Note:- If you are a new lecturer, the system will automatically generate a new Lecturer ID and it will show on above table after you save your details.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Faculty</label>\n            <div class=\"col-sm-7\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                <option disabled selected>Select Faculty</option>\n                <option value=\"2\">Foobar</option>\n                <option value=\"3\">Is great</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Faculty</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Lecturer ID</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" disabled>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Title</label>\n            <div class=\"col-sm-10\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\">\n                <option value=\"2\">Mr</option>\n                <option value=\"3\">Miss</option>\n                <option value=\"3\">Mrs</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Name with initials</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Full Name</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Address</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Date of birth</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Email</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"email\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Telephone</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Gender</label>\n            <div class=\"col-sm-10 checkbox-radios\">\n              <div class=\"radio\">\n                <label>\n                  <input type=\"radio\" name=\"optionsRadios\" checked=\"true\">\n                  Male\n                </label>\n              </div>\n              <div class=\"radio\">\n                <label>\n                  <input type=\"radio\" name=\"optionsRadios\">\n                  Female\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"card-footer\">\n              <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Save / Update Lecturer</button>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LecturerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturerDetailsComponent", function() { return LecturerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/data-tables.js */ "./src/assets/js/data-tables.js");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LecturerDetailsComponent = /** @class */ (function () {
    function LecturerDetailsComponent(router, wizardColor) {
        this.router = router;
        this.wizardColor = wizardColor;
    }
    LecturerDetailsComponent.prototype.ngOnInit = function () {
        loadDatatable();
    };
    LecturerDetailsComponent.prototype.nextPage = function () {
        this.wizardColor.setLecturerWizardGreen(1);
        this.router.navigate(['/main/lecturers-subjects/subject-details'], { queryParams: { studentId: 'S001' } });
        window.scrollTo(0, 0);
    };
    LecturerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lecturer-details',
            template: __webpack_require__(/*! ./lecturer-details.component.html */ "./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.html"),
            styles: [__webpack_require__(/*! ./lecturer-details.component.css */ "./src/app/views/lecturer-subjects-registrations/lecturer-details/lecturer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_3__["WizardColorService"]])
    ], LecturerDetailsComponent);
    return LecturerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.nav-tabs.wizard {\n  background-color: transparent;\n  padding: 0;\n  width: 100%;\n  margin: 1em auto;\n  border-radius: .25em;\n  clear: both;\n  border-bottom: none;\n}\n\n.nav-tabs.wizard li {\n  width: 100%;\n  float: none;\n  margin-bottom: 3px;\n}\n\n.nav-tabs.wizard li>* {\n  position: relative;\n  padding: 1em .8em .8em 2.5em;\n  color: #999999 !important;\n  background-color: #dedede !important;\n  border-color: #dedede !important;\n}\n\n.nav-tabs.wizard li.completed>* {\n  color: #fff !important;\n  background-color: #1c9f09 !important;\n  border-color: #1c9f09 !important;\n  border-bottom: none !important;\n}\n\n/*.nav-tabs.wizard li.active>* {*/\n\n/*color: #fff !important;*/\n\n/*background-color: #1f2d3a !important;*/\n\n/*border-color: #1f2d3a !important;*/\n\n/*border-bottom: none !important;*/\n\n/*}*/\n\n.nav-tabs.wizard li.tab-color>*{\n  color: #fff !important;\n  background-color: #1f2d3a !important;\n  border-color: #1f2d3a !important;\n  border-bottom: none !important;\n}\n\n.nav-tabs.wizard li::after:last-child {\n  border: none;\n}\n\n.nav-tabs.wizard > li > a {\n  opacity: 1;\n  font-size: 14px;\n}\n\n.nav-tabs.wizard a:hover {\n  color: #fff;\n  background-color: #2c3f4c;\n  border-color: #2c3f4c\n}\n\nspan.nmbr {\n  display: inline-block;\n  padding: 10px 0 0 0;\n  background: #ffffff;\n  width: 35px;\n  line-height: 100%;\n  height: 35px;\n  margin: auto;\n  border-radius: 50%;\n  font-weight: bold;\n  font-size: 16px;\n  color: #555;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n@media(min-width:992px) {\n  .nav-tabs.wizard li {\n    position: relative;\n    padding: 0;\n    margin: 4px 4px 4px 0;\n    width: 19.6%;\n    float: left;\n    text-align: center;\n  }\n  .nav-tabs.wizard li.active a {\n    padding-top: 15px;\n  }\n  .nav-tabs.wizard li::after,\n  .nav-tabs.wizard li>*::after {\n    content: '';\n    position: absolute;\n    top: 1px;\n    left: 100%;\n    height: 0;\n    width: 0;\n    border: 45px solid transparent;\n    border-right-width: 0;\n    /*border-left-width: 20px*/\n  }\n  .nav-tabs.wizard li::after {\n    z-index: 1;\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n    border-left-color: #fff;\n    margin: 0\n  }\n  .nav-tabs.wizard li>*::after {\n    z-index: 2;\n    border-left-color: inherit\n  }\n  .nav-tabs.wizard > li:nth-of-type(1) > a {\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n  }\n  .nav-tabs.wizard li:last-child a {\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n  .nav-tabs.wizard li:last-child {\n    margin-right: 0;\n  }\n  .nav-tabs.wizard li:last-child a:after,\n  .nav-tabs.wizard li:last-child:after {\n    content: \"\";\n    border: none;\n  }\n  span.nmbr {\n    display: block;\n  }\n}\n"

/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- multistep form -->\n<div class=\"main-panel\">\n  <nav class=\"navbar navbar-transparent navbar-absolute\" style=\"background-color: #FAFAFA\">\n    <div class=\"container-fluid\">\n      <!--<div class=\"navbar-minimize\">-->\n      <!--<button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\"-->\n      <!--style=\"background-color: grey\">-->\n      <!--<i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>-->\n      <!--<i class=\"material-icons visible-on-sidebar-mini\">view_list</i>-->\n      <!--</button>-->\n      <!--</div>-->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" style=\"color: grey\"> Lecturer with Subjects Enrollment </a>\n      </div>\n      <style>\n        @media (min-width: 992px) {\n          #sec1 {\n            width: 49%\n          }\n\n          #sec2 {\n            width: 50.5%\n          }\n        }\n      </style>\n      <ul class=\"nav nav-tabs wizard\" #wizardComp>\n        <li class=\"tab-color\" style=\"width: 49.7%;\"><a data-toggle=\"tab\" aria-expanded=\"false\"><span class=\"nmbr\">1</span> Lecturer Registration</a></li>\n        <!--<li style=\"width: 33%;\"><a data-toggle=\"tab\" aria-expanded=\"false\"><span class=\"nmbr\">2</span> Lecturer Registration</a></li>-->\n        <li style=\"width: 49.7%;\"><a data-toggle=\"tab\" aria-expanded=\"false\"><span class=\"nmbr\">2</span> Subjects Registration</a>\n        </li>\n      </ul>\n      <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer\" style=\"background-color: white;border-top: 1px solid #e7e7e7\">\n      <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n          Copyright &copy; {{getYear()}} - TeaBot , Liquid Fertilizer  /\n          Developed\n          by\n          Imalka Gunawardana\n        </p>\n      </div>\n    </footer>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LecturerSubjectsRegistrationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturerSubjectsRegistrationsComponent", function() { return LecturerSubjectsRegistrationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/material-dashboard98f3.js */ "./src/assets/js/material-dashboard98f3.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LecturerSubjectsRegistrationsComponent = /** @class */ (function () {
    function LecturerSubjectsRegistrationsComponent(renderer, router, datePipe, wizardColor) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.datePipe = datePipe;
        this.wizardColor = wizardColor;
        wizardColor.lecturerReg.subscribe(function (value) {
            _this.setElementsGreen(value);
        });
    }
    LecturerSubjectsRegistrationsComponent.prototype.ngOnInit = function () {
    };
    LecturerSubjectsRegistrationsComponent.prototype.setElementsGreen = function (j) {
        for (var i = 0; i < 2; i++) {
            this.renderer.removeClass(this.wizardComponent.nativeElement.children[i], 'tab-color');
            this.renderer.removeClass(this.wizardComponent.nativeElement.children[i], 'completed');
        }
        for (var i = 0; i <= j - 1; i++) {
            this.renderer.addClass(this.wizardComponent.nativeElement.children[i], 'completed');
        }
        this.renderer.addClass(this.wizardComponent.nativeElement.children[j], 'tab-color');
    };
    LecturerSubjectsRegistrationsComponent.prototype.getYear = function () {
        var latest_date = this.datePipe.transform(new Date(), 'yyyy');
        return latest_date;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wizardComp'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LecturerSubjectsRegistrationsComponent.prototype, "wizardComponent", void 0);
    LecturerSubjectsRegistrationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lecturer-subjects-registrations',
            template: __webpack_require__(/*! ./lecturer-subjects-registrations.component.html */ "./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.html"),
            styles: [__webpack_require__(/*! ./lecturer-subjects-registrations.component.css */ "./src/app/views/lecturer-subjects-registrations/lecturer-subjects-registrations.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_4__["WizardColorService"]])
    ], LecturerSubjectsRegistrationsComponent);
    return LecturerSubjectsRegistrationsComponent;
}());



/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n\n      <div class=\"card-content\">\n        <h4 class=\"card-title\" style=\"color: #4e4e4e;font-size: 17px\">SUBJECTS REGISTRATION DETAILS</h4>\n        <div class=\"toolbar\">\n          <!--        Here you can write extra buttons/actions for the toolbar              -->\n        </div>\n        <div class=\"material-datatables\">\n          <table class=\"table table-striped table-no-bordered table-hover datatables\" cellspacing=\"0\"\n                 width=\"100%\" style=\"width:100%\">\n            <thead>\n            <tr>\n              <th>Subject Code</th>\n              <th>Subject Name</th>\n              <th>Course</th>\n              <th>Lecturer</th>\n              <th class=\"disabled-sorting text-right\">Remove</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n              <th>Subject Code</th>\n              <th>Subject Name</th>\n              <th>Course</th>\n              <th>Lecturer</th>\n              <th class=\"text-right\">Remove</th>\n            </tr>\n            </tfoot>\n            <tbody>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px\">\n              <td>M1</td>\n              <td>Mathematics</td>\n              <td>BSc</td>\n              <td>K.Silva</td>\n              <td class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px\">\n              <td>CS1</td>\n              <td>Computer Science</td>\n              <td>BSc</td>\n              <td>N.Silva</td>\n              <td class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div><!-- end content-->\n      <div class=\"row\">\n        <div class=\"col-sm-8\"></div>\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-2\">\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\" (click)=\"previousPage()\">Previous</button>\n          </div>\n        </div>\n      </div>\n    </div><!--  end card  -->\n  </div>\n</div> <!-- end col-md-12 -->\n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <form class=\"form-horizontal\">\n        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n          <h4 class=\"card-title\" style=\"font-weight: lighter\">SUBJECT REGISTRATION</h4>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Faculty</label>\n            <div class=\"col-sm-7\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                <option disabled selected>Select Faculty</option>\n                <option value=\"2\">Foobar</option>\n                <option value=\"3\">Is great</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Faculty</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Department</label>\n            <div class=\"col-sm-7\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                <option disabled selected>Select Department</option>\n                <option value=\"2\">Foobar</option>\n                <option value=\"3\">Is great</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Department</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Lecturer</label>\n            <div class=\"col-sm-7\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                <option disabled selected>Select Lecturer</option>\n                <option value=\"2\">Foobar</option>\n                <option value=\"3\">Is great</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Lecturer</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Semester</label>\n            <div class=\"col-sm-7\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                <option disabled selected>Select Semester</option>\n                <option value=\"2\">Foobar</option>\n                <option value=\"3\">Is great</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Semester</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Course</label>\n            <div class=\"col-sm-7\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                <option disabled selected>Select Course</option>\n                <option value=\"2\">Foobar</option>\n                <option value=\"3\">Is great</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Course</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Subject Code</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Subject Name</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled value=\"{{studentId}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Credits</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled value=\"{{studentId}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Fee</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled value=\"{{studentId}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\" style=\"height: 50px\"></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" routerLink=\"/main/student-reg/student-details\" routerLinkActive=\"active\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"previousPage()\">Save / Update Subject</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SubjectsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsDetailsComponent", function() { return SubjectsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/data-tables.js */ "./src/assets/js/data-tables.js");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubjectsDetailsComponent = /** @class */ (function () {
    function SubjectsDetailsComponent(router, wizardColor) {
        this.router = router;
        this.wizardColor = wizardColor;
    }
    SubjectsDetailsComponent.prototype.ngOnInit = function () {
        loadDatatable();
    };
    SubjectsDetailsComponent.prototype.previousPage = function () {
        this.wizardColor.setLecturerWizardGreen(0);
        this.router.navigate(['/main/lecturers-subjects/lecturer-details']);
    };
    SubjectsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subjects-details',
            template: __webpack_require__(/*! ./subjects-details.component.html */ "./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.html"),
            styles: [__webpack_require__(/*! ./subjects-details.component.css */ "./src/app/views/lecturer-subjects-registrations/subjects-details/subjects-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_3__["WizardColorService"]])
    ], SubjectsDetailsComponent);
    return SubjectsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/login-screen/email-verify/email-verify.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/views/login-screen/email-verify/email-verify.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login-screen/email-verify/email-verify.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/login-screen/email-verify/email-verify.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n    <div class=\"card card-login card-hidden\" style=\"background-color: rgba(0,0,0,0.6);border: none\">\n      <div class=\"card-header text-center\" data-background-color=\"rose\">\n        <h4 class=\"card-title\">Email Verification</h4>\n        <div class=\"social-line\">\n          <a href=\"https://www.google.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\n            <i class=\"fa fa-google\"></i>\n          </a>\n          <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n            <i class=\"fa fa-youtube-play\"></i>\n          </a>\n          <a href=\"https://www.dropbox.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\n            <i class=\"fa fa-dropbox\"></i>\n          </a>\n        </div>\n      </div>\n      <!--<p class=\"category text-center\">-->\n      <!--Or Be Classical-->\n      <!--</p>-->\n      <div class=\"card-content\">\n        <form #frmLogin=\"ngForm\" action=\"\" method=\"post\" (ngSubmit)=\"sendEmail()\">\n          <!--<div class=\"input-group\">-->\n          <!--<span class=\"input-group-addon\">-->\n          <!--<i class=\"material-icons\">face</i>-->\n          <!--</span>-->\n\n          <!--<div class=\"form-group label-floating\">-->\n          <!--<label class=\"control-label\">Username</label>-->\n          <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"email.userName\" name=\"txtUserid\" style=\"color: white\"-->\n          <!--(keyup)=\"setEmail()\">-->\n          <!--</div>-->\n          <!--</div>-->\n          <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">email</i>\n        </span>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Email</label>\n              <input type=\"text\" class=\"form-control\" name=\"txtEmail\" style=\"color: white\" [(ngModel)]=\"email.emailAddress\">\n            </div>\n          </div>\n          <div class=\"footer text-center\">\n            <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"color: #e9b500\">\n              Send\n            </button>\n          </div>\n          <div *ngIf=\"failed\" class=\"alert alert-danger\"\n               style=\"margin-left: 10px;margin-right: 10px;text-align: center;color: #870c00;font-weight: bold;width: 100%\">\n            {{afterEmail.reply}}\n          </div>\n        </form>\n        <div *ngIf=\"success\">\n          <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">subject</i>\n        </span>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Verification Code</label>\n              <input type=\"text\" class=\"form-control\" #verNumber name=\"txtCode\" style=\"color: white\">\n            </div>\n          </div>\n          <div class=\"footer text-center\">\n            <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"color: #e9b500\"\n                    (click)=\"verifyNumber()\">\n              Submit\n            </button>\n          </div>\n          <div *ngIf=\"notVerified\" class=\"alert alert-danger\"\n               style=\"margin-left: 10px;margin-right: 10px;text-align: center;color: #870c00;font-weight: bold;width: 100%;\">\n            Invalid verification code\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\" style=\"color: rgba(255,255,255,0.71);font-size: 12px;text-align: center;margin-top: 50px\">(Note:- System will send a verification code to your email, check your email and enter the verification code to reset your password)</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login-screen/email-verify/email-verify.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/login-screen/email-verify/email-verify.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/login/login.js */ "./src/assets/js/login/login.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dtos_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dtos/email */ "./src/app/dtos/email.ts");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailVerifyComponent = /** @class */ (function () {
    function EmailVerifyComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.email = new _dtos_email__WEBPACK_IMPORTED_MODULE_2__["Email"]();
        this.success = false;
        this.failed = false;
        this.afterEmail = new _dtos_email__WEBPACK_IMPORTED_MODULE_2__["Email"]();
        this.notVerified = false;
    }
    EmailVerifyComponent.prototype.ngOnInit = function () {
        loadLogin();
    };
    EmailVerifyComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.email.emailAddress != null) {
            this.email.verNumber = Math.floor((Math.random() * 900000) + 100000);
            this.loginService.sendEmail(this.email).subscribe(function (result) {
                _this.afterEmail = result;
                if (_this.afterEmail.reply == "Email has been sent successfully") {
                    // localStorage.setItem("userName", this.email.userName);
                    localStorage.setItem("verified", "true");
                    _this.failed = false;
                    _this.success = true;
                }
                else {
                    localStorage.setItem("verified", "false");
                    _this.failed = true;
                    _this.success = false;
                }
            });
            // loadLogin();
        }
    };
    EmailVerifyComponent.prototype.verifyNumber = function () {
        if (this.email.verNumber == this.verNumber.nativeElement.value) {
            this.router.navigate(['/root/log-screen/password-reset']);
        }
        else {
            this.notVerified = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('verNumber'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EmailVerifyComponent.prototype, "verNumber", void 0);
    EmailVerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-verify',
            template: __webpack_require__(/*! ./email-verify.component.html */ "./src/app/views/login-screen/email-verify/email-verify.component.html"),
            styles: [__webpack_require__(/*! ./email-verify.component.css */ "./src/app/views/login-screen/email-verify/email-verify.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EmailVerifyComponent);
    return EmailVerifyComponent;
}());



/***/ }),

/***/ "./src/app/views/login-screen/lock/lock.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/login-screen/lock/lock.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login-screen/lock/lock.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/login-screen/lock/lock.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n    <form #frmLogin=\"ngForm\" action=\"\" method=\"post\" (ngSubmit)=\"getLogin()\">\n      <div class=\"card card-profile card-hidden\" style=\"background-color: rgba(0,0,0,0.6);border: none\">\n        <div class=\"card-avatar\">\n          <a href=\"#pablo\">\n            <img class=\"avatar\" [src]=\"imagePath\">\n          </a>\n        </div>\n        <!--<p class=\"category text-center\">-->\n        <!--Or Be Classical-->\n        <!--</p>-->\n        <div class=\"card-content\" style=\"padding-right: 20px;margin-top: 50px\">\n          <h4 class=\"card-title\" style=\"color: white\">{{userName}}</h4>\n          <div class=\"input-group\">\n        <span class=\"input-group-addon\" style=\"padding-left: 0px\">\n          <i class=\"material-icons\">lock_outline</i>\n        </span>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Password</label>\n              <input type=\"{{passwordVisibility?'text':'password'}}\" class=\"form-control\" [(ngModel)]=\"user.userPassword\" name=\"txtPassword\"\n                     style=\"color: white\">\n            </div>\n            <span class=\"input-group-addon\" style=\"cursor: pointer\" (click)=\"passwordVisible()\">\n          <i class=\"material-icons\">visibility</i>\n        </span>\n          </div>\n        </div>\n        <div class=\"footer text-center\">\n          <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"color: #e9b500\">\n            Unlock\n          </button>\n        </div>\n        <div *ngIf=\"failed\" class=\"alert alert-danger\"\n             style=\"margin-left: 10px;margin-right: 10px;text-align: center;color: #870c00;font-weight: bold\">\n          Incorrect password\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\" style=\"color: rgba(255,255,255,0.71);font-size: 12px;text-align: center;margin-top: 450px\">(Note:- System will automatically select the proper account type based on username and password)</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login-screen/lock/lock.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/login-screen/lock/lock.component.ts ***!
  \***********************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/login/login.js */ "./src/assets/js/login/login.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dtos_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dtos/user */ "./src/app/dtos/user.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LockComponent = /** @class */ (function () {
    function LockComponent(datePipe, loginService, router) {
        this.datePipe = datePipe;
        this.loginService = loginService;
        this.router = router;
        this.user = new _dtos_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.failed = false;
        this.userName = localStorage.getItem('userName');
        this.path = localStorage.getItem('image');
        this.passwordVisibility = false;
    }
    LockComponent.prototype.ngOnInit = function () {
        loadLogin();
        this.setProfileImage();
    };
    LockComponent.prototype.getLogin = function () {
        var _this = this;
        this.user.userID = localStorage.getItem('userId');
        this.loginService.getLogin(this.user).subscribe(function (result) {
            _this.user = result;
            if (_this.user.authenticate == true) {
                _this.failed = false;
                localStorage.setItem("login", "logged");
                localStorage.setItem("accountType", _this.user.accountType);
                _this.router.navigate(['/root/dashboard']);
            }
            else {
                _this.failed = true;
            }
        });
    };
    LockComponent.prototype.setProfileImage = function () {
        if (localStorage.getItem('profile-image') != "images/No") {
            this.imagePath = this.loginService.getProfileImage();
        }
        else {
            this.imagePath = "../../../../assets/img/faces/User.png";
        }
    };
    LockComponent.prototype.passwordVisible = function () {
        if (this.passwordVisibility == false) {
            this.passwordVisibility = true;
        }
        else {
            this.passwordVisibility = false;
        }
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/views/login-screen/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.css */ "./src/app/views/login-screen/lock/lock.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/views/login-screen/lock/lock.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/login-screen/lock/lock.guard.ts ***!
  \*******************************************************/
/*! exports provided: LockGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockGuard", function() { return LockGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockGuard = /** @class */ (function () {
    function LockGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ;
    LockGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('accountType') != "locked") {
            this.router.navigate(['/root/dashboard']);
            return false;
        }
        return true;
    };
    LockGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LockGuard);
    return LockGuard;
}());



/***/ }),

/***/ "./src/app/views/login-screen/login-screen.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/login-screen/login-screen.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login-screen/login-screen.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/login-screen/login-screen.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"off-canvas-sidebar\">\n  <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n    <!--<nav class=\"navbar navbar-transparent navbar-absolute\" style=\"background-color: #FAFAFA\">-->\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n        <a class=\"navbar-brand\">TeaBot</a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/root/dashboard\">\n              <i class=\"material-icons\">dashboard</i>\n              Dashboard\n            </a>\n          </li>\n          <!--<li routerLinkActive=\"active\">-->\n          <!--<a routerLink=\"/log-screen/login\">-->\n          <!--<i class=\"material-icons\">fingerprint</i>-->\n          <!--Login-->\n          <!--</a>-->\n          <!--</li>-->\n          <!--<li routerLinkActive=\"active\">-->\n          <!--<a routerLink=\"/log-screen/lock\">-->\n          <!--<i class=\"material-icons\">lock_open</i>-->\n          <!--Lock-->\n          <!--</a>-->\n          <!--</li>-->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page {{getPage()}}-page\" filter-color=\"black\"\n         data-image=\"assets/img/dashboard/image-6.png\" style=\"background-size: cover;\">\n      <div class=\"content\">\n        <div class=\"container\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n\n      <footer class=\"footer\" style=\"padding: 0px\">\n        <div class=\"container\" style=\"margin-right: 0px\">\n          <p class=\"copyright pull-right\">\n            Copyright &copy; {{getYear()}} - TeaBot , Liquid Fertilizer  /\n            Developed\n            by\n            Imalka Gunawardana\n          </p>\n        </div>\n      </footer>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login-screen/login-screen.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/login-screen/login-screen.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginScreenComponent", function() { return LoginScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/login/login.js */ "./src/assets/js/login/login.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/material-dashboard98f3.js */ "./src/assets/js/material-dashboard98f3.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginScreenComponent = /** @class */ (function () {
    function LoginScreenComponent(datePipe, router) {
        var _this = this;
        this.datePipe = datePipe;
        this.router = router;
        router.events.subscribe(function () {
            _this.getPage();
        });
    }
    LoginScreenComponent.prototype.ngOnInit = function () {
        loadMaterials();
        loadLogin();
    };
    LoginScreenComponent.prototype.getYear = function () {
        var latest_date = this.datePipe.transform(new Date(), 'yyyy');
        return latest_date;
    };
    LoginScreenComponent.prototype.getPage = function () {
        if (this.router.url.includes('login') || this.router.url.includes('email-verify') || this.router.url.includes('password-reset')) {
            return 'login';
        }
        else if (this.router.url.includes('lock')) {
            return 'lock';
        }
    };
    LoginScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-screen',
            template: __webpack_require__(/*! ./login-screen.component.html */ "./src/app/views/login-screen/login-screen.component.html"),
            styles: [__webpack_require__(/*! ./login-screen.component.css */ "./src/app/views/login-screen/login-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginScreenComponent);
    return LoginScreenComponent;
}());



/***/ }),

/***/ "./src/app/views/login-screen/login-screen.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/login-screen/login-screen.guard.ts ***!
  \**********************************************************/
/*! exports provided: LoginScreenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginScreenGuard", function() { return LoginScreenGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginScreenGuard = /** @class */ (function () {
    function LoginScreenGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ;
    LoginScreenGuard.prototype.canActivate = function (next, state) {
        if (this.loginService.isAuthenticated()) {
            this.router.navigate(['/root/dashboard']);
            return false;
        }
        return true;
    };
    LoginScreenGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginScreenGuard);
    return LoginScreenGuard;
}());



/***/ }),

/***/ "./src/app/views/login-screen/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/login-screen/login/login.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login-screen/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/login-screen/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n    <form #frmLogin=\"ngForm\" action=\"\" method=\"post\" (ngSubmit)=\"getLogin()\">\n      <div class=\"card card-login card-hidden\" style=\"background-color: rgba(0,0,0,0.6);border: none\">\n        <div class=\"card-header text-center\" data-background-color=\"rose\">\n          <h4 class=\"card-title\">Login</h4>\n          <div class=\"social-line\">\n            <a href=\"https://www.google.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\n              <i class=\"fa fa-google\"></i>\n            </a>\n            <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n              <i class=\"fa fa-youtube-play\"></i>\n            </a>\n            <a href=\"https://www.dropbox.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\n              <i class=\"fa fa-dropbox\"></i>\n            </a>\n          </div>\n        </div>\n        <!--<p class=\"category text-center\">-->\n        <!--Or Be Classical-->\n        <!--</p>-->\n        <div class=\"card-content\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n                <i class=\"material-icons\">account_circle</i>\n             </span>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">I'm a/an</label>\n              <select class=\"selectpicker\" data-style=\"select-with-transition\" [(ngModel)]=\"user.accountType\" name=\"txtType\" style=\"color: white\">\n                <option>admin</option>\n                <option>student</option>\n                <option>lecturer</option>\n                <option>demonstrator</option>\n              </select>\n            </div>\n            <!--<select class=\"selectpicker\" data-style=\"select-with-transition\" multiple title=\"Choose City\" data-size=\"7\">-->\n          </div>\n\n          <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">face</i>\n        </span>\n\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Email or ID</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.userID\" name=\"txtUserid\" style=\"color: white\">\n            </div>\n          </div>\n\n          <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">lock_outline</i>\n        </span>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Password</label>\n              <input type=\"{{passwordVisibility?'text':'password'}}\" class=\"form-control\" [(ngModel)]=\"user.userPassword\" name=\"txtPassword\"\n                     style=\"color: white\">\n            </div>\n            <span class=\"input-group-addon\" style=\"cursor: pointer\" (click)=\"passwordVisible()\">\n          <i class=\"material-icons\">visibility</i>\n        </span>\n          </div>\n        </div>\n        <div class=\"footer text-center\">\n          <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"color: #e9b500\">\n            Sign In\n          </button>\n        </div>\n        <div *ngIf=\"failed\" class=\"alert alert-danger\"\n             style=\"margin-left: 10px;margin-right: 10px;text-align: center;color: #870c00;font-weight: bold\">\n          Incorrect username or password\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\" style=\"margin-left: 40px;color: #9e9e9e;font-size: 12px;cursor: pointer\"\n               routerLink=\"/log-screen/email-verify\">Forgot / Change Password?\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\" style=\"color: rgba(255,255,255,0.71);font-size: 12px;text-align: center;margin-top: 5px\">(Note:- System will automatically set the account type via the previous login)</div>\n  <div class=\"col-12\" style=\"color: rgba(255,255,255,0.71);font-size: 12px;text-align: center;margin-top: 5px\">(Note:- System can maintain different account types with a single username and password)</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login-screen/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/login-screen/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/js/login/login.js */ "./src/assets/js/login/login.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dtos_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dtos/user */ "./src/app/dtos/user.ts");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(datePipe, loginService, router) {
        this.datePipe = datePipe;
        this.loginService = loginService;
        this.router = router;
        this.user = new _dtos_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.loggedUser = new _dtos_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.failed = false;
        this.passwordVisibility = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        loadLogin();
        if (localStorage.getItem("accountTypeForLogin") != null) {
            this.user.accountType = localStorage.getItem("accountTypeForLogin");
        }
        else {
            this.user.accountType = "admin";
        }
    };
    LoginComponent.prototype.getLogin = function () {
        var _this = this;
        this.loginService.getLogin(this.user).subscribe(function (result) {
            _this.loggedUser = result;
            if (_this.loggedUser.authenticate == true) {
                _this.failed = false;
                localStorage.clear();
                localStorage.setItem("login", "logged");
                localStorage.setItem("userId", _this.loggedUser.userID);
                localStorage.setItem("userName", _this.loggedUser.userName);
                localStorage.setItem("accountType", _this.loggedUser.accountType);
                localStorage.setItem("accountTypeForLogin", _this.loggedUser.accountType);
                localStorage.setItem("profile-image", _this.loggedUser.profileImage);
                _this.router.navigate(['/root/dashboard']);
            }
            else {
                _this.failed = true;
            }
        });
    };
    LoginComponent.prototype.passwordVisible = function () {
        if (this.passwordVisibility == false) {
            this.passwordVisibility = true;
        }
        else {
            this.passwordVisibility = false;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login-screen/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login-screen/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/login-screen/login/login.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/login-screen/login/login.guard.ts ***!
  \*********************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ;
    LoginGuard.prototype.canActivate = function (next, state) {
        if (!this.loginService.isAuthenticated()) {
            this.router.navigate(['/root/dashboard']);
            return false;
        }
        return true;
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/views/login-screen/password-reset/password-reset.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/login-screen/password-reset/password-reset.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login-screen/password-reset/password-reset.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/login-screen/password-reset/password-reset.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n    <form #frmLogin=\"ngForm\" action=\"\" method=\"post\" (ngSubmit)=\"sendEmail()\">\n      <div class=\"card card-login card-hidden\" style=\"background-color: rgba(0,0,0,0.6);border: none\">\n        <div class=\"card-header text-center\" data-background-color=\"rose\">\n          <h4 class=\"card-title\">Password Reset</h4>\n          <div class=\"social-line\">\n            <a href=\"https://www.google.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\n              <i class=\"fa fa-google\"></i>\n            </a>\n            <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n              <i class=\"fa fa-youtube-play\"></i>\n            </a>\n            <a href=\"https://www.dropbox.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\n              <i class=\"fa fa-dropbox\"></i>\n            </a>\n          </div>\n        </div>\n        <!--<p class=\"category text-center\">-->\n        <!--Or Be Classical-->\n        <!--</p>-->\n        <div class=\"card-content\">\n\n          <div class=\"input-group\" style=\"margin-top: 40px\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">lock_outline</i>\n        </span>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"txtEmail\" style=\"color: white\">\n            </div>\n          </div>\n\n          <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">lock_outline</i>\n        </span>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Confirm Password</label>\n              <input type=\"password\" class=\"form-control\" #verNumber name=\"txtCode\" style=\"color: white\">\n            </div>\n          </div>\n          <div class=\"footer text-center\">\n            <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"color: #e9b500\">\n              Reset\n            </button>\n          </div>\n\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login-screen/password-reset/password-reset.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/login-screen/password-reset/password-reset.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/login/login.js */ "./src/assets/js/login/login.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent() {
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        loadLogin();
        localStorage.removeItem("verified");
    };
    PasswordResetComponent.prototype.sendEmail = function () {
    };
    PasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(/*! ./password-reset.component.html */ "./src/app/views/login-screen/password-reset/password-reset.component.html"),
            styles: [__webpack_require__(/*! ./password-reset.component.css */ "./src/app/views/login-screen/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/views/login-screen/password-reset/password-reset.guard.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/login-screen/password-reset/password-reset.guard.ts ***!
  \***************************************************************************/
/*! exports provided: PasswordResetGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetGuard", function() { return PasswordResetGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordResetGuard = /** @class */ (function () {
    function PasswordResetGuard(router) {
        this.router = router;
    }
    ;
    PasswordResetGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("verified") != "true") {
            this.router.navigate(['/root/log-screen/login']);
            return false;
        }
        return true;
    };
    PasswordResetGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PasswordResetGuard);
    return PasswordResetGuard;
}());



/***/ }),

/***/ "./src/app/views/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Google Tag Manager (noscript) -->\n<!--<noscript>-->\n  <!--<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6\"-->\n          <!--height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>-->\n<!--</noscript>-->\n<!-- End Google Tag Manager (noscript) -->\n\n<div class=\"wrapper\">\n\n  <!--<div class=\"sidebar\" data-active-color=\"rose\" data-background-color=\"black\" data-image=\"../assets/img/sidebar-3.jpg\">-->\n  <div class=\"sidebar\" data-active-color=\"rose\" data-background-color=\"black\"\n       data-image=\"assets/img/dashboard/catrin-johnson-486188-unsplash.jpg\"\n       style.display=\"{{isInLoginPage() && checkSize() ? 'none' : 'block'}}\">\n    <div class=\"sidebar-wrapper\">\n      <div class=\"user\" *ngIf=\"loginStatus()==1\">\n        <div class=\"info\">\n          <div class=\"photo\">\n            <!--<img src=\"http://localhost:8080/api/v1/user/file?path=images/12118677_925715314176721_1987028172390362012_n.jpg\"/>-->\n            <img [src]=\"imagePath\">\n          </div>\n          <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                    <span style=\"font-weight: bold;font-size: 13px;color: #e9b500\">\n                         {{userName}}\n                        <b class=\"caret\"></b>\n                    </span>\n          </a>\n          <div class=\"clearfix\"></div>\n          <div class=\"collapse\" id=\"collapseExample\">\n            <ul class=\"nav\" style=\"font-weight: lighter\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-user-circle\"></i>\n                  <span class=\"sidebar-normal\"> My Profile </span>\n                </a>\n              </li>\n              <li (click)=\"lock()\">\n                <a>\n                  <i class=\"material-icons\">lock_open</i>\n                  <span class=\"sidebar-normal\"> Lock </span>\n                </a>\n              </li>\n              <li (click)=\"logout()\">\n                <a>\n                  <i class=\"material-icons\">fingerprint</i>\n                  <span class=\"sidebar-normal\"> Sign Out </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"user\" *ngIf=\"loginStatus()==2\">\n        <div class=\"info\">\n          <div class=\"photo\">\n            <img [src]=\"imagePath\">\n          </div>\n          <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                    <span style=\"font-weight: bold;font-size: 13px;color: #e9b500\">\n                         {{userName}}\n                        <b class=\"caret\"></b>\n                    </span>\n          </a>\n          <div class=\"clearfix\"></div>\n          <div class=\"collapse\" id=\"collapseExample\">\n            <ul class=\"nav\" style=\"font-weight: lighter\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-user-circle\"></i>\n                  <span class=\"sidebar-normal\"> My Profile </span>\n                </a>\n              </li>\n              <li (click)=\"lock()\">\n                <a>\n                  <i class=\"material-icons\">lock_open</i>\n                  <span class=\"sidebar-normal\"> Lock </span>\n                </a>\n              </li>\n              <li (click)=\"logout()\">\n                <a>\n                  <i class=\"material-icons\">fingerprint</i>\n                  <span class=\"sidebar-normal\"> Sign Out </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"user\" *ngIf=\"loginStatus()==4\">\n        <div class=\"info\">\n          <div class=\"photo\">\n            <img src=\"assets/img/faces/lock.png\"/>\n            <i class=\"fa fa-power-off\"></i>\n          </div>\n          <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                    <span style=\"font-weight: bold;font-size: 13px;color: #e9b500\">\n                         Account is locked\n                        <b class=\"caret\"></b>\n                    </span>\n          </a>\n          <div class=\"clearfix\"></div>\n          <div class=\"collapse\" id=\"collapseExample\">\n            <ul class=\"nav\">\n              <li (click)=\"unlock()\">\n                <a>\n                  <i class=\"material-icons\">lock_open</i>\n                  <span class=\"sidebar-normal\"> Unlock </span>\n                </a>\n              </li>\n              <li (click)=\"logout()\">\n                <a>\n                  <i class=\"material-icons\">fingerprint</i>\n                  <span class=\"sidebar-normal\"> Sign Out </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"user\" *ngIf=\"loginStatus()==5\">\n        <div class=\"info\">\n          <div class=\"photo\">\n            <img src=\"assets/img/faces/shut-down-icon (1).png\"/>\n          </div>\n          <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                    <span style=\"font-weight: bold;font-size: 13px;color: #e9b500\">\n                         You are not signed in\n                        <b class=\"caret\"></b>\n                    </span>\n          </a>\n          <div class=\"clearfix\"></div>\n          <div class=\"collapse\" id=\"collapseExample\">\n            <ul class=\"nav\">\n              <li (click)=\"login()\">\n                <a>\n                  <i class=\"material-icons\">fingerprint</i>\n                  <span class=\"sidebar-normal\"> Sign In </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <ul class=\"nav\" *ngIf=\"loginStatus()==1\">\n\n        <li class=\"btnMain {{compoDashboardIsActive()}}\">\n          <a routerLink=\"/root/dashboard\">\n            <i class=\"material-icons\">dashboard</i>\n            <p> Dashboard </p>\n          </a>\n        </li>\n\n        <li>\n          <a data-toggle=\"collapse\" href=\"#pagesExamples\">\n            <i class=\"material-icons\">assignment_ind</i>\n            <p> Enrollments\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n\n          <div class=\"collapse\" id=\"pagesExamples\">\n            <ul class=\"nav\">\n              <li class=\"btnMain {{compoStudentIsActive()}}\">\n                <a routerLink=\"/root/main/student-reg/student-details\" (click)=\"refreshPage()\">\n                  <span class=\"sidebar-mini\"> SR </span>\n                  <span class=\"sidebar-normal\"> Student Registration </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"pages/timeline.html\">\n                  <span class=\"sidebar-mini\"> DR </span>\n                  <span class=\"sidebar-normal\"> Demonstrator Registration </span>\n                </a>\n              </li>\n              <li class=\"btnMain {{compoLecturerIsActive()}}\">\n                <a routerLink=\"/root/main/lecturers-subjects/lecturer-details\" href=\"#\">\n                  <span class=\"sidebar-mini\"> LSR </span>\n                  <span class=\"sidebar-normal\"> Lecturer & Subjects </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <li>\n          <a href=\"widgets.html\">\n            <i class=\"material-icons\">widgets</i>\n            <p> Widgets </p>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"charts.html\">\n            <i class=\"material-icons\">timeline</i>\n            <p> Charts </p>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"calendar.html\">\n            <i class=\"material-icons\">date_range</i>\n            <p> Calendar </p>\n          </a>\n        </li>\n      </ul>\n      <ul class=\"nav\" *ngIf=\"loginStatus()==2\">\n\n        <li class=\"btnMain {{compoDashboardIsActive()}}\">\n          <a routerLink=\"/root/dashboard\">\n            <i class=\"material-icons\">dashboard</i>\n            <p> Dashboard </p>\n          </a>\n        </li>\n\n        <li>\n          <a data-toggle=\"collapse\" href=\"#pagesEnrollments\">\n            <i class=\"material-icons\">assignment_ind</i>\n            <p> Enrollments\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n\n          <div class=\"collapse\" id=\"pagesEnrollments\">\n            <ul class=\"nav\">\n              <li class=\"btnMain {{compoStudentIsActive()}}\">\n                <a routerLink=\"/root/main/student-reg/student-details\" (click)=\"refreshPage()\">\n                  <span class=\"sidebar-mini\"> SR </span>\n                  <span class=\"sidebar-normal\"> Student Registration </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"pages/timeline.html\">\n                  <span class=\"sidebar-mini\"> DR </span>\n                  <span class=\"sidebar-normal\"> Demonstrator Registration </span>\n                </a>\n              </li>\n              <li class=\"btnMain {{compoLecturerIsActive()}}\">\n                <a routerLink=\"/root/main/lecturers-subjects/lecturer-details\" href=\"#\">\n                  <span class=\"sidebar-mini\"> LSR </span>\n                  <span class=\"sidebar-normal\"> Lecturer & Subjects </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <a routerLink=\"/root/main/subjects\">\n            <i class=\"material-icons\">assignment</i>\n            <p> Course Work\n              <!--<b class=\"caret\"></b>-->\n            </p>\n          </a>\n\n        </li>\n      </ul>\n      <ul class=\"nav\" *ngIf=\"loginStatus()==4\">\n\n        <li class=\"btnMain {{compoDashboardIsActive()}}\">\n          <a routerLink=\"/root/dashboard\">\n            <i class=\"material-icons\">dashboard</i>\n            <p> Dashboard </p>\n          </a>\n        </li>\n\n        <li>\n          <a data-toggle=\"collapse\" href=\"#componentsExamples\">\n            <i class=\"material-icons\">apps</i>\n            <p> Components\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n\n          <div class=\"collapse\" id=\"componentsExamples\">\n            <ul class=\"nav\">\n              <li>\n                <a href=\"components/buttons.html\">\n                  <span class=\"sidebar-mini\"> B </span>\n                  <span class=\"sidebar-normal\"> Buttons </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"components/grid.html\">\n                  <span class=\"sidebar-mini\"> GS </span>\n                  <span class=\"sidebar-normal\"> Grid System </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"components/panels.html\">\n                  <span class=\"sidebar-mini\"> P </span>\n                  <span class=\"sidebar-normal\"> Panels </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"components/sweet-alert.html\">\n                  <span class=\"sidebar-mini\"> SA </span>\n                  <span class=\"sidebar-normal\"> Sweet Alert </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"components/notifications.html\">\n                  <span class=\"sidebar-mini\"> N </span>\n                  <span class=\"sidebar-normal\"> Notifications </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"components/icons.html\">\n                  <span class=\"sidebar-mini\"> I </span>\n                  <span class=\"sidebar-normal\"> Icons </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"components/typography.html\">\n                  <span class=\"sidebar-mini\"> T </span>\n                  <span class=\"sidebar-normal\"> Typography </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <a data-toggle=\"collapse\" href=\"#formsExamples\">\n            <i class=\"material-icons\">content_paste</i>\n            <p> Forms\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n\n          <div class=\"collapse\" id=\"formsExamples\">\n            <ul class=\"nav\">\n              <li>\n                <a href=\"forms/regular.html\">\n                  <span class=\"sidebar-mini\"> RF </span>\n                  <span class=\"sidebar-normal\"> Regular Forms </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"forms/extended.html\">\n                  <span class=\"sidebar-mini\"> EF </span>\n                  <span class=\"sidebar-normal\"> Extended Forms </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"forms/validation.html\">\n                  <span class=\"sidebar-mini\"> VF </span>\n                  <span class=\"sidebar-normal\"> Validation Forms </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"forms/wizard.html\">\n                  <span class=\"sidebar-mini\"> W </span>\n                  <span class=\"sidebar-normal\"> Wizard </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <a data-toggle=\"collapse\" href=\"#tablesExamples\">\n            <i class=\"material-icons\">grid_on</i>\n            <p> Tables\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n\n          <div class=\"collapse\" id=\"tablesExamples\">\n            <ul class=\"nav\">\n              <li>\n                <a href=\"tables/regular.html\">\n                  <span class=\"sidebar-mini\"> RT </span>\n                  <span class=\"sidebar-normal\"> Regular Tables </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"tables/extended.html\">\n                  <span class=\"sidebar-mini\"> ET </span>\n                  <span class=\"sidebar-normal\"> Extended Tables </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"tables/datatables.net.html\">\n                  <span class=\"sidebar-mini\"> DT </span>\n                  <span class=\"sidebar-normal\"> DataTables.net </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <a data-toggle=\"collapse\" href=\"#mapsExamples\">\n            <i class=\"material-icons\">place</i>\n            <p> Maps\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n\n          <div class=\"collapse\" id=\"mapsExamples\">\n            <ul class=\"nav\">\n              <li>\n                <a href=\"maps/google.html\">\n                  <span class=\"sidebar-mini\"> GM </span>\n                  <span class=\"sidebar-normal\"> Google Maps </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"maps/fullscreen.html\">\n                  <span class=\"sidebar-mini\"> FSM </span>\n                  <span class=\"sidebar-normal\"> Full Screen Map </span>\n                </a>\n              </li>\n              <li>\n                <a href=\"maps/vector.html\">\n                  <span class=\"sidebar-mini\"> VM </span>\n                  <span class=\"sidebar-normal\"> Vector Map </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <a href=\"widgets.html\">\n            <i class=\"material-icons\">widgets</i>\n            <p> Widgets </p>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"charts.html\">\n            <i class=\"material-icons\">timeline</i>\n            <p> Charts </p>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"calendar.html\">\n            <i class=\"material-icons\">date_range</i>\n            <p> Calendar </p>\n          </a>\n        </li>\n\n      </ul>\n      <ul class=\"nav\" *ngIf=\"loginStatus()==5\">\n\n        <li class=\"btnMain {{compoDashboardIsActive()}}\">\n          <a routerLink=\"/root/dashboard\">\n            <i class=\"material-icons\">dashboard</i>\n            <p> Dashboard </p>\n          </a>\n        </li>\n\n        <li>\n          <a data-toggle=\"collapse\" href=\"#pagesExamples\">\n            <i class=\"material-icons\">assignment_ind</i>\n            <p> Enrollments\n              <b class=\"caret\"></b>\n            </p>\n          </a>\n\n          <div class=\"collapse\" id=\"pagesExamples\">\n            <ul class=\"nav\">\n              <li class=\"btnMain {{compoStudentIsActive()}}\">\n                <a routerLink=\"/root/main/student-reg/student-details\" (click)=\"refreshPage()\">\n                  <span class=\"sidebar-mini\"> SR </span>\n                  <span class=\"sidebar-normal\"> Student Registration </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <!--<li>-->\n          <!--<a href=\"widgets.html\">-->\n            <!--<i class=\"material-icons\">widgets</i>-->\n            <!--<p> Widgets </p>-->\n          <!--</a>-->\n        <!--</li>-->\n\n        <!--<li>-->\n          <!--<a href=\"charts.html\">-->\n            <!--<i class=\"material-icons\">timeline</i>-->\n            <!--<p> Charts </p>-->\n          <!--</a>-->\n        <!--</li>-->\n\n        <!--<li>-->\n          <!--<a href=\"calendar.html\">-->\n            <!--<i class=\"material-icons\">date_range</i>-->\n            <!--<p> Calendar </p>-->\n          <!--</a>-->\n        <!--</li>-->\n      </ul>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/material-dashboard98f3.js */ "./src/assets/js/material-dashboard98f3.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login-screen/login/login.service */ "./src/app/services/login-screen/login/login.service.ts");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
/* harmony import */ var _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/common/socket/socket.service */ "./src/app/services/common/socket/socket.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainComponent = /** @class */ (function () {
    function MainComponent(renderer, router, ngZone, loginService, wizardColor, socketService) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.ngZone = ngZone;
        this.loginService = loginService;
        this.wizardColor = wizardColor;
        this.socketService = socketService;
        this.userName = localStorage.getItem('userName');
        this.path = localStorage.getItem('image');
        this.router.events.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () { return window.scrollTo(0, 0); });
        router.events.subscribe(function () {
            _this.isInLoginPage();
        });
        window.onresize = function (e) {
            _this.ngZone.run(function (w) {
                _this.checkSize();
            });
        };
        loadMaterials();
    }
    MainComponent.prototype.ngOnInit = function () {
        this.setProfileImage();
    };
    MainComponent.prototype.compoDashboardIsActive = function () {
        if (this.router.isActive('/root/main/dashboard', false)) {
            return 'active';
        }
        return '';
    };
    MainComponent.prototype.compoStudentIsActive = function () {
        if (this.router.isActive('/root/main/student-reg', false)) {
            return 'active';
        }
        return '';
    };
    MainComponent.prototype.compoLecturerIsActive = function () {
        if (this.router.isActive('/root/main/lecturers-subjects', false)) {
            return 'active';
        }
        return '';
    };
    MainComponent.prototype.loginStatus = function () {
        return _classes_login_status__WEBPACK_IMPORTED_MODULE_3__["LoginStatus"].getLoginStatus();
    };
    MainComponent.prototype.login = function () {
        this.router.navigate(['/root/log-screen/login']);
    };
    MainComponent.prototype.unlock = function () {
        this.router.navigate(['/root/log-screen/lock']);
    };
    MainComponent.prototype.logout = function () {
        var accType = localStorage.getItem("accountTypeForLogin");
        localStorage.clear();
        localStorage.setItem("accountTypeForLogin", accType);
        this.router.navigate(['/root/log-screen/login']);
    };
    MainComponent.prototype.lock = function () {
        localStorage.removeItem('login');
        localStorage.setItem('accountType', 'locked');
        this.router.navigate(['/root/log-screen/lock']);
    };
    MainComponent.prototype.isInLoginPage = function () {
        return this.router.url.includes('login') || this.router.url.includes('lock');
    };
    MainComponent.prototype.checkSize = function () {
        return window.innerWidth >= 991;
    };
    MainComponent.prototype.setProfileImage = function () {
        if (localStorage.getItem('profile-image') != "images/No") {
            this.imagePath = this.loginService.getProfileImage();
        }
        else {
            this.imagePath = "assets/img/faces/User.png";
        }
    };
    MainComponent.prototype.refreshPage = function () {
        this.wizardColor.setStudentWizardGreen(0);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/views/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services_login_screen_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_5__["WizardColorService"], _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/views/root/root.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/root/root.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/root/root.component.html":
/*!************************************************!*\
  !*** ./src/app/views/root/root.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/views/root/root.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/root/root.component.ts ***!
  \**********************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common/socket/socket.service */ "./src/app/services/common/socket/socket.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootComponent = /** @class */ (function () {
    function RootComponent(socketService, cookieService) {
        this.socketService = socketService;
        this.cookieService = cookieService;
        socketService.initSocket();
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/views/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/views/root/root.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/views/student-reg/semester-payments/semester-payments.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/views/student-reg/semester-payments/semester-payments.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-reg/semester-payments/semester-payments.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/student-reg/semester-payments/semester-payments.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loginStatus()!=5\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n\n      <div class=\"card-content\">\n        <h4 class=\"card-title\" style=\"color: #4e4e4e;font-size: 17px\">PAYMENT DETAILS</h4>\n        <div class=\"toolbar\">\n          <!--        Here you can write extra buttons/actions for the toolbar              -->\n        </div>\n        <div class=\"material-datatables\">\n          <table class=\"table table-striped table-no-bordered table-hover datatables\" cellspacing=\"0\"\n                 width=\"100%\" style=\"width:100%\">\n            <thead>\n            <tr>\n              <th>Payment ID</th>\n              <th>Payment Method</th>\n              <th>Total Fee</th>\n              <th>Paid</th>\n              <th>Date</th>\n              <th class=\"disabled-sorting text-right\" *ngIf=\"loginStatus()==1\">Remove</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n              <th>Payment ID</th>\n              <th>Payment Method</th>\n              <th>Total Fee</th>\n              <th>Paid</th>\n              <th>Date</th>\n              <th *ngIf=\"loginStatus()==1\" class=\"text-right\">Remove</th>\n            </tr>\n            <div style=\"padding-top: 20px;right: 0px;position: absolute\">\n              <pagination-controls class=\"my-pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n            </tfoot>\n            <tbody>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px;cursor: pointer\" *ngFor=\"let paymentData of payments | paginate: { itemsPerPage: 5, currentPage: p }\" (click)=\"selectPayment(paymentData)\"\n                [ngClass]=\"{'green':selectedRow==paymentData.payId}\">\n              <td>{{paymentData.payId}}</td>\n              <td>{{paymentData.payMethod}}</td>\n              <td>{{paymentData.totalFee}}</td>\n              <td>{{paymentData.paid}}</td>\n              <td>{{paymentData.date}}</td>\n              <td *ngIf=\"loginStatus()==1\" class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <style>\n            .green {\n              color: green;\n              font-weight: bold\n            }\n            .my-pagination /deep/ .ngx-pagination .current {\n              background: #e9b500;\n              border-radius: 100px;\n            }\n            .my-pagination /deep/ .ngx-pagination {\n              font-size: 17px;\n            }\n          </style>\n        </div>\n      </div><!-- end content-->\n    </div><!--  end card  -->\n  </div>\n</div> <!-- end col-md-12 -->\n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"frmPayment.form.valid && savePayment()\" #frmPayment=\"ngForm\" action=\"\" method=\"post\">\n        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n          <h4 class=\"card-title\" style=\"font-weight: lighter\">PAYMENT</h4>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"card-footer\">\n                <div style=\"font-weight: bold\" *ngIf=\"loginStatus()!=5\">Note:- The system will automatically generate a new Payment ID and it will show on above table after you save your details.\n                </div>\n                <div style=\"font-weight: bold\" *ngIf=\"loginStatus()==5\">Note:- The browser is temporary saving your data until you do the payment. <br>Note:-\n                  Do the initial payment (total fee) to register to system. If not, system will rollback your data and will not register to the system.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"loginStatus()!=5\">\n            <label class=\"col-sm-2 label-on-left\">Payment ID</label>\n            <div class=\"col-sm-9\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled [(ngModel)]=\"paymentId\" name=\"paymentId\">\n              </div>\n            </div>\n            <div class=\"col-sm-1\">\n              <i class=\"fa fa-times fa-2x\" style=\"color: red;cursor: pointer\" (click)=\"resetId()\"></i>\n            </div>\n          </div>\n          <!--<div class=\"row\" *ngIf=\"loginStatus()!=5 && isActivePaymentStudent()\">-->\n            <!--<label class=\"col-sm-2 label-on-left\">Registration ID</label>-->\n            <!--<div class=\"col-sm-10\">-->\n              <!--<div class=\"form-group label-floating is-empty\">-->\n                <!--<label class=\"control-label\"></label>-->\n                <!--<input type=\"text\" class=\"form-control\" disabled required=\"true\" name=\"registrationId\" [(ngModel)]=\"registrationId\">-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"row\" *ngIf=\"loginStatus()!=5 && !isActivePaymentStudent()\">-->\n            <!--<label class=\"col-sm-2 label-on-left\">Semester Registration ID</label>-->\n            <!--<div class=\"col-sm-10\">-->\n              <!--<div class=\"form-group label-floating is-empty\">-->\n                <!--<label class=\"control-label\"></label>-->\n                <!--<input type=\"text\" class=\"form-control\" disabled required=\"true\">-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Student Name</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled value=\"{{studentName}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Total Fee</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled value=\"{{totalFee}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Paying Amount</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" name=\"txtAmount\" #txtAmount=\"ngModel\" [(ngModel)]=\"payingAmount\">\n                <span *ngIf=\"frmPayment.submitted && txtAmount.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtAmount.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Payment Method</label>\n            <div class=\"col-sm-10\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\"\n                      name=\"txtPaymentMethod\" [(ngModel)]=\"paymentType\">\n                <option>Card</option>\n                <option *ngIf=\"loginStatus()==1\">Cash</option>\n                <option *ngIf=\"loginStatus()==1\">Cheque</option>\n              </select>\n            </div>\n          </div>\n          <div *ngIf=\"paymentType=='Cash'\">\n          </div>\n          <div *ngIf=\"paymentType=='Card'\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Name On Card</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"nameOnCard\" #nameOnCard=\"ngModel\" [(ngModel)]=\"cardPayment.nameOnCard\">\n                  <span *ngIf=\"frmPayment.submitted && nameOnCard.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"nameOnCard.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Card Number</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"cardNo\" #cardNo=\"ngModel\" [(ngModel)]=\"cardPayment.cardNumber\">\n                  <span *ngIf=\"frmPayment.submitted && cardNo.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"cardNo.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Expiry Date</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" placeholder=\"MM/DD\" name=\"expDate\" #expDate=\"ngModel\" [(ngModel)]=\"cardPayment.expiryDate\">\n                  <span *ngIf=\"frmPayment.submitted && expDate.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"expDate.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Security Code</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"securityCode\" #securityCode=\"ngModel\" [(ngModel)]=\"cardPayment.securityCode\">\n                  <span *ngIf=\"frmPayment.submitted && securityCode.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"securityCode.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Zip/Postal Code</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"zipCode\" #zipCode=\"ngModel\" [(ngModel)]=\"cardPayment.zipCode\">\n                  <span *ngIf=\"frmPayment.submitted && zipCode.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"zipCode.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"paymentType=='Cheque'\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Cheque Number</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"txtChequeNo\" #txtChequeNo=\"ngModel\" [(ngModel)]=\"chequePayment.chequeNumber\">\n                  <span *ngIf=\"frmPayment.submitted && txtChequeNo.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtChequeNo.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Bank Name</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"txtBankName\" #txtBankName=\"ngModel\" [(ngModel)]=\"chequePayment.bankName\">\n                  <span *ngIf=\"frmPayment.submitted && txtBankName.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtBankName.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Branch</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"txtBranch\" #txtBranch=\"ngModel\" [(ngModel)]=\"chequePayment.branch\">\n                  <span *ngIf=\"frmPayment.submitted && txtBranch.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtBranch.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Account Number</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" name=\"txtAccNo\" #txtAccNo=\"ngModel\" [(ngModel)]=\"chequePayment.accNumber\">\n                  <span *ngIf=\"frmPayment.submitted && txtAccNo.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtAccNo.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\" style=\"height: 50px\"></div>\n          </div>\n          <div class=\"row\" style=\"padding-left: 50px\" *ngIf=\"loginStatus()!=5 && !isActivePaymentStudent()\">\n            <div class=\"col-sm-6\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"previousPage()\">Previous</button>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"card-footer\">\n                <button *ngIf=\"loginStatus()==1\" type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Submit / Update Payment</button>\n                <button *ngIf=\"loginStatus()!=1\" type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Submit Payment</button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"padding-left: 50px\" *ngIf=\"loginStatus()!=5 && isActivePaymentStudent()\">\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"previousPage()\">Previous</button>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button *ngIf=\"loginStatus()==1\" type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Submit / Update Payment</button>\n                <button *ngIf=\"loginStatus()!=1\" type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Submit Payment</button>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"nextPage()\">Next</button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"padding-left: 50px\" *ngIf=\"loginStatus()==5\">\n            <div class=\"col-sm-6\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"previousPage()\">Previous</button>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"card-footer\">\n                <button *ngIf=\"loginStatus()!=1\" type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Submit Payment</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-reg/semester-payments/semester-payments.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/student-reg/semester-payments/semester-payments.component.ts ***!
  \************************************************************************************/
/*! exports provided: SemesterPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemesterPaymentsComponent", function() { return SemesterPaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_degree_degree_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common/degree/degree.service */ "./src/app/services/common/degree/degree.service.ts");
/* harmony import */ var _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/student-reg/student-registration/student-registration.service */ "./src/app/services/student-reg/student-registration/student-registration.service.ts");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _dtos_payments_cash_payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dtos/payments/cash-payment */ "./src/app/dtos/payments/cash-payment.ts");
/* harmony import */ var _dtos_payments_card_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dtos/payments/card-payment */ "./src/app/dtos/payments/card-payment.ts");
/* harmony import */ var _dtos_payments_cheque_payment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dtos/payments/cheque-payment */ "./src/app/dtos/payments/cheque-payment.ts");
/* harmony import */ var _dtos_registration_registration_carrier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dtos/registration/registration-carrier */ "./src/app/dtos/registration/registration-carrier.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SemesterPaymentsComponent = /** @class */ (function () {
    function SemesterPaymentsComponent(router, degreeService, studentRegistrationService, wizardColor) {
        this.router = router;
        this.degreeService = degreeService;
        this.studentRegistrationService = studentRegistrationService;
        this.wizardColor = wizardColor;
        this.p = 1;
        this.selectedRow = "";
        this.cashPayment = new _dtos_payments_cash_payment__WEBPACK_IMPORTED_MODULE_6__["CashPayment"]();
        this.cardPayment = new _dtos_payments_card_payment__WEBPACK_IMPORTED_MODULE_7__["CardPayment"]();
        this.chequePayment = new _dtos_payments_cheque_payment__WEBPACK_IMPORTED_MODULE_8__["ChequePayment"]();
        this.registrationCarrier = new _dtos_registration_registration_carrier__WEBPACK_IMPORTED_MODULE_9__["RegistrationCarrier"]();
        this.payments = new Array();
    }
    SemesterPaymentsComponent.prototype.ngOnInit = function () {
        this.studentName = this.studentRegistrationService.getStudent().nameWithInitials;
        this.totalFee = this.studentRegistrationService.getFee();
        this.paymentType = "Card";
        if (this.router.isActive('/root/main/student-reg/student-payments', false)) {
            this.loadStudentPaymentData();
        }
        else if (this.router.isActive('/root/main/student-reg/semester-payments', false)) {
        }
    };
    SemesterPaymentsComponent.prototype.previousPage = function () {
        if (this.router.isActive('/root/main/student-reg/student-payments', false)) {
            this.wizardColor.setStudentWizardGreen(1);
            this.router.navigate(['/root/main/student-reg/student-registrations']);
        }
        if (this.router.isActive('/root/main/student-reg/semester-payments', false)) {
            this.wizardColor.setStudentWizardGreen(3);
            this.router.navigate(['/root/main/student-reg/semester-registrations']);
        }
    };
    SemesterPaymentsComponent.prototype.savePayment = function () {
        var _this = this;
        if (this.paymentType == 'Card') {
            this.cardPayment.totalFee = this.totalFee;
            this.cardPayment.amount = this.payingAmount;
        }
        else if (this.paymentType == 'Cash') {
            this.cashPayment.totalFee = this.totalFee;
            this.cashPayment.amount = this.payingAmount;
        }
        else if (this.paymentType == 'Cheque') {
            this.chequePayment.totalFee = this.totalFee;
            this.chequePayment.amount = this.payingAmount;
        }
        this.studentRegistrationService.setPayment(this.cashPayment, this.cardPayment, this.chequePayment, this.paymentType);
        this.studentRegistrationService.submitStudentRegistration().subscribe(function (email) {
            _this.studentRegistrationService.setEmailReply(email);
            if (_this.loginStatus() != 5) {
                _this.wizardColor.setStudentWizardGreen(5);
            }
            else {
                _this.wizardColor.setStudentWizardGreen(3);
            }
            _this.router.navigate(['/root/main/student-reg/student-summary']);
        });
    };
    SemesterPaymentsComponent.prototype.resetId = function () {
        this.paymentId = undefined;
        this.payingAmount = undefined;
        this.cashPayment = new _dtos_payments_cash_payment__WEBPACK_IMPORTED_MODULE_6__["CashPayment"]();
        this.cardPayment = new _dtos_payments_card_payment__WEBPACK_IMPORTED_MODULE_7__["CardPayment"]();
        this.chequePayment = new _dtos_payments_cheque_payment__WEBPACK_IMPORTED_MODULE_8__["ChequePayment"]();
    };
    SemesterPaymentsComponent.prototype.isActivePaymentStudent = function () {
        return this.router.isActive('/root/main/student-reg/student-payments', false);
    };
    SemesterPaymentsComponent.prototype.nextPage = function () {
        if (this.router.isActive('/root/main/student-reg/student-payments', false)) {
            this.wizardColor.setStudentWizardGreen(3);
            this.router.navigate(['/root/main/student-reg/semester-registrations']);
        }
        // } else if (this.router.isActive('/root/main/student-reg/semester-payments', false)) {
        //   this.wizardColor.setStudentWizardGreen(4);
        //   this.router.navigate(['/root/main/student-reg/student-summary']);
        // }
        // this.router.navigate(['/root/main/student-reg/student-summary']);
    };
    SemesterPaymentsComponent.prototype.loginStatus = function () {
        return _classes_login_status__WEBPACK_IMPORTED_MODULE_5__["LoginStatus"].getLoginStatus();
    };
    SemesterPaymentsComponent.prototype.loadStudentPaymentData = function () {
        var _this = this;
        this.studentRegistrationService.getPaymentData(this.studentRegistrationService.getRegistrationId()).subscribe(function (result) {
            _this.payments = result;
            loadDatatable();
        });
    };
    SemesterPaymentsComponent.prototype.selectPayment = function (tableData) {
        this.selectedRow = tableData.payId;
        // this.graduationType = tableData.degree.graduationType;
    };
    SemesterPaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-semester-payments',
            template: __webpack_require__(/*! ./semester-payments.component.html */ "./src/app/views/student-reg/semester-payments/semester-payments.component.html"),
            styles: [__webpack_require__(/*! ./semester-payments.component.css */ "./src/app/views/student-reg/semester-payments/semester-payments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_common_degree_degree_service__WEBPACK_IMPORTED_MODULE_2__["DegreeService"], _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_3__["StudentRegistrationService"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_4__["WizardColorService"]])
    ], SemesterPaymentsComponent);
    return SemesterPaymentsComponent;
}());

// this.studentRegistrationService.setPayment(this.amountToPay)
// if (this.studentRegistrationService.getGraduationType() == "Undergraduate") {
//   this.studentRegistrationService.saveUnderGraduateRegistration_FreePortal().subscribe(
//     (result) => {
//       this.studentRegistrationService.setEmailReply(result);
//       this.wizardColor.setStudentWizardGreen(3);
//       this.router.navigate(['/root/main/student-reg/student-summary']);
//     }
//   );
// } else {
//   this.studentRegistrationService.savePostGraduateRegistration_FreePortal().subscribe(
//     (result) => {
//       this.studentRegistrationService.setEmailReply(result);
//       this.wizardColor.setStudentWizardGreen(3);
//       this.router.navigate(['/root/main/student-reg/student-summary']);
//     }
//   );
// }


/***/ }),

/***/ "./src/app/views/student-reg/semester-registration/semester-registration.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/student-reg/semester-registration/semester-registration.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-reg/semester-registration/semester-registration.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/student-reg/semester-registration/semester-registration.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n\n      <div class=\"card-content\">\n        <h4 class=\"card-title\" style=\"color: #4e4e4e;font-size: 17px\">SEMESTER REGISTRATION DETAILS</h4>\n        <div class=\"toolbar\">\n          <!--        Here you can write extra buttons/actions for the toolbar              -->\n        </div>\n        <div class=\"material-datatables\">\n          <table class=\"table table-striped table-hover datatables\" cellspacing=\"0\"\n                 width=\"100%\" style=\"width:100%\">\n            <thead>\n            <tr>\n              <th>Semester Registration ID</th>\n              <th>Registration ID</th>\n              <th>Student Name</th>\n              <th>Date</th>\n              <th *ngIf=\"loginStatus()==1\"  class=\"disabled-sorting text-right\">Remove</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n              <th>Semester Registration ID</th>\n              <th>Registration ID</th>\n              <th>Student Name</th>\n              <th>Date</th>\n              <th *ngIf=\"loginStatus()==1\"  class=\"text-right\">Remove</th>\n            </tr>\n            <div style=\"padding-top: 20px;right: 0px;position: absolute\">\n              <pagination-controls class=\"my-pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n            </tfoot>\n            <tbody>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px\">\n              <td>S1</td>\n              <td>RS1</td>\n              <td>K.Perera</td>\n              <td>08-07-2017</td>\n              <td *ngIf=\"loginStatus()==1\"  class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <style>\n            .green {\n              color: green;\n              font-weight: bold\n            }\n            .my-pagination /deep/ .ngx-pagination .current {\n              background: #e9b500;\n              border-radius: 100px;\n            }\n            .my-pagination /deep/ .ngx-pagination {\n              font-size: 17px;\n            }\n          </style>\n        </div>\n      </div><!-- end content-->\n    </div><!--  end card  -->\n  </div>\n</div> <!-- end col-md-12 -->\n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n\n      <div class=\"card-content\">\n        <h4 class=\"card-title\" style=\"color: #4e4e4e;font-size: 17px\">SUBJECT DETAILS</h4>\n        <div class=\"toolbar\">\n          <!--        Here you can write extra buttons/actions for the toolbar              -->\n        </div>\n        <div class=\"material-datatables\">\n          <table class=\"table table-striped table-no-bordered table-hover datatables\" cellspacing=\"0\"\n                 width=\"100%\" style=\"width:100%\">\n            <thead>\n            <tr>\n              <th>Subject Code</th>\n              <th>Subject Name</th>\n              <th>Credits</th>\n              <th>Fee</th>\n              <th class=\"disabled-sorting text-right\">Remove</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n              <th>Subject Code</th>\n              <th>Subject Name</th>\n              <th>Credits</th>\n              <th>Fee</th>\n              <th class=\"text-right\">Remove</th>\n            </tr>\n            </tfoot>\n            <tbody>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px\">\n              <td>M1</td>\n              <td>Mathematics</td>\n              <td>2</td>\n              <td>20</td>\n              <td class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <div style=\"height: 50px\"></div>\n        <div class=\"row\">\n          <div class=\"form-horizontal\">\n            <div class=\"col-sm-2 label-on-left\">Total Credits</div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" disabled value=\"3\">\n              </div>\n            </div>\n            <div class=\"col-sm-2 label-on-left\">Total Fees</div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" disabled value=\"50\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div><!-- end content-->\n    </div><!--  end card  -->\n  </div>\n</div> <!-- end col-md-12 -->\n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"saveStudent()\">\n        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n          <h4 class=\"card-title\" style=\"font-weight: lighter\">SEMESTER REGISTRATION</h4>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"card-footer\">\n                <div style=\"font-weight: bold\">Note:- Semester Registration ID will be automatically generated by the system.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Semester Registration ID</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Registration ID</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"registration.registrationId\" name=\"txtRegId\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Student Name</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"registration.student.fullName\" name=\"txtStName\">\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"loginStatus()==1\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Faculty</label>\n              <div class=\"col-sm-7\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                  <option disabled selected>Select Faculty</option>\n                  <option value=\"2\">Foobar</option>\n                  <option value=\"3\">Is great</option>\n                </select>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"card-footer\">\n                  <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Faculty</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Department</label>\n              <div class=\"col-sm-7\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                  <option disabled selected>Select Department</option>\n                  <option value=\"2\">Foobar</option>\n                  <option value=\"3\">Is great</option>\n                </select>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"card-footer\">\n                  <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Department</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Semester</label>\n              <div class=\"col-sm-7\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                  <option>Semester 1</option>\n                  <option>Semester 2</option>\n                  <option>Semester 3</option>\n                  <option>Semester 4</option>\n                </select>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"card-footer\">\n                  <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Semester</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"loginStatus()!=1\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Degree</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled [(ngModel)]=\"registration.degree.degreeName\" name=\"txtFaculty\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Department</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                  <option disabled selected>Select Department</option>\n                  <option value=\"2\">Foobar</option>\n                  <option value=\"3\">Is great</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Semester</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                  <option>Semester 1</option>\n                  <option>Semester 2</option>\n                  <option>Semester 3</option>\n                  <option>Semester 4</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Subject Code</label>\n            <div class=\"col-sm-10\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n                <option disabled selected>Select Subject</option>\n                <option value=\"2\">Foobar</option>\n                <option value=\"3\">Is great</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Subject Name</label>\n            <div class=\"col-sm-7\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"email\" class=\"form-control\" disabled>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Add Subject</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\" style=\"height: 50px\"></div>\n          </div>\n          <div class=\"row\" style=\"padding-left: 50px\">\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"previousPage()\">Previous</button>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button *ngIf=\"loginStatus()==1\" type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Submit Semester Registration</button>\n                <button *ngIf=\"loginStatus()!=1\" type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\">Submit semester registration</button>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"nextPage()\">Next</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-reg/semester-registration/semester-registration.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/student-reg/semester-registration/semester-registration.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SemesterRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemesterRegistrationComponent", function() { return SemesterRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/js/data-tables.js */ "./src/assets/js/data-tables.js");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/student-reg/student-registration/student-registration.service */ "./src/app/services/student-reg/student-registration/student-registration.service.ts");
/* harmony import */ var _dtos_registration_registration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dtos/registration/registration */ "./src/app/dtos/registration/registration.ts");
/* harmony import */ var _dtos_student__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dtos/student */ "./src/app/dtos/student.ts");
/* harmony import */ var _dtos_faculty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dtos/faculty */ "./src/app/dtos/faculty.ts");
/* harmony import */ var _dtos_degree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dtos/degree */ "./src/app/dtos/degree.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SemesterRegistrationComponent = /** @class */ (function () {
    function SemesterRegistrationComponent(router, wizardColor, studentRegistrationService) {
        this.router = router;
        this.wizardColor = wizardColor;
        this.studentRegistrationService = studentRegistrationService;
        this.p = 1;
        this.registration = new _dtos_registration_registration__WEBPACK_IMPORTED_MODULE_6__["Registration"]();
        this.registration.student = new _dtos_student__WEBPACK_IMPORTED_MODULE_7__["Student"]();
        this.registration.degree = new _dtos_degree__WEBPACK_IMPORTED_MODULE_9__["Degree"]();
        this.registration.degree.faculty = new _dtos_faculty__WEBPACK_IMPORTED_MODULE_8__["Faculty"]();
    }
    SemesterRegistrationComponent.prototype.ngOnInit = function () {
        this.registration = this.studentRegistrationService.getRegistration();
        loadDatatable();
    };
    SemesterRegistrationComponent.prototype.previousPage = function () {
        this.wizardColor.setStudentWizardGreen(2);
        this.router.navigate(['/root/main/student-reg/student-payments']);
    };
    SemesterRegistrationComponent.prototype.nextPage = function () {
        this.wizardColor.setStudentWizardGreen(4);
        this.router.navigate(['/root/main/student-reg/semester-payments']);
    };
    SemesterRegistrationComponent.prototype.loadDepartments = function () {
    };
    /*Get login status*/
    SemesterRegistrationComponent.prototype.loginStatus = function () {
        return _classes_login_status__WEBPACK_IMPORTED_MODULE_3__["LoginStatus"].getLoginStatus();
    };
    SemesterRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-semester-registration',
            template: __webpack_require__(/*! ./semester-registration.component.html */ "./src/app/views/student-reg/semester-registration/semester-registration.component.html"),
            styles: [__webpack_require__(/*! ./semester-registration.component.css */ "./src/app/views/student-reg/semester-registration/semester-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_2__["WizardColorService"], _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_5__["StudentRegistrationService"]])
    ], SemesterRegistrationComponent);
    return SemesterRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/views/student-reg/student-details/student-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-details/student-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-reg/student-details/student-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-details/student-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loginStatus()==1\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n\n      <div class=\"card-content\">\n        <h4 class=\"card-title\" style=\"color: #4e4e4e;font-size: 17px\">STUDENT DETAILS</h4>\n        <div class=\"toolbar\">\n          <!--        Here you can write extra buttons/actions for the toolbar              -->\n        </div>\n        <div class=\"material-datatables\">\n          <table class=\"table table-striped table-no-bordered table-hover datatables\" cellspacing=\"0\"\n                 width=\"100%\" style=\"width:100%\">\n            <thead>\n            <tr>\n              <th>Student ID</th>\n              <th>Name With Initials</th>\n              <th>Email</th>\n              <th class=\"disabled-sorting text-right\">Remove</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n              <th>Student ID</th>\n              <th>Name With Initials</th>\n              <th>Email</th>\n              <th class=\"text-right\">Remove</th>\n            </tr>\n            <div style=\"padding-top: 20px;right: 0px;position: absolute\">\n            <pagination-controls class=\"my-pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n            </tfoot>\n            <tbody>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px;cursor: pointer\"\n                *ngFor=\"let student of students | paginate: { itemsPerPage: 5, currentPage: p }\" (click)=\"selectStudent(student)\"\n                [ngClass]=\"{'green':selectedRow==student.studentID}\">\n              <td>{{student.studentID}}</td>\n              <td>{{student.nameWithInitials}}</td>\n              <td>{{student.email}}</td>\n              <td class=\"text-right\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <style>\n            .green {\n              color: green;\n              font-weight: bold\n            }\n            .my-pagination /deep/ .ngx-pagination .current {\n              background: #e9b500;\n              border-radius: 100px;\n            }\n            .my-pagination /deep/ .ngx-pagination {\n              font-size: 17px;\n            }\n          </style>\n        </div>\n      </div><!-- end content-->\n    </div><!--  end card  -->\n  </div>\n</div> <!-- end col-md-12 -->\n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"frmStudent.form.valid && saveStudent()\" #frmStudent=\"ngForm\"\n            action=\"\" method=\"post\">\n        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n          <h4 class=\"card-title\" style=\"font-weight: lighter\">STUDENT DETAILS</h4>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"card-footer\">\n                <div style=\"font-weight: bold\" *ngIf=\"loginStatus()!=5\">Note:- If you are a new student, the system will\n                  automatically generate a new Student ID.\n                </div>\n                <div style=\"font-weight: bold\" *ngIf=\"loginStatus()==5\">Note:- The browser is temporary saving your data\n                  until you do the payment.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"loginStatus()!=5\">\n            <label class=\"col-sm-2 label-on-left\">Student ID</label>\n            <div class=\"col-sm-9\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" name=\"txtId\" disabled [(ngModel)]=\"student.studentID\">\n              </div>\n            </div>\n            <div class=\"col-sm-1\" *ngIf=\"loginStatus()==1\">\n              <i class=\"fa fa-times fa-2x\" style=\"color: red;cursor: pointer\" (click)=\"resetId()\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Title</label>\n            <div class=\"col-sm-10\">\n              <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\"\n                      [(ngModel)]=\"student.title\" name=\"txtStudentTitle\" (change)=\"saveToLocalStorage()\">\n                <option selected>Mr</option>\n                <option>Miss</option>\n                <option>Mrs</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Name with initials</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input id=\"txtStudentNameInit\" type=\"text\" class=\"form-control\" required=\"true\"\n                       #txtStudentNameInit=\"ngModel\"\n                       [(ngModel)]=\"student.nameWithInitials\"\n                       name=\"txtStudentNameInit\" (keyup)=\"saveToLocalStorage()\">\n                <span *ngIf=\"frmStudent.submitted && txtStudentNameInit.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtStudentNameInit.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Full Name</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"student.fullName\"\n                       name=\"txtStudentFullName\" (keyup)=\"saveToLocalStorage()\" #txtStudentFullName=\"ngModel\">\n                <span *ngIf=\"frmStudent.submitted && txtStudentFullName.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtStudentFullName.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Address</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"student.address\" name=\"txtAddress\"\n                       #txtAddress=\"ngModel\"\n                       (keyup)=\"saveToLocalStorage()\">\n                <span *ngIf=\"frmStudent.submitted && txtAddress.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtAddress.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Date of birth</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"date\" class=\"form-control\" required=\"true\" [(ngModel)]=\"student.dateOfBirth\"\n                       #txtDateOfBirth=\"ngModel\"\n                       name=\"txtDateOfBirth\" (change)=\"saveToLocalStorage()\">\n                <span *ngIf=\"frmStudent.submitted && txtDateOfBirth.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtDateOfBirth.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Email</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input email type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"student.email\" name=\"txtEmailAddress\"\n                       #txtEmailAddress=\"ngModel\"\n                       (keyup)=\"saveToLocalStorage()\">\n                <span *ngIf=\"frmStudent.submitted && txtEmailAddress.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtEmailAddress.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  <span *ngIf=\"txtEmailAddress.errors.email\" style=\"color: red;font-weight: bold\">Must be a valid email address</span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Telephone</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"student.telephone\"\n                       #txtTelephone=\"ngModel\"\n                       name=\"txtTelephone\" (keyup)=\"saveToLocalStorage()\" [pattern]=\"telephonePattern\">\n                <span *ngIf=\"frmStudent.submitted && txtTelephone.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtTelephone.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  <span *ngIf=\"txtTelephone.errors?.pattern\" style=\"color: red;font-weight: bold\">Invalid Telephone Number</span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Gender</label>\n            <div class=\"col-sm-10 checkbox-radios\">\n              <div class=\"radio\">\n                <label>\n                  <input type=\"radio\" ng-control=\"options\" name=\"optionsRadios\" [(ngModel)]=\"student.gender\"\n                         value=\"Male\" (click)=\"setGender('Male')\">\n                  Male\n                </label>\n              </div>\n              <div class=\"radio\">\n                <label>\n                  <input type=\"radio\" ng-control=\"options\" name=\"optionsRadios\" [(ngModel)]=\"student.gender\"\n                         value=\"Female\" (click)=\"setGender('Female')\">\n                  Female\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\" style=\"height: 50px\"></div>\n          </div>\n          <div class=\"row\" style=\"padding-left: 50px\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button *ngIf=\"loginStatus()==1\" type=\"submit\" style=\"left: 50%;transform: translateX(-50%)\"\n                        class=\"btn btn-fill\">Submit / Update Student\n                </button>\n                <button *ngIf=\"loginStatus()!=1\" type=\"submit\" style=\"left: 50%;transform: translateX(-50%)\"\n                        class=\"btn btn-fill\">Next to register\n                </button>\n              </div>\n            </div>\n            <div class=\"col-sm-4\" *ngIf=\"loginStatus()==1\">\n              <div class=\"card-footer\">\n                <button type=\"button\" style=\"left: 50%;transform: translateX(-50%)\" class=\"btn btn-fill\"\n                        (click)=\"nextPage()\" [disabled]=\"student.studentID==undefined\">Next\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      \n      <!--<form method=\"POST\" enctype=\"multipart/form-data\" modelAttribute=\"fileBucket\" (ngSubmit)=\"upload()\"-->\n      <!--#frmUp=\"ngForm\" action=\"\">-->\n      <!--<input type=\"file\" name=\"file\" multiple=\"multiple\" #fileInput>-->\n      <!--<div>{{size}}</div>-->\n      <!--<button type=\"submit\">Click</button>-->\n      <!--</form>-->\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-reg/student-details/student-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-details/student-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: StudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function() { return StudentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _dtos_student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dtos/student */ "./src/app/dtos/student.ts");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/js/data-tables.js */ "./src/assets/js/data-tables.js");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/js/material-dashboard98f3.js */ "./src/assets/js/material-dashboard98f3.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_reg_student_details_student_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/student-reg/student-details/student-details.service */ "./src/app/services/student-reg/student-details/student-details.service.ts");
/* harmony import */ var _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/student-reg/student-registration/student-registration.service */ "./src/app/services/student-reg/student-registration/student-registration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
/* harmony import */ var _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/common/socket/socket.service */ "./src/app/services/common/socket/socket.service.ts");
/* harmony import */ var _services_common_file_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/common/file/file.service */ "./src/app/services/common/file/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var StudentDetailsComponent = /** @class */ (function () {
    function StudentDetailsComponent(router, studentDetailsService, studentRegistrationService, s, http, fileService, wizardColor, so) {
        this.router = router;
        this.studentDetailsService = studentDetailsService;
        this.studentRegistrationService = studentRegistrationService;
        this.s = s;
        this.http = http;
        this.fileService = fileService;
        this.wizardColor = wizardColor;
        this.so = so;
        this.p = 1;
        this.telephonePattern = "^[0-9]{3}-[0-9]{7}$";
        this.loadDataTableCount = 0;
        this.selectedRow = "";
        this.student = new _dtos_student__WEBPACK_IMPORTED_MODULE_2__["Student"]();
        this.students = new Array();
        this.inputs = [false, false, false, false, false, false];
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
        if (this.loginStatus() == 2) {
            this.loadStudentData();
        }
        else {
            this.loadAllStudentData();
            this.setFromLocalStorage();
        }
    };
    /*Save student*/
    StudentDetailsComponent.prototype.saveStudent = function () {
        var _this = this;
        if (this.student.studentID != undefined && this.loginStatus() == 1) {
            this.studentRegistrationService.updateStudent(this.student).subscribe(function (result) {
                if (result) {
                    _this.loadAllStudentData();
                }
            });
        }
        else {
            this.nextPage();
        }
    };
    /*Go to next page and submit data*/
    StudentDetailsComponent.prototype.nextPage = function () {
        this.wizardColor.setStudentWizardGreen(1);
        this.studentRegistrationService.setStudent(this.student);
        this.router.navigate(['/root/main/student-reg/student-registrations']);
    };
    StudentDetailsComponent.prototype.resetId = function () {
        this.student = new _dtos_student__WEBPACK_IMPORTED_MODULE_2__["Student"]();
        this.student.title = "Mr";
        this.student.gender = "Male";
    };
    /*--------------------------------------------Get data from fields----------------------------------------------------*/
    /*Save to local storage*/
    StudentDetailsComponent.prototype.saveToLocalStorage = function () {
        var student_details = [this.student.title, this.student.nameWithInitials, this.student.fullName, this.student.address, this.student.dateOfBirth, this.student.email, this.student.telephone, this.student.gender];
        for (var i = 0; i < student_details.length; i++) {
            if (student_details[i] != null) {
                if (student_details[i] != "") {
                    localStorage.setItem('student-details' + i, student_details[i]);
                }
            }
        }
    };
    /*---------------------------------------------Set data to fields-----------------------------------------------------*/
    /*Set fields from local storage*/
    StudentDetailsComponent.prototype.setFromLocalStorage = function () {
        if (localStorage.getItem('student-details0') == null) {
            this.student.title = "Mr";
        }
        else {
            this.student.title = localStorage.getItem('student-details0');
        }
        this.student.nameWithInitials = localStorage.getItem('student-details1');
        this.student.fullName = localStorage.getItem('student-details2');
        this.student.address = localStorage.getItem('student-details3');
        this.student.dateOfBirth = localStorage.getItem('student-details4');
        this.student.email = localStorage.getItem('student-details5');
        this.student.telephone = localStorage.getItem('student-details6');
        if (localStorage.getItem('student-details7') == null) {
            this.student.gender = "Male";
        }
        else {
            this.student.gender = localStorage.getItem('student-details7');
        }
    };
    /*Set gender radio options*/
    StudentDetailsComponent.prototype.setGender = function (value) {
        this.student.gender = value;
        this.saveToLocalStorage();
    };
    /*Load data to fields (only in student login)*/
    StudentDetailsComponent.prototype.loadStudentData = function () {
        var _this = this;
        this.studentDetailsService.getStudentData(localStorage.getItem('userId')).subscribe(function (result) {
            _this.student = result;
        });
    };
    /*Load data to table (only in admin login)*/
    StudentDetailsComponent.prototype.loadAllStudentData = function () {
        var _this = this;
        this.studentRegistrationService.getAllStudentData().subscribe(function (result) {
            _this.students = result;
            if (_this.loadDataTableCount == 0) {
                loadDatatable();
            }
            _this.loadDataTableCount++;
        });
    };
    /*Load data to fields (when click on table)*/
    StudentDetailsComponent.prototype.selectStudent = function (tableData) {
        var _this = this;
        this.selectedRow = tableData.studentID;
        this.studentDetailsService.getStudentData(tableData.studentID).subscribe(function (result) {
            _this.student = result;
        });
    };
    /*--------------------------------------------Booleans----------------------------------------------------------------*/
    /*Get login status*/
    StudentDetailsComponent.prototype.loginStatus = function () {
        return _classes_login_status__WEBPACK_IMPORTED_MODULE_1__["LoginStatus"].getLoginStatus();
    };
    StudentDetailsComponent.prototype.upload = function () {
        var inputEl = this.inputEl.nativeElement;
        var fileCount = inputEl.files.length;
        var formData = new FormData();
        if (fileCount > 0) {
            formData.append('pathUrl', 'pdf');
            for (var i = 0; i < fileCount; i++) {
                formData.append('file', inputEl.files.item(i), inputEl.files.item(i).name);
            }
            // formData.append('file', inputEl.files.item(0), inputEl.files.item(0).name);
            this.size = (inputEl.files.item(0).size / 1024 / 1024).toFixed(2);
            this.fileService.uploadFile(formData);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StudentDetailsComponent.prototype, "inputEl", void 0);
    StudentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-details',
            template: __webpack_require__(/*! ./student-details.component.html */ "./src/app/views/student-reg/student-details/student-details.component.html"),
            styles: [__webpack_require__(/*! ./student-details.component.css */ "./src/app/views/student-reg/student-details/student-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_student_reg_student_details_student_details_service__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsService"], _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_7__["StudentRegistrationService"], _services_student_reg_student_details_student_details_service__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _services_common_file_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_9__["WizardColorService"], _services_common_socket_socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"]])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/student-reg/student-reg.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/student-reg/student-reg.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.nav-tabs.wizard {\n  background-color: transparent;\n  padding: 0;\n  width: 100%;\n  margin: 1em auto;\n  border-radius: .25em;\n  clear: both;\n  border-bottom: none;\n}\n\n.nav-tabs.wizard li {\n  width: 100%;\n  float: none;\n  margin-bottom: 3px;\n}\n\n.nav-tabs.wizard li>* {\n  position: relative;\n  padding: 1em .8em .8em 2.5em;\n  color: #999999 !important;\n  background-color: #dedede !important;\n  border-color: #dedede !important;\n}\n\n.nav-tabs.wizard li.completed>* {\n  color: #fff !important;\n  background-color: #1c9f09 !important;\n  border-color: #1c9f09 !important;\n  border-bottom: none !important;\n}\n\n/*.nav-tabs.wizard li.active>* {*/\n\n/*color: #fff !important;*/\n\n/*background-color: #1f2d3a !important;*/\n\n/*border-color: #1f2d3a !important;*/\n\n/*border-bottom: none !important;*/\n\n/*}*/\n\n.nav-tabs.wizard li.tab-color>*{\n  color: #fff !important;\n  background-color: #1f2d3a !important;\n  border-color: #1f2d3a !important;\n  border-bottom: none !important;\n}\n\n.nav-tabs.wizard li::after:last-child {\n  border: none;\n}\n\n.nav-tabs.wizard > li > a {\n  opacity: 1;\n  font-size: 14px;\n}\n\n.nav-tabs.wizard a:hover {\n  color: #fff;\n  background-color: #2c3f4c;\n  border-color: #2c3f4c\n}\n\nspan.nmbr {\n  display: inline-block;\n  padding: 10px 0 0 0;\n  background: #ffffff;\n  width: 35px;\n  line-height: 100%;\n  height: 35px;\n  margin: auto;\n  border-radius: 50%;\n  font-weight: bold;\n  font-size: 16px;\n  color: #555;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n@media(min-width:992px) {\n  .nav-tabs.wizard li {\n    position: relative;\n    padding: 0;\n    margin: 4px 4px 4px 0;\n    width: 19.6%;\n    float: left;\n    text-align: center;\n  }\n  .nav-tabs.wizard li.active a {\n    padding-top: 15px;\n  }\n  .nav-tabs.wizard li::after,\n  .nav-tabs.wizard li>*::after {\n    content: '';\n    position: absolute;\n    top: 1px;\n    left: 100%;\n    height: 0;\n    width: 0;\n    border: 45px solid transparent;\n    border-right-width: 0;\n    /*border-left-width: 20px*/\n  }\n  .nav-tabs.wizard li::after {\n    z-index: 1;\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n    border-left-color: #fff;\n    margin: 0\n  }\n  .nav-tabs.wizard li>*::after {\n    z-index: 2;\n    border-left-color: inherit\n  }\n  .nav-tabs.wizard > li:nth-of-type(1) > a {\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n  }\n  .nav-tabs.wizard li:last-child a {\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n  .nav-tabs.wizard li:last-child {\n    margin-right: 0;\n  }\n  .nav-tabs.wizard li:last-child a:after,\n  .nav-tabs.wizard li:last-child:after {\n    content: \"\";\n    border: none;\n  }\n  span.nmbr {\n    display: block;\n  }\n}\n"

/***/ }),

/***/ "./src/app/views/student-reg/student-reg.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/student-reg/student-reg.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- multistep form -->\n<div class=\"main-panel\">\n  <nav class=\"navbar navbar-transparent navbar-absolute\" style=\"background-color: #FAFAFA\">\n    <div class=\"container-fluid\">\n      <!--<div class=\"navbar-minimize\">-->\n      <!--<button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\"-->\n      <!--style=\"background-color: grey\">-->\n      <!--<i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>-->\n      <!--<i class=\"material-icons visible-on-sidebar-mini\">view_list</i>-->\n      <!--</button>-->\n      <!--</div>-->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" style=\"color: grey\"> Student Enrollment </a>\n      </div>\n\n      <ul id=\"wizardCompo\" class=\"nav nav-tabs wizard\" #wizardComp name=\"wizardCompo\" *ngIf=\"loginStatus()!=5\">\n        <li class=\"tab-color\" style=\"width: 16%\"><a data-toggle=\"tab\" aria-expanded=\"false\" style=\"font-size: 12px\"><span class=\"nmbr\">1</span> Student Details</a></li>\n        <li style=\"width: 16.6%\"><a data-toggle=\"tab\" aria-expanded=\"false\" style=\"font-size: 12px\"><span class=\"nmbr\">2</span> Student Registration</a></li>\n        <li style=\"width: 16%\"><a data-toggle=\"tab\" aria-expanded=\"false\" style=\"font-size: 12px\"><span class=\"nmbr\">3</span> Student Payments</a></li>\n        <li style=\"width: 16.6%\"><a data-toggle=\"tab\" aria-expanded=\"false\" style=\"font-size: 12px\"><span class=\"nmbr\">4</span> Semester Registration</a></li>\n        <li style=\"width: 16%\"><a data-toggle=\"tab\" aria-expanded=\"false\" style=\"font-size: 12px\"><span class=\"nmbr\">5</span> Semester Payments</a></li>\n        <li style=\"width: 16%\"><a data-toggle=\"tab\" aria-expanded=\"true\" style=\"font-size: 12px\"><span class=\"nmbr\">6</span> Finish</a></li>\n      </ul>\n      <ul id=\"wizardCompo\" class=\"nav nav-tabs wizard\" #wizardComp name=\"wizardCompo\" *ngIf=\"loginStatus()==5\">\n        <li class=\"tab-color\" style=\"width: 24.6%\"><a data-toggle=\"tab\" aria-expanded=\"false\"><span class=\"nmbr\">1</span> Student Details</a></li>\n        <li style=\"width: 24.6%\"><a data-toggle=\"tab\" aria-expanded=\"false\"><span class=\"nmbr\">2</span> Student Registration</a></li>\n        <li style=\"width: 24.6%\"><a data-toggle=\"tab\" aria-expanded=\"false\"><span class=\"nmbr\">3</span> Student Payments</a></li>\n        <li style=\"width: 24.6%\"><a data-toggle=\"tab\" aria-expanded=\"true\"><span class=\"nmbr\">4</span> Finish</a></li>\n      </ul>\n      <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer\" style=\"background-color: white;border-top: 1px solid #e7e7e7\">\n      <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n          Copyright &copy; {{getYear()}} - TeaBot , Liquid Fertilizer  /\n          Developed\n          by\n          Imalka Gunawardana\n        </p>\n      </div>\n    </footer>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-reg/student-reg.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/student-reg/student-reg.component.ts ***!
  \************************************************************/
/*! exports provided: StudentRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegComponent", function() { return StudentRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentRegComponent = /** @class */ (function () {
    function StudentRegComponent(renderer, router, datePipe, wizardColor) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.datePipe = datePipe;
        this.wizardColor = wizardColor;
        wizardColor.studentReg.subscribe(function (value) {
            _this.setElementsGreen(value);
        });
    }
    StudentRegComponent.prototype.ngOnInit = function () {
        this.accountType = _classes_login_status__WEBPACK_IMPORTED_MODULE_1__["LoginStatus"].getLoginStatus();
    };
    StudentRegComponent.prototype.setElementsGreen = function (j) {
        var number = 6;
        if (this.loginStatus() == 5) {
            number = 3;
        }
        for (var i = 0; i < number; i++) {
            this.renderer.removeClass(this.wizardComponent.nativeElement.children[i], 'tab-color');
            this.renderer.removeClass(this.wizardComponent.nativeElement.children[i], 'completed');
        }
        for (var i = 0; i <= j - 1; i++) {
            this.renderer.addClass(this.wizardComponent.nativeElement.children[i], 'completed');
        }
        this.renderer.addClass(this.wizardComponent.nativeElement.children[j], 'tab-color');
    };
    StudentRegComponent.prototype.getYear = function () {
        var latest_date = this.datePipe.transform(new Date(), 'yyyy');
        return latest_date;
    };
    StudentRegComponent.prototype.loginStatus = function () {
        return this.accountType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wizardComp'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StudentRegComponent.prototype, "wizardComponent", void 0);
    StudentRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-reg',
            template: __webpack_require__(/*! ./student-reg.component.html */ "./src/app/views/student-reg/student-reg.component.html"),
            styles: [__webpack_require__(/*! ./student-reg.component.css */ "./src/app/views/student-reg/student-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_4__["WizardColorService"]])
    ], StudentRegComponent);
    return StudentRegComponent;
}());



/***/ }),

/***/ "./src/app/views/student-reg/student-registrations/student-registrations.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/student-reg/student-registrations/student-registrations.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-reg/student-registrations/student-registrations.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/student-reg/student-registrations/student-registrations.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loginStatus()!=5\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n\n      <div class=\"card-content\">\n        <h4 class=\"card-title\" style=\"color: #4e4e4e;font-size: 17px\">STUDENT REGISTRATION DETAILS</h4>\n        <div class=\"toolbar\">\n          <!--        Here you can write extra buttons/actions for the toolbar              -->\n        </div>\n        <div class=\"material-datatables\">\n          <table class=\"table table-striped table-no-bordered table-hover datatables\" cellspacing=\"0\"\n                 width=\"100%\" style=\"width:100%\">\n            <thead>\n            <tr>\n              <th>Registration ID</th>\n              <th>Name With Initials</th>\n              <th>Degree</th>\n              <th>Date</th>\n              <th class=\"disabled-sorting text-right\" *ngIf=\"loginStatus()==1\">Remove</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n              <th>Registration ID</th>\n              <th>Name With Initials</th>\n              <th>Degree</th>\n              <th>Date</th>\n              <th class=\"text-right\" *ngIf=\"loginStatus()==1\">Remove</th>\n            </tr>\n            <div style=\"padding-top: 20px;right: 0px;position: absolute\">\n              <pagination-controls class=\"my-pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n            </tfoot>\n            <tbody>\n            <tr style=\"font-size: 16px;background-color: white;height: 50px;cursor: pointer\"\n                *ngFor=\"let registrationData of registrations | paginate: { itemsPerPage: 5, currentPage: p }\" (click)=\"selectRegistration(registrationData)\"\n                [ngClass]=\"{'green':selectedRow==registrationData.registrationId}\">\n              <td>{{registrationData.registrationId}}</td>\n              <td>{{registrationData.student.nameWithInitials}}</td>\n              <td>{{registrationData.degree.degreeName}}</td>\n              <td>{{registrationData.date}}</td>\n              <td class=\"text-right\" *ngIf=\"loginStatus()==1\">\n                <a href=\"#\" class=\"btn btn-simple btn-danger btn-icon remove\"><i\n                  class=\"material-icons\">close</i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <style>\n            .green {\n              color: green;\n              font-weight: bold\n            }\n            .my-pagination /deep/ .ngx-pagination .current {\n              background: #e9b500;\n              border-radius: 100px;\n            }\n            .my-pagination /deep/ .ngx-pagination {\n              font-size: 17px;\n            }\n          </style>\n        </div>\n      </div><!-- end content-->\n    </div><!--  end card  -->\n  </div>\n</div> <!-- end col-md-12 -->\n<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"frmRegistration.form.valid && saveRegistration()\"\n            #frmRegistration=\"ngForm\" action=\"\" method=\"post\">\n        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n          <h4 class=\"card-title\" style=\"font-weight: lighter\">STUDENT REGISTRATION</h4>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"card-footer\">\n                <div style=\"font-weight: bold\" *ngIf=\"loginStatus()!=5\">Note:- Registration ID will be automatically\n                  generated by the system.\n                </div>\n                <div style=\"font-weight: bold\" *ngIf=\"loginStatus()==5\">Note:- The browser is temporary saving your data\n                  until you do the payment.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"loginStatus()!=5\">\n            <label class=\"col-sm-2 label-on-left\">Registration ID</label>\n            <div class=\"col-sm-9\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled\n                       [(ngModel)]=\"registration.registrationId\" name=\"txtRegistrationId\">\n              </div>\n            </div>\n            <div class=\"col-sm-1\">\n              <i class=\"fa fa-times fa-2x\" style=\"color: red;cursor: pointer\" (click)=\"resetId()\"></i>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"loginStatus()!=5\">\n            <label class=\"col-sm-2 label-on-left\">Student ID</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled\n                       [(ngModel)]=\"registration.student.studentID\" name=\"txtStudentId\">\n              </div>\n            </div>\n          </div>\n\n          <!--Login Status-->\n          <div *ngIf=\"loginStatus()==1\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Faculty</label>\n              <div class=\"col-sm-7\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\"\n                        [(ngModel)]=\"registration.degree.faculty.facultyName\" name=\"txtFaculty\"\n                        (change)=\"loadCoursesViaFaculty(false)\">\n                  <option *ngFor=\"let faculty of faculties\">\n                    {{faculty.facultyName}}\n                  </option>\n                </select>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"card-footer\">\n                  <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Faculty</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Course(Degree)</label>\n              <div class=\"col-sm-7\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" #optionsCourse\n                        (change)=\"loadInputFields()\" [(ngModel)]=\"registration.degree.degreeName\" name=\"txtDegree\">\n                  <option *ngFor=\"let degree of degrees\">\n                    {{degree.degreeName}}\n                  </option>\n                </select>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"card-footer\">\n                  <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Course</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Intake</label>\n              <div class=\"col-sm-7\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\"\n                        [(ngModel)]=\"registration.intake.intakeMonth\" name=\"txtIntake\" (change)=\"saveToLocalStorage()\">\n                  <option *ngFor=\"let month of months\">\n                    {{month.intakeMonth}}\n                  </option>\n                </select>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"card-footer\">\n                  <button type=\"submit\" class=\"btn btn-fill\" style=\"width: 100%\">Search Via Intake</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"loginStatus()!=1\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Faculty</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\"\n                        [(ngModel)]=\"registration.degree.faculty.facultyName\" name=\"txtFaculty\"\n                        (change)=\"loadCoursesViaFaculty(false)\">\n                  <option *ngFor=\"let faculty of faculties\">\n                    {{faculty.facultyName}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Course(Degree)</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" #optionsCourse\n                        (change)=\"loadInputFields()\" [(ngModel)]=\"registration.degree.degreeName\" name=\"txtDegree\">\n                  <option *ngFor=\"let degree of degrees\">\n                    {{degree.degreeName}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Intake</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" data-style=\"select-with-transition\" title=\"Single Select\"\n                        [(ngModel)]=\"registration.intake.intakeMonth\" name=\"txtIntake\" (change)=\"saveToLocalStorage()\">\n                  <option *ngFor=\"let month of months\">\n                    {{month.intakeMonth}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <!--Login Status-->\n\n          <div *ngIf=\"checkInputFields()\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">School</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"underGraduate.school\"\n                         name=\"txtSchool\" (keyup)=\"saveToLocalStorage()\" #txtSchool=\"ngModel\">\n                  <span *ngIf=\"frmRegistration.submitted && txtSchool.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtSchool.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Z-Score</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"underGraduate.zscore\"\n                         name=\"txtZScore\" (keyup)=\"saveToLocalStorage()\" #txtZScore=\"ngModel\">\n                  <span *ngIf=\"frmRegistration.submitted && txtZScore.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtZScore.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Year of A/L</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"underGraduate.yearAl\"\n                         name=\"txtYearAl\" (keyup)=\"saveToLocalStorage()\" #txtYearAl=\"ngModel\">\n                  <span *ngIf=\"frmRegistration.submitted && txtYearAl.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtYearAl.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">A/L Results</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <textarea class=\"form-control\" required=\"true\" [(ngModel)]=\"underGraduate.alResults\" name=\"txtResults\"\n                            (keyup)=\"saveToLocalStorage()\" #txtResults=\"ngModel\"></textarea>\n                  <span *ngIf=\"frmRegistration.submitted && txtResults.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtResults.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"!checkInputFields()\">\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Institute / Company</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"postGraduate.institute\"\n                         name=\"txtInstitute\" (keyup)=\"saveToLocalStorage()\" #txtInstitute=\"ngModel\">\n                  <span *ngIf=\"frmRegistration.submitted && txtInstitute.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtInstitute.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Year</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <input type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"postGraduate.year\" name=\"txtYear\"\n                         (keyup)=\"saveToLocalStorage()\" #txtYear=\"ngModel\">\n                  <span *ngIf=\"frmRegistration.submitted && txtYear.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtYear.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-sm-2 label-on-left\">Qualifications</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group label-floating is-empty\">\n                  <label class=\"control-label\"></label>\n                  <textarea class=\"form-control\" required=\"true\" [(ngModel)]=\"postGraduate.qualifications\"\n                            name=\"txtQualification\" (keyup)=\"saveToLocalStorage()\"\n                            #txtQualification=\"ngModel\"></textarea>\n                  <span *ngIf=\"frmRegistration.submitted && txtQualification.invalid\" class=\"invalid-feedback\">\n                  <span *ngIf=\"txtQualification.errors.required\" style=\"color: red;font-weight: bold\">Required</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <label class=\"col-sm-2 label-on-left\">Fee</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <input type=\"text\" class=\"form-control\" required=\"true\" disabled\n                       [(ngModel)]=\"registration.degree.courseFee\" name=\"txtFee\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\" style=\"height: 50px\"></div>\n          </div>\n          <div class=\"row\" style=\"padding-left: 50px\" *ngIf=\"loginStatus()!=5\">\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button type=\"button\" style=\"left: 50%;transform: translateX(-50%)\" class=\"btn btn-fill\"\n                        (click)=\"previousPage()\">Previous\n                </button>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button *ngIf=\"loginStatus()==1\" type=\"submit\" style=\"left: 50%;transform: translateX(-50%)\"\n                        class=\"btn btn-fill\">Submit / Update Registration\n                </button>\n                <button *ngIf=\"loginStatus()!=1\" type=\"submit\" style=\"left: 50%;transform: translateX(-50%)\"\n                        class=\"btn btn-fill\">Submit registration\n                </button>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"card-footer\">\n                <button type=\"button\" style=\"left: 50%;transform: translateX(-50%)\" class=\"btn btn-fill\"\n                        (click)=\"nextPage()\" [disabled]=\"registration.registrationId==undefined\">Next\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"padding-left: 50px\" *ngIf=\"loginStatus()==5\">\n            <div class=\"col-sm-6\">\n              <div class=\"card-footer\">\n                <button type=\"button\" style=\"left: 50%;transform: translateX(-50%)\" class=\"btn btn-fill\"\n                        (click)=\"previousPage()\">Previous\n                </button>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"card-footer\">\n                <button *ngIf=\"loginStatus()!=1\" type=\"submit\" style=\"left: 50%;transform: translateX(-50%)\"\n                        class=\"btn btn-fill\">Submit registration\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-reg/student-registrations/student-registrations.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/student-reg/student-registrations/student-registrations.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StudentRegistrationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegistrationsComponent", function() { return StudentRegistrationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dtos_faculty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dtos/faculty */ "./src/app/dtos/faculty.ts");
/* harmony import */ var _dtos_degree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dtos/degree */ "./src/app/dtos/degree.ts");
/* harmony import */ var _dtos_intake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dtos/intake */ "./src/app/dtos/intake.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dtos_student__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dtos/student */ "./src/app/dtos/student.ts");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/js/data-tables.js */ "./src/assets/js/data-tables.js");
/* harmony import */ var _assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_js_data_tables_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _services_common_faculty_faculty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/common/faculty/faculty.service */ "./src/app/services/common/faculty/faculty.service.ts");
/* harmony import */ var _services_common_degree_degree_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/common/degree/degree.service */ "./src/app/services/common/degree/degree.service.ts");
/* harmony import */ var _services_common_intake_intake_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/common/intake/intake.service */ "./src/app/services/common/intake/intake.service.ts");
/* harmony import */ var _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/student-reg/student-registration/student-registration.service */ "./src/app/services/student-reg/student-registration/student-registration.service.ts");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
/* harmony import */ var _dtos_registration_undergraduate_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../dtos/registration/undergraduate-details */ "./src/app/dtos/registration/undergraduate-details.ts");
/* harmony import */ var _dtos_registration_registration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../dtos/registration/registration */ "./src/app/dtos/registration/registration.ts");
/* harmony import */ var _dtos_registration_postgraduate_details__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../dtos/registration/postgraduate-details */ "./src/app/dtos/registration/postgraduate-details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var StudentRegistrationsComponent = /** @class */ (function () {
    function StudentRegistrationsComponent(route, router, facultyService, intakeService, degreeService, studentRegistrationService, wizardColor) {
        this.route = route;
        this.router = router;
        this.facultyService = facultyService;
        this.intakeService = intakeService;
        this.degreeService = degreeService;
        this.studentRegistrationService = studentRegistrationService;
        this.wizardColor = wizardColor;
        this.p = 1;
        this.selectedRow = "";
        this.graduationType = "Undergraduate";
        this.registration = new _dtos_registration_registration__WEBPACK_IMPORTED_MODULE_14__["Registration"]();
        this.faculty = new _dtos_faculty__WEBPACK_IMPORTED_MODULE_1__["Faculty"]();
        this.degree = new _dtos_degree__WEBPACK_IMPORTED_MODULE_2__["Degree"]();
        this.intake = new _dtos_intake__WEBPACK_IMPORTED_MODULE_3__["Intake"]();
        this.underGraduate = new _dtos_registration_undergraduate_details__WEBPACK_IMPORTED_MODULE_13__["UndergraduateDetails"]();
        this.postGraduate = new _dtos_registration_postgraduate_details__WEBPACK_IMPORTED_MODULE_15__["PostgraduateDetails"]();
        this.registrations = new Array();
        this.faculties = new Array();
        this.months = new Array();
        this.degrees = new Array();
        this.inputs = [false, false, false, false, false, false, false, false];
        this.registration.student = new _dtos_student__WEBPACK_IMPORTED_MODULE_5__["Student"]();
        this.registration.degree = this.degree;
        this.registration.degree.faculty = this.faculty;
        this.registration.intake = this.intake;
    }
    StudentRegistrationsComponent.prototype.ngOnInit = function () {
        this.loadAllFacultiesIntakes();
        this.loadRegistrationDataToTable();
    };
    /*Submit data to next page*/
    StudentRegistrationsComponent.prototype.saveRegistration = function () {
        // if (this.checkInputFields()) {
        //   this.underGraduate.registration = this.registration;
        //   this.studentRegistrationService.setUndergraduate(this.underGraduate);
        //   // if (this.loginStatus() == 5) {
        //   //   this.studentRegistrationService.saveUnderGraduateRegistration_FreePortal(this.underGraduate).subscribe(
        //   //     (result) => {
        //   //       this.studentRegistrationService.setEmailReply(result);
        //   //       this.wizardColor.setStudentWizardGreen(2);
        //   //       this.router.navigate(['/root/main/student-reg/student-summary']);
        //   //     }
        //   //   );
        //   // } else if (this.loginStatus() == 2) {
        //   //   this.wizardColor.setStudentWizardGreen(3);
        //   //   this.router.navigate(['/root/main/student-reg/semester-payments']);
        //   // }
        // } else {
        //   this.postGraduate.registration = this.registration;
        //   this.studentRegistrationService.setPostgraduate(this.postGraduate);
        //   // if (this.loginStatus() == 5) {
        //   //   this.studentRegistrationService.savePostGraduateRegistration_FreePortal(this.postGraduate).subscribe(
        //   //     (result) => {
        //   //       this.studentRegistrationService.setEmailReply(result);
        //   //       this.wizardColor.setStudentWizardGreen(2);
        //   //       this.router.navigate(['/root/main/student-reg/student-summary']);
        //   //     }
        //   //   );
        //   // } else if (this.loginStatus() == 2) {
        //   //   this.wizardColor.setStudentWizardGreen(3);
        //   //   this.router.navigate(['/root/main/student-reg/semester-payments']);
        //   // }
        // }
        if (this.registration.registrationId == undefined) {
            this.underGraduate.registration = this.registration;
            this.postGraduate.registration = this.registration;
            this.studentRegistrationService.setRegistration(this.underGraduate, this.postGraduate, this.graduationType, this.registration);
            this.wizardColor.setStudentWizardGreen(2);
            this.router.navigate(['/root/main/student-reg/student-payments']);
        }
        else {
        }
    };
    StudentRegistrationsComponent.prototype.resetId = function () {
        this.registration = new _dtos_registration_registration__WEBPACK_IMPORTED_MODULE_14__["Registration"]();
        this.registration.student = new _dtos_student__WEBPACK_IMPORTED_MODULE_5__["Student"]();
        this.registration.degree = this.degree;
        this.registration.degree.faculty = this.faculty;
        this.registration.intake = this.intake;
        this.underGraduate = new _dtos_registration_undergraduate_details__WEBPACK_IMPORTED_MODULE_13__["UndergraduateDetails"]();
        this.postGraduate = new _dtos_registration_postgraduate_details__WEBPACK_IMPORTED_MODULE_15__["PostgraduateDetails"]();
    };
    StudentRegistrationsComponent.prototype.nextPage = function () {
        this.underGraduate.registration = this.registration;
        this.postGraduate.registration = this.registration;
        this.studentRegistrationService.setRegistration(this.underGraduate, this.postGraduate, this.graduationType, this.registration);
        this.wizardColor.setStudentWizardGreen(2);
        this.router.navigate(['/root/main/student-reg/student-payments']);
    };
    StudentRegistrationsComponent.prototype.previousPage = function () {
        this.wizardColor.setStudentWizardGreen(0);
        this.router.navigate(['/root/main/student-reg/student-details']);
    };
    /*--------------------------------------------Get data from fields----------------------------------------------------*/
    /*Save undergraduate or postgraduate data to local storage*/
    StudentRegistrationsComponent.prototype.saveToLocalStorage = function () {
        var reg_details = [this.registration.intake.intakeMonth];
        for (var i = 0; i < reg_details.length; i++) {
            if (reg_details[i] != null) {
                if (reg_details[i] != "") {
                    localStorage.setItem('student-registration' + i, reg_details[i]);
                }
            }
        }
        if (this.checkInputFields()) {
            var reg_details1 = [this.underGraduate.school, this.underGraduate.zscore, this.underGraduate.yearAl, this.underGraduate.alResults];
            for (var i = 3; i < reg_details1.length + 3; i++) {
                if (reg_details1[i - 3] != null) {
                    if (reg_details1[i - 3] != "") {
                        localStorage.setItem('student-registration' + i, reg_details1[i - 3]);
                    }
                }
            }
        }
        else {
            var reg_details2 = [this.postGraduate.institute, this.postGraduate.year, this.postGraduate.qualifications];
            for (var i = 7; i < reg_details2.length + 7; i++) {
                if (reg_details2[i - 7] != null) {
                    if (reg_details2[i - 7] != "") {
                        localStorage.setItem('student-registration' + i, reg_details2[i - 7]);
                    }
                }
            }
        }
    };
    /*---------------------------------------------Set data to fields-----------------------------------------------------*/
    /*Load Faculties and Intakes*/
    StudentRegistrationsComponent.prototype.loadAllFacultiesIntakes = function () {
        var _this = this;
        this.intakeService.getAllMonths().subscribe(function (result) {
            _this.months = result;
            if (localStorage.getItem('student-registration0') == null) {
                localStorage.setItem('student-registration0', _this.months[0].intakeMonth);
            }
            _this.registration.intake.intakeMonth = localStorage.getItem('student-registration0');
            _this.facultyService.getAllFaculties().subscribe(function (result) {
                _this.faculties = result;
                if (localStorage.getItem('student-registration1') == null) {
                    _this.registration.degree.faculty.facultyName = _this.faculties[0].facultyName;
                    localStorage.setItem('student-registration1', _this.faculties[0].facultyName);
                }
                else {
                    _this.registration.degree.faculty.facultyName = localStorage.getItem('student-registration1');
                }
                _this.loadCoursesViaFaculty(true);
            });
        });
    };
    /*Load courses(degree) via faculty*/
    StudentRegistrationsComponent.prototype.loadCoursesViaFaculty = function (getItem) {
        var _this = this;
        this.degreeService.loadCoursesViaFaculty(this.registration.degree.faculty.facultyName).subscribe(function (result) {
            _this.degrees = result;
            if (localStorage.getItem('student-registration2') == null || !getItem) {
                _this.registration.degree.degreeName = _this.degrees[0].degreeName;
            }
            else if (getItem) {
                _this.registration.degree.degreeName = localStorage.getItem('student-registration2');
            }
            localStorage.setItem('student-registration1', _this.registration.degree.faculty.facultyName);
            localStorage.setItem('student-registration2', _this.registration.degree.degreeName);
            _this.loadInputFields();
        });
    };
    /*Set undergraduate or postgraduate data via local storage*/
    StudentRegistrationsComponent.prototype.loadInputFields = function () {
        var _this = this;
        var degree;
        this.degreeService.getGraduationTypeAndFee(this.registration.degree.degreeName).subscribe(function (result) {
            degree = result;
            _this.graduationType = degree.graduationType;
            _this.registration.degree.graduationType = degree.graduationType;
            _this.registration.degree.courseFee = degree.courseFee;
            localStorage.setItem('student-registration2', _this.registration.degree.degreeName);
            if (_this.checkInputFields()) {
                _this.underGraduate.school = localStorage.getItem('student-registration3');
                _this.underGraduate.zscore = localStorage.getItem('student-registration4');
                _this.underGraduate.yearAl = localStorage.getItem('student-registration5');
                _this.underGraduate.alResults = localStorage.getItem('student-registration6');
            }
            else {
                _this.postGraduate.institute = localStorage.getItem('student-registration7');
                _this.postGraduate.year = localStorage.getItem('student-registration8');
                _this.postGraduate.qualifications = localStorage.getItem('student-registration9');
            }
        });
    };
    /*Load data to table*/
    StudentRegistrationsComponent.prototype.loadRegistrationDataToTable = function () {
        var _this = this;
        this.studentRegistrationService.getAllRegistrationData(this.studentRegistrationService.getStudent().studentID).subscribe(function (result) {
            _this.registrations = result;
            loadDatatable();
        });
    };
    /*Load data to fields (when click on table)*/
    StudentRegistrationsComponent.prototype.selectRegistration = function (tableData) {
        var _this = this;
        this.selectedRow = tableData.registrationId;
        this.graduationType = tableData.degree.graduationType;
        if (tableData.degree.graduationType == "Undergraduate") {
            this.studentRegistrationService.getUndergraduateData(tableData.registrationId).subscribe(function (result) {
                _this.underGraduate = result;
                _this.registration = _this.underGraduate.registration;
            });
        }
        else {
            this.studentRegistrationService.getPostgraduateData(tableData.registrationId).subscribe(function (result) {
                _this.postGraduate = result;
                _this.registration = _this.postGraduate.registration;
            });
        }
    };
    /*----------------------------------------------------Booleans--------------------------------------------------------*/
    /*Check whether undergraduate or postgraduate*/
    StudentRegistrationsComponent.prototype.checkInputFields = function () {
        return this.graduationType == "Undergraduate";
    };
    /*Get login status*/
    StudentRegistrationsComponent.prototype.loginStatus = function () {
        return _classes_login_status__WEBPACK_IMPORTED_MODULE_7__["LoginStatus"].getLoginStatus();
    };
    StudentRegistrationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-registrations',
            template: __webpack_require__(/*! ./student-registrations.component.html */ "./src/app/views/student-reg/student-registrations/student-registrations.component.html"),
            styles: [__webpack_require__(/*! ./student-registrations.component.css */ "./src/app/views/student-reg/student-registrations/student-registrations.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_common_faculty_faculty_service__WEBPACK_IMPORTED_MODULE_8__["FacultyService"], _services_common_intake_intake_service__WEBPACK_IMPORTED_MODULE_10__["IntakeService"], _services_common_degree_degree_service__WEBPACK_IMPORTED_MODULE_9__["DegreeService"], _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_11__["StudentRegistrationService"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_12__["WizardColorService"]])
    ], StudentRegistrationsComponent);
    return StudentRegistrationsComponent;
}());



/***/ }),

/***/ "./src/app/views/student-reg/student-settings/student-settings.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-settings/student-settings.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-reg/student-settings/student-settings.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/student-reg/student-settings/student-settings.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student-settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/student-reg/student-settings/student-settings.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-settings/student-settings.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StudentSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSettingsComponent", function() { return StudentSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentSettingsComponent = /** @class */ (function () {
    function StudentSettingsComponent() {
    }
    StudentSettingsComponent.prototype.ngOnInit = function () {
    };
    StudentSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-settings',
            template: __webpack_require__(/*! ./student-settings.component.html */ "./src/app/views/student-reg/student-settings/student-settings.component.html"),
            styles: [__webpack_require__(/*! ./student-settings.component.css */ "./src/app/views/student-reg/student-settings/student-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentSettingsComponent);
    return StudentSettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/student-reg/student-summary/student-summary.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-summary/student-summary.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-reg/student-summary/student-summary.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-summary/student-summary.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-12\">\n    <div class=\"card\">\n      <div class=\"form-horizontal\">\n        <!-- /.card-header -->\n        <div class=\"card-content\" *ngIf=\"loginStatus()!=5\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div style=\"font-weight: bold\">Note:- Registration ID will be automatically generated by the system.</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\" style=\"height: 600px\">\n              <br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 35px;text-align: center;color: #E9B500\">Thank you</div><br><br><br><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 30px;text-align: center;\">{{studentName}}</div><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 25px;text-align: center;\">You are now successfully registered as a new student with learning management system.</div><br><br><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 17px\">Note:- Now you can login as a student with the system.</div><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 17px\">Note:- Password(system generated) has been sent to your given email address.</div><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 17px\">Note:- Use your Student ID or email as the username and the given password for the login.</div><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 17px\">Note:- After login, you can change your password.</div><br><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 17px\">Registration ID - {{regId}}</div><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 17px\">Student ID - {{studentId}}</div><br><br><br>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 17px\">{{reply}}</div><br>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"loginStatus()==5\">\n            <div class=\"col-sm-12\">\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"downloadPage()\">Download</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"loginStatus()!=5\">\n            <div class=\"col-sm-6\">\n              <div>\n                <button type=\"submit\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"downloadPage()\">Download</button>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div>\n                <button type=\"button\" class=\"btn btn-fill\" style=\"left: 50%;transform: translateX(-50%)\" (click)=\"goToSemReg()\">Do you wish to proceed semester registration?</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-reg/student-summary/student-summary.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/student-reg/student-summary/student-summary.component.ts ***!
  \********************************************************************************/
/*! exports provided: StudentSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSummaryComponent", function() { return StudentSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/student-reg/student-registration/student-registration.service */ "./src/app/services/student-reg/student-registration/student-registration.service.ts");
/* harmony import */ var _classes_login_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes/login-status */ "./src/app/classes/login-status.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/common/wizard-color/wizard-color.service */ "./src/app/services/common/wizard-color/wizard-color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentSummaryComponent = /** @class */ (function () {
    function StudentSummaryComponent(studentRegistrationService, router, wizardColor) {
        this.studentRegistrationService = studentRegistrationService;
        this.router = router;
        this.wizardColor = wizardColor;
        this.reply = "";
    }
    StudentSummaryComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('student-details0') != null) {
            this.studentName = localStorage.getItem('student-details0') + "." + localStorage.getItem('student-details1');
        }
        else {
            this.studentName = "";
        }
        this.reply = this.studentRegistrationService.getEmailReply().reply;
        this.studentId = this.reply.split(',')[2];
        this.regId = this.reply.split(',')[1];
        this.reply = this.reply.split(',')[0];
        if (this.loginStatus() == 5) {
            localStorage.clear();
        }
    };
    StudentSummaryComponent.prototype.downloadPage = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__();
        doc.setFontSize(11);
        doc.text(10, 20, 'Thank you,');
        doc.text(10, 30, this.studentName);
        doc.text(10, 40, 'You are now successfully registered as a new student with learning management system.');
        doc.text(10, 50, 'Note:- Now you can login as a student with the system.');
        doc.text(10, 60, 'Note:- Password(system generated) has been sent to your given email address.');
        doc.text(10, 70, 'Note:- Use your Student ID or email as the username and the given password for the login.');
        doc.text(10, 80, 'Note:- After login, you can change your password.');
        doc.text(10, 100, 'Registration ID - ' + this.regId);
        doc.text(10, 110, 'Student ID - ' + this.studentId);
        doc.text(10, 130, 'Contact :- 011-1234567');
        // doc.addPage();
        // Save the PDF
        doc.save('Registration.pdf');
    };
    StudentSummaryComponent.prototype.loginStatus = function () {
        return _classes_login_status__WEBPACK_IMPORTED_MODULE_3__["LoginStatus"].getLoginStatus();
    };
    StudentSummaryComponent.prototype.goToSemReg = function () {
        this.wizardColor.setStudentWizardGreen(3);
        this.router.navigate(['/root/main/student-reg/semester-registrations']);
    };
    StudentSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-summary',
            template: __webpack_require__(/*! ./student-summary.component.html */ "./src/app/views/student-reg/student-summary/student-summary.component.html"),
            styles: [__webpack_require__(/*! ./student-summary.component.css */ "./src/app/views/student-reg/student-summary/student-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_student_reg_student_registration_student_registration_service__WEBPACK_IMPORTED_MODULE_2__["StudentRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_common_wizard_color_wizard_color_service__WEBPACK_IMPORTED_MODULE_5__["WizardColorService"]])
    ], StudentSummaryComponent);
    return StudentSummaryComponent;
}());



/***/ }),

/***/ "./src/assets/js/data-tables.js":
/*!**************************************!*\
  !*** ./src/assets/js/data-tables.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function loadDatatable() {
  $(document).ready(function() {
    $('.datatables').DataTable({
      // "pagingType": "full_numbers",
      // "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      // responsive: true,
      language: {
        // search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });


    var table = $('.datatables').DataTable();

    // Edit record
    table.on( 'click', '.edit', function () {
      $tr = $(this).closest('tr');

      var data = table.row($tr).data();
      alert( 'You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.' );
    } );

    // Delete a record
    table.on( 'click', '.remove', function (e) {
      $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    } );

    //Like record
    table.on( 'click', '.like', function () {
      alert('You clicked on Like button');
    });

    $('.card .material-datatables label').addClass('form-group');
  });
}



/***/ }),

/***/ "./src/assets/js/events-calendar.js":
/*!******************************************!*\
  !*** ./src/assets/js/events-calendar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function loadCalendar() {
  $(document).ready(function () {

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var newDate = new Date();
    newDate.setDate(newDate.getDate());

    setInterval(function () {
      var hours = new Date().getHours();
      $(".hour").html((hours < 10 ? "0" : "") + hours);
      var seconds = new Date().getSeconds();
      $(".second").html((seconds < 10 ? "0" : "") + seconds);
      var minutes = new Date().getMinutes();
      $(".minute").html((minutes < 10 ? "0" : "") + minutes);

      $(".month span,.month2 span").text(monthNames[newDate.getMonth()]);
      $(".date span,.date2 span").text(newDate.getDate());
      $(".day span,.day2 span").text(dayNames[newDate.getDay()]);
      $(".year span").html(newDate.getFullYear());
    }, 1000);


    $(".outer").on({
      mousedown: function () {
        $(".dribbble").css("opacity", "1");
      },
      mouseup: function () {
        $(".dribbble").css("opacity", "0");
      }
    });


  });
}


/***/ }),

/***/ "./src/assets/js/login/login.js":
/*!**************************************!*\
  !*** ./src/assets/js/login/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function loadLogin() {
  $().ready(function(){
    demo.checkFullPageBackgroundImage();

    setTimeout(function(){
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700)
  });
}


/***/ }),

/***/ "./src/assets/js/material-dashboard98f3.js":
/*!*************************************************!*\
  !*** ./src/assets/js/material-dashboard98f3.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! =========================================================
 *
 * Material Dashboard PRO - V1.3.0
 *
 * =========================================================
 *
 * Copyright 2016 Creative Tim (http://www.creative-tim.com/product/material-dashboard-pro)
 *
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \|     |// '.
 *                 / \|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *               Buddha Bless:  "No Bugs"
 *
 * ========================================================= */
function loadMaterials() {
  (function () {
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
  // && !$('body').hasClass('sidebar-mini')
  //   if (isWindows ) {
  //     // if we are on windows OS we activate the perfectScrollbar function
  //     $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
  //
  //     $('html').addClass('perfect-scrollbar-on');
  //   } else {
  //     $('html').addClass('perfect-scrollbar-off');
  //   }
  })();

  var breakCards = true;

  var searchVisible = 0;
  var transparent = true;

  var transparentDemo = true;
  var fixedTop = false;

  var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false,
    bootstrap_nav_initialized = false;

  var seq = 0, delays = 80, durations = 500;
  var seq2 = 0, delays2 = 80, durations2 = 500;


  $(document).ready(function () {

    $sidebar = $('.sidebar');

    $.material.init();

    md.initSidebarsCheck();

    if ($('body').hasClass('sidebar-mini')) {
      md.misc.sidebar_mini_active = true;
    }

    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    md.checkSidebarImage();

    md.initMinimizeSidebar();
    $('body').addClass('sidebar-mini');
    md.misc.sidebar_mini_active = true;

    //    Activate bootstrap-select
    if ($(".selectpicker").length != 0) {
      $(".selectpicker").selectpicker();
    }

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    //removed class label and label-color from tag span and replaced with data-color
    var tagClass = $('.tagsinput').data('color');

    $('.tagsinput').tagsinput({
      tagClass: ' tag-' + tagClass + ' '
    });

    //    Activate bootstrap-select
    $(".select").dropdown({"dropdownClass": "dropdown-menu", "optionClass": ""});

    $('.form-control').on("focus", function () {
      $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function () {
      $(this).parent(".input-group").removeClass("input-group-focus");
    });


    if (breakCards == true) {
      // We break the cards headers if there is too much stress on them :-)
      $('[data-header-animation="true"]').each(function () {
        var $fix_button = $(this)
        var $card = $(this).parent('.card');

        $card.find('.fix-broken-card').click(function () {
          console.log(this);
          var $header = $(this).parent().parent().siblings('.card-header, .card-image');

          $header.removeClass('hinge').addClass('fadeInDown');

          $card.attr('data-count', 0);

          setTimeout(function () {
            $header.removeClass('fadeInDown animate');
          }, 480);
        });

        $card.mouseenter(function () {
          var $this = $(this);
          hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
          $this.attr("data-count", hover_count);

          if (hover_count >= 20) {
            $(this).children('.card-header, .card-image').addClass('hinge animated');
          }
        });
      });
    }

    // remove class has-error for checkbox validation
    $('input[type="checkbox"][required="true"], input[type="radio"][required="true"]').on('click', function () {
      if ($(this).hasClass('error')) {
        $(this).closest('div').removeClass('has-error');
      }
    });

  });

  $(document).on('click', '.navbar-toggle', function () {
    $toggle = $(this);

    if (mobile_menu_visible == 1) {
      $('html').removeClass('nav-open');

      $('.close-layer').remove();
      setTimeout(function () {
        $toggle.removeClass('toggled');
      }, 400);

      mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.addClass('toggled');
      }, 430);

      var $layer = $('<div class="close-layer"></div>');

      if ($('body').find('.main-panel').length != 0 && $('body').find('.close-layer').length == 0) {
        $layer.appendTo(".main-panel");

      } else if (($('body').hasClass('off-canvas-sidebar'))) {
        $layer.appendTo(".wrapper-full-page");
      }

      setTimeout(function () {
        $layer.addClass('visible');
      }, 100);

      $layer.click(function () {
        $('html').removeClass('nav-open');
        mobile_menu_visible = 0;

        $layer.removeClass('visible');

        setTimeout(function () {
          $layer.remove();
          $toggle.removeClass('toggled');

        }, 400);
      });

      $('html').addClass('nav-open');
      mobile_menu_visible = 1;

    }

  });

// activate collapse right menu when the windows is resized
  $(window).resize(function () {
    md.initSidebarsCheck();
  });

  md = {
    misc: {
      navbar_menu_visible: 0,
      active_collapse: true,
      disabled_collapse_init: 0,
    },

    checkSidebarImage: function () {
      $sidebar = $('.sidebar');
      image_src = $sidebar.data('image');

      if (image_src !== undefined) {
        sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>';
        $sidebar.append(sidebar_container);
      }
    },

    initSliders: function () {
      // Sliders for demo purpose in refine cards section
      var slider = document.getElementById('sliderRegular');

      noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
      });

      var slider2 = document.getElementById('sliderDouble');

      noUiSlider.create(slider2, {
        start: [20, 60],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });
    },

    initSidebarsCheck: function () {
      if ($(window).width() <= 991) {
        if ($sidebar.length != 0) {
          md.initRightMenu();
        }
      }
    },

    initMinimizeSidebar: function () {

      $('#minimizeSidebar').click(function () {
        var $btn = $(this);

        if (md.misc.sidebar_mini_active == true) {
          $('body').removeClass('sidebar-mini');
          md.misc.sidebar_mini_active = false;
        } else {
          $('body').addClass('sidebar-mini');
          md.misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
          window.dispatchEvent(new Event('resize'));
        }, 180);

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
          clearInterval(simulateWindowResize);
        }, 1000);
      });
    },

    checkScrollForTransparentNavbar: debounce(function () {
      if ($(document).scrollTop() > 260) {
        if (transparent) {
          transparent = false;
          $('.navbar-color-on-scroll').removeClass('navbar-transparent');
        }
      } else {
        if (!transparent) {
          transparent = true;
          $('.navbar-color-on-scroll').addClass('navbar-transparent');
        }
      }
    }, 17),


    initRightMenu: debounce(function () {
      $sidebar_wrapper = $('.sidebar-wrapper');

      if (!mobile_menu_initialized) {
        $navbar = $('nav').find('.navbar-collapse').children('.navbar-nav.navbar-right');

        mobile_menu_content = '';

        nav_content = $navbar.html();

        // nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

        // navbar_form = $('nav').find('.navbar-form').get(0).outerHTML;

        $sidebar_nav = $sidebar_wrapper.find(' > .nav');

        // insert the navbar form before the sidebar list
        $nav_content = $(nav_content);
        // $navbar_form = $(navbar_form);
        $nav_content.insertBefore($sidebar_nav);
        // $navbar_form.insertBefore($nav_content);

        $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function (event) {
          event.stopPropagation();

        });

        // simulate resize so all the charts/maps will be redrawn
        window.dispatchEvent(new Event('resize'));

        mobile_menu_initialized = true;
      } else {
        if ($(window).width() > 991) {
          // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
          $sidebar_wrapper.find('.navbar-form').remove();
          $sidebar_wrapper.find('.nav-mobile-menu').remove();

          mobile_menu_initialized = false;
        }
      }
    }, 200),


    // initBootstrapNavbarMenu: debounce(function(){
    //
    //     if(!bootstrap_nav_initialized){
    //         $navbar = $('nav').find('.navbar-collapse').first().clone(true);
    //
    //         nav_content = '';
    //         mobile_menu_content = '';
    //
    //         //add the content from the regular header to the mobile menu
    //         $navbar.children('ul').each(function(){
    //             content_buff = $(this).html();
    //             nav_content = nav_content + content_buff;
    //         });
    //
    //         nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';
    //
    //         $navbar.html(nav_content);
    //         $navbar.addClass('off-canvas-sidebar');
    //
    //         // append it to the body, so it will come from the right side of the screen
    //         $('body').append($navbar);
    //
    //         $toggle = $('.navbar-toggle');
    //
    //         $navbar.find('a').removeClass('btn btn-round btn-default');
    //         $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
    //         $navbar.find('button').addClass('btn-simple btn-block');
    //
    //         bootstrap_nav_initialized = true;
    //     }
    // }, 500),

    startAnimationForLineChart: function (chart) {

      chart.on('draw', function (data) {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
          seq++;
          data.element.animate({
            opacity: {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
        }
      });

      seq = 0;
    },
    startAnimationForBarChart: function (chart) {

      chart.on('draw', function (data) {
        if (data.type === 'bar') {
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
        }
      });

      seq2 = 0;
    }
  }


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  };


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-46172202-1']);
  _gaq.push(['_trackPageview']);

  (function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // backend_url: 'http://imalkag.ddns.net:8080'
    backend_url: 'http://localhost:8080'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gayan\Documents\research\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map