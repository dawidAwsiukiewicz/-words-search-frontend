(function () {
    'use strict';

    angular
        .module('project')
        .controller('SearchResultsController', SearchResultsController);

    /** @ngInject */
    function SearchResultsController(SearchService) {
        var vm = this;
        vm.SearchService = SearchService;
        vm.itemList = {};

          vm.filter = vm.SearchService.filters;
          vm.totalItems = 0;
          vm.loadItemList = function(filters){
            vm.itemList = {};

            vm.SearchService.getList(filters).then(function(data){
              vm.totalItems = data.count;
              vm.itemList = data;
            });
          };
        
          vm.loadItemList(vm.filter);
    }
})();
