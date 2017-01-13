/**
 * Created by apple on 17/1/13.
 */
var app = angular.module('myApp', ['appDirectives']);
app.controller('TooltipsDemoCtrl',function ($scope) {
    $scope.tipIsOpen = false;
    $scope.infoTipIsOpen = false;
    $scope.lefttipIsOpen = false;
    $scope.moveshow = function () {
        $scope.tipIsOpen = true;
    };
    $scope.leavehide = function () {
        $scope.tipIsOpen = false;
    };

    $scope.moveshowleft = function () {
        console.log(111);
        $scope.lefttipIsOpen = true;
    };
    $scope.leavehideleft = function () {
        console.log(222);
        $scope.lefttipIsOpen = false;
    };
});
