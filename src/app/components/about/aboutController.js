app.controller('aboutController', function($scope, $route) {

	 $scope.$route = $route;

    // create a message to display in our view
    $scope.message = 'About page view message';
});
