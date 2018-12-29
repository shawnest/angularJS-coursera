(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.dishes = "";
        $scope.name = "Yaakov";
        $scope.message = "";

        $scope.displayMessage = function(){
            var items = calculateItemsNo($scope.dishes);
            if($scope.dishes == ""){
                $scope.message = "Please enter data first";
            }else if(items < 4){
                $scope.message = "Enjoy";
            }else if(items >3){
                $scope.message = "Too much!";
            }
        };

        function calculateItemsNo(string){
            var words = string.split(',');
            return words.length;
        }
    }
})();