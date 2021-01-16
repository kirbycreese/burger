$(function() {
    // $(".add-burger").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var devouredBurger = $(this).data("newburger");
  
    //   var newDevouredState = {
    //     devoured: devouredBurger
    //   };
//devour function
      
$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
console.log("this function")
  var newBurger = {
    name: $("#ca").val().trim(),
    devoured: $("[burger_name=devoured]:checked").val().trim()
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
});
// //create function
// });

    // $.ajax("/api/burgers/" + id, {
    //     type: "PUT",
    //     data: newDevouredState
    //   }).then(
    //     function() {
    //       console.log("changed burger status to to", devouredBurger);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    
  

//delete burger from waiting area

//delete burger from devoured area
//use DELETE to delete
        