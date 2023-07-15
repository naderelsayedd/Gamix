// owl carsoule 
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        } }
});


// go top button
var btnTop = document.getElementById("btnTop")

window.onscroll = function(){
    if(scrollY > 200){
        btnTop.style.display = "block"
        btnTop.addEventListener("click" , function(){
            window.scroll({
                top : 0 ,
                behavior: 'smooth'
                
            })
        })
    }else
    {
        btnTop.style.display = "none"
    }
}

$(".contact").hide() ;

$("#contact").click(function(){
    $(".contact").fadeIn(1000)
})

$("#hideForm").click(function(){
    $(".contact").fadeOut();
})

// hide loading
// $(document).ready(function(){
//     $(".loading").fadeOut(2000)
// })
$(".loading").hide();



