(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adamj\Documents\Projects\Code\DBots\Website\src\main.ts */"zUnb");


/***/ }),

/***/ "0S1r":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/log-module/log-module.component.ts ***!
  \**************************************************************/
/*! exports provided: LogModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModuleComponent", function() { return LogModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bots/bot-sidebar/bot-sidebar.component */ "Z6y1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../member-username/member-username.component */ "aVT6");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/clean-date-time.pipe */ "Rc5a");




















function LogModuleComponent_div_10_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.changes.length - i_r14, " ");
} }
function LogModuleComponent_div_10_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "member-username", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", ctx_r4.userService.user);
} }
function LogModuleComponent_div_10_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Old ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, row_r16.changes == null ? null : row_r16.changes.old));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, row_r16.changes == null ? null : row_r16.changes.old));
} }
function LogModuleComponent_div_10_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, row_r17.changes == null ? null : row_r17.changes.new));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, row_r17.changes == null ? null : row_r17.changes.new));
} }
function LogModuleComponent_div_10_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LogModuleComponent_div_10_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "cleanDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, row_r18.at), " ");
} }
function LogModuleComponent_div_10_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 25);
} }
function LogModuleComponent_div_10_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 26);
} }
const _c0 = function () { return [10, 25, 100]; };
function LogModuleComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LogModuleComponent_div_10_th_3_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LogModuleComponent_div_10_td_4_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LogModuleComponent_div_10_th_6_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LogModuleComponent_div_10_td_7_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LogModuleComponent_div_10_th_9_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LogModuleComponent_div_10_td_10_Template, 6, 6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LogModuleComponent_div_10_th_12_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LogModuleComponent_div_10_td_13_Template, 6, 6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LogModuleComponent_div_10_th_15_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LogModuleComponent_div_10_td_16_Template, 3, 3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LogModuleComponent_div_10_tr_17_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LogModuleComponent_div_10_tr_18_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-paginator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
class LogModuleComponent {
    constructor(botService, route, seo, userService) {
        this.botService = botService;
        this.route = route;
        this.seo = seo;
        this.userService = userService;
        this.displayedColumns = ['number', 'by', 'old', 'new', 'at'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.changes = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.botService.init();
            const id = this.route.snapshot.paramMap.get('id');
            this.bot = this.botService.getSavedBot(id);
            this.user = this.botService.getBot(id);
            this.seo.setTags({
                titlePrefix: 'DBots',
                titleSuffix: `${this.user.username} Logs`,
                description: 'View bot logs and changes to the bot listing.',
                url: `dashboard/bots/${id}/log`
            });
            const log = yield this.botService.getSavedLog(id);
            this.changes = log.changes.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.changes);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator)
            this.dataSource.paginator.firstPage();
    }
}
LogModuleComponent.ɵfac = function LogModuleComponent_Factory(t) { return new (t || LogModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
LogModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogModuleComponent, selectors: [["app-log-module"]], viewQuery: function LogModuleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 11, vars: 4, consts: [[3, "bot", "loaded", "user"], [1, "container"], [1, "display-4"], [1, "my-2"], ["appearance", "outline", 1, "d-flex", "justify-content-center"], ["matInput", "", "placeholder", "prefix", 3, "keyup"], ["class", "mat-elevation-z8", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "by"], ["class", "user", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "old"], ["matColumnDef", "new"], ["matColumnDef", "at"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["appearance", "outline", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "user"], [3, "member"], [3, "highlight"], ["mat-header-row", ""], ["mat-row", ""]], template: function LogModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bot-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Audit Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function LogModuleComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LogModuleComponent_div_10_Template, 20, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx.bot)("loaded", ctx.bot && ctx.user)("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataSource);
    } }, directives: [_bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["BotSidebarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_13__["MemberUsernameComponent"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["Highlight"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"], _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_15__["CleanDateTimePipe"]], styles: ["pre[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    max-width: 20vw;\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n    transform: scale(0.65);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImxvZy1tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByZSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-log-module',
                templateUrl: './log-module.component.html',
                styleUrls: ['./log-module.component.css']
            }]
    }], function () { return [{ type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "0rEi":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-sidebar/dashboard-sidebar.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidebarComponent", function() { return DashboardSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/theme.service */ "WPWp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "o6KS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











const _c0 = ["themeSelect"];
const _c1 = ["*"];
class DashboardSidebarComponent {
    constructor(service, userService) {
        var _a;
        this.service = service;
        this.userService = userService;
        this.defaultTheme = 'NEXT_GEN';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            theme: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_a = localStorage.getItem('theme')) !== null && _a !== void 0 ? _a : this.defaultTheme)
        });
        document.title = 'DBots - Dashboard';
    }
    get user() { var _a; return (_a = this.userService.user) !== null && _a !== void 0 ? _a : {}; }
    ngOnInit() {
        this.service.updateTheme();
        this.form.valueChanges.subscribe(() => this.service.changeTheme(this.form.get('theme').value));
    }
}
DashboardSidebarComponent.ɵfac = function DashboardSidebarComponent_Factory(t) { return new (t || DashboardSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
DashboardSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardSidebarComponent, selectors: [["dashboard-sidebar"]], viewQuery: function DashboardSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.themeSelect = _t.first);
    } }, ngContentSelectors: _c1, decls: 28, vars: 4, consts: [[1, "side-nav", "navbar-dark"], [1, "header"], [3, "src", "alt"], ["routerLink", "/dashboard"], [1, "navbar-nav"], [3, "formGroup"], ["f", "ngForm"], [1, "category"], ["appearance", "outline", 1, "ml-3", "m-2"], ["formControlName", "theme"], ["themeSelect", ""], ["value", "COSMIC"], ["value", "CHOCOLATE"], ["value", "IONIC"], ["value", "TWILIGHT"], ["value", "NEXT_GEN", "selected", ""], ["id", "content"]], template: function DashboardSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cosmic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chocolate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Twilight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next Gen (Default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    margin-left: 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    background: var(--background-tertiary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUMiLCJmaWxlIjoiZGFzaGJvYXJkLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-sidebar',
                templateUrl: './dashboard-sidebar.component.html',
                styleUrls: ['./dashboard-sidebar.component.css']
            }]
    }], function () { return [{ type: src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { themeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['themeSelect']
        }] }); })();


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2uGl":
/*!************************************************!*\
  !*** ./src/app/dashboard/api/api.component.ts ***!
  \************************************************/
/*! exports provided: APIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIComponent", function() { return APIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../save-changes/save-changes.component */ "NWAD");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var src_app_services_bot_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bot-token.service */ "RtWs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bots/bot-sidebar/bot-sidebar.component */ "Z6y1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");

















function APIComponent_div_2_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Should be a valid URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function APIComponent_div_2_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](!ctx_r4.webhookResponse.ok ? "alert-danger" : "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx_r4.webhookResponse.message));
} }
function APIComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " How to Post Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Users with this token can post stats to your bot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Bot API token: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function APIComponent_div_2_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.regenerate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function APIComponent_div_2_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.toggleHidden(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function APIComponent_div_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.copyToken(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Vote Webhook URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, APIComponent_div_2_mat_error_33_Template, 2, 0, "mat-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "The vote webook URL is sent when a user votes for your bot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function APIComponent_div_2_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.testWebhook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, APIComponent_div_2_div_39_Template, 3, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r1.hidden ? "Hidden" : ctx_r1.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.get("voteWebhookURL").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.webhookResponse);
} }
class APIComponent {
    constructor(botService, tokens, route, saveChanges, seo, userService) {
        this.botService = botService;
        this.tokens = tokens;
        this.route = route;
        this.saveChanges = saveChanges;
        this.seo = seo;
        this.userService = userService;
        this.hidden = true;
        this.token = '';
        this.webhookResponse = {
            message: '',
            ok: false
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            voteWebhookURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('https://')
        });
    }
    get id() { return this.route.snapshot.paramMap.get('id'); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.botService.init();
            this.bot = this.botService.getSavedBot(this.id);
            this.user = this.botService.getBot(this.id);
            const apiDocument = yield this.tokens.getAPIDocument(this.id);
            this.token = apiDocument.token;
            this.form.get('voteWebhookURL').setValue(apiDocument.voteWebhookURL);
            this.form.valueChanges.subscribe(() => this.openSaveChanges());
            this.originalDocument = this.form.value;
            this.seo.setTags({
                description: '',
                titlePrefix: this.user.tag,
                titleSuffix: 'API',
                url: `dashboard/bots/${this.id}`
            });
        });
    }
    openSaveChanges() {
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (!this.form.valid || snackBarRef)
            return;
        this.saveChanges$ = this.saveChanges.openFromComponent(_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_3__["SaveChangesComponent"]).afterOpened()
            .subscribe(() => {
            const component = this.saveChanges._openedSnackBarRef.instance;
            component.onSave.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.submit(); }));
            component.onReset.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.reset(); }));
        });
    }
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.form.setValue(Object.assign({}, this.originalDocument));
            this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.saveChanges.dismiss();
            yield this.botService.updateBotAPI(this.user.id, this.form.value);
        });
    }
    regen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = yield this.tokens.regenToken(this.id);
        });
    }
    toggleHidden() {
        this.hidden = !this.hidden;
    }
    regenerate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = yield this.tokens.regenToken(this.id);
        });
    }
    copyToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield navigator.clipboard.writeText(this.token);
        });
    }
    testWebhook() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.webhookResponse.message = yield this.tokens.testWebhook(this.form.value.voteWebhookURL, {
                    at: new Date(),
                    by: this.userService.user.id
                });
                this.webhookResponse.ok = true;
            }
            catch (error) {
                this.webhookResponse.ok = false;
                this.webhookResponse.message = (_h = (_g = (_e = (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : (_d = (_c = error === null || error === void 0 ? void 0 : error.rejection) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.message) !== null && _e !== void 0 ? _e : (_f = error === null || error === void 0 ? void 0 : error.rejection) === null || _f === void 0 ? void 0 : _f.error) !== null && _g !== void 0 ? _g : error === null || error === void 0 ? void 0 : error.message) !== null && _h !== void 0 ? _h : error;
            }
        });
    }
}
APIComponent.ɵfac = function APIComponent_Factory(t) { return new (t || APIComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bot_token_service__WEBPACK_IMPORTED_MODULE_5__["BotTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"])); };
APIComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: APIComponent, selectors: [["app-api"]], decls: 3, vars: 4, consts: [[3, "bot", "loaded", "user"], ["sidebar", ""], ["class", "container", 4, "ngIf"], [1, "container"], [1, "text-center"], [1, "display-4"], [1, "my-2"], [1, "float-right"], ["routerLink", "/docs/post-stats"], [1, "fas", "fa-book"], [1, "mt-5", "text-center"], [1, "text-danger"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [3, "textContent"], [1, "d-flex", "justify-content-center"], ["id", "regenerate", "color", "danger", "mat-button", "", 1, "mr-2", 3, "click"], [1, "fas", "fa-redo"], ["id", "toggleHidden", "mat-button", "", 1, "bg-info", "text-light", "mr-2", 3, "click"], [1, "fas", "fa-eye"], ["id", "copy", "color", "success", "mat-button", "", 3, "click"], [1, "fas", "fa-clipboard"], [1, "row", "mt-5"], [1, "col-6"], [3, "formGroup"], ["f", "ngForm"], ["appearance", "outline"], ["formControlName", "voteWebhookURL", "type", "url", "matInput", "", "required", ""], [4, "ngIf"], ["color", "success", "mat-button", "", 3, "click"], ["class", "alert", 3, "class", 4, "ngIf"], [1, "alert"]], template: function APIComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bot-sidebar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, APIComponent_div_2_Template, 40, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx.bot)("loaded", ctx.bot && ctx.user)("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.loaded);
    } }, directives: [_bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["BotSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"]], styles: [".alert[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  height: 150px;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixjQUFjO0FBQ2hCIiwiZmlsZSI6ImFwaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](APIComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-api',
                templateUrl: './api.component.html',
                styleUrls: ['./api.component.css']
            }]
    }], function () { return [{ type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"] }, { type: src_app_services_bot_token_service__WEBPACK_IMPORTED_MODULE_5__["BotTokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SEOService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }]; }, null); })();


/***/ }),

/***/ "3e1s":
/*!********************************************************!*\
  !*** ./src/app/dashboard/bot-log/bot-log.component.ts ***!
  \********************************************************/
/*! exports provided: BotLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotLogComponent", function() { return BotLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BotLogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BotLogComponent.ɵfac = function BotLogComponent_Factory(t) { return new (t || BotLogComponent)(); };
BotLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BotLogComponent, selectors: [["app-bot-log"]], decls: 2, vars: 0, template: function BotLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bot-log works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3QtbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bot-log',
                templateUrl: './bot-log.component.html',
                styleUrls: ['./bot-log.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4/A2":
/*!**********************************************!*\
  !*** ./src/app/packs/pack/pack.component.ts ***!
  \**********************************************/
/*! exports provided: PackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackComponent", function() { return PackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pack.service */ "T90T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../home-footer/home-footer.component */ "I/oa");
/* harmony import */ var _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../member-username/member-username.component */ "aVT6");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../waves/waves.component */ "5DiX");
/* harmony import */ var _bots_bots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../bots/bots.component */ "XXpl");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../spinner/spinner.component */ "CZqF");















function PackComponent_div_1_span_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PackComponent_div_1_span_33_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/packs/", a1]; };
function PackComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Packs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "member-username", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PackComponent_div_1_span_33_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "waves", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "bots", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx_r0.pack._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pack.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pack.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pack.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 11, ctx_r0.pack.bots.length), " Bots");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 13, ctx_r0.pack.votes), " Votes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx_r0.ownerUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/packs/" + ctx_r0.packId + "/vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userService.user.id === ctx_r0.ownerUser.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inverted", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pack", ctx_r0.pack);
} }
function PackComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PackComponent {
    constructor(packs, route, seo, userService, router) {
        this.packs = packs;
        this.route = route;
        this.seo = seo;
        this.userService = userService;
        this.router = router;
    }
    get packId() {
        return this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.packs.init();
            this.pack = yield this.packs.fetch(this.packId);
            if (!this.pack)
                return this.router.navigate(['/']);
            this.ownerUser = yield this.userService.getUser(this.pack.owner._id);
            this.seo.setTags({
                titlePrefix: this.pack.name,
                description: `View the ${this.pack.name}' Bot Pack with ${this.pack.votes.length} votes, and ${this.pack.bots.length} bots.`,
                url: `packs/${this.packId}`
            });
            document
                .querySelector('.navbar')
                .setAttribute('style', `
        background-color: var(--background-secondary) !important;
        margin-bottom: -5px;
      `);
        });
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const shouldDelete = prompt(`Type 'DELETE' to confirm bot page deletion.`) === 'DELETE';
            if (!shouldDelete)
                return;
            yield this.packs.delete(this.pack._id);
            yield this.packs.refreshPacks();
            this.router.navigate(['/']);
        });
    }
}
PackComponent.ɵfac = function PackComponent_Factory(t) { return new (t || PackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_2__["PackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PackComponent, selectors: [["pack"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/packs"], [3, "routerLink"], [1, "jumbotron", "mb-0"], [1, "container"], [1, "d-flex", "justify-content-between", "ml"], [1, "fas", "fa-cube", "text-muted", "huge-icon", "float-left", "mr-3"], [1, "float-left"], [1, "lead", "text-secondary"], [1, "fas", "fa-robot", "text-muted"], [1, "fas", "fa-chevron-up", "text-muted", "pr-l"], [1, "mt-3"], [3, "user"], [1, "buttons", "mt-3"], ["mat-button", "", 1, "mr-2", "btn-gradient", 3, "routerLink"], ["class", "controls", 4, "ngIf"], [3, "inverted"], ["id", "bots", 1, "container"], [3, "pack"], [1, "controls"], ["color", "danger", "mat-button", "", 3, "click"]], template: function PackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PackComponent_div_1_Template, 37, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PackComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pack && ctx.ownerUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pack || !ctx.ownerUser);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__["HomeFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_9__["MemberUsernameComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _waves_waves_component__WEBPACK_IMPORTED_MODULE_11__["WavesComponent"], _bots_bots_component__WEBPACK_IMPORTED_MODULE_12__["BotsComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["header[_ngcontent-%COMP%] {\r\n  background-color: var(--background-secondary);\r\n\r\n  margin-top: -65px;\r\n  padding-top: 125px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-overflow: clip;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  float: left;\r\n\r\n  margin-right: 15px;\r\n  border-radius: 10px;\r\n  width: 96px;\r\n}\r\n\r\n#bots[_ngcontent-%COMP%] {\r\n  min-height: 480px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: var(--heading);\r\n}\r\n\r\n.huge-icon[_ngcontent-%COMP%] {\r\n  font-size: 96px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUE2Qzs7RUFFN0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InBhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG5cclxuICBtYXJnaW4tdG9wOiAtNjVweDtcclxuICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogOTZweDtcclxufVxyXG5cclxuI2JvdHMge1xyXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbn1cclxuXHJcbi5odWdlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogOTZweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'pack',
                templateUrl: './pack.component.html',
                styleUrls: ['./pack.component.css']
            }]
    }], function () { return [{ type: src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_2__["PackService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "5DiX":
/*!******************************************!*\
  !*** ./src/app/waves/waves.component.ts ***!
  \******************************************/
/*! exports provided: WavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesComponent", function() { return WavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WavesComponent {
    constructor() {
        this.uuid = 'wave' + (Math.floor(Math.random() * 9e5)).toString().padStart(9, '0');
        this.inverted = false;
        this.color = 'var(--background-secondary)';
    }
    set color(value) {
        setTimeout(() => {
            document
                .querySelectorAll(`#${this.uuid} use`)
                .forEach(el => el.setAttribute('style', `fill: ${value}`));
        });
    }
}
WavesComponent.ɵfac = function WavesComponent_Factory(t) { return new (t || WavesComponent)(); };
WavesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WavesComponent, selectors: [["waves"]], inputs: { inverted: "inverted", color: "color" }, decls: 8, vars: 3, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 24 150 28", "preserveAspectRatio", "none", "shape-rendering", "auto", 1, "waves", 3, "id"], ["id", "gentle-wave", "d", "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"], [1, "parallax"], ["id", "wave1", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "0"], ["id", "wave2", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "3"], ["id", "wave3", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "5"], ["id", "wave4", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "7"]], template: function WavesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.inverted ? "rotate(180deg)" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.uuid);
    } }, styles: [".waves[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 5vh;\r\n  margin-bottom: -7px;\r\n  \r\n  min-height: 50px;\r\n  max-height: 75px;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%] {\r\n  transition: fill 1s ease-in-out;\r\n  fill: transparent;\r\n}\r\n\r\n\r\n\r\n.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%] {\r\n  -webkit-animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;\r\n          animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(1) {\r\n  -webkit-animation-delay: -2s;\r\n          animation-delay: -2s;\r\n  -webkit-animation-duration: 7s;\r\n          animation-duration: 7s;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(2) {\r\n  -webkit-animation-delay: -3s;\r\n          animation-delay: -3s;\r\n  -webkit-animation-duration: 10s;\r\n          animation-duration: 10s;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(3) {\r\n  -webkit-animation-delay: -4s;\r\n          animation-delay: -4s;\r\n  -webkit-animation-duration: 13s;\r\n          animation-duration: 13s;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(4) {\r\n  -webkit-animation-delay: -5s;\r\n          animation-delay: -5s;\r\n  -webkit-animation-duration: 20s;\r\n          animation-duration: 20s;\r\n}\r\n\r\n@-webkit-keyframes move-forever {\r\n  0% {\r\n    transform: translate3d(-90px, 0, 0);\r\n  }\r\n\r\n  100% {\r\n    transform: translate3d(85px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes move-forever {\r\n  0% {\r\n    transform: translate3d(-90px, 0, 0);\r\n  }\r\n\r\n  100% {\r\n    transform: translate3d(85px, 0, 0);\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .waves[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    min-height: 40px;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n#wave1[_ngcontent-%COMP%] {\r\n  fill-opacity: 0.7;\r\n}\r\n\r\n#wave2[_ngcontent-%COMP%] {\r\n  fill-opacity: 0.5;\r\n}\r\n\r\n#wave3[_ngcontent-%COMP%] {\r\n  fill-opacity: 0.3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0FBQ25COztBQUVBLGNBQWM7O0FBRWQ7RUFDRSwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ3YXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhdmVzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTdweDtcclxuICAvKkZpeCBmb3Igc2FmYXJpIGdhcCovXHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4ucGFyYWxsYXggPiB1c2Uge1xyXG4gIHRyYW5zaXRpb246IGZpbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuLnBhcmFsbGF4PnVzZSB7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIgMjVzIGN1YmljLWJlemllciguNTUsIC41LCAuNDUsIC41KSBpbmZpbml0ZTtcclxufVxyXG5cclxuLnBhcmFsbGF4PnVzZTpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XHJcbn1cclxuXHJcbi5wYXJhbGxheD51c2U6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0zcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcclxufVxyXG5cclxuLnBhcmFsbGF4PnVzZTpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTNzO1xyXG59XHJcblxyXG4ucGFyYWxsYXg+dXNlOm50aC1jaGlsZCg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4NXB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAud2F2ZXMge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbiN3YXZlMSB7XHJcbiAgZmlsbC1vcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbiN3YXZlMiB7XHJcbiAgZmlsbC1vcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbiN3YXZlMyB7XHJcbiAgZmlsbC1vcGFjaXR5OiAwLjM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WavesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'waves',
                templateUrl: './waves.component.html',
                styleUrls: ['./waves.component.css']
            }]
    }], function () { return []; }, { inverted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5HMO":
/*!******************************************!*\
  !*** ./src/app/zippy/zippy.component.ts ***!
  \******************************************/
/*! exports provided: ZippyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZippyComponent", function() { return ZippyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _zippy_component_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zippy.component.animations */ "agny");



const _c0 = ["*"];
class ZippyComponent {
    constructor() {
        this.expanded = false;
        this.title = 'Title';
        this.toggle = () => this.expanded = !this.expanded;
    }
}
ZippyComponent.ɵfac = function ZippyComponent_Factory(t) { return new (t || ZippyComponent)(); };
ZippyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZippyComponent, selectors: [["zippy"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 8, vars: 4, consts: [[1, "zippy"], [1, "zippy-heading", 3, "click"], [1, "float-right", "fa", "fa-chevron-down"], [1, "zippy-body"]], template: function ZippyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZippyComponent_Template_div_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expandCollapse", ctx.expanded ? "expanded" : "collapsed");
    } }, styles: ["span[_ngcontent-%COMP%] { cursor: pointer; }\n\n.expanded[_ngcontent-%COMP%] { background-color: #f0f0f027; }\n\n.zippy[_ngcontent-%COMP%] {\n    margin: 15px 0;\n    border: 1px solid #f0f0f0;\n    border-radius: 5px;\n}\n\n.zippy-heading[_ngcontent-%COMP%]\n{\n    font-weight: bold;\n    padding: 20px;\n    cursor: pointer;\n}\n\n.zippy-body[_ngcontent-%COMP%] \n{\n    padding: 20px;\n    overflow-y: hidden;\n}\n\n.expanded[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    transform: rotate(180deg);\n}\n\ni[_ngcontent-%COMP%] {\n    transition: 300ms all ease;\n    transform: rotate(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppcHB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxlQUFlLEVBQUU7O0FBRXhCLFlBQVksMkJBQTJCLEVBQUU7O0FBQ3pDO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUNBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InppcHB5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5leHBhbmRlZCB7IGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjAyNzsgfVxuLnppcHB5IHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi56aXBweS1oZWFkaW5nXG57XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uemlwcHktYm9keSBcbntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmV4cGFuZGVkIGkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5pIHtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn0iXX0= */"], data: { animation: [_zippy_component_animations__WEBPACK_IMPORTED_MODULE_1__["expandCollapse"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZippyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'zippy',
                templateUrl: './zippy.component.html',
                styleUrls: ['./zippy.component.css'],
                animations: [_zippy_component_animations__WEBPACK_IMPORTED_MODULE_1__["expandCollapse"]]
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }] }); })();


/***/ }),

/***/ "5jTC":
/*!*****************************************!*\
  !*** ./src/app/pipes/mini-date.pipe.ts ***!
  \*****************************************/
/*! exports provided: MiniDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniDatePipe", function() { return MiniDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MiniDatePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        return `${date.getDate()}/${(date.getMonth() + 1)}`;
    }
}
MiniDatePipe.ɵfac = function MiniDatePipe_Factory(t) { return new (t || MiniDatePipe)(); };
MiniDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "miniDate", type: MiniDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'miniDate'
            }]
    }], null, null); })();


/***/ }),

/***/ "7oRx":
/*!******************************************!*\
  !*** ./src/app/services/bots.service.ts ***!
  \******************************************/
