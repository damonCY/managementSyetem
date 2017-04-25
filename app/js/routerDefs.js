/**
 * routeDfs.js 前端路由设置
 * @author damon_chen
 * @deprecated [description]
 */


define(function(require,exports,module){

	return function($stateProvider,$urlRouterProvider,app) {

			$urlRouterProvider.otherwise('home');
			//路由更改html前先把resolve里边该做的事完成。
	        // 一个公共的空视图，方便创建子视图
	        // var emptyTplInherit = __uri('./empty.html');

	        // 首页
	        $stateProvider

	        .state('home', {
	            url: '/home',
	            templateUrl: function(stateParams){
	                return __uri('app/module/home/home.html');
	            },
	            controller: "homeCtrl",
	            resolve: {
	            	deps: app.deps('app/module/home/home.js')
	            }
	        })

	        // 支付宝账户汇总
	        .state('summaryAccountQuery', {
	            url: '/summaryAccountQuery',
	            templateUrl: function(stateParams){
	                return __uri('app/module/summaryAccountQuery/summaryAccountQuery.html');
	            },
	            controller: 'summaryAccountQueryCtrl',
	            resolve: {
	                deps: app.deps('app/module/summaryAccountQuery/summaryAccountQuery.js')
	            }
	        })
    }

})