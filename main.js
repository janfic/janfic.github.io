(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jan Fic\Desktop\Software Engineering\Portfolio\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


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
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminal/terminal.component */ "aTv0");




const _c0 = function () { return ["/about"]; };
const _c1 = function () { return ["/portfolio", ""]; };
const _c2 = function () { return ["/portfolio", "computercombat"]; };
const _c3 = function () { return ["/portfolio", "spacejunk"]; };
const _c4 = function () { return ["/portfolio", "useride"]; };
const _c5 = function () { return ["/portfolio", "realtimegametycoon"]; };
class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 14, consts: [["id", "app"], ["id", "navbar"], [1, "navchild", 2, "margin-left", "0.5em", 3, "routerLink"], [1, "navchild", "button", 3, "routerLink"], [1, "navchild", "button"], ["id", "content"], ["id", "sidebar"], [2, "flex", "1 1 auto", 3, "routerLink"], ["path", "assets/about/janfic.png", "hover", "assets/about/janfic.png", "name", "Jan Fic", "description", "Learn More about Jan Fic"], ["path", "assets/computercombat/computercombatpreview.png", "hover", "assets/computercombat/computercombatpreview.png", "name", "Computer Combat", "description", "multiplayer match-3 strategy card game WIP"], ["path", "assets/spacejunk/spacejunkpreview.png", "hover", "assets/spacejunk/spacejunkpreview.png", "name", "SPACE JUNK", "description", "gamejam arcade action java "], ["path", "assets/useride/useridepreview.png", "hover", "assets/useride/useridepreview.gif", "name", "USER IDE", "description", "programming education ECS modding java"], ["path", "assets/realtimegametycoon/realtimegamepreview.png", "hover", "assets/realtimegametycoon/realtimegamepreview.png", "name", "RTGT", "description", "simulation education networking"], ["id", "routercontent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jan Fic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dev Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-terminal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-terminal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-terminal", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-terminal", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-terminal", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_2__["TerminalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 100%;\n  background: #132049;\n}\n@viewport {\n  width: device-width;\n  zoom: 1;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background: #132049;\n  width: 5px;\n  height: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: #132049;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #45D3D1;\n  width: 1px;\n  border-radius: 10px;\n  height: 1px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  height: 50%;\n  color: #45D3D1;\n}\n#app[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-flow: column;\n}\n#content[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  display: flex;\n  flex: auto;\n  flex-direction: row;\n  overflow: scroll;\n  order: 1;\n}\n#navbar[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #45D3D1;\n  background: #274D7C;\n  font-size: 3em;\n  padding: 0.5em;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n}\n#routercontent[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  order: 2;\n  flex: 4;\n}\n#sidebar[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  top: 15px;\n  bottom: 15px;\n  order: 1;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n#navbar[_ngcontent-%COMP%]   .navchild[_ngcontent-%COMP%] {\n  flex: 9 1 auto;\n}\n#navbar[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  border: 1px #45D3D1 solid;\n  border-radius: 10px;\n  margin: 0 1em 0;\n  padding: 0.5em;\n  background: #274D7C;\n  transition: background-color 1s;\n  flex: content;\n}\n#navbar[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background: #132049;\n}\n@media (max-width: 750px) {\n  #sidebar[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex: 0 1 auto;\n    order: 2;\n  }\n\n  #routercontent[_ngcontent-%COMP%] {\n    order: 1;\n  }\n\n  #navbar[_ngcontent-%COMP%] {\n    flex-direction: row;\n    font-size: 2em;\n  }\n\n  #navbar[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  #content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFPQTtFQUNJLFlBQUE7QUNMSjtBRFFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFUSztBQ0lUO0FBUEE7RUFDSSxtQkFBQTtFQUNBLE9BQUE7QUFVSjtBQUZBO0VBQ0ksbUJEUks7RUNTTCxVQUFBO0VBQ0EsV0FBQTtBQU9KO0FBSEE7RUFDSSxtQkRmSztBQ3FCVDtBQUhBO0VBQ0ksbUJEdEJNO0VDdUJOLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFNSjtBQUZBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0RoQ007QUNxQ1Y7QUFGQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQUZBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QUFLSjtBQUZBO0VBQ0ksc0JBQUE7RUFDQSxjRHBETTtFQ3FETixtQkRwRFE7RUNxRFIsY0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBS0o7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUFLSjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBS0o7QUFGQTtFQUNJLGNBQUE7QUFLSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CRHRGUTtFQ3VGUiwrQkFBQTtFQUNBLGFBQUE7QUFLSjtBQUFBO0VBQ0ksbUJENUZLO0FDK0ZUO0FBQUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VBR047O0VBQUU7SUFDSSxRQUFBO0VBR047O0VBQUU7SUFDSSxtQkFBQTtJQUNBLGNBQUE7RUFHTjs7RUFBRTtJQUNJLGVBQUE7RUFHTjs7RUFBRTtJQUNJLHNCQUFBO0VBR047QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiRwcmltYXJ5OiAjNDVEM0QxO1xuJHNlY29uZGFyeTogIzI3NEQ3QztcbiRhY2NlbnQ6ICNmYmYyMzY7XG4kbWlkZGxlOiAjMTMyMDQ5O1xuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkbWlkZGxlO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTMyMDQ5O1xufVxuXG5Admlld3BvcnQge1xuICB3aWR0aDogZGV2aWNlLXdpZHRoO1xuICB6b29tOiAxO1xufVxuQC1tcy12aWV3cG9ydCB7XG4gIHdpZHRoOiBkZXZpY2Utd2lkdGg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgYmFja2dyb3VuZDogIzEzMjA0OTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZDogIzEzMjA0OTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM0NUQzRDE7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMXB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBoZWlnaHQ6IDUwJTtcbiAgY29sb3I6ICM0NUQzRDE7XG59XG5cbiNhcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4jY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvcmRlcjogMTtcbn1cblxuI25hdmJhciB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGNvbG9yOiAjNDVEM0QxO1xuICBiYWNrZ3JvdW5kOiAjMjc0RDdDO1xuICBmb250LXNpemU6IDNlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHRvcDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jcm91dGVyY29udGVudCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3JkZXI6IDI7XG4gIGZsZXg6IDQ7XG59XG5cbiNzaWRlYmFyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB0b3A6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbiAgb3JkZXI6IDE7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNuYXZiYXIgLm5hdmNoaWxkIHtcbiAgZmxleDogOSAxIGF1dG87XG59XG5cbiNuYXZiYXIgLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiAxcHggIzQ1RDNEMSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwIDFlbSAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYmFja2dyb3VuZDogIzI3NEQ3QztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcbiAgZmxleDogY29udGVudDtcbn1cblxuI25hdmJhciAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzEzMjA0OTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICNzaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgb3JkZXI6IDI7XG4gIH1cblxuICAjcm91dGVyY29udGVudCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cblxuICAjbmF2YmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG5cbiAgI25hdmJhciAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAjY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YbDW":
/*!********************************************!*\
  !*** ./src/app/screen/screen.component.ts ***!
  \********************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-twitter-timeline */ "MkFp");






function ScreenComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r3);
} }
const _c0 = function () { return { sourceType: "url", url: "https://twitter.com/gry_jana" }; };
const _c1 = function () { return { tweetLimit: 5 }; };
function ScreenComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-twitter-timeline", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("opts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
function ScreenComponent_div_8_ng_template_4_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r9);
} }
function ScreenComponent_div_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScreenComponent_div_8_ng_template_4_p_0_Template, 2, 1, "p", 16);
} if (rf & 2) {
    const section_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", section_r4.body);
} }
function ScreenComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScreenComponent_div_8_div_3_Template, 2, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScreenComponent_div_8_ng_template_4_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r4.title === "Twitter")("ngIfElse", _r6);
} }
function ScreenComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const command_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", command_r11["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](command_r11["name"]);
} }
class ScreenComponent {
    constructor(route, httpClient) {
        this.route = route;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.project = params['project'];
            this.datasub = this.httpClient.get("assets/" + this.project + "/info.json").subscribe(data => {
                this.data = data;
                this.commands = data['commands'];
                this.tags = data['tags'];
                this.sections = data['sections'];
                this.preview = data['preview'];
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.datasub.unsubscribe();
    }
    isTwitter(string) {
        return string.equals("Twitter");
    }
}
ScreenComponent.ɵfac = function ScreenComponent_Factory(t) { return new (t || ScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScreenComponent, selectors: [["app-screen"]], decls: 12, vars: 9, consts: [[1, "screen"], [3, "src"], [1, "tags"], [4, "ngFor", "ngForOf"], [1, "terminal"], [1, "terminalTitle"], [1, "terminalBody"], ["class", "section", 4, "ngFor", "ngForOf"], [1, "terminalCommand", "terminalButtons"], [1, "buttons"], [1, "section"], [1, "description"], ["class", "twitter", 4, "ngIf", "ngIfElse"], ["default", ""], [1, "twitter"], [3, "data", "opts"], ["class", "body", 4, "ngFor", "ngForOf"], [1, "body"], [3, "href"]], template: function ScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScreenComponent_li_3_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ScreenComponent_div_8_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScreenComponent_li_11_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("width: ", ctx.data["preview_width"], "; height: ", ctx.data["preview_height"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx.project, "/preview.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_4__["NgxTwitterTimelineComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 100%;\n  background: #132049;\n}\n\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 100%;\n  background: #132049;\n}\n.terminal[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background: #081230;\n  color: #45D3D1;\n  border: 3px solid #274D7C;\n  border-radius: 10px;\n  font-size: 12px;\n  margin: 15px;\n  max-width: 100%;\n  flex: 1 auto;\n}\n.terminalLine[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n}\n.terminalTitle[_ngcontent-%COMP%] {\n  background: #274D7C;\n  padding: 0.5em;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n.terminalBody[_ngcontent-%COMP%] {\n  display: flex;\n  filter: opacity(25%);\n  transition: filter 2s;\n  text-align: center;\n  object-fit: contain;\n}\n.terminalBody[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.terminalBody[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  z-index: 99;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.terminalBody[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.terminalBody[_ngcontent-%COMP%]:hover   .preview[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.terminalBody[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.terminalBody[_ngcontent-%COMP%]:hover {\n  filter: opacity(100%);\n}\n.terminalCommand[_ngcontent-%COMP%]::before {\n  content: \"$:\";\n  padding-right: 15px;\n}\n.terminalCommand[_ngcontent-%COMP%] {\n  border-top: 1px solid #274D7C;\n  padding: 1em;\n}\n@media (max-width: 1000px) {\n  .terminal[_ngcontent-%COMP%] {\n    min-width: 150px;\n    position: inherit;\n  }\n\n  .terminalTitle[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .terminalCommand[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .terminalButtons[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.screen[_ngcontent-%COMP%] {\n  margin: 3%;\n  margin-top: 0;\n  border: 3px solid #274D7C;\n  border-bottom: 20px solid #274D7C;\n  border-radius: 10px;\n  background: #081230;\n  text-align: center;\n  object-fit: contain;\n  display: block;\n  color: #45D3D1;\n  font-family: monospace;\n  overflow: hidden;\n}\n.twitter[_ngcontent-%COMP%] {\n  padding: 10px;\n  overflow-y: scroll;\n  height: 250px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background: #132049;\n  width: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #45D3D1;\n  width: 1px;\n  border-radius: 10px;\n}\n.terminal[_ngcontent-%COMP%] {\n  margin: 3%;\n  margin-bottom: 0;\n}\n.buttons[_ngcontent-%COMP%]:before {\n  content: \"$:\";\n}\n.buttons[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  margin: 0px 5px;\n  background: #45D3D1;\n  border: 1px black solid;\n  border-radius: 5px;\n  color: #081230;\n  display: inline-block;\n  text-align: center;\n  font-weight: bold;\n}\n.buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  text-decoration: none;\n  color: #081230;\n}\n.tags[_ngcontent-%COMP%] {\n  display: inline-block;\n  list-style-type: none;\n  text-align: center;\n}\n.tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 20px;\n  margin: 5px;\n  background: #081230;\n  color: #45D3D1;\n  border: 1px #274D7C solid;\n  border-radius: 5px;\n}\n.terminalCommand[_ngcontent-%COMP%]:before {\n  content: none;\n}\n.terminalBody[_ngcontent-%COMP%] {\n  text-align: left;\n  filter: opacity(100%);\n  margin: 5px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.description[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px #274D7C solid;\n  border-radius: 5px;\n  margin: 10px;\n  padding: 10px;\n  flex-basis: 30%;\n  position: relative;\n}\n@media (max-width: 1000px) {\n  .terminalBody[_ngcontent-%COMP%] {\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .tags[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  margin: 5px;\n}\np[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxzY3JlZW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGVybWluYWxcXHRlcm1pbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBT0E7RUFDSSxZQUFBO0FDTEo7QURRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBVEs7QUNJVDtBRFRBLDhFQUFBO0FBT0E7RUFDSSxZQUFBO0FDTUo7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBVEs7QUNlVDtBQ2hCQTtFQUNJLHNCQUFBO0VBQ0EsbUJBSmlCO0VBS2pCLGNGTE07RUVNTix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRG1CSjtBQ2hCQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRG1CSjtBQ2hCQTtFQUNJLG1CRm5CUTtFRW9CUixjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRG1CSjtBQ2hCQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRG1CSjtBQ2hCQTtFQUNJLFdBQUE7QURtQko7QUNoQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBRG1CSjtBQ2hCQTtFQUNJLGtCQUFBO0FEbUJKO0FDaEJBO0VBQ0ksa0JBQUE7QURtQko7QUNoQkE7RUFDSSxtQkFBQTtBRG1CSjtBQ2hCQTtFQUNJLHFCQUFBO0FEbUJKO0FDaEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FEbUJKO0FDakJBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FEb0JKO0FDakJBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VEb0JOOztFQ2xCRTtJQUNJLGNBQUE7RURxQk47O0VDbkJFO0lBQ0ksYUFBQTtFRHNCTjs7RUNwQkU7SUFDSSxjQUFBO0VEdUJOO0FBQ0Y7QUF2R0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQVJpQjtFQVNqQixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNEYk07RUNjTixzQkFBQTtFQUNBLGdCQUFBO0FBeUdKO0FBdEdBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQXlHSjtBQXRHQTtFQUNJLG1CRHRCSztFQ3VCTCxVQUFBO0FBeUdKO0FBdEdBO0VBQ0ksbUJEOUJNO0VDK0JOLFVBQUE7RUFDQSxtQkFBQTtBQXlHSjtBQW5HQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQXNHSjtBQW5HQTtFQUNJLGFBQUE7QUFzR0o7QUFuR0E7RUFDSSxxQkFBQTtBQXNHSjtBQWxHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRHZETTtFQ3dETix1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F6RGlCO0VBMERqQixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFxR0o7QUFsR0E7RUFDSSxxQkFBQTtFQUNBLGNBakVpQjtBQXNLckI7QUFsR0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFxR0o7QUFsR0E7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQTlFaUI7RUErRWpCLGNEaEZNO0VDaUZOLHlCQUFBO0VBQ0Esa0JBQUE7QUFxR0o7QUFsR0E7RUFDSSxhQUFBO0FBcUdKO0FBbEdBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBcUdKO0FBbEdBO0VBQ0ksWUFBQTtBQXFHSjtBQWxHQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFxR0o7QUFsR0E7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsZUFBQTtFQXFHTjs7RUFsR0U7SUFDSSxhQUFBO0VBcUdOO0FBQ0Y7QUFsR0E7RUFDSSxhQUFBO0FBb0dKO0FBakdBO0VBQ0ksV0FBQTtBQW9HSjtBQWpHQTtFQUNJLFdBQUE7QUFvR0o7QUFqR0E7RUFDSSxZQUFBO0FBb0dKIiwiZmlsZSI6InNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJHByaW1hcnk6ICM0NUQzRDE7XG4kc2Vjb25kYXJ5OiAjMjc0RDdDO1xuJGFjY2VudDogI2ZiZjIzNjtcbiRtaWRkbGU6ICMxMzIwNDk7XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRtaWRkbGU7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxMzIwNDk7XG59XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTMyMDQ5O1xufVxuXG4udGVybWluYWwge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBiYWNrZ3JvdW5kOiAjMDgxMjMwO1xuICBjb2xvcjogIzQ1RDNEMTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzI3NEQ3QztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmxleDogMSBhdXRvO1xufVxuXG4udGVybWluYWxMaW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRlcm1pbmFsVGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjMjc0RDdDO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi50ZXJtaW5hbEJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmaWx0ZXI6IG9wYWNpdHkoMjUlKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDJzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi50ZXJtaW5hbEJvZHkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXJtaW5hbEJvZHkgLnByZXZpZXcge1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi50ZXJtaW5hbEJvZHkgLmhvdmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udGVybWluYWxCb2R5OmhvdmVyIC5wcmV2aWV3IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udGVybWluYWxCb2R5OmhvdmVyIC5ob3ZlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50ZXJtaW5hbEJvZHk6aG92ZXIge1xuICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XG59XG5cbi50ZXJtaW5hbENvbW1hbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiJDpcIjtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLnRlcm1pbmFsQ29tbWFuZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjc0RDdDO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRlcm1pbmFsIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICB9XG5cbiAgLnRlcm1pbmFsVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgLnRlcm1pbmFsQ29tbWFuZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC50ZXJtaW5hbEJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uc2NyZWVuIHtcbiAgbWFyZ2luOiAzJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzI3NEQ3QztcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCAjMjc0RDdDO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDgxMjMwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQ1RDNEMTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnR3aXR0ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBiYWNrZ3JvdW5kOiAjMTMyMDQ5O1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzQ1RDNEMTtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRlcm1pbmFsIHtcbiAgbWFyZ2luOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJ1dHRvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCIkOlwiO1xufVxuXG4uYnV0dG9ucyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmJ1dHRvbnMgbGkge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBiYWNrZ3JvdW5kOiAjNDVEM0QxO1xuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzA4MTIzMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9ucyBsaSBhLCAuYnV0dG9ucyBsaSBhOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDgxMjMwO1xufVxuXG4udGFncyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWdzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwODEyMzA7XG4gIGNvbG9yOiAjNDVEM0QxO1xuICBib3JkZXI6IDFweCAjMjc0RDdDIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50ZXJtaW5hbENvbW1hbmQ6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxuLnRlcm1pbmFsQm9keSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiAxcHggIzI3NEQ3QyBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsZXgtYmFzaXM6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC50ZXJtaW5hbEJvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLnRhZ3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zZWN0aW9uIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWN0aW9uIC5ib2R5IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbnAge1xuICBwYWRkaW5nOiA1cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuJHRlcm1pbmFsQmFja2dyb3VuZDogIzA4MTIzMDtcclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgYmFja2dyb3VuZDogJHRlcm1pbmFsQmFja2dyb3VuZDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICRzZWNvbmRhcnk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMSBhdXRvO1xyXG59XHJcblxyXG4udGVybWluYWxMaW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGVybWluYWxUaXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5O1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi50ZXJtaW5hbEJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZpbHRlcjogb3BhY2l0eSgyNSUpO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDJzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLnRlcm1pbmFsQm9keSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXJtaW5hbEJvZHkgLnByZXZpZXcge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4udGVybWluYWxCb2R5IC5ob3ZlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi50ZXJtaW5hbEJvZHk6aG92ZXIgLnByZXZpZXcge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4udGVybWluYWxCb2R5OmhvdmVyIC5ob3ZlciB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4udGVybWluYWxCb2R5OmhvdmVyIHtcclxuICAgIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcclxufVxyXG5cclxuLnRlcm1pbmFsQ29tbWFuZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiJDpcIjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnRlcm1pbmFsQ29tbWFuZCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHNlY29uZGFyeTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLnRlcm1pbmFsVGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICB9XHJcbiAgICAudGVybWluYWxDb21tYW5kIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRlcm1pbmFsQnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-screen',
                templateUrl: './screen.component.html',
                styleUrls: ['./screen.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminal/terminal.component */ "aTv0");
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen/screen.component */ "YbDW");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-twitter-timeline */ "MkFp");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_8__["NgxTwitterTimelineModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__["TerminalComponent"],
        _screen_screen_component__WEBPACK_IMPORTED_MODULE_6__["ScreenComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_8__["NgxTwitterTimelineModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__["TerminalComponent"],
                    _screen_screen_component__WEBPACK_IMPORTED_MODULE_6__["ScreenComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_8__["NgxTwitterTimelineModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aTv0":
/*!************************************************!*\
  !*** ./src/app/terminal/terminal.component.ts ***!
  \************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TerminalComponent {
    constructor() { }
    ngOnInit() {
    }
}
TerminalComponent.ɵfac = function TerminalComponent_Factory(t) { return new (t || TerminalComponent)(); };
TerminalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminalComponent, selectors: [["app-terminal"]], inputs: { path: "path", hover: "hover", name: "name", description: "description" }, decls: 8, vars: 6, consts: [[1, "terminal"], [1, "terminalTitle"], [1, "terminalBody"], [1, "hover", 3, "src", "alt"], [1, "preview", 3, "src", "alt"], [1, "terminalCommand"]], template: function TerminalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.hover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Hover Image of ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Preview of ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: ["html[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 100%;\n  background: #132049;\n}\n.terminal[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background: #081230;\n  color: #45D3D1;\n  border: 3px solid #274D7C;\n  border-radius: 10px;\n  font-size: 12px;\n  margin: 15px;\n  max-width: 100%;\n  flex: 1 auto;\n}\n.terminalLine[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n}\n.terminalTitle[_ngcontent-%COMP%] {\n  background: #274D7C;\n  padding: 0.5em;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n.terminalBody[_ngcontent-%COMP%] {\n  display: flex;\n  filter: opacity(25%);\n  transition: filter 2s;\n  text-align: center;\n  object-fit: contain;\n}\n.terminalBody[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.terminalBody[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  z-index: 99;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.terminalBody[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.terminalBody[_ngcontent-%COMP%]:hover   .preview[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.terminalBody[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.terminalBody[_ngcontent-%COMP%]:hover {\n  filter: opacity(100%);\n}\n.terminalCommand[_ngcontent-%COMP%]::before {\n  content: \"$:\";\n  padding-right: 15px;\n}\n.terminalCommand[_ngcontent-%COMP%] {\n  border-top: 1px solid #274D7C;\n  padding: 1em;\n}\n@media (max-width: 1000px) {\n  .terminal[_ngcontent-%COMP%] {\n    min-width: 150px;\n    position: inherit;\n  }\n\n  .terminalTitle[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .terminalCommand[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .terminalButtons[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFx0ZXJtaW5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQU9BO0VBQ0ksWUFBQTtBQ0xKO0FEUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQVRLO0FDSVQ7QUFMQTtFQUNJLHNCQUFBO0VBQ0EsbUJBSmlCO0VBS2pCLGNETE07RUNNTix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFRSjtBQUxBO0VBQ0ksbUJEbkJRO0VDb0JSLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUUo7QUFMQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVFKO0FBTEE7RUFDSSxXQUFBO0FBUUo7QUFMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBUUo7QUFMQTtFQUNJLGtCQUFBO0FBUUo7QUFMQTtFQUNJLGtCQUFBO0FBUUo7QUFMQTtFQUNJLG1CQUFBO0FBUUo7QUFMQTtFQUNJLHFCQUFBO0FBUUo7QUFMQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVFKO0FBTkE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7QUFTSjtBQU5BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VBU047O0VBUEU7SUFDSSxjQUFBO0VBVU47O0VBUkU7SUFDSSxhQUFBO0VBV047O0VBVEU7SUFDSSxjQUFBO0VBWU47QUFDRiIsImZpbGUiOiJ0ZXJtaW5hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJHByaW1hcnk6ICM0NUQzRDE7XG4kc2Vjb25kYXJ5OiAjMjc0RDdDO1xuJGFjY2VudDogI2ZiZjIzNjtcbiRtaWRkbGU6ICMxMzIwNDk7XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRtaWRkbGU7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxMzIwNDk7XG59XG5cbi50ZXJtaW5hbCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGJhY2tncm91bmQ6ICMwODEyMzA7XG4gIGNvbG9yOiAjNDVEM0QxO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMjc0RDdDO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMTVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmbGV4OiAxIGF1dG87XG59XG5cbi50ZXJtaW5hbExpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGVybWluYWxUaXRsZSB7XG4gIGJhY2tncm91bmQ6ICMyNzREN0M7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnRlcm1pbmFsQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZpbHRlcjogb3BhY2l0eSgyNSUpO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMnM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnRlcm1pbmFsQm9keSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRlcm1pbmFsQm9keSAucHJldmlldyB7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnRlcm1pbmFsQm9keSAuaG92ZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi50ZXJtaW5hbEJvZHk6aG92ZXIgLnByZXZpZXcge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi50ZXJtaW5hbEJvZHk6aG92ZXIgLmhvdmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnRlcm1pbmFsQm9keTpob3ZlciB7XG4gIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcbn1cblxuLnRlcm1pbmFsQ29tbWFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIkOlwiO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4udGVybWluYWxDb21tYW5kIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyNzREN0M7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAudGVybWluYWwge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgcG9zaXRpb246IGluaGVyaXQ7XG4gIH1cblxuICAudGVybWluYWxUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAudGVybWluYWxDb21tYW5kIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRlcm1pbmFsQnV0dG9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terminal',
                templateUrl: './terminal.component.html',
                styleUrls: ['./terminal.component.scss']
            }]
    }], function () { return []; }, { path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen/screen.component */ "YbDW");





const routes = [
    { path: 'portfolio/:project', component: _screen_screen_component__WEBPACK_IMPORTED_MODULE_2__["ScreenComponent"] },
    { path: ':project', component: _screen_screen_component__WEBPACK_IMPORTED_MODULE_2__["ScreenComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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