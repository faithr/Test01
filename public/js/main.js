/**
 * Created by froth on 3/6/2016.
 */

angular
    .module('MyApp', ['ngMaterial', 'ngMessages', 'ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('index', {
                url: "",
                views: {
                    "topnav": {
                        templateUrl: "/states/topnav"
                    },
                    "sidenav": {templateUrl: "/states/sidenav"},
                    "list": {
                        templateUrl: "/states/list",
                        controller:"ListCtrl as lc"
                    }
                }
            });
    });