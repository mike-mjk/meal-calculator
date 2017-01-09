var Diner = function(name, dish1, dish2) {
    this.name = name;
    this.dishes = {};
    this.dishes[dish1.name] = dish1.cost;
    this.dishes[dish2.name] = dish2.cost;
    
};

Diner.prototype.total = function() {
  var total = 0;
  for (var each in this.dishes) {
    total += this.dishes[each];
  }
 return total;
};

Diner.prototype.tax = function() {
  var total = this.total();
  var tax = total * 0.08;
  tax = tax.toFixed(2);
  tax = Number(tax);
  return tax;
};

Diner.prototype.tip = function() {
  var total = this.total();
  var tip = total * 0.18;
  tip = tip.toFixed(2);
  tip = Number(tip);
  return tip;
};

var Bill = function() {
  for (var i = 0; i < arguments.length; i++) {
    this['diner' + i] = arguments[i];
  }
};

Bill.prototype.totalWithTax = function() {
  var sum = 0;
  for (var each in Object.keys(this)) {
    var key = Object.keys(this)[each];
    sum += this[key].total();
    sum += this[key].tax();
  }
  return sum;
};

Bill.prototype.combinedTipTotal = function() {
  var sum = 0;
  for (var each in Object.keys(this)) {
    var key = Object.keys(this)[each];
    sum += this[key].tip();
  }
  return sum;
};

var chicken = {
    name: 'chicken',
    cost: 10.95
};

var cheeseburger = {
    name: 'cheeseburger',
    cost: 11.95
};

var pancakes = {
    name: 'pancakes',
    cost: 6.50
};

var eggs = {
    name: 'eggs',
    cost: 3.50
};

var steak = {
    name: 'steak',
    cost: 17.00
};

var soup = {
    name: 'soup',
    cost: 5.50
};



var mike = new Diner('Mike', chicken, cheeseburger);
var matt = new Diner('Matt', pancakes, soup);
var jen = new Diner('Jen', steak, eggs);

//console.log(matt);

var bill = new Bill(mike, matt, jen);
console.log(bill.totalWithTax());
console.log(bill.combinedTipTotal());