/*! exports provided: BotsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsService", function() { return BotsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ "YGJC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "qfBg");







class BotsService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + '/bots';
    }
    get bots() { return this._bots; }
    get savedBots() { return this._savedBots; }
    get userBots() { return this._userBots; }
    get userSavedBots() { return this._userSavedBots; }
    get unreviewed() {
        return {
            bots: this._unreviewedBots,
            saved: this._unreviewedSavedBots
        };
    }
    get key() {
        return localStorage.getItem('key');
    }
    get headers() {
        return { headers: { Authorization: this.key } };
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!this.bots || !this.savedBots || !this.unreviewed)
                    yield this.refreshBots();
                if (!this.userBots || !this.userSavedBots)
                    yield this.refreshUserBots();
            }
            catch (_a) { }
        });
    }
    refreshBots() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { saved, users } = yield this.http.get(`${this.endpoint}`).toPromise();
            this._savedBots = saved
                .filter(sb => users
                .some(u => u.id === sb._id) && sb.approvedAt)
                .sort((a, b) => b.votes.length - a.votes.length);
            this._bots = users
                .filter(b => this.savedBots.some(sb => sb._id === b.id));
            this._unreviewedSavedBots = saved.filter(sb => !sb.approvedAt);
            this._unreviewedBots = users
                .filter(b => this.unreviewed.saved.some(sb => sb._id === b.id));
        });
    }
    refreshUserBots() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            // TODO: separate route
            this._userSavedBots = this.savedBots
                .concat(this.unreviewed.saved)
                .filter(sb => sb.ownerId === this.userService.user.id);
            this._userBots = this.bots
                .concat(this.unreviewed.bots)
                .filter(b => this.userSavedBots.some(sb => sb._id === b.id));
        });
    }
    getSavedLog(id) {
        return this.http.get(`${this.endpoint}/${id}/log`, this.headers).toPromise();
    }
    getBot(id) {
        return this.bots
            .concat(this.unreviewed.bots)
            .find(b => b.id === id);
    }
    getSavedBot(id) {
        return [...this.savedBots]
            .concat(this.unreviewed.saved)
            .find(b => b._id === id);
    }
    getRandomBot() {
        if (!this.bots)
            return null;
        const bots = this.bots.filter(b => b.presence.status !== 'offline');
        const index = Math.floor(Math.random() * bots.length);
        return bots[index];
    }
    vote(id) {
        return this.http
            .get(`${this.endpoint}/${id}/vote`, this.headers)
            .toPromise();
    }
    getTopBots() {
        return { bots: this.bots, saved: this.savedBots };
    }
    getTaggedBots(tagName) {
        const savedBots = this.savedBots
            .filter(b => {
            var _a;
            return b.approvedAt && ((_a = b.listing) === null || _a === void 0 ? void 0 : _a.tags.some(n => n === tagName));
        });
        const ids = savedBots.map(b => b._id);
        const bots = [];
        for (const id of ids)
            bots.push(this.bots.find(b => b.id === id));
        return { bots, saved: savedBots };
    }
    getNewBots() {
        const oneWeekAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7);
        const savedBots = this.savedBots
            .filter(b => new Date(b.approvedAt) > oneWeekAgo);
        const ids = savedBots.map(b => b._id);
        const bots = this.bots.filter(b => ids.includes(b.id));
        return { bots, saved: savedBots };
    }
    getFeaturedBots() {
        const savedBots = this.shuffle(this.savedBots
            .filter(b => { var _a; return (_a = b.badges) === null || _a === void 0 ? void 0 : _a.includes('featured'); }));
        const ids = savedBots.map(b => b._id);
        const bots = this.bots.filter(b => ids.includes(b.id));
        return { bots, saved: savedBots };
    }
    shuffle(arr) {
        const newArr = arr.slice();
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
    }
    searchBots(query) {
        const queryBots = this.savedBots
            .map(saved => {
            var _a;
            const bot = this.bots.find(g => g.id === saved._id);
            return {
                id: bot === null || bot === void 0 ? void 0 : bot.id,
                username: bot === null || bot === void 0 ? void 0 : bot.username,
                ownerId: bot === null || bot === void 0 ? void 0 : bot.ownerId,
                listing: (_a = saved === null || saved === void 0 ? void 0 : saved.listing) !== null && _a !== void 0 ? _a : {}
            };
        });
        const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_3__["default"](queryBots, {
            includeScore: true,
            isCaseSensitive: false,
            keys: [
                { name: 'id', weight: 3 },
                { name: 'username', weight: 1.5 },
                { name: 'listing.overview', weight: 0.6 },
                { name: 'listing.body', weight: 0.5 },
                { name: 'listing.tags', weight: 0.3 }
            ]
        });
        const searchBots = fuse
            .search(query)
            .map(r => r.item);
        const ids = searchBots.map(g => g.id);
        return {
            bots: this.bots.filter(g => ids.includes(g.id)),
            saved: this.savedBots.filter(g => ids.includes(g._id))
        };
    }
    createBot(value) {
        return this.http.post(`${this.endpoint}`, value, this.headers).toPromise();
    }
    updateBot(id, value) {
        return this.http.patch(`${this.endpoint}/${id}`, value, this.headers).toPromise();
    }
    deleteBot(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.delete(`${this.endpoint}/${id}`, this.headers).toPromise();
            yield this.refreshBots();
        });
    }
    getStats(id) {
        return this.http.get(`${this.endpoint}/${id}/stats`).toPromise();
    }
    updateBotAPI(id, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.patch(`${this.endpoint}/${id}/api`, value, this.headers).toPromise();
        });
    }
}
BotsService.ɵfac = function BotsService_Factory(t) { return new (t || BotsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
BotsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BotsService, factory: BotsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "86Op":
/*!****************************************!*\
  !*** ./src/app/docs/docs.component.ts ***!
  \****************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "4MG8");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js */ "FIf5");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/seo.service */ "gYN0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _docs_sidebar_docs_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../docs-sidebar/docs-sidebar.component */ "zLnx");









class DocsComponent {
    constructor(seo, route, router) {
        this.seo = seo;
        this.route = route;
        this.router = router;
        this.defaultPage = 'get-started';
        route.paramMap.subscribe(paramMap => {
            var _a;
            const page = (_a = paramMap.get('page')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (!page)
                router.navigate([`/docs/${this.defaultPage}`]);
        });
    }
    get markdownPagePath$() {
        return this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(paramMap => {
            var _a;
            const page = ((_a = paramMap.get('page')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || this.defaultPage;
            return `assets/docs/${page}.md`;
        }));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.convertToMarkdown();
        });
    }
    convertToMarkdown() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.markdownPagePath$.subscribe((path) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const file = yield fetch(path);
                    let md = yield file.text();
                    md = this.setMetaVariables(md);
                    document.getElementById('doc').innerHTML = marked__WEBPACK_IMPORTED_MODULE_2___default()(md, { breaks: true });
                    document.querySelector('h1').classList.add('display-4');
                    document
                        .querySelectorAll('pre code')
                        .forEach(block => highlight_js__WEBPACK_IMPORTED_MODULE_4___default.a.highlightBlock(block));
                }));
            }
            catch (_a) {
                this.router.navigate(['/404']);
            }
        });
    }
    setMetaVariables(content) {
        try {
            const tags = {
                description: /<description>(.*)<\/description>/g,
                title: /<title>(.*)<\/title>/g,
                url: /<url>(.*)<\/url>/g
            };
            const description = tags.description.exec(content)[1];
            const titleSuffix = tags.title.exec(content)[1];
            const route = tags.url.exec(content)[1];
            this.seo.setTags({
                description,
                titlePrefix: 'DBots',
                titleSuffix,
                url: `docs/${route}`
            });
            return content
                .replace(tags.description, '')
                .replace(tags.title, '')
                .replace(tags.url, '');
        }
        catch (_a) {
            return content;
        }
    }
    search({ query }) {
        if (!query)
            return;
        console.log(query);
    }
}
DocsComponent.ɵfac = function DocsComponent_Factory(t) { return new (t || DocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocsComponent, selectors: [["app-docs"]], decls: 3, vars: 0, consts: [[3, "search"], ["id", "content", 1, "container"], ["id", "doc"]], template: function DocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "docs-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function DocsComponent_Template_docs_sidebar_search_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_docs_sidebar_docs_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DocsSidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-docs',
                templateUrl: './docs.component.html',
                styleUrls: ['./docs.component.css']
            }]
    }], function () { return [{ type: _services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "9bCR":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/bots/edit-bot/edit-bot.component.ts ***!
  \***************************************************************/
/*! exports provided: EditBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBotComponent", function() { return EditBotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-bot/add-bot.component */ "jFRy");







class EditBotComponent {
    constructor(route, service, seo) {
        this.route = route;
        this.service = service;
        this.seo = seo;
    }
    get id() { return this.route.snapshot.paramMap.get('id'); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            this.bot = this.service.getSavedBot(this.id);
            this.user = this.service.getBot(this.id);
            this.seo.setTags({
                description: '',
                titlePrefix: this.user.tag,
                titleSuffix: 'Edit',
                url: `dashboard/bots/${this.id}`
            });
        });
    }
}
EditBotComponent.ɵfac = function EditBotComponent_Factory(t) { return new (t || EditBotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"])); };
EditBotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditBotComponent, selectors: [["app-edit-bot"]], decls: 1, vars: 2, consts: [["editing", "true", 3, "bot", "user"]], template: function EditBotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "add-bot", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx.bot)("user", ctx.user);
    } }, directives: [_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_5__["AddBotComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJvdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditBotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-bot',
                templateUrl: './edit-bot.component.html',
                styleUrls: ['./edit-bot.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }]; }, null); })();


/***/ }),

/***/ "9gDg":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/bots/bot/bot.component.ts ***!
  \*****************************************************/
/*! exports provided: BotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotComponent", function() { return BotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bot-sidebar/bot-sidebar.component */ "Z6y1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widgets_votes_widget_votes_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/votes-widget/votes-widget.component */ "S8Jq");
/* harmony import */ var _widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/audit-log-widget/audit-log-widget.component */ "Meo+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/clean-date-time.pipe */ "Rc5a");












function BotComponent_section_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "cleanDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "cleanDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx_r1.stats.general.approvedAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, ctx_r1.stats.general.lastVoteAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, ctx_r1.stats.general.voteCount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, ctx_r1.stats.general.totalVotes), " ");
} }
function BotComponent_section_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Stats will be shown here soon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BotComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BotComponent_section_1_div_1_Template, 21, 12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BotComponent_section_1_div_2_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "votes-widget", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "audit-log-widget");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stats == null ? null : ctx_r0.stats.general);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.stats.general);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r0.user.id);
} }
class BotComponent {
    constructor(botsService, route, router, seo) {
        this.botsService = botsService;
        this.route = route;
        this.router = router;
        this.seo = seo;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = paramMap.get('id');
            this.bot = yield this.botsService.getSavedBot(id);
            this.stats = yield this.botsService.getStats(id);
            this.user = yield this.botsService.getBot(id);
            this.seo.setTags({
                description: `Overview of ${this.user.tag} bot listing.`,
                titlePrefix: this.user.tag,
                titleSuffix: 'Overview',
                url: `dashboard/bots/${this.user.id}`
            });
            if (!this.bot || !this.user)
                return this.router.navigate(['/dashboard']);
        }));
    }
}
BotComponent.ɵfac = function BotComponent_Factory(t) { return new (t || BotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"])); };
BotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotComponent, selectors: [["app-bot"]], decls: 2, vars: 2, consts: [[3, "user"], ["class", "container", 4, "ngIf"], [1, "container"], ["class", "row color-heading", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [1, "large", "stats"], [3, "id"], [1, "row", "color-heading"], [1, "col-lg-3", "col-sm-6"], ["matTooltip", "Date of bot approval.", 1, "stats", "cursor-pointer"], [1, "fas", "fa-check"], ["matTooltip", "Date of last bot vote.", 1, "stats", "cursor-pointer"], [1, "fas", "fa-calendar-check"], ["matTooltip", "Number of total votes this week.", 1, "stats", "cursor-pointer"], [1, "fas", "fa-chevron-circle-up"], ["matTooltip", "Number of all-time total votes.", 1, "stats", "cursor-pointer"], [1, "fas", "fa-chevron-up"], [1, "text-muted"]], template: function BotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bot-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BotComponent_section_1_Template, 11, 3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot && ctx.user);
    } }, directives: [_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["BotSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _widgets_votes_widget_votes_widget_component__WEBPACK_IMPORTED_MODULE_7__["VotesWidgetComponent"], _widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_8__["AuditLogWidgetComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"]], pipes: [_pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_10__["CleanDateTimePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [".row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n    color: var(--heading);\r\n    background-color: var(--tertiary);\r\n    border-radius: 3px;\r\n    margin: 15px;\r\n    padding: 25px;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\n.stats.large[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    background-color: var(--background-tertiary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7O0lBRWIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRDQUE0QztBQUNoRCIsImZpbGUiOiJib3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnN0YXRzIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXRzLmxhcmdlIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bot',
                templateUrl: './bot.component.html',
                styleUrls: ['./bot.component.css']
            }]
    }], function () { return [{ type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/seo.service */ "gYN0");
/* harmony import */ var _bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bots/search-wrapper/search-wrapper.component */ "YLar");




class HomeComponent {
    constructor(seo) {
        seo.setTags({
            titleSuffix: 'DBots',
            titlePrefix: 'Best Discord Bots',
            description: 'Find the best bots to add to your servers. We have many different bots including music bots, moderation bots, chat bots and more.',
            url: '/'
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "search-wrapper");
    } }, directives: [_bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["SearchWrapperComponent"]], styles: ["header[_ngcontent-%COMP%] {\r\n    background-color: var(--background-secondary);\r\n}\r\n\r\n.robot[_ngcontent-%COMP%] {\r\n    max-width: 192px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\np[_ngcontent-%COMP%]:not(.lead) {\r\n    color: var(--secondary);\r\n    cursor: pointer;\r\n}\r\n\r\nmat-chip[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    background-color: var(--primary) !important;\r\n}\r\n\r\n.more[_ngcontent-%COMP%] {\r\n    background-color: var(--tertiary) !important;    \r\n}\r\n\r\n#content[_ngcontent-%COMP%] {\r\n    min-height: 40vh;\r\n}\r\n\r\n#searchButton[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    height: 64px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4ucm9ib3Qge1xyXG4gICAgbWF4LXdpZHRoOiAxOTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxucDpub3QoLmxlYWQpIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5tYXQtY2hpcCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSkgIWltcG9ydGFudDsgICAgXHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwdmg7XHJcbn1cclxuXHJcbiNzZWFyY2hCdXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    rootEndpoint: 'http://localhost:3000',
    endpoint: 'http://localhost:3000/api/v1',
    discordInvite: 'https://discord.gg/uDTgxyg',
    githubURL: 'https://github.com/DBots-co',
    version: 'v1.0.0b',
    url: 'http://localhost:3000',
    guildId: '531196495584821314'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BLUW":
/*!********************************************!*\
  !*** ./src/app/invite/invite.component.ts ***!
  \********************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");




class InviteComponent {
    constructor() {
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint}/invite`;
        window.location.assign(this.url);
    }
}
InviteComponent.ɵfac = function InviteComponent_Factory(t) { return new (t || InviteComponent)(); };
InviteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InviteComponent, selectors: [["app-invite"]], decls: 1, vars: 0, template: function InviteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
    } }, directives: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InviteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invite',
                templateUrl: './invite.component.html',
                styleUrls: ['./invite.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CZqF":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner"]], decls: 1, vars: 0, consts: [[1, "spinner"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".spinner[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    background-color: var(--font);\r\n\r\n    margin: 100px auto;\r\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes sk-rotateplane {\r\n    0% { -webkit-transform: perspective(120px) }\r\n    50% { -webkit-transform: perspective(120px) rotateY(180deg) }\r\n    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\r\n}\r\n\r\n@keyframes sk-rotateplane {\r\n    0% { \r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \r\n    } 50% { \r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \r\n    } 100% { \r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2Qjs7SUFFN0Isa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxLQUFLLHNDQUFzQztJQUMzQyxNQUFNLHNEQUFzRDtJQUM1RCxPQUFPLHVFQUF1RTtBQUNsRjs7QUFFQTtJQUNJO1FBQ0kseURBQXlEO1FBQ3pEO0lBQ0osRUFBRTtRQUNFLDhEQUE4RDtRQUM5RDtJQUNKLEVBQUU7UUFDRSxpRUFBaUU7UUFDakUseUVBQXlFO0lBQzdFO0FBQ0oiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250KTtcclxuXHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSB9XHJcbiAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSB9XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgIHJvdGF0ZVgoMTgwZGVnKSB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgXHJcbiAgICB9IDUwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZykgXHJcbiAgICB9IDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ENxU":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/bots/analytics/analytics.component.ts ***!
  \*****************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var src_app_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/analytics.service */ "Y9WU");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bot-sidebar/bot-sidebar.component */ "Z6y1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AnalyticsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Very exciting real time analytics. Unfortunately there are no graphs here at the moment, check back soon. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.user.username, " Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, ctx_r1.log.analytics), " ");
} }
class AnalyticsComponent {
    constructor(route, botsService, service, seo) {
        this.route = route;
        this.botsService = botsService;
        this.service = service;
        this.seo = seo;
    }
    get id() {
        return this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.botsService.init();
            this.bot = this.botsService.getSavedBot(this.id);
            this.user = this.botsService.getBot(this.id);
            this.stats = yield this.botsService.getStats(this.id);
            this.log = yield this.botsService.getSavedLog(this.id);
            this.seo.setTags({
                description: '',
                titlePrefix: this.user.tag,
                titleSuffix: 'Widget',
                url: `dashboard/bots/${this.id}`
            });
            this.hookWSEvents();
            yield this.service.connect();
        });
    }
    hookWSEvents() {
        this.service.socket.on('BOT_IMPRESSION', ({ log }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (log._id !== this.user.id)
                return;
            this.log = log;
        }));
        this.service.socket.on('BOT_PAGE_VIEW', ({ log }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (log._id !== this.user.id)
                return;
            this.log = log;
        }));
        this.service.socket.on('BOT_INVITE', ({ log }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (log._id !== this.user.id)
                return;
            this.log = log;
        }));
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"])); };
AnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 3, vars: 4, consts: [[3, "bot", "loaded", "user"], ["sidebar", ""], ["class", "container", 4, "ngIf"], [1, "container"], [1, "text-center"], [1, "display-4"], [1, "my-2"], [1, "text-warning", "mt-5"]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bot-sidebar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AnalyticsComponent_div_2_Template, 10, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx.bot)("loaded", ctx.stats && ctx.bot && ctx.user && ctx.log)("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.loaded);
    } }, directives: [_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["BotSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-analytics',
                templateUrl: './analytics.component.html',
                styleUrls: ['./analytics.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }, { type: src_app_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"] }]; }, null); })();


/***/ }),

/***/ "HC5s":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: toIterable, capitalize, snakeToTitleCase, kebabToTitleCase, kebabToLowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIterable", function() { return toIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snakeToTitleCase", function() { return snakeToTitleCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabToTitleCase", function() { return kebabToTitleCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabToLowerCase", function() { return kebabToLowerCase; });
function toIterable(length) {
    const array = [];
    for (let i = 0; i < length; i++)
        array.push(i);
    return array;
}
// string
function capitalize(words) {
    return words
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
function snakeToTitleCase(word) {
    var _a;
    return (_a = word === null || word === void 0 ? void 0 : word.split('_').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ')) !== null && _a !== void 0 ? _a : '';
}
function kebabToTitleCase(word) {
    var _a;
    return (_a = word === null || word === void 0 ? void 0 : word.split('-').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ')) !== null && _a !== void 0 ? _a : '';
}
function kebabToLowerCase(word) {
    var _a;
    return (_a = word === null || word === void 0 ? void 0 : word.split('-').map(w => w[0] + w.slice(1).toLowerCase()).join(' ')) !== null && _a !== void 0 ? _a : '';
}


/***/ }),

/***/ "HfTq":
/*!************************************************!*\
  !*** ./src/app/guards/dashboard-auth.guard.ts ***!
  \************************************************/
/*! exports provided: DashboardAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAuthGuard", function() { return DashboardAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





class DashboardAuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            if (!this.userService.user)
                yield this.router.navigate(['/']);
            return true;
        });
    }
}
DashboardAuthGuard.ɵfac = function DashboardAuthGuard_Factory(t) { return new (t || DashboardAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
DashboardAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardAuthGuard, factory: DashboardAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "I/oa":
/*!******************************************************!*\
  !*** ./src/app/home-footer/home-footer.component.ts ***!
  \******************************************************/
/*! exports provided: HomeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFooterComponent", function() { return HomeFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../waves/waves.component */ "5DiX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeFooterComponent {
    constructor() {
        this.statusURL = 'https://dbots.statuspage.io';
        this.anchorVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version.replace(/\./g, '');
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
}
HomeFooterComponent.ɵfac = function HomeFooterComponent_Factory(t) { return new (t || HomeFooterComponent)(); };
HomeFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeFooterComponent, selectors: [["home-footer"]], decls: 30, vars: 5, consts: [[1, "content"], [1, "row"], [1, "col"], [1, "nav", "navbar-nav"], ["routerLink", "/docs", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "fas", "fa-book", "text-muted", "mr-1"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "href"], [1, "fab", "fa-discord", "text-muted", "mr-1"], [1, "fab", "fa-github", "text-muted", "mr-1"], ["src", "/assets/img/logo.png", "alt", "DBots Icon"], [1, "cursor-pointer", "float-right", "pb-5"], [3, "href"], [1, "text-muted", "px-1"], ["routerLink", "/docs/changelog", 1, "cursor-pointer", 3, "fragment"], ["href", "https://github.com/dbots-co/website/tree/stable/LICENSE", 1, "d-block", "text-muted", "cursor-pointer"]], template: function HomeFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "waves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Docs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Server ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A9 DBots - GNU AGPL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.environment.discordInvite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.environment.githubURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.statusURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fragment", ctx.anchorVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.environment.version);
    } }, directives: [_waves_waves_component__WEBPACK_IMPORTED_MODULE_2__["WavesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".content[_ngcontent-%COMP%] {\r\n  padding: 50px 75px;\r\n  position: relative;\r\n  \r\n  background-color: var(--background-secondary);\r\n}\r\nfooter[_ngcontent-%COMP%] {  \r\n  position: relative !important;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  transition: background-color 1s ease-in-out;\r\n  background-color: var(--background-secondary) !important;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  max-height: 48px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHdEQUF3RDtBQUMxRDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImhvbWUtZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogNTBweCA3NXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBoZWlnaHQ6IDEwdmg7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbmZvb3RlciB7ICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogNDhweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home-footer',
                templateUrl: './home-footer.component.html',
                styleUrls: ['./home-footer.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Jvlx":
/*!**************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pack.service */ "T90T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../home-footer/home-footer.component */ "I/oa");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../waves/waves.component */ "5DiX");
/* harmony import */ var _bots_bots_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../bots/bots.component */ "XXpl");
/* harmony import */ var _packs_packs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../packs/packs.component */ "Tafr");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../spinner/spinner.component */ "CZqF");














const _c0 = function (a1) { return ["/users/", a1]; };
function UserProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "waves", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "bots", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "packs", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r0.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx_r0.user.discriminator, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.presence.activities[0] == null ? null : ctx_r0.user.presence.activities[0].state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inverted", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ownerUser", ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ownerUser", ctx_r0.user);
} }
function UserProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserProfileComponent {
    constructor(packs, route, seo, userService, router) {
        this.packs = packs;
        this.route = route;
        this.seo = seo;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.packs.init();
            const id = this.route.snapshot.paramMap.get('id');
            this.user = yield this.userService.getUser(id);
            if (!this.user || ((_a = this.user) === null || _a === void 0 ? void 0 : _a.bot))
                return this.router.navigate(['/']);
            this.seo.setTags({
                titlePrefix: this.user.username,
                description: `View ${this.user.username}'s bots and their public profile.`,
                url: `users/${this.user.id}`
            });
            document
                .querySelector('.navbar')
                .setAttribute('style', `
        background-color: var(--background-secondary) !important;
        margin-bottom: -5px;
      `);
        });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_2__["PackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/users"], [3, "routerLink"], [1, "jumbotron", "mb-0"], [1, "container"], [3, "src"], [1, "text-muted"], [1, "lead"], [3, "inverted"], ["id", "bots", 1, "container"], [3, "ownerUser"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserProfileComponent_div_1_Template, 22, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserProfileComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__["HomeFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _waves_waves_component__WEBPACK_IMPORTED_MODULE_9__["WavesComponent"], _bots_bots_component__WEBPACK_IMPORTED_MODULE_10__["BotsComponent"], _packs_packs_component__WEBPACK_IMPORTED_MODULE_11__["PacksComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]], styles: ["header[_ngcontent-%COMP%] {\r\n  background-color: var(--background-secondary);\r\n\r\n  margin-top: -65px;\r\n  padding-top: 125px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-overflow: clip;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  float: left;\r\n\r\n  margin-right: 15px;\r\n  border-radius: 10px;\r\n  width: 96px;\r\n}\r\n\r\n#bots[_ngcontent-%COMP%] {\r\n  min-height: 480px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: var(--heading);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQTZDOztFQUU3QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG5cclxuICBtYXJnaW4tdG9wOiAtNjVweDtcclxuICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogOTZweDtcclxufVxyXG5cclxuI2JvdHMge1xyXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css']
            }]
    }], function () { return [{ type: src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_2__["PackService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");







class AuthComponent {
    constructor(router, route, botsService, userService) {
        this.router = router;
        this.route = route;
        this.botsService = botsService;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const key = this.route.snapshot.queryParamMap.get('key');
                localStorage.setItem('key', key);
                yield this.userService.updateUser();
                yield this.botsService.refreshUserBots();
                this.router.navigate(['/dashboard']);
            }
            catch (_a) {
                this.router.navigate(['/']);
            }
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner");
    } }, directives: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Meo+":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/widgets/audit-log-widget/audit-log-widget.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AuditLogWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogWidgetComponent", function() { return AuditLogWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../member-username/member-username.component */ "aVT6");
/* harmony import */ var _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/mini-date.pipe */ "5jTC");









function AuditLogWidgetComponent_table_5_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "member-username", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "miniDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const change_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.changeCount - i_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", ctx_r1.userService.user)("withAvatar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, change_r2.at));
} }
function AuditLogWidgetComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "At");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AuditLogWidgetComponent_table_5_tr_10_Template, 8, 6, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.changes);
} }
class AuditLogWidgetComponent {
    constructor(route, botService, userService) {
        this.route = route;
        this.botService = botService;
        this.userService = userService;
        this.rows = 3;
        this.changeCount = 0;
        this.changes = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const id = val.get('id');
                const { changes } = yield this.botService.getSavedLog(id);
                this.changeCount = changes.length;
                this.changes = changes.splice(changes.length - this.rows, changes.length);
            }));
        });
    }
}
AuditLogWidgetComponent.ɵfac = function AuditLogWidgetComponent_Factory(t) { return new (t || AuditLogWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AuditLogWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuditLogWidgetComponent, selectors: [["audit-log-widget"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["class", "table", 4, "ngIf"], [1, "table"], [1, "pl-5"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "user"], [3, "member", "withAvatar"]], template: function AuditLogWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recent Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AuditLogWidgetComponent_table_5_Template, 11, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_6__["MemberUsernameComponent"]], pipes: [_pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_7__["MiniDatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    color: var(--font);\r\n    max-width: 100vw;\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n    transform: scale(0.65);\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    min-height: 180px;\r\n}\r\n\r\n.col-md-3[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0LWxvZy13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJhdWRpdC1sb2ctd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4udXNlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uY29sLW1kLTMsIC5jb2wtbWQtOSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuditLogWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'audit-log-widget',
                templateUrl: './audit-log-widget.component.html',
                styleUrls: ['./audit-log-widget.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "NDDr":
/*!******************************************!*\
  !*** ./src/app/guards/bot-auth.guard.ts ***!
  \******************************************/
/*! exports provided: BotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotAuthGuard", function() { return BotAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");





class BotAuthGuard {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    canActivate(next) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            const id = next.paramMap.get('id');
            const ownsBot = this.service.userBots.some(b => b.id === id);
            if (!ownsBot)
                this.router.navigate(['/dashboard']);
            return true;
        });
    }
}
BotAuthGuard.ɵfac = function BotAuthGuard_Factory(t) { return new (t || BotAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"])); };
BotAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BotAuthGuard, factory: BotAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }]; }, null); })();


/***/ }),

/***/ "NWAD":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/save-changes/save-changes.component.ts ***!
  \******************************************************************/
/*! exports provided: SaveChangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveChangesComponent", function() { return SaveChangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class SaveChangesComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    reset() {
        this.onReset.emit();
        this.close();
    }
    save() {
        this.onSave.emit();
        this.close();
    }
    close() {
        this.snackBar.dismiss();
        this.onReset.unsubscribe();
        this.onSave.unsubscribe();
    }
}
SaveChangesComponent.ɵfac = function SaveChangesComponent_Factory(t) { return new (t || SaveChangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SaveChangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveChangesComponent, selectors: [["save-changes"]], outputs: { onReset: "onReset", onSave: "onSave" }, decls: 8, vars: 0, consts: [[1, "row"], [1, "text", "col-lg-8", "col-sm-12", "p-lg-1"], [1, "col-lg-4", "col-sm-12", "d-flex", "justify-content-center"], ["id", "reset", "type", "submit", "mat-button", "", 3, "click"], ["id", "save", "type", "submit", "mat-button", "", 3, "click"]], template: function SaveChangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Careful - You have unsaved changes! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveChangesComponent_Template_button_click_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveChangesComponent_Template_button_click_6_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-bottom: 15px;\r\n}\r\nbutton[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\r\n    color: var(--font) !important;    \r\n}\r\n#save[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    background-color: var(--success);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .text[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUtY2hhbmdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBRUEsbURBQW1EO0FBQ25EO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzYXZlLWNoYW5nZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5idXR0b24sIC50ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250KSAhaW1wb3J0YW50OyAgICBcclxufVxyXG4jc2F2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveChangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'save-changes',
                templateUrl: './save-changes.component.html',
                styleUrls: ['./save-changes.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, { onReset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Rc5a":
/*!***********************************************!*\
  !*** ./src/app/pipes/clean-date-time.pipe.ts ***!
  \***********************************************/
/*! exports provided: CleanDateTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanDateTimePipe", function() { return CleanDateTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CleanDateTimePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${day} ${date.getFullYear()}, ${hours}:${minutes}`;
    }
}
CleanDateTimePipe.ɵfac = function CleanDateTimePipe_Factory(t) { return new (t || CleanDateTimePipe)(); };
CleanDateTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cleanDateTime", type: CleanDateTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CleanDateTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'cleanDateTime' }]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "RtWs":
/*!***********************************************!*\
  !*** ./src/app/services/bot-token.service.ts ***!
  \***********************************************/
/*! exports provided: BotTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotTokenService", function() { return BotTokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BotTokenService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + '/bots';
    }
    get key() {
        return localStorage.getItem('key');
    }
    get headers() {
        return { headers: { Authorization: this.key } };
    }
    getAPIDocument(id) {
        return this.http.get(`${this.endpoint}/${id}/api`, this.headers).toPromise();
    }
    regenToken(id) {
        return this.http.get(`${this.endpoint}/${id}/key/regen`, this.headers).toPromise();
    }
    testWebhook(url, data) {
        return this.http.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.key
            }
        }).toPromise();
    }
}
BotTokenService.ɵfac = function BotTokenService_Factory(t) { return new (t || BotTokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BotTokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BotTokenService, factory: BotTokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotTokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "S8Jq":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/widgets/votes-widget/votes-widget.component.ts ***!
  \**************************************************************************/
/*! exports provided: VotesWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesWidgetComponent", function() { return VotesWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "qb46");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "LPYB");







function VotesWidgetComponent_canvas_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("plugins", ctx_r0.barChartPlugins)("legend", ctx_r0.barChartLegend)("chartType", ctx_r0.barChartType);
} }
class VotesWidgetComponent {
    constructor(botsService) {
        this.botsService = botsService;
        this.chartReady = false;
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{ display: false }],
                xAxes: [{ display: false }]
            },
            plugins: {
                datalabels: { anchor: 'end', align: 'end' }
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default.a];
        this.barChartData = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.stats = yield this.botsService.getStats(this.id);
            this.barChartLabels = this.buildLabels();
            this.barChartData = this.buildDataSets();
            this.chartReady = true;
        });
    }
    buildLabels() {
        return this.stats.recentVotes.map(v => v.day);
    }
    buildDataSets() {
        return [
            { data: this.stats.recentVotes.map(s => s.count), label: 'All' }
        ];
    }
}
VotesWidgetComponent.ɵfac = function VotesWidgetComponent_Factory(t) { return new (t || VotesWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"])); };
VotesWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VotesWidgetComponent, selectors: [["votes-widget"]], inputs: { id: "id" }, decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", 4, "ngIf"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function VotesWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recent Votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VotesWidgetComponent_canvas_5_Template, 1, 6, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3Rlcy13aWRnZXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VotesWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'votes-widget',
                templateUrl: './votes-widget.component.html',
                styleUrls: ['./votes-widget.component.css']
            }]
    }], function () { return [{ type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/bots.service */ "7oRx");
/* harmony import */ var _services_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/pack.service */ "T90T");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cookie-banner/cookie-banner.component */ "cgln");










