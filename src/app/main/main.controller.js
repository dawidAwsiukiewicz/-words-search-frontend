(function() {
  'use strict';

  angular
    .module('project')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(AuthService) {
    var vm = this;
    vm.AuthService = AuthService;

  }
})();
