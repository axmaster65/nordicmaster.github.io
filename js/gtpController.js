//AngularJS
var myApp=angular.module('myApp');
myApp.controller('gtpController', function($scope) {
    //$scope.sortparam='-rate';
    $scope.gtp={
        text: 'tab1',
        author: 'NM',
        date: '20/10/2019'
    };
    $scope.textJson={
        text: '',
        author: 'NM',
        date: '20/10/2019'
    };
    $scope.changeClass = function (e) {         
        $scope.gtp.text = 'newtab';
    }
    $scope.fetchJson = function (e) {
        $scope.textJson.text = '65';
            //'<a href="https://nordicmaster.github.io/table_items.json">json</a>';
        //JSON.parse("https://nordicmaster.github.io/table_items.json");
    }
});
