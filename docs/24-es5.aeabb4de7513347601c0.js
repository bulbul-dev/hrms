!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{C3Jh:function(n,a,c){"use strict";c.r(a),c.d(a,"DashboardModule",function(){return A});var i,o,r,d,s=c("ofXK"),b=c("tyNb"),u=c("fXoL"),l=function(t){return{height:t}},g=((i=function(){function n(e,a){var c=this;t(this,n),this.ngZone=e,this.router=a,window.onresize=function(t){c.ngZone.run(function(){c.innerHeight=window.innerHeight+"px"})},this.getScreenHeight()}return e(n,[{key:"getScreenHeight",value:function(){this.innerHeight=window.innerHeight+"px"}},{key:"ngOnInit",value:function(){this.router.navigateByUrl("/dashboard/employee")}},{key:"onResize",value:function(t){this.innerHeight=t.target.innerHeight+"px"}}]),n}()).\u0275fac=function(t){return new(t||i)(u.Ub(u.G),u.Ub(b.c))},i.\u0275cmp=u.Ob({type:i,selectors:[["app-dashboard"]],decls:2,vars:3,consts:[[1,"page-wrapper",3,"ngStyle","resized"]],template:function(t,n){1&t&&(u.ac(0,"div",0),u.hc("resized",function(t){return n.onResize(t)}),u.Vb(1,"router-outlet"),u.Zb()),2&t&&u.pc("ngStyle",u.tc(1,l,n.innerHeight))},directives:[s.n,b.g],styles:[""]}),i),h=c("rmPI"),m=c("tk/3"),p=((r=function(){function n(e){t(this,n),this.http=e}return e(n,[{key:"getTotalEmployees",value:function(){return this.http.get("".concat(h.a,"/api/v1/adminDashboard/getTotalEmployee"))}},{key:"getTotalEmployeesPresentToday",value:function(){return this.http.get("".concat(h.a,"/api/v1/adminDashboard/getPresentEmployeeToday"))}},{key:"getTotalEmployeesJoinedThisMonth",value:function(){return this.http.get("".concat(h.a,"/api/v1/adminDashboard/totalEmployeesJoinedLastMonth"))}}]),n}()).\u0275fac=function(t){return new(t||r)(u.ec(m.c))},r.\u0275prov=u.Qb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),v=((o=function(){function n(e){t(this,n),this._dashboardService=e}return e(n,[{key:"ngOnInit",value:function(){this._countTotalEmployees(),this._getTotalEmployeesPresentToday(),this._getEmployeesJoinedThisMonth()}},{key:"_countTotalEmployees",value:function(){var t=this;this._dashboardService.getTotalEmployees().subscribe(function(n){t.empTotal=n})}},{key:"_getTotalEmployeesPresentToday",value:function(){var t=this;this._dashboardService.getTotalEmployeesPresentToday().subscribe(function(n){t.empPresent=n})}},{key:"_getEmployeesJoinedThisMonth",value:function(){var t=this;this._dashboardService.getTotalEmployeesJoinedThisMonth().subscribe(function(n){t.empThisMonth=n})}}]),n}()).\u0275fac=function(t){return new(t||o)(u.Ub(p))},o.\u0275cmp=u.Ob({type:o,selectors:[["app-admin-dashboard"]],decls:119,vars:4,consts:[[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"col-md-6","col-sm-6","col-lg-6","col-xl-3"],[1,"card","dash-widget"],[1,"card-body"],[1,"dash-widget-icon"],[1,"fa","fa-cubes"],[1,"dash-widget-info"],[1,"fa","fa-usd"],[1,"fa","fa-diamond"],[1,"fa","fa-user"],[1,"col-md-12"],[1,"card-group","m-b-30"],[1,"card"],[1,"d-flex","justify-content-between","mb-3"],[1,"d-block"],[1,"text-success"],[1,"mb-3"],[1,"progress","mb-2",2,"height","5px"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-primary",2,"width","70%"],[1,"mb-0"],[1,"text-muted"],[1,"text-danger"]],template:function(t,n){1&t&&(u.ac(0,"div",0),u.ac(1,"div",1),u.ac(2,"div",2),u.ac(3,"div",3),u.ac(4,"h3",4),u.Lc(5,"Welcome Admin!"),u.Zb(),u.ac(6,"ul",5),u.ac(7,"li",6),u.Lc(8,"Dashboard"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(9,"div",2),u.ac(10,"div",7),u.ac(11,"div",8),u.ac(12,"div",9),u.ac(13,"span",10),u.Vb(14,"i",11),u.Zb(),u.ac(15,"div",12),u.ac(16,"h3"),u.Lc(17),u.Zb(),u.ac(18,"span"),u.Lc(19,"Total Employees"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(20,"div",7),u.ac(21,"div",8),u.ac(22,"div",9),u.ac(23,"span",10),u.Vb(24,"i",13),u.Zb(),u.ac(25,"div",12),u.ac(26,"h3"),u.Lc(27),u.Zb(),u.ac(28,"span"),u.Lc(29,"New Employees"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(30,"div",7),u.ac(31,"div",8),u.ac(32,"div",9),u.ac(33,"span",10),u.Vb(34,"i",14),u.Zb(),u.ac(35,"div",12),u.ac(36,"h3"),u.Lc(37),u.Zb(),u.ac(38,"span"),u.Lc(39,"Total Present Today"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(40,"div",7),u.ac(41,"div",8),u.ac(42,"div",9),u.ac(43,"span",10),u.Vb(44,"i",15),u.Zb(),u.ac(45,"div",12),u.ac(46,"h3"),u.Lc(47),u.Zb(),u.ac(48,"span"),u.Lc(49,"Total Absent Today"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(50,"div",2),u.ac(51,"div",16),u.ac(52,"div",17),u.ac(53,"div",18),u.ac(54,"div",9),u.ac(55,"div",19),u.ac(56,"div"),u.ac(57,"span",20),u.Lc(58,"New Employees"),u.Zb(),u.Zb(),u.ac(59,"div"),u.ac(60,"span",21),u.Lc(61,"+10%"),u.Zb(),u.Zb(),u.Zb(),u.ac(62,"h3",22),u.Lc(63,"10"),u.Zb(),u.ac(64,"div",23),u.Vb(65,"div",24),u.Zb(),u.ac(66,"p",25),u.Lc(67,"Overall Employees 218"),u.Zb(),u.Zb(),u.Zb(),u.ac(68,"div",18),u.ac(69,"div",9),u.ac(70,"div",19),u.ac(71,"div"),u.ac(72,"span",20),u.Lc(73,"Earnings"),u.Zb(),u.Zb(),u.ac(74,"div"),u.ac(75,"span",21),u.Lc(76,"+12.5%"),u.Zb(),u.Zb(),u.Zb(),u.ac(77,"h3",22),u.Lc(78,"$1,42,300"),u.Zb(),u.ac(79,"div",23),u.Vb(80,"div",24),u.Zb(),u.ac(81,"p",25),u.Lc(82,"Previous Month "),u.ac(83,"span",26),u.Lc(84,"$1,15,852"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(85,"div",18),u.ac(86,"div",9),u.ac(87,"div",19),u.ac(88,"div"),u.ac(89,"span",20),u.Lc(90,"Expenses"),u.Zb(),u.Zb(),u.ac(91,"div"),u.ac(92,"span",27),u.Lc(93,"-2.8%"),u.Zb(),u.Zb(),u.Zb(),u.ac(94,"h3",22),u.Lc(95,"$8,500"),u.Zb(),u.ac(96,"div",23),u.Vb(97,"div",24),u.Zb(),u.ac(98,"p",25),u.Lc(99,"Previous Month "),u.ac(100,"span",26),u.Lc(101,"$7,500"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(102,"div",18),u.ac(103,"div",9),u.ac(104,"div",19),u.ac(105,"div"),u.ac(106,"span",20),u.Lc(107,"Profit"),u.Zb(),u.Zb(),u.ac(108,"div"),u.ac(109,"span",27),u.Lc(110,"-75%"),u.Zb(),u.Zb(),u.Zb(),u.ac(111,"h3",22),u.Lc(112,"$1,12,000"),u.Zb(),u.ac(113,"div",23),u.Vb(114,"div",24),u.Zb(),u.ac(115,"p",25),u.Lc(116,"Previous Month "),u.ac(117,"span",26),u.Lc(118,"$1,42,000"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&t&&(u.Ib(17),u.Mc(n.empTotal.totalEmp),u.Ib(10),u.Mc(n.empThisMonth.lastMonthJoinedEmployees),u.Ib(10),u.Mc(n.empPresent.presentEmployee),u.Ib(10),u.Mc(n.empTotal.totalEmp-n.empPresent.presentEmployee))},styles:[".content[_ngcontent-%COMP%]{padding:30px}"]}),o),f=c("d//k"),Z=((d=function(){function n(e){t(this,n),this.http=e}return e(n,[{key:"getLastSevenDaysAttn",value:function(){return this.http.get("".concat(h.a,"/attnProc/lastSevenDaysAttn"))}}]),n}()).\u0275fac=function(t){return new(t||d)(u.ec(m.c))},d.\u0275prov=u.Qb({token:d,factory:d.\u0275fac,providedIn:"root"}),d),y=["hrHand"],M=["minHand"],P=["secHand"];function C(t,n){if(1&t&&(u.ac(0,"td",45),u.Lc(1),u.Zb()),2&t){var e=u.jc().$implicit;u.Ib(1),u.Nc(" ",e.attnDayStsFinalType," ")}}function O(t,n){if(1&t&&(u.ac(0,"td",46),u.Lc(1),u.Zb()),2&t){var e=u.jc().$implicit;u.Ib(1),u.Nc(" ",e.attnDayStsFinalType," ")}}function L(t,n){if(1&t&&(u.ac(0,"td",47),u.Lc(1),u.Zb()),2&t){var e=u.jc().$implicit;u.Ib(1),u.Nc(" ",e.attnDayStsFinalType," ")}}function _(t,n){if(1&t&&(u.ac(0,"td",48),u.Lc(1),u.Zb()),2&t){var e=u.jc().$implicit;u.Ib(1),u.Nc(" ",e.attnDayStsFinalType," ")}}function w(t,n){if(1&t&&(u.ac(0,"td",48),u.Lc(1),u.Zb()),2&t){var e=u.jc().$implicit;u.Ib(1),u.Nc(" ",e.attnDayStsFinalType," ")}}function x(t,n){if(1&t&&(u.ac(0,"tr",40),u.ac(1,"td"),u.Lc(2),u.kc(3,"date"),u.Zb(),u.ac(4,"td"),u.Lc(5),u.Zb(),u.ac(6,"td"),u.Lc(7),u.Zb(),u.Jc(8,C,2,1,"td",41),u.Jc(9,O,2,1,"td",42),u.Jc(10,L,2,1,"td",43),u.Jc(11,_,2,1,"td",44),u.Jc(12,w,2,1,"td",44),u.Zb()),2&t){var e=n.$implicit;u.Ib(2),u.Mc(u.lc(3,8,e.createDate)),u.Ib(3),u.Mc(e.inTime),u.Ib(2),u.Mc(e.outTime),u.Ib(1),u.pc("ngIf",1==e.isColor),u.Ib(1),u.pc("ngIf",2==e.isColor),u.Ib(1),u.pc("ngIf",null==e.isColor),u.Ib(1),u.pc("ngIf",4==e.isColor),u.Ib(1),u.pc("ngIf",3==e.isColor)}}var I,T,k,E,S=[{path:"",component:g,children:[{path:"admin",component:v},{path:"employee",component:(I=function(){function n(e,a){t(this,n),this.empDeshbrd=e,this.login=a,this.daysArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.monthArray=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.date=new Date}return e(n,[{key:"ngOnInit",value:function(){var t=this;setInterval(function(){var n=new Date;t.updateClock(n)},1e3),this.day=this.daysArray[this.date.getDay()],this.dateCount=this.date.getDate(),this.month=this.monthArray[this.date.getMonth()],this.year=this.date.getFullYear(),this.lastSevenDaysAttn(),this.lodeLoginUser()}},{key:"updateClock",value:function(t){this.secHand.nativeElement.style.transform="rotate("+6*t.getSeconds()+"deg)",this.minHand.nativeElement.style.transform="rotate("+6*t.getMinutes()+"deg)",this.hrHand.nativeElement.style.transform="rotate("+(30*t.getHours()+.5*t.getMinutes())+"deg)";var n=t.getHours();this.ampm=n>=12?"PM":"AM",this.hour=n%12,this.hour=this.hour?this.hour:12,this.hour=this.hour<10?"0"+this.hour:this.hour;var e=t.getMinutes();this.minute=e<10?"0"+e:e.toString();var a=t.getSeconds();this.second=a<10?"0"+a:a.toString()}},{key:"lastSevenDaysAttn",value:function(){var t=this;this.empDeshbrd.getLastSevenDaysAttn().subscribe(function(n){t.last7DaysAttn=n,console.log(t.last7DaysAttn)})}},{key:"lodeLoginUser",value:function(){this.user=this.login.getUser(),this.profileImageUrl=h.a+this.user.pic_}}]),n}(),I.\u0275fac=function(t){return new(t||I)(u.Ub(Z),u.Ub(f.a))},I.\u0275cmp=u.Ob({type:I,selectors:[["app-employee-dashboard"]],viewQuery:function(t,n){var e;1&t&&(u.Rc(y,1),u.Rc(M,1),u.Rc(P,1)),2&t&&(u.yc(e=u.ic())&&(n.hrHand=e.first),u.yc(e=u.ic())&&(n.minHand=e.first),u.yc(e=u.ic())&&(n.secHand=e.first))},decls:99,vars:14,consts:[[1,"content","container-fluid"],[1,"row"],[1,"col-md-12"],[1,"welcome-box"],[1,"welcome-img"],["onerror","this.src='assets/img/profiles/avatar-5.jpg'","alt","",1,"img-design",3,"src"],[1,"welcome-det"],[1,"dayTitle"],[1,"col-lg-8","col-md-8"],[1,"dash-section"],[1,"dash-sec-title"],[1,"col-lg-4","col-md-4"],[1,"dash-sidebar"],[1,"card"],[1,"card-body"],[1,"center-clock"],[1,"clock"],[1,"num","num1"],[1,"num","num2"],[1,"num","num3"],[1,"num","num4"],[1,"num","num5"],[1,"num","num6"],[1,"num","num7"],[1,"num","num8"],[1,"num","num9"],[1,"num","num10"],[1,"num","num11"],[1,"num","num12"],[1,"hr-hand"],["hrHand",""],[1,"min-hand"],["minHand",""],[1,"sec-hand"],["secHand",""],[1,"digitalClock"],[1,"digitalTime"],[1,"table","table-sm"],["scope","col"],["style","font-size: 12px;",4,"ngFor","ngForOf"],[2,"font-size","12px"],["style","color: green;",4,"ngIf"],["style","color: #5c592d;",4,"ngIf"],["style","color: rgb(228, 19, 36);",4,"ngIf"],["style","color: rgb(251, 182, 54);",4,"ngIf"],[2,"color","green"],[2,"color","#5c592d"],[2,"color","rgb(228, 19, 36)"],[2,"color","rgb(251, 182, 54)"]],template:function(t,n){1&t&&(u.ac(0,"div",0),u.ac(1,"div",1),u.ac(2,"div",2),u.ac(3,"div",3),u.ac(4,"div",4),u.Vb(5,"img",5),u.Zb(),u.ac(6,"div",6),u.ac(7,"div"),u.ac(8,"h3"),u.Lc(9),u.Zb(),u.Zb(),u.ac(10,"div",7),u.Lc(11),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(12,"div",1),u.ac(13,"div",8),u.ac(14,"section",9),u.ac(15,"h1",10),u.Lc(16,"Notifications"),u.Zb(),u.Zb(),u.Zb(),u.ac(17,"div",11),u.ac(18,"div",12),u.ac(19,"section"),u.ac(20,"div",13),u.ac(21,"div",14),u.ac(22,"div",15),u.ac(23,"div",1),u.ac(24,"div",2),u.ac(25,"div",16),u.ac(26,"div",17),u.ac(27,"div"),u.Lc(28,"1"),u.Zb(),u.Zb(),u.ac(29,"div",18),u.ac(30,"div"),u.Lc(31,"2"),u.Zb(),u.Zb(),u.ac(32,"div",19),u.ac(33,"div"),u.Lc(34,"3"),u.Zb(),u.Zb(),u.ac(35,"div",20),u.ac(36,"div"),u.Lc(37,"4"),u.Zb(),u.Zb(),u.ac(38,"div",21),u.ac(39,"div"),u.Lc(40,"5"),u.Zb(),u.Zb(),u.ac(41,"div",22),u.ac(42,"div"),u.Lc(43,"6"),u.Zb(),u.Zb(),u.ac(44,"div",23),u.ac(45,"div"),u.Lc(46,"7"),u.Zb(),u.Zb(),u.ac(47,"div",24),u.ac(48,"div"),u.Lc(49,"8"),u.Zb(),u.Zb(),u.ac(50,"div",25),u.ac(51,"div"),u.Lc(52,"9"),u.Zb(),u.Zb(),u.ac(53,"div",26),u.ac(54,"div"),u.Lc(55,"10"),u.Zb(),u.Zb(),u.ac(56,"div",27),u.ac(57,"div"),u.Lc(58,"11"),u.Zb(),u.Zb(),u.ac(59,"div",28),u.ac(60,"div"),u.Lc(61,"12"),u.Zb(),u.Zb(),u.Vb(62,"div",29,30),u.Vb(64,"div",31,32),u.Vb(66,"div",33,34),u.Zb(),u.Zb(),u.ac(68,"div",2),u.ac(69,"div",15),u.ac(70,"div",35),u.ac(71,"div",36),u.ac(72,"div"),u.Lc(73),u.Zb(),u.ac(74,"div"),u.Lc(75),u.Zb(),u.ac(76,"div"),u.Lc(77),u.Zb(),u.ac(78,"div"),u.Lc(79),u.Zb(),u.Lc(80),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(81,"section"),u.ac(82,"h3"),u.Lc(83,"My Last 7 Days Attendance"),u.Zb(),u.ac(84,"div",13),u.ac(85,"div",14),u.ac(86,"table",37),u.ac(87,"thead"),u.ac(88,"tr"),u.ac(89,"th",38),u.Lc(90,"Date"),u.Zb(),u.ac(91,"th",38),u.Lc(92,"In "),u.Zb(),u.ac(93,"th",38),u.Lc(94,"Out "),u.Zb(),u.ac(95,"th",38),u.Lc(96,"Status"),u.Zb(),u.Zb(),u.Zb(),u.ac(97,"tbody"),u.Jc(98,x,13,10,"tr",39),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&t&&(u.Ib(5),u.pc("src",n.profileImageUrl,u.Fc),u.Ib(4),u.Nc("Welcome, ",n.user.firstName,""),u.Ib(2),u.Qc(" ",n.day,", ",n.dateCount," ",n.month," ",n.year," "),u.Ib(62),u.Nc("",n.hour," : \xa0"),u.Ib(2),u.Nc("",n.minute," : \xa0"),u.Ib(2),u.Nc("",n.second," \xa0"),u.Ib(2),u.Mc(n.ampm),u.Ib(1),u.Pc(" \xa0\xa0 | \xa0\xa0",n.dateCount," ",n.month," ",n.year," "),u.Ib(18),u.pc("ngForOf",n.last7DaysAttn))},directives:[s.l,s.m],pipes:[s.e],styles:['.content[_ngcontent-%COMP%]{padding:30px}.clock[_ngcontent-%COMP%]{position:relative;width:170px;height:170px;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:50%;border:3px solid #9f9d9d;box-shadow:inset 0 0 30px rgba(0,0,0,.1),0 20px 20px rgba(0,0,0,.2),0 0 0 4px #fff;margin-left:auto;margin-right:auto}.clock[_ngcontent-%COMP%]:before{content:"";position:absolute;width:10px;height:10px;background:#848484;border:2px solid #fff;z-index:100000;border-radius:50%}.sec-hand[_ngcontent-%COMP%]{width:1px;height:50%;background:#ff6767;top:10%;left:50%}.min-hand[_ngcontent-%COMP%], .sec-hand[_ngcontent-%COMP%]{transform-origin:50% 80%;position:absolute;border-radius:100% 100% 0 0}.min-hand[_ngcontent-%COMP%]{width:3px;height:40%;background:#d6d6d6;top:18%;left:calc(50% - 1px)}.hr-hand[_ngcontent-%COMP%]{width:5px;height:25%;background:#848484;transform-origin:50% 80%;top:30%;left:calc(50% + -2px);border-radius:100% 100% 0 0}.hr-hand[_ngcontent-%COMP%], .num[_ngcontent-%COMP%]{position:absolute}.num[_ngcontent-%COMP%]{height:100%;left:calc(50% - .5em)}.num[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:1em;line-height:2em;color:#858383;text-align:center;vertical-align:middle}.num1[_ngcontent-%COMP%]{transform:rotate(30deg)}.num1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-30deg)}.num2[_ngcontent-%COMP%]{transform:rotate(60deg)}.num2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-60deg)}.num3[_ngcontent-%COMP%]{transform:rotate(90deg)}.num3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-90deg)}.num4[_ngcontent-%COMP%]{transform:rotate(120deg)}.num4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-120deg)}.num5[_ngcontent-%COMP%]{transform:rotate(150deg)}.num5[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-150deg)}.num6[_ngcontent-%COMP%]{transform:rotate(180deg)}.num6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-180deg)}.num7[_ngcontent-%COMP%]{transform:rotate(210deg)}.num7[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-210deg)}.num8[_ngcontent-%COMP%]{transform:rotate(240deg)}.num8[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-240deg)}.num9[_ngcontent-%COMP%]{transform:rotate(270deg)}.num9[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-270deg)}.num10[_ngcontent-%COMP%]{transform:rotate(300deg)}.num10[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-300deg)}.num11[_ngcontent-%COMP%]{transform:rotate(330deg)}.num11[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-330deg)}.num12[_ngcontent-%COMP%]{transform:rotate(1turn)}.num12[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-1turn)}[_nghost-%COMP%]{justify-items:center}.digitalClock[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;align-items:center;height:auto;width:auto}.digitalClock[_ngcontent-%COMP%]{margin-top:40px;position:relative;flex-direction:column;justify-content:center;background-color:#fdfdfd;border:3px solid #9f9d9d;border-radius:5px;box-shadow:inset 0 0 15px 0 20px 20px #000 rgba(0,0,0,.4);color:#484646;text-transform:uppercase}.digitalTime[_ngcontent-%COMP%]{display:flex}.dayTitle[_ngcontent-%COMP%]{font-size:16px}.img-design[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%}.center-clock[_ngcontent-%COMP%]{justify-content:center;align-items:left}']}),I)}]}],D=((E=function n(){t(this,n)}).\u0275fac=function(t){return new(t||E)},E.\u0275mod=u.Sb({type:E}),E.\u0275inj=u.Rb({imports:[[b.f.forChild(S)],b.f]}),E),H=((k=function n(){t(this,n)}).\u0275fac=function(t){return new(t||k)},k.\u0275mod=u.Sb({type:k}),k.\u0275inj=u.Rb({}),k),A=((T=function n(){t(this,n)}).\u0275fac=function(t){return new(t||T)},T.\u0275mod=u.Sb({type:T}),T.\u0275inj=u.Rb({imports:[[s.c,D,H]]}),T)}}])}();