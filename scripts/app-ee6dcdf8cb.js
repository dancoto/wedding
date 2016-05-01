/******/!function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var a,r=n(1),o=n(2),i=n(3),s=n(4),l=n(5),c=n(6),u=n(7),p=n(8);!function(t){"use strict";angular.module("wedding",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(r.config).config(o.routerConfig).run(i.runBlock).service("githubContributor",l.GithubContributor).service("webDevTec",c.WebDevTecService).controller("MainController",s.MainController).directive("acmeNavbar",u.acmeNavbar).directive("acmeMalarkey",p.acmeMalarkey)}(a||(a={}))},function(t,e){function n(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}n.$inject=["$logProvider","toastrConfig"],e.config=n},function(t,e){function n(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],e.routerConfig=n},function(t,e){function n(t){t.debug("runBlock end")}n.$inject=["$log"],e.runBlock=n},function(t,e){var n=function(){function t(t,e,n){this.awesomeThings=new Array,this.webDevTec=e,this.classAnimation="",this.creationDate=1453934292578,this.toastr=n,this.activate(t)}return t.$inject=["$timeout","webDevTec","toastr"],t.prototype.activate=function(t){this.getWebDevTec();var e=this;t(function(){e.classAnimation="rubberBand"},4e3)},t.prototype.activate.$inject=["$timeout"],t.prototype.showToastr=function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""},t.prototype.getWebDevTec=function(){this.awesomeThings=this.webDevTec.tec},t}();e.MainController=n},function(t,e){var n=function(){function t(t,e){this.$log=t,this.$http=e,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],t.prototype.getContributors=function(t){var e=this;return void 0===t&&(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n",t.data)})},t}();e.GithubContributor=n},function(t,e){var n=function(){function t(){var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"},{title:"TypeScript",url:"http://www.typescriptlang.org/",description:"TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",logo:"typescript.png"}];this.data=t.map(function(t){return t.rank=Math.random(),t})}return Object.defineProperty(t.prototype,"tec",{get:function(){return this.data},enumerable:!0,configurable:!0}),t}();e.WebDevTecService=n},function(t,e){function n(){return{restrict:"E",scope:{creationDate:"="},templateUrl:"app/components/navbar/navbar.html",controller:a,controllerAs:"vm",bindToController:!0}}e.acmeNavbar=n;var a=function(){function t(t){this.relativeDate=t(this.creationDate).fromNow()}return t.$inject=["moment"],t}();e.NavbarController=a},function(t,e){function n(t){return{restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:r,controllerAs:"vm"}}function a(t,e,n,a){var r,o=a.malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){o.type(t).pause()["delete"]()}),r=t.$watch("vm.contributors",function(t,e){angular.forEach(a.contributors,function(t){o.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}n.$inject=["malarkey"],e.acmeMalarkey=n;var r=function(){function t(t,e,n){this.$log=t,this.githubContributor=e,this.malarkey=n,this.contributors=[],this.activate()}return t.$inject=["$log","githubContributor","malarkey"],t.prototype.activate=function(){var t=this;return this.getContributors().then(function(){t.$log.info("Activated Contributors View")})},t.prototype.getContributors=function(){var t=this;return this.githubContributor.getContributors(10).then(function(e){return t.contributors=e,t.contributors})},t}();e.MalarkeyController=r}]),angular.module("wedding").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-ee6dcdf8cb.js.map
