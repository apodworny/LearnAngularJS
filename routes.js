weatherApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).when('/currentWeather', {
        templateUrl: 'pages/currentWeather.html',
        controller: 'currentWeatherController'
    })
});