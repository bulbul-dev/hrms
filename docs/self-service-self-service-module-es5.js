(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["self-service-self-service-module"], {
    /***/
    "/RJo":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/onTour/edit/edit.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RJo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">On Tour</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\r\n                    <li class=\"breadcrumb-item active\">Self Service</li>\r\n                    <li class=\"breadcrumb-item active\">On Tour</li>\r\n                    <li class=\"breadcrumb-item active\">Edit</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a class=\"btn add-btn\" routerLink=\"/sefl-service/onTour\"><i class=\"fa fa-share\"></i> Back To List</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <!-- <div class=\"card-header\"> -->\r\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\r\n                <!-- </div>  -->\r\n                <div class=\"card-body\">\r\n                    <form novalidate (ngSubmit)=\"saveUpdatedFormData()\" [formGroup]=\"myForm\">\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData\" formControlName=\"hrCrEmp\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <!-- <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Employee</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\" value=\"{{user.loginCode}} [ {{user.firstName}}]\"  disabled>\r\n\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Contact No</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"contactNo\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Responsible Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData2\" formControlName=\"hrCrEmpResponsible\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Tour Type</label>\r\n                            <div class=\"col-md-10\">\r\n                                <select class=\"form-control\" formControlName=\"tourType\">\r\n                                    <option value=\"\">Select</option>\r\n                                    <option value=\"Local\">Local</option>\r\n                                    <option value=\"Global\">Global</option>\r\n                                   \r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Start Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control datetimepicker\" formControlName=\"startDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">End Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control\"  formControlName=\"endDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Total Tour Days</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"tourDays\">\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Address During Tour</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"addressDuringTour\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Reason For Tour</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"reasonForTour\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Remarks</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"remarks\"></textarea>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/sefl-service/onTour\"><i class=\"fa fa-share\"></i> Cancel</a>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\r\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\r\n                            </button>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\r\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\r\n                            </button>\r\n                        </div>\r\n\r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "7K3g":
    /*!*****************************************************************!*\
      !*** ./src/app/all-modules/self-service/self-service.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SelfServiceModule */

    /***/
    function K3g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelfServiceModule", function () {
        return SelfServiceModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _self_service_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./self-service-routing.module */
      "i6Ad");
      /* harmony import */


      var _sefl_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sefl-service.component */
      "b/5i");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "oW1M");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var primeng_picklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/picklist */
      "iHf9");
      /* harmony import */


      var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/sharing/sharing.module */
      "0jEk");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _components_onTour_on_tour_on_tour_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/onTour/on-tour/on-tour.component */
      "TpwZ");
      /* harmony import */


      var _components_onTour_create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/onTour/create/create.component */
      "npDT");
      /* harmony import */


      var _components_onTour_view_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/onTour/view/view.component */
      "wxxu");
      /* harmony import */


      var _components_onTour_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/onTour/edit/edit.component */
      "YD5p");
      /* harmony import */


      var _components_leaves_leaves_employee_leaves_employee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/leaves/leaves-employee/leaves-employee.component */
      "Ml0r");
      /* harmony import */


      var _components_leaves_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/leaves/create-leave/create-leave.component */
      "ygoH");
      /* harmony import */


      var _components_leaves_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/leaves/edit-leave/edit-leave.component */
      "C3nt");
      /* harmony import */


      var _components_leaves_view_leave_view_leave_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/leaves/view-leave/view-leave.component */
      "Bvlr");

      var SelfServiceModule = function SelfServiceModule() {
        _classCallCheck(this, SelfServiceModule);
      };

      SelfServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sefl_service_component__WEBPACK_IMPORTED_MODULE_4__["SelfServiceComponent"], _components_onTour_on_tour_on_tour_component__WEBPACK_IMPORTED_MODULE_12__["OnTourComponent"], _components_onTour_create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"], _components_onTour_view_view_component__WEBPACK_IMPORTED_MODULE_14__["ViewComponent"], _components_onTour_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"], _components_leaves_leaves_employee_leaves_employee_component__WEBPACK_IMPORTED_MODULE_16__["LeavesEmployeeComponent"], _components_leaves_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_17__["CreateLeaveComponent"], _components_leaves_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_18__["EditLeaveComponent"], _components_leaves_view_leave_view_leave_component__WEBPACK_IMPORTED_MODULE_19__["ViewLeaveComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _self_service_routing_module__WEBPACK_IMPORTED_MODULE_3__["SelfServiceRoutingModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_10__["SharingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_9__["PickListModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]]
      })], SelfServiceModule);
      /***/
    },

    /***/
    "9aJp":
    /*!*********************************************************************!*\
      !*** ./src/app/all-modules/self-service/service/on-tour.service.ts ***!
      \*********************************************************************/

    /*! exports provided: OnTourService */

    /***/
    function aJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTourService", function () {
        return OnTourService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var OnTourService = /*#__PURE__*/function () {
        function OnTourService(http) {
          _classCallCheck(this, OnTourService);

          this.http = http;
        }

        _createClass(OnTourService, [{
          key: "sendGetSelfRequest",
          value: function sendGetSelfRequest(apiURL, queryParams) {
            console.log("@sendGetSelfRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "sendPostRequest",
          value: function sendPostRequest(apiURL, formData) {
            console.log("@sendPostRequest");
            return this.http.post(apiURL, formData);
          }
        }, {
          key: "sendGetRequest",
          value: function sendGetRequest(apiURL, queryParams) {
            console.log("@sendGetRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "sendDeleteRequest",
          value: function sendDeleteRequest(apiURL, formData) {
            console.log("@sendDeleteRequest");
            return this.http["delete"](apiURL, formData);
          }
        }]);

        return OnTourService;
      }();

      OnTourService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      OnTourService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], OnTourService);
      /***/
    },

    /***/
    "AuF9":
    /*!********************************************************************!*\
      !*** ./src/app/all-modules/employees/services/employee.service.ts ***!
      \********************************************************************/

    /*! exports provided: EmployeeService */

    /***/
    function AuF9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(http) {
          _classCallCheck(this, EmployeeService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        } // Get Employee  Api Call


        _createClass(EmployeeService, [{
          key: "getEmployees",
          value: function getEmployees() {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/empList"));
          } // get empList list view 

        }, {
          key: "getEmpListView",
          value: function getEmpListView(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } // Get Employee via paginations

        }, {
          key: "sendGetRequest",
          value: function sendGetRequest(apiURL, queryParams) {
            console.log("@sendGetRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } // create HrCrEmp  Api Call

        }, {
          key: "createEmploy",
          value: function createEmploy(emp) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmp/create"), emp);
          } //update HrCrEmp Api Call

        }, {
          key: "updateEmploy",
          value: function updateEmploy(data) {
            // return this.http.put(`${baseUrl}/hrCrEmp/update`, data);
            return this.http.put("".concat(this.baseUrl, "/hrCrEmp/edit"), data);
          } // Get employee By id 

        }, {
          key: "getEmployeeById",
          value: function getEmployeeById(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/get/").concat(id)); //return this.http.get(`${baseUrl}/hrCrEmp/get/${id}`);
          } // Get employee By id 

        }, {
          key: "findEmployeeById",
          value: function findEmployeeById(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/find/").concat(id)); //return this.http.get(`${baseUrl}/hrCrEmp/get/${id}`);
          } //get employee by loginCode

        }, {
          key: "getEmployeeByLoginCode",
          value: function getEmployeeByLoginCode(loginCode) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/findByLoginCode/").concat(loginCode));
          } //upload profile image file

        }, {
          key: "uploadProfileImage",
          value: function uploadProfileImage(id, formData) {
            return this.http.post("".concat(this.baseUrl, "/multimedia/profile/").concat(id), formData);
          } // Get ALKP Search By Keyword Api Call

        }, {
          key: "getAlkpSearchByKeyword",
          value: function getAlkpSearchByKeyword(keyword) {
            return this.http.get("".concat(this.baseUrl, "/alkp/search/").concat(keyword));
          } //save employee assignemnt data 

        }, {
          key: "saveEmployeeAssignemntData",
          value: function saveEmployeeAssignemntData(data) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/create"), data);
          } //save employee assignemnt data 
          //  public saveEmployeeAssignemntData2(data){
          //   return this.http.post(`${baseUrl}/hrCrEmpAssgnmnt/save`,data);
          // }
          //update employeeAssignment 

        }, {
          key: "updateEmployeeAssignment",
          value: function updateEmployeeAssignment(data) {
            return this.http.put("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/edit"), data);
          } // get last assignment by HrCrEmpId

        }, {
          key: "getLastAssignmentByHrCrEmpId",
          value: function getLastAssignmentByHrCrEmpId(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/getByHrCrEmp/").concat(id));
          } // get employee assignment By Id 

        }, {
          key: "getEmployeeAssignmentByHrCrEmpId",
          value: function getEmployeeAssignmentByHrCrEmpId(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/getByHrCrEmpId/").concat(id));
          } //save or update emp bank and payroll tabs data 

        }, {
          key: "saveOrUpdateBankAndPayroll",
          value: function saveOrUpdateBankAndPayroll(data) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/saveBankAndPayroll"), data);
          } // get designation

        }, {
          key: "getDesignations",
          value: function getDesignations() {
            return this.http.get("".concat(this.baseUrl, "/designation/getAll"));
          } // Get All ALKP Api Call 

        }, {
          key: "getALLDivisions",
          value: function getALLDivisions(id) {
            return this.http.get("".concat(this.baseUrl, "/address/division/").concat(id));
          }
        }, {
          key: "fetchAllDivision",
          value: function fetchAllDivision() {
            return this.http.get("".concat(this.baseUrl, "/address/division/getAll"));
          }
        }, {
          key: "getDistrictByDivId",
          value: function getDistrictByDivId(id) {
            return this.http.get("".concat(this.baseUrl, "/address/division/").concat(id));
          }
        }, {
          key: "getAllDistrict",
          value: function getAllDistrict(apiURL, queryParams) {
            console.log("@getAllDistrict");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "getAllUpazila",
          value: function getAllUpazila(apiURL, queryParams) {
            console.log("@getAllUpazila");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "getAllUnions",
          value: function getAllUnions(apiURL, queryParams) {
            console.log("@sendGetRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } // save hrCrEmpEdu informations

        }, {
          key: "saveHrCrEmpEdu",
          value: function saveHrCrEmpEdu(data) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmpEdu/create"), data);
          } //find by empId

        }, {
          key: "findhrCrEmpEduByEmpId",
          value: function findhrCrEmpEduByEmpId(empId) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpEdu/find/").concat(empId));
          } //find byId

        }, {
          key: "findhrCrEmpEduById",
          value: function findhrCrEmpEduById(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpEdu/get/").concat(id));
          } //edit employee education 

        }, {
          key: "edithrCrEmpEducation",
          value: function edithrCrEmpEducation(data) {
            return this.http.put("".concat(this.baseUrl, "/hrCrEmpEdu/edit"), data);
          } //delete emp education

        }, {
          key: "deleteHrCrEmpEducation",
          value: function deleteHrCrEmpEducation(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/hrCrEmpEdu/delete/").concat(id));
          } //Get Raw Attendance data from Device

        }, {
          key: "getAllRawAttendanceData",
          value: function getAllRawAttendanceData() {
            return this.http.get("".concat(this.baseUrl, "/attn/findAllBySrcType"));
          }
        }, {
          key: "getAllRawAttendanceData2",
          value: function getAllRawAttendanceData2(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } //Post viaHrAttn

        }, {
          key: "createAttnViaHr",
          value: function createAttnViaHr(data) {
            return this.http.post("".concat(this.baseUrl, "/AttnViaHr/save"), data);
          } //Get viaHrAttn Attendance data from

        }, {
          key: "getAllViaHrAttnData",
          value: function getAllViaHrAttnData() {
            return this.http.get("".concat(this.baseUrl, "/AttnViaHr/findAllBySrcType"));
          }
        }, {
          key: "getAllViaHrAttnData2",
          value: function getAllViaHrAttnData2(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "getSearchAttn",
          value: function getSearchAttn(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } //Leave related api
          //crearte leave tenc

        }, {
          key: "createLeave",
          value: function createLeave(data) {
            return this.http.post("".concat(this.baseUrl, "/leaveTrnse/save"), data);
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], EmployeeService);
      /***/
    },

    /***/
    "BBik":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/onTour/view/view.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BBik(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">On Tour</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Self-service</li>\n                    <li class=\"breadcrumb-item active\">OnTour</li>\n                    <li class=\"breadcrumb-item active\">Show</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/sefl-service/onTour\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n              \n                <div class=\"card-body\">\n\n                   \n                        \n                        <fieldset class=\"row fieldsetWithoutBorder\">\n                            <legend></legend>\n                            <div class=\"col-12\">\n    \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Employee</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.hrCrEmp.displayName}} (Code:{{myData.hrCrEmp.loginCode}}) </span>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Responsible Employee</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.hrCrEmpResponsible.displayName}} (Code:{{myData.hrCrEmpResponsible.loginCode}}) </span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Tour Type</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.tourType}}</span>\n                                    </div>\n                                </div>\n                                \n                                \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Start Date</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.startDate|date:'yyyy-MM-dd'}}</span>\n                                    </div>\n                                </div>\n        \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">End Date</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.endDate|date:'yyyy-MM-dd'}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Total Days</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.tourDays}}</span>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Tour Location</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.addressDuringTour}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Couse Of Tour</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.reasonForTour}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Remarks</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.remarks}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Approval Status</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myData.tourApprovalStatus}}</span>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </fieldset>\n\n\n                        <fieldset class=\"row fieldsetBorder logBox\">\n                            <legend>System Log Information</legend>\n\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">ID</label>\n                                <div class=\"\">\n                                    <span>{{myData.id}}</span>\n                                </div>\n                            </div>\n                           \n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Creation Time</label>\n                                <div class=\"\">\n                                    <span>{{myData.createDate}}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Creation User</label>\n                                <div class=\"\">\n                                    <span>{{myData.createdByHrCrEmp.user.username}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Last Update Time</label>\n                                <div class=\"\">\n                                    <span>{{myData.updateDateTime}}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Last Update User</label>\n                                <div class=\"\">\n                                    <span>{{myData.lastUpdateUser}}</span>\n                                </div>\n                            </div>\n\n                        </fieldset>\n\n                        <div class=\"text-right\">\n                            <a class=\"btn btn-primary btn-ripple\" routerLink=\"/sefl-service/onTour\"><i class=\"fa fa-share\"></i> Close</a>\n                            &nbsp;\n                        </div>\n\n                       \n                   \n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n\n";
      /***/
    },

    /***/
    "BIF1":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/onTour/create/create.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BIF1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">On Tour</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\r\n                    <li class=\"breadcrumb-item active\">Self Service</li>\r\n                    <li class=\"breadcrumb-item active\">On Tour</li>\r\n                    <li class=\"breadcrumb-item active\">Create</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a class=\"btn add-btn\" routerLink=\"/sefl-service/onTour\"><i class=\"fa fa-share\"></i> Back To List</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <!-- <div class=\"card-header\"> -->\r\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\r\n                <!-- </div>  -->\r\n                <div class=\"card-body\">\r\n                    <form novalidate (ngSubmit)=\"myFormSubmit()\" [formGroup]=\"myForm\">\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData\" formControlName=\"hrCrEmp\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                   \r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <!-- <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Employee</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\" value=\"{{user.loginCode}} [ {{user.firstName}}]\"  disabled>\r\n\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Contact No</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"contactNo\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Responsible Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData\" formControlName=\"hrCrEmpResponsible\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Tour Type</label>\r\n                            <div class=\"col-md-10\">\r\n                                <select class=\"form-control\" formControlName=\"tourType\">\r\n                                    <option value=\"\">Select</option>\r\n                                    <option value=\"Local\">Local</option>\r\n                                    <option value=\"Global\">Global</option>\r\n                                   \r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Start Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control datetimepicker\" formControlName=\"startDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">End Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control\"  formControlName=\"endDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Total Tour Days</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"tourDays\">\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Address During Tour</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"addressDuringTour\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Reason For Tour</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"reasonForTour\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Remarks</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"remarks\"></textarea>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/sefl-service/onTour\"><i class=\"fa fa-share\"></i> Cancel</a>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\r\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\r\n                            </button>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\r\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\r\n                            </button>\r\n                        </div>\r\n\r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "Bvlr":
    /*!***********************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/view-leave/view-leave.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ViewLeaveComponent */

    /***/
    function Bvlr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewLeaveComponent", function () {
        return ViewLeaveComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_leave_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-leave.component.html */
      "x+8Z");
      /* harmony import */


      var _view_leave_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-leave.component.css */
      "TPrK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_leave_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../service/leave.service */
      "LXE+");

      var ViewLeaveComponent = /*#__PURE__*/function () {
        function ViewLeaveComponent(route, spinnerService, leaveService) {
          _classCallCheck(this, ViewLeaveComponent);

          this.route = route;
          this.spinnerService = spinnerService;
          this.leaveService = leaveService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
          this.myData = {};
        }

        _createClass(ViewLeaveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getFormData();
          }
        }, {
          key: "getFormData",
          value: function getFormData() {
            var _this = this;

            var id = this.route.snapshot.params.id;
            var apiURL = this.baseUrl + "/leaveTrnse/get/" + id;
            var queryParams = {};
            this.spinnerService.show();
            this.leaveService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              _this.myData = response;
              console.log(_this.myData);

              _this.spinnerService.hide();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return ViewLeaveComponent;
      }();

      ViewLeaveComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }, {
          type: _service_leave_service__WEBPACK_IMPORTED_MODULE_7__["LeaveService"]
        }];
      };

      ViewLeaveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-leave',
        template: _raw_loader_view_leave_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_leave_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _service_leave_service__WEBPACK_IMPORTED_MODULE_7__["LeaveService"]])], ViewLeaveComponent);
      /***/
    },

    /***/
    "C3nt":
    /*!***********************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/edit-leave/edit-leave.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: EditLeaveComponent */

    /***/
    function C3nt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditLeaveComponent", function () {
        return EditLeaveComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_leave_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-leave.component.html */
      "tBOO");
      /* harmony import */


      var _edit_leave_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-leave.component.css */
      "oIAc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/all-modules/settings/common/services/common.service */
      "xrk7");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_leave_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../service/leave.service */
      "LXE+");

      var EditLeaveComponent = /*#__PURE__*/function () {
        function EditLeaveComponent(formBuilder, datePipe, route, router, leaveService, toastr, spinnerService, commonService) {
          _classCallCheck(this, EditLeaveComponent);

          this.formBuilder = formBuilder;
          this.datePipe = datePipe;
          this.route = route;
          this.router = router;
          this.leaveService = leaveService;
          this.toastr = toastr;
          this.spinnerService = spinnerService;
          this.commonService = commonService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].baseUrl;
          this.myFormData = {};
          this.leaveList = [];

          this._initConfigDDL();

          this._customInitLoadData();
        }

        _createClass(EditLeaveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.getFormData();
            this.loadAlkpLeave();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.myForm = this.formBuilder.group({
              id: [""],
              hrCrEmp: [""],
              contactNo: [""],
              hrCrEmpResponsible: [""],
              alkpLeaveType: [""],
              startDate: [""],
              endDate: [""],
              // leaveDays: [""],
              addressDuringLeave: [""],
              reasonForLeave: [""],
              remarks: [""]
            });
          }
        }, {
          key: "loadAlkpLeave",
          value: function loadAlkpLeave() {
            var _this2 = this;

            this.commonService.getAlkpByKeyword("LEAVETYPE").subscribe(function (data) {
              _this2.alkpLeave = data;
              _this2.leaveList = _this2.alkpLeave.subALKP;
              console.log(_this2.leaveList);
            });
          }
        }, {
          key: "getFormData",
          value: function getFormData() {
            var _this3 = this;

            var id = this.route.snapshot.params.id;
            var apiURL = this.baseUrl + "/leaveTrnse/get/" + id;
            var queryParams = {};
            this.spinnerService.show();
            this.leaveService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              _this3.myFormData = response;
              console.log(_this3.myFormData);

              _this3.spinnerService.hide(); // field 1


              var hrCrEmpVal = [{
                ddlCode: response.hrCrEmp.id,
                ddlDescription: response.hrCrEmp.loginCode + "-" + response.hrCrEmp.displayName
              }];
              _this3.configDDL.listData = hrCrEmpVal;
              _this3.myFormData.hrCrEmp = response.hrCrEmp.id; // field 2

              var hrCrEmpResponsibleVal = [{
                ddlCode: response.hrCrEmpResponsible.id,
                ddlDescription: response.hrCrEmpResponsible.loginCode + "-" + response.hrCrEmpResponsible.displayName
              }];
              _this3.configDDL.listData2 = hrCrEmpResponsibleVal;
              _this3.myFormData.hrCrEmpResponsible = response.hrCrEmpResponsible.id; //set date

              _this3.myFormData.startDate = _this3.datePipe.transform(response.startDate, "MM-dd-yyyy").toString().slice(0, 10);
              _this3.myFormData.endDate = _this3.datePipe.transform(response.endDate, "MM-dd-yyyy").toString().slice(0, 10);
              ; //set leave type

              _this3.myFormData.alkpLeaveType = response.alkpLeaveType.id;

              _this3.myForm.patchValue(_this3.myFormData);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "saveUpdatedFormData",
          value: function saveUpdatedFormData() {
            var _this4 = this;

            if (this.checkSomeCondition()) {
              return;
            }

            var leaveTrx = Object.assign(this.myForm.value, {
              hrCrEmp: this.getHrCrEmp.value ? {
                id: this.getHrCrEmp.value
              } : null,
              hrCrEmpResponsible: this.getHrCrResponsibleEmp.value ? {
                id: this.getHrCrResponsibleEmp.value
              } : null,
              alkpLeaveType: this.getAlkpLeaveId.value ? {
                id: this.getAlkpLeaveId.value
              } : null
            });
            var apiURL = this.baseUrl + "/leaveTrnse/save";
            var formData = {};
            formData = leaveTrx; // process date

            formData.startDate = formData.startDate ? this.datePipe.transform(formData.startDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            formData.endDate = formData.endDate ? this.datePipe.transform(formData.endDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            this.leaveService.sendPostRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this4.router.navigate(["/sefl-service/employeeleaves"], {
                relativeTo: _this4.route
              });
            }, function (error) {
              console.log(error);

              _this4.toastr.error(error.error.message);
            });
          }
        }, {
          key: "checkSomeCondition",
          value: function checkSomeCondition() {
            //check ml is applicable or not
            if (this.myForm.value.alkpLeaveType == 57) {
              var toDate = new Date();

              if (this.myForm.value.startDate > toDate || this.myForm.value.endDate > toDate) {
                this.toastr.info("ML is not created");
                return true;
              } else {
                return false;
              }
            } //check end date getter thn start date


            if (this.myForm.value.startDate > this.myForm.value.endDate) {
              this.toastr.error("End Date must be equal or greater");
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "resetFormValues",
          value: function resetFormValues() {
            //this.myForm.reset();
            this.getFormData();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods Start -----------------------------------

        }, {
          key: "searchDDL",
          value: function searchDDL(event) {
            var q = event.term;
            this.configDDL.q = q;
            this.configDDL.pageNum = 1;
            this.configDDL.append = false;
            this.getListDataDDL();
          }
        }, {
          key: "scrollToEndDDL",
          value: function scrollToEndDDL() {
            this.configDDL.pageNum++;
            this.configDDL.append = true;
            this.getListDataDDL();
          }
        }, {
          key: "_customInitLoadData",
          value: function _customInitLoadData() {
            this.configDDL.activeFieldName = "ddlDescription";
            this.configDDL.dataGetApiPath = "/api/common/getEmp";
            this.configDDL.apiQueryFieldName = "hrCrEmp"; // this.getListDataDDL();
          }
        }, {
          key: "clearDDL",
          value: function clearDDL() {
            this.configDDL.q = "";
          }
        }, {
          key: "getListDataDDL",
          value: function getListDataDDL() {
            var _this5 = this;

            var apiURL = this.baseUrl + this.configDDL.dataGetApiPath;
            var queryParams = {};
            queryParams.pageNum = this.configDDL.pageNum;
            queryParams.pageSize = this.configDDL.pageSize;

            if (this.configDDL.q && this.configDDL.q != null) {
              queryParams[this.configDDL.apiQueryFieldName] = this.configDDL.q;
            }

            this.commonService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              if (_this5.configDDL.append) {
                _this5.configDDL.listData = _this5.configDDL.listData.concat(response.objectList);
                _this5.configDDL.listData2 = _this5.configDDL.listData2.concat(response.objectList);
              } else {
                _this5.configDDL.listData = response.objectList;
                _this5.configDDL.listData2 = response.objectList;
              }

              _this5.configDDL.totalItem = response.totalItems;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "setDefaultParamsDDL",
          value: function setDefaultParamsDDL() {
            this._initConfigDDL();
          }
        }, {
          key: "_initConfigDDL",
          value: function _initConfigDDL() {
            this.configDDL = {
              pageNum: 1,
              pageSize: 10,
              totalItem: 50,
              listData: [],
              listData2: [],
              append: false,
              q: "",
              activeFieldName: "xxxFieldName",
              dataGetApiPath: "",
              apiQueryFieldName: "xxxFieldName"
            };
          }
        }, {
          key: "initSysParamsDDL",
          value: function initSysParamsDDL(event, activeFieldNameDDL, dataGetApiPathDDL, apiQueryFieldNameDDL) {
            console.log("...");
            console.log("ddlActiveFieldName:" + activeFieldNameDDL);
            console.log("dataGetApiPathDDL:" + dataGetApiPathDDL);
            console.log(event.target);

            if (this.configDDL.activeFieldName && this.configDDL.activeFieldName != activeFieldNameDDL) {
              this.setDefaultParamsDDL();
            }

            this.configDDL.activeFieldName = activeFieldNameDDL;
            this.configDDL.dataGetApiPath = dataGetApiPathDDL;
            this.configDDL.apiQueryFieldName = apiQueryFieldNameDDL;
            this.getListDataDDL();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods End -------------------------------------
          //-----------Get Relational Object Id ------------------

        }, {
          key: "getHrCrEmp",
          get: function get() {
            return this.myForm.get("hrCrEmp");
          }
        }, {
          key: "getHrCrResponsibleEmp",
          get: function get() {
            return this.myForm.get("hrCrEmpResponsible");
          }
        }, {
          key: "getAlkpLeaveId",
          get: function get() {
            return this.myForm.get("alkpLeaveType");
          }
        }]);

        return EditLeaveComponent;
      }();

      EditLeaveComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _service_leave_service__WEBPACK_IMPORTED_MODULE_11__["LeaveService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }, {
          type: src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]
        }];
      };

      EditLeaveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-leave',
        template: _raw_loader_edit_leave_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_leave_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_leave_service__WEBPACK_IMPORTED_MODULE_11__["LeaveService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])], EditLeaveComponent);
      /***/
    },

    /***/
    "CT56":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/onTour/on-tour/on-tour.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CT56(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">On Tour</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Self Service</li>\n                    <li class=\"breadcrumb-item active\">On Tour</li>\n                    <li class=\"breadcrumb-item active\">List</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <div class=\"btn-group btn-group\">\n                    <button class=\"btn btn-white\">Excel</button>\n                    <button class=\"btn btn-white\">PDF</button>\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <!-- Search Filter -->\n    <div class=\"card mb-2\" style=\"background-color:transparent;\">\n        <div class=\"card-body p-3\">\n\n            <div class=\"row filter-row\">\n\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-2 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <input type=\"text\" class=\"form-control floating\" >\n                        <label class=\"focus-label\">Employee Code</label>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <div class=\"cal-icon\">\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" >\n                        </div>\n                        <label class=\"focus-label\">From</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <div class=\"cal-icon\">\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" >\n                        </div>\n                        <label class=\"focus-label\">To</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <a  class=\"btn btn-success btn-block\"  > Search </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- /Search Filter -->\n\n\n    <!-- /Page Content -->\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"card\">\n\n                <div class=\"card-header\">\n                    <div class=\"card-tools\">\n                         <a routerLink = \"/sefl-service/create\" class=\"btn btn-outline-primary\"><i class=\"fa fa-plus\"></i> New &nbsp;&nbsp;&nbsp;</a>\n                    </div>\n                </div>\n\n                <div class=\"card-body\">\n\n                    <div class=\"table-responsive\">\n\n                        <div class=\"d-flex justify-content-start pb-1\">\n                            <div class=\"pgn-displayDataInfo\">\n                                <span class=\"page-item disabled\">Displaying ( {{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (1) ) }}  to {{configPgn.pngDiplayLastSeq}} of {{configPgn.totalItem}} ) entries</span>\n                            </div>\n                        </div>\n\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\" >\n                            <thead>\n                                <tr>\n                                    <th>SL</th>\n                                    <th>Tour Type</th>\n                                    <th>Total Days</th>\n                                    <th>Apply Date</th>\n                                    <th>From Date</th>\n                                    <th>To Date</th>\n                                    <th>Approval Status</th>\n                                    \n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let thisObj of listData | paginate : configPgn; let i = index\" [class.active]=\"i == currentIndex\">\n                                \n                                    <td>{{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (i+1) ) }}</td>\n                                    <td>{{thisObj.tourType}}</td>\n                                    <td>{{thisObj.tourDays}}</td>\n                                    <td>{{thisObj.createDate|date:'yyyy-MM-dd'}}</td>\n                                    <td>{{thisObj.startDate|date:'yyyy-MM-dd'}}</td>\n                                    <td>{{thisObj.endDate|date:'yyyy-MM-dd'}}</td>\n                                    <td>{{thisObj.tourApprovalStatus}}</td>\n                                   \n                                    <td>\n                                        <a class=\"btn btn-sm btn-primary\" routerLink = \"./view/{{thisObj.id}}\">View</a> &nbsp;\n                                        <a class=\"btn btn-sm btn-info\" routerLink = \"./edit/{{thisObj.id}}\"><i class=\"fa fa-pencil m-r-5\"></i></a>&nbsp;&nbsp;\n                                        <!-- <a class=\"btn btn-sm btn-danger\" (click)=\"deleteEnityData(thisObj.id)\"><i class=\"fa fa-trash-o m-r-5\"></i></a>&nbsp;&nbsp; -->\n                                        <a class=\"btn btn-sm btn-danger\"  \n                                        data-toggle=\"modal\"\n                                        data-target=\"#delete_entity\" \n                                        (click)=\"tempId = thisObj.id\">\n                                        <i class=\"fa fa-trash-o m-r-5\"></i>\n                                       </a>\n                                    </td>\n                                    \n                                </tr>\n\n                                <tr *ngIf=\"listData.length === 0\">\n                                    <td colspan=\"10\">\n                                        <h5 style=\"text-align: center;\">No data found</h5>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n                        <div class=\"d-flex justify-content-end \">\n\n                            <div class=\"\" >\n                                Items per Page\n                                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" >\n                                    <option *ngFor=\"let size of configPgn.pageSizes\" [value]=\"size\">\n                                        {{ size }}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <div class=\"pgn-pageSliceCt\">\n                                <pagination-controls \n                                    responsive=\"true\" \n                                    previousLabel=\"Prev\" \n                                    nextLabel=\"Next\" \n                                    (pageChange)=\"handlePageChange($event)\">\n                                </pagination-controls>\n                            </div>\n                            \n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n<!-- Delete Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_entity\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Item</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteEnityData(tempId)\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a  data-dismiss=\"modal\"\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Modal -->\n";
      /***/
    },

    /***/
    "Hbb3":
    /*!************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/edit/edit.component.css ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hbb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "Ivxf":
    /*!************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/view/view.component.css ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ivxf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n fieldset.fieldsetBorder {\r\n\tborder: 1px solid;\r\n\tborder-color: rgba(31, 31, 31, 0.25); /*1f1f1f*/\r\n\tborder-radius: 5px;\r\n\tmargin: 1px;\r\n\tmargin-bottom: 7px;\r\n\tpadding-left: 5px;\r\n}\r\n\r\n fieldset.fieldsetWithoutBorder {\r\n\tmargin-bottom: 7px;\r\n}\r\n\r\n fieldset legend {\r\n\t/* border: 1px solid; */\r\n\t/* border-color: rgba(31, 31, 31, 0.25); */\r\n\twidth: auto;\r\n\tborder-radius: 5px;\r\n    font-size: 15px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\tmargin-left: 7px;\r\n}\r\n\r\n .logBox .form-group {\r\n\tfloat: left;\r\n}\r\n\r\n .logBox .form-group label {\r\n\tmin-width: 170px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n .logBox .form-group div {\r\n\tborder: 1px solid;\r\n\tborder-radius: 3px;\r\n\tborder-color: rgba(31, 31, 31, 0.25);\r\n\tpadding-left: 3px;\r\n\tpadding-right: 3px;\r\n\tpadding-top: 1px;\r\n\tpadding-bottom: 1px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n\tmin-height: 25px;\r\n}\r\n\r\n .logBox {\r\n\tfont-size: 13px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZDs7Q0FFQztDQUNBLGlCQUFpQjtDQUNqQixvQ0FBb0MsRUFBRSxTQUFTO0NBQy9DLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7Q0FDQztDQUNBLGtCQUFrQjtBQUNuQjs7Q0FFQztDQUNBLHVCQUF1QjtDQUN2QiwwQ0FBMEM7Q0FDMUMsV0FBVztDQUNYLGtCQUFrQjtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7Q0FDQTtDQUNDLFdBQVc7QUFDWjs7Q0FFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztDQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixvQ0FBb0M7Q0FDcEMsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztDQUVBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuIGZpZWxkc2V0LmZpZWxkc2V0Qm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZDtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC4yNSk7IC8qMWYxZjFmKi9cclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbiBmaWVsZHNldC5maWVsZHNldFdpdGhvdXRCb3JkZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuIGZpZWxkc2V0IGxlZ2VuZCB7XHJcblx0LyogYm9yZGVyOiAxcHggc29saWQ7ICovXHJcblx0LyogYm9yZGVyLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuMjUpOyAqL1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxvZ0JveCAuZm9ybS1ncm91cCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5sb2dCb3ggLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdG1pbi13aWR0aDogMTcwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmxvZ0JveCAuZm9ybS1ncm91cCBkaXYge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC4yNSk7XHJcblx0cGFkZGluZy1sZWZ0OiAzcHg7XHJcblx0cGFkZGluZy1yaWdodDogM3B4O1xyXG5cdHBhZGRpbmctdG9wOiAxcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDFweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5sb2dCb3gge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "LV1q":
    /*!****************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/create/create.component.css ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function LV1q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "LXE+":
    /*!*******************************************************************!*\
      !*** ./src/app/all-modules/self-service/service/leave.service.ts ***!
      \*******************************************************************/

    /*! exports provided: LeaveService */

    /***/
    function LXE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveService", function () {
        return LeaveService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LeaveService = /*#__PURE__*/function () {
        function LeaveService(http) {
          _classCallCheck(this, LeaveService);

          this.http = http;
        }

        _createClass(LeaveService, [{
          key: "sendGetSelfRequest",
          value: function sendGetSelfRequest(apiURL, queryParams) {
            console.log("@sendGetSelfRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "sendPostRequest",
          value: function sendPostRequest(apiURL, formData) {
            console.log("@sendPostRequest");
            return this.http.post(apiURL, formData);
          }
        }, {
          key: "sendGetRequest",
          value: function sendGetRequest(apiURL, queryParams) {
            console.log("@sendGetRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "sendDeleteRequest",
          value: function sendDeleteRequest(apiURL, formData) {
            console.log("@sendDeleteRequest");
            return this.http["delete"](apiURL, formData);
          }
        }]);

        return LeaveService;
      }();

      LeaveService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LeaveService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LeaveService);
      /***/
    },

    /***/
    "Ml0r":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/leaves-employee/leaves-employee.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: LeavesEmployeeComponent */

    /***/
    function Ml0r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavesEmployeeComponent", function () {
        return LeavesEmployeeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leaves_employee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leaves-employee.component.html */
      "sVtF");
      /* harmony import */


      var _leaves_employee_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leaves-employee.component.css */
      "iYSd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_all_modules_settings_leave_services_leave_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/all-modules/settings/leave/services/leave-config.service */
      "QMHJ");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/login/services/login.service */
      "d//k");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _service_leave_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../service/leave.service */
      "LXE+");

      var LeavesEmployeeComponent = /*#__PURE__*/function () {
        function LeavesEmployeeComponent(formBuilder, leaveCnfService, leaveService, login, toastr, spinnerService) {
          _classCallCheck(this, LeavesEmployeeComponent);

          this.formBuilder = formBuilder;
          this.leaveCnfService = leaveCnfService;
          this.leaveService = leaveService;
          this.login = login;
          this.toastr = toastr;
          this.spinnerService = spinnerService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
          this.selfLeaveList = [];
          this.selfCreatedLeaveList = [];
          this.incharge = [];
          this.leaveList = [];
          this.listData = [];
          this.configPgn = {
            // my props
            pageNum: 1,
            pageSize: 5,
            totalItem: 50,
            pageSizes: [5, 10, 25, 50, 100, 200, 500, 1000],
            pgnDiplayLastSeq: 10,
            // ngx plugin props
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 50
          };
        }

        _createClass(LeavesEmployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginUser();
            this.loadSelfLeave();
            this.loadSelfCreatedLeave();
          }
        }, {
          key: "loginUser",
          value: function loginUser() {
            this.user = this.login.getUser();
            console.log(this.user);
          }
        }, {
          key: "loadSelfLeave",
          value: function loadSelfLeave() {
            var _this6 = this;

            this.leaveCnfService.getselfLeave().subscribe(function (data) {
              _this6.selfLeaveList = data;
              console.log(_this6.selfLeaveList);
            });
          }
        }, {
          key: "loadSelfCreatedLeave",
          value: function loadSelfCreatedLeave() {
            var _this7 = this;

            var apiURL = this.baseUrl + "/leaveTrnse/getAllHrEmpLeaves";
            var queryParams = {};
            var params = this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize);
            queryParams = params;
            queryParams.hrCrEmp = this.user.id; // alert(queryParams.hrCrEmp)

            this.spinnerService.show();
            this.leaveService.sendGetSelfRequest(apiURL, queryParams).subscribe(function (response) {
              _this7.selfCreatedLeaveList = response.objectList;
              _this7.configPgn.totalItem = response.totalItems;
              _this7.configPgn.totalItems = response.totalItems;

              _this7.setDisplayLastSequence();

              console.log(_this7.selfCreatedLeaveList);

              _this7.spinnerService.hide(); // this.setDisplayLastSequence();

            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getUserQueryParams",
          value: function getUserQueryParams(page, pageSize) {
            var params = {};

            if (page) {
              params["pageNum"] = page - 0;
            }

            if (pageSize) {
              params["pageSize"] = pageSize;
            }

            return params;
          }
        }, {
          key: "deleteEnityData",
          value: function deleteEnityData(dataId) {
            var _this8 = this;

            var apiURL = this.baseUrl + "/leaveTrnse/delete/" + dataId;
            console.log(apiURL);
            var formData = {};
            this.spinnerService.show();
            this.leaveService.sendDeleteRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this8.spinnerService.hide();

              $("#delete_entity").modal("hide");

              _this8.toastr.success("Successfully item is deleted", "Success");

              _this8.loadSelfCreatedLeave();
            }, function (error) {
              console.log(error);

              _this8.spinnerService.hide();
            });
          } // pagination handling methods start -----------------------------------------------------------------------

        }, {
          key: "setDisplayLastSequence",
          value: function setDisplayLastSequence() {
            this.configPgn.pngDiplayLastSeq = (this.configPgn.pageNum - 1) * this.configPgn.pageSize + this.configPgn.pageSize;

            if (this.listData.length < this.configPgn.pageSize) {
              this.configPgn.pngDiplayLastSeq = (this.configPgn.pageNum - 1) * this.configPgn.pageSize + this.configPgn.pageSize;
            }

            if (this.configPgn.totalItem < this.configPgn.pngDiplayLastSeq) {
              this.configPgn.pngDiplayLastSeq = this.configPgn.totalItem;
            }
          }
        }, {
          key: "handlePageChange",
          value: function handlePageChange(event) {
            this.configPgn.pageNum = event; // set for ngx

            this.configPgn.currentPage = this.configPgn.pageNum;
            this.loadSelfCreatedLeave();
          }
        }, {
          key: "handlePageSizeChange",
          value: function handlePageSizeChange(event) {
            this.configPgn.pageSize = event.target.value;
            this.configPgn.pageNum = 1; // set for ngx

            this.configPgn.itemsPerPage = this.configPgn.pageSize;
            this.loadSelfCreatedLeave();
          } // pagination handling methods end -------------------------------------------------------------------------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// Do not forget to unsubscribe the event
          }
        }]);

        return LeavesEmployeeComponent;
      }();

      LeavesEmployeeComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_all_modules_settings_leave_services_leave_config_service__WEBPACK_IMPORTED_MODULE_5__["LeaveConfigService"]
        }, {
          type: _service_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"]
        }, {
          type: src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]
        }];
      };

      LeavesEmployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-leaves-employee",
        template: _raw_loader_leaves_employee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaves_employee_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_all_modules_settings_leave_services_leave_config_service__WEBPACK_IMPORTED_MODULE_5__["LeaveConfigService"], _service_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"], src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])], LeavesEmployeeComponent);
      /***/
    },

    /***/
    "RKyF":
    /*!******************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/on-tour/on-tour.component.css ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function RKyF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLXRvdXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJvbi10b3VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "TPrK":
    /*!************************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/view-leave/view-leave.component.css ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TPrK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n fieldset.fieldsetBorder {\r\n\tborder: 1px solid;\r\n\tborder-color: rgba(31, 31, 31, 0.25); /*1f1f1f*/\r\n\tborder-radius: 5px;\r\n\tmargin: 1px;\r\n\tmargin-bottom: 7px;\r\n\tpadding-left: 5px;\r\n}\r\n\r\n fieldset.fieldsetWithoutBorder {\r\n\tmargin-bottom: 7px;\r\n}\r\n\r\n fieldset legend {\r\n\t/* border: 1px solid; */\r\n\t/* border-color: rgba(31, 31, 31, 0.25); */\r\n\twidth: auto;\r\n\tborder-radius: 5px;\r\n    font-size: 15px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\tmargin-left: 7px;\r\n}\r\n\r\n .logBox .form-group {\r\n\tfloat: left;\r\n}\r\n\r\n .logBox .form-group label {\r\n\tmin-width: 170px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n .logBox .form-group div {\r\n\tborder: 1px solid;\r\n\tborder-radius: 3px;\r\n\tborder-color: rgba(31, 31, 31, 0.25);\r\n\tpadding-left: 3px;\r\n\tpadding-right: 3px;\r\n\tpadding-top: 1px;\r\n\tpadding-bottom: 1px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n\tmin-height: 25px;\r\n}\r\n\r\n .logBox {\r\n\tfont-size: 13px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctbGVhdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZDs7Q0FFQztDQUNBLGlCQUFpQjtDQUNqQixvQ0FBb0MsRUFBRSxTQUFTO0NBQy9DLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7Q0FDQztDQUNBLGtCQUFrQjtBQUNuQjs7Q0FFQztDQUNBLHVCQUF1QjtDQUN2QiwwQ0FBMEM7Q0FDMUMsV0FBVztDQUNYLGtCQUFrQjtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7Q0FDQTtDQUNDLFdBQVc7QUFDWjs7Q0FFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztDQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixvQ0FBb0M7Q0FDcEMsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztDQUVBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJ2aWV3LWxlYXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuIGZpZWxkc2V0LmZpZWxkc2V0Qm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZDtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC4yNSk7IC8qMWYxZjFmKi9cclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbiBmaWVsZHNldC5maWVsZHNldFdpdGhvdXRCb3JkZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuIGZpZWxkc2V0IGxlZ2VuZCB7XHJcblx0LyogYm9yZGVyOiAxcHggc29saWQ7ICovXHJcblx0LyogYm9yZGVyLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuMjUpOyAqL1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxvZ0JveCAuZm9ybS1ncm91cCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5sb2dCb3ggLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdG1pbi13aWR0aDogMTcwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmxvZ0JveCAuZm9ybS1ncm91cCBkaXYge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC4yNSk7XHJcblx0cGFkZGluZy1sZWZ0OiAzcHg7XHJcblx0cGFkZGluZy1yaWdodDogM3B4O1xyXG5cdHBhZGRpbmctdG9wOiAxcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDFweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5sb2dCb3gge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "TpwZ":
    /*!*****************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/on-tour/on-tour.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: OnTourComponent */

    /***/
    function TpwZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTourComponent", function () {
        return OnTourComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_on_tour_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./on-tour.component.html */
      "CT56");
      /* harmony import */


      var _on_tour_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./on-tour.component.css */
      "RKyF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/login/services/login.service */
      "d//k");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_on_tour_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../service/on-tour.service */
      "9aJp");

      var OnTourComponent = /*#__PURE__*/function () {
        function OnTourComponent(onTourService, login, spinnerService, toastr) {
          _classCallCheck(this, OnTourComponent);

          this.onTourService = onTourService;
          this.login = login;
          this.spinnerService = spinnerService;
          this.toastr = toastr; // cores

          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]("en-US"); // list

          this.listData = [];
          this.configPgn = {
            // my props
            pageNum: 1,
            pageSize: 5,
            totalItem: 50,
            pageSizes: [5, 10, 25, 50, 100, 200, 500, 1000],
            pgnDiplayLastSeq: 10,
            // ngx plugin props
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 50
          };
        }

        _createClass(OnTourComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //get login user
            this.loginUser(); // get Self List Data

            this.getSelfListData();
          }
        }, {
          key: "loginUser",
          value: function loginUser() {
            this.user = this.login.getUser();
            console.log(this.user);
          }
        }, {
          key: "getSelfListData",
          value: function getSelfListData() {
            var _this9 = this;

            var apiURL = this.baseUrl + "/onTourTnx/getAllSelf";
            var queryParams = {};
            var params = this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize);
            queryParams = params;
            this.spinnerService.show();
            this.onTourService.sendGetSelfRequest(apiURL, queryParams).subscribe(function (response) {
              _this9.listData = response.objectList;
              _this9.configPgn.totalItem = response.totalItems;
              _this9.configPgn.totalItems = response.totalItems;

              _this9.setDisplayLastSequence();

              _this9.spinnerService.hide();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteEnityData",
          value: function deleteEnityData(dataId) {
            var _this10 = this;

            var apiURL = this.baseUrl + "/onTourTnx/delete/" + dataId;
            console.log(apiURL);
            var formData = {};
            this.spinnerService.show();
            this.onTourService.sendDeleteRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this10.spinnerService.hide();

              $("#delete_entity").modal("hide");

              _this10.toastr.success("Successfully item is deleted", "Success");

              _this10.getSelfListData();
            }, function (error) {
              console.log(error);

              _this10.spinnerService.hide();
            });
          }
        }, {
          key: "getUserQueryParams",
          value: function getUserQueryParams(page, pageSize) {
            var params = {};

            if (page) {
              params["pageNum"] = page - 0;
            }

            if (pageSize) {
              params["pageSize"] = pageSize;
            } // push other attributes


            if (this.user.id) {
              params["hrCrEmp"] = this.user.id;
            } // if(this.srcFromDate && this.srcToDate){
            //   params[`fromDate`] = this.srcFromDate;
            //   params[`toDate`] = this.srcToDate;
            // }


            return params;
          } // pagination handling methods start -----------------------------------------------------------------------

        }, {
          key: "setDisplayLastSequence",
          value: function setDisplayLastSequence() {
            this.configPgn.pngDiplayLastSeq = (this.configPgn.pageNum - 1) * this.configPgn.pageSize + this.configPgn.pageSize;

            if (this.listData.length < this.configPgn.pageSize) {
              this.configPgn.pngDiplayLastSeq = (this.configPgn.pageNum - 1) * this.configPgn.pageSize + this.configPgn.pageSize;
            }

            if (this.configPgn.totalItem < this.configPgn.pngDiplayLastSeq) {
              this.configPgn.pngDiplayLastSeq = this.configPgn.totalItem;
            }
          }
        }, {
          key: "handlePageChange",
          value: function handlePageChange(event) {
            this.configPgn.pageNum = event; // set for ngx

            this.configPgn.currentPage = this.configPgn.pageNum;
            this.getSelfListData();
          }
        }, {
          key: "handlePageSizeChange",
          value: function handlePageSizeChange(event) {
            this.configPgn.pageSize = event.target.value;
            this.configPgn.pageNum = 1; // set for ngx

            this.configPgn.itemsPerPage = this.configPgn.pageSize;
            this.getSelfListData();
          }
        }]);

        return OnTourComponent;
      }();

      OnTourComponent.ctorParameters = function () {
        return [{
          type: _service_on_tour_service__WEBPACK_IMPORTED_MODULE_9__["OnTourService"]
        }, {
          type: src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      };

      OnTourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-on-tour',
        template: _raw_loader_on_tour_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_tour_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_on_tour_service__WEBPACK_IMPORTED_MODULE_9__["OnTourService"], src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])], OnTourComponent);
      /***/
    },

    /***/
    "US4c":
    /*!****************************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/create-leave/create-leave.component.css ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function US4c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1sZWF2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImNyZWF0ZS1sZWF2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "YD5p":
    /*!***********************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/edit/edit.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: EditComponent */

    /***/
    function YD5p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
        return EditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit.component.html */
      "/RJo");
      /* harmony import */


      var _edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit.component.css */
      "Hbb3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/all-modules/employees/services/employee.service */
      "AuF9");
      /* harmony import */


      var src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/all-modules/settings/common/services/common.service */
      "xrk7");
      /* harmony import */


      var src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/login/services/login.service */
      "d//k");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_on_tour_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../service/on-tour.service */
      "9aJp");

      var EditComponent = /*#__PURE__*/function () {
        function EditComponent(formBuilder, datePipe, route, router, onTourService, employeeService, toastr, login, commonService, spinnerService) {
          _classCallCheck(this, EditComponent);

          this.formBuilder = formBuilder;
          this.datePipe = datePipe;
          this.route = route;
          this.router = router;
          this.onTourService = onTourService;
          this.employeeService = employeeService;
          this.toastr = toastr;
          this.login = login;
          this.commonService = commonService;
          this.spinnerService = spinnerService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseUrl;
          this.myFormData = {};
          this.emp = [];
          this.resEmp = [];

          this._initConfigDDL();

          this._customInitLoadData();
        }

        _createClass(EditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.getFormData();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.myForm = this.formBuilder.group({
              id: [""],
              hrCrEmp: [""],
              contactNo: [""],
              hrCrEmpResponsible: [""],
              tourType: [""],
              startDate: [""],
              endDate: [""],
              // tourDays: [""],
              addressDuringTour: [""],
              reasonForTour: [""],
              remarks: [""]
            });
          }
        }, {
          key: "getFormData",
          value: function getFormData() {
            var _this11 = this;

            var id = this.route.snapshot.params.id;
            var apiURL = this.baseUrl + "/onTourTnx/get/" + id;
            var queryParams = {};
            this.spinnerService.show();
            this.onTourService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              _this11.myFormData = response;
              console.log(_this11.myFormData);

              _this11.spinnerService.hide(); // field 1


              var hrCrEmpVal = [{
                ddlCode: response.hrCrEmp.id,
                ddlDescription: response.hrCrEmp.loginCode + "-" + response.hrCrEmp.displayName
              }];
              _this11.configDDL.listData = hrCrEmpVal;
              _this11.myFormData.hrCrEmp = response.hrCrEmp.id; // field 2

              var hrCrEmpResponsibleVal = [{
                ddlCode: response.hrCrEmpResponsible.id,
                ddlDescription: response.hrCrEmpResponsible.loginCode + "-" + response.hrCrEmpResponsible.displayName
              }];
              _this11.configDDL.listData2 = hrCrEmpResponsibleVal;
              _this11.myFormData.hrCrEmpResponsible = response.hrCrEmpResponsible.id; //set date

              _this11.myFormData.startDate = _this11.datePipe.transform(response.startDate, "MM-dd-yyyy").toString().slice(0, 10);
              _this11.myFormData.endDate = _this11.datePipe.transform(response.endDate, "MM-dd-yyyy").toString().slice(0, 10);
              ;

              _this11.myForm.patchValue(_this11.myFormData);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "saveUpdatedFormData",
          value: function saveUpdatedFormData() {
            var _this12 = this;

            if (this.checkSomeCondition()) {
              return;
            }

            var onTour = Object.assign(this.myForm.value, {
              hrCrEmp: this.getHrCrEmp.value ? {
                id: this.getHrCrEmp.value
              } : null,
              hrCrEmpResponsible: this.getHrCrResponsibleEmp.value ? {
                id: this.getHrCrResponsibleEmp.value
              } : null
            });
            var apiURL = this.baseUrl + "/onTourTnx/save"; //alert(this.myForm.value.id)

            console.log(apiURL);
            var formData = {};
            formData = onTour; // process date

            formData.startDate = formData.startDate ? this.datePipe.transform(formData.startDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            formData.endDate = formData.endDate ? this.datePipe.transform(formData.endDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            this.spinnerService.show();
            this.onTourService.sendPostRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this12.spinnerService.hide();

              _this12.router.navigate(["/sefl-service/onTour"], {
                relativeTo: _this12.route
              });
            }, function (error) {
              console.log(error);

              _this12.spinnerService.hide();
            });
          }
        }, {
          key: "checkSomeCondition",
          value: function checkSomeCondition() {
            //check ml is applicable or not
            if (this.myForm.value.alkpLeaveType == 57) {
              var toDate = new Date();

              if (this.myForm.value.startDate > toDate || this.myForm.value.endDate > toDate) {
                this.toastr.info("ML is not created");
                return true;
              } else {
                return false;
              }
            } //check end date getter thn start date


            if (this.myForm.value.startDate > this.myForm.value.endDate) {
              this.toastr.error("End Date must be equal or greater");
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "resetFormValues",
          value: function resetFormValues() {
            //this.myForm.reset();
            this.getFormData();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods Start -----------------------------------

        }, {
          key: "searchDDL",
          value: function searchDDL(event) {
            var q = event.term;
            this.configDDL.q = q;
            this.configDDL.pageNum = 1;
            this.configDDL.append = false;
            this.getListDataDDL();
          }
        }, {
          key: "scrollToEndDDL",
          value: function scrollToEndDDL() {
            this.configDDL.pageNum++;
            this.configDDL.append = true;
            this.getListDataDDL();
          }
        }, {
          key: "_customInitLoadData",
          value: function _customInitLoadData() {
            this.configDDL.activeFieldName = "ddlDescription";
            this.configDDL.dataGetApiPath = "/api/common/getEmp";
            this.configDDL.apiQueryFieldName = "hrCrEmp"; // this.getListDataDDL();
          }
        }, {
          key: "clearDDL",
          value: function clearDDL() {
            this.configDDL.q = "";
          }
        }, {
          key: "getListDataDDL",
          value: function getListDataDDL() {
            var _this13 = this;

            var apiURL = this.baseUrl + this.configDDL.dataGetApiPath;
            var queryParams = {};
            queryParams.pageNum = this.configDDL.pageNum;
            queryParams.pageSize = this.configDDL.pageSize;

            if (this.configDDL.q && this.configDDL.q != null) {
              queryParams[this.configDDL.apiQueryFieldName] = this.configDDL.q;
            }

            this.commonService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              if (_this13.configDDL.append) {
                _this13.configDDL.listData = _this13.configDDL.listData.concat(response.objectList);
                _this13.configDDL.listData2 = _this13.configDDL.listData2.concat(response.objectList);
              } else {
                _this13.configDDL.listData = response.objectList;
                _this13.configDDL.listData2 = response.objectList;
              }

              _this13.configDDL.totalItem = response.totalItems;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "setDefaultParamsDDL",
          value: function setDefaultParamsDDL() {
            this._initConfigDDL();
          }
        }, {
          key: "_initConfigDDL",
          value: function _initConfigDDL() {
            this.configDDL = {
              pageNum: 1,
              pageSize: 10,
              totalItem: 50,
              listData: [],
              listData2: [],
              append: false,
              q: "",
              activeFieldName: "xxxFieldName",
              dataGetApiPath: "",
              apiQueryFieldName: "xxxFieldName"
            };
          }
        }, {
          key: "initSysParamsDDL",
          value: function initSysParamsDDL(event, activeFieldNameDDL, dataGetApiPathDDL, apiQueryFieldNameDDL) {
            console.log("...");
            console.log("ddlActiveFieldName:" + activeFieldNameDDL);
            console.log("dataGetApiPathDDL:" + dataGetApiPathDDL);
            console.log(event.target);

            if (this.configDDL.activeFieldName && this.configDDL.activeFieldName != activeFieldNameDDL) {
              this.setDefaultParamsDDL();
            }

            this.configDDL.activeFieldName = activeFieldNameDDL;
            this.configDDL.dataGetApiPath = dataGetApiPathDDL;
            this.configDDL.apiQueryFieldName = apiQueryFieldNameDDL;
            this.getListDataDDL();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods End -------------------------------------
          //-----------Get Relational Object Id ------------------

        }, {
          key: "getHrCrEmp",
          get: function get() {
            return this.myForm.get("hrCrEmp");
          }
        }, {
          key: "getHrCrResponsibleEmp",
          get: function get() {
            return this.myForm.get("hrCrEmpResponsible");
          }
        }]);

        return EditComponent;
      }();

      EditComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _service_on_tour_service__WEBPACK_IMPORTED_MODULE_13__["OnTourService"]
        }, {
          type: src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"]
        }, {
          type: src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }];
      };

      EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_on_tour_service__WEBPACK_IMPORTED_MODULE_13__["OnTourService"], src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"], src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])], EditComponent);
      /***/
    },

    /***/
    "b/5i":
    /*!********************************************************************!*\
      !*** ./src/app/all-modules/self-service/sefl-service.component.ts ***!
      \********************************************************************/

    /*! exports provided: SelfServiceComponent */

    /***/
    function b5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelfServiceComponent", function () {
        return SelfServiceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_self_service_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./self-service.component.html */
      "eIga");
      /* harmony import */


      var _self_service_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./self-service.component.css */
      "rcyP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SelfServiceComponent = /*#__PURE__*/function () {
        function SelfServiceComponent(ngZone) {
          var _this14 = this;

          _classCallCheck(this, SelfServiceComponent);

          this.ngZone = ngZone;

          window.onresize = function (e) {
            _this14.ngZone.run(function () {
              _this14.innerHeight = window.innerHeight + 'px';
            });
          };

          this.getScreenHeight();
        }

        _createClass(SelfServiceComponent, [{
          key: "getScreenHeight",
          value: function getScreenHeight() {
            this.innerHeight = window.innerHeight + 'px';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = event.target.innerHeight + 'px';
          }
        }]);

        return SelfServiceComponent;
      }();

      SelfServiceComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      SelfServiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-self-service',
        template: _raw_loader_self_service_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_self_service_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], SelfServiceComponent);
      /***/
    },

    /***/
    "eIga":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/self-service.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eIga(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<!-- /Page Wrapper -->";
      /***/
    },

    /***/
    "i6Ad":
    /*!*************************************************************************!*\
      !*** ./src/app/all-modules/self-service/self-service-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: SelfServiceRoutingModule */

    /***/
    function i6Ad(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelfServiceRoutingModule", function () {
        return SelfServiceRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_leaves_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/leaves/create-leave/create-leave.component */
      "ygoH");
      /* harmony import */


      var _components_leaves_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/leaves/edit-leave/edit-leave.component */
      "C3nt");
      /* harmony import */


      var _components_leaves_leaves_employee_leaves_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/leaves/leaves-employee/leaves-employee.component */
      "Ml0r");
      /* harmony import */


      var _components_leaves_view_leave_view_leave_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/leaves/view-leave/view-leave.component */
      "Bvlr");
      /* harmony import */


      var _components_onTour_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/onTour/create/create.component */
      "npDT");
      /* harmony import */


      var _components_onTour_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/onTour/edit/edit.component */
      "YD5p");
      /* harmony import */


      var _components_onTour_on_tour_on_tour_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/onTour/on-tour/on-tour.component */
      "TpwZ");
      /* harmony import */


      var _components_onTour_view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/onTour/view/view.component */
      "wxxu");
      /* harmony import */


      var _sefl_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sefl-service.component */
      "b/5i");

      var routes = [{
        path: '',
        component: _sefl_service_component__WEBPACK_IMPORTED_MODULE_11__["SelfServiceComponent"],
        children: [{
          path: "onTour",
          component: _components_onTour_on_tour_on_tour_component__WEBPACK_IMPORTED_MODULE_9__["OnTourComponent"]
        }, {
          path: "create",
          component: _components_onTour_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"]
        }, {
          path: "onTour/view/:id",
          component: _components_onTour_view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"]
        }, {
          path: "onTour/edit/:id",
          component: _components_onTour_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
        }, {
          path: 'employeeleaves',
          component: _components_leaves_leaves_employee_leaves_employee_component__WEBPACK_IMPORTED_MODULE_5__["LeavesEmployeeComponent"]
        }, {
          path: 'employeeleaves/create',
          component: _components_leaves_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_3__["CreateLeaveComponent"]
        }, {
          path: 'employeeleaves/edit/:id',
          component: _components_leaves_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_4__["EditLeaveComponent"]
        }, {
          path: 'employeeleaves/view/:id',
          component: _components_leaves_view_leave_view_leave_component__WEBPACK_IMPORTED_MODULE_6__["ViewLeaveComponent"]
        }]
      }];

      var SelfServiceRoutingModule = function SelfServiceRoutingModule() {
        _classCallCheck(this, SelfServiceRoutingModule);
      };

      SelfServiceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelfServiceRoutingModule);
      /***/
    },

    /***/
    "iYSd":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/leaves-employee/leaves-employee.component.css ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iYSd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n.title\r\n{\r\nbackground-color: rgb(170, 187, 220);\r\ncolor: rgb(16, 95, 241);\r\ntext-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlcy1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIiLCJmaWxlIjoibGVhdmVzLWVtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG4udGl0bGVcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxODcsIDIyMCk7XHJcbmNvbG9yOiByZ2IoMTYsIDk1LCAyNDEpO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "npDT":
    /*!***************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/create/create.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function npDT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
        return CreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create.component.html */
      "BIF1");
      /* harmony import */


      var _create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create.component.css */
      "LV1q");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/all-modules/employees/services/employee.service */
      "AuF9");
      /* harmony import */


      var src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/all-modules/settings/common/services/common.service */
      "xrk7");
      /* harmony import */


      var src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/login/services/login.service */
      "d//k");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_on_tour_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../service/on-tour.service */
      "9aJp");

      var CreateComponent = /*#__PURE__*/function () {
        function CreateComponent(formBuilder, datePipe, route, router, onTourService, employeeService, toastr, login, commonService) {
          _classCallCheck(this, CreateComponent);

          this.formBuilder = formBuilder;
          this.datePipe = datePipe;
          this.route = route;
          this.router = router;
          this.onTourService = onTourService;
          this.employeeService = employeeService;
          this.toastr = toastr;
          this.login = login;
          this.commonService = commonService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].baseUrl;
          this.emp = [];
          this.resEmp = [];

          this._initConfigDDL();

          this._customInitLoadData();
        }

        _createClass(CreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.myForm = this.formBuilder.group({
              hrCrEmp: [""],
              contactNo: [""],
              hrCrEmpResponsible: [""],
              tourType: [""],
              startDate: [""],
              endDate: [""],
              // tourDays: [""],
              addressDuringTour: [""],
              reasonForTour: [""],
              remarks: [""]
            });
          }
        }, {
          key: "myFormSubmit",
          value: function myFormSubmit() {
            var _this15 = this;

            if (this.checkSomeCondition()) {
              return;
            }

            var onTour = Object.assign(this.myForm.value, {
              hrCrEmp: this.getHrCrEmp.value ? {
                id: this.getHrCrEmp.value
              } : null,
              hrCrEmpResponsible: this.getHrCrResponsibleEmp.value ? {
                id: this.getHrCrResponsibleEmp.value
              } : null
            });
            var apiURL = this.baseUrl + "/onTourTnx/save";
            var formData = {};
            formData = onTour; // process date

            formData.startDate = formData.startDate ? this.datePipe.transform(formData.startDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            formData.endDate = formData.endDate ? this.datePipe.transform(formData.endDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            this.onTourService.sendPostRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this15.router.navigate(["/sefl-service/onTour"], {
                relativeTo: _this15.route
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "checkSomeCondition",
          value: function checkSomeCondition() {
            //check ml is applicable or not
            if (this.myForm.value.alkpLeaveType == 57) {
              var toDate = new Date();

              if (this.myForm.value.startDate > toDate || this.myForm.value.endDate > toDate) {
                this.toastr.info("ML is not created");
                return true;
              } else {
                return false;
              }
            } //check end date getter thn start date


            if (this.myForm.value.startDate > this.myForm.value.endDate) {
              this.toastr.error("End Date must be equal or greater");
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "contactFind",
          value: function contactFind(code) {
            alert(code);
          }
        }, {
          key: "resetFormValues",
          value: function resetFormValues() {
            this.myForm.reset(); //this.setFormDefaultValues();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods Start -----------------------------------

        }, {
          key: "searchDDL",
          value: function searchDDL(event) {
            var q = event.term;
            this.configDDL.q = q;
            this.configDDL.pageNum = 1;
            this.configDDL.append = false;
            this.getListDataDDL();
          }
        }, {
          key: "scrollToEndDDL",
          value: function scrollToEndDDL() {
            this.configDDL.pageNum++;
            this.configDDL.append = true;
            this.getListDataDDL();
          }
        }, {
          key: "_customInitLoadData",
          value: function _customInitLoadData() {
            this.configDDL.activeFieldName = "ddlDescription";
            this.configDDL.dataGetApiPath = "/api/common/getEmp";
            this.configDDL.apiQueryFieldName = "hrCrEmp"; // this.getListDataDDL();
          }
        }, {
          key: "clearDDL",
          value: function clearDDL() {
            this.configDDL.q = "";
          }
        }, {
          key: "getListDataDDL",
          value: function getListDataDDL() {
            var _this16 = this;

            var apiURL = this.baseUrl + this.configDDL.dataGetApiPath;
            var queryParams = {};
            queryParams.pageNum = this.configDDL.pageNum;
            queryParams.pageSize = this.configDDL.pageSize;

            if (this.configDDL.q && this.configDDL.q != null) {
              queryParams[this.configDDL.apiQueryFieldName] = this.configDDL.q;
            }

            this.commonService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              if (_this16.configDDL.append) {
                _this16.configDDL.listData = _this16.configDDL.listData.concat(response.objectList);
              } else {
                _this16.configDDL.listData = response.objectList;
              }

              _this16.configDDL.totalItem = response.totalItems;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "setDefaultParamsDDL",
          value: function setDefaultParamsDDL() {
            this._initConfigDDL();
          }
        }, {
          key: "_initConfigDDL",
          value: function _initConfigDDL() {
            this.configDDL = {
              pageNum: 1,
              pageSize: 10,
              totalItem: 50,
              listData: [],
              append: false,
              q: "",
              activeFieldName: "xxxFieldName",
              dataGetApiPath: "",
              apiQueryFieldName: "xxxFieldName"
            };
          }
        }, {
          key: "initSysParamsDDL",
          value: function initSysParamsDDL(event, activeFieldNameDDL, dataGetApiPathDDL, apiQueryFieldNameDDL) {
            console.log("...");
            console.log("ddlActiveFieldName:" + activeFieldNameDDL);
            console.log("dataGetApiPathDDL:" + dataGetApiPathDDL);
            console.log(event.target);

            if (this.configDDL.activeFieldName && this.configDDL.activeFieldName != activeFieldNameDDL) {
              this.setDefaultParamsDDL();
            }

            this.configDDL.activeFieldName = activeFieldNameDDL;
            this.configDDL.dataGetApiPath = dataGetApiPathDDL;
            this.configDDL.apiQueryFieldName = apiQueryFieldNameDDL;
            this.getListDataDDL();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods End -------------------------------------
          //-----------Get Relational Object Id ------------------

        }, {
          key: "getHrCrEmp",
          get: function get() {
            return this.myForm.get("hrCrEmp");
          }
        }, {
          key: "getHrCrResponsibleEmp",
          get: function get() {
            return this.myForm.get("hrCrEmpResponsible");
          }
        }]);

        return CreateComponent;
      }();

      CreateComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _service_on_tour_service__WEBPACK_IMPORTED_MODULE_12__["OnTourService"]
        }, {
          type: src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_8__["EmployeeService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }, {
          type: src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]
        }, {
          type: src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]
        }];
      };

      CreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-create',
        template: _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_on_tour_service__WEBPACK_IMPORTED_MODULE_12__["OnTourService"], src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_8__["EmployeeService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"], src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])], CreateComponent);
      /***/
    },

    /***/
    "oIAc":
    /*!************************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/edit-leave/edit-leave.component.css ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oIAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtbGVhdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJlZGl0LWxlYXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "rcyP":
    /*!*********************************************************************!*\
      !*** ./src/app/all-modules/self-service/self-service.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function rcyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxmLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "sVtF":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/leaves/leaves-employee/leaves-employee.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sVtF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Leaves</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\r\n                    <li class=\"breadcrumb-item active\">Self Service</li>\r\n                    <li class=\"breadcrumb-item active\">Leaves</li>\r\n                    <li class=\"breadcrumb-item active\">List</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <div class=\"btn-group btn-group\">\r\n                    <button class=\"btn btn-white\">Excel</button>\r\n                    <button class=\"btn btn-white\">PDF</button>\r\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n     <!-- Leave Statistics -->\r\n   \r\n     <div  class=\"row \">  \r\n        <div *ngFor=\"let option of selfLeaveList\" class=\"col-md-3\">\r\n            <div class=\"stats-info\">\r\n                <h4>Leave Type : {{option.leaveType}}</h4>\r\n                <br>\r\n                <h6>Leave Days : {{option.leaveDays}}</h6>\r\n                <h6>Taken Days : {{option.takenDays}}</h6>\r\n                <h6>Carry Days : {{option.carryDays}}</h6>\r\n               \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- /Leave Statistics -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"card mb-2\" style=\"background-color:transparent;\">\r\n        <div class=\"card-body p-3\">\r\n\r\n            <div class=\"row filter-row\">\r\n\r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-2 col-12\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <input type=\"text\" class=\"form-control floating\" >\r\n                        <label class=\"focus-label\">Employee Code</label>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" >\r\n                        </div>\r\n                        <label class=\"focus-label\">From</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" >\r\n                        </div>\r\n                        <label class=\"focus-label\">To</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                    <a  class=\"btn btn-success btn-block\"  > Search </a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n\r\n    <!-- /Page Content -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n            <div class=\"card\">\r\n\r\n                <div class=\"card-header\">\r\n                    <div class=\"card-tools\">\r\n                         <a routerLink = \"/sefl-service/employeeleaves/create\" class=\"btn btn-outline-primary\"><i class=\"fa fa-plus\"></i> New &nbsp;&nbsp;&nbsp;</a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card-body\">\r\n\r\n                    <div class=\"table-responsive\">\r\n\r\n                        <div class=\"d-flex justify-content-start pb-1\">\r\n                            <div class=\"pgn-displayDataInfo\">\r\n                                <span class=\"page-item disabled\">Displaying ( {{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (1) ) }}  to {{configPgn.pngDiplayLastSeq}} of {{configPgn.totalItem}} ) entries</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>Leave Type</th>\r\n                                    <th>Leave Days</th>\r\n                                    <th>Apply Date</th>\r\n                                    <th>From Date</th>\r\n                                    <th>To Date</th>\r\n                                    <th>Approved Sts</th>\r\n                                    <th>Leave Prd</th>\r\n                                    <th class=\"text-right\">Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody >\r\n                                \r\n                                <tr *ngFor=\"let option of selfCreatedLeaveList | paginate: configPgn; let i = index\" [class.active]=\"i == currentIndex\">    \r\n                                    <td>{{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (i+1) ) }}</td>\r\n                                    <td>{{option.leaveType}}</td>\r\n                                    <td>{{option.leaveDays}}</td>\r\n                                    <td>{{option.createDate}}</td>\r\n                                    <td>{{option.startDate|date:'yyyy-MM-dd'}}</td>\r\n                                    <td>{{option.endDate|date:'yyyy-MM-dd'}}</td>  \r\n                                    <td>{{option.leaveApprovalStatus}}</td>\r\n                                    <td>{{option.hrLeavePrd.title}}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"btn btn-sm btn-info dropdown-item\" routerLink = \"./view/{{option.id}}\"><i class=\"fa fa-eye m-r-5\"></i>View </a>\r\n                                                <a class=\"btn btn-sm btn-primary dropdown-item\" routerLink = \"./edit/{{option.id}}\"><i class=\"fa fa-pencil m-r-5\"></i>Edit </a>\r\n                                                <a class=\"btn btn-sm btn-danger dropdown-item\"  \r\n                                                data-toggle=\"modal\"\r\n                                                data-target=\"#delete_entity\" \r\n                                                (click)=\"tempId = option.id\"><i class=\"fa fa-trash-o m-r-5\"></i>Delete </a>\r\n                                                <!-- <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                                    data-target=\"#delete_leavetype\" (click)=\"tempId = leaveType.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\r\n                                                    Delete</a> -->\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"selfCreatedLeaveList.length === 0\">\r\n                                    <td colspan=\"10\">\r\n                                        <h5 style=\"text-align: center;\">No data found</h5>\r\n                                    </td>\r\n                                   \r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                        <div class=\"d-flex justify-content-end \">\r\n\r\n                            <div class=\"\" >\r\n                                Items per Page\r\n                                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" >\r\n                                    <option *ngFor=\"let size of configPgn.pageSizes\" [value]=\"size\">\r\n                                        {{ size }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <div class=\"pgn-pageSliceCt\">\r\n                                <pagination-controls \r\n                                    responsive=\"true\" \r\n                                    previousLabel=\"Prev\" \r\n                                    nextLabel=\"Next\" \r\n                                    (pageChange)=\"handlePageChange($event)\">\r\n                                </pagination-controls>\r\n                            </div>\r\n                            \r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\r\n<!-- Delete Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_entity\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Item</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Modal -->\r\n";
      /***/
    },

    /***/
    "tBOO":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/leaves/edit-leave/edit-leave.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tBOO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Leave</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\r\n                    <li class=\"breadcrumb-item active\">Self Service</li>\r\n                    <li class=\"breadcrumb-item active\">Leave</li>\r\n                    <li class=\"breadcrumb-item active\">Edit</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a class=\"btn add-btn\" routerLink=\"/sefl-service/employeeleaves\"><i class=\"fa fa-share\"></i> Back To List</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <!-- <div class=\"card-header\"> -->\r\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\r\n                <!-- </div>  -->\r\n                <div class=\"card-body\">\r\n                    <form novalidate (ngSubmit)=\"saveUpdatedFormData()\" [formGroup]=\"myForm\">\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData\" formControlName=\"hrCrEmp\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                   \r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                       \r\n\r\n                       \r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Responsible Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData2\" formControlName=\"hrCrEmpResponsible\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Responsible Employee Contact No</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"contactNo\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Leave Type *</label>\r\n                        <div class=\"col-md-10\">\r\n                            <ng-select formControlName=\"alkpLeaveType\" [items]=\"leaveList\" bindLabel=\"title\" bindValue=\"id\"\r\n                                placeholder=\"Select\" appendTo=\"body\" >\r\n                            </ng-select>\r\n        \r\n                        </div>\r\n                        </div>\r\n                        \r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Start Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control datetimepicker\" formControlName=\"startDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">End Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control datetimepicker\"  formControlName=\"endDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Leave Days</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"leaveDays\">\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Address During Leave</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"addressDuringLeave\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Reason For Leave</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"reasonForLeave\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Remarks</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"remarks\"></textarea>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/sefl-service/employeeleaves\"><i class=\"fa fa-share\"></i> Cancel</a>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\r\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\r\n                            </button>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\r\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\r\n                            </button>\r\n                        </div>\r\n\r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "wxxu":
    /*!***********************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/onTour/view/view.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ViewComponent */

    /***/
    function wxxu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
        return ViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view.component.html */
      "BBik");
      /* harmony import */


      var _view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view.component.css */
      "Ivxf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_on_tour_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../service/on-tour.service */
      "9aJp");

      var ViewComponent = /*#__PURE__*/function () {
        function ViewComponent(route, spinnerService, onTourService) {
          _classCallCheck(this, ViewComponent);

          this.route = route;
          this.spinnerService = spinnerService;
          this.onTourService = onTourService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
          this.myData = {};
        }

        _createClass(ViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getFormData();
          }
        }, {
          key: "getFormData",
          value: function getFormData() {
            var _this17 = this;

            var id = this.route.snapshot.params.id;
            var apiURL = this.baseUrl + "/onTourTnx/get/" + id;
            var queryParams = {};
            this.spinnerService.show();
            this.onTourService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              _this17.myData = response;
              console.log(_this17.myData);

              _this17.spinnerService.hide();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return ViewComponent;
      }();

      ViewComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }, {
          type: _service_on_tour_service__WEBPACK_IMPORTED_MODULE_7__["OnTourService"]
        }];
      };

      ViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view',
        template: _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _service_on_tour_service__WEBPACK_IMPORTED_MODULE_7__["OnTourService"]])], ViewComponent);
      /***/
    },

    /***/
    "x+8Z":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/leaves/view-leave/view-leave.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x8Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">On Tour</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\r\n                    <li class=\"breadcrumb-item active\">Self-service</li>\r\n                    <li class=\"breadcrumb-item active\">OnTour</li>\r\n                    <li class=\"breadcrumb-item active\">Show</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a class=\"btn add-btn\" routerLink=\"/sefl-service/employeeleaves\"><i class=\"fa fa-share\"></i> Back To List</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n              \r\n                <div class=\"card-body\">\r\n\r\n                   \r\n                        \r\n                        <fieldset class=\"row fieldsetWithoutBorder\">\r\n                            <legend></legend>\r\n                            <div class=\"col-12\">\r\n    \r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Employee</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.hrCrEmp.displayName}} (Code:{{myData.hrCrEmp.loginCode}}) </span>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Responsible Employee</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.hrCrEmpResponsible.displayName}} (Code:{{myData.hrCrEmpResponsible.loginCode}}) </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Leave Type</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.leaveType}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                \r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Start Date</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.startDate|date:'yyyy-MM-dd'}}</span>\r\n                                    </div>\r\n                                </div>\r\n        \r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">End Date</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.endDate|date:'yyyy-MM-dd'}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Leave Days</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.leaveDays}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Leave Location</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.addressDuringLeave}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Couse Of Leave</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.reasonForLeave}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Remarks</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.remarks}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-form-label col-md-2\">Approval Status</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <span>: &nbsp;</span><span>{{myData.leaveApprovalStatus}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </fieldset>\r\n\r\n\r\n                        <fieldset class=\"row fieldsetBorder logBox\">\r\n                            <legend>System Log Information</legend>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">ID</label>\r\n                                <div class=\"\">\r\n                                    <span>{{myData.id}}</span>\r\n                                </div>\r\n                            </div>\r\n                           \r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Creation Time</label>\r\n                                <div class=\"\">\r\n                                    <span>{{myData.createDate}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Creation User</label>\r\n                                <div class=\"\">\r\n                                    <span>{{myData.createdByHrCrEmp.user.username}}</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Last Update Time</label>\r\n                                <div class=\"\">\r\n                                    <span>{{myData.updateDateTime}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Last Update User</label>\r\n                                <div class=\"\">\r\n                                    <span>{{myData.lastUpdateUser}}</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </fieldset>\r\n\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-primary btn-ripple\" routerLink=\"/sefl-service/employeeleaves\"><i class=\"fa fa-share\"></i> Close</a>\r\n                            &nbsp;\r\n                        </div>\r\n\r\n                       \r\n                   \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\r\n\r\n";
      /***/
    },

    /***/
    "ygoH":
    /*!***************************************************************************************************!*\
      !*** ./src/app/all-modules/self-service/components/leaves/create-leave/create-leave.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: CreateLeaveComponent */

    /***/
    function ygoH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateLeaveComponent", function () {
        return CreateLeaveComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_leave_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-leave.component.html */
      "yvGz");
      /* harmony import */


      var _create_leave_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-leave.component.css */
      "US4c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/all-modules/settings/common/services/common.service */
      "xrk7");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_leave_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../service/leave.service */
      "LXE+");

      var CreateLeaveComponent = /*#__PURE__*/function () {
        function CreateLeaveComponent(formBuilder, datePipe, route, router, leaveService, toastr, commonService) {
          _classCallCheck(this, CreateLeaveComponent);

          this.formBuilder = formBuilder;
          this.datePipe = datePipe;
          this.route = route;
          this.router = router;
          this.leaveService = leaveService;
          this.toastr = toastr;
          this.commonService = commonService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
          this.leaveList = [];

          this._initConfigDDL();

          this._customInitLoadData();
        }

        _createClass(CreateLeaveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.loadAlkpLeave();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.myForm = this.formBuilder.group({
              hrCrEmp: [""],
              contactNo: [""],
              hrCrEmpResponsible: [""],
              alkpLeaveType: [""],
              startDate: [""],
              endDate: [""],
              // leaveDays: [""],
              addressDuringLeave: [""],
              reasonForLeave: [""],
              remarks: [""]
            });
          }
        }, {
          key: "loadAlkpLeave",
          value: function loadAlkpLeave() {
            var _this18 = this;

            this.commonService.getAlkpByKeyword("LEAVETYPE").subscribe(function (data) {
              _this18.alkpLeave = data;
              _this18.leaveList = _this18.alkpLeave.subALKP;
              console.log(_this18.leaveList);
            });
          }
        }, {
          key: "myFormSubmit",
          value: function myFormSubmit() {
            var _this19 = this;

            if (this.checkSomeCondition()) {
              return;
            }

            var leaveTrx = Object.assign(this.myForm.value, {
              hrCrEmp: this.getHrCrEmp.value ? {
                id: this.getHrCrEmp.value
              } : null,
              hrCrEmpResponsible: this.getHrCrResponsibleEmp.value ? {
                id: this.getHrCrResponsibleEmp.value
              } : null,
              alkpLeaveType: this.getAlkpLeaveId.value ? {
                id: this.getAlkpLeaveId.value
              } : null
            });
            var apiURL = this.baseUrl + "/leaveTrnse/save";
            var formData = {};
            formData = leaveTrx; // process date

            formData.startDate = formData.startDate ? this.datePipe.transform(formData.startDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            formData.endDate = formData.endDate ? this.datePipe.transform(formData.endDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            this.leaveService.sendPostRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this19.router.navigate(["/sefl-service/employeeleaves"], {
                relativeTo: _this19.route
              });
            }, function (error) {
              console.log(error);

              _this19.toastr.error(error.error.message);
            });
          }
        }, {
          key: "checkSomeCondition",
          value: function checkSomeCondition() {
            //check ml is applicable or not
            if (this.myForm.value.alkpLeaveType == 57) {
              var toDate = new Date();

              if (this.myForm.value.startDate > toDate || this.myForm.value.endDate > toDate) {
                this.toastr.info("ML is not created");
                return true;
              } else {
                return false;
              }
            } //check end date getter thn start date


            if (this.myForm.value.startDate > this.myForm.value.endDate) {
              this.toastr.error("End Date must be equal or greater");
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "resetFormValues",
          value: function resetFormValues() {
            this.myForm.reset(); //this.setFormDefaultValues();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods Start -----------------------------------

        }, {
          key: "searchDDL",
          value: function searchDDL(event) {
            var q = event.term;
            this.configDDL.q = q;
            this.configDDL.pageNum = 1;
            this.configDDL.append = false;
            this.getListDataDDL();
          }
        }, {
          key: "scrollToEndDDL",
          value: function scrollToEndDDL() {
            this.configDDL.pageNum++;
            this.configDDL.append = true;
            this.getListDataDDL();
          }
        }, {
          key: "_customInitLoadData",
          value: function _customInitLoadData() {
            this.configDDL.activeFieldName = "ddlDescription";
            this.configDDL.dataGetApiPath = "/api/common/getEmp";
            this.configDDL.apiQueryFieldName = "hrCrEmp"; // this.getListDataDDL();
          }
        }, {
          key: "clearDDL",
          value: function clearDDL() {
            this.configDDL.q = "";
          }
        }, {
          key: "getListDataDDL",
          value: function getListDataDDL() {
            var _this20 = this;

            var apiURL = this.baseUrl + this.configDDL.dataGetApiPath;
            var queryParams = {};
            queryParams.pageNum = this.configDDL.pageNum;
            queryParams.pageSize = this.configDDL.pageSize;

            if (this.configDDL.q && this.configDDL.q != null) {
              queryParams[this.configDDL.apiQueryFieldName] = this.configDDL.q;
            }

            this.commonService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              if (_this20.configDDL.append) {
                _this20.configDDL.listData = _this20.configDDL.listData.concat(response.objectList);
              } else {
                _this20.configDDL.listData = response.objectList;
              }

              _this20.configDDL.totalItem = response.totalItems;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "setDefaultParamsDDL",
          value: function setDefaultParamsDDL() {
            this._initConfigDDL();
          }
        }, {
          key: "_initConfigDDL",
          value: function _initConfigDDL() {
            this.configDDL = {
              pageNum: 1,
              pageSize: 10,
              totalItem: 50,
              listData: [],
              append: false,
              q: "",
              activeFieldName: "xxxFieldName",
              dataGetApiPath: "",
              apiQueryFieldName: "xxxFieldName"
            };
          }
        }, {
          key: "initSysParamsDDL",
          value: function initSysParamsDDL(event, activeFieldNameDDL, dataGetApiPathDDL, apiQueryFieldNameDDL) {
            console.log("...");
            console.log("ddlActiveFieldName:" + activeFieldNameDDL);
            console.log("dataGetApiPathDDL:" + dataGetApiPathDDL);
            console.log(event.target);

            if (this.configDDL.activeFieldName && this.configDDL.activeFieldName != activeFieldNameDDL) {
              this.setDefaultParamsDDL();
            }

            this.configDDL.activeFieldName = activeFieldNameDDL;
            this.configDDL.dataGetApiPath = dataGetApiPathDDL;
            this.configDDL.apiQueryFieldName = apiQueryFieldNameDDL;
            this.getListDataDDL();
          } // --------------------------- DDL (Dinamic Dropdown List) Methods End -------------------------------------
          //-----------Get Relational Object Id ------------------

        }, {
          key: "getHrCrEmp",
          get: function get() {
            return this.myForm.get("hrCrEmp");
          }
        }, {
          key: "getHrCrResponsibleEmp",
          get: function get() {
            return this.myForm.get("hrCrEmpResponsible");
          }
        }, {
          key: "getAlkpLeaveId",
          get: function get() {
            return this.myForm.get("alkpLeaveType");
          }
        }]);

        return CreateLeaveComponent;
      }();

      CreateLeaveComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _service_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }, {
          type: src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
        }];
      };

      CreateLeaveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-create-leave',
        template: _raw_loader_create_leave_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_leave_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], src_app_all_modules_settings_common_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])], CreateLeaveComponent);
      /***/
    },

    /***/
    "yvGz":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/self-service/components/leaves/create-leave/create-leave.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yvGz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Leave</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\r\n                    <li class=\"breadcrumb-item active\">Self Service</li>\r\n                    <li class=\"breadcrumb-item active\">Leave</li>\r\n                    <li class=\"breadcrumb-item active\">Create</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a class=\"btn add-btn\" routerLink=\"/sefl-service/employeeleaves\"><i class=\"fa fa-share\"></i> Back To List</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <!-- <div class=\"card-header\"> -->\r\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\r\n                <!-- </div>  -->\r\n                <div class=\"card-body\">\r\n                    <form novalidate (ngSubmit)=\"myFormSubmit()\" [formGroup]=\"myForm\">\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData\" formControlName=\"hrCrEmp\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                   \r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                       \r\n\r\n                       \r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Responsible Employee </label>\r\n                            <div class=\"col-md-10\">\r\n                                <ng-select\r\n                                    [items]=\"configDDL.listData\" formControlName=\"hrCrEmpResponsible\" placeholder=\"Select employee\" \r\n                                    bindLabel=\"ddlDescription\" bindValue=\"ddlCode\" \r\n                                    [searchable]=\"true\" [clearable]=\"true\" [virtualScroll]=\"true\" [clearOnBackspace]=\"true\"\r\n                                    (search)=\"searchDDL($event)\" (scrollToEnd)=\"scrollToEndDDL()\" (clear)=\"clearDDL()\"\r\n                                    (click)=\"initSysParamsDDL($event, 'ddlDescription', '/api/common/getEmp', 'hrCrEmp')\"\r\n                                    ddlActiveFieldName=\"ddlDescription\" class=\"custom-ng-select\">\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Responsible Employee Contact No</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"contactNo\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Leave Type *</label>\r\n                        <div class=\"col-md-10\">\r\n                            <ng-select formControlName=\"alkpLeaveType\" [items]=\"leaveList\" bindLabel=\"title\" bindValue=\"id\"\r\n                                placeholder=\"Select\" appendTo=\"body\" >\r\n                            </ng-select>\r\n        \r\n                        </div>\r\n                        </div>\r\n                        \r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Start Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control datetimepicker\" formControlName=\"startDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">End Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control datetimepicker\"  formControlName=\"endDate\"  bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Leave Days</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"leaveDays\">\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Address During Leave</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"addressDuringLeave\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Reason For Leave</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"reasonForLeave\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Remarks</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"remarks\"></textarea>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/sefl-service/employeeleaves\"><i class=\"fa fa-share\"></i> Cancel</a>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\r\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\r\n                            </button>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\r\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\r\n                            </button>\r\n                        </div>\r\n\r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=self-service-self-service-module-es5.js.map