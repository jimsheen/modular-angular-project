app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl: 'src/app/components/home/homeView.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: 'src/app/components/home/homeView.html',
            controller: 'homeController'
        })

});
