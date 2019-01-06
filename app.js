(function(){
    'use strict'
    angular.module('ShoppingListCheckOff', []).
    controller('ToBuyController', ToBuyController).
    controller('AlreadyBoughtController', AlreadyBoughtController).
    service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];    
    function ToBuyController(ShoppingListCheckOffService){
        var myController = this;
        myController.items = ShoppingListCheckOffService.getToBuyItems();

        myController.buyItem = function(itemIndex){
            ShoppingListCheckOffService.removeItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var myController = this;
        myController.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyItems = [
            {name: "Cola", quantity: "1 liter"},
            {name: "Chips", quantity: "10 bags"},
            {name: "Rudi", quantity: "2 rolls"},
            {name: "Apple", quantity: "2 big"},
            {name: "Cookies", quantitiy: "2 bags"}
        ]

        var boughtItems = [];

        service.getToBuyItems = function(){
            return toBuyItems;
        }

        service.getBoughtItems = function(){
            return boughtItems;
        }

        service.removeItem = function(itemIndex){
            let temp = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(temp);
        }

    }




})();