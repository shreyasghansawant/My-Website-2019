$(document).ready(function(){
    $('.main-nav').hide();
    $('#earth').hide();
    $('#monu').hide();
    $('.shreyas-div').hide();
    $('.u').hide();
    $('.p').css({ opacity: 0.4});
    $('.pp').css({ opacity: 0.4});
    $('#monu').fadeIn(500);
    $('#earth').slideDown().fadeIn(500);
    $('.main-nav').fadeIn(500);
    $('.pp').animate({
        opacity: '1'
    }, 300);
    if($(window).width() >= 800){
        $('.shreyas-div').fadeIn(300).animate({
            marginLeft: '180px'
            }, 500);
    } else if($(window).width() < 800){
        $('.shreyas-div').fadeIn(300).animate({
            fontSize: '37px'
        });
    };
    $('#endtxt').hide();
    $(window).scroll(function(){
        var scroll_value = $(document).scrollTop();
        if(scroll_value > 400){
            $('.u').fadeIn(300);
        }
        if(scroll_value > 1100){
            $('.p').fadeIn(300);
            $('.p').animate({
                opacity: '1'
            }, 300);
        }
        if(scroll_value > 1850){
            if($(window).width() >= 800){
                $('.contact').animate({
                    opacity: '0.9',
                    padding: '25px 35px'
                }, 300);
                $('.ext-contact').animate({
                    padding: '33px 125px'
                });
            } else if($(window).width() < 800){
                $('.contact').animate({
                    opacity: '0.9',
                    padding: '15px 20px'
                }, 300);
                $('.ext-contact').animate({
                    padding: '11px 16px'
                });
            }
        }
        if(scroll_value >= 1750){
            $('#endtxt').fadeIn(300);
        }
    });
});