class AppComponent {
    constructor(auth, botService, packService, themeService, userService) {
        this.auth = auth;
        this.botService = botService;
        this.packService = packService;
        this.themeService = themeService;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.themeService.updateTheme();
            yield this.botService.init();
            yield this.packService.init();
            this.auth.validateKey();
            yield this.userService.init();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pack_service__WEBPACK_IMPORTED_MODULE_4__["PackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cookie-banner");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_8__["CookieBannerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }, { type: _services_pack_service__WEBPACK_IMPORTED_MODULE_4__["PackService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "T90T":
/*!******************************************!*\
  !*** ./src/app/services/pack.service.ts ***!
  \******************************************/
/*! exports provided: PackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackService", function() { return PackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PackService {
    constructor(http) {
        this.http = http;
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint}/packs`;
        this._packs = [];
    }
    get key() {
        return localStorage.getItem('key');
    }
    get packs() {
        return this._packs;
    }
    get headers() {
        return { headers: { Authorization: this.key } };
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.packs.length <= 0)
                yield this.refreshPacks();
        });
    }
    refreshPacks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._packs = (yield this.http.get(this.endpoint).toPromise());
        });
    }
    fetch(id) {
        return this.http.get(`${this.endpoint}/${id}`).toPromise();
    }
    get(id) {
        return this.packs.find(p => p._id === id);
    }
    getUserPacks(userId) {
        return this.packs.filter(p => p.owner === userId);
    }
    getTopPacks() {
        return this.packs.sort((a, b) => (a.votes > b.votes) ? 1 : -1);
    }
    create(value) {
        return this.http.post(this.endpoint, value, this.headers).toPromise();
    }
    update(id, value) {
        return this.http.patch(`${this.endpoint}/${id}`, value, this.headers).toPromise();
    }
    delete(id) {
        return this.http.delete(`${this.endpoint}/${id}`, this.headers).toPromise();
    }
    vote(id) {
        return this.http.get(`${this.endpoint}/${id}/vote`, this.headers).toPromise();
    }
}
PackService.ɵfac = function PackService_Factory(t) { return new (t || PackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PackService, factory: PackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Tafr":
/*!******************************************!*\
  !*** ./src/app/packs/packs.component.ts ***!
  \******************************************/
/*! exports provided: PacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacksComponent", function() { return PacksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pack.service */ "T90T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pack_card_pack_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pack-card/pack-card.component */ "Y/+k");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");







function PacksComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "pack-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const savedPack_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pack", savedPack_r3);
} }
function PacksComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PacksComponent_div_0_div_7_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PacksComponent_div_0_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PacksComponent_div_0_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.paginate(ctx_r0.packs));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.page <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.page >= ctx_r0.lastPage);
} }
function PacksComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PacksComponent {
    constructor(service) {
        this.service = service;
        this.title = 'Bot Packs';
        this.description = 'View a range of preselected bots in specific categories.';
        this.packs = [];
        this.page = 1;
        this.size = 8;
        this.initialized = false;
    }
    get lastPage() { return Math.ceil(this.packs.length / this.size); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            if (this.ownerUser) {
                this.packs = this.service.getUserPacks(this.ownerUser.id);
                this.setOwnerLayout();
            }
            this.packs = this.service.getTopPacks();
            this.initialized = true;
        });
    }
    ngAfterViewInit() {
        this.resetPaginator();
    }
    setOwnerLayout() {
        this.title = `${this.ownerUser.username}'s Bot Packs`;
        this.description = `This user has ${this.packs.length} bot packs.`;
    }
    resetPaginator(page = 1) {
        this.page = page;
    }
    previousPage() {
        this.page = Math.max(this.page - 1, 1);
    }
    nextPage() {
        this.page = Math.min(this.page + 1, this.lastPage);
    }
    paginate(array) {
        return array.slice((this.page - 1) * this.size, this.page * this.size);
    }
}
PacksComponent.ɵfac = function PacksComponent_Factory(t) { return new (t || PacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pack_service__WEBPACK_IMPORTED_MODULE_2__["PackService"])); };
PacksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PacksComponent, selectors: [["packs"]], inputs: { ownerUser: "ownerUser" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "pt-5"], [1, "fas", "fa-cube"], [1, "color-secondary", "pb-4"], [1, "row"], ["class", "col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "paginator", "col-12"], [1, "p-3", "float-right"], [1, "cursor-pointer", "ml-1", 3, "hidden", "click"], ["aria-hidden", "true", 1, "fas", "fa-chevron-left"], [1, "mx-3"], [1, "cursor-pointer", "m-1", 3, "hidden", "click"], ["aria-hidden", "true", 1, "fas", "fa-chevron-right"], [1, "col-lg-3", "col-md-4", "col-sm-6", "d-flex", "justify-content-center"], [1, "m-3", 3, "pack"]], template: function PacksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PacksComponent_div_0_Template, 16, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PacksComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.initialized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.initialized);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pack_card_pack_card_component__WEBPACK_IMPORTED_MODULE_4__["PackCardComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]], styles: [".paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InBhY2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdG9yIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PacksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'packs',
                templateUrl: './packs.component.html',
                styleUrls: ['./packs.component.css']
            }]
    }], function () { return [{ type: _services_pack_service__WEBPACK_IMPORTED_MODULE_2__["PackService"] }]; }, { ownerUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "ULY8":
/*!******************************************************!*\
  !*** ./src/app/pipes/kebab-to-sentence-case.pipe.ts ***!
  \******************************************************/
/*! exports provided: KebabToTitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KebabToTitleCasePipe", function() { return KebabToTitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "HC5s");



class KebabToTitleCasePipe {
    transform(words) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["kebabToTitleCase"])(words);
    }
}
KebabToTitleCasePipe.ɵfac = function KebabToTitleCasePipe_Factory(t) { return new (t || KebabToTitleCasePipe)(); };
KebabToTitleCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "kebabToTitleCase", type: KebabToTitleCasePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KebabToTitleCasePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'kebabToTitleCase'
            }]
    }], null, null); })();


/***/ }),

/***/ "WPWp":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThemeService {
    constructor() {
        this.defaultTheme = 'DISCORD';
    }
    changeTheme(theme) {
        localStorage.setItem('theme', theme);
        this.updateTheme();
    }
    updateTheme() {
        var _a;
        const theme = (_a = localStorage.getItem('theme')) !== null && _a !== void 0 ? _a : this.defaultTheme;
        document.querySelector('html').setAttribute('theme', theme);
    }
    setNavbarBackground(color = 'transparent') {
        document
            .querySelector(':root')
            .setAttribute('style', `--navbar-background: ${color};`);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "XXpl":
/*!****************************************!*\
  !*** ./src/app/bots/bots.component.ts ***!
  \****************************************/
/*! exports provided: BotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsComponent", function() { return BotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "HC5s");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_pack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pack.service */ "T90T");
/* harmony import */ var _bot_card_bot_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bot-card/bot-card.component */ "qtPp");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");









function BotsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "bot-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const savedBot_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", savedBot_r3)("user", ctx_r2.service.getBot(savedBot_r3._id));
} }
function BotsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BotsComponent_div_0_div_7_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotsComponent_div_0_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotsComponent_div_0_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.paginate(ctx_r0.savedBots));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.page <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.page >= ctx_r0.lastPage);
} }
function BotsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class BotsComponent {
    constructor(service, location, packs) {
        this.service = service;
        this.location = location;
        this.packs = packs;
        this.page = 1;
        this.size = 8;
        this.title = 'Top';
        this.icon = 'fas fa-robot';
        this.description = 'The highest rated bots this week.';
        this.query = '';
        this.bots = [];
        this.savedBots = [];
        this.initialized = false;
    }
    get lastPage() { return Math.ceil(this.bots.length / this.size); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            if (this.tag)
                this.searchByTag(this.tag);
            else if (this.ownerUser)
                this.showUserBots(this.ownerUser);
            else if (this.pack)
                this.showPackBots(this.pack);
            else
                this.loadTopBots();
            this.initialized = true;
        });
    }
    ngAfterViewInit() {
        this.resetPaginator();
    }
    resetPaginator(page = 1) {
        this.page = page;
    }
    loadTopBots(page = 1) {
        const { bots, saved } = this.service.getTopBots();
        this.bots = bots;
        this.savedBots = saved;
        this.resetPaginator(page);
    }
    search(query) {
        this.query = query;
        const { bots, saved } = this.service.searchBots(query);
        this.bots = bots;
        this.savedBots = saved;
        this.resetPaginator();
        (query.length > 0)
            ? this.setSearchLayout()
            : this.setDefaultLayout();
    }
    searchByTag(tag) {
        var bots = [];
        var saved = [];
        if (tag.name === 'featured')
            var { bots, saved } = this.service.getFeaturedBots();
        else if (tag.name === 'new')
            var { bots, saved } = this.service.getNewBots();
        else
            var { bots, saved } = this.service.getTaggedBots(tag.name);
        this.bots = bots;
        this.savedBots = saved;
        this.setTagLayout(tag);
    }
    showUserBots(user) {
        const { bots, saved } = this.service.getTopBots();
        this.savedBots = saved.filter(sb => sb.ownerId === user.id);
        this.bots = bots.filter(b => this.savedBots.some(sb => sb._id === b.id));
        this.setOwnerLayout(user);
    }
    showPackBots(pack) {
        this.savedBots = pack.bots;
        this.bots = this.service.bots
            .filter(u => pack.bots.some(sb => sb._id === u.id));
        this.setPackLayout(pack);
    }
    setDefaultLayout() {
        this.title = 'Top';
        this.icon = 'fas fa-robot';
        this.description = 'The highest rated bots this week.';
        this.loadTopBots();
        this.location.go('');
    }
    setSearchLayout() {
        this.title = `Results for '${this.query}'`;
        this.description = `Find bots similar to '${this.query}'.`;
        this.icon = 'fas fa-search';
    }
    setTagLayout(tag) {
        this.title = `${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["kebabToTitleCase"])(tag.name)} Bots`;
        this.icon = tag.icon;
        this.description = tag.description;
        this.tag = tag;
        this.resetPaginator();
    }
    setOwnerLayout(user) {
        this.title = `${user.username} Bots`;
        this.description = `This user has ${this.bots.length} bots on DBots.`;
    }
    setPackLayout(pack) {
        this.title = `Pack for ${pack.name}`;
        this.icon = 'fas fa-cube';
        this.description = pack.description;
    }
    previousPage() {
        this.page = Math.max(this.page - 1, 1);
    }
    nextPage() {
        this.page = Math.min(this.page + 1, this.lastPage);
    }
    paginate(array) {
        return array === null || array === void 0 ? void 0 : array.slice((this.page - 1) * this.size, this.page * this.size);
    }
}
BotsComponent.ɵfac = function BotsComponent_Factory(t) { return new (t || BotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pack_service__WEBPACK_IMPORTED_MODULE_5__["PackService"])); };
BotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotsComponent, selectors: [["bots"]], inputs: { tag: "tag", ownerUser: "ownerUser", pack: "pack" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "pt-5"], [1, "color-secondary", "pb-4"], [1, "row"], ["class", "col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "paginator", "col-12"], [1, "p-3", "float-right"], [1, "cursor-pointer", "ml-1", 3, "hidden", "click"], ["aria-hidden", "true", 1, "fas", "fa-chevron-left"], [1, "mx-3"], [1, "cursor-pointer", "m-1", 3, "hidden", "click"], ["aria-hidden", "true", 1, "fas", "fa-chevron-right"], [1, "col-lg-3", "col-md-4", "col-sm-6", "d-flex", "justify-content-center"], [1, "m-3", 3, "bot", "user"]], template: function BotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BotsComponent_div_0_Template, 16, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BotsComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.initialized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.initialized);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _bot_card_bot_card_component__WEBPACK_IMPORTED_MODULE_6__["BotCardComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]], styles: [".paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiYm90cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRvciBzcGFuIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'bots',
                templateUrl: './bots.component.html',
                styleUrls: ['./bots.component.css']
            }]
    }], function () { return [{ type: _services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotsService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _services_pack_service__WEBPACK_IMPORTED_MODULE_5__["PackService"] }]; }, { tag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ownerUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "Y/+k":
/*!********************************************************!*\
  !*** ./src/app/packs/pack-card/pack-card.component.ts ***!
  \********************************************************/
/*! exports provided: PackCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackCardComponent", function() { return PackCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");







function PackCardComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const botUser_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", botUser_r2.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", botUser_r2.username)("matTooltip", botUser_r2.username);
} }
const _c0 = function (a1) { return ["/packs/", a1]; };
function PackCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pack for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PackCardComponent_div_0_div_15_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.pack._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pack.votes, " Votes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.randomColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pack.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.pack.bots.length, " Bots");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.botUsers);
} }
class PackCardComponent {
    constructor(botsService) {
        this.botsService = botsService;
        this.randomColors = [
            '#A52A2A',
            '#6495ED',
            '#DEB887',
            '#008B8B',
            '#B8860B',
            '#8B008B'
        ];
        const index = Math.floor(Math.max(0, Math.random() * (this.randomColors.length - 1)));
        this.randomColor = this.randomColors[index];
    }
    // FIXME: will break with lazy loading
    get botUsers() {
        return this.botsService.bots
            .filter(b => { var _a; return (_a = this.pack) === null || _a === void 0 ? void 0 : _a.bots.includes(b.id); })
            .slice(0, 5);
    }
}
PackCardComponent.ɵfac = function PackCardComponent_Factory(t) { return new (t || PackCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_1__["BotsService"])); };
PackCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackCardComponent, selectors: [["pack-card"]], inputs: { pack: "pack" }, decls: 1, vars: 1, consts: [["class", "fade-in rounded-lg card shadow text-white", 4, "ngIf"], [1, "fade-in", "rounded-lg", "card", "shadow", "text-white"], [1, "card-body"], [1, "float-right"], [1, "d-block", 3, "routerLink"], ["mat-button", "", 1, "rounded-lg"], ["aria-hidden", "true", 1, "fas", "fa-chevron-up"], ["class", "bot-avatars mt-3", 4, "ngFor", "ngForOf"], [1, "bot-avatars", "mt-3"], [1, "round", "float-left", 3, "src", "alt", "matTooltip"]], template: function PackCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PackCardComponent_div_0_Template, 16, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"]], styles: ["img[_ngcontent-%COMP%] {\r\n  margin-top: -15px;\r\n  width: 172px;\r\n  background-color: var(--background-secondary);\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  margin: 0;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  height: 200px;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  width: 256px;\r\n  transition: transform .3s ease-in-out;\r\n  cursor: pointer;\r\n  background-color: var(--background-secondary);\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.bot-avatars[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.bot-avatars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: auto;\r\n}\r\n\r\n.bot-avatars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-left: -8px;\r\n}\r\n\r\n\r\n\r\n.fade-in[_ngcontent-%COMP%] {\r\n  -webkit-animation: fadein 1s;    \r\n      animation: fadein 1s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n\r\n@keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2stY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDdkMsaUJBQWlCLEVBQ2xCLHNCQUFzQixFQUN2QixpQkFBaUI7TUFDdEMsb0JBQW9CO0FBQzFCOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBSEE7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQiIsImZpbGUiOiJwYWNrLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgd2lkdGg6IDE3MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY2FyZC10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiAyNTZweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5ib3QtYXZhdGFycyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4uYm90LWF2YXRhcnMgaW1nIHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmJvdC1hdmF0YXJzIGltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbn1cclxuXHJcbi8qIGFuaW1hdGlvbnMgKi9cclxuLmZhZGUtaW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBGaXJlZm94IDwgMTYgKi9cclxuICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIE9wZXJhIDwgMTIuMSAqL1xyXG4gICAgICBhbmltYXRpb246IGZhZGVpbiAxcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pack-card',
                templateUrl: './pack-card.component.html',
                styleUrls: ['./pack-card.component.css']
            }]
    }], function () { return [{ type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_1__["BotsService"] }]; }, { pack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Y9WU":
/*!***********************************************!*\
  !*** ./src/app/services/analytics.service.ts ***!
  \***********************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.service */ "iXKo");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _bots_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bots.service */ "7oRx");






class AnalyticsService {
    constructor(log, socket, botsService) {
        this.log = log;
        this.socket = socket;
        this.botsService = botsService;
    }
    connect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.botsService.init();
            this.log.info('EMIT READY', 'any');
            this.socket.emit('READY', {
                botIds: this.botsService.userBots.map(b => b.id)
            });
        });
    }
    botImpression(data) {
        this.log.info('EMIT BOT_IMPRESSION', 'any');
        this.socket.emit('BOT_IMPRESSION', data);
    }
    botInvite(data) {
        this.log.info('EMIT BOT_INVITE', 'any');
        this.socket.emit('BOT_INVITE', data);
    }
    botPageView(data) {
        this.log.info('EMIT BOT_PAGE_VIEW', 'any');
        this.socket.emit('BOT_PAGE_VIEW', data);
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"])); };
AnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] }, { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }, { type: _bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"] }]; }, null); })();


/***/ }),

/***/ "YLar":
/*!*****************************************************************!*\
  !*** ./src/app/bots/search-wrapper/search-wrapper.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapperComponent", function() { return SearchWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils */ "HC5s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tag.service */ "lBcp");
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/theme.service */ "WPWp");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../search/search.component */ "tq2C");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../waves/waves.component */ "5DiX");
/* harmony import */ var _bots_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bots.component */ "XXpl");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../home-footer/home-footer.component */ "I/oa");
/* harmony import */ var _packs_packs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../packs/packs.component */ "Tafr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/kebab-to-sentence-case.pipe */ "ULY8");

















const _c0 = ["bots"];
const _c1 = ["searchInput"];
const _c2 = function (a1) { return ["/tags/", a1]; };
function SearchWrapperComponent_div_32_mat_chip_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "kebabToTitleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, tag_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, tag_r4.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tag_r4.icon);
} }
const _c3 = function () { return { description: "Trending bots with the most votes.", icon: "fas fa-chevron-up", name: "trending" }; };
const _c4 = function () { return { description: "Featured bots selected by DBots.", icon: "fas fa-star", name: "featured" }; };
function SearchWrapperComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "packs", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "bots", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "bots", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchWrapperComponent_div_32_mat_chip_8_Template, 4, 8, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tagService.tags);
} }
class SearchWrapperComponent {
    constructor(route, location, seo, tagService, themeService) {
        this.route = route;
        this.location = location;
        this.seo = seo;
        this.tagService = tagService;
        this.themeService = themeService;
        this.focused = false;
        this.placeholder = '';
        this.placeholder = Object(src_app_utils__WEBPACK_IMPORTED_MODULE_1__["kebabToLowerCase"])(this.getRandomPlaceholder());
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const query = this.route.snapshot.queryParamMap.get('q');
            if (query)
                this.search(query);
            this.route.paramMap.subscribe(map => {
                const tagName = map.get('tag');
                if (tagName)
                    this.searchByTag(tagName);
            });
            this.themeService.setNavbarBackground();
        });
    }
    getRandomPlaceholder() {
        const i = Math.floor(Math.random() * (this.tagService.tags.length - 1));
        return this.tagService.tags[i].name;
    }
    search(query) {
        this.location.go('search', `?q=${query}`);
        this.seo.setTags(({
            description: `Find bots similar to '${query}'.`,
            titlePrefix: `${query} Bots`,
            url: `search/q?=${query}`
        }));
        return this.botsComponent.search(query);
    }
    searchByTag(name) {
        const tag = this.tagService.getTag(name);
        this.botsComponent.searchByTag(tag);
        this.seo.setTags({
            description: tag.description,
            titlePrefix: `${Object(src_app_utils__WEBPACK_IMPORTED_MODULE_1__["kebabToTitleCase"])(tag.name)} Bots`,
            url: `tags/${tag.name}`
        });
    }
}
SearchWrapperComponent.ɵfac = function SearchWrapperComponent_Factory(t) { return new (t || SearchWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"])); };
SearchWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchWrapperComponent, selectors: [["search-wrapper"]], viewQuery: function SearchWrapperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.botsComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, decls: 34, vars: 4, consts: [[1, "container", "jumbotron", "mb-0"], [1, "text-center"], [1, "lead", "text-muted"], [1, "d-flex", "justify-content-center"], [3, "blur", "focus", "search"], ["searchInput", ""], ["href", "#top"], [1, "pl-1", "fas", "fa-trophy"], ["href", "#packs"], [1, "pl-1", "fas", "fa-cube"], ["href", "#trending"], [1, "pl-1", "fas", "fa-star"], [1, "more"], ["href", "#tags"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["inverted", "true", 3, "color"], ["id", "content", 1, "container"], ["id", "top"], ["bots", ""], [4, "ngIf"], ["id", "packs"], ["id", "trending", 3, "tag"], [3, "tag"], ["id", "tags", 1, "pb-2"], [1, "fas", "fa-hashtag"], ["class", "tag cursor-pointer", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-5", "mb-2"], [1, "rounded-lg", "btn-gradient"], ["routerLink", "/tags", "mat-button", "", 1, "btn-gradient", "py-2", "px-4"], [1, "tag", "cursor-pointer", 3, "routerLink"], ["aria-hidden", "true", 1, "ml-1"]], template: function SearchWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Find the Best Discord Bots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Find bots for your servers quickly and simply.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchWrapperComponent_Template_search_blur_9_listener() { return ctx.focused = false; })("focus", function SearchWrapperComponent_Template_search_focus_9_listener() { return ctx.focused = true; })("search", function SearchWrapperComponent_Template_search_search_9_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bot Packs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Trending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-chip", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "waves", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "bots", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SearchWrapperComponent_div_32_Template, 13, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "home-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx.focused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.focused ? "var(--secondary)" : "transparent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.query && !_r1.tag);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _waves_waves_component__WEBPACK_IMPORTED_MODULE_10__["WavesComponent"], _bots_component__WEBPACK_IMPORTED_MODULE_11__["BotsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_12__["HomeFooterComponent"], _packs_packs_component__WEBPACK_IMPORTED_MODULE_13__["PacksComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_15__["KebabToTitleCasePipe"]], styles: ["header[_ngcontent-%COMP%] {\r\n    transition: background-color 1s ease-in-out;\r\n    transition-delay: 0ms;\r\n}\r\nheader[_ngcontent-%COMP%]:not(.focused) {\r\n    transition-delay: 125ms;\r\n}\r\nheader.focused[_ngcontent-%COMP%] {\r\n    background-color: var(--secondary);\r\n}\r\n.robot[_ngcontent-%COMP%] {\r\n    max-width: 192px;\r\n    margin-bottom: 5px;\r\n}\r\np[_ngcontent-%COMP%]:not(.lead) {\r\n    color: var(--secondary);\r\n    cursor: pointer;\r\n}\r\nmat-chip[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    background-color: var(--primary) !important;\r\n}\r\n.more[_ngcontent-%COMP%] {\r\n    background-color: var(--tertiary) !important;    \r\n}\r\n#content[_ngcontent-%COMP%] {\r\n    min-height: 40vh;\r\n}\r\n#searchButton[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    height: 64px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC13cmFwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7SUFDM0MscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzZWFyY2gtd3JhcHBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwbXM7XHJcbn1cclxuaGVhZGVyOm5vdCguZm9jdXNlZCkge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTI1bXM7XHJcbn1cclxuaGVhZGVyLmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnJvYm90IHtcclxuICAgIG1heC13aWR0aDogMTkycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnA6bm90KC5sZWFkKSB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWNoaXAge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpICFpbXBvcnRhbnQ7ICAgIFxyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xyXG59XHJcblxyXG4jc2VhcmNoQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'search-wrapper',
                templateUrl: './search-wrapper.component.html',
                styleUrls: ['./search-wrapper.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }, { type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"] }, { type: src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] }]; }, { botsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bots']
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }] }); })();


