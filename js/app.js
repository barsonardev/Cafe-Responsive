$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
      $('.fa-bars').removeClass('fa-times');
      $('nav').removeClass('nav-toggle');
    });


    $(window).on('scroll load', function () {

        if ($(window).scrollTop() > 30) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }

        $('section').each(function () {
            var scrollTop = $(window).scrollTop(); // Sayfanın kaydırma mesafesi
            var id = $(this).attr('id');
            var sectionHeight = $(this).height();
            var sectionTop = $(this).offset().top - 200; // Bu bölümün üst kısmından 200 px yukarıda

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                $('nav ul li a').removeClass('active');
                $('nav').find('[href="#' + id + '"]').addClass('active');
            }
        });

    });

  });