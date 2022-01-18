
  

// what we do.........
// $(document).ready(function() { used if script link is top//
$("#design").click(function() {
  $(".one").toggle();
  $(".designn").toggle();
  });
  // });

  // $(document).ready(function() {  used if script link is top//
    $("#development").click(function() {
    $(".two").toggle();
    $(".dev").toggle();
    });
    // });
    // $(document).ready(function() {  used if script link is top//
      $("#product").click(function() {
      $(".three").toggle();
      $(".management").toggle();
      });
      // });
// End of what we do......
  /** Form Validation */
  
  $("form").on("submit", function(event) {
    event.preventDefault();
            var message = $(".form-control").val()
            var name = $("#namee").val()
            var email = $("#emaill").val()
    alert("Hello" + name + ",\We have received your message from: " + email + ",\Thank you for reaching out to us.")
    });
  


