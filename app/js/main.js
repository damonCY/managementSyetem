(function(win){
	var config = {
		baseUrl: "/app",
		paths: {
			"app": "/app/js/app",
			"angular": "/app/js/lib/angular/angular",
			"uiRouter": "/app/js/lib/angular-ui-router/angular-ui-router",
			"routerDefs": "/app/js/routerDefs",
			"index": "/app/js/index",
			"angular-ui-bootstrap": "/app/js/lib/angular-ui-bootstrap/ui-bootstrap",
			"ui-bootstrap-tpls": "/app/js/lib/angular-ui-bootstrap/ui-bootstrap-tpls",
			"mselect": "/app/directive/mselect/mselect",
			"miDatepicker":"/app/directive/miDatepicker/miDatepicker"
		},
		shim: {
			"angular": {
				exports: 'angular'
			},
			"uiRouter": {
				deps: ['angular'],
				exports: "uiRouter"
			},
			"angular-ui-bootstrap": {
				deps: ['angular'],
				exports: "angular-ui-bootstrap"
			},
			"ui-bootstrap-tpls": {
				deps: ["angular"],
				exports: "ui-bootstrap-tpls"
			}
		}
	}


	require.config(config);

	require(["angular","app","uiRouter","index"],function(angular){
		angular.bootstrap(document, ['webapp']);
	})
})(window)