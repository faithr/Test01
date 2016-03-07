/**
 * Created by froth on 3/6/2016.
 */
angular.module("MyApp")
    .controller('TestCtrl', testCtrl);

function testCtrl() {
    var vm = this;

    vm.title = "Faith Test App";
    vm.subtitle = "You gotta have Faith";
    vm.text = [
        {
            "title": "faith",
            "address": "28 crescent road",
            "state": "nj"
        },
        {
            "title": "david",
            "address": "28 crescent road",
            "state": "nj"
        }
        ,
        {
            "title": "rachel",
            "address": "28 crescent road",
            "state": "nj"
        }
        , {
            "title": "faith",
            "address": "28 crescent road",
            "state": "nj"
        }];


}