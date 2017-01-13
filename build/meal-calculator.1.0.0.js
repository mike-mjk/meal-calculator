/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// var Diner = function(name, dish1, dish2) {
	//     this.name = name;
	//     this.dishes = {};
	//     this.dishes[dish1.name] = dish1.cost;
	//     this.dishes[dish2.name] = dish2.cost;
	
	// };
	
	// class Polygon {
	//   constructor(height, width) {
	//     this.height = height;
	//     this.width = width;
	//   }
	// }
	
	
	// class Polygon {
	//   constructor(height, width) {
	//     this.height = height;
	//     this.width = width;
	//   }
	
	//   get area() {
	//     return this.calcArea();
	//   }
	
	//   calcArea() {
	//     return this.height * this.width;
	//   }
	// }
	
	// const square = new Polygon(10, 10);
	
	// console.log(square.area);
	
	
	var Diner = function () {
	  function Diner(name, dish1, dish2) {
	    _classCallCheck(this, Diner);
	
	    this.name = name;
	    this.dishes = {};
	    this.dishes[dish1.name] = dish1.cost;
	    this.dishes[dish2.name] = dish2.cost;
	  }
	
	  _createClass(Diner, [{
	    key: "total",
	    value: function total() {
	      var total = 0;
	      for (var each in this.dishes) {
	        //this is here
	        total += this.dishes[each];
	      }
	      return total;
	    }
	  }]);
	
	  return Diner;
	}();
	
	// Diner.prototype.total = function() {
	//   var total = 0;
	//   for (var each in this.dishes) {
	//     total += this.dishes[each];
	//   }
	// return total;
	// };
	
	Diner.prototype.tax = function () {
	  var total = this.total();
	  var tax = total * 0.08;
	  tax = tax.toFixed(2);
	  tax = Number(tax);
	  return tax;
	};
	
	Diner.prototype.tip = function () {
	  var total = this.total();
	  var tip = total * 0.18;
	  tip = tip.toFixed(2);
	  tip = Number(tip);
	  return tip;
	};
	
	var Bill = function Bill() {
	  for (var i = 0; i < arguments.length; i++) {
	    this['diner' + i] = arguments[i];
	  }
	};
	
	Bill.prototype.totalWithTax = function () {
	  var sum = 0;
	  for (var each in Object.keys(this)) {
	    var key = Object.keys(this)[each];
	    sum += this[key].total();
	    sum += this[key].tax();
	  }
	  return sum;
	};
	
	Bill.prototype.combinedTipTotal = function () {
	  var sum = 0;
	  for (var each in Object.keys(this)) {
	    var key = Object.keys(this)[each];
	    sum += this[key].tip();
	  }
	  return sum;
	};
	
	Bill.prototype.breakdown = function () {
	  var breakdown = "";
	  for (var each in Object.keys(this)) {
	    var key = Object.keys(this)[each];
	    breakdown += "Breakdown For " + this[key].name + ": ";
	    breakdown += "Total: " + this[key].total() + " ";
	    breakdown += "Tax: " + this[key].tax() + " ";
	    breakdown += "Tip: " + this[key].tip() + "\n";
	  }
	  return breakdown;
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
	console.log("Total bill with tax: " + bill.totalWithTax());
	console.log("Total tip: " + bill.combinedTipTotal());
	console.log(bill.breakdown());

/***/ }
/******/ ]);
//# sourceMappingURL=meal-calculator.1.0.0.js.map