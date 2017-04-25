define(function(require,exports,module){
	var app = require("app");
	app.directive('mselect',  [function(){
    return {
        restrict: 'E',
        replace: true,
            template: __inline('mselect.html'),
            scope: {
            theme: '@',
            options: '=',
            selected: '=',
            value: '=',
            disabled: '=',
            innerwidth:'@',
            onchange: '&'
        	},
        	link: function($scope,isElement,iAttrs){

        		$scope.$watch("options",function(){

        		});
        		if($scope.value){
        			$scope.displayName = $scope.value;
        		}else{
        			$scope.displayName = $scope.options[0].name || $scope.options[0];
        		}
        		$scope.selcet = function(option) {
	                var _displayName = option.name || option;
	                $scope.displayName = _displayName;
	            };
	        }
    	}
	}]);
})