"use strict";
(self["webpackChunkamansharma_portfolio"] = self["webpackChunkamansharma_portfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/archive/archive.component */ 6847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: ':language?', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: ':language?/proyectos', component: _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_1__.ArchiveComponent },
    // {path: 'profile'        ,   component: ProfileComponent         , canActivate: [AuthGuard]},
    // {path: 'users'          ,   component: UsersComponent           , canActivate: [AuthGuard]},
    // {path: 'register-user'  ,   component: RegisterUserComponent    , canActivate: [AuthGuard]},
    { path: '**', pathMatch: 'full', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/header/header.component */ 5298);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 4321);









class AppComponent {
    constructor(titleService, metaService, translateService, location, languageService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.translateService = translateService;
        this.location = location;
        this.languageService = languageService;
        this.title = 'amansharma-portfolio';
    }
    ngOnInit() {
        this.languageService.initLanguage();
        this.titleService.setTitle("Aman Sharma | Full-Stack Developer");
        this.metaService.addTags([
            { name: 'keywords', content: 'Backend, software, developer' },
            { name: 'description', content: 'I have 2 years of experience developing systems, interfaces, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Java and Angular applying good practices and development standards.' },
        ]);
        aos__WEBPACK_IMPORTED_MODULE_0__.init();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    } }, directives: [_components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 3783);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 854);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-animate-on-scroll */ 1993);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-google-analytics */ 5943);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);


















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule,
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__.AnimateOnScrollModule.forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production }),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.trackAnalyticID),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__.AnimateOnScrollModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__.NgxGoogleAnalyticsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 6847:
/*!*********************************************************!*\
  !*** ./src/app/components/archive/archive.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchiveComponent": () => (/* binding */ ArchiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


function ArchiveComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proyectos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Una lista mas completa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "table", 7)(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Made at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Built with");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody")(22, "tr", 9)(23, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sistem web Avicola");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 12)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Monagas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 13)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Laravel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Webpack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 15)(38, "span")(39, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span")(42, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr", 9)(45, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cenem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 12)(50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Monagas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 13)(53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Wordpress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Divi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 15)(60, "span")(61, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr", 9)(64, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ClerckContable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 12)(69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Caracas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 13)(72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "CSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 15)(79, "span")(80, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span")(83, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr", 9)(86, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Innerfire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 12)(91, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Monagas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 13)(94, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Wordpress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "CSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 15)(105, "span")(106, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr", 9)(109, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Inver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 12)(114, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Monagas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 13)(117, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Wordpress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "CSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 15)(128, "span")(129, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span")(132, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr", 9)(135, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Persimas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 12)(140, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Caracas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td", 13)(143, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "CSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 15)(154, "span")(155, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span")(158, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr", 9)(161, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Rodrigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td", 12)(166, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Caracas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 13)(169, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "CSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td", 15)(180, "span")(181, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span")(184, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "tr", 9)(187, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Salud al Dia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td", 12)(192, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Caracas - VE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 13)(195, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Wordpress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Divi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 15)(202, "span")(203, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@archiveAnimation", undefined);
} }
class ArchiveComponent {
    constructor() {
        this.state = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.state = true;
        }, 1);
    }
}
ArchiveComponent.ɵfac = function ArchiveComponent_Factory(t) { return new (t || ArchiveComponent)(); };
ArchiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchiveComponent, selectors: [["app-archive"]], decls: 1, vars: 1, consts: [["class", "section archive", 4, "ngIf"], [1, "section", "archive"], [1, "container"], [1, "archive-title"], [1, "big-title"], [1, "archive-subtitle", "big-subtitle"], [1, "archive-table-container"], [1, "archive__StyledTable-lXDeB", "haZMKe"], [1, "hide-on-mobile"], ["data-sr-id", "3"], [1, "proyect-date"], [1, "proyect-title"], [1, "proyect-company"], [1, "proyect-skills"], [1, "separator"], [1, "proyect-links"], ["href", "https://github.com/Aman103767", 2, "color", "inherit"], [1, "ml-4", "fab", "fa-github"], ["href", "http://avicola.luzzidigital.fav/", 2, "color", "inherit"], [1, "ml-4", "fas", "fa-external-link-alt"], ["href", "http://cenem.luzzidigital.fav/", 2, "color", "inherit"], ["href", "https://clerckcontable.luzzidigital.fav", 2, "color", "inherit"], ["href", "http://innerfire.luzzidigital.fav/", 2, "color", "inherit"], ["href", "http://inver.luzzidigital.fav/", 2, "color", "inherit"], ["href", "https://persimas.luzzidigital.fav", 2, "color", "inherit"], ["href", "https://rodrigo.luzzidigital.fav", 2, "color", "inherit"], ["href", "https://saludaldia.luzzidigital.fav", 2, "color", "inherit"]], template: function ArchiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArchiveComponent_section_0_Template, 205, 1, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state);
    } }, styles: [".archive[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1600px;\n  min-height: 100vh;\n  padding-top: 135px;\n  padding-bottom: 200px;\n}\n.archive[_ngcontent-%COMP%]   .archive-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: 0 0 10px 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n}\n.archive[_ngcontent-%COMP%]   .archive-subtitle[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 0;\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;\n  margin: 100px -20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, .archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:focus {\n  background-color: #112240;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-date[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 16px;\n  font-weight: normal;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n  width: 10%;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-title[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  color: #ccd6f6;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-company[_ngcontent-%COMP%] {\n  width: 15%;\n  padding-top: 15px;\n  font-size: 18px;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%] {\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  display: inline-block;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: default;\n  line-height: 1.5;\n  padding: 12.9px 20px;\n}\n@media (max-width: 768px) {\n  .proyect-company[_ngcontent-%COMP%], .proyect-skills[_ngcontent-%COMP%], .hide-on-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIiwiYXJjaGl2ZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW1hbiUyMFNoYXJtYVxcRGVza3RvcFxcZ2l0JTIwcG9ydGZvbGlvXFxhbmRyZXNqb3NlaHItcG9ydGZvbGlvLW1hc3Rlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFyY2hpdmVcXGFyY2hpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBSjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0RSUTtFQ1NSLGtCQUFBO0VBQ0EsbUpETEc7QUVLWDtBREVJO0VBQ0ksY0RYUTtFQ1lSLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBGRFZHO0VDV0gsbUJBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSSxtQkFBQTtFQUFxQixVQUFBO0VBQVksbUVBQUE7RUFDakMsNEhBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUNDWjtBRENZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDaEI7QURFZ0I7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDJLQUFBO0FDQXBCO0FER29CO0VBQ0kseUJEaERSO0FFK0NoQjtBRElvQjtFQUNJLGNEOUNSO0VDK0NRLDBGRDNDYjtFQzRDYSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNGeEI7QURLb0I7RUFDSSxpQkFBQTtFQUNBLGNENURSO0VDNkRRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSHhCO0FETW9CO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSnhCO0FETW9CO0VBQ0ksZUFBQTtFQUNBLDBGRHhFYjtFQ3lFYSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0p4QjtBRE9vQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTHhCO0FEUW9CO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDTnhCO0FEVWdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNScEI7QURpQkE7RUFDSTtJQUNJLGFBQUE7RUNkTjtBQUNGIiwiZmlsZSI6ImFyY2hpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcblxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5hcmNoaXZle1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctdG9wOiAxMzVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG5cbiAgICAuYXJjaGl2ZS10aXRsZSBoMXtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgIH1cbiAgICAuYXJjaGl2ZS1zdWJ0aXRsZXtcbiAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuXG4gICAgLmFyY2hpdmUtdGFibGUtY29udGFpbmVye1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyBcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwLjJzLCB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMC4ycztcbiAgICAgICAgbWFyZ2luOiAxMDBweCAtMjBweDtcblxuICAgICAgICB0YWJsZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblxuICAgICAgICAgICAgdGhlYWQgdGh7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHl7IFxuICAgICAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzLCBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzLCB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG5cblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJveWVjdC1kYXRle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJveWVjdC10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wcm95ZWN0LWNvbXBhbnl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm95ZWN0LXNraWxsc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucHJveWVjdC1saW5rc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5zZXBhcmF0b3J7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGR7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTIuOXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgLnByb3llY3QtY29tcGFueSwgLnByb3llY3Qtc2tpbGxzLCAuaGlkZS1vbi1tb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5hcmNoaXZlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiAxMzVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtdGl0bGUgaDEge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNjY2Q2ZjY7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgZm9udC1mYW1pbHk6IENhbGlicmUsIFNhbiBGcmFuY2lzY28sIFNGIFBybyBUZXh0LCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgU2Vnb2UgVUksIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtc3VidGl0bGUge1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5hcmNoaXZlIC5hcmNoaXZlLXRhYmxlLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMC4ycywgdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDAuMnM7XG4gIG1hcmdpbjogMTAwcHggLTIwcHg7XG59XG4uYXJjaGl2ZSAuYXJjaGl2ZS10YWJsZS1jb250YWluZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5hcmNoaXZlIC5hcmNoaXZlLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0aGVhZCB0aCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtdGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcywgb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcywgdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtdGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRyOmhvdmVyLCAuYXJjaGl2ZSAuYXJjaGl2ZS10YWJsZS1jb250YWluZXIgdGFibGUgdGJvZHkgdHI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjQwO1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtdGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRyIC5wcm95ZWN0LWRhdGUge1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB3aWR0aDogMTAlO1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtdGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRyIC5wcm95ZWN0LXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGNvbG9yOiAjY2NkNmY2O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtdGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRyIC5wcm95ZWN0LWNvbXBhbnkge1xuICB3aWR0aDogMTUlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5hcmNoaXZlIC5hcmNoaXZlLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciAucHJveWVjdC1za2lsbHMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uYXJjaGl2ZSAuYXJjaGl2ZS10YWJsZS1jb250YWluZXIgdGFibGUgdGJvZHkgdHIgLnByb3llY3QtbGlua3Mge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5hcmNoaXZlIC5hcmNoaXZlLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciAuc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmFyY2hpdmUgLmFyY2hpdmUtdGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAxMi45cHggMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm95ZWN0LWNvbXBhbnksIC5wcm95ZWN0LXNraWxscywgLmhpZGUtb24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)("archiveAnimation", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 0, transform: "translateY(100%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.stagger)(15, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)("500ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 4321:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);



class FooterComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 1, consts: [[1, "footer-left-bar", "d-none", "d-md-block"], ["href", "https://github.com/Aman103767", "target", "_blank", 3, "click"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/aman12345/", "target", "_blank", 3, "click"], [1, "fab", "fa-linkedin-in"], [1, "footer-right-bar", "d-none", "d-md-block"], ["href", "aman198sharma114@gmail.com", "target", "_blank", 3, "click"], [1, "footer-credits", "text-center"], ["href", "https://aman103767.github.io", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"], ["href", "https://github.com/bchiang7/v4", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"], [1, "mt-2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div")(2, "ul", 0)(3, "li")(4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "github"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener() { return ctx.analyticsService.sendAnalyticEvent("click_linkedin", "footer", "github"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "footer", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "aman198sharma114@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_andresjose", "footer", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Built with Angular by Aman Sharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_16_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_brittany", "footer", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateFooter", undefined);
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFtYW4lMjBTaGFybWFcXERlc2t0b3BcXGdpdCUyMHBvcnRmb2xpb1xcYW5kcmVzam9zZWhyLXBvcnRmb2xpby1tYXN0ZXJcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxnZW5lcmFsXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBQ0ksY0RHWTtBRUhoQjtBREVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkRMUTtBRUtoQjtBREdJO0VBQ0ksZ0JBQUE7QUNEUjtBRElJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0ZSO0FESVE7RUFDSSxlQUFBO0VBQ0EsY0RwQkk7QUVrQmhCO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FES1k7RUFDSSxtQkFBQTtBQ0hoQjtBRFFJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ05SO0FEUVE7RUFDSSx3QkFBQTtBQ05aO0FEU1E7RUFDSSwwRkRwQ0Q7RUNxQ0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjRHRESTtBRStDaEI7QURVSTtFQUNJLDBGRG5ERztFQ29ESCxlQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRFdRO0VBQ0ksY0RyRUk7RUN1RUosMERBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxvQkFBQTtBQ1RaO0FEV1k7RUFDSSxxQkFBQTtFQUNBLGNENUVBO0FFbUVoQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcblxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbmZvb3RlcntcbiAgICBjb2xvcjogJExpZ2h0U2xhdGU7XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyLCAuZm9vdGVyLXJpZ2h0LWJhcjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHRTbGF0ZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpLCAuZm9vdGVyLXJpZ2h0LWJhciBsaXtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFye1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICAgIGxlZnQ6IDUxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0LWJhcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IDQxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXItY3JlZGl0c3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcblxuICAgICAgICBhe1xuICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmZvb3RlciB7XG4gIGNvbG9yOiAjYThiMmQxO1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXI6YWZ0ZXIsIGZvb3RlciAuZm9vdGVyLXJpZ2h0LWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThiMmQxO1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXIgbGksIGZvb3RlciAuZm9vdGVyLXJpZ2h0LWJhciBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5mb290ZXIgLmZvb3Rlci1sZWZ0LWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTZweDtcbiAgbGVmdDogNTFweDtcbiAgcGFkZGluZzogMDtcbn1cbmZvb3RlciAuZm9vdGVyLWxlZnQtYmFyIGkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiAjYThiMmQxO1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXIgbGkge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXIgbGk6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzNweDtcbn1cbmZvb3RlciAuZm9vdGVyLXJpZ2h0LWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiA0MXB4O1xuICBwYWRkaW5nOiAwO1xufVxuZm9vdGVyIC5mb290ZXItcmlnaHQtYmFyIGxpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuZm9vdGVyIC5mb290ZXItcmlnaHQtYmFyIGEge1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLXdlYmtpdC1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIC13ZWJraXQtd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2E4YjJkMTtcbn1cbmZvb3RlciAuZm9vdGVyLWNyZWRpdHMge1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG5mb290ZXIgLmZvb3Rlci1jcmVkaXRzIGEge1xuICBjb2xvcjogI2E4YjJkMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cbmZvb3RlciAuZm9vdGVyLWNyZWRpdHMgYTpob3ZlciwgZm9vdGVyIC5mb290ZXItY3JlZGl0cyBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY0ZmZkYTtcbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("animateFooter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0, transform: "translateY(100%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 854:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralModule": () => (/* binding */ GeneralModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 4321);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 5298);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
}
GeneralModule.ɵfac = function GeneralModule_Factory(t) { return new (t || GeneralModule)(); };
GeneralModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 5298:
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function HeaderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "First content");
} }
function HeaderComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_img_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 27);
} }
function HeaderComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.languageFormControl.value == "en" ? "English" : "\u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940");
} }
function HeaderComponent_img_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} }
function HeaderComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.languageFormControl.value == "en" ? "Hindi" : "\u0939\u093F\u0902\u0926\u0940");
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
class HeaderComponent {
    constructor(router, analyticsService, languageService) {
        this.router = router;
        this.analyticsService = analyticsService;
        this.languageService = languageService;
        this.responsiveMenuVisible = false;
        this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.cvName = "";
    }
    ngOnInit() {
        this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val));
        this.languageFormControl.setValue(this.languageService.language);
    }
    scroll(el) {
        if (document.getElementById(el)) {
            document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
        }
        else {
            this.router.navigate(['/home']).then(() => document.getElementById(el).scrollIntoView({ behavior: 'smooth' }));
        }
        this.responsiveMenuVisible = false;
    }
    downloadCV() {
        this.languageService.translateService.get("Header.cvName").subscribe(val => {
            this.cvName = val;
            console.log(val);
            // app url
            let url = window.location.href;
            // Open a new window with the CV
            window.open(url + "/../assets/cv/" + this.cvName, "_blank");
        });
    }
    getScrollPosition(event) {
        this.pageYPosition = window.pageYOffset;
    }
    changeLanguage(language) {
        this.languageFormControl.setValue(language);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.getScrollPosition(ctx.getScrollPosition($event)); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 112, vars: 59, consts: [[1, "navbar", "main-navbar", "on-top"], [1, "container"], [1, "navbar-brand", "text-light", 3, "routerLink"], ["src", "assets/images/logo.png", "width", "45"], ["ngbNav", "", 1, "menu-ul"], ["nav", "ngbNav"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "main-btn", "cv-btn", 3, "click"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownForm1", "ngbDropdownToggle", "", 1, "language-container"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English", 4, "ngIf"], ["class", "flag-text", 4, "ngIf"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/in-flag.gif", "alt", "Espa\u00F1ol", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "arrow-language"], ["d", "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1"], [1, "language-container", "language-container-selector", "active", 2, "border-bottom-left-radius", "0px !important", "border-bottom-right-radius", "0px !important", 3, "click"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/in-flag.gif", "alt", "Espa\u00F1ol"], [1, "flag-text"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-check2", "arrow-active"], ["d", "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"], [1, "language-container", "language-container-selector", 2, "margin-top", "1px !important", "border-top-left-radius", "0px !important", "border-top-right-radius", "0px !important", 3, "click"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click"], [1, "main-btn", "cv-btn", 3, "click"], [1, "language-container"], ["src", "https://www.worldometers.info/img/flags/in-flag.gif", "alt", "Espa\u00F1ol"], ["src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 4, 5)(6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_6_listener() { return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_7_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_14_listener() { return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.scroll("jobs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HeaderComponent_ng_template_21_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_22_listener() { return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() { return ctx.scroll("proyects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, HeaderComponent_ng_template_29_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_30_listener() { return ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_31_listener() { return ctx.scroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, HeaderComponent_ng_template_37_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 11)(39, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_39_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "div", 13)(44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, HeaderComponent_img_45_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, HeaderComponent_span_46_Template, 2, 1, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, HeaderComponent_img_47_Template, 1, 0, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, HeaderComponent_span_48_Template, 2, 1, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 20)(52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_52_listener() { return ctx.changeLanguage("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_58_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 28)(65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_65_listener() { return ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 30)(67, "aside", 31)(68, "nav")(69, "ol")(70, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_70_listener() { return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_71_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_76_listener() { return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_77_listener() { return ctx.scroll("jobs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_82_listener() { return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_83_listener() { return ctx.scroll("proyects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_88_listener() { return ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_89_listener() { return ctx.scroll("proyects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li")(95, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_95_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li")(99, "div", 34)(100, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_100_listener() { return ctx.changeLanguage("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_106_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 37, "Header.Item1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 39, "Header.Item2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 41, "Header.Item3"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 43, "Header.Item4"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 45, "Header.cvBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageFormControl.value == "en" ? "Hindi" : "\u0939\u093F\u0902\u0926\u0940");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageFormControl.value == "en" ? "English" : "\u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](57, _c0, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 47, "Header.Item1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 49, "Header.Item2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 51, "Header.Item3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](93, 53, "Header.Item4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](97, 55, "Header.cvBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageFormControl.value == "en" ? "Hindi" : "\u0939\u093F\u0902\u0926\u0940");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageFormControl.value == "en" ? "English" : "\u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #0a192f;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #112240;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #ccd6f6;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64ffda;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #64ffda;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: #64ffda;\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #64ffda;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #64ffda;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n  .dropdown-toggle::after {\n  display: none;\n}\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFtYW4lMjBTaGFybWFcXERlc2t0b3BcXGdpdCUyMHBvcnRmb2xpb1xcYW5kcmVzam9zZWhyLXBvcnRmb2xpby1tYXN0ZXJcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxnZW5lcmFsXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0NBO0VBQ0ksWUFBQTtFQUNBLG1CRERZO0VDRVosMEZEU087QUVSWDtBRENNO0VBQ0UsZ0JBQUE7QUNDUjtBREVNO0VBQ0UsZ0JBQUE7QUNBUjtBREVNO0VBQ0UsaUJBQUE7QUNBUjtBRElJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7QUNGUjtBRElVO0VBQ0Usd0JBQUE7QUNGWjtBRElVO0VBQ0Usa0NBQUE7RUFBQSw2QkFBQTtFQUNBLGlCQUFBO0FDRlo7QURJVTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FESVU7RUFDRSxhQUFBO0FDRlo7QURHWTtFQUNFLFdBQUE7QUNEZDtBRE9JO0VBQ0ksNkRBQUE7RUFDQSxVQUFBO0FDTFI7QURPSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJEL0RRO0VDZ0VSLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBGRDFERztFQzJESCxxREFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtBQ0xSO0FETVE7RUFDSSxhQUFBO0VBRUEsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0Q3RUk7QUV5RWhCO0FES1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hoQjtBRElnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQ0ZwQjtBREdvQjtFQUNJLGNBQUE7RUFDQSxjRHRGUjtFQ3VGUSxlQUFBO0VBQ0Esa0JBQUE7QUNEeEI7QURHb0I7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO1VBQUEsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkRBQUE7RUFDQSxzQkFBQTtBQ0R4QjtBRE9JO0VBQ0UsNEJBQUE7QUNMTjtBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNMUjtBRE1RO0VBQ0ksY0RsSEk7QUU4R2hCO0FET0k7RUFDSSxjRHRIUTtFQ3VIUixlQUFBO0FDTFI7QURPSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNMTjtBRE9JO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNMUjtBRE1ROzs7RUFHSSxXQUFBO0VBQ0EsYUFBQTtBQ0paO0FETVE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJEL0lJO0VDZ0pKLHlCQUFBO0FDSlo7QURLWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJEdEpBO0VDdUpBLDZHQUFBO0FDSGhCO0FES1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CRDlKQTtFQytKQSwwR0FBQTtBQ0hoQjtBREtZO0VBQ0ksa0NBQUE7QUNIaEI7QURJZ0I7RUFDSSxNQUFBO0VBQ0Esd0JBQUE7RUFDQSwwR0FBQTtBQ0ZwQjtBRElnQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUFBO0FDRnBCO0FEU0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FDTko7QURTQTtFQUNJLFlBQUE7RUFDQSxrREFBQTtFQUNBLDZEQUFBO0FDTko7QURTQTtFQUVRO0lBQ0ksU0FBQTtJQUNBLHNCQUFBO0VDUFY7QUFDRjtBRFdBO0VBQ0k7SUFDSSxhQUFBO0VDVE47QUFDRjtBRFlBO0VBQ0k7O0lBRUksYUFBQTtFQ1ZOO0FBQ0Y7QURhQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBGRHZOTztBRTRNWDtBRGNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNYSjtBRGNBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ1hKO0FEY0E7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDWEo7QURjQTtFQUNJLDhCQUFBO0FDWEo7QUQwQkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDdkJKO0FEMEJBO0VBQ0ksYUFBQTtBQ3ZCSjtBRDBCQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrREFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3ZCSjtBRDJCSTtFQUNJLG1CQUFBO0FDeEJSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcbi5tYWluLW5hdmJhciB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6ICROYXZ5O1xuICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgLm1lbnUtdWx7XG4gICAgICBsaXtcbiAgICAgICAgbWFyZ2luOiAwcHggMTNweDtcbiAgICAgIH1cbiAgICAgIC8vIEZpcnN0IGFuZCBMYXN0IGxpIGhhcyBubyBtYXJnaW5cbiAgICAgIGxpOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgbGk6bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLm1lbnUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBvdXRsaW5lOiAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gICAgICAgIGxpe1xuICAgICAgICAgIGF7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdi1idG57XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9ye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFzaWRlLXNob3cge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAgICAgICByaWdodDogMHB4O1xuICAgIH1cbiAgICBhc2lkZSB7XG4gICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IC02MjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMiwgMTIsIDI3LCAwLjcpIC0xMHB4IDBweCAzMHB4IC0xNXB4O1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAgICAgICBuYXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcbiAgICAgICAgICAgIG9sIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDIwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY3YtYnRue1xuICAgICAgcGFkZGluZzogN3B4IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmF2LW51bWJlciB7XG4gICAgICAgIGNvbG9yOiAkR3JlZW47XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLm5hdi10ZXh0e1xuICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICAubWVudS13cmFwcGVyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICAuaGFtYnVyZ2VyLW1lbnUsXG4gICAgICAgIC5oYW1idXJnZXItbWVudTphZnRlcixcbiAgICAgICAgLmhhbWJ1cmdlci1tZW51OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMS41cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhhbWJ1cmdlci1tZW51IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRHcmVlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwbXMgMzAwbXM7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkR3JlZW47XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJEdyZWVuO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmFuaW1hdGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5vbi10b3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG5cbi5uYXYtc2hhZG93IHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTEwcHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5tYWluLW5hdmJhciB7XG4gICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAuN3JlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgyN3B4KSB7XG4gICAgbmF2IC5uYXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgyN3B4KSB7XG4gICAgLm1lbnUtd3JhcHBlcixcbiAgICAubWVudS1yZXNwb25zaXZlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5mbGFnLXRleHQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJENvZGVGb250O1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNzJhNDU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNjYmQ1ZjUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMGExOTJmICFpbXBvcnRhbnQ7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDExcHggOHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE3MmE0NSAhaW1wb3J0YW50O1xufVxuXG4vLyAubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZTphZnRlciB7XG4vLyAgICAgY29udGVudDogXCIgXCI7XG4vLyAgICAgYmFja2dyb3VuZDogIzU4ZTJjNDtcbi8vICAgICB3aWR0aDogNjElO1xuLy8gICAgIGhlaWdodDogMXB4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgbWFyZ2luOiBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IDIxcHg7XG4vLyB9XG4uYXJyb3ctbGFuZ3VhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgZmlsbDogIzY0ZmZkYTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNjY2Q2ZjYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYigyIDEyIDI3IC8gNzAlKTtcbn1cblxuLmFycm93LWFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBmaWxsOiAjNjRmZmRhO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xuICAgIC5hcnJvdy1hY3RpdmUge1xuICAgICAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xuICAgIH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5tYWluLW5hdmJhciB7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZDogIzBhMTkyZjtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXVsIGxpIHtcbiAgbWFyZ2luOiAwcHggMTNweDtcbn1cbi5tYWluLW5hdmJhciAubWVudS11bCBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXJlc3BvbnNpdmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3V0bGluZTogMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXJlc3BvbnNpdmUgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbi5tYWluLW5hdmJhciAubWVudS1yZXNwb25zaXZlIGxpIC5jdi1idG4ge1xuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtcmVzcG9uc2l2ZSBsaSAubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtcmVzcG9uc2l2ZSBsaSAubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLW5hdmJhciAubWVudS1yZXNwb25zaXZlIGxpIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG59XG4ubWFpbi1uYXZiYXIgLmFzaWRlLXNob3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICByaWdodDogMHB4O1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIHtcbiAgd2lkdGg6IDc1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTIyNDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTYyNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuICBib3gtc2hhZG93OiByZ2JhKDIsIDEyLCAyNywgMC43KSAtMTBweCAwcHggMzBweCAtMTVweDtcbiAgcGFkZGluZzogMjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbi5tYWluLW5hdmJhciBhc2lkZSBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjY2NkNmY2O1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIG5hdiBvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIG5hdiBvbCBsaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4O1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIG5hdiBvbCBsaSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluLW5hdmJhciBhc2lkZSBuYXYgb2wgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHBhZGRpbmc6IDNweCAyMHB4IDIwcHg7XG59XG4ubWFpbi1uYXZiYXIgLmN2LWJ0biB7XG4gIHBhZGRpbmc6IDdweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbi1uYXZiYXIgLm5hdi1saW5rIHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbi1uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM2NGZmZGE7XG59XG4ubWFpbi1uYXZiYXIgLm5hdi1udW1iZXIge1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW4tbmF2YmFyIC5uYXYtdGV4dCB7XG4gIGNvbG9yOiAjY2NkNmY2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtd3JhcHBlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTtcbn1cbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudSxcbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudTphZnRlcixcbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudTpiZWZvcmUge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAxLjVweDtcbn1cbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuICBiYWNrZ3JvdW5kOiAjNjRmZmRhO1xuICB0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXdyYXBwZXIgLmhhbWJ1cmdlci1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA4cHg7XG4gIGJhY2tncm91bmQ6ICM2NGZmZGE7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtd3JhcHBlciAuaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjNjRmZmRhO1xuICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXdyYXBwZXIgLmhhbWJ1cmdlci1tZW51LmFuaW1hdGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXdyYXBwZXIgLmhhbWJ1cmdlci1tZW51LmFuaW1hdGU6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudS5hbmltYXRlOmJlZm9yZSB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLm9uLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuLm5hdi1zaGFkb3cge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xMHB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tYWluLW5hdmJhciAubmF2LWxpbmsge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcbiAgbmF2IC5uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MjdweCkge1xuICAubWVudS13cmFwcGVyLFxuLm1lbnUtcmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmZsYWctdGV4dCB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQ6ICMxNzJhNDU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjY2JkNWY1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDExcHggOHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzBhMTkyZiAhaW1wb3J0YW50O1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcbn1cblxuLmFycm93LWxhbmd1YWdlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBmaWxsOiAjNjRmZmRhO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNjY2Q2ZjYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xufVxuXG4uYXJyb3ctYWN0aXZlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBmaWxsOiAjNjRmZmRhO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlIC5hcnJvdy1hY3RpdmUge1xuICB2aXNpYmlsaXR5OiBpbmhlcml0O1xufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("animateMenu", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: "translateY(-50%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 4748:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function AboutComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 16);
} if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class AboutComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 51, vars: 6, consts: [["id", "about", 1, "section", "about"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "about-title"], [1, "section-title"], [1, "n-section-title"], [1, "row"], [1, "col-12", "col-md-6", "mb-4", "mb-md-0"], [1, "about-description"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "skills-list"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "skill-element"], [1, "underline"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "mt-4", "mt-md-0", "text-center"], [1, "about-img-container"], ["width", "300", "height", "300", "src", "assets/images/me.jpg", "alt", "", 1, "rounded", 3, "click"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "01.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 1, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 10)(15, "li", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Java ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 11)(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Spring Boot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 11)(22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Hibernate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 11)(25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "MySql ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 11)(28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "JDBC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 11)(31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 11)(34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 11)(37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 11)(40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Prime NG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 11)(43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "RxJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 11)(46, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "AWS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13)(49, "div", 14)(50, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_50_listener() { return ctx.analyticsService.sendAnalyticEvent("click_image", "about", "image"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "AboutMe.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 4, "AboutMe.Paragraphs"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n.about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n  width: 324px;\n  margin: auto;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border: 2px solid #64ffda;\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  border-radius: 3px;\n  bottom: 290px;\n  left: 23px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  color: #8892b0;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFtYW4lMjBTaGFybWFcXERlc2t0b3BcXGdpdCUyMHBvcnRmb2xpb1xcYW5kcmVzam9zZWhyLXBvcnRmb2xpby1tYXN0ZXJcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiLCJhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEVBQUE7QUNJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUZEUjtBRUlJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUZGUjtBRUlRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBRkZaO0FFTVE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUZKWjtBRVFJO0VBQ0ksYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRk5SO0FFU0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEZEbENHO0VDbUNILGNEM0NRO0FEb0NoQjtBRVFRO0VBQ0UsbUJBQUE7QUZOVjtBRVNRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNEaERJO0VDaURKLGVBQUE7RUFDQSxpQkFBQTtBRlBaO0FFYUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtFRlZOO0FBQ0Y7QUVhQTtFQUVRO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUZaVjtFRWNNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFRlpWO0FBQ0Y7QUVnQkE7RUFHUTtJQUNJLFdBQUE7RUZoQlY7RUVrQlU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFRmhCZDtFRW1CVTtJQUNJLGFBQUE7RUZqQmQ7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5hYm91dCAuYWJvdXQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xufVxuLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDMyNHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uYWJvdXQgLmFib3V0LWltZy1jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjRmZmRhO1xuICB6LWluZGV4OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm90dG9tOiAyOTBweDtcbiAgbGVmdDogMjNweDtcbn1cbi5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lciBpbWcge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQgLnNraWxscy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE0MHB4LCAyMDBweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uYWJvdXQgLnNraWxsLWVsZW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGNvbG9yOiAjODg5MmIwO1xufVxuLmFib3V0IC5za2lsbC1lbGVtZW50IHNwYW4ge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmFib3V0IC5za2lsbC1lbGVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pa5XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29sb3I6ICM2NGZmZGE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuYWJvdXQtaW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyOmFmdGVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3R0b206IDE5MHB4O1xuICAgIGxlZnQ6IDc0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYWJvdXQgLmFib3V0LWltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIC5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lcjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmFib3V0e1xuXG4gICAgLmFib3V0LWRlc2NyaXB0aW9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgIH1cblxuICAgIC5hYm91dC1pbWctY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMzI0cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkR3JlZW47XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm90dG9tOiAyOTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDIzcHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2tpbGxzLWxpc3R7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsbWlubWF4KDE0MHB4LDIwMHB4KSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2tpbGwtZWxlbWVudHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgY29sb3I6ICRTbGF0ZTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ+KWuSc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCl7XG4gICAgLmFib3V0LWltZy1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xuICAgIC5hYm91dHtcbiAgICAgICAgLmFib3V0LWltZy1jb250YWluZXIgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYWJvdXQtaW1nLWNvbnRhaW5lcjphZnRlciB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxOTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDc0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmFib3V0e1xuXG4gICAgICAgIC5hYm91dC1pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 616:
/*!************************************************************!*\
  !*** ./src/app/components/home/banner/banner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class BannerComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 20, vars: 10, consts: [[1, "section", "banner"], [1, "container"], [1, "section-box-banner"], [1, "content"], [1, "banner-title"], [1, "banner-description"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner"], ["href", "mailto:aman198sharma114@gmail.com", "target", "_black", 1, "main-btn", 3, "click"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aman Sharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Full-Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_17_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "banner", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bannerTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "Banner.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, "Banner.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 8, "Banner.ActionBtn"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImJhbm5lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFtYW4lMjBTaGFybWFcXERlc2t0b3BcXGdpdCUyMHBvcnRmb2xpb1xcYW5kcmVzam9zZWhyLXBvcnRmb2xpby1tYXN0ZXJcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxiYW5uZXJcXGJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0dBO0VBQ0ksaUJBQUE7QUNESjtBREdJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUNEUjtBREdRO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQ0RaO0FER1k7RUFDSSxnQkFBQTtBQ0RoQjtBRElZO0VBRUksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEZEWEw7QUVRWDtBRE1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUpEcEJMO0FFZ0JYO0FET1k7RUFDSSxjRDdCQTtBRXdCaEI7QURPWTtFQUNJLGNEbENBO0FFNkJoQjtBRFFZO0VBQ0ksbUJBQUE7QUNOaEI7QURTWTtFQUNJLGdCQUFBO0FDUGhCO0FEVVk7RUFDSSxZQUFBO0FDUmhCIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiXG5AaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYmFubmVye1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIFxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgIC5zZWN0aW9uLWJveC1iYW5uZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDF7XG4gICAgXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NGZmZGE7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIsIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoM3sgIFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkU2xhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2LWJ0bi1iYW5uZXJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICBcbiAgICB9ICAgIFxufVxuXG5cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLmJhbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmJhbm5lciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDk4cHg7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciBoMSB7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciBoMiwgLmJhbm5lciAuY29udGFpbmVyIC5zZWN0aW9uLWJveC1iYW5uZXIgaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IENhbGlicmUsIFNhbiBGcmFuY2lzY28sIFNGIFBybyBUZXh0LCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgU2Vnb2UgVUksIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLmJhbm5lciAuY29udGFpbmVyIC5zZWN0aW9uLWJveC1iYW5uZXIgaDIge1xuICBjb2xvcjogI2NjZDZmNjtcbn1cbi5iYW5uZXIgLmNvbnRhaW5lciAuc2VjdGlvbi1ib3gtYmFubmVyIGgzIHtcbiAgY29sb3I6ICM4ODkyYjA7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciAuYmFubmVyLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5iYW5uZXIgLmNvbnRhaW5lciAuc2VjdGlvbi1ib3gtYmFubmVyIHAge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLmJhbm5lciAuY29udGFpbmVyIC5zZWN0aW9uLWJveC1iYW5uZXIgLmRpdi1idG4tYmFubmVyIHtcbiAgaGVpZ2h0OiA0M3B4O1xufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('bannerTrigger', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0, transform: "translateX(-50px)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 5541:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class ContactComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 12, consts: [["id", "contact", 1, "section", "contact"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["href", "mailto:aman198sharma114@gmail.com", "target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_14_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "contact", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("05. ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Contact.Pretitle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Contact.Content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, "Contact.Btn"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #64ffda;\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBbWFuJTIwU2hhcm1hXFxEZXNrdG9wXFxnaXQlMjBwb3J0Zm9saW9cXGFuZHJlc2pvc2Voci1wb3J0Zm9saW8tbWFzdGVyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0k7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FDRFI7QURJSTtFQUVJLGtCQUFBO0VBSUEsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRHhCUTtFQ3lCUixZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtFQUlBLGFBQUE7RUFJQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjRHpDUTtFQzBDUixlQUFBO0VBQ0EsMEZEdkNHO0VDd0NILG1CQUFBO0VBQ0EsbUJBQUE7RUFJQSx1QkFBQTtFQUNBLGtCQUFBO0FDSFI7QURRQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VDTk47RURRTTtJQUNJLG1CQUFBO0lBQ0Esc0JBQUE7RUNOVjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcblxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jb250YWN0e1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtdGl0bGV7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5jb250YWN0LXByZS10aXRsZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCA0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICBcbiAgICAuY29udGFjdHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLmNvbnRhY3Qge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY29udGFjdCAuY29udGFjdC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2NjZDZmNjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uY29udGFjdCAuY29udGFjdC1wcmUtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwIDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3Qge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 616);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 4748);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/jobs.component */ 6228);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyects/proyects.component */ 3973);
/* harmony import */ var _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-proyects/more-proyects.component */ 9739);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 5541);








class HomeComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-banner")(2, "app-about")(3, "app-jobs")(4, "app-proyects")(5, "app-more-proyects")(6, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__.JobsComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_4__.ProyectsComponent, _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__.MoreProyectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3783:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 8263);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 4748);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 616);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 5541);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs/jobs.component */ 6228);
/* harmony import */ var _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-proyects/more-proyects.component */ 9739);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proyects/proyects.component */ 3973);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__.JobsComponent,
        _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__.ProyectsComponent,
        _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__.MoreProyectsComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule] }); })();


/***/ }),

/***/ 6228:
/*!********************************************************!*\
  !*** ./src/app/components/home/jobs/jobs.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsComponent": () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function JobsComponent_li_12_ng_template_3_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const jobDescriptionParagraph_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function JobsComponent_li_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, JobsComponent_li_12_ng_template_3_p_6_Template, 2, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
} if (rf & 2) {
    const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", job_r2.Title, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r2.Description);
} }
function JobsComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, JobsComponent_li_12_ng_template_3_Template, 8, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", job_r2.Tab)("ngbNavItem", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Tab);
} }
class JobsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.active = 0;
    }
    ngOnInit() {
    }
}
JobsComponent.ɵfac = function JobsComponent_Factory(t) { return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
JobsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobsComponent, selectors: [["app-jobs"]], decls: 15, vars: 8, consts: [["id", "jobs", 1, "section", "jobs"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "jobs-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "jobs-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "title", "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "title", "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "title-tab-content"], [1, "company-tab-content"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"]], template: function JobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "02.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "ul", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function JobsComponent_Template_ul_activeIdChange_10_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JobsComponent_li_12_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Experience.Jobs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n  .jobs .jobs-tabs {\n  display: flex;\n}\n  .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .jobs-tabs ul {\n  display: block;\n  width: 114.33px;\n  border: none;\n}\n  .jobs .jobs-tabs a.active {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a:hover {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n}\n  .jobs .jobs-tabs li {\n  border-left: 2px solid #303C55;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: #303c55;\n}\n.jobs[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n\n    .jobs-tabs {\n    display: block !important;\n  }\n    .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFtYW4lMjBTaGFybWFcXERlc2t0b3BcXGdpdCUyMHBvcnRmb2xpb1xcYW5kcmVzam9zZWhyLXBvcnRmb2xpby1tYXN0ZXJcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxqb2JzXFxqb2JzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIiwiam9icy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEVBQUE7QUNHQTtFQUNJLGFBQUE7QUZBSjtBRUVJO0VBQ0ksaUJBQUE7QUZBUjtBRUdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FGRFI7QUVJSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FGRlI7QUVLSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FGSFI7QUVNSTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLGVBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSwwREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRkQ1Q0c7RUM2Q0gsZUFBQTtFQUNBLGNEdERRO0FEa0RoQjtBRU9JO0VBQ0ksOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUZMUjtBRVNBO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0FGUEo7QUVTSTtFQUNJLGNEckVRO0VDc0VSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FGUFI7QUVTUTtFQUNJLGNEekVJO0FEa0VoQjtBRVdJO0VBQ0ksMEZEMUVHO0VDMkVILGVBQUE7RUFDQSxtQkFBQTtFQUNJLDhCQUFBO0VBQ0osMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0R4RlE7RUN5RlIsbUJBQUE7QUZUUjtBRVlJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRlZSO0FFWVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0RuR0k7QUR5RmhCO0FFaUJBO0VBRVE7SUFDSSxZQUFBO0VGZlY7O0VFa0JFO0lBQ0kseUJBQUE7RUZmTjtFRWlCTTtJQUNJLDJCQUFBO0VGZlY7RUVrQk07SUFDSSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFRmhCVjtBQUNGIiwiZmlsZSI6ImpvYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyAudGFiLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMzhweDtcbn1cbjo6bmctZGVlcCAuam9icyAuam9icy10YWJzIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMTQuMzNweDtcbiAgYm9yZGVyOiBub25lO1xufVxuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjQwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjRmZmRhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTIyNDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NGZmZGEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDAgMjBweCAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjODg5MmIwO1xufVxuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMgbGkge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzMDNDNTU7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMzMDNjNTU7XG59XG5cbi5qb2JzIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmpvYnMgLnRpdGxlLXRhYi1jb250ZW50IHtcbiAgY29sb3I6ICNjY2Q2ZjY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmpvYnMgLnRpdGxlLXRhYi1jb250ZW50IC5jb21wYW55LXRhYi1jb250ZW50IHtcbiAgY29sb3I6ICM2NGZmZGE7XG59XG4uam9icyAuam9iLXRpbWUge1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1sZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAtbW96LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIC1tcy1sZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogI2E4YjJkMTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5qb2JzIC5qb2ItZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmpvYnMgLmpvYi1kZXNjcmlwdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKWuVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjNjRmZmRhO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmpvYnMgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5qb2JzLXRhYnMge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5qb2JzLXRhYnMgLnRhYi1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5qb2JzLXRhYnMgdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuXG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC50YWItY29udGVudHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM4cHg7XG4gICAgfVxuXG4gICAgdWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTE0LjMzcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICBhLmFjdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogJEdyZWVuICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgICBcbiAgICBhOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkR3JlZW4gIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuXG4gICAgYXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAycHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogJFNsYXRlO1xuICAgIH1cblxuICAgIGxpe1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRMaWdodGVzdE5hdnk7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig0OCwgNjAsIDg1KTtcbiAgICB9XG59XG5cbi5qb2Jze1xuXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICAudGl0bGUtdGFiLWNvbnRlbnR7XG4gICAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICAgLmNvbXBhbnktdGFiLWNvbnRlbnR7XG4gICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmpvYi10aW1le1xuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmpvYi1kZXNjcmlwdGlvbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAn4pa5JztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAuam9icyB7XG4gICAgICAgIC5qb2ItZGVzY3JpcHRpb257XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgOjpuZy1kZWVwIC5qb2JzLXRhYnN7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLnRhYi1jb250ZW50e1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 9739:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/more-proyects/more-proyects.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreProyectsComponent": () => (/* binding */ MoreProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function MoreProyectsComponent_div_11_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r4);
} }
function MoreProyectsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreProyectsComponent_div_11_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const project_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.redirect(project_r1["demoLink"], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14)(6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreProyectsComponent_div_11_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.analyticsService.sendAnalyticEvent("click_pokemonlist_external_link", "proyects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreProyectsComponent_div_11_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.analyticsService.sendAnalyticEvent("click_pokemonlist_github", "proyects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoreProyectsComponent_div_11_li_16_Template, 3, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
} }
class MoreProyectsComponent {
    constructor(router, analyticsService) {
        this.router = router;
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    redirect(route, event) {
        const id = event.target.id;
        if (id == 'demoLink' || id == 'ghLink') {
            return;
        }
        window.open(route, '_blank');
    }
}
MoreProyectsComponent.ɵfac = function MoreProyectsComponent_Factory(t) { return new (t || MoreProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
MoreProyectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoreProyectsComponent, selectors: [["app-more-proyects"]], decls: 13, vars: 6, consts: [[1, "section", "more-proyects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "n-section-title"], [1, "mt-5"], [1, "row", "p-0"], ["class", "col-12 col-md-6 col-lg-6 col-xl-4 proyect-col", "data-aos", "fade-up", "data-aos-duration", "1000", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "proyect-col", 3, "click"], [1, "more-proyect-box"], [1, "row", "w-100", "text-left", "m-0", "p-0"], [1, "col-6", "p-0"], ["src", "assets/icons/folder.svg", "width", "40"], [1, "col-6", "d-flex", "p-0", "justify-content-end"], ["target", "_blank", 2, "color", "inherit", 3, "href", "click"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"], [1, "other-proyect-title", "mt-4"], [1, "other-proyect-description"], [1, "more-proyects-skills"], [4, "ngFor", "ngForOf"], [1, "underline"]], template: function MoreProyectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "04.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MoreProyectsComponent_div_11_Template, 17, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "OtherProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, "OtherProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover, .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #64ffda;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #ccd6f6;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n@media (max-width: 1300px) {\n  .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsIm1vcmUtcHJveWVjdHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBbWFuJTIwU2hhcm1hXFxEZXNrdG9wXFxnaXQlMjBwb3J0Zm9saW9cXGFuZHJlc2pvc2Voci1wb3J0Zm9saW8tbWFzdGVyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcbW9yZS1wcm95ZWN0c1xcbW9yZS1wcm95ZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0dJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUNEUjtBREdRO0VBQ0ksa0RBQUE7RUFFQSwwREFBQTtFQUlBLGFBQUE7RUFJQSw4QkFBQTtFQUlBLG1CQUFBO0VBR0Esc0JBQUE7RUFJQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLHlCRGpDSTtFQ2tDSixlQUFBO0FDRFo7QURHWTtFQUdJLDJCQUFBO0FDRGhCO0FER1k7RUFDSSxrREFBQTtBQ0RoQjtBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjRDFDQTtBRXdDaEI7QURLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEbERBO0FFK0NoQjtBRE1ZO0VBQ0ksZUFBQTtFQUNBLGNEeERBO0FFb0RoQjtBRE9ZO0VBSUksYUFBQTtFQUlBLHFCQUFBO0VBSUEsWUFBQTtFQUdBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0xoQjtBRE9nQjtFQUNJLGVBQUE7RUFDQSxjRGxGSjtFQ21GSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEZEN0VUO0FFd0VYO0FETW9CO0VBQ0kscUJBQUE7QUNKeEI7QURjQTtFQUVRO0lBQ0ksWUFBQTtFQ1pWO0FBQ0YiLCJmaWxlIjoibW9yZS1wcm95ZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLm1vcmUtcHJveWVjdHN7XG4gICAgLnByb3llY3QtY29se1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgICAgIC5tb3JlLXByb3llY3QtYm94IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwxMiwyNywwLjcpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Zne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3RoZXItcHJveWVjdC10aXRsZXtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vdGhlci1wcm95ZWN0LWRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJExpZ2h0U2xhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb3JlLXByb3llY3RzLXNraWxsc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRTbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgICAgICAgICAgICAgLnVuZGVybGluZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDEzMDBweCl7XG4gICAgLm1vcmUtcHJveWVjdHN7XG4gICAgICAgIC5wcm95ZWN0LWNvbHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5tb3JlLXByb3llY3RzIC5wcm95ZWN0LWNvbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ubW9yZS1wcm95ZWN0cyAucHJveWVjdC1jb2wgLm1vcmUtcHJveWVjdC1ib3gge1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtYWxpZ246IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDJyZW0gMS43NXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjI0MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vcmUtcHJveWVjdHMgLnByb3llY3QtY29sIC5tb3JlLXByb3llY3QtYm94OmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5tb3JlLXByb3llY3RzIC5wcm95ZWN0LWNvbCAubW9yZS1wcm95ZWN0LWJveDpob3ZlciwgLm1vcmUtcHJveWVjdHMgLnByb3llY3QtY29sIC5tb3JlLXByb3llY3QtYm94OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggLTE1cHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XG59XG4ubW9yZS1wcm95ZWN0cyAucHJveWVjdC1jb2wgLm1vcmUtcHJveWVjdC1ib3ggc3ZnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM2NGZmZGE7XG59XG4ubW9yZS1wcm95ZWN0cyAucHJveWVjdC1jb2wgLm1vcmUtcHJveWVjdC1ib3ggLm90aGVyLXByb3llY3QtdGl0bGUge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjY2NkNmY2O1xufVxuLm1vcmUtcHJveWVjdHMgLnByb3llY3QtY29sIC5tb3JlLXByb3llY3QtYm94IC5vdGhlci1wcm95ZWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2E4YjJkMTtcbn1cbi5tb3JlLXByb3llY3RzIC5wcm95ZWN0LWNvbCAubW9yZS1wcm95ZWN0LWJveCAubW9yZS1wcm95ZWN0cy1za2lsbHMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcbiAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubW9yZS1wcm95ZWN0cyAucHJveWVjdC1jb2wgLm1vcmUtcHJveWVjdC1ib3ggLm1vcmUtcHJveWVjdHMtc2tpbGxzIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg4OTJiMDtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuLm1vcmUtcHJveWVjdHMgLnByb3llY3QtY29sIC5tb3JlLXByb3llY3QtYm94IC5tb3JlLXByb3llY3RzLXNraWxscyBsaSAudW5kZXJsaW5lIHtcbiAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5tb3JlLXByb3llY3RzIC5wcm95ZWN0LWNvbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 3973:
/*!****************************************************************!*\
  !*** ./src/app/components/home/proyects/proyects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectsComponent": () => (/* binding */ ProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





const _c0 = ["imgContainer"];
function ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template, 3, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r16.$implicit;
    const i_r2 = ctx_r16.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r10.slide + i_r2);
} }
function ProyectsComponent_div_9_owl_carousel_o_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function ProyectsComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function ProyectsComponent_div_9_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r19);
} }
function ProyectsComponent_div_9_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProyectsComponent_div_9_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template, 2, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r27.$implicit;
    const i_r2 = ctx_r27.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r22.slide + i_r2);
} }
function ProyectsComponent_div_9_owl_carousel_o_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r8.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function ProyectsComponent_div_9_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function ProyectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProyectsComponent_div_9_div_2_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProyectsComponent_div_9_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.debug(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProyectsComponent_div_9_li_13_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProyectsComponent_div_9_a_15_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProyectsComponent_div_9_a_16_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProyectsComponent_div_9_owl_carousel_o_17_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProyectsComponent_div_9_div_18_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", project_r1.img, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("proyect-info-right", i_r2 % 2 == 0)("proyect-info-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 33, "FeatureProjects.Label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", project_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("justify-content-end", i_r2 % 2 == 0)("justify-content-start", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["ghLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["demoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
} }
class ProyectsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            navSpeed: 700,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000
        };
    }
    ngOnInit() {
    }
    debug() {
        this.imgContainer.nativeElement.scroll({
            top: this.imgContainer.nativeElement.scrollHeight,
            left: 0,
            behavior: 'smooth',
        });
    }
}
ProyectsComponent.ɵfac = function ProyectsComponent_Factory(t) { return new (t || ProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
ProyectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProyectsComponent, selectors: [["app-proyects"]], viewQuery: function ProyectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
    } }, decls: 12, vars: 6, consts: [["id", "proyects", 1, "section", "proyects"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "section-title"], [1, "n-section-title"], ["class", "d-flex proyect-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "d-flex", "proyect-container"], ["class", "owl-carousel-o", 3, "options", 4, "ngIf"], ["class", "img-feature-proyect-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], [1, "h-100"], [1, "proyect-box"], [1, "feature-proyect"], [1, "proyect-name"], [1, "proyect-description-box", 3, "click"], [1, "mb-0", 3, "innerHTML"], [1, "proyect-skills"], ["class", "ml-3", 4, "ngFor", "ngForOf"], [1, "proyect-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], [1, "owl-carousel-o", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "img-container"], ["imgContainer", ""], [1, "img-feature-proyect", "rounded", 3, "src", "alt"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-feature-proyect-container"], [1, "img-feature-proyect-box"], [1, "img-container", 2, "width", "auto"], ["width", "600px", 1, "img-feature-proyect", "rounded", 3, "src", "alt"], [1, "ml-3"], [1, "underline", "technology"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "ml-3", "fab", "fa-github"], [1, "ml-3", "fas", "fa-external-link-alt"]], template: function ProyectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProyectsComponent_div_9_Template, 19, 35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "FeatureProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%] {\n  height: 360px;\n  margin: 100px 0;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .feature-proyect[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #64ffda;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 20px;\n  color: #ccd6f6;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-description-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: #112240;\n  color: #a8b2d1;\n  font-size: 18px;\n  border-radius: 3px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.owl-carousel-o[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.img-feature-proyect-container[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .img-feature-proyect-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%]   .img-feature-proyect-box[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%]   .img-feature-proyect[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .proyect-info-right[_ngcontent-%COMP%], .proyect-info-left[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .proyect-info-right[_ngcontent-%COMP%], .proyect-info-left[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-description-box[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: #a8b2d1;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .img-feature-proyect-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .proyects[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .justify-content-start[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: #0a192fe3;\n  }\n}\n  .owl-theme .owl-dots .owl-dot.active span,   .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  background: #ffffff33;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 320px;\n  overflow: auto;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #64ffda;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsInByb3llY3RzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW1hbiUyMFNoYXJtYVxcRGVza3RvcFxcZ2l0JTIwcG9ydGZvbGlvXFxhbmRyZXNqb3NlaHItcG9ydGZvbGlvLW1hc3Rlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXHByb3llY3RzXFxwcm95ZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNBUjtBRENRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURDUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FEQ1E7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNEZEE7RUNlQSwwRkRYTDtFQ1lLLGdCQUFBO0VBQ0EsY0FBQTtBQ0VoQjtBREFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0R4QkE7QUUwQmhCO0FEQVk7RUFDSSxrREFBQTtFQUVBLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRHJDQTtFQ3NDQSxjRG5DQTtFQ29DQSxlQUFBO0VBQ0Esa0JBQUE7QUNFaEI7QURBWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLGFBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxlQUFBO0VBQ0EsMEZEL0NUO0VDZ0RTLGVBQUE7RUFDQSxjRHpESjtFQzBESSxrQkFBQTtFQUNBLG1CQUFBO0FDR3BCO0FERm9CO0VBQ0UsbUJBQUE7QUNJdEI7QURBWTtFQUNJLGdCQUFBO0FDRWhCO0FERGdCO0VBQ0ksZUFBQTtBQ0dwQjtBRElBO0VBQ0ksWUFBQTtBQ0RKO0FER0E7RUFDSSxhQUFBO0FDQUo7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0FOOztFREVFO0lBQ0ksVUFBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7RUNDTjtFREFNO0lBQ0ksbUJBQUE7SUFDQSxzQkFBQTtFQ0VWO0VEQU07SUFDSSxXQUFBO0VDRVY7O0VEQ0U7O0lBRUksVUFBQTtFQ0VOO0FBQ0Y7QURDQTtFQUVJOztJQUVJLGlDQUFBO0VDQU47QUFDRjtBREdBO0VBQ0k7SUFDSSxhQUFBO0VDRE47O0VESU07SUFDSSx1QkFBQTtJQUNBLHlCQUFBO0VDRFY7RURFVTtJQUNJLFdBQUE7RUNBZDtFREVVO0lBQ0ksV0FBQTtFQ0FkO0VERVU7SUFDSSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLHdDQUFBO0lBQ0EsY0RwSUE7SUNxSUEsZUFBQTtJQUNBLGtCQUFBO0VDQWQ7RURFVTs7SUFFSSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0Esa0JBQUE7RUNBZDtFRENjOztJQUNJLGNBQUE7RUNFbEI7RURDVTtJQUNJLGFBQUE7RUNDZDtFREVNOztJQUVJLFlBQUE7RUNBVjtFREVNOztJQUVJLDZCQUFBO0VDQVY7RURFTTtJQUNJLGtDQUFBO0VDQVY7RURFTTtJQUNJLGtDQUFBO0VDQVY7RURJTTs7SUFFSSxhQUFBO0lBQ0EscUJBQUE7RUNGVjtBQUNGO0FETUE7O0VBRUksa0NBQUE7QUNKSjtBRE9BO0VBQ0kscUJBQUE7QUNKSjtBRE9BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSko7QURRQSxVQUFBO0FBRUE7RUFDSSxVQUFBO0FDTko7QURVQSxVQUFBO0FBRUM7RUFDRyxpQ0FBQTtFQUNBLGtCQUFBO0FDUko7QURZQSxXQUFBO0FBRUM7RUFDRyxtQkRoTlk7RUNpTlosa0JBQUE7QUNWSjtBRGNBLG9CQUFBO0FBRUM7RUFDRyxtQkR4Tlk7QUU0TWhCIiwiZmlsZSI6InByb3llY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XG5cbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuLnByb3llY3RzIHtcbiAgICAucHJveWVjdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgICBtYXJnaW46IDEwMHB4IDA7XG4gICAgICAgIC5wcm95ZWN0LWluZm8tbGVmdCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICAucHJveWVjdC1pbmZvLXJpZ2h0IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTU3cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICB9XG4gICAgICAgIC5wcm95ZWN0LWJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIC5mZWF0dXJlLXByb3llY3Qge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkR3JlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb3llY3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb3llY3QtZGVzY3JpcHRpb24tYm94IHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJveWVjdC1za2lsbHMge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTBweDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkU2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgLnRlY2hub2xvZ3l7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm95ZWN0LWxpbmtzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3dsLWNhcm91c2VsLW97XG4gICAgd2lkdGg6IDYwMHB4O1xufVxuLmltZy1mZWF0dXJlLXByb3llY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiAgbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgLm93bC1jYXJvdXNlbC1ve1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaW1nLWZlYXR1cmUtcHJveWVjdC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgIC5pbWctZmVhdHVyZS1wcm95ZWN0LWJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLWZlYXR1cmUtcHJveWVjdCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJveWVjdC1pbmZvLXJpZ2h0LFxuICAgIC5wcm95ZWN0LWluZm8tbGVmdCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5wcm95ZWN0LWluZm8tcmlnaHQsXG4gICAgLnByb3llY3QtaW5mby1sZWZ0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm93bC1jYXJvdXNlbC1ve1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAucHJveWVjdHMge1xuICAgICAgICAucHJveWVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDMzcHggMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLnByb3llY3QtaW5mby1sZWZ0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm95ZWN0LWluZm8tcmlnaHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb3llY3QtZGVzY3JpcHRpb24tYm94IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb3llY3QtaW5mby1yaWdodCxcbiAgICAgICAgICAgIC5wcm95ZWN0LWluZm8tbGVmdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIC5wcm95ZWN0LWJveCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWctZmVhdHVyZS1wcm95ZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJveWVjdC1pbmZvLXJpZ2h0LFxuICAgICAgICAucHJveWVjdC1pbmZvLWxlZnQge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXJpZ2h0LFxuICAgICAgICAudGV4dC1sZWZ0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmp1c3RpZnktY29udGVudC1zdGFydCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cblxuICAgICAgICAucHJveWVjdC1pbmZvLXJpZ2h0IC5wcm95ZWN0LWJveCxcbiAgICAgICAgLnByb3llY3QtaW5mby1sZWZ0IC5wcm95ZWN0LWJveCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBhMTkyZmUzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sXG4gOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5cbi8qIHdpZHRoICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA3cHg7XG59XG5cblxuLyogVHJhY2sgKi9cblxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggIzg4OTJiMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cblxuLyogSGFuZGxlICovXG5cbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkR3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJEdyZWVuO1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLnByb3llY3RzIC5wcm95ZWN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogMTAwcHggMDtcbn1cbi5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtaW5mby1sZWZ0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgZGlzcGxheTogdGFibGU7XG59XG4ucHJveWVjdHMgLnByb3llY3QtY29udGFpbmVyIC5wcm95ZWN0LWluZm8tcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTU3cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtYm94IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtYm94IC5mZWF0dXJlLXByb3llY3Qge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnByb3llY3RzIC5wcm95ZWN0LWNvbnRhaW5lciAucHJveWVjdC1ib3ggLnByb3llY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgY29sb3I6ICNjY2Q2ZjY7XG59XG4ucHJveWVjdHMgLnByb3llY3QtY29udGFpbmVyIC5wcm95ZWN0LWJveCAucHJveWVjdC1kZXNjcmlwdGlvbi1ib3gge1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTIyNDA7XG4gIGNvbG9yOiAjYThiMmQxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtYm94IC5wcm95ZWN0LXNraWxscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjVweCAwIDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJveWVjdHMgLnByb3llY3QtY29udGFpbmVyIC5wcm95ZWN0LWJveCAucHJveWVjdC1za2lsbHMgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzg4OTJiMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnByb3llY3RzIC5wcm95ZWN0LWNvbnRhaW5lciAucHJveWVjdC1ib3ggLnByb3llY3Qtc2tpbGxzIGxpIC50ZWNobm9sb2d5IHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtYm94IC5wcm95ZWN0LWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtYm94IC5wcm95ZWN0LWxpbmtzIGkge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5vd2wtY2Fyb3VzZWwtbyB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLmltZy1mZWF0dXJlLXByb3llY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5vd2wtY2Fyb3VzZWwtbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWctZmVhdHVyZS1wcm95ZWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgfVxuICAuaW1nLWZlYXR1cmUtcHJveWVjdC1jb250YWluZXIgLmltZy1mZWF0dXJlLXByb3llY3QtYm94IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmltZy1mZWF0dXJlLXByb3llY3QtY29udGFpbmVyIC5pbWctZmVhdHVyZS1wcm95ZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcm95ZWN0LWluZm8tcmlnaHQsXG4ucHJveWVjdC1pbmZvLWxlZnQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAucHJveWVjdC1pbmZvLXJpZ2h0LFxuLnByb3llY3QtaW5mby1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3dsLWNhcm91c2VsLW8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJveWVjdHMgLnByb3llY3QtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDMzcHggMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtaW5mby1sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJveWVjdHMgLnByb3llY3QtY29udGFpbmVyIC5wcm95ZWN0LWluZm8tcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm95ZWN0cyAucHJveWVjdC1jb250YWluZXIgLnByb3llY3QtZGVzY3JpcHRpb24tYm94IHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYThiMmQxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgLnByb3llY3RzIC5wcm95ZWN0LWNvbnRhaW5lciAucHJveWVjdC1pbmZvLXJpZ2h0LFxuLnByb3llY3RzIC5wcm95ZWN0LWNvbnRhaW5lciAucHJveWVjdC1pbmZvLWxlZnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAucHJveWVjdHMgLnByb3llY3QtY29udGFpbmVyIC5wcm95ZWN0LWluZm8tcmlnaHQgLnByb3llY3QtYm94LFxuLnByb3llY3RzIC5wcm95ZWN0LWNvbnRhaW5lciAucHJveWVjdC1pbmZvLWxlZnQgLnByb3llY3QtYm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJveWVjdHMgLnByb3llY3QtY29udGFpbmVyIC5pbWctZmVhdHVyZS1wcm95ZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJveWVjdHMgLnByb3llY3QtaW5mby1yaWdodCxcbi5wcm95ZWN0cyAucHJveWVjdC1pbmZvLWxlZnQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAucHJveWVjdHMgLnRleHQtcmlnaHQsXG4ucHJveWVjdHMgLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb3llY3RzIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm95ZWN0cyAuanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm95ZWN0cyAucHJveWVjdC1pbmZvLXJpZ2h0IC5wcm95ZWN0LWJveCxcbi5wcm95ZWN0cyAucHJveWVjdC1pbmZvLWxlZnQgLnByb3llY3QtYm94IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwYTE5MmZlMztcbiAgfVxufVxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLFxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDMyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA3cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjODg5MmIwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM2NGZmZGE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY0ZmZkYTtcbn0iXX0= */"] });


/***/ }),

/***/ 914:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 5943);


class AnalyticsService {
    constructor($gaService) {
        this.$gaService = $gaService;
    }
    sendAnalyticEvent(action, category, label) {
        this.$gaService.event(action, category, label);
    }
    sendAnalyticPageView(path, title) {
        this.$gaService.pageView(path, title);
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService)); };
AnalyticsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3469:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



class LanguageService {
    constructor(translateService, location) {
        this.translateService = translateService;
        this.location = location;
    }
    initLanguage() {
        this.translateService.addLangs(["en", "es"]);
        let language = navigator.language || navigator.userLanguage;
        language = language.split("-").includes("es") ? "es" : "en";
        this.translateService.setDefaultLang(language);
        // Change the URL without navigate:
        this.location.go(language);
        this.language = language;
    }
    changeLanguage(language) {
        this.translateService.setDefaultLang(language);
        this.location.go(language);
        this.language = language;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    trackAnalyticID: "G-4ML1VNCP9T"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map