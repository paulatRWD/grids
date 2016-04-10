$(".pricehead").hover(function() {
    $(this).siblings("h5").addClass("your_color_class");
}, function() {
    $(this).siblings("h5").removeClass("your_color_class");
}); 