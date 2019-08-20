$(document).ready(function(){

    $("#header-box").load("/header/header.html")
    $("#footer-box").load("/footer/footer.html")

    $('.nav-undeline div').css({'width':$('.nav-list div').outerWidth()+'px'});
    $('.nav-list div').on('click',function (){
        var index = $(this).index();
        if(index===0){
            $('.nav-undeline div').css({'transform': 'translate(0,0)'},1000)
            $('.nav-list div').eq(0).addClass('nav-active');
            $('.nav-list div').eq(1).removeClass('nav-active');
            $('.nav-contnet-2').css({'display':'none'});
            $('.nav-contnet-1').css({'display':'inherit'});
        }else{
            $('.nav-undeline div').css({'transform': 'translate('+$('.nav-list div').outerWidth()+'px,0)'})
            $('.nav-list div').eq(1).addClass('nav-active');
            $('.nav-list div').eq(0).removeClass('nav-active');
            $('.nav-contnet-2').css({'display':'inherit'});
            $('.nav-contnet-1').css({'display':'none'});
        }
    })

    
    $('.go-comtent').on('click',function (){
        $('html,body').animate({
            scrollTop: $('.page-explain-box').offset().top-40+'px'
        }, 400);
    })

    var query = window.location.search.substring(1);
    console.log(query)
    if(query.indexOf('isProblem')>-1){
        $('html,body').animate({
            scrollTop: $('.nav-box').offset().top-200+'px'
        }, 400);
    }


})