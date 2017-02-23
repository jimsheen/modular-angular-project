var app = angular.module('app', ['ngRoute']);



app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl: 'min/homeView.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: 'min/homeView.html',
            controller: 'homeController'
        })

}]);

app.controller('homeController', ["$scope", function($scope) {

	// stylesheet for home page used by cssLinkDirective
	$scope.cssLink = 'home';

    // create a message to display in our view
    $scope.message = 'Home page view message';

    $scope.ready = true;
}]);


app.directive('cssLink', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<link rel="stylesheet" ng-href="min/css/{{cssLink}}.css"></link>'
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAucm91dGVzLmpzIiwiY29tcG9uZW50cy9ob21lL2hvbWVDb250cm9sbGVyLmpzIiwic2hhcmVkL2RpcmVjdGl2ZXMvY3NzTGlua0RpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLE1BQUEsUUFBQSxPQUFBLE9BQUEsQ0FBQTs7OztBQ0FBLElBQUEsMEJBQUEsU0FBQSxnQkFBQTtJQUNBOztTQUVBLEtBQUEsS0FBQTtZQUNBLGFBQUE7WUFDQSxZQUFBOztTQUVBLEtBQUEsVUFBQTtZQUNBLGFBQUE7WUFDQSxZQUFBOzs7OztBQ1RBLElBQUEsV0FBQSw2QkFBQSxTQUFBLFFBQUE7OztDQUdBLE9BQUEsVUFBQTs7O0lBR0EsT0FBQSxVQUFBOztJQUVBLE9BQUEsUUFBQTs7OztBQ1JBLElBQUEsVUFBQSxXQUFBLFdBQUE7SUFDQSxPQUFBO1FBQ0EsVUFBQTtRQUNBLFNBQUE7UUFDQSxVQUFBOzs7QUFHQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZSddKTtcblxuXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAvLyByb3V0ZSBmb3IgdGhlIGhvbWUgcGFnZVxuICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbWluL2hvbWVWaWV3Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDb250cm9sbGVyJ1xuICAgICAgICB9KVxuICAgICAgICAud2hlbignL2Fib3V0Jywge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtaW4vaG9tZVZpZXcuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUNvbnRyb2xsZXInXG4gICAgICAgIH0pXG5cbn0pO1xuIiwiYXBwLmNvbnRyb2xsZXIoJ2hvbWVDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cblx0Ly8gc3R5bGVzaGVldCBmb3IgaG9tZSBwYWdlIHVzZWQgYnkgY3NzTGlua0RpcmVjdGl2ZVxuXHQkc2NvcGUuY3NzTGluayA9ICdob21lJztcblxuICAgIC8vIGNyZWF0ZSBhIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiBvdXIgdmlld1xuICAgICRzY29wZS5tZXNzYWdlID0gJ0hvbWUgcGFnZSB2aWV3IG1lc3NhZ2UnO1xuXG4gICAgJHNjb3BlLnJlYWR5ID0gdHJ1ZTtcbn0pO1xuIiwiYXBwLmRpcmVjdGl2ZSgnY3NzTGluaycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICByZXBsYWNlOiAndHJ1ZScsXG4gICAgICAgIHRlbXBsYXRlOiAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIG5nLWhyZWY9XCJtaW4vY3NzL3t7Y3NzTGlua319LmNzc1wiPjwvbGluaz4nXG4gICAgfTtcbn0pO1xuIl19
