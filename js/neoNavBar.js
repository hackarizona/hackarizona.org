$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: -50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a, a.page-scroll").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });

//faq accordion
if($(window).width() < 768) {   //mobile
  $('.faq-col .answer').css('display', 'none');
  $('.faq-col .plus').css('display', 'inline-block');
}

$( window ).resize(function() {
  if($(window).width() < 768) {   //mobile
      $('.faq-col .answer').css('display', 'none');
      $('.faq-col .plus').css('display', 'inline-block');
  } else if($(window).width() >= 768) {
      $('.faq-col .answer').css('display', 'inline-block');
      $('.faq-col .plus').css('display', 'none');
  }
})

$('.faq-col h3').on('click', function () {
  var answer = $(this).siblings('.answer');
  if(answer.hasClass('open')) {
      answer.removeClass('open').slideUp(200);
  } else {
      $(this).siblings('.answer').addClass('open').slideDown(200);
  }

  $(this).children('.plus').toggleClass('rotate');
});
