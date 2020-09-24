//THIS ACTIVATES/DEACTIVATES THE BURGER MENU FOR MOBILE NAV
$(document).ready(function() {

    $(".burger-icon").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav-items").toggleClass("active");
    });

    
});

//PDF RENDERING