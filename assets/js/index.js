// include Header
$(function () {
    $("#header").load("layout/header.html");
    $("#footer").load("layout/footer.html");
});
// include Header
// header color change
// $(function () {
//     $(window).on("scroll", function () {
//         if ($(window).scrollTop() > 70) {
//             $(".NavbarMain").addClass("active");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//             $(".NavbarMain").removeClass("active");
//         }
//     });
// });
// header color change

// owl
$('.slider').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    nav: false,
    margin:10,
    animateOut: 'slideOutDown',
    
    animateIn: 'flipInX',

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 3
        },
        993: {
            items: 3
        },
        1125: {
            items:4
        },
        1200: {
            items:5.1
        },
        
    }
})
