(function ($) {
	

    // Preloader
    $(".preloader").delay(1600).fadeOut("slow");
        

    // Sticky Menu
    $(window).on( 'scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".header-menu-area").addClass("sticky");
        } else {
            $(".header-menu-area").removeClass("sticky");
        }
    });

            
    // Mobile menu
    $('.hamburger').on( 'click', function (event) {
        $(this).toggleClass('h-active');
        $('.main-nav').toggleClass('slidenav');
    });
    $('.header-home .main-nav ul li  a').on( 'click', function (event) {
        $('.hamburger').removeClass('h-active');
        $('.main-nav').removeClass('slidenav');
    });

    $(".main-nav .fl").on('click', function(event) {
        var $fl = $(this);
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
        if($fl.hasClass('flaticon-plus')){
            $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
        }else{
            $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
        }
        $fl.next(".sub-menu").slideToggle();
    });


    // Counter
      $('.counter').counterUp({
          delay: 10,
          time: 1000
    });


    //Mixitup
    $('.work-mixi').mixItUp();

    // Magnific Popup video
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

      
    // Hero  Carousel Slick
    $('.hero-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: false,
      nextArrow: false,
      asNavFor: '.hero-img-wrap'
    });


    $('.hero-img-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      arrows: false,
      prevArrow:"<i class='bx bxs-chevron-left'></i>",
      nextArrow:"<i class='bx bxs-chevron-right' ></i>",
      asNavFor: '.hero-content'
    });



    // Owl Carousel Team
    $('.team-wrap').owlCarousel({
        
        items: 4,
        loop: true,
        margin:24,
        smartSpeed: 1500,
        autoplay: false,
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        } 
    });  


      // Slick slide testimonial

      $('.testimonial-image').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 0,
        asNavFor: '.testimonial-content-wrap',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: false,
        responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              }

            ]
      });
      $('.testimonial-content-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        prevArrow:"<i class='bx bxs-chevron-left'></i>",
        nextArrow:"<i class='bx bxs-chevron-right' ></i>",
        asNavFor: '.testimonial-image'
      });





    // Pricing Toggle

    var checkBox = document.querySelectorAll("#checbox")

    for(let i = 0; i < checkBox.length; i++){
      checkBox[i].addEventListener("click", ()=>{
        var text1 = document.querySelectorAll(".text1")
        var text2 = document.querySelectorAll(".text2")

        if(checkBox[i].checked === true){
          text1.forEach((e)=>{
            e.style.display = "block";
          })
          text2.forEach((e)=>{
            e.style.display = "none";
          })
        } else if (checkBox[i].checked === false) {
          text1.forEach((e)=>{
            e.style.display = "none";
          })
          text2.forEach((e)=>{
            e.style.display = "block";
          })
        }

      })
    }


    var anaulPrice = document.querySelectorAll(".price-anual")
    var monthlyPrice = document.querySelectorAll(".price-month")


    anaulPrice.forEach((element)=>{
      element.addEventListener("click", ()=>{
          if(!element.classList.contains('price-active')){
              element.classList.add('price-active')

              monthlyPrice.forEach((ele)=>{
                  ele.classList.remove('price-active')
              })
          }
      })
    })

    monthlyPrice.forEach((element)=>{
      element.addEventListener("click", ()=>{
          if(!element.classList.contains('price-active')){
              element.classList.add('price-active')

              anaulPrice.forEach((ele)=>{
                  ele.classList.remove('price-active')
              })
          }
      })
    })
      



    // Blog Category Dropdown

    var cateDropdown = document.querySelectorAll('.has-dropdown')
    var cateCard = document.querySelectorAll('.service-details-right-top')

      cateDropdown.forEach((element)=>{
          element.addEventListener('click', ()=>{
              element.nextElementSibling.classList.toggle('cate-active')
          })
        })

          window.onclick = function(event){

          if(!event.target.matches('.has-dropdown')){
            cateCard.forEach((element)=>{
              if(element.classList.contains('cate-active')){
                element.classList.remove('cate-active')
              }
            })
          }
      }

        
      // Blog Grid js

      var gridThree = document.querySelectorAll('.blog-icon-three i')
      var gridTwo = document.querySelectorAll('.blog-icon-two i')
      var gridRowThree = document.querySelectorAll('.blog-grid-three')
      var gridRowTwo = document.querySelectorAll('.blog-grid-two')


      gridTwo.forEach((element)=>{
          element.addEventListener('click', ()=>{


              gridRowThree.forEach((ele)=>{
                  ele.classList.add('blog-grid-none')
              })
              gridRowTwo.forEach((ele)=>{
                  ele.classList.remove('blog-grid-none')
              })
          })
      })

      gridThree.forEach((element)=>{
          

          element.addEventListener('click', ()=>{
              gridRowTwo.forEach((ele)=>{
                  ele.classList.add('blog-grid-none')
              })
              gridRowThree.forEach((ele)=>{
                  ele.classList.remove('blog-grid-none')
              })
          })
      })



    // Contact Form

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-message');

    // Set up an event listener for the contact form.
    $(form).on( 'submit', function(e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#contact-form input,#contact-form textarea').val('');
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured. Message could not be sent.');
        }
      });
    });


    // Bottom To Top
  
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll-top').fadeIn();
      } else {
        $('#scroll-top').fadeOut();
      }
    });
    $('#scroll-top').on('click',function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });



    jQuery(window).on( 'load', function(){
            //wow Animation
            new WOW().init();
            window.wow = new WOW(
              {
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true,        // default
              offset: 100
            }
            )
            window.wow.init();
    });

}(jQuery));	