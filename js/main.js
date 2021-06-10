$(function () {
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active');
        $('body').toggleClass('look')

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

    $('#close').click(function () {
        $('.mfp-close').trigger('click');
    });

    $("#telForm").mask("+7(999) 999-99-99");
    $("#telForms").mask("+7(999) 999-99-99");
});