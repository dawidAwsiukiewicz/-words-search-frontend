(function () {
    'use strict';

    angular
        .module('project')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, AuthService, AuthTokenStorage, $state) {

        $rootScope.$on('Error', function (event, rejection) {
            if ((rejection.status === 401 || rejection.status === 403) && AuthTokenStorage.getToken()) {
                AuthService.logout();
            }
        });

        $log.debug('runBlock end');
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
            var isLogin = toState.name === 'login';
            if (isLogin) {
                AuthTokenStorage.setToken();

                if (toState.name !== 'login') {
                    $state.go('login');
                }
                return;
            }

            if (!AuthTokenStorage.getToken()) {
                e.preventDefault(); // stop current execution
                AuthTokenStorage.setToken();
                if (toState.name !== 'login') {
                    $state.go('login');
                }
            }

        });

    }

})();
