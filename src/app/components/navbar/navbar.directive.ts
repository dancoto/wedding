/** @ngInject */
export function weddingNavbar(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      creationDate: '='
    },
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

}

/** @ngInject */
export class NavbarController {
  public relativeDate: string;
  public creationDate: number;
  private isCollapsed: boolean;

  constructor(private $anchorScroll: ng.IAnchorScrollService) {
    this.isCollapsed = true;
  }

  scrollTo(location: string) {
    this.$anchorScroll(location);
  }
}
