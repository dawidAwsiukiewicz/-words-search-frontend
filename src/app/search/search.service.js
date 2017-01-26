(function () {
    'use strict';

    angular
        .module('project')
        .service('SearchService', SearchService);
    /** @ngInject */
    function SearchService(AlertService, ErrorHandlerService, $state, RequestMaker) {
        var _this = this;
        _this.AlertService = AlertService;
        _this.ErrorHandlerService = ErrorHandlerService;
        _this.$state = $state;
        _this.RequestMaker = RequestMaker;

        _this.filters = {
            per_page: 100,
            page: 1
        };

        _this.getList = function (filter) {
            if (typeof filter == 'undefined') {
                filter = _this.filters;
            }
            return _this.RequestMaker.get({
                url: '/search/page/'
            }, {
                params: filter
            }).then(function (response) {
                return response.data;
            });
        };


    }


})();