/***/ }),

/***/ "Z6y1":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/bots/bot-sidebar/bot-sidebar.component.ts ***!
  \*********************************************************************/
/*! exports provided: BotSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotSidebarComponent", function() { return BotSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "o6KS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../spinner/spinner.component */ "CZqF");






function BotSidebarComponent_sidebar_0_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.user.username);
} }
const _c0 = function (a0) { return [a0]; };
function BotSidebarComponent_sidebar_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " View Listing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Log");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Widget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "/bots/" + ctx_r2.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/bots/" + ctx_r2.user.id + "/edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/bots/" + ctx_r2.user.id + "/log");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/bots/" + ctx_r2.user.id + "/api");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/bots/" + ctx_r2.user.id + "/analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/bots/" + ctx_r2.user.id + "/widget");
} }
const _c1 = function () { return ["/docs/guidelines"]; };
const _c2 = function () { return ["/docs/get-featured"]; };
function BotSidebarComponent_sidebar_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Guidelines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Get Featured");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
function BotSidebarComponent_sidebar_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BotSidebarComponent_sidebar_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BotSidebarComponent_sidebar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BotSidebarComponent_sidebar_0_img_3_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BotSidebarComponent_sidebar_0_div_8_Template, 21, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BotSidebarComponent_sidebar_0_div_9_Template, 7, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BotSidebarComponent_sidebar_0_div_11_Template, 3, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BotSidebarComponent_sidebar_0_div_12_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.displayAvatarURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/dashboard/bots/" + ctx_r0.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loaded);
} }
const _c3 = ["*"];
class BotSidebarComponent {
    constructor() {
        this.loaded = true;
        this.user = {
            id: '',
            displayAvatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
            username: 'New Bot'
        };
    }
}
BotSidebarComponent.ɵfac = function BotSidebarComponent_Factory(t) { return new (t || BotSidebarComponent)(); };
BotSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BotSidebarComponent, selectors: [["bot-sidebar"]], inputs: { loaded: "loaded", user: "user" }, ngContentSelectors: _c3, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "side-nav", "navbar-dark"], [1, "header"], [3, "src", "alt", 4, "ngIf"], [3, "routerLink"], [1, "category"], ["class", "navbar-nav", 4, "ngIf"], ["id", "content"], [3, "src", "alt"], [1, "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-file-alt"], [1, "fas", "fa-server"], [1, "fas", "fa-chart-area"], [1, "fas", "fa-star"], [1, "fas", "fa-book"], [1, "mt-5", "pt-2"]], template: function BotSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BotSidebarComponent_sidebar_0_Template, 13, 9, "sidebar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], styles: ["h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJib3Qtc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bot-sidebar',
                templateUrl: './bot-sidebar.component.html',
                styleUrls: ['./bot-sidebar.component.css']
            }]
    }], null, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AlertErrorHandler, AppModule, getHighlightLanguages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertErrorHandler", function() { return AlertErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function() { return getHighlightLanguages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./invite/invite.component */ "BLUW");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");
/* harmony import */ var _dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard-overview/dashboard-overview.component */ "j5pO");
/* harmony import */ var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.component */ "o6KS");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./spinner/spinner.component */ "CZqF");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _dashboard_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/log-module/log-module.component */ "0S1r");
/* harmony import */ var _dashboard_bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/bots/bot-sidebar/bot-sidebar.component */ "Z6y1");
/* harmony import */ var _dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/dashboard-sidebar/dashboard-sidebar.component */ "0rEi");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./material-module */ "j5wd");
/* harmony import */ var _dashboard_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/save-changes/save-changes.component */ "NWAD");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./docs/docs.component */ "86Op");
/* harmony import */ var _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/clean-date-time.pipe */ "Rc5a");
/* harmony import */ var _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./member-username/member-username.component */ "aVT6");
/* harmony import */ var _docs_sidebar_docs_sidebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./docs-sidebar/docs-sidebar.component */ "zLnx");
/* harmony import */ var _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./zippy/zippy.component */ "5HMO");
/* harmony import */ var _dashboard_widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard/widgets/audit-log-widget/audit-log-widget.component */ "Meo+");
/* harmony import */ var _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/truncated.pipe */ "gPlj");
/* harmony import */ var _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/duration-string.pipe */ "vGr5");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./home-footer/home-footer.component */ "I/oa");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./waves/waves.component */ "5DiX");
/* harmony import */ var _dashboard_bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dashboard/bots/add-bot/add-bot.component */ "jFRy");
/* harmony import */ var _bot_preview_bot_preview_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./bot-preview/bot-preview.component */ "yz/E");
/* harmony import */ var _bot_card_bot_card_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./bot-card/bot-card.component */ "qtPp");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/seo.service */ "gYN0");
/* harmony import */ var _bots_bots_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./bots/bots.component */ "XXpl");
/* harmony import */ var _bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./bots/search-wrapper/search-wrapper.component */ "YLar");
/* harmony import */ var _dashboard_bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dashboard/bots/edit-bot/edit-bot.component */ "9bCR");
/* harmony import */ var _rocket_button_rocket_button_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./rocket-button/rocket-button.component */ "zg1N");
/* harmony import */ var _pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pipes/kebab-to-sentence-case.pipe */ "ULY8");
/* harmony import */ var _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pipes/mini-date.pipe */ "5jTC");
/* harmony import */ var _bot_page_bot_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./bot-page/bot-page.component */ "ZqsJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _dashboard_bots_bot_bot_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dashboard/bots/bot/bot.component */ "9gDg");
/* harmony import */ var _bot_vote_bot_vote_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./bot-vote/bot-vote.component */ "dalz");
/* harmony import */ var _dashboard_bot_log_bot_log_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./dashboard/bot-log/bot-log.component */ "3e1s");
/* harmony import */ var _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./cookie-banner/cookie-banner.component */ "cgln");
/* harmony import */ var _dashboard_api_api_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dashboard/api/api.component */ "2uGl");
/* harmony import */ var _dashboard_widgets_votes_widget_votes_widget_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./dashboard/widgets/votes-widget/votes-widget.component */ "S8Jq");
/* harmony import */ var _dashboard_bot_widget_bot_widget_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./dashboard/bot-widget/bot-widget.component */ "tHbC");
/* harmony import */ var _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./users/user-profile/user-profile.component */ "Jvlx");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _packs_packs_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./packs/packs.component */ "Tafr");
/* harmony import */ var _packs_pack_card_pack_card_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./packs/pack-card/pack-card.component */ "Y/+k");
/* harmony import */ var _dashboard_bots_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./dashboard/bots/analytics/analytics.component */ "ENxU");
/* harmony import */ var _packs_pack_pack_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./packs/pack/pack.component */ "4/A2");
/* harmony import */ var _packs_pack_vote_pack_vote_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./packs/pack-vote/pack-vote.component */ "ha6e");


































































class AlertErrorHandler {
    handleError(error) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log(error);
                const message = (_h = (_g = (_e = (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : (_d = (_c = error === null || error === void 0 ? void 0 : error.rejection) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.message) !== null && _e !== void 0 ? _e : (_f = error === null || error === void 0 ? void 0 : error.rejection) === null || _f === void 0 ? void 0 : _f.error) !== null && _g !== void 0 ? _g : error === null || error === void 0 ? void 0 : error.message) !== null && _h !== void 0 ? _h : error;
                console.log(message);
                const key = localStorage.getItem('key');
                yield fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_48__["environment"].endpoint}/error`, {
                    method: 'POST',
                    headers: {
                        'Authorization': key,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message })
                });
            }
            catch (_j) { }
        });
    }
}
AlertErrorHandler.ɵfac = function AlertErrorHandler_Factory(t) { return new (t || AlertErrorHandler)(); };
AlertErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlertErrorHandler, factory: AlertErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AlertErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], null, null); })();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_seo_service__WEBPACK_IMPORTED_MODULE_40__["SEOService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: AlertErrorHandler },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ShowOnDirtyErrorStateMatcher"] },
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HIGHLIGHT_OPTIONS"],
            useValue: { languages: getHighlightLanguages() }
        }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot({ url: src_environments_environment__WEBPACK_IMPORTED_MODULE_48__["environment"].rootEndpoint }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_24__["MaterialModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _invite_invite_component__WEBPACK_IMPORTED_MODULE_15__["InviteComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"],
        _dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
        _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"],
        _dashboard_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_21__["LogModuleComponent"],
        _dashboard_bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["BotSidebarComponent"],
        _dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["DashboardSidebarComponent"],
        _dashboard_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_25__["SaveChangesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"],
        _docs_docs_component__WEBPACK_IMPORTED_MODULE_27__["DocsComponent"],
        _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_28__["CleanDateTimePipe"],
        _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_29__["MemberUsernameComponent"],
        _docs_sidebar_docs_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["DocsSidebarComponent"],
        _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_31__["ZippyComponent"],
        _dashboard_widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_32__["AuditLogWidgetComponent"],
        _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_33__["TruncatedPipe"],
        _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_34__["DurationStringPipe"],
        _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_35__["HomeFooterComponent"],
        _waves_waves_component__WEBPACK_IMPORTED_MODULE_36__["WavesComponent"],
        _dashboard_bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_37__["AddBotComponent"],
        _bot_preview_bot_preview_component__WEBPACK_IMPORTED_MODULE_38__["BotPreviewComponent"],
        _bot_card_bot_card_component__WEBPACK_IMPORTED_MODULE_39__["BotCardComponent"],
        _bots_bots_component__WEBPACK_IMPORTED_MODULE_41__["BotsComponent"],
        _bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_42__["SearchWrapperComponent"],
        _dashboard_bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_43__["EditBotComponent"],
        _rocket_button_rocket_button_component__WEBPACK_IMPORTED_MODULE_44__["RocketButtonComponent"],
        _pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_45__["KebabToTitleCasePipe"],
        _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_46__["MiniDatePipe"],
        _bot_page_bot_page_component__WEBPACK_IMPORTED_MODULE_47__["BotPageComponent"],
        _dashboard_bots_bot_bot_component__WEBPACK_IMPORTED_MODULE_49__["BotComponent"],
        _bot_vote_bot_vote_component__WEBPACK_IMPORTED_MODULE_50__["BotVoteComponent"],
        _dashboard_bot_log_bot_log_component__WEBPACK_IMPORTED_MODULE_51__["BotLogComponent"],
        _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_52__["CookieBannerComponent"],
        _dashboard_api_api_component__WEBPACK_IMPORTED_MODULE_53__["APIComponent"],
        _dashboard_widgets_votes_widget_votes_widget_component__WEBPACK_IMPORTED_MODULE_54__["VotesWidgetComponent"],
        _dashboard_bot_widget_bot_widget_component__WEBPACK_IMPORTED_MODULE_55__["BotWidgetComponent"],
        _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_56__["UserProfileComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_57__["SearchComponent"],
        _packs_packs_component__WEBPACK_IMPORTED_MODULE_58__["PacksComponent"],
        _packs_pack_card_pack_card_component__WEBPACK_IMPORTED_MODULE_59__["PackCardComponent"],
        _dashboard_bots_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_60__["AnalyticsComponent"],
        _packs_pack_pack_component__WEBPACK_IMPORTED_MODULE_61__["PackComponent"],
        _packs_pack_vote_pack_vote_component__WEBPACK_IMPORTED_MODULE_62__["PackVoteComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_24__["MaterialModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _invite_invite_component__WEBPACK_IMPORTED_MODULE_15__["InviteComponent"],
                    _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"],
                    _dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                    _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"],
                    _dashboard_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_21__["LogModuleComponent"],
                    _dashboard_bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["BotSidebarComponent"],
                    _dashboard_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["DashboardSidebarComponent"],
                    _dashboard_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_25__["SaveChangesComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"],
                    _docs_docs_component__WEBPACK_IMPORTED_MODULE_27__["DocsComponent"],
                    _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_28__["CleanDateTimePipe"],
                    _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_29__["MemberUsernameComponent"],
                    _docs_sidebar_docs_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["DocsSidebarComponent"],
                    _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_31__["ZippyComponent"],
                    _dashboard_widgets_audit_log_widget_audit_log_widget_component__WEBPACK_IMPORTED_MODULE_32__["AuditLogWidgetComponent"],
                    _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_33__["TruncatedPipe"],
                    _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_34__["DurationStringPipe"],
                    _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_35__["HomeFooterComponent"],
                    _waves_waves_component__WEBPACK_IMPORTED_MODULE_36__["WavesComponent"],
                    _dashboard_bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_37__["AddBotComponent"],
                    _bot_preview_bot_preview_component__WEBPACK_IMPORTED_MODULE_38__["BotPreviewComponent"],
                    _bot_card_bot_card_component__WEBPACK_IMPORTED_MODULE_39__["BotCardComponent"],
                    _bots_bots_component__WEBPACK_IMPORTED_MODULE_41__["BotsComponent"],
                    _bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_42__["SearchWrapperComponent"],
                    _dashboard_bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_43__["EditBotComponent"],
                    _rocket_button_rocket_button_component__WEBPACK_IMPORTED_MODULE_44__["RocketButtonComponent"],
                    _pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_45__["KebabToTitleCasePipe"],
                    _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_46__["MiniDatePipe"],
                    _bot_page_bot_page_component__WEBPACK_IMPORTED_MODULE_47__["BotPageComponent"],
                    _dashboard_bots_bot_bot_component__WEBPACK_IMPORTED_MODULE_49__["BotComponent"],
                    _bot_vote_bot_vote_component__WEBPACK_IMPORTED_MODULE_50__["BotVoteComponent"],
                    _dashboard_bot_log_bot_log_component__WEBPACK_IMPORTED_MODULE_51__["BotLogComponent"],
                    _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_52__["CookieBannerComponent"],
                    _dashboard_api_api_component__WEBPACK_IMPORTED_MODULE_53__["APIComponent"],
                    _dashboard_widgets_votes_widget_votes_widget_component__WEBPACK_IMPORTED_MODULE_54__["VotesWidgetComponent"],
                    _dashboard_bot_widget_bot_widget_component__WEBPACK_IMPORTED_MODULE_55__["BotWidgetComponent"],
                    _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_56__["UserProfileComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_57__["SearchComponent"],
                    _packs_packs_component__WEBPACK_IMPORTED_MODULE_58__["PacksComponent"],
                    _packs_pack_card_pack_card_component__WEBPACK_IMPORTED_MODULE_59__["PackCardComponent"],
                    _dashboard_bots_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_60__["AnalyticsComponent"],
                    _packs_pack_pack_component__WEBPACK_IMPORTED_MODULE_61__["PackComponent"],
                    _packs_pack_vote_pack_vote_component__WEBPACK_IMPORTED_MODULE_62__["PackVoteComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot({ url: src_environments_environment__WEBPACK_IMPORTED_MODULE_48__["environment"].rootEndpoint }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_24__["MaterialModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]
                ],
                providers: [
                    _services_seo_service__WEBPACK_IMPORTED_MODULE_40__["SEOService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: AlertErrorHandler },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ShowOnDirtyErrorStateMatcher"] },
                    {
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HIGHLIGHT_OPTIONS"],
                        useValue: { languages: getHighlightLanguages() }
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();
function getHighlightLanguages() {
    return {
        json: () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
    };
}


/***/ }),

/***/ "ZqsJ":
/*!************************************************!*\
  !*** ./src/app/bot-page/bot-page.component.ts ***!
  \************************************************/
/*! exports provided: BotPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotPageComponent", function() { return BotPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/seo.service */ "gYN0");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/theme.service */ "WPWp");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home-footer/home-footer.component */ "I/oa");
/* harmony import */ var _bot_preview_bot_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bot-preview/bot-preview.component */ "yz/E");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");














function BotPageComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your bot will visible on the bot list if it is approved. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BotPageComponent_div_1_bot_preview_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bot-preview", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx_r3.bot)("user", ctx_r3.user);
} }
const _c0 = function (a1) { return ["/bots/", a1]; };
function BotPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Bots");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BotPageComponent_div_1_div_9_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BotPageComponent_div_1_bot_preview_10_Template, 1, 2, "bot-preview", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.bot.approvedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.bot.listing);
} }
function BotPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class BotPageComponent {
    constructor(analytics, route, router, seo, service, userService, themeService) {
        this.analytics = analytics;
        this.route = route;
        this.router = router;
        this.seo = seo;
        this.service = service;
        this.userService = userService;
        this.themeService = themeService;
    }
    get id() { return this.route.snapshot.paramMap.get('id'); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            this.user = this.service.getBot(this.id);
            this.bot = this.service.getSavedBot(this.id);
            if (!this.user || !this.bot) {
                yield this.router.navigate(['/']);
                return;
            }
            this.seo.setTags({
                description: this.bot.listing.overview,
                titlePrefix: this.user.username,
                titleSuffix: 'DBots',
                url: `bots/${this.id}`
            });
            this.analytics.botPageView({ botId: this.user.id });
            this.themeService.setNavbarBackground('var(--background-secondary)');
            document
                .querySelector('.navbar')
                .setAttribute('style', `margin-bottom: -5px;`);
        });
    }
}
BotPageComponent.ɵfac = function BotPageComponent_Factory(t) { return new (t || BotPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"])); };
BotPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotPageComponent, selectors: [["app-bot-page"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/bots"], [3, "routerLink"], ["class", "alert alert-info mx-5", 4, "ngIf"], [3, "bot", "user", 4, "ngIf"], [1, "alert", "alert-info", "mx-5"], ["aria-hidden", "true", 1, "fas", "fa-info-circle"], [3, "bot", "user"], [1, "container"]], template: function BotPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BotPageComponent_div_1_Template, 11, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BotPageComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot && ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.bot || !ctx.user);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_10__["HomeFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _bot_preview_bot_preview_component__WEBPACK_IMPORTED_MODULE_11__["BotPreviewComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  min-height: 78.5vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYm90LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDc4LjV2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bot-page',
                templateUrl: './bot-page.component.html',
                styleUrls: ['./bot-page.component.css']
            }]
    }], function () { return [{ type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "aVT6":
/*!**************************************************************!*\
  !*** ./src/app/member-username/member-username.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberUsernameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberUsernameComponent", function() { return MemberUsernameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MemberUsernameComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.user.tag);
} }
function MemberUsernameComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberUsernameComponent_div_0_img_1_Template, 1, 2, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.withAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.user.discriminator, "");
} }
class MemberUsernameComponent {
    constructor() {
        this.withAvatar = true;
    }
}
MemberUsernameComponent.ɵfac = function MemberUsernameComponent_Factory(t) { return new (t || MemberUsernameComponent)(); };
MemberUsernameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberUsernameComponent, selectors: [["member-username"]], inputs: { user: "user", withAvatar: "withAvatar" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "src", "alt", 4, "ngIf"], [1, "username"], [1, "tag"], [3, "src", "alt"]], template: function MemberUsernameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberUsernameComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["img[_ngcontent-%COMP%] {\r\n    max-width: 32px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.username[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.tag[_ngcontent-%COMP%] {\r\n    color: gray;\r\n    font-size: 16px;\r\n    padding-left: 2.5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci11c2VybmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibWVtYmVyLXVzZXJuYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGFnIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberUsernameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'member-username',
                templateUrl: './member-username.component.html',
                styleUrls: ['./member-username.component.css']
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], withAvatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "agny":
/*!*****************************************************!*\
  !*** ./src/app/zippy/zippy.component.animations.ts ***!
  \*****************************************************/
/*! exports provided: expandCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandCollapse", function() { return expandCollapse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const expandCollapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCollapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        padding: '0 20px'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease')])
]);


/***/ }),

/***/ "cgln":
/*!**********************************************************!*\
  !*** ./src/app/cookie-banner/cookie-banner.component.ts ***!
  \**********************************************************/
/*! exports provided: CookieBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBannerComponent", function() { return CookieBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




function CookieBannerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We use cookies to improve your experience.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.agree(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CookieBannerComponent {
    get allowedCookies() { return localStorage.getItem('allowedCookies'); }
    agree() {
        const $ = (selector) => document.querySelector(selector);
        $('.cookies').style.transform = 'translateY(60%) scale(0.8)';
        $('.cookies').style.opacity = '0';
        $('.cookies').style.filter = 'blur(3px)';
        setTimeout(() => {
            $('.cookies').style.transform = 'translateY(-100%)';
            localStorage.setItem('allowedCookies', 'true');
        }, 400);
    }
}
CookieBannerComponent.ɵfac = function CookieBannerComponent_Factory(t) { return new (t || CookieBannerComponent)(); };
CookieBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CookieBannerComponent, selectors: [["cookie-banner"]], decls: 1, vars: 1, consts: [["class", "cookies", 4, "ngIf"], [1, "cookies"], [1, "cookies-icon", "text-warning"], [1, "fas", "fa-cookie"], [1, "cookies-message"], ["color", "success", "mat-button", "", 1, "cookies-accept", 3, "click"], [1, "fas", "fa-check"]], template: function CookieBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CookieBannerComponent_div_0_Template, 7, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allowedCookies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["*[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.cookies[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-content: center;\r\n  flex-wrap: nowrap;\r\n  background: #292C30;\r\n  height: 80px;\r\n  padding: 22px 22px 22px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.06);\r\n\r\n  position: -webkit-sticky;\r\n\r\n  position: sticky;\r\n  bottom: 0;\r\n}\r\n\r\n.cookies-icon[_ngcontent-%COMP%] {\r\n  font-size: x-large;\r\n  -webkit-animation: spin 2s linear infinite;\r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n.cookies-message[_ngcontent-%COMP%] {\r\n  height: 36px;\r\n  padding: 0px 10px;\r\n  line-height: 36px;\r\n  color: #FFFFFF;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 576px) {\r\n  .cookies[_ngcontent-%COMP%] {\r\n    height: 125px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2tpZS1iYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsOENBQThDOztFQUU5Qyx3QkFBZ0I7O0VBQWhCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMENBQWtDO1VBQWxDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQVBBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLG9EQUFvRDs7QUFDcEQ7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImNvb2tpZS1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29va2llcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGJhY2tncm91bmQ6ICMyOTJDMzA7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBhZGRpbmc6IDIycHggMjJweCAyMnB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDY1LCA3MiwgODYsIDAuMDYpO1xyXG5cclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvb2tpZXMtaWNvbiB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jb29raWVzLW1lc3NhZ2Uge1xyXG4gIGhlaWdodDogMzZweDtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvb2tpZXMge1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cookie-banner',
                templateUrl: './cookie-banner.component.html',
                styleUrls: ['./cookie-banner.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "dalz":
/*!************************************************!*\
  !*** ./src/app/bot-vote/bot-vote.component.ts ***!
  \************************************************/
/*! exports provided: BotVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotVoteComponent", function() { return BotVoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/seo.service */ "gYN0");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme.service */ "WPWp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home-footer/home-footer.component */ "I/oa");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");














function BotVoteComponent_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login to Vote ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BotVoteComponent_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotVoteComponent_div_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.vote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Vote ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function BotVoteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BotVoteComponent_div_1_button_8_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BotVoteComponent_div_1_button_9_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/bots/" + ctx_r0.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.widgetURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, "/bots/" + ctx_r0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.userService.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userService.user);
} }
function BotVoteComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class BotVoteComponent {
    constructor(route, router, seo, service, themeService, userService) {
        this.route = route;
        this.router = router;
        this.seo = seo;
        this.service = service;
        this.themeService = themeService;
        this.userService = userService;
    }
    get widgetURL() { return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint}/bots/${this.id}/widget?size=medium`; }
    get id() { return this.route.snapshot.paramMap.get('id'); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            this.user = this.service.getBot(this.id);
            this.bot = this.service.getSavedBot(this.id);
            if (!this.user || !this.bot)
                return this.router.navigate(['']);
            this.seo.setTags({
                description: this.bot.listing.overview,
                titlePrefix: `Vote for ${this.user.username}`,
                titleSuffix: 'DBots',
                url: `bots/${this.id}`
            });
            this.themeService.setNavbarBackground('transparent');
        });
    }
    vote() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.userService.user)
                return;
            try {
                yield this.service.vote(this.id);
            }
            catch (error) {
                alert((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message);
            }
            yield this.service.refreshBots();
            return this.router.navigate(['/bots/' + this.id]);
        });
    }
}
BotVoteComponent.ɵfac = function BotVoteComponent_Factory(t) { return new (t || BotVoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
BotVoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotVoteComponent, selectors: [["app-bot-vote"]], decls: 4, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "d-flex", "justify-content-center", "mb-3"], [3, "href"], [3, "src", "alt"], [1, "d-flex", "justify-content-center"], ["color", "secondary", "mat-button", "", 1, "bg-secondary", "mr-2", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-left"], ["routerLink", "/login", "class", "bg-primary", "mat-button", "", 4, "ngIf"], ["id", "vote", "color", "success", "mat-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/login", "mat-button", "", 1, "bg-primary"], [1, "fas", "fa-user-alt"], ["id", "vote", "color", "success", "mat-button", "", 3, "click"], [1, "fas", "fa-chevron-circle-up"]], template: function BotVoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BotVoteComponent_div_1_Template, 10, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BotVoteComponent_div_2_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot && ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.bot || !ctx.user);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_10__["HomeFooterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  min-height: 78.5vh;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC12b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYm90LXZvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDc4LjV2aDtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotVoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bot-vote',
                templateUrl: './bot-vote.component.html',
                styleUrls: ['./bot-vote.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "gPlj":
/*!*****************************************!*\
  !*** ./src/app/pipes/truncated.pipe.ts ***!
  \*****************************************/
/*! exports provided: TruncatedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatedPipe", function() { return TruncatedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TruncatedPipe {
    transform(words, max) {
        return words.substring(0, max) + '...';
    }
}
TruncatedPipe.ɵfac = function TruncatedPipe_Factory(t) { return new (t || TruncatedPipe)(); };
TruncatedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncated", type: TruncatedPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncated'
            }]
    }], null, null); })();


/***/ }),

/***/ "gYN0":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SEOService {
    constructor(ngMeta, ngTitle) {
        this.ngMeta = ngMeta;
        this.ngTitle = ngTitle;
        this.base = {
            titlePrefix: 'Best Discord Bots',
            titleSuffix: 'DBots',
            url: 'https://dbots.co'
        };
        this.keywords('discord bots, discord bot maker, discord bot commands, discord bot builder, discord bot list');
        this.image('https://dbots.co/assets/img/logo.svg');
    }
    get metaInstance() {
        return this.ngMeta;
    }
    setTags(config) {
        this.title(config.titleSuffix, config.titlePrefix);
        this.description(config.description);
        this.url(config.url);
    }
    setNameTag(name) {
        const property = {
            name: name.name,
            content: name.content,
        };
        if (name.itemprop && name.itemprop !== '')
            property['itemprop'] = name.itemprop;
        if (this.ngMeta.getTag(`name="${property.name}"`))
            this.ngMeta.updateTag(property);
        else
            this.ngMeta.addTag(property);
    }
    setPropertyTag(prop) {
        const property = {
            property: prop.property,
            content: prop.content,
        };
        if (prop.itemprop !== undefined && prop.itemprop !== '')
            property['itemprop'] = prop.itemprop;
        if (this.ngMeta.getTag(`property="${property.property}"`))
            this.ngMeta.updateTag(property);
        else
            this.ngMeta.addTag(property);
    }
    url(content) {
        this.ngMeta.updateTag({ property: 'og:url', itemprop: 'url', content: `${this.base.url}/${content}` });
    }
    title(titleSuffix = this.base.titleSuffix, titlePrefix = this.base.titlePrefix) {
        const setTitle = (titleSuffix !== undefined && titleSuffix !== '')
            ? `${titlePrefix} - ${titleSuffix}`
            : titlePrefix;
        this.ngTitle.setTitle(setTitle);
        this.setPropertyTag({ property: 'og:title', itemprop: 'title', content: setTitle });
        this.setPropertyTag({ property: 'twitter:title', itemprop: 'title', content: setTitle });
    }
    description(content) {
        this.setNameTag({ name: 'description', itemprop: 'description', content });
        this.setPropertyTag({ property: 'og:description', itemprop: 'description', content });
        this.setPropertyTag({ property: 'twitter:description', itemprop: 'description', content });
    }
    image(content) {
        this.setPropertyTag({ property: 'twitter:image', itemprop: 'image', content });
        this.setPropertyTag({ property: 'og:image', itemprop: 'image', content });
        this.setPropertyTag({ property: 'og:image:secure_url', itemprop: 'image', content });
    }
    keywords(content) {
        this.setNameTag({ name: 'keywords', itemprop: 'keywords', content });
    }
}
SEOService.ɵfac = function SEOService_Factory(t) { return new (t || SEOService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
SEOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SEOService, factory: SEOService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SEOService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "ha6e":
/*!********************************************************!*\
  !*** ./src/app/packs/pack-vote/pack-vote.component.ts ***!
  \********************************************************/
/*! exports provided: PackVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackVoteComponent", function() { return PackVoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pack.service */ "T90T");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../home-footer/home-footer.component */ "I/oa");
/* harmony import */ var _pack_card_pack_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pack-card/pack-card.component */ "Y/+k");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../spinner/spinner.component */ "CZqF");












