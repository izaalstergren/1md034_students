'use strict';

function MenuItem(productName, productImage, productKcal, plactose, pgluten) {
    this.productName = productName;
    this.productImage = productImage;
    this.productKcal = productKcal;
    this.plactose = plactose;
    this.pgluten = pgluten;

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
}

var cheeseburger = new MenuItem("Cheeses is Born Burger",
                   "/img/cheeseburger.jpg", 750, true, true);
var veggieburger = new MenuItem("Rest in Peas Burger",
                   "/img/veggieburger.jpg", 450, false, true);
var fishburger = new MenuItem("Somethings Fishy Burger",
                   "/img/Fishburger.jpg", 600, true, true);


var menuArray = [cheeseburger, veggieburger, fishburger]
var chars = ["a", "b", "c"];
var wrapper = document.getElementById("wrapper");

for(var i = 0; i < menuArray.length; ++i) {
  var burger = menuArray[i];

  var newdiv = document.createElement("div");
  newdiv.classList.add("box");
  newdiv.classList.add(chars[i]);

  var h4 = document.createElement("h4");
  var text = document.createTextNode(burger.name());
  h4.appendChild(text);
  newdiv.appendChild(h4);

  var img = document.createElement("IMG");
  img.src = burger.img();
  img.alt = burger.name();
  img.width = "250";
  img.height = "230";
  newdiv.appendChild(img);

  var ul = document.createElement("ul");
  var li1 = document.createElement("li");
  var li1text = document.createTextNode(burger.kcal() + "kcal");
  li1.appendChild(li1text);
  ul.appendChild(li1);

  if(burger.lactose()) {
    var li2 = document.createElement("li");
    li2.innerHTML = 'Contains <span class="allergy">lactose</span>';
    ul.appendChild(li2);
  }

  if(burger.gluten()) {
    var li3 = document.createElement("li");
    li3.innerHTML = 'Contains <span class="allergy">gluten</span>';
    ul.appendChild(li3);
  }

  newdiv.appendChild(ul);
  wrapper.appendChild(newdiv);
}
