function Cart (){
  this.orders = [];
  this.ordersType = ["Delivery" , "Carry Out"]
}

Cart.prototype.addOrder = function(order){
  this.orders.push(pizza);
}
Cart.prototype.CountTotal = function(){
  total = 0;
  this.orders.forEach(function(order){
    tottal += order.price()
  });
}
function Pizza (cheese){
  this.cost=0;
  this.sizes = ["small", "mediam", "large"];
  this.crust = ["hand tossed","crunchy thin crust"];
  this.sauce = ["BBQ Saucce","Tomato Sauce","Alfredo Sauce","Garlic Parmesan White Sauce"];
  this.cheese = cheese;
  this.meatToppings = ["Chicken","Pepporoni","Beef","Sausage"];
  this.nonMeatToppings = ["Hot Sauce","Garlic","Jalapeno Peppers","Onions",
  "Banana Peppers",
                             "Diced Tomatos","Tomatos","Black Olives",
                             "Red Peppers","Spinach",
                             "Green Peppers","Mushrooms","Green Olives",
                             "Pineapple","Shredded Provolone Cheese",
                             "Shredded Parmesan Asiago","Feta Cheese",
                             "Cheddar Cheese"];
}


Pizza.prototype.price=function(){
  this.sizes.forEach(function(){
      if("small"){
        this.cost += 4;
      }
      if("mediam"){
        this.cost += 4.5;
      }
      if("larg"){
        this.cost += 5;
      }
  });
  this.meatToppings.forEach(function(topping){
    if(topping){
      this.cost += 1.5;
    }
  });
  this.nonMeatToppings.forEach(function(topping){
    if(topping){
      this.cost += 0.5;
    }
  });
  return cost;
}


//
// function Address (street, city, state){
//   this.street = street;
//   this.city = city;
//   this.state = state;
// }

// Contact.prototype.fullName= function(){
//   return this.firstName + " " +this.lastName;
// }

  function reset(){
    $("#new-contact")[0].reset();
}




      // $("#new-addresses").append(
    //     '<div class="new-ones new-address">'+
    //       '<div class="form-group">'+
    //       '<label for="new-street">Street</label>'+
    //       '<input type="text" class="form-control new-street">'+
    //     '</div>'+
    //     '<div class="form-group">'+
    //       '<label for="new-city">City</label>'+
    //       '<input type="text" class="form-control new-city">'+
    //     '</div>'+
    //     '<div class="form-group">'+
    //       '<label for="new-state">State</label>'+
    //       '<input type="text" class="form-control new-state">'+
    //     '</div>'+
    //   '</div>');


$(document).ready(function(){

  $("img.delivery").click(function(event){
    event.preventDefault();
    $(".name").show();
    $("#next").show();
    $(".address").show();
    $("#submit").hide();
  });

  $("img.to-go").click(function(){
    $(".name").show();
    $(".address").hide();
    $("#next").show();
    $("#submit").hide();
  });

  $(".next").click(function(event){
    event.preventDefault();

    $("#build-your-own").show();
    $(".size-crust").show();
    $(".order-type").hide();
    $(".name").hide();
    $(".address").hide();
    $("#next").hide();
    $("#submit").hide();
  });
  $("#back-to-start").click(function(event){
    event.preventDefault();
    $(".order-type").show();
    $("#next").hide();
    $(".size-crust").hide();
  });

  $("#next-cheese-sauce").click(function(event){
    event.preventDefault();
    $(".order-type").hide();
    $(".name").hide();
    $(".address").hide();
    $("#next").hide();
    $(".size-crust").hide();
    $(".choose-cheese-sauce").show();
    $("#back-to-size").show();
    $("#submit").hide();
  });

  $("#back-to-size").click(function(event){
    event.preventDefault();
    $(".order-type").hide();
    $(".name").hide();
    $(".address").hide();
    $("#next").hide();
    $(".size-crust").show();
    $(".choose-cheese-sauce").hide();
    $("#back-to-size").hide();
    $("#next-cheese-sauce").show();
    $("#submit").hide();

  });

  $("#next-toppings").click(function(event){
    event.preventDefault();
    $(".order-type").hide();
    $(".name").hide();
    $(".address").hide();
    $("#next").hide();
    $(".size-crust").hide();
    $(".choose-cheese-sauce").hide();
    $("#next-toppings").hide();
    $(".meats-non-meats").show();
    $("#next-toppings").show();
    $("#back-to-sauce").show();
    $("#submit").show();

  });


  $("#back-to-sauce").click(function(event){
    event.preventDefault();

    $(".choose-cheese-sauce").show();
    $(".meats-non-meats").hide();
    $("#back-to-sauce").hide();
    $("#submit").hide();
  });

  var newCart = new Cart();
  var newOrder = new Pizza();

    // $(".new-address").each(function(){
    //   var inputtedStreet = $(this).find("input.new-street").val();
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //
    //   console.log(inputtedStreet+", "+inputtedCity+", "+inputtedState);
    //   var newAddress = new Address(inputtedStreet,inputtedCity,inputtedState);
    //   newContact.addresses.push(newAddress);
    // });
    // newAddressBook.addContact(newContact);
    // console.log(newAddressBook);
    $(".delivery").click(function(){
      $(".name").show();
      $("#new-address").show();
      $("#submit").hide();
    });

    $(".to-go").click(function(event){
      event.preventDefault();
      $(".name").show();
      $(".new-address").hide();

    });


    $("#enter-address").click(function(){
      $("#new-address").hide();
      $(".main-photo").hide();
      $("#build-your-own").show();
    });






});
