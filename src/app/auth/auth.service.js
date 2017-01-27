(function () {
    'use strict';

    angular
        .module('project')
        .service('AuthService', AuthService);
    /** @ngInject */
    function AuthService(AlertService, ErrorHandlerService, AuthTokenStorage, localStorageService, $state, RequestMaker) {
        var _this = this;
        _this.AlertService = AlertService;
        _this.ErrorHandlerService = ErrorHandlerService;
        _this.AuthTokenStorage = AuthTokenStorage;
        _this.localStorageService = localStorageService;
        _this.$state = $state;
        _this.RequestMaker = RequestMaker;
        _this.registerForm = false;

        _this.login = function (username, password) {
            return _this.RequestMaker.post({url: '/auth'}, {
                username: username, password: password
            }).then(function (response) {
                _this.AuthTokenStorage.setToken(response.data.token);
                _this.localStorageService.set('User', response.data.user_data);

                $state.go('root.search');

            }).catch(function (response) {
                _this.ErrorHandlerService.notifyUser(response);
                return response;
            });
        };
        
        _this.register = function (username, password) {

            _this.registerForm = false;
            return _this.RequestMaker.post({url: '/register/register/'}, {
                email: username, password: password
            }).then(function (response) {
                if(response.status == 201){
                    _this.registerForm = false;
                    _this.AlertService.successMessage({},"Twoje konto zostało utworzone.")
                }

            }).catch(function (response) {
                _this.ErrorHandlerService.notifyUser(response);
                return response;
            });
        };

        _this.logout = function () {

            _this.AlertService.confirmMessage('Wyloguj się', 'Czy na pewno chcesz się wylogować?', {
                onTap: function () {
                    var tempToken = AuthTokenStorage.getToken();
                    _this.$state.go('login');
                    _this.AuthTokenStorage.setToken();
                    _this.localStorageService.remove('User');
                    return _this.RequestMaker.post({url: '/logout'}, null, {headers: {'Authorization': 'Token ' + tempToken}});
                }
            });
        }
    }


})();