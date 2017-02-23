var app = angular.module('app', ['ngRoute', 'angularCSS']);



app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl: 'min/homeView.html',
            controller: 'homeController',
            css: 'min/css/home.css'
        })
        .when('/about', {
            templateUrl: 'min/aboutView.html',
            controller: 'aboutController',
            css: 'min/css/about.css'
        });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);

app.controller('aboutController', ["$scope", "$route", function($scope, $route) {

	 $scope.$route = $route;

    // create a message to display in our view
    $scope.message = 'About page view message';
}]);

app.controller('homeController', ["$scope", "$route", function($scope, $route) {

	 $scope.$route = $route;

    // create a message to display in our view
    $scope.message = 'Home page view message';
}]);


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAucm91dGVzLmpzIiwiY29tcG9uZW50cy9hYm91dC9hYm91dENvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2hvbWUvaG9tZUNvbnRyb2xsZXIuanMiLCJzaGFyZWQvc2lkZWJhci9zaWRlYmFyRGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsTUFBQSxRQUFBLE9BQUEsT0FBQSxDQUFBLFdBQUE7Ozs7QUNBQSxJQUFBLCtDQUFBLFNBQUEsZ0JBQUEsbUJBQUE7SUFDQTs7U0FFQSxLQUFBLEtBQUE7WUFDQSxhQUFBO1lBQ0EsWUFBQTtZQUNBLEtBQUE7O1NBRUEsS0FBQSxVQUFBO1lBQ0EsYUFBQTtZQUNBLFlBQUE7WUFDQSxLQUFBOzs7SUFHQSxrQkFBQSxVQUFBOzs7QUNkQSxJQUFBLFdBQUEsd0NBQUEsU0FBQSxRQUFBLFFBQUE7O0VBRUEsT0FBQSxTQUFBOzs7SUFHQSxPQUFBLFVBQUE7OztBQ0xBLElBQUEsV0FBQSx1Q0FBQSxTQUFBLFFBQUEsUUFBQTs7RUFFQSxPQUFBLFNBQUE7OztJQUdBLE9BQUEsVUFBQTs7O0FDTEEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnLCAnYW5ndWxhckNTUyddKTtcblxuXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgLy8gcm91dGUgZm9yIHRoZSBob21lIHBhZ2VcbiAgICAgICAgLndoZW4oJy8nLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21pbi9ob21lVmlldy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ29udHJvbGxlcicsXG4gICAgICAgICAgICBjc3M6ICdtaW4vY3NzL2hvbWUuY3NzJ1xuICAgICAgICB9KVxuICAgICAgICAud2hlbignL2Fib3V0Jywge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtaW4vYWJvdXRWaWV3Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ2Fib3V0Q29udHJvbGxlcicsXG4gICAgICAgICAgICBjc3M6ICdtaW4vY3NzL2Fib3V0LmNzcydcbiAgICAgICAgfSk7XG4gICAgLy8gdXNlIHRoZSBIVE1MNSBIaXN0b3J5IEFQSVxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbn0pO1xuIiwiYXBwLmNvbnRyb2xsZXIoJ2Fib3V0Q29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSwgJHJvdXRlKSB7XG5cblx0ICRzY29wZS4kcm91dGUgPSAkcm91dGU7XG5cbiAgICAvLyBjcmVhdGUgYSBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gb3VyIHZpZXdcbiAgICAkc2NvcGUubWVzc2FnZSA9ICdBYm91dCBwYWdlIHZpZXcgbWVzc2FnZSc7XG59KTtcbiIsImFwcC5jb250cm9sbGVyKCdob21lQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSwgJHJvdXRlKSB7XG5cblx0ICRzY29wZS4kcm91dGUgPSAkcm91dGU7XG5cbiAgICAvLyBjcmVhdGUgYSBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gb3VyIHZpZXdcbiAgICAkc2NvcGUubWVzc2FnZSA9ICdIb21lIHBhZ2UgdmlldyBtZXNzYWdlJztcbn0pO1xuIiwiIl19
