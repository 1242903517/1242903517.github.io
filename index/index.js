$(document).ready(function(){
    $("#header-box").load("../header/header.html")
    $("#footer-box").load("../footer/footer.html")

    $('.left-controls .controls-box').on('click',function (){
        $('.carousel').carousel('next');
    })
    $('.right-controls .controls-box').on('click',function (){
        $('.carousel').carousel('prev');
    })

    $('body').on('click','.close',function (){
        $('.video-play-box').css({'display':'none'});
    })

    $('.play-video-1').on('click',function (){
        $('.video-play-box').attr('src',$(this).attr('video-src'));
        $('.video-play-box').css({'display':'flex'});
    })

    $('.trash-video').on("ended",function(){
        $('.video-play-box').css({'display':'none'});
    })

    $('.video-play-box').on("mousewheel",function(e){
        e.preventDefault(); 
        return false;
    })

    $('.go-degradable').on('click',function (){
        window.open("../degradableTransh/degradableTransh.html",'_blank');   
    })

    $('.go-special').on('click',function (){
        window.open("../specialTransh/specialTransh.html",'_blank');   
    })
 

    var trashBox = $('.trash-box');

    var win = $(window);
    var winH = $(window).height();

    var consumables = $('.consumables');

    win.scroll(function (){// 页面滚动

        var winTop = win.scrollTop();

        trashBox.each(function (index,item){ 
        var that = $(this);
        var isFirst = that.attr('data-firstScroll');
        if(that.offset().top-winTop<winH-that.outerHeight()&&isFirst==='true'){
            that.attr('data-firstScroll','false');
            that.children('.video-img').css({'width':'60%'});
        }
       })

       consumables.each(function (index,item){ 
            var that = $(this);
            var first = that.attr('data-firstScroll');
            if(that.offset().top-winTop<winH-that.outerHeight()+100&&first==='true'){
                that.attr('data-firstScroll','false');
                $('.consumables-img').css({'width':'85%'});
                $('.arrow').css({'opacity':'1'});
            }
       })
       

    })    


   
    // $.i18n.properties({
    //     name:'strings', 
    //     path:'../i18n/', 
    //     mode:'both',
    //     language:'en',
    //     cache:true,
    //     checkAvailableLanguages: true,
    //     async: true,
    //     callback: function() {
    //         var insertEle = $('[data-i18n]');
    //         insertEle.each(function (){
    //             $(this).html($.i18n.prop($(this).attr('data-i18n')));
    //         })
    //     }
    // })
})