define(function(require,exports,module){
    var app = require('app');
    require('miDatepicker');
    require('mselect');

    app.register.controller('merchantDetailCtrl', ['$rootScope', '$scope', '$http', '$modal', '$state', '$stateParams', '$sce', 'dateFilter',
        function($rootScope, $scope, $http, $modal, $state, $stateParams, $sce, dateFilter) {
        $scope.title = '商户详情';
        $scope.titleIcon = '';

        var merchantId = $stateParams.merchantId;

        $http.get('/merchant/query', {
        	params: {
        		merchantId: merchantId
        	}
        }).success(function(data, status, headers, config) {
        	var bodyData = data.data;

        	$scope.merchant = bodyData;
        });

        $scope.back = function () {
        	console.log('ddd');
        	$state.go('merchantUpdate');
        };
    }]);
})