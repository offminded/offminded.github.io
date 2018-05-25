import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';

import 'services/services';
import 'directives/directives';
import 'services/version-service';

import mainRoutes from 'components/main/main.routes';

angular.module('offminded', ['ngResource', 'ui.router', 'services', 'directives', 'ngSanitize', 'version'])

.config(mainRoutes);
