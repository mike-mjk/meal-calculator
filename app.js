var Diner = function(name, dish1, dish2) {
    this.name = name;
    this.dishes = {};
    this.dishes[dish1.name] = dish1.cost;
    this.dishes[dish2.name] = dish2.cost;
    
};

Diner.prototype.total = function() {
  var total = 0;
  for (each in mike.dishes) {
    total += mike.dishes[each];
  }
 return total;
};

var chicken = {
    name: 'chicken',
    cost: 10.95
};

var cheeseburger = {
    name: 'cheeseburger',
    cost: 11.95
};


var mike = new Diner('greg', chicken, cheeseburger);

mike.total();