function PackVoteComponent_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login to Vote ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PackVoteComponent_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PackVoteComponent_div_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.vote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Vote ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function PackVoteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "pack-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PackVoteComponent_div_1_button_7_Template, 3, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PackVoteComponent_div_1_button_8_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pack", ctx_r0.pack);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, "/packs/" + ctx_r0.packId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.userService.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userService.user);
} }
function PackVoteComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PackVoteComponent {
    constructor(route, packs, router, userService) {
        this.route = route;
        this.packs = packs;
        this.router = router;
        this.userService = userService;
    }
    get packId() {
        return this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.packs.init();
            this.pack = yield this.packs.get(this.packId);
            if (!this.pack)
                return this.router.navigate(['/']);
        });
    }
    vote() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.userService.user)
                return;
            try {
                yield this.packs.vote(this.packId);
            }
            catch (error) {
                alert((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message);
            }
            yield this.packs.refreshPacks();
            return this.router.navigate(['/packs/' + this.packId]);
        });
    }
}
PackVoteComponent.ɵfac = function PackVoteComponent_Factory(t) { return new (t || PackVoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_3__["PackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
PackVoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PackVoteComponent, selectors: [["app-pack-vote"]], decls: 4, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "d-flex", "justify-content-center", "mb-3"], [3, "pack"], [1, "d-flex", "justify-content-center"], ["color", "secondary", "mat-button", "", 1, "bg-secondary", "mr-2", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-left"], ["routerLink", "/login", "class", "bg-primary", "mat-button", "", 4, "ngIf"], ["id", "vote", "color", "success", "mat-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/login", "mat-button", "", 1, "bg-primary"], [1, "fas", "fa-user-alt"], ["id", "vote", "color", "success", "mat-button", "", 3, "click"], [1, "fas", "fa-chevron-circle-up"]], template: function PackVoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PackVoteComponent_div_1_Template, 9, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PackVoteComponent_div_2_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pack);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pack);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_7__["HomeFooterComponent"], _pack_card_pack_card_component__WEBPACK_IMPORTED_MODULE_8__["PackCardComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  min-height: 78.5vh;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2stdm90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InBhY2stdm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogNzguNXZoO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PackVoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-pack-vote',
                templateUrl: './pack-vote.component.html',
                styleUrls: ['./pack-vote.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_pack_service__WEBPACK_IMPORTED_MODULE_3__["PackService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "iXKo":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogService {
    get hhMMSS() {
        return new Date()
            .toTimeString()
            .split(' ')[0];
    }
    info(message, src) {
        var _a;
        console.log(`%c[${this.hhMMSS}]`, 'color: green', `[${(_a = src === null || src === void 0 ? void 0 : src.toUpperCase()) !== null && _a !== void 0 ? _a : '???'}]`, `${message}`);
    }
}
LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(); };
LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogService, factory: LogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "j5pO":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-overview/dashboard-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard-sidebar/dashboard-sidebar.component */ "0rEi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../member-username/member-username.component */ "aVT6");









function DashboardComponent_div_10_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "member-username", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](msg_r4.feedback.approved ? "bg-success" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", msg_r4.bot.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", msg_r4.bot.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bot ", msg_r4.feedback.approved ? "Approved" : "Not Approved", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", msg_r4.feedback.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r4.bot.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, msg_r4.reviewer));
} }
function DashboardComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_10_div_3_div_1_Template, 12, 10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.feedback);
} }
function DashboardComponent_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No feedback received.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Recent Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_10_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_10_div_4_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.feedback.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.feedback.length <= 0);
} }
class DashboardComponent {
    constructor(botService, seo, userService) {
        this.botService = botService;
        this.seo = seo;
        this.userService = userService;
        this.feedback = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.seo.setTags({
                titlePrefix: 'DBots',
                titleSuffix: 'Dashboard',
                description: 'Manage Discord bot listings, view logs and more with the DBots dashboard.',
                url: 'dashboard'
            });
            yield this.botService.init();
            const feedbacks = this.botService.userSavedBots
                .flatMap(sb => ({ botId: sb._id, feedback: sb.feedback }));
            this.feedback = feedbacks
                .flatMap(fs => fs.feedback
                .map(f => ({
                bot: this.botService.getBot(fs.botId),
                reviewer: this.userService.getUser(f.by),
                feedback: f
            })))
                .slice(0, 3);
            ;
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 11, vars: 2, consts: [[1, "container"], [1, "mt-5"], [1, "display-4"], [1, "lead"], [1, "text-muted"], ["id", "feedback", 4, "ngIf"], ["id", "feedback"], [4, "ngIf"], ["class", "media mb-2 p-2 rounded", 3, "class", 4, "ngFor", "ngForOf"], [1, "media", "mb-2", "p-2", "rounded"], [1, "mr-3", "round", 3, "src", "alt"], [1, "media-body"], [1, "mt-0"], [1, "d-flex", "justify-content-between"], [1, "text-light"], [1, "float-right"], [1, "float-right", 3, "user"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dashboard-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome to the DBots dashboard!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Here you can manage bot listings, view bot logs, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hey, ", ctx.userService.user.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedback);
    } }, directives: [_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["DashboardSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_7__["MemberUsernameComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["img[_ngcontent-%COMP%] {\r\n  max-width: 96px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJkYXNoYm9hcmQtb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiA5NnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard-overview.component.html',
                styleUrls: ['./dashboard-overview.component.css']
            }]
    }], function () { return [{ type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SEOService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "j5wd":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkTableModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jFRy":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/bots/add-bot/add-bot.component.ts ***!
  \*************************************************************/
/*! exports provided: AddBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBotComponent", function() { return AddBotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "HC5s");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tag.service */ "lBcp");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/theme.service */ "WPWp");
/* harmony import */ var _bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bot-sidebar/bot-sidebar.component */ "Z6y1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _bot_card_bot_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../bot-card/bot-card.component */ "qtPp");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _rocket_button_rocket_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../rocket-button/rocket-button.component */ "zg1N");
/* harmony import */ var _bot_preview_bot_preview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../bot-preview/bot-preview.component */ "yz/E");
/* harmony import */ var _pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../pipes/kebab-to-sentence-case.pipe */ "ULY8");

























