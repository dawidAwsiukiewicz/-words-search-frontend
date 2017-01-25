(function () {
    'use strict';

    angular
        .module('project')
        .service('AlertService', AlertService);
    /** @ngInject */
    function AlertService($injector) {
        var _this = this;
        _this.toastr = $injector.get('toastr');

        _this.successMessage = function (header, message, options) {
            if (typeof options == "undefined") {
                options = {
                    timeOut: 2000
                };
            }
            _this.toastr.success(message, false, options);
        };

        _this.validationMessage = function (header, message, options) {
            if (typeof options == "undefined") {
                options = {};
            }
            _this.toastr.error(message, 'Error', options);

        };

        _this.confirmMessage = function (header, message, options) {
            if (typeof options == "undefined") {
                options = {};
            }
            options.iconClass = 'toast-custom-warning';
            this.toastr.error(message, header, options);

        };

    }


})();