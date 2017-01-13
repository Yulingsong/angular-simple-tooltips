/**
 * Created by apple on 17/1/13.
 */
var app = angular.module('appDirectives', []);
app.directive("ylsTooltips", function() {
    return {
        restrict:'AE',
        scope:{
            direction:'@direction'
        },
        template:'<div ng-show="tipIsOpen" id="toolstips-direction">'+
        '<div class="wi-tooltip-arrow">'+
        '<span></span>'+
        '</div>'+
        '<div class="wi-tooltip-main-norm">'+
        '<p>'+
        '请填写协议书上资管计划编号132313213'+
        '请填写协议书上资管计划编号132313213'+
        '</p>'+
        '</div>'+
        '</div>',
        link: function ($scope,$element,attrs) {

            $element.bind('mouseenter', function(){
                console.log(1231231);
                $scope.$apply(function() {
                    $scope.tipIsOpen = true;
                });
                console.log($scope.direction);
                if($scope.direction == "left"){
                    console.log(3333)
                    console.log(angular);

                    angular.element("#toolstips-direction").addClass("co-tooltips");





                }else if($scope.direction == "right"){

                }else if($scope.direction == "up"){

                }else if($scope.direction == "down"){

                }
            });
            // 为tip元素绑定鼠标移出事件处理
            $element.bind('mouseleave', function(){
                console.log(3213123);
                $scope.$apply(function() {
                    $scope.tipIsOpen = false;
                });

                if($scope.direction == "left"){
                    console.log(44444)
                }else if($scope.direction == "right"){

                }else if($scope.direction == "up"){

                }else if($scope.direction == "down"){

                }

            });


        }
    }

});

//app.directive("ylsTooltips", function() {
//    return {
//        restrict:'AE',
//        scope:{
//            direction:'@direction',
//            content:'='
//        },
//        template:'<div ng-show="tipIsOpen" id="toolstips-box">'+
//        '<div id="tooltips-arrow">'+
//        '<span id="tooltips-innerarrow"></span>'+
//        '</div>'+
//        '<div id="tooltips-content">'+
//        '<p>'+
//        '{{content}}'+
//        '</p>'+
//        '</div>'+
//        '</div>',
//        link: function ($scope,$element,attrs) {
//
//            $element.bind('mouseenter', function(){
//                console.log(1231231);
//                $scope.$apply(function() {
//                    $scope.tipIsOpen = true;
//                });
//                console.log($scope.direction);
//                if($scope.direction == "left"){
//                    console.log(3333);
//                    console.log(angular);
//
//                    angular.element("#toolstips-box").addClass("co-tooltips");
//                    angular.element("#tooltips-arrow").addClass("wi-tooltip-arrow");
//                    angular.element("#tooltips-innerarrow").addClass("wi-tooltip-arrow-span");
//                    angular.element("#tooltips-content").addClass("wi-tooltip-main-norm");
//
//
//
//
//
//                }else if($scope.direction == "right"){
//                    angular.element("#toolstips-box").addClass("co-leftTooltips");
//                    angular.element("#tooltips-arrow").addClass("wi-tooltip-leftarrow");
//                    angular.element("#tooltips-innerarrow").addClass("wi-tooltip-arrow-spantwo");
//                    angular.element("#tooltips-content").addClass("wi-tooltip-main-left");
//
//
//                }else if($scope.direction == "up"){
//
//                }else if($scope.direction == "down"){
//
//                }
//            });
//            // 为tip元素绑定鼠标移出事件处理
//            $element.bind('mouseleave', function(){
//                console.log(3213123);
//                $scope.$apply(function() {
//                    $scope.tipIsOpen = false;
//                });
//
//                if($scope.direction == "left"){
//                    console.log(44444)
//                    angular.element("#toolstips-box").removeClass("co-tooltips");
//                    angular.element("#tooltips-arrow").removeClass("wi-tooltip-arrow");
//                    angular.element("#tooltips-content").removeClass("wi-tooltip-main-norm");
//                }else if($scope.direction == "right"){
//
//                }else if($scope.direction == "up"){
//
//                }else if($scope.direction == "down"){
//
//                }
//
//            });
//
//
//        }
//    }
//
//});