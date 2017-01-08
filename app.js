var Diner = function(name, dish1, dish2) {
    this.name = name;
    this.dishes = {};
    this.dishes[dish1.name] = dish1.cost;
    this.dishes[dish2.name] = dish2.cost;
    
};

Diner.prototype.total = function() {
  var total = 0;
  for (var each in mike.dishes) {
    total += mike.dishes[each];
  }
 return total;
};

Diner.prototype.tax = function() {
  var total = this.total();
  var tax = total * 0.08;
  tax = tax.toFixed(2);
  tax = Number(tax);
  return tax;
}

Diner.prototype.tip = function() {
  var total = this.total();
  var tip = total * 0.18;
  tip = tip.toFixed(2);
  tip = Number(tip);
  return tip;
}

var chicken = {
    name: 'chicken',
    cost: 10.95
};

var cheeseburger = {
    name: 'cheeseburger',
    cost: 11.95
};


var mike = new Diner('greg', chicken, cheeseburger);

console.log(mike.total());
console.log(mike.tax());
console.log(mike.tip());

