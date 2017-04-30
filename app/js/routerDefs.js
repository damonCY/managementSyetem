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
	        var emptyTplInherit = __uri('../empty.html');

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

	        // 对账查看
	        .state('reconcileQuery', {
	            url: '/reconcileQuery?startDate&endDate',
	            templateUrl: function(stateParams){
	                return __uri('app/module/reconcile/reconcile.html');
	            },
	            controller: 'reconcileCtrl',
	            resolve: {
	                deps: app.deps('app/module/reconcile/reconcile.js')
	            }
	        })

	        .state('operateMerchantSettlement', {
	            url: '/operateMerchantSettlement?startDate&endDate&merchantId&settleStatus&checkStatus',
	            templateUrl: function(stateParams){
	                return __uri('app/module/operateMerchantSettlement/operateMerchantSettlement.html');
	            },
	            controller: 'operateMerchantSettlementCtrl',
	            resolve: {
	                deps: app.deps('app/module/operateMerchantSettlement/operateMerchantSettlement.js')
	            }
	        })
	        // 出款-现金结算复核
	        .state('checkMerchantSettlement', {
	            url: '/checkMerchantSettlement?startDate&endDate&merchantId&settleStatus&checkStatus',
	            templateUrl: function(stateParams){
	                return __uri('app/module/checkMerchantSettlement/checkMerchantSettlement.html');
	            },
	            controller: 'checkMerchantSettlementCtrl',
	            resolve: {
	                deps: app.deps('app/module/checkMerchantSettlement/checkMerchantSettlement.js')
	            }
	        })

	        // 成本报表
	        .state('costReport', {
	            url: '/costReport?crYear',
	            templateUrl: function(stateParams){
	                return __uri('app/module/costReport/costReport.html');
	            },
	            controller: 'costReportCtrl',
	            resolve: {
	                deps: app.deps('app/module/costReport/costReport.js')
	            }
	        })

	        //商户报表
	        .state('balance',{
	            abstract: true,
	            templateUrl: emptyTplInherit
	        })
	        // 清结算报表-试算平衡表 
	        .state('balance.summary',{
	            url: '/balance/summary?startDate&endDate',
	            templateUrl: function(stateParams){
	                return __uri('app/module/balance/summary/summary.html');
	            },
	            controller: 'summaryCtrl',
	            resolve: {
	                deps: app.deps('app/module/balance/summary/summary.js')
	            }
	        })
	        // 清结算报表-科目余额表 
	        .state('balance.title',{
	            url: '/balance/title?startDate&endDate&level',
	            templateUrl: function(stateParams){
	                return __uri('app/module/balance/title/title.html');
	            },
	            controller: 'titleCtrl',
	            resolve: {
	                deps: app.deps('app/module/balance/title/title.js')
	            }
	        })

	        // 清结算报表-账户余额 (内部)
	        .state('balance.account',{
	            url: '/balance/account?startDate&endDate',
	            templateUrl: function(stateParams){
	                return __uri('app/module/balance/account/account.html');
	            },
	            controller: 'accountCtrl',
	            resolve: {
	                deps: app.deps('app/module/balance/account/account.js')
	            }
	        })

	        // 交易查询
	        .state('bizQuery', {
	            url: '/bizQuery?startDate&endDate&bizType&bizStatus&merchantId&bizIdType&bizId&accountId&timeType&pageNo&pageSize',
	            templateUrl: function(stateParams){
	                return __uri('app/module/transaction/transaction.html');
	            },
	            controller: 'transactionCtrl',
	            resolve: {
	                deps: app.deps('app/module/transaction/transaction.js')
	            }
	        })

	        // 账单查询
	        .state('billQuery', {
	            url: '/billQuery?billDate&merchantId&currentY&currentM',
	            templateUrl: function(stateParams){
	                return __uri('app/module/transaction/billquery/billquery.html');
	            },
	            controller: 'billqueryCtrl',
	            resolve: {
	                deps: app.deps('app/module/transaction/billquery/billquery.js')
	            }
	        })
	        // 商户信息设置
	        .state('merchantUpdate', {
	            url: '/merchantSetting?startDate&endDate',
	            templateUrl: function(stateParams){
	                return __uri('app/module/merchantSetting/merchantSetting.html');
	            },
	            controller: 'merchantSettingCtrl',
	            resolve: {
	                deps: app.deps('app/module/merchantSetting/merchantSetting.js')
	            }
	        })

    }

})