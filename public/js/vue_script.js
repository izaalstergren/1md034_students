'use strict';

function getForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var street = document.getElementById("street").value;
  var house = document.getElementById("house").value;
  var payment = document.getElementById("payment").value;
  var radios = document.getElementsByName("gender");
  var gender = undefined;

  for(var i = 0; i < radios.length; ++i) {
    if (radios[i].checked) {
      gender = radios[i].value;
      break;
    }
  }

  var checkboxes = document.getElementsByName("burgerOrder");
  var burgers = [];

  for(var i = 0; i < checkboxes.length; ++i) {
      if (checkboxes[i].checked) {
        burgers.push(checkboxes[i].id);
      }
  }

  return [name, email, street, house, payment, gender, burgers];
}

var vm = new Vue({
  el: '#wrapper',
  data: {
    burgers: food
  }
})

var vmb = new Vue({
  el:'#ordering',
  data: {
    showorder: false,
    orderName: "",
    orderEmail: "",
    orderStreet: "",
    orderHouse: "",
    orderPayment: "",
    orderGender: "",
    orderBurgers: "",
  },
  methods: {
    orderDone: function() {
      var result = getForm();
      this.showorder = true;
      this.orderName = result[0];
      this.orderEmail = result[1];
      this.orderStreet = result[2];
      this.orderHouse = result[3];
      this.orderPayment = result[4];
      this.orderGender = result[5];
      this.orderBurgers = result[6].join(', ');
    }
  }
})
