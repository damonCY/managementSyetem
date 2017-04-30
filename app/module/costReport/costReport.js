define(function(require,exports,module){
    var app = require('app');
    require('mselect');
    app.register.controller('costReportCtrl', ['$rootScope', '$scope', '$http', '$modal', '$state', '$stateParams', '$sce', 'dateFilter',
    function($rootScope, $scope, $http, $modal, $state, $stateParams, $sce, dateFilter) {
    $scope.title = '成本报表';
    $scope.titleIcon = '';

    var crYear = dateFilter($rootScope.startTime, 'yyyy') || 2017;
    var yearsOptions = [];
    for(var year = 2010; year <=crYear; year++ ) {
        yearsOptions.unshift({
            name: year,
            value: year
        });
    }

     $scope.yearsOptions = yearsOptions;

    // init params
    $scope.queryParams = {
        crYear: dateFilter($rootScope.startTime, 'yyyy')
    };
    angular.forEach($stateParams, function(value, index) {
        if(value) {
            $scope.queryParams[index] = value;
        }
    });

    $http.get('/costReport/query', {
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

    $scope.search = function () {
    	$state.go('costReport', $scope.queryParams, {
            reload: true
        });
    };

    // 成本报表导出
    $scope.export = function ($event) {
        $event.preventDefault();

        $http.post('/costReport/export', $scope.queryParams, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                return str.join('&');
            }
        }).success(function(data, status, headers, config) {
            if(data.code == 0) {
                var fileUrl = data.data.fileUrl;
                location.href = fileUrl;
            } else {
                //TODO nothing
            }
        });
    };
}]);
})