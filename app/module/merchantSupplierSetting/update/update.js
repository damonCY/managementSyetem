define(function(require,exports,module){
    var app = require('app');
    require('miDatepicker');
    require('mselect');

    app.register.controller('merchantUpdateCtrl', ['$rootScope', '$scope', '$http', '$modal', '$state', '$stateParams', '$sce', 'dateFilter',
        function($rootScope, $scope, $http, $modal, $state, $stateParams, $sce, dateFilter) {
        $scope.title = '商户信息修改';
        $scope.titleIcon = 'fa-pencil-square-o';

        var merchantId = $stateParams.merchantId;

        $http.get('/merchant/query', {
        	params: {
        		merchantId: merchantId
        	}
        }).success(function(data, status, headers, config) {
        	var bodyData = data.data;
            if (bodyData.enableMonthlySettlement == '是') {
                bodyData.enableMonthlySettlement = 1;
            } else {
                bodyData.enableMonthlySettlement = 0;
            }
        	$scope.merchant = bodyData;
        });

        $scope.submit = function () {
            $http.post('/merchant/update', $scope.merchant, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    return str.join('&');
                }
            })
            .success(function (data, status, headers, config) {
                if(data.code == 0) {
                    // success
                    
                    alert('商户信息修改成功!');
                } else {

                }
            });
        };
    }]);
})