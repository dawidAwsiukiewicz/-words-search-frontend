(function () {
    'use strict';

    angular
        .module('project')
        .service('AuthTokenStorage', AuthTokenStorage);
    /** @ngInject */
    function AuthTokenStorage($window) {
        var _this = this;
        _this.key = 'auth-token';
        _this.store = $window.localStorage;

        this.getToken = function () {
            return _this.store.getItem(_this.key);
        };

        this.setToken = function(token) {
            if (token) {
                _this.store.setItem(_this.key, token);
            } else {
                _this.store.removeItem(_this.key);
            }
        };
    }


})();