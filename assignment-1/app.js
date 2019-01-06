(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.dishes = "";
        $scope.name = "Yaakov";
        $scope.message = "";
        $scope.messageStyle = "";

        $scope.displayMessage = function(){
            var items = calculateItemsNo($scope.dishes);
            if($scope.dishes == ""){
                $scope.message = "Please enter data first";
                $scope.messageStyle = {"color": "red", "border" : "1px solid red"};
            }else if(items < 4){
                $scope.message = "Enjoy";
                $scope.messageStyle = {"color": "green", "border" : "1px solid green"};
            }else if(items >3){
                $scope.message = "Too much!";
                $scope.messageStyle = {"color": "green", "border" : "1px solid green"};
            }
        };

        function calculateItemsNo(string){
            var words = string.split(',').filter(function(el) {return el.length != 0})
            return words.length;
        }
    }
})();