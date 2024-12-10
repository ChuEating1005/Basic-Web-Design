$(document).ready(function(){
    $(".burger-menu").on("click", function(){
        $(".mobile-nav").css("margin-left", "-80px").slideToggle("fast")
    })
})