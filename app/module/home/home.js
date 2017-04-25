define(function(require,exports,module){
    var app = require('app');
    	require('mselect');
        app.register.controller("homeCtrl",function($scope){
            $scope.home = "1233466";
             var optionList = [];
	    for(var i=0;i<10;i++){
	    	optionList.push(i);
	    }
	    $scope.optionsvalue = "自定义指令组件";
	    $scope.options = optionList;
	    	console.log($scope.options);
        })
})