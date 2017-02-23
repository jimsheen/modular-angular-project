app.directive('cssLink', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<link rel="stylesheet" ng-href="min/css/{{cssLink}}.css"></link>'
    };
});
