var html = document.querySelector("html");
html.classList.add("add");
window.addEventListener("load",function(){

    setTimeout(function () {
      $("html").removeClass("add");
       $(".loader").addClass("hidden");
    }, 750);
});





function media(page) {   
  window.location.href=page;
}
$("header .search_part").click(function () {
    $(this).parents(".navbar_collapse").find("#search_form").addClass("show");
  });
  $("header form i").click(function () {
    $(this).parents("#search_form").removeClass("show");
  });


  

  $('.navbar-toggler').on('click', function () {
      // $('body').find('.overlay_search-2').toggleClass("active");
      // html.classList.toggle("add");
  });

$('#axtar').on('click', function () {
  $('#top_part').addClass('active');
  $('.overlay_search').addClass('active');
  html.classList.add("add");
      $('.search_holder').addClass('active');
});
$('#close_search').on('click', function(e){
  $('.search_holder').removeClass('active');
  $('.overlay_search').removeClass('active');
  $('#top_part').removeClass('active');
  html.classList.remove("add");
});





$('#past').on('click', function(e){
  $(this).addClass('active');
});
$('#current').on('click', function(e){
  $(this).addClass('active');
});





$(".box .counter_one").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 6000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });



  $('.owl-carousel').owlCarousel({
    items:8,
    autoplay:true,
    
    loop:true,
    margin:10,
    dots:true,
    responsive:{
      0:{
        items: 2
      },
      350:{
        items: 2
      },
      600:{
          items:4,
      },
      1200:{
        items:8,
    },
  }
});





  $(window).on('scroll',function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".isFixed").removeClass("sticky-top");
        }else{
            $(".isFixed").addClass("sticky-top");
        }
    });



const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));








var swiperWorkWork = new Swiper('.community-blogs .swiper-container',{
slidesPerView: 1,
spaceBetween: 20,
autoPlaySpeed:8000,
autoplay:false,
speed: 1000,
clickable: true,
grabCursor: true,
loop: false,
scrollbar: {
  el: ".swiper-scrollbar",
  hide: true,
  loop: true,
  grabCursor: true,
},

    navigation: {
        nextEl: '.community-blogs .fa-arrow-right-long',
        prevEl: '.community-blogs .fa-arrow-left-long'
    },
});



var swiperWorkWork = new Swiper('.mediadetails .swiper-container',{
  slidesPerView: 1,
  spaceBetween: 10,
  dots:true,
  autoPlaySpeed:8000,
  autoplay:true,
  speed: 1000,
  grabCursor: true,
  clickable: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
  
      navigation: {
          nextEl: '.mediadetails .fa-arrow-right-long',
          prevEl: '.mediadetails .fa-arrow-left-long'
      },
  });



  var swiperWorkWork = new Swiper('.main-slider .swiper-container',{
    slidesPerView: 1,
    spaceBetween: 10,
    dots:true,
    grabCursor: true,
    clickable: true,
    autoplay: {
      delay: 8000,
  },
    speed: 1000,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
    
        navigation: {
            nextEl: '.mediadetails .fa-arrow-right-long',
            prevEl: '.mediadetails .fa-arrow-left-long'
        },
    });


  const drowdownArrow = document.querySelector('.fa-angle-down');
  const checkbox = document.getElementById('openDropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  checkbox.addEventListener('change', () => {
    drowdownArrow.classList.toggle('rotate-dropdown-arrow');
  });
  
  dropdownMenu.addEventListener('click', (e) => {
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
  });


