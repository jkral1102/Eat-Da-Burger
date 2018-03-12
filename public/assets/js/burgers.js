// create new burger 
$(function() {
$("#submitBurger").on("click", function(event) {
    var newBurger = {
        burger_name: $("#addBurger").val().trim()
    };

    //Send the POST request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Created new burger");
            // Reload the page to get the updated list ----!!!!!!
            location.reload();
        }
    );
});

// update (devour) a burger
$("#devourBtn").on("click", function(event) {
    var id = $(this).data("id"); 
    var devour = {
        devoured: true
    };

      // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devour
    }).then(
      function() {
        console.log("devoured burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  
})