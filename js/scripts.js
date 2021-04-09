// -------------------------- Business Logic -------------------------
// var inputtedTopping3 = document.getElementById("#topping3").val();
debugger
function Pizza(name, size, crust, sauce, topping1, topping2, topping3) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}
Pizza.prototype.priceTotal = function () {
  var top3 = this.topping3;
  var top2 = this.topping2;
  var top1 = this.topping1;
  const basePrice = 10;
  let totalPrice = 0;
  if (top3 != "") {
    totalPrice = basePrice + 12;
  } else if (top2 != "") {
    totalPrice = basePrice + 8;
  } else if (top1 != "") {
    totalPrice = basePrice + 4;
  } else {
    totalPrice = basePrice;
  }
  Pizza.price = totalPrice;
  return totalPrice;
}

// function Order(name) {
//   this.name = name;
//   this.numberId = 0;
// }

// function newOrder() {
//   let order1 = new Order();

// // Pizza.prototype.addName = function (name) {
// //   this.name[Pizza.name] = name;
// }
// Pizza.prototype.pizzaPrice = function () {
//   pizza.addCost(pizza)
//   return createdPizza
// };

// // Pizza.prototype.assignId = function () {
// //   this.currentId += 1;
// //   return this.currentId;
// }
// --------------------------- UI Logic ------------------------------


$(document).ready(function () {
  $("form#new-pizza").submit(function (event) {
    event.preventDefault(); debugger

    const inputtedName = $("input#name").val();
    const inputtedSize = $("input#size").val();
    const inputtedCrust = $("input#crust").val();
    const inputtedSauce = $("input#sauce").val();
    const inputtedTopping1 = $("input#topping1").val();
    const inputtedTopping2 = $("input#topping2").val();
    const inputtedTopping3 = $("input#topping3").val();
    let createdPizza = new Pizza(inputtedName, inputtedSize, inputtedCrust, inputtedSauce, inputtedTopping1, inputtedTopping2, inputtedTopping3);
    createdPizza.priceTotal();
    var total = createdPizza.priceTotal();
    console.log(total);
    $(".price").text(total);
    $("#receipt").show();

    $("input#name").val("");
    $("input#size").val("");
    $("input#crust").val("");
    $("input#sauce").val("");
    $("input#topping1").val("");
    $("input#topping2").val("");
    $("input#topping3").val("");
  });
});