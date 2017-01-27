(function () {
    'use strict';

    angular
        .module('project')
        .controller('SearchController', SearchController);

    /** @ngInject */
    function SearchController(SearchService) {
        var vm = this;
        vm.SearchService = SearchService;
        vm.item= {};

        vm.submitForm = function(item, form){
            var file = document.getElementById('uploadFile').files[0];
            vm.SearchService.addItem(item, form, file);
        };
        
    }
})();
