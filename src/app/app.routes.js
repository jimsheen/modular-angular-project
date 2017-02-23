app.config(function($routeProvider, $locationProvider) {
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
});