const _c0 = ["confirmInput"];
function AddBotComponent_mat_form_field_14_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required, and should be a valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Snowflake ID.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " It also cannot be the ID of a non-bot user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bot ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddBotComponent_mat_form_field_14_mat_error_6_Template, 5, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.get("botId").invalid);
} }
function AddBotComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required, and should be a valid discord link.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required, and should be between 32 and 128 characters in length.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required, and should be at least 300 characters in length. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.value.length);
} }
function AddBotComponent_mat_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "kebabToTitleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tag_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, tag_r21.name));
} }
function AddBotComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No more than 8 tags.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Should be a valid Discord invite code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_mat_error_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Should be a valid https://github.com URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Should be a valid URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Some form values are invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddBotComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.apiError);
} }
function AddBotComponent_rocket_button_87_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rocket-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBotComponent_rocket_button_87_Template_rocket_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.submit(); })("animated", function AddBotComponent_rocket_button_87_Template_rocket_button_animated_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.navigateToBotListing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("precondition", ctx_r16.canSubmit);
} }
function AddBotComponent_rocket_button_88_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rocket-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBotComponent_rocket_button_88_Template_rocket_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.update(); })("animated", function AddBotComponent_rocket_button_88_Template_rocket_button_animated_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.navigateToBotListing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("precondition", ctx_r17.canSubmit);
} }
function AddBotComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Make sure you are in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DBots Discord server");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ", for your bot to be added. This is required for your bot to show on the list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r18.environment.discordInvite, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AddBotComponent_bot_preview_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bot-preview", 60);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx_r19.bot)("preview", true)("ownerUser", ctx_r19.userService.user);
} }
const _c1 = function () { return ["/docs/guidelines"]; };
class AddBotComponent {
    constructor(route, botService, router, seo, tagService, userService, themeService) {
        this.route = route;
        this.botService = botService;
        this.router = router;
        this.tagService = tagService;
        this.userService = userService;
        this.themeService = themeService;
        this.editing = false;
        this.preview = false;
        this.apiError = '';
        this.toIterable = src_app_utils__WEBPACK_IMPORTED_MODULE_3__["toIterable"];
        this.filteredTags = this.tagService.tags;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(300)]),
            botId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            githubURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/https:\/\/github\.com\//)]),
            invite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/https:\/\/discordapp.com|https:\/\/discord.com/)]),
            overview: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(32), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)]),
            ownerIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)]),
            prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            supportInvite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Za-z\d]{7,10}$/)]),
            websiteURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/http/)]),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)])
        });
        this.user = {
            id: '',
            displayAvatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
            presence: { status: 'ONLINE' },
            tag: 'New Bot#0001',
            username: 'New Bot'
        };
        this.bot = {
            listing: this.form.value,
            guildCount: 100,
            votes: Object(src_app_utils__WEBPACK_IMPORTED_MODULE_3__["toIterable"])(100)
        };
        seo.setTags({
            description: 'Add a bot to the bot list with this form.',
            titlePrefix: 'Add Bot',
            titleSuffix: 'Dashboard',
            url: 'dashboard/bots/new'
        });
    }
    get canSubmit() {
        return this.form.valid && this.confirmInput.checked;
    }
    get widgetURL() {
        var _a;
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url}/api/v1/bots/${((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) || '525935335918665760'}/widget`;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            yield this.botService.init();
            this.initNavbarToggle();
            this.themeService.setNavbarBackground('transparent');
        });
    }
    initNavbarToggle() {
        const navbar = document.querySelector('.navbar');
        const previewButton = document.querySelector('#previewButton');
        const stopPreviewButton = document.querySelector('#stopPreviewButton');
        if (previewButton)
            previewButton.onclick = () => navbar.style.backgroundColor = 'var(--background-secondary) !important';
        if (stopPreviewButton)
            stopPreviewButton.onclick = () => navbar.style.backgroundColor = 'transparent';
    }
    ngAfterViewInit() {
        setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.editing)
                this.initDraft();
            else {
                const botId = this.route.snapshot.paramMap.get('id');
                const savedBot = this.botService.getSavedBot(botId);
                this.form.setValue(savedBot.listing);
            }
            this.form.get('botId').setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{18}$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(`^(?!${this.userService.user.id}).*$`))
            ]);
        }));
    }
    initDraft() {
        var _a;
        for (const key in this.bot.listing)
            (_a = this.form.controls[key]) === null || _a === void 0 ? void 0 : _a.setValue(this.bot.listing[key]);
        const draft = localStorage.getItem('botListingDraft');
        if (draft)
            this.form.setValue(JSON.parse(draft));
        this.form.valueChanges
            .subscribe(() => this.updateDraft());
    }
    updateDraft() {
        localStorage.setItem('botListingDraft', JSON.stringify(this.form.value));
        this.bot.listing = this.form.value;
    }
    filterTags(filter) {
        this.filteredTags = this.tagService.tags
            .filter(tag => tag.name
            .toLowerCase()
            .includes(filter.toLowerCase()));
    }
    submit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.canSubmit)
                return this.form.setErrors({ invalid: true });
            try {
                this.apiError = '';
                yield this.botService.createBot(this.form.value);
            }
            catch (error) {
                this.apiError = (_a = error.error) === null || _a === void 0 ? void 0 : _a.message;
            }
        });
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.invalid)
                return this.form.setErrors({ invalid: true });
            yield this.botService.updateBot(this.form.value.botId, this.form.value);
            yield this.botService.refreshBots();
        });
    }
    navigateToBotListing() {
        if (this.apiError)
            return;
        this.router.navigate(['/bots/', this.form.value.botId || '/dashboard']);
    }
    // input events
    add(event, array) {
        const { value, input } = event;
        if ((value || '').trim())
            array.push(value.trim());
        if (input)
            input.value = '';
    }
    remove(item, array) {
        const index = array.indexOf(item);
        if (index >= 0)
            array.splice(index, 1);
    }
}
AddBotComponent.ɵfac = function AddBotComponent_Factory(t) { return new (t || AddBotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_6__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_10__["ThemeService"])); };
AddBotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddBotComponent, selectors: [["add-bot"]], viewQuery: function AddBotComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmInput = _t.first);
    } }, inputs: { editing: "editing", user: "user", bot: "bot" }, decls: 102, vars: 29, consts: [[3, "bot", "loaded", "user"], [1, "container", 3, "hidden"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "jumbotron"], [1, "display-4", 3, "textContent"], ["id", "previewButton", "type", "button", "color", "success", "mat-button", "", 1, "rounded-lg", "mt-3", 3, "click"], [1, "fas", "fa-binoculars"], [1, "row"], [1, "col-lg-6"], [3, "formGroup"], ["f", "ngForm"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], ["formControlName", "invite", "type", "text", "matInput", "", "required", ""], [4, "ngIf"], [1, "p-3"], ["href", "https://discordapi.com/permissions.html", "target", "_blank"], ["formControlName", "overview", "type", "text", "matInput", "", "required", ""], ["overviewInput", ""], ["align", "end"], ["formControlName", "prefix", "type", "text", "matInput", "", "required", ""], ["id", "editor", "appearance", "outline"], ["formControlName", "body", "placeholder", "Markdown and basic HTML are allowed.", "matInput", "", "required", ""], ["bodyInput", ""], ["multiple", "", "formControlName", "tags"], ["placeholer", "Search", "matInput", "", 1, "p-3", 3, "input"], [3, "value", 4, "ngFor", "ngForOf"], ["matPrefix", ""], ["formControlName", "supportInvite", "type", "text", "matInput", "", 1, "d-inline"], ["formControlName", "githubURL", "type", "text", "matInput", ""], ["formControlName", "websiteURL", "type", "text", "matInput", ""], [1, "text-center", "mb-3"], ["id", "confirm", 1, "mr-1"], ["confirmInput", ""], ["for", "confirm", 1, "m-0"], ["routerLinkActive", "active", 1, "d-inline", 3, "routerLink"], ["class", "alert alert-error border border-danger", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["id", "submit", 3, "precondition", "click", "animated", 4, "ngIf"], ["id", "update", 3, "precondition", "click", "animated", 4, "ngIf"], [1, "col-lg-6", "d-none", "d-sm-block", "border-left"], ["class", "alert alert-warning border-warning", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-5"], [1, "mt-5", 3, "user", "bot"], [3, "hidden"], ["id", "stopPreviewButton", "color", "danger", "mat-button", "", 3, "click"], [1, "fas", "fa-times"], [3, "bot", "preview", "ownerUser", 4, "ngIf"], ["formControlName", "botId", "type", "text", "matInput", ""], ["href", "https://discord.com/developers/docs/reference#snowflakes", "rel", "nofollow", "target", "_blank"], [1, "float-right"], [3, "value"], [1, "alert", "alert-error", "border", "border-danger"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [1, "alert", "alert-danger"], ["id", "submit", 3, "precondition", "click", "animated"], ["id", "update", 3, "precondition", "click", "animated"], [1, "alert", "alert-warning", "border-warning"], [1, "text-primary", 3, "href"], [3, "bot", "preview", "ownerUser"]], template: function AddBotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bot-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBotComponent_Template_button_click_7_listener() { return ctx.preview = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddBotComponent_mat_form_field_14_Template, 7, 1, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Bot Invite URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AddBotComponent_mat_error_21_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Bot Invite Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Bot Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "textarea", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-hint", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddBotComponent_mat_error_33_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Command Prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddBotComponent_mat_error_40_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "textarea", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-hint", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AddBotComponent_mat_error_48_Template, 4, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddBotComponent_Template_input_input_54_listener($event) { return ctx.filterTags($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddBotComponent_mat_option_55_Template, 3, 4, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Select up to 8 tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, AddBotComponent_mat_error_58_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Support Server Invite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "discord.gg/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, AddBotComponent_mat_error_65_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Github URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, AddBotComponent_mat_error_70_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Website URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, AddBotComponent_mat_error_75_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "mat-checkbox", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "I have read the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " bot guidelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, AddBotComponent_div_84_Template, 3, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AddBotComponent_div_85_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, AddBotComponent_rocket_button_87_Template, 2, 1, "rocket-button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, AddBotComponent_rocket_button_88_Template, 2, 1, "rocket-button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, AddBotComponent_div_90_Template, 5, 1, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Bot Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "This is what your bot card will look like to new users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "bot-card", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBotComponent_Template_button_click_99_listener() { return ctx.preview = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, AddBotComponent_bot_preview_101_Template, 1, 3, "bot-preview", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx.bot)("loaded", ctx.bot && ctx.user)("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx.editing ? "Edit " + (ctx.user == null ? null : ctx.user.username) : "Add Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("invite").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r3.value.length, "/128");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("overview").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("prefix").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.value.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("body").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredTags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("tags").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("supportInvite").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("githubURL").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("websiteURL").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.hasError("invalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.apiError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.user)("bot", ctx.bot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot);
    } }, directives: [_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["BotSidebarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatPrefix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _bot_card_bot_card_component__WEBPACK_IMPORTED_MODULE_18__["BotCardComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _rocket_button_rocket_button_component__WEBPACK_IMPORTED_MODULE_20__["RocketButtonComponent"], _bot_preview_bot_preview_component__WEBPACK_IMPORTED_MODULE_21__["BotPreviewComponent"]], pipes: [_pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_22__["KebabToTitleCasePipe"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\r\n\r\n#preview[_ngcontent-%COMP%] {\r\n    height: 75vw;\r\n}\r\n\r\n#previewButton[_ngcontent-%COMP%] {\r\n    max-height: 48px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ib3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYWRkLWJvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiNwcmV2aWV3IHtcclxuICAgIGhlaWdodDogNzV2dztcclxufVxyXG5cclxuI3ByZXZpZXdCdXR0b24ge1xyXG4gICAgbWF4LWhlaWdodDogNDhweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddBotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'add-bot',
                templateUrl: './add-bot.component.html',
                styleUrls: ['./add-bot.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_6__["BotsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"] }, { type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_10__["ThemeService"] }]; }, { confirmInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['confirmInput']
        }], editing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function NavbarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.user.username, " ");
} }
class NavbarComponent {
    constructor(userService, botsService) {
        this.userService = userService;
        this.botsService = botsService;
        this.randomBotId = '';
    }
    get discordInvite() { return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].discordInvite; }
    get githubURL() { return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].githubURL; }
    get user() { return this.userService.user; }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.botsService.init();
            this.randomBotId = (_a = this.botsService.getRandomBot()) === null || _a === void 0 ? void 0 : _a.id;
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 19, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/img/logo.png", "alt", "DBots Logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLink", "/bots", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "fas", "fa-robot", "text-muted", "mr-1"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLink"], ["aria-hidden", "true", 1, "fas", "fa-dice", "text-muted", "mr-1"], ["href", "https://dlist.xyz", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "fas", "fa-server"], [1, "nav", "navbar-nav", "ml-auto"], [4, "ngIf"], ["routerLink", "/login", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-item", "nav-link", "dropdown-toggle"], [3, "src"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["routerLink", "/dashboard", 1, "dropdown-item"], [1, "m-1"], ["routerLink", "/logout", 1, "dropdown-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Bots ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Random Bot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Servers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarComponent_div_17_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavbarComponent_div_18_Template, 11, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/bots/" + ctx.randomBotId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["[_ngcontent-%COMP%]:root {\r\n    --navbar-background: transparent;\r\n}\r\n\r\nnav.navbar[_ngcontent-%COMP%] {\r\n    background-color: var(--navbar-background) !important;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 96px;   \r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 32px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    background: var(--background-secondary);\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {    \r\n    color: white;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--background-primary);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0tbmF2YmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5uYXYubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA5NnB4OyAgIFxyXG59XHJcbi5kcm9wZG93biBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGEgeyAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"] }]; }, null); })();


/***/ }),

/***/ "lBcp":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TagService {
    constructor() {
        this.tags = [
            { name: 'anime', icon: 'far fa-circle', description: 'Find the best anime bots from our list.' },
            { name: 'chat', icon: 'fas fa-comments', description: 'Find the best chat bots from our list.' },
            { name: 'customizable', icon: 'fas fa-cogs', description: 'Find the best customizable bots from our list.' },
            { name: 'economy', icon: 'fas fa-coins', description: 'Find the best economy bots from our list.' },
            { name: 'games', icon: 'fas fa-gamepad', description: 'Find the best Games bots from our list.' },
            { name: 'fun', icon: 'fas fa-grin-tears', description: 'Find the most fun bots from our list.' },
            { name: 'leveling', icon: 'fas fa-trophy', description: 'Find the most advanced Leveling bots from our list.' },
            { name: 'logging', icon: 'fas fa-tree', description: 'Find the best logging bots from our list, with staff logs and more.' },
            { name: 'media', icon: 'fas fa-photo-video', description: 'Find the best media bots from our list.' },
            { name: 'meme', icon: 'fas fa-grin-tears', description: 'Find the best EPIC meme bots from our list, with bots like Dank Memer and many other classics.' },
            { name: 'mixer', icon: 'fab fa-mixer', description: 'Find the best Mixer bots from our list, and other live streaming bots.' },
            { name: 'moderation', icon: 'fas fa-gavel', description: 'Find the best moderation bots from our list, with bots like Mee6, Dyno bot and much more.' },
            { name: 'multipurpose', icon: 'fas fa-adjust', description: 'Find the best multipurpose bots from our list, with many all-in-one features.' },
            { name: 'music', icon: 'fas fa-music', description: 'Find the best music bots from our list, with bots like Groovy, Rythm, Octave, and many more epic bots.' },
            { name: 'reddit', icon: 'fab fa-reddit', description: 'Find the best Reddit bots from our list.' },
            { name: 'roleplay', icon: 'fas fa-theater-masks', description: 'Find the best Roleplay bots from our list.' },
            { name: 'roles', icon: 'fas fa-at', description: 'Find the best anime role management bots from our list.' },
            { name: 'soundboard', icon: 'fas fa-volume-up', description: 'Find the best soundboard bots from our list.' },
            { name: 'twitch', icon: 'fab fa-twitch', description: 'Find the best Twitch bots from our list, and more live streaming bots.' },
            { name: 'twitter', icon: 'fab fa-twitter', description: 'Find the best Twitter bots from our list.' },
            { name: 'utility', icon: 'fas fa-cogs', description: 'Find the best utility bots from our list.' },
            { name: 'verification', icon: 'fa fa-check-circle', description: 'Find the best verification bots from our list, and more bots that can help secure your servers.' },
            { name: 'web-dashboard', icon: 'fas fa-cogs', description: 'Find the best web dashboard bots from our list.' },
            { name: 'youtube', icon: 'fab fa-youtube', description: 'Find the best YouTube bots from our list, and other music and live streaming bots.' }
        ];
    }
    getTag(name) {
        return this.tags.find(t => t.name === name);
    }
}
TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(); };
TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AuthService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
    }
    get key() { return localStorage.getItem('key'); }
    validateKey() {
        const { isTokenExpired } = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        try {
            if (isTokenExpired(this.key))
                localStorage.removeItem('key');
        }
        catch (_a) { }
    }
    authenticate(code) {
        return this.http.get(`${this.endpoint}/auth?code=${code}`).toPromise();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "n1B2":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");






class LogoutComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem('key');
            this.userService.resetUser();
            this.router.navigate(['/']);
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 1, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner");
    } }, directives: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 24, vars: 0, consts: [[1, "stars"], [1, "central-body"], ["src", "assets\\img\\404.svg", "width", "300px", 1, "image-404"], ["routerLink", "/", 1, "btn-go-home"], [1, "objects"], ["src", "assets\\img\\rocket.svg", "width", "40px", 1, "object_rocket"], [1, "earth-moon"], ["src", "assets\\img\\earth.svg", "width", "100px", 1, "object_earth"], ["src", "assets\\img\\moon.svg", "width", "80px", 1, "object_moon"], ["src", "assets\\img\\mars.svg", 1, "object_mars"], [1, "box_astronaut"], ["src", "assets\\img\\icon.png", "width", "140px", 1, "object_astronaut"], [1, "glowing_stars"], [1, "star"], [1, "float-right", "text-muted"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RETURN HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SVGs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ": Saleh Riaz + photo3idea_studio from www.flaticon.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@-webkit-keyframes rocket-movement {\r\n    100% {\r\n      -webkit-transform: translate(1200px, -600px)\r\n    }\r\n  }\r\n  \r\n  @keyframes rocket-movement {\r\n    100% {\r\n      transform: translate(1200px, -600px)\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes spin-earth {\r\n    100% {\r\n      -webkit-transform: rotate(-360deg);\r\n      transition: transform 20s\r\n    }\r\n  }\r\n  \r\n  @keyframes spin-earth {\r\n    100% {\r\n      transform: rotate(-360deg);\r\n      transition: transform 20s\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes move-astronaut {\r\n    100% {\r\n      -webkit-transform: translate(-160px, -160px)\r\n    }\r\n  }\r\n  \r\n  @keyframes move-astronaut {\r\n    100% {\r\n      transform: translate(-160px, -160px)\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes rotate-astronaut {\r\n    100% {\r\n      -webkit-transform: rotate(-720deg)\r\n    }\r\n  }\r\n  \r\n  @keyframes rotate-astronaut {\r\n    100% {\r\n      transform: rotate(-720deg)\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes glow-star {\r\n    40% {\r\n      -webkit-opacity: .3\r\n    }\r\n    100%,\r\n    90% {\r\n      -webkit-opacity: 1;\r\n      -webkit-transform: scale(1.2)\r\n    }\r\n  }\r\n  \r\n  @keyframes glow-star {\r\n    40% {\r\n      -webkit-opacity: .3;\r\n      opacity: .3\r\n    }\r\n    100%,\r\n    90% {\r\n      -webkit-opacity: 1;\r\n      opacity: 1;\r\n      transform: scale(1.2);\r\n      border-radius: 999999px\r\n    }\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-weight: 300;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background: url(http://salehriaz.com/404Page/img/bg_purple.png);\r\n    background-repeat: repeat-x;\r\n    background-size: cover;\r\n    background-position: left top;\r\n    height: 100%;\r\n    overflow: hidden\r\n  }\r\n  \r\n  .btn-go-home[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 200;\r\n    margin: 15px auto;\r\n    width: 100px;\r\n    padding: 10px 15px;\r\n    border: 1px solid var(--primary);\r\n    border-radius: 5px;\r\n    font-weight: 400;\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    letter-spacing: 2px;\r\n    font-size: 11px;\r\n    transition: all .3s ease-in\r\n  }\r\n  \r\n  .btn-go-home[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--primary);\r\n    color: #fff;\r\n    transform: scale(1.05);\r\n    box-shadow: 0 20px 20px rgba(0, 0, 0, .1)\r\n  }\r\n  \r\n  .central-body[_ngcontent-%COMP%] {\r\n    padding: 17% 5% 10% 5%;\r\n    text-align: center\r\n  }\r\n  \r\n  .objects[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    z-index: 90;\r\n    pointer-events: none\r\n  }\r\n  \r\n  .object_rocket[_ngcontent-%COMP%] {\r\n    z-index: 95;\r\n    position: absolute;\r\n    transform: translateX(-50px);\r\n    top: 75%;\r\n    pointer-events: none;\r\n    -webkit-animation: rocket-movement 200s linear infinite both running;\r\n            animation: rocket-movement 200s linear infinite both running\r\n  }\r\n  \r\n  .object_earth[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 15%;\r\n    z-index: 90\r\n  }\r\n  \r\n  .object_moon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 12%;\r\n    left: 25%\r\n  }\r\n  \r\n  .object_mars[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 150px;\r\n    right: 20%;\r\n    top: 35%;\r\n    transform: rotate(-11deg)\r\n  }\r\n  \r\n  .object_astronaut[_ngcontent-%COMP%] {\r\n    -webkit-animation: rotate-astronaut 200s infinite linear both alternate;\r\n            animation: rotate-astronaut 200s infinite linear both alternate\r\n  }\r\n  \r\n  .box_astronaut[_ngcontent-%COMP%] {\r\n    z-index: 110!important;\r\n    position: absolute;\r\n    top: 60%;\r\n    right: 20%;\r\n    will-change: transform;\r\n    -webkit-animation: move-astronaut 50s infinite linear both alternate;\r\n            animation: move-astronaut 50s infinite linear both alternate\r\n  }\r\n  \r\n  .image-404[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 100;\r\n    pointer-events: none\r\n  }\r\n  \r\n  .stars[_ngcontent-%COMP%] {\r\n    background: url('overlay_stars.svg');\r\n    background-repeat: repeat;\r\n    background-size: contain;\r\n    background-position: left top\r\n  }\r\n  \r\n  .glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    background-color: #fff;\r\n    width: 3px;\r\n    height: 3px;\r\n    opacity: .3;\r\n    will-change: opacity\r\n  }\r\n  \r\n  .glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(1) {\r\n    top: 80%;\r\n    left: 25%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 1s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 1s\r\n  }\r\n  \r\n  .glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(2) {\r\n    top: 20%;\r\n    left: 40%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 3s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 3s\r\n  }\r\n  \r\n  .glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(3) {\r\n    top: 25%;\r\n    left: 25%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 5s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 5s\r\n  }\r\n  \r\n  .glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(4) {\r\n    top: 75%;\r\n    left: 80%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 7s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 7s\r\n  }\r\n  \r\n  .glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(5) {\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 9s;\r\n            animation: glow-star 2s infinite ease-in-out alternate 9s\r\n  }\r\n  \r\n  @media only screen and (max-width:600px) {\r\n    .box_astronaut[_ngcontent-%COMP%] {\r\n      top: 70%\r\n    }\r\n    .central-body[_ngcontent-%COMP%] {\r\n      padding-top: 25%\r\n    }\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    font-size: x-small\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0lBQ0U7TUFDRTtJQUNGO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFO0lBQ0Y7RUFDRjs7RUFTQTtJQUNFO01BQ0Usa0NBQWtDO01BQ2xDO0lBQ0Y7RUFDRjs7RUFFQTtJQUNFO01BRUUsMEJBQTBCO01BQzFCO0lBQ0Y7RUFDRjs7RUFRQTtJQUNFO01BQ0U7SUFDRjtFQUNGOztFQUVBO0lBQ0U7TUFFRTtJQUNGO0VBQ0Y7O0VBUUE7SUFDRTtNQUNFO0lBQ0Y7RUFDRjs7RUFFQTtJQUNFO01BRUU7SUFDRjtFQUNGOztFQWFBO0lBQ0U7TUFDRTtJQUNGO0lBQ0E7O01BRUUsa0JBQWtCO01BQ2xCO0lBQ0Y7RUFDRjs7RUFFQTtJQUNFO01BQ0UsbUJBQW1CO01BQ25CO0lBQ0Y7SUFDQTs7TUFFRSxrQkFBa0I7TUFDbEIsVUFBVTtNQUVWLHFCQUFxQjtNQUNyQjtJQUNGO0VBQ0Y7O0VBRUE7O0lBRUUsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEI7RUFDRjs7RUFFQTtJQUNFLCtEQUErRDtJQUMvRCwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7RUFDRjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUtmO0VBQ0Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLHNCQUFzQjtJQUN0QjtFQUNGOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCO0VBQ0Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1g7RUFDRjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsb0VBQTJEO1lBQTNEO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVDtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsUUFBUTtJQUNSO0VBQ0Y7O0VBRUE7SUFDRSx1RUFBOEQ7WUFBOUQ7RUFDRjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0VBQTJEO1lBQTNEO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaO0VBQ0Y7O0VBRUE7SUFDRSxvQ0FBbUQ7SUFDbkQseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1g7RUFDRjs7RUFFQTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUVBQXdEO1lBQXhEO0VBQ0Y7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGlFQUF3RDtZQUF4RDtFQUNGOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxpRUFBd0Q7WUFBeEQ7RUFDRjs7RUFFQTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUVBQXdEO1lBQXhEO0VBQ0Y7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGlFQUF3RDtZQUF4RDtFQUNGOztFQUVBO0lBQ0U7TUFDRTtJQUNGO0lBQ0E7TUFDRTtJQUNGO0VBQ0Y7O0VBRUE7SUFDRTtFQUNGIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQC1tb3ota2V5ZnJhbWVzIHJvY2tldC1tb3ZlbWVudCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsIC02MDBweClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJvY2tldC1tb3ZlbWVudCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsIC02MDBweClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByb2NrZXQtbW92ZW1lbnQge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMDBweCwgLTYwMHB4KVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALW1vei1rZXlmcmFtZXMgc3Bpbi1lYXJ0aCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwc1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbi1lYXJ0aCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwc1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4tZWFydGgge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjBzXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBtb3ZlLWFzdHJvbmF1dCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC0xNjBweClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtYXN0cm9uYXV0IHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNjBweCwgLTE2MHB4KVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIG1vdmUtYXN0cm9uYXV0IHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNjBweCwgLTE2MHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE2MHB4LCAtMTYwcHgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyByb3RhdGUtYXN0cm9uYXV0IHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC03MjBkZWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtYXN0cm9uYXV0IHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC03MjBkZWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRlLWFzdHJvbmF1dCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNzIwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTcyMGRlZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC1tb3ota2V5ZnJhbWVzIGdsb3ctc3RhciB7XHJcbiAgICA0MCUge1xyXG4gICAgICAtbW96LW9wYWNpdHk6IC4zXHJcbiAgICB9XHJcbiAgICAxMDAlLFxyXG4gICAgOTAlIHtcclxuICAgICAgLW1vei1vcGFjaXR5OiAxO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdy1zdGFyIHtcclxuICAgIDQwJSB7XHJcbiAgICAgIC13ZWJraXQtb3BhY2l0eTogLjNcclxuICAgIH1cclxuICAgIDEwMCUsXHJcbiAgICA5MCUge1xyXG4gICAgICAtd2Via2l0LW9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZ2xvdy1zdGFyIHtcclxuICAgIDQwJSB7XHJcbiAgICAgIC13ZWJraXQtb3BhY2l0eTogLjM7XHJcbiAgICAgIG9wYWNpdHk6IC4zXHJcbiAgICB9XHJcbiAgICAxMDAlLFxyXG4gICAgOTAlIHtcclxuICAgICAgLXdlYmtpdC1vcGFjaXR5OiAxO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA5OTk5OTlweFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBib2R5LFxyXG4gIGh0bWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZVxyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vc2FsZWhyaWF6LmNvbS80MDRQYWdlL2ltZy9iZ19wdXJwbGUucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1nby1ob21lIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDIwMDtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pblxyXG4gIH1cclxuICBcclxuICAuYnRuLWdvLWhvbWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIC4xKVxyXG4gIH1cclxuICBcclxuICAuY2VudHJhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDE3JSA1JSAxMCUgNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICB9XHJcbiAgXHJcbiAgLm9iamVjdHMgaW1nIHtcclxuICAgIHotaW5kZXg6IDkwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcclxuICB9XHJcbiAgXHJcbiAgLm9iamVjdF9yb2NrZXQge1xyXG4gICAgei1pbmRleDogOTU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgdG9wOiA3NSU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogcm9ja2V0LW1vdmVtZW50IDIwMHMgbGluZWFyIGluZmluaXRlIGJvdGggcnVubmluZ1xyXG4gIH1cclxuICBcclxuICAub2JqZWN0X2VhcnRoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgei1pbmRleDogOTBcclxuICB9XHJcbiAgXHJcbiAgLm9iamVjdF9tb29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTIlO1xyXG4gICAgbGVmdDogMjUlXHJcbiAgfVxyXG4gIFxyXG4gIC5vYmplY3RfbWFycyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTFkZWcpXHJcbiAgfVxyXG4gIFxyXG4gIC5vYmplY3RfYXN0cm9uYXV0IHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlLWFzdHJvbmF1dCAyMDBzIGluZmluaXRlIGxpbmVhciBib3RoIGFsdGVybmF0ZVxyXG4gIH1cclxuICBcclxuICAuYm94X2FzdHJvbmF1dCB7XHJcbiAgICB6LWluZGV4OiAxMTAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGFuaW1hdGlvbjogbW92ZS1hc3Ryb25hdXQgNTBzIGluZmluaXRlIGxpbmVhciBib3RoIGFsdGVybmF0ZVxyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtNDA0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbiAgfVxyXG4gIFxyXG4gIC5zdGFycyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9vdmVybGF5X3N0YXJzLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3BcclxuICB9XHJcbiAgXHJcbiAgLmdsb3dpbmdfc3RhcnMgLnN0YXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5XHJcbiAgfVxyXG4gIFxyXG4gIC5nbG93aW5nX3N0YXJzIC5zdGFyOm50aC1jaGlsZCgxKSB7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIGFuaW1hdGlvbjogZ2xvdy1zdGFyIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSAxc1xyXG4gIH1cclxuICBcclxuICAuZ2xvd2luZ19zdGFycyAuc3RhcjpudGgtY2hpbGQoMikge1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgM3NcclxuICB9XHJcbiAgXHJcbiAgLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDMpIHtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93LXN0YXIgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIDVzXHJcbiAgfVxyXG4gIFxyXG4gIC5nbG93aW5nX3N0YXJzIC5zdGFyOm50aC1jaGlsZCg0KSB7XHJcbiAgICB0b3A6IDc1JTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIGFuaW1hdGlvbjogZ2xvdy1zdGFyIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSA3c1xyXG4gIH1cclxuICBcclxuICAuZ2xvd2luZ19zdGFycyAuc3RhcjpudGgtY2hpbGQoNSkge1xyXG4gICAgdG9wOiA5MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgOXNcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAuYm94X2FzdHJvbmF1dCB7XHJcbiAgICAgIHRvcDogNzAlXHJcbiAgICB9XHJcbiAgICAuY2VudHJhbC1ib2R5IHtcclxuICAgICAgcGFkZGluZy10b3A6IDI1JVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "o6KS":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../navbar/navbar.component */ "kWWo");










const _c0 = ["drawer"];
function SidebarComponent_div_8_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const bot_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", bot_r2.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", bot_r2.username);
} }
const _c1 = function (a0) { return [a0]; };
function SidebarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_div_8_img_1_Template, 1, 2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bot_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, "/dashboard/bots/" + bot_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bot_r2);
} }
const _c2 = [[["", 8, "side-nav"]], [["", "id", "content"]]];
const _c3 = [".side-nav", "#content"];
class SidebarComponent {
    constructor(botService, userService) {
        this.botService = botService;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.botService.init();
        });
    }
    toggle() {
        const icon = document.querySelector('#nav-icon1');
        icon.classList.toggle('open');
        this.drawer.toggle();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, ngContentSelectors: _c3, decls: 24, vars: 3, consts: [["fullscreen", ""], ["mode", "side", "opened", ""], ["drawer", ""], [1, "guilds", "px-2"], [1, "user"], ["routerLink", "/dashboard", 1, "guild-icon"], [3, "src", "alt"], [1, "guild-seperator"], ["class", "guild-icon", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/dashboard/bots/new", "matTooltip", "Add a Bot", 1, "guild-icon", "invite", "bg-transparent"], [1, "add-guild", "pt-1", "d-flex", "justify-content-center", "flex-column"], [1, "options"], [1, "float-right", "d-sm-none", "d-block", "close", 3, "click"], [1, "fas", "fa-times"], [1, "toggle", "d-block", "d-md-none"], ["id", "nav-icon1", 1, "open", 3, "click"], [1, "guild-icon", 3, "routerLink"], [3, "src", "alt", 4, "ngIf"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SidebarComponent_div_8_Template, 2, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_span_click_14_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_19_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](23, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.userService.user == null ? null : ctx.userService.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.userService.user == null ? null : ctx.userService.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.botService.userBots);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".guild-icon[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n\r\n    margin: 5px;\r\n    width: 52px;\r\n    height: 52px;\r\n\r\n    background-color: var(--background-primary);\r\n    transition: all .35s;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n    border-radius: 25%;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n\r\n    font-size: 18px;\r\n\r\n    width: 52px;\r\n    height: 48px;\r\n    padding-top: 14px;\r\n\r\n    transition: all .35s;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 52px;\r\n    border-radius: 50%;\r\n\r\n    transition: all .35s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border: none;\r\n    color: var(--font);\r\n\r\n    font-size: 32px;\r\n}\r\n\r\n.guilds[_ngcontent-%COMP%] {\r\n    background-color: var(--background-tertiary);\r\n    float: left;\r\n    height: inherit;\r\n    padding-top: 12px;\r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n    background-color: var(--background-secondary) !important;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r\n\r\n    width: 275px;\r\n    height: inherit;\r\n\r\n    margin-left: 75px;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n\r\n    margin: 50px 0 0 15px;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 992px) {\r\n    .toggle[_ngcontent-%COMP%] {\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-color: var(--background-tertiary);\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   .add-guild[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n\r\n    color: var(--secondary);\r\n}\r\n\r\n.invite[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--tertiary);\r\n}\r\n\r\n.guild-seperator[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    width: 32px;\r\n    border-radius: 1px;\r\n\r\n    border-color: var(--background-secondary);\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 15px;\r\n\r\n    font-size: 48px;\r\n\r\n    color: var(--primary);\r\n    text-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7SUFFbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZOztJQUVaLDJDQUEyQztJQUMzQyxvQkFBb0I7O0lBRXBCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGVBQWU7O0lBRWYsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7O0lBRWxCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0RBQXdEO0lBQ3hELDJFQUEyRTs7SUFFM0UsWUFBWTtJQUNaLGVBQWU7O0lBRWYsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1COztJQUVuQixxQkFBcUI7QUFDekI7O0FBQ0EsMkNBQTJDOztBQUMzQztJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksZUFBZTs7SUFFZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjs7SUFFbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXOztJQUVYLGVBQWU7O0lBRWYscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ3VpbGQtaWNvbiBpbWc6aG92ZXIsIC5ndWlsZC1pY29uOmhvdmVyLCAuZ3VpbGQtaWNvbiBzcGFuOmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn1cclxuXHJcbi5ndWlsZC1pY29uIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDUycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250KTtcclxuXHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5ndWlsZHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHJcbiAgICB3aWR0aDogMjc1cHg7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHJcbiAgICBtYXJnaW46IDUwcHggMCAwIDE1cHg7XHJcbn1cclxuLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAudG9nZ2xlIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gLmFkZC1ndWlsZCB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5pbnZpdGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xyXG59XHJcblxyXG4uZ3VpbGQtc2VwZXJhdG9yIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcblxyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMTVweDtcclxuXHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['drawer']
        }] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UserService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + '/user';
    }
    get user() { return this._user; }
    get savedUser() { return this._savedUser; }
    get isAdmin() {
        var _a;
        return ((_a = this.savedUser) === null || _a === void 0 ? void 0 : _a.role) === 'admin';
    }
    get key() {
        return localStorage.getItem('key');
    }
    get headers() {
        return { headers: { Authorization: this.key } };
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.user || !this.savedUser)
                yield this.updateUser();
        });
    }
    updateUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.key)
                return;
            const { user, saved } = yield this.http.get(`${this.endpoint}`, this.headers).toPromise();
            this._user = user;
            this._savedUser = saved;
        });
    }
    getUser(id) {
        return this.http.get(`${this.endpoint}/${id}`).toPromise();
    }
    resetUser() {
        this._user = null;
        this._savedUser = null;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qtPp":
/*!************************************************!*\
  !*** ./src/app/bot-card/bot-card.component.ts ***!
  \************************************************/
/*! exports provided: BotCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCardComponent", function() { return BotCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "HC5s");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function BotCardComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r1.bot.stats.guildCount), " ");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0, a1, a2) { return { "status-online": a0, "status-dnd": a1, "status-idle": a2 }; };
const _c2 = function (a1) { return ["/bots/", a1]; };
function BotCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BotCardComponent_div_0_span_6_Template, 4, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "VIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, "/bots/" + ctx_r0.user.id))("src", ctx_r0.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.user.username + " | " + ctx_r0.cleanTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](17, _c1, (ctx_r0.user.presence == null ? null : ctx_r0.user.presence.status) === "online", (ctx_r0.user.presence == null ? null : ctx_r0.user.presence.status) === "dnd", (ctx_r0.user.presence == null ? null : ctx_r0.user.presence.status) === "idle"))("matTooltip", ctx_r0.user.presence == null ? null : ctx_r0.user.presence.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.bot.stats == null ? null : ctx_r0.bot.stats.guildCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx_r0.bot.votes.length), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c2, ctx_r0.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.bot.listing.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cleanTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, "/bots/" + ctx_r0.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.bot.listing.invite, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class BotCardComponent {
    constructor(analytics, botsService) {
        this.analytics = analytics;
        this.botsService = botsService;
        this.user = {
            id: '',
            displayAvatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
            presence: { status: 'online' },
            username: 'Username'
        };
        this.bot = {
            listing: {
                invite: '',
                overview: 'A good bot I guess...',
                tags: ['Economy', 'Moderation']
            },
            stats: {
                guildCount: 10,
            },
            votes: ['218459216145285121']
        };
    }
    get cleanTags() {
        var _a;
        return (_a = this.bot.listing.tags) === null || _a === void 0 ? void 0 : _a.map(t => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["kebabToTitleCase"])(t)).slice(0, 3).join(', ');
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.botsService.init();
            this.analytics.botImpression({ botId: this.user.id });
        });
    }
}
BotCardComponent.ɵfac = function BotCardComponent_Factory(t) { return new (t || BotCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"])); };
BotCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotCardComponent, selectors: [["bot-card"]], inputs: { user: "user", bot: "bot" }, decls: 1, vars: 1, consts: [["class", "fade-in text-center rounded-lg card shadow text-white", 4, "ngIf"], [1, "fade-in", "text-center", "rounded-lg", "card", "shadow", "text-white"], [1, "cursor-pointer", "d-flex", "justify-content-center"], [1, "shadow", "rounded-lg", "card-img-top", 3, "routerLink", "src", "alt"], [1, "rounded-lg", "status", 3, "ngClass", "matTooltip"], [1, "card-body"], [1, "stats", "d-flex", "justify-content-center"], ["class", "badge badge-secondary cursor-pointer mr-1", "matTooltip", "Servers", 4, "ngIf"], ["matTooltip", "Votes", 1, "badge", "badge-secondary", "cursor-pointer", "ml-1"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-up"], [1, "card-text", "d-flex", "flex-column", "justify-content-center"], [1, "cursor-pointer", "card-title", "mb-1", "mt-2", 3, "routerLink"], [1, "color-muted", "mb-1"], [1, "color-secondary"], [1, "d-flex", "justify-content-around"], ["mat-button", "", 1, "rounded-lg", 3, "routerLink"], ["target", "_blank", 3, "href"], ["mat-button", "", 1, "rounded-lg"], ["matTooltip", "Servers", 1, "badge", "badge-secondary", "cursor-pointer", "mr-1"], [1, "fas", "fa-server"]], template: function BotCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BotCardComponent_div_0_Template, 24, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot && ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["img[_ngcontent-%COMP%] {\r\n    margin-top: -15px;\r\n    width: 172px;\r\n    background-color: var(--background-secondary);\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin: 0;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    height: 200px;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n\r\n    top: 128px;\r\n    right: 12.5%;\r\n\r\n    width: 42px;\r\n    height: 42px;\r\n\r\n    background-color: #2f2e2e;\r\n    border: 5px solid var(--background-secondary);\r\n}\r\n\r\n.status-online[_ngcontent-%COMP%] {\r\n    background-color: #43b581;\r\n}\r\n\r\n.status-dnd[_ngcontent-%COMP%] {\r\n    background-color: #ff0000;\r\n}\r\n\r\n.status-idle[_ngcontent-%COMP%] {\r\n    background-color: #faa61a;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 256px;\r\n    transition: transform .3s ease-in-out;\r\n    cursor: pointer;\r\n    background-color: var(--background-secondary);\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n\r\n\r\n.fade-in[_ngcontent-%COMP%] {\r\n    -webkit-animation: fadein 1s;    \r\n        animation: fadein 1s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsVUFBVTtJQUNWLFlBQVk7O0lBRVosV0FBVztJQUNYLFlBQVk7O0lBRVoseUJBQXlCO0lBQ3pCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZiw2Q0FBNkM7QUFDakQ7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLDRCQUE0QixFQUFFLG9DQUFvQyxFQUN2QyxpQkFBaUIsRUFDbEIsc0JBQXNCLEVBQ3ZCLGlCQUFpQjtRQUN0QyxvQkFBb0I7QUFDNUI7O0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFIQTtJQUNJLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sVUFBVSxFQUFFO0FBQ3ZCIiwiZmlsZSI6ImJvdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICB3aWR0aDogMTcycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5jYXJkLXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIHRvcDogMTI4cHg7XHJcbiAgICByaWdodDogMTIuNSU7XHJcblxyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmUyZTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnN0YXR1cy1vbmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzYjU4MTtcclxufVxyXG4uc3RhdHVzLWRuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG59XHJcbi5zdGF0dXMtaWRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhNjFhO1xyXG59XHJcblxyXG4uc3RhdHMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAyNTZweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLyogYW5pbWF0aW9ucyAqL1xyXG4uZmFkZS1pbiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBGaXJlZm94IDwgMTYgKi9cclxuICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAxczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBPcGVyYSA8IDEyLjEgKi9cclxuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAxcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'bot-card',
                templateUrl: './bot-card.component.html',
                styleUrls: ['./bot-card.component.css']
            }]
    }], function () { return [{ type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_4__["BotsService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "tHbC":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/bot-widget/bot-widget.component.ts ***!
  \**************************************************************/
/*! exports provided: BotWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotWidgetComponent", function() { return BotWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bots.service */ "7oRx");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bots/bot-sidebar/bot-sidebar.component */ "Z6y1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function BotWidgetComponent_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.user == null ? null : ctx_r1.user.username, " Widget");
} }
class BotWidgetComponent {
    constructor(route, service, seo) {
        this.route = route;
        this.service = service;
        this.seo = seo;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('large')
        });
    }
    get widgetURL() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/api/v1/bots/${this.id}/widget?size=${this.form.value.size}`;
    }
    get id() {
        return this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            this.bot = this.service.getSavedBot(this.id);
            this.user = this.service.getBot(this.id);
            this.seo.setTags({
                description: '',
                titlePrefix: this.user.tag,
                titleSuffix: 'Widget',
                url: `dashboard/bots/${this.id}`
            });
        });
    }
}
BotWidgetComponent.ɵfac = function BotWidgetComponent_Factory(t) { return new (t || BotWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SEOService"])); };
BotWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotWidgetComponent, selectors: [["app-bot-widget"]], decls: 23, vars: 10, consts: [[3, "bot", "loaded", "user"], ["sidebar", ""], [1, "container"], ["class", "text-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [3, "href"], [3, "src", "alt"], [3, "formGroup"], ["f", "ngForm"], ["appearance", "outline", 1, "ml-5", "mt-2"], ["formControlName", "size"], ["value", "small"], ["value", "medium"], ["value", "large", "selected", ""], [1, "text-light", "rounded", "p-2"], [1, "text-center"], [1, "display-4"], [1, "my-2"]], template: function BotWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bot-sidebar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BotWidgetComponent_header_3_Template, 4, 1, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pre", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bot", ctx.bot)("loaded", ctx.bot && ctx.user)("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/bots/" + ctx.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.widgetURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.user == null ? null : ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("<a href=\"https://dbots.co/bots/", ctx.user.id, "\">\n  <img src=\"", ctx.widgetURL, "\" alt=\"View on DBots\">\n</a>");
    } }, directives: [_bots_bot_sidebar_bot_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["BotSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["pre[_ngcontent-%COMP%] {\r\n  background-color: var(--background-tertiary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUE0QztBQUM5QyIsImZpbGUiOiJib3Qtd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bot-widget',
                templateUrl: './bot-widget.component.html',
                styleUrls: ['./bot-widget.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_bots_service__WEBPACK_IMPORTED_MODULE_5__["BotsService"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SEOService"] }]; }, null); })();


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class SearchComponent {
    constructor() {
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.field').on('blur', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').removeClass('is-focus is-type');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.field').on('keydown', function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').addClass('is-type');
            if ((event.which === 8) && jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val() === '') {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').removeClass('is-type');
            }
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["search"]], outputs: { blur: "blur", focus: "focus", search: "search" }, decls: 8, vars: 0, consts: [[1, "field-container", "mb-3"], ["type", "text", "placeholder", "Search...", 1, "field", 3, "focus", "blur", "keyup.enter"], ["searchInput", ""], [1, "icons-container"], [1, "icon-search", 3, "click"], [1, "icon-close", 3, "click"], [1, "x-up"], [1, "x-down"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SearchComponent_Template_input_focus_1_listener() { return ctx.focus.emit(); })("blur", function SearchComponent_Template_input_blur_1_listener() { return ctx.blur.emit(); })("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.search.emit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.search.emit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_5_listener() { return ctx.search.emit(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@-webkit-keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes color-1 {\r\n  0% {\r\n    background-color: #EB73B9;\r\n  }\r\n  100% {\r\n    background-color: #17EAD9;\r\n  }\r\n}\r\n@keyframes color-1 {\r\n  0% {\r\n    background-color: #EB73B9;\r\n  }\r\n  100% {\r\n    background-color: #17EAD9;\r\n  }\r\n}\r\n[_ngcontent-%COMP%]::-moz-selection {\r\n  background: #6078EA;\r\n  color: white;\r\n  text-shadow: none;\r\n}\r\n[_ngcontent-%COMP%]::selection {\r\n  background: #6078EA;\r\n  color: white;\r\n  text-shadow: none;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-selection {\r\n  background: #6078EA;\r\n  color: white;\r\n  text-shadow: none;\r\n}\r\n.field-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n  width: 330px;\r\n  height: 40px;\r\n}\r\n.icons-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: -40px;\r\n  width: 35px;\r\n  height: 35px;\r\n  overflow: hidden;\r\n}\r\n.icon-close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  width: 75%;\r\n  height: 75%;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  transform: translateX(-200%);\r\n  border-radius: 50%;\r\n  transition: opacity 0.25s ease, transform 0.43s cubic-bezier(0.694, 0.048, 0.335, 1);\r\n}\r\n.icon-close[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  border: 2px solid transparent;\r\n  border-top-color: #6078EA;\r\n  border-left-color: #6078EA;\r\n  border-bottom-color: #6078EA;\r\n  transition: opacity 0.2s ease;\r\n}\r\n.icon-close[_ngcontent-%COMP%]   .x-up[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 50%;\r\n}\r\n.icon-close[_ngcontent-%COMP%]   .x-up[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 2px;\r\n  left: 3px;\r\n  width: 50%;\r\n  height: 2px;\r\n  background-color: #6078EA;\r\n  transform: rotate(45deg);\r\n}\r\n.icon-close[_ngcontent-%COMP%]   .x-up[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 2px;\r\n  right: 0px;\r\n  width: 50%;\r\n  height: 2px;\r\n  background-color: #6078EA;\r\n  transform: rotate(-45deg);\r\n}\r\n.icon-close[_ngcontent-%COMP%]   .x-down[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 50%;\r\n}\r\n.icon-close[_ngcontent-%COMP%]   .x-down[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 4px;\r\n  width: 50%;\r\n  height: 2px;\r\n  background-color: #6078EA;\r\n  transform: rotate(-45deg);\r\n}\r\n.icon-close[_ngcontent-%COMP%]   .x-down[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 1px;\r\n  width: 50%;\r\n  height: 2px;\r\n  background-color: #6078EA;\r\n  transform: rotate(45deg);\r\n}\r\n.is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]:before {\r\n  opacity: 1;\r\n  -webkit-animation: spin 0.85s infinite;\r\n          animation: spin 0.85s infinite;\r\n}\r\n.is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   .x-up[_ngcontent-%COMP%]:before, .is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   .x-up[_ngcontent-%COMP%]:after {\r\n  -webkit-animation: color-1 0.85s infinite;\r\n          animation: color-1 0.85s infinite;\r\n}\r\n.is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   .x-up[_ngcontent-%COMP%]:after {\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s;\r\n}\r\n.is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   .x-down[_ngcontent-%COMP%]:before, .is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   .x-down[_ngcontent-%COMP%]:after {\r\n  -webkit-animation: color-1 0.85s infinite;\r\n          animation: color-1 0.85s infinite;\r\n}\r\n.is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   .x-down[_ngcontent-%COMP%]:before {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s;\r\n}\r\n.is-type[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   .x-down[_ngcontent-%COMP%]:after {\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s;\r\n}\r\n.icon-search[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 5px;\r\n  left: 8px;\r\n  width: 50%;\r\n  height: 50%;\r\n  opacity: 1;\r\n  border-radius: 50%;\r\n  border: 3px solid #c7d0f8;\r\n  transition: opacity 0.25s ease, transform 0.43s cubic-bezier(0.694, 0.048, 0.335, 1);\r\n}\r\n.icon-search[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -9px;\r\n  right: -2px;\r\n  width: 4px;\r\n  border-radius: 3px;\r\n  transform: rotate(-45deg);\r\n  height: 10px;\r\n  background-color: #c7d0f8;\r\n}\r\n.field[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px 20px;\r\n  background: white;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);\r\n  transition: all 0.4s ease;\r\n}\r\n.field[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);\r\n}\r\n.field[_ngcontent-%COMP%]:focus    + .icons-container[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n.field[_ngcontent-%COMP%]:focus    + .icons-container[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transform: translateX(200%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBUEE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQVBBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUpBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLG9GQUFvRjtBQUN0RjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDVixzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9GQUFvRjtBQUN0RjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5Qyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgY29sb3ItMSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCNzNCOTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdFQUQ5O1xyXG4gIH1cclxufVxyXG46OnNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogIzYwNzhFQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICM2MDc4RUE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZmllbGQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5pY29ucy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogLTQwcHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pY29uLWNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLCB0cmFuc2Zvcm0gMC40M3MgY3ViaWMtYmV6aWVyKDAuNjk0LCAwLjA0OCwgMC4zMzUsIDEpO1xyXG59XHJcbi5pY29uLWNsb3NlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM2MDc4RUE7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM2MDc4RUE7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNzhFQTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcclxufVxyXG4uaWNvbi1jbG9zZSAueC11cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbi5pY29uLWNsb3NlIC54LXVwOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAycHg7XHJcbiAgbGVmdDogM3B4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzhFQTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLmljb24tY2xvc2UgLngtdXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3OEVBO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuLmljb24tY2xvc2UgLngtZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbi5pY29uLWNsb3NlIC54LWRvd246YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3OEVBO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuLmljb24tY2xvc2UgLngtZG93bjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDc4RUE7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5pcy10eXBlIC5pY29uLWNsb3NlOmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBhbmltYXRpb246IHNwaW4gMC44NXMgaW5maW5pdGU7XHJcbn1cclxuLmlzLXR5cGUgLmljb24tY2xvc2UgLngtdXA6YmVmb3JlLCAuaXMtdHlwZSAuaWNvbi1jbG9zZSAueC11cDphZnRlciB7XHJcbiAgYW5pbWF0aW9uOiBjb2xvci0xIDAuODVzIGluZmluaXRlO1xyXG59XHJcbi5pcy10eXBlIC5pY29uLWNsb3NlIC54LXVwOmFmdGVyIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLmlzLXR5cGUgLmljb24tY2xvc2UgLngtZG93bjpiZWZvcmUsIC5pcy10eXBlIC5pY29uLWNsb3NlIC54LWRvd246YWZ0ZXIge1xyXG4gIGFuaW1hdGlvbjogY29sb3ItMSAwLjg1cyBpbmZpbml0ZTtcclxufVxyXG4uaXMtdHlwZSAuaWNvbi1jbG9zZSAueC1kb3duOmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcbi5pcy10eXBlIC5pY29uLWNsb3NlIC54LWRvd246YWZ0ZXIge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLmljb24tc2VhcmNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogOHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2M3ZDBmODtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UsIHRyYW5zZm9ybSAwLjQzcyBjdWJpYy1iZXppZXIoMC42OTQsIDAuMDQ4LCAwLjMzNSwgMSk7XHJcbn1cclxuLmljb24tc2VhcmNoOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC05cHg7XHJcbiAgcmlnaHQ6IC0ycHg7XHJcbiAgd2lkdGg6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3ZDBmODtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBib3JkZXI6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoNzUsIDcyLCA3MiwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5maWVsZDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiAwcHggOXB4IDIwcHggcmdiYSg3NSwgNzIsIDcyLCAwLjMpO1xyXG59XHJcbi5maWVsZDpmb2N1cyArIC5pY29ucy1jb250YWluZXIgLmljb24tY2xvc2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcbi5maWVsZDpmb2N1cyArIC5pY29ucy1jb250YWluZXIgLmljb24tc2VhcmNoIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], null, { blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vGr5":
/*!***********************************************!*\
  !*** ./src/app/pipes/duration-string.pipe.ts ***!
  \***********************************************/
/*! exports provided: DurationStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationStringPipe", function() { return DurationStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DurationStringPipe {
    transform(value) {
        const seconds = Number(value);
        return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
    }
}
DurationStringPipe.ɵfac = function DurationStringPipe_Factory(t) { return new (t || DurationStringPipe)(); };
DurationStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "durationString", type: DurationStringPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DurationStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'durationString'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard-overview/dashboard-overview.component */ "j5pO");
/* harmony import */ var _guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/dashboard-auth.guard */ "HfTq");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./docs/docs.component */ "86Op");
/* harmony import */ var _dashboard_bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/bots/add-bot/add-bot.component */ "jFRy");
/* harmony import */ var _bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bots/search-wrapper/search-wrapper.component */ "YLar");
/* harmony import */ var _guards_bot_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/bot-auth.guard */ "NDDr");
/* harmony import */ var _bot_page_bot_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bot-page/bot-page.component */ "ZqsJ");
/* harmony import */ var _dashboard_bots_bot_bot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/bots/bot/bot.component */ "9gDg");
/* harmony import */ var _bot_vote_bot_vote_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bot-vote/bot-vote.component */ "dalz");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");
/* harmony import */ var _dashboard_bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/bots/edit-bot/edit-bot.component */ "9bCR");
/* harmony import */ var _dashboard_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/log-module/log-module.component */ "0S1r");
/* harmony import */ var _dashboard_api_api_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/api/api.component */ "2uGl");
/* harmony import */ var _dashboard_bot_widget_bot_widget_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/bot-widget/bot-widget.component */ "tHbC");
/* harmony import */ var _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/user-profile/user-profile.component */ "Jvlx");
/* harmony import */ var _dashboard_bots_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/bots/analytics/analytics.component */ "ENxU");
/* harmony import */ var _packs_pack_pack_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./packs/pack/pack.component */ "4/A2");
/* harmony import */ var _packs_pack_vote_pack_vote_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./packs/pack-vote/pack-vote.component */ "ha6e");


























