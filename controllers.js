weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    // Sets the city to the default
    $scope.city = cityService.city;

    $scope.submit = function() {
        $location.path("/currentWeather");
    }

    // When the city property is changed, update the service, which can be used in other pages
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('currentWeatherController', ['$scope', '$http', 'cityService', function($scope, $http, cityService) {
    // Sets the city scope on the forecast page to be whatever is in the service
    $scope.city = cityService.city;

    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city + "&appid=aafad360d909eb69d775309f5e7443b7").success(function(data) {
        $scope.currentTemp = kelvinToCelcius(data.main.temp);
        $scope.feelsLike = kelvinToCelcius(data.main.feels_like);
    });
    
    kelvinToCelcius = function(kelvinTemp) {
        return Math.round(kelvinTemp - 273.15);
    }
}]);