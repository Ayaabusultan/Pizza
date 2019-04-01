function Cart (){
  this.orders = [];
//  this.ordersType = ["Delivery" , "Carry Out";
  this.shippingType = "";
  this.shippingCost=0;
  this.total =0;
}

Cart.prototype.addOrder = function(order){
  this.orders.push(order);
}

Cart.prototype.countTotal = function(orders){
  var total = this.shippingCost;
  this.orders.forEach(function(order){
    total += order.price();
  });
  return total;
}
function Pizza(){
  this.cost=0;
  this.sizes = ["small", "mediam", "large"];
  this.crust = ["hand tossed","crunchy thin crust"];
  this.sauce = ["BBQ Saucce","Tomato Sauce","Alfredo Sauce","Garlic Parmesan White Sauce"];
  this.cheese = ["none","light","normal","extra"];
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
  // this.sizes.forEach(function(){
  var cost = 0;
  switch(this.sizes){
      case "small":
        cost += 4;
        break;
      case "medium":
        cost += 4.5;
        break;
      case "large":
        cost += 5;
        break;
      default:
  }


  this.meatToppings.forEach(function(){
    cost += 1.5;
  });

  this.nonMeatToppings.forEach(function(topping){
    cost += 0.5;
  });

  this.cost = cost;
  return this.cost;
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

  function resetForm(){
    $("#order")[0].reset();
}


$(document).ready(function(){

  var newCart = new Cart();
  var newOrder = new Pizza();

  $("img.delivery").click(function(event){
    event.preventDefault();
    $(".name").show();
    $("#next").show();
    $(".address").show();
    $("#add-to-cart").hide();
    newCart.shippingCost = 5;
    newCart.shippingType = "Delivery";
//    newOrder.orderType="delivery";

    // $("#result").append("Your shipping fee is $5"+"<br>"+"Then Your price is "+ newOrder.price() +  ");

  });

  $("img.to-go").click(function(){
    $(".name").show();
    $(".address").hide();
    $("#next").show();
    $("#add-to-cart").hide();
    newCart.shippingCost = 0;
    newCart.shippingType = "Carry Out";
  });

  $(".next").click(function(event){
    event.preventDefault();
    $("#build-your-own").show();
    $(".size-crust").show();
    $(".order-type").hide();
    $(".name").hide();
    $(".address").hide();
    $("#next").hide();
    $("#add-to-cart").hide();
    $("button#submit").hide();

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
    $("#add-to-cart").hide();
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
    $("#add-to-cart").hide();

  });

  $("#next-toppings").click(function(event){
    event.preventDefault();
    $(".order-type").hide();
    $(".name").hide();
    $(".address").hide();
    $("#next").hide();
    $("#submit").hide();
    $(".size-crust").hide();
    $(".choose-cheese-sauce").hide();
    $("#next-toppings").hide();
    $(".meats-non-meats").show();
    $("#next-toppings").show();
    $("#back-to-sauce").show();
    $("#add-to-cart").show();

  });


  $("#back-to-sauce").click(function(event){
    event.preventDefault();

    $(".choose-cheese-sauce").show();
    $(".meats-non-meats").hide();
    $("#back-to-sauce").hide();
    $("#add-to-cart").hide();
  });


    $(".delivery").click(function(){
      $(".name").show();
      $("#new-address").show();
      $("#add-to-cart").hide();
    });

    $(".to-go").click(function(event){
      event.preventDefault();
      $(".name").show();
      $(".new-address").hide();

    });

    $("#enter-address").click(function(event){
      event.preventDefault();
      $("#new-address").hide();
      $(".main-photo").hide();
      $("#build-your-own").show();
    });

    var pizzaCounter=0;

      $("button.new-pizza").click(function(event){
      event.preventDefault();
      $("#add-to-cart").hide();
      $("#back-to-sauce").hide();
      $("button#submit").hide();
      $(".meats-non-meats").hide();
      $("#result").hide();
      $("button.new-pizza").hide();
      $(".size-crust").show();
      $("#back-to-start").show();
      $("#next-cheese-sauce").show();

    });

    // var newCart = new Cart();
    // var newOrder = new Pizza();





    $("#add-to-cart").click(function(event){
      event.preventDefault();

      newOrder.sizes= $("input:radio[name=size]:checked").val();
      newOrder.crust = $("input:radio[name=crust]:checked").val();
      newOrder.cheese = $("#cheese-amount").val();
      newOrder.sauce= $("input:radio[name=sauce]:checked").val();
      newOrder.meatToppings=[];
      $("input:checkbox[name=meats]:checked").each(function(){
        var selectedMeats = $(this).val();
        newOrder.meatToppings.push(selectedMeats);
      });

      newOrder.nonMeatToppings = [];
      $("input:checkbox[name=non-meats]:checked").each(function(){
        var selectedNonMeats = $(this).val();
        newOrder.nonMeatToppings.push(selectedNonMeats);
      });


      newCart.addOrder(newOrder);
      $("button.new-pizza").show();
      $("#submit").show();
      $("#cart").show();
      $("#add-to-cart").hide();
      $("#result").show();

      $(".meats-non-meats").hide();
      pizzaCounter++;
      $(".number").text(" "+pizzaCounter+" ");
      $(".toppings").text("");
      newCart.orders.forEach(function(order, index){
                            $(".toppings").append("Pizza " + (index + 1) + ": "+order.sizes+", "+order.crust+", "
                            + order.cheese+" cheese, "+order.sauce+", "
                            + order.meatToppings+", "+ order.nonMeatToppings+", "
                            + "price is: " + order.price() + "<br><br><br><br>");
      });

      // $(".toppings").text(" "+newCart.orders[0].sizes+", "+newCart.orders[0].crust+", "+
      //                      newCart.orders[0].cheese+" cheese, "+newCart.orders[0].sauce+", "
      //                     + newCart.orders[0].meatToppings+", "+ newCart.orders[0].nonMeatToppings+", "+
      //                      "price is: "+newCart.orders[0].price());
      $(".total").text(" " + newCart.countTotal());
      // $(".total").text(" "+price);


      newOrder.sizes="";
      newOrder.crust="";
      newOrder.cheese="";
      newOrder.sauce="";
      newOrder.meatToppings="";
      newOrder.nonMeatToppings="";
      resetForm();
      // we need to hide every thing to display the cart
    });



    $("#order").submit(function(event){
      event.preventDefault();
      // $(".number").text(" "+(pizzaCounter+1)+" ");
      $("#cart").hide();
      $("#result").hide();
      $(".new-pizza").hide();
      $("#submit").hide();
      $("#finish").prepend("YOUR ORDER HAS BEEN SUBMITTED.");
      $("#finish").prepend("THANKS FOR CHOOSING US!");
      $(".flex-img1").attr("src","images/main.jpg");


    // $("#result").show();
    });



});
