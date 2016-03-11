/**
 * Created by froth on 3/6/2016.
 */
angular.module("MyApp")
    .controller('TestCtrl', testCtrl);

function testCtrl() {
    var vm = this;

    vm.subtitle = "You gotta have Faith";
    vm.text = [
        {
            "category": "Tennis",
            "title": "Green Knoll Tennis Center ",
            "address": "Bridgewater, NJ",
            "miles": ".5 miles"
        },
        {
            "category": "Martial Arts",
            "title": "Bridgewater Martial Arts ",
            "address": "Bridgewater, NJ",
            "miles": "1.2 miles"
        }
        ,
        {
            "category": "Voice",
            "title": "School of Rock",
            "address": "Somerville, NJ",
            "miles": "2.1 miles"
        }
        , {
            "category": "Photography",
            "title": "NJ School of Photography",
            "address": "Somerville, NJ",
            "miles": "7.4 miles"
        }];


}