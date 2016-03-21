/**
 * Created by froth on 3/18/2016.
 */

var debug = true;
angular.module("MyApp")
    .controller("TopNavCtrl", function ($mdSidenav) {
        this.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
        this.close = function () {
            $mdSidenav('left').close();

        }
    });
