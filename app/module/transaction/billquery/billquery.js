define(function(require,exports,module){
    var app = require('app');
    require('miDatepicker');
    require('mselect');

    app.register.controller('billqueryCtrl', ['$rootScope', '$scope', '$http', '$modal', '$state', '$stateParams', '$sce', 'dateFilter',
    function($rootScope, $scope, $http, $modal, $state, $stateParams, $sce, dateFilter) {
    $scope.title = '账单查询';
    $scope.titleIcon = '';

    var currentY = dateFilter($rootScope.startTime, 'yyyy')||2017;
    var currentM = dateFilter($rootScope.startTime, 'MM')||12;
    $scope.currentY = getcurrentY();
    $scope.currentM = getcurrentM();
     // init params
    $scope.queryParams = {
        billDate: currentY+'-'+currentM,
        merchantId: "1000000035"
    };
    angular.forEach($stateParams, function(value, index) {
        if(value) {
            $scope.queryParams[index] = value;
        }
    });

    function getcurrentY(){
        var cY = [];
        for(var a=0;a<11;a++){
            cY.push({"name": ((currentY-a)+"年"),"value": (currentY-a)});
        }
        return cY;
    }
    function getcurrentM(){
        var cM = [];
        for(var i=0;i<12;i++){
            if(currentM-i==0){
                return
            }else{
                cM.push({"name": (currentM-i+"月份"),"value":currentM-i});
            }
        }
        return cM;
    }
 	$http.get("/bill/conditions")
 		.success(function(data){
            if(data.data){
                var data = data.data.merchants;
                    $scope.billOptions = data;
            }
 		})  

    $http.get("/bill/query",{
        params: $scope.queryParams
    })
    .success(function(data){
        $scope.menuItems = data.metadata;
        $scope.datacontent = data.data;
    });


 	$scope.search = function () {
        $scope.queryParams.billDate = ($scope.queryParams.currentY+'-'+$scope.queryParams.currentM);
    	$state.go('billQuery', $scope.queryParams, {
            reload: true
        });
    };
}])
})