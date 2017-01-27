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
        _this.bad_url_list = [];
        _this.form_success = false;

        _this.filters = {
            per_page: 100,
            page: 1
        };

        _this.addItem = function(item, form, files) {
            var form_item = angular.copy(item);
            var fd = new FormData();
            fd.append('words',form_item.words)
            fd.append('file', files);

            return this.RequestMaker.post({
                url: '/search/page/'
            }, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(function(response) {
                form.$setPristine();
                form.$setUntouched();
                _this.bad_url_list = response.data.bad_url_list;
                _this.form_success = true;
                _this.$state.go('root.results');
                return response;
            }).catch(function(response) {
                _this.ErrorHandlerService.notifyUser(response);
                return response;
            });
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