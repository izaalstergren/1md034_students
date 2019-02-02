'use strict';

function MenuItem(productName, productImage, productKcal, plactose, pgluten, pbox) {
    this.productName = productName;
    this.productImage = productImage;
    this.productKcal = productKcal;
    this.plactose = plactose;
    this.pgluten = pgluten;
    this.pbox = pbox;

    this.name = function() {
      return this.productName;
    };
    this.kcal = function() {
      return this.productKcal;
    }
    this.img = function() {
      return this.productImage;
    }
    this.lactose = function() {
      return this.plactose;
    }
    this.gluten = function() {
      return this.pgluten;
    }
    this.box = function() {
      return this.pbox;
    }
}

var cheeseburger = new MenuItem("Cheeses is Born Burger",
                   "/img/cheeseburger.jpg", 750, true, true, "a");
var veggieburger = new MenuItem("Rest in Peas Burger",
                   "/img/veggieburger.jpg", 450, false, true, "b");
var fishburger = new MenuItem("Somethings Fishy Burger",
                   "/img/Fishburger.jpg", 600, true, true, "c");

var burgersArray = [cheeseburger, veggieburger, fishburger];

var vm = new Vue({
  el: '#wrapper',
  data: {
    burgers: burgersArray,
  }
})
