$('#blogCarousel').carousel({
    interval: 5000
});


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });


   
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
      
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

var deadline = new Date("Dec 30, 2020 00:00:00").getTime();             
var x = setInterval(function() {
   var currentTime = new Date().getTime();                
   var t = deadline - currentTime; 
   var second = 1000;
   var minute = second * 60;
   var hour = minute * 60;
   var day = hour * 24;

   var days = Math.floor(t / (day)); 
   var hours = Math.floor((t%(day)) / (hour)); 
   var minutes = Math.floor((t % (hour)) / (minute)); 
   var seconds = Math.floor((t % (minute)) / (second)); 
   
   document.getElementById("day").innerHTML =days ; 
   document.getElementById("hour").innerHTML =hours; 
   document.getElementById("minute").innerHTML = minutes; 
   document.getElementById("second").innerHTML =seconds; 
   if (t < 0) {
      clearInterval(x); 
      document.getElementById("time-up").innerHTML = "TIME UP"; 
      document.getElementById("day").innerHTML ='0'; 
      document.getElementById("hour").innerHTML ='0'; 
      document.getElementById("minute").innerHTML ='0' ; 
      document.getElementById("second").innerHTML = '0'; 
   } 
}, 1000);  



// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

$(document).ready(function(){
    $('.collapse.in').each(function(){
      $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
  });
    
  $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
  }).on('hidden.bs.collapse', function(){
      $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
  });       
});