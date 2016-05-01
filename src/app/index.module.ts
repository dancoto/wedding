/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import MainService from './main/main.service';
import { weddingNavbar } from '../app/components/navbar/navbar.directive';

declare var moment: moment.MomentStatic;

module wedding {
  'use strict';

  angular.module('wedding', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('mainService', MainService)
    .controller('MainController', MainController)
    .directive('weddingNavbar', weddingNavbar);
}
