/**
 * Created by David Ziegelheim on 3/15/2016.
 */
angular.module("MyApp")
    .controller("ListCtrl", function ($mdMedia) {  //FaithFactory
        var vm = this;
        vm.mdMedia = $mdMedia;

        vm.isDesktop=function(){
            return $mdMedia('(min-width: 960px)');
        }

        vm.isTablet=function(){
            return $mdMedia('	(min-width: 600px) and (max-width: 959px)');
        }

        vm.isPhone=function(){
            return $mdMedia('(max-width: 599px)');
        }
        //vm.act
        //
        // ivities = FaithFactory.shortact;
        //vm.cat1 = function (cats) {
        //    return FaithFactory.parseCat(0, cats);
        //};
        //vm.cat2 = function (cats) {
        //    return FaithFactory.parseCat(1, cats);
        //};
        //vm.cat3 = function (cats) {
        //    return FaithFactory.parseCat(2, cats);
        //};
        //vm.getDist = FaithFactory.getDist;
        vm.data = [];

        function addData(cat, name, city, dist) {
            var newData = {
                'category': cat,
                'name': name,
                'address': city,
                'dist': dist
            };
            vm.data.push(newData);
        }
        addData("Photography", "DMZ School of Photography in Warren", "Warren, NJ", "5.9");
        addData("Photography", "DMZ School of Photography in Warren", "Warren, NJ", "5.9");
        addData("Photography", "DMZ School of Photography in Warren", "Warren, NJ", "5.9");
        addData("Photography", "DMZ School of Photography in Warren", "Warren, NJ", "5.9");
        addData("Photography", "DMZ School of Photography in Warren", "Warren, NJ", "5.9");
        addData("Photography", "DMZ School of Photography in Warren", "Warren, NJ", "5.9");


    });