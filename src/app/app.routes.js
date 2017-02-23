app.config(function($routeProvider) {
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

});
