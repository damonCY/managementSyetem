define(function(require,exports,module){

require('angular');
require('uiRouter');
var routerDefs = require('routerDefs');
require('angular-ui-bootstrap');
require('ui-bootstrap-tpls');

	var app = angular.module('webapp',['ui.router','ui.bootstrap']);
    	app.config(function($stateProvider,$urlRouterProvider,$controllerProvider,$compileProvider,$filterProvider,$provide){ //将$stateProvider和$urlRouteProvider路由引擎作为函数参数传入；

    		app.register = {      //先注册动态加载的controller directive等
    			controller: $controllerProvider.register,
    			directive: $compileProvider.directive,
    			filter: $filterProvider.register,
    			service: $provide.service
    		};

            app.deps = function(src){
                return ['$q',function($q){
                        var deferred = $q.defer();
                        require([src],function(){ deferred.resolve();});
                        return deferred.promise;
                    }]
            }

    		routerDefs($stateProvider,$urlRouterProvider,app); // 引入路由模块
    	})


    return app;
})
  