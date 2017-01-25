(function () {
    'use strict';

    angular
        .module('project')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig, $httpProvider) {

        angular.extend(toastrConfig, {
            autoDismiss: true,
            containerId: 'toast-custom-container',
            maxOpened: 1,
            newestOnTop: true,
            closeButton: false,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body',
            templates: {
                toast: 'app/components/directives/toast/templates/toast.html',
                proggress: 'app/components/directives/toast/templates/toast.html'
            },
            iconClasses: {
                error: 'toast-custom-error',
                info: 'toast-custom-info',
                success: 'toast-custom-success',
                warning: 'toast-custom-warning'
            },
            timeOut: 0,
            extendedTimeOut: 0
        });

        // auth interception
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('AuthInterceptor');
        // Enable log
        $logProvider.debugEnabled(true);

    }

})();
