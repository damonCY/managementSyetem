/**
 * @author damon_chen
 */

define(function(require,exports,module){ 
var app = require('app');

app.register.directive('miDatepicker', ['$filter', function($filter) {
    return {
        restrict: 'AE',
        replace: true,
        template: __inline('miDatepicker.html'),
        scope: {
            prefix: '@',
            format: '@',
            time: '='
        },
        link: function($scope, iElement, iAttrs) {
            var $input = iElement.find('input');
            if(iAttrs.readonly){
                $input.attr('readonly', iAttrs.readonly);
                $input.attr('disabled', true);
                return;
            }

            // 定义默认datepicker格式
            $scope.datepickerFormat = $scope.format || 'yyyy-MM-dd';

            if (typeof $scope.time === 'string') {
                // 兼容IE8的日期格式转换
                $scope.time = new Date($scope.time.replace(/-/g, '/'));
            } else {
                $scope.time = $scope.time;
            }

            // 按钮点击打开选择panel
            $scope.datepicker = function($event) {
                $scope.opened = true;
                $event.stopPropagation();
            }

            // 日期格式化
            $scope.$watch('time', function() {
                $scope.time = $filter('date')($scope.time, $scope.datepickerFormat);
            });
        }
    };
}])
})
