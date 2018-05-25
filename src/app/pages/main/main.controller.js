'use strict';


import  _ from 'lodash/core';


import angularLogo from '_images/angular.png';

export default class MainController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    $onInit() {
        
        this.lodash_version = _.VERSION;
        
        
        this.angularLogo = angularLogo;
    }
}