(function () {
    'use strict';

    angular
        .module('project')
        .service('ErrorHandlerService', ErrorHandlerService);
    /** @ngInject */
    function ErrorHandlerService(AlertService) {
        var _this = this;
        _this.AlertService = AlertService;

        _this.notifyUser = function (responseError) {
            var errorMessage = JSON.stringify(responseError.data);
            _this.AlertService.validationMessage(false, errorMessage);
        }

    }


})();