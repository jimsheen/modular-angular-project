app.controller('homeController', function($scope) {

	// stylesheet for home page used by cssLinkDirective
	$scope.cssLink = 'home';

    // create a message to display in our view
    $scope.message = 'Home page view message';
});
