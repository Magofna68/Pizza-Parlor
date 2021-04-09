// -------------------------- Business Logic -------------------------

function Pizza(name, size, crust, sauce, topping1, topping2, topping3) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

btnTotal.addEventListener('click', function () {
  Pizza.prototype.priceTotal = btnTotal.addEventListener('click', function () {
    const basePrice = 10;
    let totalPrice = 0;
    if (inputtedTopping3 != "none") {
      totalPrice = basePrice + 12;
    } else if (inputtedTopping2 != "none") {
      totalPrice = basePrice + 8;
    } else if (inputtedTopping1.includes != "none") {
      totalPrice = basePrice + 4;
    }
  }
      // --------------------------- UI Logic ------------------------------

$(document).ready(function () {
    attachContactListeners();
    $("form#new-pizza").submit(function (event) {
      event.preventDefault();
      const inputtedName = $("input#name").val();
      const inputtedSize = $("input#size").val();
      const inputtedCrust = $("input#crust").val();
      const inputtedSauce = $("input#sauce").val();
      const inputtedTopping1 = $("input#topping1").val(4);
      const inputtedTopping2 = $("input#topping2").val(8);
      const inputtedTopping3 = $("input#topping3").val(12);

      $("input#name").val("");
      $("input#size").val("");
      $("input#crust").val("");
      $("input#sauce").val("");
      $("input#topping1").val("");
      $("input#topping2").val("");
      $("input#topping3").val("");

      let createdPizza = new Pizza(inputtedName, inputtedSize, inputtedCrust, inputtedSauce, inputtedTopping1, inputtedTopping2, inputtedTopping3);
    });
  });