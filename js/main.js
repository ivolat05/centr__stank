$(function () {
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active')
     
    });

    // slaider
    $('.main__slaider').slick({
        dots: true,
        arrows: false
    });
    
    $('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name'
    });
    
    $('#close').click(function(){
        $('.mfp-close').trigger('click');
      });

});