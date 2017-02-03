angular.module("website.urls", [])
    .config([
        "$locationProvider",
        function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }])
    .factory("urls", [
        "$location",
        function ($location) {
            var urls = {};
            urls.empresa = "empresa";
            urls.contacto = "contacto";
            urls.apps = "apps"
            urls.armeria = "armeria";
            urls.armeria.politicaPrivacidad = "politicaprivacidad";
            urls.horario = "horario";
            urls.horario.politicaPrivacidad = "politicaprivacidad";

            //FIX: encodeURI si tiene espacios: http://curran.github.io/screencasts/introToAngular/exampleViewer/#/44
            urls.goToPage = function (url) {
                $location.url(url);
                urls.currentPage = url;
            };

            urls.goToFirstPage = function () {
                urls.goToPage(urls.empresa);
            };

            urls.isCurrentPage = function (url) {
                return url == urls.currentPage;
            };

            return urls;
        }]);