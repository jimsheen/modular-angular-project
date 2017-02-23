app.controller('homeController', function($scope, $route) {

	 $scope.$route = $route;

    // create a message to display in our view
    $scope.message = 'Home page view message';
});
