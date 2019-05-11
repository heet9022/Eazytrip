$(document).ready(function() {

  $('#bookForm').submit(function(e) {
    e.preventDefault();
    var first_name = $('#fname').val();
    var last_name = $('#lname').val();
    var email = $('#email').val();

 
      var emailRegex = /^[a-zA-Z0-9._%+-]{1,63}@[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,4}$/;
      var validEmail = emailRegex.test(email);
      if (!validEmail) 
      {
        alert("Please enter a valid email");
      }
    
  });

  $('#feedbackForm').submit(function(e) {
    e.preventDefault();
    var first_name = $('#fname').val();
    var last_name = $('#lname').val();
    var email = $('#email').val();

 
      var emailRegex = /^[a-zA-Z0-9._%+-]{1,63}@[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,4}$/;
      var validEmail = emailRegex.test(email);
      if (!validEmail) 
      {
        alert("Please enter a valid email");
      }
    
  });

});