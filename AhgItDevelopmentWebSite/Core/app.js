"use strict";

angular.module("website", [
    "ngRoute",
    "ngAnimate",
    "ngMaterial",
    "website.urls"])
    .config([
        "$routeProvider",
        "$locationProvider",
        "$mdThemingProvider",
        "urlsProvider",
        function ($routeProvider, $locationProvider, $mdThemingProvider, urlsProvider) {
            $routeProvider
                .when("/", {
                    redirectTo: "/" + urlsProvider.$get().login
                })
                .otherwise({
                    redirectTo: "/"
                });

            $locationProvider.html5Mode(true);

            $mdThemingProvider.theme("default")
                .primaryPalette("indigo")
                .accentPalette("red")
                .warnPalette("deep-orange")
                .backgroundPalette("grey");
        }]);