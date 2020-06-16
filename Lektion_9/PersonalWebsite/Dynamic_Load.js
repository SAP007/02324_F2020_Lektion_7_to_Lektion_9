
var signup = document.getElementById('signup');
signup.style.color="red";

$("#submitButton").click(function(e){
    e.preventDefault();

        $('#main').hide();
        $('#project').show();    
});

$("#goBackButton").click(function(e){
    e.preventDefault();

        $('#main').show();
        $('#project').hide();    
});
