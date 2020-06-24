$(document).ready(function() {

    $(".burger-icon").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav-items").toggleClass("active");
    });

    // $(".burger-icon").on("click", function() {
    //     if ($(".main-nav").hasClass("mobile-hide")) {
    //         $(".main-nav").removeClass("mobile-hide");
    //         $(".main-nav").addClass("mobile-show");
    //     } else {
    //         $(".main-nav").removeClass("mobile-show");
    //         $(".main-nav") .addClass("mobile-hide");      
    //     }
    // });
});

