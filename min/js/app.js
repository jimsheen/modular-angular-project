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

	$scope.cssLink = 'home';
	
    // create a message to display in our view
    $scope.message = 'Home page view message';
}]);

app.directive('cssLink', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<link rel="stylesheet" ng-href="min/css/{{cssLink}}.css"></link>'
    };
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAucm91dGVzLmpzIiwiY29tcG9uZW50cy9ob21lL2hvbWVDb250cm9sbGVyLmpzIiwic2hhcmVkL2RpcmVjdGl2ZXMvY3NzTGlua0RpcmVjdGl2ZS5qcyIsInNoYXJlZC9zaWRlYmFyL3NpZGViYXJEaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxNQUFBLFFBQUEsT0FBQSxPQUFBLENBQUE7Ozs7QUNBQSxJQUFBLDBCQUFBLFNBQUEsZ0JBQUE7SUFDQTs7U0FFQSxLQUFBLEtBQUE7WUFDQSxhQUFBO1lBQ0EsWUFBQTs7U0FFQSxLQUFBLFVBQUE7WUFDQSxhQUFBO1lBQ0EsWUFBQTs7Ozs7QUNUQSxJQUFBLFdBQUEsNkJBQUEsU0FBQSxRQUFBOztDQUVBLE9BQUEsVUFBQTs7O0lBR0EsT0FBQSxVQUFBOzs7QUNMQSxJQUFBLFVBQUEsV0FBQSxXQUFBO0lBQ0EsT0FBQTtRQUNBLFVBQUE7UUFDQSxTQUFBO1FBQ0EsVUFBQTs7OztBQ0pBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJ10pO1xuXG5cbiIsImFwcC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgIC8vIHJvdXRlIGZvciB0aGUgaG9tZSBwYWdlXG4gICAgICAgIC53aGVuKCcvJywge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtaW4vaG9tZVZpZXcuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUNvbnRyb2xsZXInXG4gICAgICAgIH0pXG4gICAgICAgIC53aGVuKCcvYWJvdXQnLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21pbi9ob21lVmlldy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ29udHJvbGxlcidcbiAgICAgICAgfSlcblxufSk7XG4iLCJhcHAuY29udHJvbGxlcignaG9tZUNvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuXHQkc2NvcGUuY3NzTGluayA9ICdob21lJztcblx0XG4gICAgLy8gY3JlYXRlIGEgbWVzc2FnZSB0byBkaXNwbGF5IGluIG91ciB2aWV3XG4gICAgJHNjb3BlLm1lc3NhZ2UgPSAnSG9tZSBwYWdlIHZpZXcgbWVzc2FnZSc7XG59KTtcbiIsImFwcC5kaXJlY3RpdmUoJ2Nzc0xpbmsnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxuICAgICAgICB0ZW1wbGF0ZTogJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBuZy1ocmVmPVwibWluL2Nzcy97e2Nzc0xpbmt9fS5jc3NcIj48L2xpbms+J1xuICAgIH07XG59KTtcbiIsIiJdfQ==
