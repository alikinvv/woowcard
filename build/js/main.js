$('.main__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

// cards hover
$('body').on('mouseenter', '.card__item', (e) => {
    if ($(window).width >= 1024) {
        $(e.currentTarget).find('.card__hidden').slideDown(300);
        $(e.currentTarget).find('.card__text').addClass('show');
        $(e.currentTarget).addClass('show');
        $(e.currentTarget).find('.btn').addClass('show');
    }
});

$('body').on('mouseleave', '.card__item', (e) => {
    if ($(window).width >= 1024) {
        $(e.currentTarget).find('.card__hidden').slideUp(300);
        $(e.currentTarget).find('.card__text').removeClass('show');
        $(e.currentTarget).removeClass('show');
        $(e.currentTarget).find('.btn').removeClass('show');
    }
});

// rotate cards in modal
let rotateAngle = 0;

$('body').on('click', '.info__rotate', (e) => {
    rotateAngle = rotateAngle + 180;

    $(e.currentTarget).stop( true, true );
    $(e.currentTarget).animate({  rotateAngle }, {
        step: (now) => {
          $(e.currentTarget).css('transform',`rotate(${now}deg)`);  
        },
        duration:'slow'
    },'linear');

    $('.info__cards').toggleClass('show-back');
});

// counter
$('body').on('click', '.counter__btn-plus', (e) => {
    $(e.currentTarget).parent().find('.counter__input').val(parseInt($(e.currentTarget).parent().find('.counter__input').val()) + 1);
});

$('body').on('click', '.counter__btn-minus', (e) => {
    if ($(e.currentTarget).parent().find('.counter__input').val() > 1) {
        $(e.currentTarget).parent().find('.counter__input').val(parseInt($(e.currentTarget).parent().find('.counter__input').val()) - 1);
    }
});

// cart items close
$('body').on('click', '.cart__item .btn-close', (e) => {
    $(e.currentTarget).parent().addClass('remove');
});

// cart price sticky
if ($(window).width() > 1024) {
    $(".sticky").sticky({ topSpacing: 20 });
}

if ($('#phone-mask').length > 0) {
    var phoneMask = IMask(
        document.getElementById('phone-mask'), {
            mask: '+{7}(000)000-00-00'
    });
}

// cart delivery type
$('body').on('click', '#delivery + label', (e) => {
    if (!$('#delivery').is(':checked')) {
        $('.cart__hidden').hide();
        $('.cart__hidden.delivery').show();
    }
});

$('body').on('click', '#pickup + label', (e) => {
    if (!$('#pickup').is(':checked')) {
        $('.cart__hidden').hide();
        $('.cart__hidden.pickup').show();
    }
});

// questions
$('body').on('click', '.question', (e) => {
    $(e.currentTarget).toggleClass('active').next().slideToggle();
});

let initMobileMenu = () => {
    if ($(window).width() <= 1023 && $('.hamburger').length === 0) {
        $('.header__controls').append('<div class="hamburger"><span></span></div>');
        $('.menu').append($('.submenu'));
    } else if ($(window).width() > 1023  && $('.hamburger').length > 0) {
        $('.header').after($('.submenu'));
        $('.hamburger').remove();
    }
}

initMobileMenu();

$(window).on('resize', initMobileMenu);

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.menu').toggleClass('active');
    $('html').toggleClass('overflow');
});

$('body').on('click', '.close-menu', () => {
    $('.hamburger').toggleClass('active');
    $('.menu').toggleClass('active');
    $('html').toggleClass('overflow');
});