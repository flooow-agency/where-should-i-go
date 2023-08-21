import $  from 'jquery';
import 'slick-carousel';

function basicSliders(){
    $('.favorities__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    })
    $(document).ready(function(){
        /*$('.favorities__slider').find('.slick-slide').each(function(){
            var imgHeight = $(this).find('.favorities__sliderItem__image img').height();
            $(this).find('.favorities__sliderItem__content').css('height', imgHeight);
        });*/
        var imgHeight = $('.favorities__slider').find('.slick-slide[data-slick-index="0"] .favorities__sliderItem__image img').height();
        $('.favorities__slider .slick-slide .favorities__sliderItem__image img').css('height', imgHeight);
        $('.favorities__slider .slick-slide .favorities__sliderItem__content').css('height', imgHeight);
    })
}

export { basicSliders };
