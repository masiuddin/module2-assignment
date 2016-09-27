(function() {
  angular.module("ShoppingListCheckoff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service('ShoppingListCheckoffService', ShoppingListCheckoffService);

  ToBuyController.$inject = ['ShoppingListCheckoffService'];
  function ToBuyController(ShoppingListCheckoffService) {
    var toBuyCtrl = this;
    toBuyCtrl.toBuy = ShoppingListCheckoffService.toBuy;
    toBuyCtrl.buy = function(index) {
      ShoppingListCheckoffService.addItem(index);
      ShoppingListCheckoffService.removeItem(index);
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
  function AlreadyBoughtController (ShoppingListCheckoffService) {
    var boughtCtrl = this;
    boughtCtrl.boughtItems = ShoppingListCheckoffService.bought;

  }

  function ShoppingListCheckoffService() {
    var service = this;

    service.toBuy = [ { itemName:"cookies", itemQuantity:10 },
                    { itemName:"halva", itemQuantity:3 },
                    { itemName:"pies", itemQuantity:5 },
                    { itemName:"cola", itemQuantity:2 },
                    { itemName:"candies", itemQuantity:10 } ];
    service.bought = [];

    service.addItem = function(index) {
      service.bought.push(service.toBuy[index]);
    };

    service.removeItem = function(index) {
      service.toBuy.splice(index, 1);
    };
  }
})();
