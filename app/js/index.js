define(function(require,exports,module){
	var app = require('app');
	// var mselect = require("mselect");
	//内联式依赖注入
	app.controller("main",["$scope","$http","$modal",function($scope,$http,$modal){
		$scope.one="hello";

		// 关于
	    $scope.about = function ($event) {
	        $event.preventDefault();

	        $modal.open({
	            templateUrl: __uri('app/module/about/about.html'),
	            animation: false,
	            controller: ['$scope','$modalInstance', function($scope,$modalInstance) {
	                $scope.title = '关于';
	                $scope.project = '统一收银台后台系统';
	            }]
	        });
	    }

	   
		// 菜单数据
        $http.get('/menu/list').success(function(data, status, headers, config){
            var menuList = data.data.menuList;
            var userInfo = data.data.userInfo || {};
            angular.forEach(menuList, function(item, index) {
                if(index == 0) {
                    item.open = true;
                } else  {
                    item.open = false;
                } 
            });
            $scope.menuList = menuList;
            $scope.userInfo = {
                tickname: userInfo.userName || 'damon_chen'
            }
        });

	}])
})