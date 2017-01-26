(function () {
    'use strict';

    angular
        .module('project')
        .service('RequestMaker', RequestMaker);
    /** @ngInject */
    function RequestMaker($http, config) {
        var _this = this;
        _this.$http = $http;
        _this.config = config;

        _this.makeRequestUrl = function (url) {
            var REQUEST_URL = '';
            REQUEST_URL = _this.config.API_URL + url;
            return REQUEST_URL;
        };

        _this.post = function (url, data, customSettings) {
            var REQUEST_URL = _this.makeRequestUrl(url.url);

            if (typeof customSettings != "undefined") {
                return _this.$http.post(REQUEST_URL, data, customSettings);
            } else {
                return _this.$http.post(REQUEST_URL, data, {headers: {}});
            }

        };

        _this.get = function (url, customSettings) {
            var REQUEST_URL = _this.makeRequestUrl(url.url);

            if (typeof customSettings != "undefined") {
                return _this.$http.get(REQUEST_URL, customSettings);
            } else {
                return _this.$http.get(REQUEST_URL, {headers: {}});
            }
        };

        _this.patch = function (url, data, customSettings) {
            var REQUEST_URL = _this.makeRequestUrl(url.url);

            if (typeof customSettings != "undefined") {
                return _this.$http.patch(REQUEST_URL, data, customSettings);
            } else {
                return _this.$http.patch(REQUEST_URL, data, {headers: {}});
            }
        };

        _this.delete = function (url, customSettings) {
            var REQUEST_URL = _this.makeRequestUrl(url.url);

            if (typeof customSettings != "undefined") {
                return $http.delete(REQUEST_URL, customSettings);
            } else {
                return $http.delete(REQUEST_URL, {headers: {}});
            }
        };
    }


})();