(function () {
    'use strict';

    angular
        .module('project')
        .service('ErrorHandlerService', ErrorHandlerService);
    /** @ngInject */
    function ErrorHandlerService(AlertService) {
        var _this = this;
        _this.AlertService = AlertService;

        _this.responseErrorParser = function (responseData) {
            var errorMessages = ['test'];
            // var key = '';
            if (responseData) {
                // for (key of Object.keys(responseData)) {
                //   if (typeof responseData[key] === 'string') {
                //     errorMessages.push(responseData[key]);
                //   } else if (Array.isArray(responseData[key])) {
                //     responseData[key].forEach(function(entry) {
                //       if (key !== 'non_field_errors') {
                //         errorMessages.push(key + ': ' + entry);
                //       } else {
                //         errorMessages.push(entry);
                //       }
                //
                //     });
                //   }
                // }
            }

            return errorMessages;
        };


        _this.notifyUser = function (responseError) {
            var errorMessage = _this.responseErrorParser(responseError.data);
            _this.AlertService.validationMessage(false, errorMessage.join('<br/>'));
        }

    }


})();