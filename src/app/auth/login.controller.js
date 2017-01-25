(function () {
    'use strict';

    angular
        .module('project')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(AuthService) {
        var vm = this;
        vm.AuthService = AuthService;
    }
})();
