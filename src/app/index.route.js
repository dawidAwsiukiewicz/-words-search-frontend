(function () {
    'use strict';

    angular
        .module('project')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                templateUrl: 'app/main/main.html'
            })
            .state('root.search', {
                url: 'search/',
                views: {
                    'content@root': {
                        templateUrl: 'app/search/form.html',
                        controller: 'SearchController',
                        controllerAs: 'vc'
                    }
                }

            })
            .state('root.results', {
                url: 'results/',
                views: {
                    'content@root': {
                        templateUrl: 'app/search/results.html',
                        controller: 'SearchResultsController',
                        controllerAs: 'vc'
                    }
                }
            })
            .state('login', {
                url: '/',
                templateUrl: 'app/auth/login.html',
                controller: 'LoginController',
                controllerAs: 'vc'
            });


        $urlRouterProvider.otherwise('/');
    }

})();
