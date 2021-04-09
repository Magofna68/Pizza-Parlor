// -------------------------- Business Logic -------------------------

function Pizza(name, size, crust, sauce, topping1, topping2, topping3) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.currentId = 0;
  this.price = {};


  Pizza.prototype.priceTotal = function attachListener() {
    let button = document.getElementById("#btnTotal")
    $(button).on('click', function () {
      const basePrice = 10;
      let totalPrice = 0;
      if (inputtedTopping3 != "none") {
        totalPrice = basePrice + 12;
      } else if (inputtedTopping2 != "none") {
        totalPrice = basePrice + 8;
      } else if (inputtedTopping1.includes != "none") {
        totalPrice = basePrice + 4;
      } else {
        totalPrice = basePrice;
      }
      return totalPrice
    });
  };

  Pizza.prototype.addCost = function (pizza) {
    this.pizza[pizza.price] = price;
  }
  Pizza.prototype.pizzaPrice = function () {
    pizza.addCost(pizza)
    return createdPizza
  };

  Pizza.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
  }
  // --------------------------- UI Logic ------------------------------




  $(document).ready(function () {
    $("form#new-pizza").submit(function (event) {
      event.preventDefault();
      const inputtedName = $("input#name").val();
      const inputtedSize = $("input#size").val();
      const inputtedCrust = $("input#crust").val();
      const inputtedSauce = $("input#sauce").val();
      const inputtedTopping1 = $("input#topping1").val();
      const inputtedTopping2 = $("input#topping2").val();
      const inputtedTopping3 = $("input#topping3").val();
      $("#show-cost").show("Pizza.prototype.priceTotal")
      $("input#name").val("");
      $("input#size").val("");
      $("input#crust").val("");
      $("input#sauce").val("");
      $("input#topping1").val("");
      $("input#topping2").val("");
      $("input#topping3").val("");

      let createdPizza = new Pizza(inputtedName, inputtedSize, inputtedCrust, inputtedSauce, inputtedTopping1, inputtedTopping2, inputtedTopping3);
      let completedOrder = (createdPizza,)
      console.log(createdPizza)
    });
  });