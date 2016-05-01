import MainService from './main.service';
export class MainController {
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService, toastr: any, private mainService : MainService, private $location: ng.ILocationService, private $anchorScroll: ng.IAnchorScrollService ) {
    this.classAnimation = '';
    this.creationDate = 1453934292578;
    this.toastr = toastr;
    this.activate($timeout);

  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    var self = this;

    $timeout(function() {
      self.classAnimation = 'rubberBand';
    }, 4000);
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  scrollTo(location: string) {
    this.$anchorScroll(location);

  }

}
