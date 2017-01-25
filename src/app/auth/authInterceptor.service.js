(function () {
    'use strict';

    angular
    .module('project')
    .factory('AuthInterceptor', AuthInterceptor);
    /** @ngInject */
    function AuthInterceptor($location, $q, $injector, AuthTokenStorage) {
        return {
            responseError: function (errorResponse) {
                switch (errorResponse.status) {
                    case 403:
                        $location.path('/');
                        break;
                    case 500:
                        $injector.get('toastr').error('Wystąpił błąd krytyczny.', '500');
                        break;
                }
                return $q.reject(errorResponse);
            },
            request: function (config) {

                var token = AuthTokenStorage.getToken();
                if (token) {
                    config.headers = config.headers || {};
                    config.headers.Authorization = 'Token ' + token;
                }
                return config;
            }
        };
    }


})();