const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"] },
    { path: 'docs', component: _docs_docs_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponent"] },
    { path: 'docs/:page', component: _docs_docs_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"] },
    { path: 'search', component: _bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["SearchWrapperComponent"] },
    { path: 'tags/:tag', component: _bots_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["SearchWrapperComponent"] },
    { path: 'tags', redirectTo: '/' },
    { path: 'packs/:id', component: _packs_pack_pack_component__WEBPACK_IMPORTED_MODULE_22__["PackComponent"] },
    { path: 'packs/:id/vote', component: _packs_pack_vote_pack_vote_component__WEBPACK_IMPORTED_MODULE_23__["PackVoteComponent"] },
    { path: 'packs', redirectTo: '/' },
    { path: 'bots/:id', component: _bot_page_bot_page_component__WEBPACK_IMPORTED_MODULE_12__["BotPageComponent"] },
    { path: 'bots/:id/vote', component: _bot_vote_bot_vote_component__WEBPACK_IMPORTED_MODULE_14__["BotVoteComponent"] },
    { path: 'bots', redirectTo: '/' },
    { path: 'users/:id', component: _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__["UserProfileComponent"] },
    { path: 'users', redirectTo: '/' },
    { path: 'dashboard', component: _dashboard_dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["DashboardAuthGuard"]] },
    { path: 'dashboard/bots/new', component: _dashboard_bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_9__["AddBotComponent"], canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["DashboardAuthGuard"]] },
    { path: 'dashboard/bots/:id', component: _dashboard_bots_bot_bot_component__WEBPACK_IMPORTED_MODULE_13__["BotComponent"], canActivate: [_guards_bot_auth_guard__WEBPACK_IMPORTED_MODULE_11__["BotAuthGuard"]] },
    { path: 'dashboard/bots/:id/analytics', component: _dashboard_bots_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_21__["AnalyticsComponent"], canActivate: [_guards_bot_auth_guard__WEBPACK_IMPORTED_MODULE_11__["BotAuthGuard"]] },
    { path: 'dashboard/bots/:id/api', component: _dashboard_api_api_component__WEBPACK_IMPORTED_MODULE_18__["APIComponent"], canActivate: [_guards_bot_auth_guard__WEBPACK_IMPORTED_MODULE_11__["BotAuthGuard"]] },
    { path: 'dashboard/bots/:id/edit', component: _dashboard_bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_16__["EditBotComponent"], canActivate: [_guards_bot_auth_guard__WEBPACK_IMPORTED_MODULE_11__["BotAuthGuard"]] },
    { path: 'dashboard/bots/:id/log', component: _dashboard_log_module_log_module_component__WEBPACK_IMPORTED_MODULE_17__["LogModuleComponent"], canActivate: [_guards_bot_auth_guard__WEBPACK_IMPORTED_MODULE_11__["BotAuthGuard"]] },
    { path: 'dashboard/bots/:id/widget', component: _dashboard_bot_widget_bot_widget_component__WEBPACK_IMPORTED_MODULE_19__["BotWidgetComponent"], canActivate: [_guards_bot_auth_guard__WEBPACK_IMPORTED_MODULE_11__["BotAuthGuard"]] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");




class LoginComponent {
    constructor() {
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint}/login`;
    }
    ngOnInit() {
        window.location.assign(this.url);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
    } }, directives: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "yz/E":
/*!******************************************************!*\
  !*** ./src/app/bot-preview/bot-preview.component.ts ***!
  \******************************************************/
/*! exports provided: BotPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotPreviewComponent", function() { return BotPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "4MG8");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _services_pack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pack.service */ "T90T");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/bots.service */ "7oRx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tag.service */ "lBcp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../waves/waves.component */ "5DiX");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../member-username/member-username.component */ "aVT6");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pipes/kebab-to-sentence-case.pipe */ "ULY8");























function BotPreviewComponent_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotPreviewComponent_mat_form_field_7_mat_option_4_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const pack_r10 = ctx.$implicit; const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (_r11.checked ? ctx_r12.removeFromList(pack_r10._id) : ctx_r12.addToList(pack_r10._id)) && $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pack_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r8.inPack(pack_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r8.inPack(pack_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pack_r10.name, " ");
} }
function BotPreviewComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add to Pack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BotPreviewComponent_mat_form_field_7_mat_option_4_Template, 4, 3, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotPreviewComponent_mat_form_field_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.createPack(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotPreviewComponent_mat_form_field_7_Template_input_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); return $event.stopPropagation(); })("keydown", function BotPreviewComponent_mat_form_field_7_Template_input_keydown_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.packs.getUserPacks(ctx_r0.userService.user.id));
} }
function BotPreviewComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r1.bot.stats == null ? null : ctx_r1.bot.stats.guildCount), "");
} }
function BotPreviewComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BotPreviewComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BotPreviewComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.bot.listing.websiteURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BotPreviewComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r5.bot.listing.githubURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BotPreviewComponent_span_32_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotPreviewComponent_span_32_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function BotPreviewComponent_span_32_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, "/dashboard/bots/" + ctx_r19.user.id + "/edit"));
} }
function BotPreviewComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BotPreviewComponent_span_32_button_1_Template, 3, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BotPreviewComponent_span_32_button_2_Template, 3, 3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotPreviewComponent_span_32_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.analytics.botInvite({ botId: ctx_r22.user.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.canManage || ctx_r6.userService.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.canManage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r6.bot.listing.invite, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, "/bots/" + ctx_r6.user.id + "/vote"));
} }
const _c1 = function (a1) { return ["/tags/", a1]; };
function BotPreviewComponent_mat_chip_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "kebabToTitleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tagName_r24 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    const currVal_2 = (tmp_2_0 = ctx_r7.tagService.getTag(tagName_r24)) == null ? null : tmp_2_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, tagName_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, tagName_r24), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](currVal_2);
} }
class BotPreviewComponent {
    constructor(analytics, packs, service, router, tagService, userService) {
        this.analytics = analytics;
        this.packs = packs;
        this.service = service;
        this.router = router;
        this.tagService = tagService;
        this.userService = userService;
        this.preview = false;
        this.bot = {
            approvedAt: null,
            badges: [],
            listing: {
                body: '',
                githubURL: 'https://github.com/theADAMJR',
                invite: '',
                overview: 'A good bot I guess...',
                prefix: '/',
                tags: ['music', 'moderation', 'utility'],
                websiteURL: 'https://3pg.xyz'
            },
            stats: { guildCount: 100 },
            ownerId: '218459216145285121',
            votes: ['218459216145285121']
        };
        this.user = {
            id: '',
            displayAvatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
            username: 'Bot User',
            discriminator: '0000'
        };
        this.packForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^([A-Za-z\d -])+$/),
            ])
        });
    }
    get markdown() {
        return marked__WEBPACK_IMPORTED_MODULE_3___default()(this.bot.listing.body, { breaks: true })
            .replace(/<a/g, '<a rel="nofollow" target="_blank" ');
    }
    get canManage() {
        var _a;
        return ((_a = this.userService.user) === null || _a === void 0 ? void 0 : _a.id) === this.bot.ownerId;
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.init();
            yield this.packs.init();
            this.ownerUser = (_a = this.ownerUser) !== null && _a !== void 0 ? _a : yield this.userService.getUser(this.bot.ownerId);
        });
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const shouldDelete = prompt(`Type 'DELETE' to confirm bot page deletion.`) === 'DELETE';
            if (!shouldDelete)
                return;
            yield this.service.deleteBot(this.user.id);
            yield this.service.refreshUserBots();
            yield this.service.refreshBots();
            this.router.navigate(['/dashboard']);
        });
    }
    createPack(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (this.packForm.invalid) return;
            yield this.packs.create({ name, description: 'A pack of bots.' });
            yield this.packs.refreshPacks();
        });
    }
    addToList(packId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pack = this.packs.get(packId);
            pack.bots.push(this.user.id);
            yield this.packs.update(packId, pack);
        });
    }
    removeFromList(packId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pack = this.packs.get(packId);
            const index = pack.bots.findIndex(b => b._id === this.user.id);
            if (index >= 0)
                pack.bots.splice(index, 1);
            yield this.packs.update(packId, pack);
        });
    }
    inPack(pack) {
        return pack.bots.some(id => id === this.user.id);
    }
}
BotPreviewComponent.ɵfac = function BotPreviewComponent_Factory(t) { return new (t || BotPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pack_service__WEBPACK_IMPORTED_MODULE_5__["PackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bots_service__WEBPACK_IMPORTED_MODULE_6__["BotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"])); };
BotPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotPreviewComponent, selectors: [["bot-preview"]], inputs: { preview: "preview", ownerUser: "ownerUser", bot: "bot", user: "user" }, decls: 42, vars: 20, consts: [[1, "jumbotron", "mb-0"], [1, "container"], [3, "src"], [1, "text-muted"], ["appearance", "outline", "class", "float-right ml-3", 4, "ngIf"], [4, "ngIf"], [1, "pl-3"], ["matTooltip", "Votes", 1, "fas", "fa-chevron-circle-up"], [1, "border", "border-dark", "py-1", "mx-4"], ["matTooltip", "Reviewed and approved.", "class", "cursor-pointer", 4, "ngIf"], ["matTooltip", "Featured.", "class", "ml-2 cursor-pointer", 4, "ngIf"], ["role", "doc-subtitle", 1, "text-muted"], [3, "inverted"], [1, "container", "mt-3", "py-1"], [1, "links"], [1, "mx-2", "prefix"], ["class", "mx-2", 4, "ngIf"], ["id", "buttons", "class", "float-right my-sm-0 my-3", 4, "ngIf"], [1, "container", "my-5", "py-2"], [1, "float-left"], ["class", "cursor-pointer", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "float-right"], [1, "cursor-pointer", 3, "routerLink"], [3, "user"], ["id", "markdown", 1, "container", "rounded", 3, "innerHTML"], ["appearance", "outline", 1, "float-right", "ml-3"], ["value", "pack._id", 3, "selected", 4, "ngFor", "ngForOf"], ["color", "success", "mat-button", "", 1, "float-right", "mt-1", 3, "click"], ["type", "text", "matInput", "", 3, "click", "keydown"], ["nameInput", ""], ["value", "pack._id", 3, "selected"], [3, "checked", "click"], ["inList", ""], ["matTooltip", "Servers", 1, "fas", "fa-server"], ["matTooltip", "Reviewed and approved.", 1, "cursor-pointer"], [1, "text-success", "fas", "fa-check-circle"], ["matTooltip", "Featured.", 1, "ml-2", "cursor-pointer"], [1, "color-gold", "fas", "fa-star"], [1, "mx-2"], ["rel", "nofollow", "target", "_blank", "mat-button", "", 3, "href"], [1, "fas", "fa-globe"], [1, "fab", "fa-github"], ["id", "buttons", 1, "float-right", "my-sm-0", "my-3"], ["id", "delete", "class", "mr-2", "color", "danger", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "bg-warning mr-4", "color", "warning", "mat-button", "", 3, "routerLink", 4, "ngIf"], ["rel", "nofollow", "mat-button", "", 1, "rounded-lg", "bg-primary", "mr-2", 3, "href", "click"], [1, "fas", "fa-plus-circle"], ["mat-button", "", 1, "bg-secondary", 3, "routerLink"], [1, "fas", "fa-chevron-circle-up"], ["id", "delete", "color", "danger", "mat-button", "", 1, "mr-2", 3, "click"], [1, "fas", "fa-trash"], ["color", "warning", "mat-button", "", 1, "bg-warning", "mr-4", 3, "routerLink"], [1, "fas", "fa-pencil-alt"], ["aria-hidden", "true", 1, "ml-1"]], template: function BotPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BotPreviewComponent_mat_form_field_7_Template, 10, 1, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BotPreviewComponent_span_9_Template, 4, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BotPreviewComponent_span_16_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BotPreviewComponent_span_17_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "waves", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, BotPreviewComponent_span_30_Template, 4, 1, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BotPreviewComponent_span_31_Template, 4, 1, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, BotPreviewComponent_span_32_Template, 9, 6, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-chip-list", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, BotPreviewComponent_mat_chip_35_Template, 4, 8, "mat-chip", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "member-username", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.displayAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.user.discriminator, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userService.user && ctx.bot.approvedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot.stats == null ? null : ctx.bot.stats.guildCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 18, ctx.bot.votes.length), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot.approvedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot.badges == null ? null : ctx.bot.badges.includes("FEATURED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bot.listing.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inverted", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bot.listing.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot.listing.websiteURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bot.listing.githubURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bot.listing.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/users/" + (ctx.ownerUser == null ? null : ctx.ownerUser.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.ownerUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.markdown, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _waves_waves_component__WEBPACK_IMPORTED_MODULE_12__["WavesComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _member_username_member_username_component__WEBPACK_IMPORTED_MODULE_14__["MemberUsernameComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], _pipes_kebab_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_21__["KebabToTitleCasePipe"]], styles: ["header[_ngcontent-%COMP%] {\r\n  background-color: var(--background-secondary);\r\n\r\n  margin-top: -65px;\r\n  padding-top: 125px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  float: left;\r\n\r\n  margin-right: 15px;\r\n  border-radius: 10px;\r\n  width: 128px;\r\n}\r\n\r\n#markdown[_ngcontent-%COMP%] {\r\n  word-wrap: break-word;\r\n  padding: 25px;\r\n  \r\n\r\n  margin-top: 100px;\r\n  min-height: 275px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: var(--heading);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBNkM7O0VBRTdDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7OztFQUdiLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYm90LXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG5cclxuICBtYXJnaW4tdG9wOiAtNjVweDtcclxuICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAxMjhweDtcclxufVxyXG5cclxuI21hcmtkb3duIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBcclxuXHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWluLWhlaWdodDogMjc1cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'bot-preview',
                templateUrl: './bot-preview.component.html',
                styleUrls: ['./bot-preview.component.css']
            }]
    }], function () { return [{ type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"] }, { type: _services_pack_service__WEBPACK_IMPORTED_MODULE_5__["PackService"] }, { type: _services_bots_service__WEBPACK_IMPORTED_MODULE_6__["BotsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }]; }, { preview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ownerUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "zLnx":
/*!********************************************************!*\
  !*** ./src/app/docs-sidebar/docs-sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: DocsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsSidebarComponent", function() { return DocsSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");





const _c0 = ["drawer"];
const _c1 = [[["", "id", "content"]]];
const _c2 = ["#content"];
class DocsSidebarComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggle() {
        const icon = document.querySelector('#nav-icon1');
        icon.classList.toggle('open');
        this.drawer.toggle();
    }
    emitSearch(query) {
        this.search.emit({ query });
    }
}
DocsSidebarComponent.ɵfac = function DocsSidebarComponent_Factory(t) { return new (t || DocsSidebarComponent)(); };
DocsSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsSidebarComponent, selectors: [["docs-sidebar"]], viewQuery: function DocsSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, outputs: { search: "search" }, ngContentSelectors: _c2, decls: 59, vars: 0, consts: [["fullscreen", ""], ["mode", "side", "opened", ""], ["drawer", ""], [1, "side-nav", "navbar-dark"], [1, "m-4"], ["aria-hidden", "true", 1, "fas", "fa-book-open"], [1, "float-right", "d-sm-none", "d-block", "close", 3, "click"], [1, "navbar-nav"], [1, "category"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["routerLink", "/docs/api", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/get-started", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/badges", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-robot"], ["routerLink", "/docs/get-featured", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/guidelines", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/how-it-works", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/widget", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-info-circle"], ["routerLink", "/docs/bots-api", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/packs-api", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/stats-api", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/post-stats", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/changelog", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/docs/credits", "routerLinkActive", "active", 1, "nav-link"], ["href", "https://github.com/dbots-co/website/tree/stable/LICENSE", "routerLinkActive", "active", 1, "nav-link"], [1, "toggle"], ["id", "nav-icon1", 1, "open", 3, "click"]], template: function DocsSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DBots ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocsSidebarComponent_Template_span_click_7_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "General ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bots ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Get Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Guidelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "How It Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bots API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Packs API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Stats API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Post Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Changelog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocsSidebarComponent_Template_div_click_54_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]], styles: ["mat-sidenav[_ngcontent-%COMP%] {\r\n    background-color: var(--background-secondary) !important;\r\n}\r\n\r\n[opened][_ngcontent-%COMP%] {\r\n    width: 300px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    margin: 15px 0 0 15px;\r\n\r\n    color: var(--secondary);\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n\r\n    margin: 50px 0 0 15px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 42px;\r\n    color: white;\r\n}\r\n\r\n#searchButton[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    height: 64px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIscUJBQXFCOztJQUVyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImRvY3Mtc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbltvcGVuZWRdIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMCAxNXB4O1xyXG5cclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgbWFyZ2luOiA1MHB4IDAgMCAxNXB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jc2VhcmNoQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocsSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'docs-sidebar',
                templateUrl: './docs-sidebar.component.html',
                styleUrls: ['./docs-sidebar.component.css']
            }]
    }], null, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['drawer']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zg1N":
/*!**********************************************************!*\
  !*** ./src/app/rocket-button/rocket-button.component.ts ***!
  \**********************************************************/
/*! exports provided: RocketButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketButtonComponent", function() { return RocketButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["button"];
const _c1 = ["*"];
class RocketButtonComponent {
    constructor() {
        this.animated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.precondition = true;
        this.clicked = false;
    }
    ngAfterViewInit() {
        const d = 40;
        const elem = this.button.nativeElement;
        elem.querySelectorAll('.default, .success > div').forEach(text => {
            text.querySelectorAll('span').forEach((span, i) => {
                span.innerHTML = span.textContent == ' ' ? '&nbsp;' : span.textContent;
                span.style.setProperty('--d', i * d + 'ms');
                span.style.setProperty('--ds', text.querySelectorAll('span').length * d - d - i * d + 'ms');
            });
        });
        elem.addEventListener('click', e => {
            if (this.clicked || !this.precondition)
                return;
            this.clicked = true;
            e.preventDefault();
            if (elem.classList.contains('animated'))
                return;
            elem.classList.add('animated');
            elem.classList.toggle('live');
            setTimeout(() => {
                elem.classList.remove('animated');
                this.animated.emit();
            }, 2400);
        });
    }
}
RocketButtonComponent.ɵfac = function RocketButtonComponent_Factory(t) { return new (t || RocketButtonComponent)(); };
RocketButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RocketButtonComponent, selectors: [["rocket-button"]], viewQuery: function RocketButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
    } }, inputs: { precondition: "precondition" }, outputs: { animated: "animated" }, ngContentSelectors: _c1, decls: 32, vars: 2, consts: [[1, "cursor-pointer", "rocket-button"], ["button", ""], [1, "default"], [1, "success"], [0, "xlink", "href", "#check"], [1, "d-none"], [1, "animation"], [1, "rocket"], [0, "xlink", "href", "#rocket"], [1, "smoke"], ["xmlns", "http://www.w3.org/2000/svg", 2, "display", "none"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 13 11", "id", "check"], ["stroke", "currentColor", "points", "1 5.5 5 9.5 12 1.5"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 36", "id", "rocket"], ["d", "M12,0 C18.6666667,8.70175439 19.7777778,19.0350877 15.3333333,31 L8.66666667,31 C4.22222222,19.0350877 5.33333333,8.70175439 12,0 Z", "fill", "var(--rocket)"], ["d", "M12,0 C5.33333333,8.70175439 4.22222222,19.0350877 8.66666667,31 C6.72222222,17.9473684 7.83333333,7.61403509 12,0 Z", "fill", "var(--rocket-shadow-left)"], ["d", "M12,0 C18.6666667,8.70175439 19.7777778,19.0350877 15.3333333,31 C17.2777778,17.9473684 16.1666667,7.61403509 12,0 Z", "fill", "var(--rocket-shadow-right)"], ["d", "M22.2399372,27.25 C21.2403105,25.558628 19.4303122,23.808628 16.21,22 L15,31 L17.6512944,31 C18.2564684,31 18.8216022,31.042427 19.1572924,31.5292747 L21.7379379,35.271956 C22.0515593,35.7267976 22.5795404,36 23.1449294,36 C23.5649145,36 23.9142153,35.7073938 23.9866527,35.3215275 L24,35.146217 L23.9987214,35.1196135 C23.7534506,31.4421183 23.1671892,28.8189138 22.2399372,27.25 Z", "fill", "var(--rocket-wing-right)"], ["d", "M1.76006278,27.25 C2.75968951,25.558628 4.56968777,23.808628 7.79,22 L9,31 L6.34870559,31 C5.74353157,31 5.17839777,31.042427 4.84270762,31.5292747 L2.2620621,35.271956 C1.94844071,35.7267976 1.42045963,36 0.855070627,36 C0.435085457,36 0.0857846604,35.7073938 0.0133472633,35.3215275 L0,35.146217 L0.00127855763,35.1196135 C0.24654935,31.4421183 0.832810758,28.8189138 1.76006278,27.25 Z", "fill", "var(--rocket-wing-left)"], ["fill", "var(--rocket-window-shadow)", "cx", "12", "cy", "12", "r", "3"], ["fill", "var(--rocket-window)", "cx", "12", "cy", "12", "r", "2.5"], ["d", "M15.6021597,5.99977504 L8.39784027,5.99977504 C8.54788101,5.6643422 8.70496315,5.3309773 8.86908669,4.99968036 L15.1309133,4.99968036 C15.2950369,5.3309773 15.452119,5.6643422 15.6021597,5.99977504 Z", "fill-opacity", "0.3", "fill", "var(--rocket-line)"]], template: function RocketButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "symbol", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polyline", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "symbol", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.clicked ? 0 : 1);
    } }, styles: [".rocket-button[_ngcontent-%COMP%] {\r\n    --background: #262730;\r\n    --text: #fff;\r\n    --check: #5c86ff;\r\n    --blue: #5c86ff;\r\n    --blue-transparent: rgba(92, 134, 255, 0);\r\n    --dot: var(--primary);\r\n    --dot-shadow: var(--primary);\r\n    --smoke: rgba(247, 248, 255, 0.9);\r\n    --rocket: #eef0fd;\r\n    --rocket-shadow-left: #fff;\r\n    --rocket-shadow-right: #d3d4ec;\r\n    --rocket-wing-right: #c2c3d9;\r\n    --rocket-wing-left: #d3d4ec;\r\n    --rocket-window: #275efe;\r\n    --rocket-window-shadow: #c2c3d9;\r\n    --rocket-line: #9ea0be;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 19px;\r\n    padding: 14px 28px;\r\n    display: table;\r\n    position: relative;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    text-decoration: none;\r\n    color: var(--text);\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 25px;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transition: transform 0.2s ease;\r\n    transform: scale(var(--s, 1)) translateZ(0);\r\n    position: absolute;\r\n    background: var(--background);\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%], .rocket-button[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%], .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .rocket-button[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    transition: transform 0.2s ease, opacity 0.2s ease;\r\n    transform: translateX(var(--x, 0));\r\n    opacity: var(--o, 1);\r\n    filter: blur(var(--b, 0px));\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    width: 5px;\r\n    height: 5px;\r\n    border-radius: 50%;\r\n    margin: 7px 8px 0 0;\r\n    box-shadow: 0 0 0 1px var(--dot-shadow);\r\n    -webkit-animation: pulse 1s ease infinite;\r\n            animation: pulse 1s ease infinite;\r\n    vertical-align: top;\r\n    display: inline-block;\r\n    transition: opacity 0.3s linear;\r\n    opacity: var(--o, 1);\r\n    background: var(--dot);\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n    opacity: var(--o, 0);\r\n    position: absolute;\r\n    display: flex;\r\n    top: 14px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 13px;\r\n    height: 11px;\r\n    stroke-width: 2;\r\n    stroke-dasharray: 20px;\r\n    stroke-dashoffset: var(--o, 20px);\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    fill: none;\r\n    display: block;\r\n    color: var(--check);\r\n    margin: 4px 8px 0 0;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    --o: 0;\r\n    --x: 8px;\r\n    --b: 2px;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    height: 120px;\r\n    pointer-events: none;\r\n    overflow: hidden;\r\n    position: absolute;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n    top: 100%;\r\n    position: absolute;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    transform: scale(0.7);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    bottom: var(--b, -20px);\r\n    left: var(--l, -12px);\r\n    width: var(--s, 32px);\r\n    height: var(--s, 32px);\r\n    background: var(--smoke);\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\r\n    --s: 20px;\r\n    --l: -24px;\r\n    --b: -10px;\r\n    --d: 50ms;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\r\n    --s: 22px;\r\n    --l: 0;\r\n    --b: -12px;\r\n    --d: 20ms;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\r\n    --s: 12px;\r\n    --l: 16px;\r\n    --b: -6px;\r\n    --d: 120ms;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\r\n    --s: 24px;\r\n    --l: -20px;\r\n    --b: -14px;\r\n    --d: 80ms;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\r\n    --s: 12px;\r\n    --l: -28px;\r\n    --b: -8px;\r\n    --d: 60ms;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .rocket[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 100%;\r\n    z-index: 1;\r\n    margin: 0 0 0 -12px;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .rocket[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    margin-left: -3px;\r\n    left: 50%;\r\n    top: 32px;\r\n    position: absolute;\r\n    width: 6px;\r\n    border-radius: 2px;\r\n    height: 32px;\r\n    transform-origin: 50% 0;\r\n    transform: scaleY(0.5);\r\n    background: linear-gradient(var(--blue), var(--blue-transparent));\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .rocket[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n    height: 36px;\r\n    display: block;\r\n  }\r\n  .rocket-button[_ngcontent-%COMP%]:active {\r\n    --s: .95;\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]:before {\r\n    -webkit-animation: shake 1.5s ease 0.6s;\r\n            animation: shake 1.5s ease 0.6s;\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]:before {\r\n    --o: 0;\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    --o: 0;\r\n    --x: 8px;\r\n    --b: 2px;\r\n    transition: transform 0.3s ease var(--d), opacity 0.3s ease var(--d), filter 0.3s ease var(--d);\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n    --o: 1;\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    --o: 1;\r\n    --x: 0;\r\n    --b: 0;\r\n    transition: transform 0.3s ease calc(var(--d) + 2200ms), opacity 0.3s ease calc(var(--d) + 2200ms), filter 0.3s ease calc(var(--d) + 2200ms);\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    --o: 0;\r\n    transition: stroke-dashoffset 0.3s ease 2.25s;\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .rocket[_ngcontent-%COMP%] {\r\n    -webkit-animation: rocket 2s ease forwards 0.4s;\r\n            animation: rocket 2s ease forwards 0.4s;\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .rocket[_ngcontent-%COMP%]:before {\r\n    -webkit-animation: rocket-light 2s ease forwards 0.4s;\r\n            animation: rocket-light 2s ease forwards 0.4s;\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    -webkit-animation: var(--n, smoke) 1.7s ease forwards calc(var(--d) + 600ms);\r\n            animation: var(--n, smoke) 1.7s ease forwards calc(var(--d) + 600ms);\r\n  }\r\n  .rocket-button.live[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3), .rocket-button.live[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   .smoke[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\r\n    --n: smoke-alt;\r\n  }\r\n  @-webkit-keyframes pulse {\r\n    50% {\r\n      box-shadow: 0 0 0 2px var(--dot-shadow);\r\n    }\r\n  }\r\n  @keyframes pulse {\r\n    50% {\r\n      box-shadow: 0 0 0 2px var(--dot-shadow);\r\n    }\r\n  }\r\n  @-webkit-keyframes shake {\r\n    8%, 24%, 40%, 56%, 72%, 88% {\r\n      transform: translateX(-1px);\r\n    }\r\n    16%, 32%, 48%, 64%, 80%, 96% {\r\n      transform: translateX(1px);\r\n    }\r\n  }\r\n  @keyframes shake {\r\n    8%, 24%, 40%, 56%, 72%, 88% {\r\n      transform: translateX(-1px);\r\n    }\r\n    16%, 32%, 48%, 64%, 80%, 96% {\r\n      transform: translateX(1px);\r\n    }\r\n  }\r\n  @-webkit-keyframes smoke {\r\n    20%, 80% {\r\n      opacity: 1;\r\n      transform: scale(1);\r\n    }\r\n    55% {\r\n      transform: scale(0.92);\r\n    }\r\n  }\r\n  @keyframes smoke {\r\n    20%, 80% {\r\n      opacity: 1;\r\n      transform: scale(1);\r\n    }\r\n    55% {\r\n      transform: scale(0.92);\r\n    }\r\n  }\r\n  @-webkit-keyframes smoke-alt {\r\n    20%, 80% {\r\n      opacity: 1;\r\n      transform: scale(1);\r\n    }\r\n    60% {\r\n      transform: scale(1.08);\r\n    }\r\n  }\r\n  @keyframes smoke-alt {\r\n    20%, 80% {\r\n      opacity: 1;\r\n      transform: scale(1);\r\n    }\r\n    60% {\r\n      transform: scale(1.08);\r\n    }\r\n  }\r\n  @-webkit-keyframes rocket {\r\n    35% {\r\n      transform: translateY(-56px);\r\n    }\r\n    80% {\r\n      transform: translateY(-48px);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: translateY(-108px) scale(0.6);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  @keyframes rocket {\r\n    35% {\r\n      transform: translateY(-56px);\r\n    }\r\n    80% {\r\n      transform: translateY(-48px);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: translateY(-108px) scale(0.6);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  @-webkit-keyframes rocket-light {\r\n    35% {\r\n      transform: scaleY(0.6);\r\n    }\r\n    75% {\r\n      transform: scaleY(0.5);\r\n    }\r\n    100% {\r\n      transform: scaleY(1);\r\n    }\r\n  }\r\n  @keyframes rocket-light {\r\n    35% {\r\n      transform: scaleY(0.6);\r\n    }\r\n    75% {\r\n      transform: scaleY(0.5);\r\n    }\r\n    100% {\r\n      transform: scaleY(1);\r\n    }\r\n  }\r\n  html[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  *[_ngcontent-%COMP%] {\r\n    box-sizing: inherit;\r\n  }\r\n  *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n    box-sizing: inherit;\r\n  }\r\n  body[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    font-family: \"Roboto\", Arial;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #F7F8FF;\r\n  }\r\n  body[_ngcontent-%COMP%]   .dribbble[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    display: block;\r\n    right: 20px;\r\n    bottom: 20px;\r\n  }\r\n  body[_ngcontent-%COMP%]   .dribbble[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 28px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvY2tldC1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsNkJBQTZCO0VBQy9CO0VBQ0E7OztJQUdFLFVBQVU7RUFDWjtFQUNBOztJQUVFLGNBQWM7SUFDZCxrREFBa0Q7SUFDbEQsa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0VBQ1Y7RUFDQTtJQUNFLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsU0FBUztJQUNULFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7SUFDVCxNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7RUFDWDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGlFQUFpRTtFQUNuRTtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLHVDQUErQjtZQUEvQiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLE1BQU07RUFDUjtFQUNBO0lBQ0UsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsK0ZBQStGO0VBQ2pHO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLDRJQUE0STtFQUM5STtFQUNBO0lBQ0UsTUFBTTtJQUNOLDZDQUE2QztFQUMvQztFQUNBO0lBQ0UsK0NBQXVDO1lBQXZDLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UscURBQTZDO1lBQTdDLDZDQUE2QztFQUMvQztFQUNBO0lBQ0UsNEVBQW9FO1lBQXBFLG9FQUFvRTtFQUN0RTtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0U7TUFDRSx1Q0FBdUM7SUFDekM7RUFDRjtFQUpBO0lBQ0U7TUFDRSx1Q0FBdUM7SUFDekM7RUFDRjtFQUNBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtFQUNGO0VBUEE7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UsMEJBQTBCO0lBQzVCO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0Y7RUFSQTtJQUNFO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0Y7RUFSQTtJQUNFO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3Q0FBd0M7TUFDeEMsVUFBVTtJQUNaO0VBQ0Y7RUFaQTtJQUNFO01BQ0UsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3Q0FBd0M7TUFDeEMsVUFBVTtJQUNaO0VBQ0Y7RUFDQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGO0VBVkE7SUFDRTtNQUNFLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1DQUFtQztFQUNyQztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2QiLCJmaWxlIjoicm9ja2V0LWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvY2tldC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjYyNzMwO1xyXG4gICAgLS10ZXh0OiAjZmZmO1xyXG4gICAgLS1jaGVjazogIzVjODZmZjtcclxuICAgIC0tYmx1ZTogIzVjODZmZjtcclxuICAgIC0tYmx1ZS10cmFuc3BhcmVudDogcmdiYSg5MiwgMTM0LCAyNTUsIDApO1xyXG4gICAgLS1kb3Q6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgLS1kb3Qtc2hhZG93OiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIC0tc21va2U6IHJnYmEoMjQ3LCAyNDgsIDI1NSwgMC45KTtcclxuICAgIC0tcm9ja2V0OiAjZWVmMGZkO1xyXG4gICAgLS1yb2NrZXQtc2hhZG93LWxlZnQ6ICNmZmY7XHJcbiAgICAtLXJvY2tldC1zaGFkb3ctcmlnaHQ6ICNkM2Q0ZWM7XHJcbiAgICAtLXJvY2tldC13aW5nLXJpZ2h0OiAjYzJjM2Q5O1xyXG4gICAgLS1yb2NrZXQtd2luZy1sZWZ0OiAjZDNkNGVjO1xyXG4gICAgLS1yb2NrZXQtd2luZG93OiAjMjc1ZWZlO1xyXG4gICAgLS1yb2NrZXQtd2luZG93LXNoYWRvdzogI2MyYzNkOTtcclxuICAgIC0tcm9ja2V0LWxpbmU6ICM5ZWEwYmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI4cHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tcywgMSkpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmRlZmF1bHQsXHJcbiAgLnJvY2tldC1idXR0b24gLnN1Y2Nlc3MsXHJcbiAgLnJvY2tldC1idXR0b24gLmFuaW1hdGlvbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbiAuZGVmYXVsdCBzcGFuLFxyXG4gIC5yb2NrZXQtYnV0dG9uIC5zdWNjZXNzIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBvcGFjaXR5IDAuMnMgZWFzZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS14LCAwKSk7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vLCAxKTtcclxuICAgIGZpbHRlcjogYmx1cih2YXIoLS1iLCAwcHgpKTtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmRlZmF1bHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmRlZmF1bHQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDdweCA4cHggMCAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWRvdC1zaGFkb3cpO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBlYXNlIGluZmluaXRlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vLCAxKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRvdCk7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uIC5zdWNjZXNzIHtcclxuICAgIG9wYWNpdHk6IHZhcigtLW8sIDApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLnN1Y2Nlc3Mgc3ZnIHtcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjBweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiB2YXIoLS1vLCAyMHB4KTtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tY2hlY2spO1xyXG4gICAgbWFyZ2luOiA0cHggOHB4IDAgMDtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLnN1Y2Nlc3MgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLnN1Y2Nlc3MgPiBkaXYgc3BhbiB7XHJcbiAgICAtLW86IDA7XHJcbiAgICAtLXg6IDhweDtcclxuICAgIC0tYjogMnB4O1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbiAuYW5pbWF0aW9uIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uIC5hbmltYXRpb24gLnNtb2tlIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmFuaW1hdGlvbiAuc21va2UgaSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiB2YXIoLS1iLCAtMjBweCk7XHJcbiAgICBsZWZ0OiB2YXIoLS1sLCAtMTJweCk7XHJcbiAgICB3aWR0aDogdmFyKC0tcywgMzJweCk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXMsIDMycHgpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc21va2UpO1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbiAuYW5pbWF0aW9uIC5zbW9rZSBpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAtLXM6IDIwcHg7XHJcbiAgICAtLWw6IC0yNHB4O1xyXG4gICAgLS1iOiAtMTBweDtcclxuICAgIC0tZDogNTBtcztcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmFuaW1hdGlvbiAuc21va2UgaTpudGgtY2hpbGQoMykge1xyXG4gICAgLS1zOiAyMnB4O1xyXG4gICAgLS1sOiAwO1xyXG4gICAgLS1iOiAtMTJweDtcclxuICAgIC0tZDogMjBtcztcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmFuaW1hdGlvbiAuc21va2UgaTpudGgtY2hpbGQoNCkge1xyXG4gICAgLS1zOiAxMnB4O1xyXG4gICAgLS1sOiAxNnB4O1xyXG4gICAgLS1iOiAtNnB4O1xyXG4gICAgLS1kOiAxMjBtcztcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmFuaW1hdGlvbiAuc21va2UgaTpudGgtY2hpbGQoNSkge1xyXG4gICAgLS1zOiAyNHB4O1xyXG4gICAgLS1sOiAtMjBweDtcclxuICAgIC0tYjogLTE0cHg7XHJcbiAgICAtLWQ6IDgwbXM7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uIC5hbmltYXRpb24gLnNtb2tlIGk6bnRoLWNoaWxkKDYpIHtcclxuICAgIC0tczogMTJweDtcclxuICAgIC0tbDogLTI4cHg7XHJcbiAgICAtLWI6IC04cHg7XHJcbiAgICAtLWQ6IDYwbXM7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uIC5hbmltYXRpb24gLnJvY2tldCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAtMTJweDtcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24gLmFuaW1hdGlvbiAucm9ja2V0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWJsdWUpLCB2YXIoLS1ibHVlLXRyYW5zcGFyZW50KSk7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uIC5hbmltYXRpb24gLnJvY2tldCBzdmcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b246YWN0aXZlIHtcclxuICAgIC0tczogLjk1O1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbi5saXZlOmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IHNoYWtlIDEuNXMgZWFzZSAwLjZzO1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbi5saXZlIC5kZWZhdWx0OmJlZm9yZSB7XHJcbiAgICAtLW86IDA7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uLmxpdmUgLmRlZmF1bHQgc3BhbiB7XHJcbiAgICAtLW86IDA7XHJcbiAgICAtLXg6IDhweDtcclxuICAgIC0tYjogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSB2YXIoLS1kKSwgb3BhY2l0eSAwLjNzIGVhc2UgdmFyKC0tZCksIGZpbHRlciAwLjNzIGVhc2UgdmFyKC0tZCk7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uLmxpdmUgLnN1Y2Nlc3Mge1xyXG4gICAgLS1vOiAxO1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbi5saXZlIC5zdWNjZXNzIHNwYW4ge1xyXG4gICAgLS1vOiAxO1xyXG4gICAgLS14OiAwO1xyXG4gICAgLS1iOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSBjYWxjKHZhcigtLWQpICsgMjIwMG1zKSwgb3BhY2l0eSAwLjNzIGVhc2UgY2FsYyh2YXIoLS1kKSArIDIyMDBtcyksIGZpbHRlciAwLjNzIGVhc2UgY2FsYyh2YXIoLS1kKSArIDIyMDBtcyk7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uLmxpdmUgLnN1Y2Nlc3Mgc3ZnIHtcclxuICAgIC0tbzogMDtcclxuICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuM3MgZWFzZSAyLjI1cztcclxuICB9XHJcbiAgLnJvY2tldC1idXR0b24ubGl2ZSAuYW5pbWF0aW9uIC5yb2NrZXQge1xyXG4gICAgYW5pbWF0aW9uOiByb2NrZXQgMnMgZWFzZSBmb3J3YXJkcyAwLjRzO1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbi5saXZlIC5hbmltYXRpb24gLnJvY2tldDpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiByb2NrZXQtbGlnaHQgMnMgZWFzZSBmb3J3YXJkcyAwLjRzO1xyXG4gIH1cclxuICAucm9ja2V0LWJ1dHRvbi5saXZlIC5hbmltYXRpb24gLnNtb2tlIGkge1xyXG4gICAgYW5pbWF0aW9uOiB2YXIoLS1uLCBzbW9rZSkgMS43cyBlYXNlIGZvcndhcmRzIGNhbGModmFyKC0tZCkgKyA2MDBtcyk7XHJcbiAgfVxyXG4gIC5yb2NrZXQtYnV0dG9uLmxpdmUgLmFuaW1hdGlvbiAuc21va2UgaTpudGgtY2hpbGQoMyksIC5yb2NrZXQtYnV0dG9uLmxpdmUgLmFuaW1hdGlvbiAuc21va2UgaTpudGgtY2hpbGQoNikge1xyXG4gICAgLS1uOiBzbW9rZS1hbHQ7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgNTAlIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWRvdC1zaGFkb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDglLCAyNCUsIDQwJSwgNTYlLCA3MiUsIDg4JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcclxuICAgIH1cclxuICAgIDE2JSwgMzIlLCA0OCUsIDY0JSwgODAlLCA5NiUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBzbW9rZSB7XHJcbiAgICAyMCUsIDgwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICA1NSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNtb2tlLWFsdCB7XHJcbiAgICAyMCUsIDgwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHJvY2tldCB7XHJcbiAgICAzNSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU2cHgpO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00OHB4KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwOHB4KSBzY2FsZSgwLjYpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHJvY2tldC1saWdodCB7XHJcbiAgICAzNSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbiAgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgQXJpYWw7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZGO1xyXG4gIH1cclxuICBib2R5IC5kcmliYmJsZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBib2R5IC5kcmliYmJsZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RocketButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rocket-button',
                templateUrl: './rocket-button.component.html',
                styleUrls: ['./rocket-button.component.css']
            }]
    }], null, { button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['button']
        }], animated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], precondition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map