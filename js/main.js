$('.menuButton').on('click', function(e){
    e.preventDefault();
    $('.divNav').toggleClass('divNavActive');
    // $('.header').toggleClass('active');
    // $('.sections').toggleClass('active');
    // $('.Footer').toggleClass('active');
    // $('.popup1').toggleClass('active');
    // $('.projFooter1').toggleClass('active');
    $('.buttonSpan').toggleClass('buttonSpan_active');
});

$('.proj1').on('click',function(e){
    e.preventDefault();
    $('.popup1').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup1Close').on('click',function(e){
    e.preventDefault();
    $('.popup1').fadeOut();
    $('body').removeClass('oY');
});

$('.proj2').on('click',function(e){
    e.preventDefault();
    $('.popup2').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup2Close').on('click',function(e){
    e.preventDefault();
    $('.popup2').fadeOut();
    $('body').removeClass('oY');
});

$('.proj3').on('click',function(e){
    e.preventDefault();
    $('.popup3').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup3Close').on('click',function(e){
    e.preventDefault();
    $('.popup3').fadeOut();
    $('body').removeClass('oY');
});

$('.proj4').on('click',function(e){
    e.preventDefault();
    $('.popup4').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup4Close').on('click',function(e){
    e.preventDefault();
    $('.popup4').fadeOut();
    $('body').removeClass('oY');
});

$('.proj5').on('click',function(e){
    e.preventDefault();
    $('.popup5').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup5Close').on('click',function(e){
    e.preventDefault();
    $('.popup5').fadeOut();
    $('body').removeClass('oY');
});

$('.proj6').on('click',function(e){
    e.preventDefault();
    $('.popup6').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup6Close').on('click',function(e){
    e.preventDefault();
    $('.popup6').fadeOut();
    $('body').removeClass('oY');
});

$('.proj7').on('click',function(e){
    e.preventDefault();
    $('.popup7').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup7Close').on('click',function(e){
    e.preventDefault();
    $('.popup7').fadeOut();
    $('body').removeClass('oY');
});

$('.proj8').on('click',function(e){
    e.preventDefault();
    $('.popup8').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup8Close').on('click',function(e){
    e.preventDefault();
    $('.popup8').fadeOut();
    $('body').removeClass('oY');
});

$('.proj9').on('click',function(e){
    e.preventDefault();
    $('.popup9').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup9Close').on('click',function(e){
    e.preventDefault();
    $('.popup9').fadeOut();
    $('body').removeClass('oY');
});

$('.proj10').on('click',function(e){
    e.preventDefault();
    $('.popup10').fadeIn();
    $('body').toggleClass('oY');
});

$('.popup10Close').on('click',function(e){
    e.preventDefault();
    $('.popup10').fadeOut();
    $('body').removeClass('oY');
});

SmoothScroll({
    animationTime    : 800,
    stepSize         : 85,
    accelerationDelta : 30,  
    accelerationMax   : 2,   
    keyboardSupport   : true,  
    arrowScroll       : 50,
    touchpadSupport   : true,
});

$('.contactsButton').on('click',function(e){
    e.preventDefault();
    $('.contactsPopup').fadeIn();
    $('body').toggleClass('oY');
});

$('.contactsPopupClose').on('click',function(e){
    e.preventDefault();
    $('.contactsPopup').fadeOut();
    $('body').removeClass('oY');
});

$('.contactsPopupSend').on('click', function(e){
    e.preventDefault();
    $('.contactsPopup').fadeOut();
    $('.contactsPopupThank').delay(900).fadeIn();
    $(function(){
        $('.contactsPopupThank').delay(1700).fadeOut();
    });
    // document.getElementById('surname').innerHTML='';
    $('body').removeClass('oY');
});

function toTop(){
    var button = $('.buttonUp');

    $(window).on('scroll', () =>{
        if ($(this).scrollTop() >= 400){
            button.fadeIn();
        } else {
            button.fadeOut();
    }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 2000);
    });
}

toTop();