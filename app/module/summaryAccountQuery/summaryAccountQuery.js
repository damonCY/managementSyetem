/**
 * 统一收银台 对账-支付宝账务汇总
 * 
 * @author  damon_chen
 * @version $Id$
 */

define(function(require,exports,module){
var app = require('app');
require('miDatepicker');
require('mselect');

app.register.controller('summaryAccountQueryCtrl', ['$rootScope', '$scope', '$http', '$modal', '$state', '$stateParams', '$sce', 'dateFilter',
    function($rootScope, $scope, $http, $modal, $state, $stateParams, $sce, dateFilter) {
    $scope.title = '支付宝账务汇总';
    $scope.titleIcon = '';

    // init params
    $scope.queryParams = {
        saDate: dateFilter($rootScope.endTime, 'yyyy-MM-dd')
    };
    angular.forEach($stateParams, function(value, index) {
        if(value) {
            $scope.queryParams[index] = value;
        }
    });
    
    $http.get('/summaryaccount/query', {
    	params: $scope.queryParams
    }).success(function(data, status, headers, config) {
    	var metaData = data.metadata;
    	var bodyData = data.data;

    	var tableHead = [];
    	angular.forEach(metaData, function(item, key) {
    		item.name = key;
    		tableHead.push(item);
    	});
    	$scope.tableHead = tableHead;
    	$scope.tableBody = bodyData;
    });

    $scope.fixBody = function (body, head) {
        var td = body[head.name];
        var html = '<a href="'+td.action+'">'+td.name+'</a>';

        return $sce.trustAsHtml(html);
    };

    $scope.search = function () {
    	$state.go('summaryAccountQuery', $scope.queryParams, {
            reload: true
        });
    };
}]);
})