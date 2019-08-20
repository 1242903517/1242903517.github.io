$(document).ready(function(){

    $("#header-box").load("/header/header.html")
    $("#footer-box").load("/footer/footer.html")

    $('.main-title-1').css({'transform':'translate(0,0)',"opacity": "1"});
    setTimeout(function (){
        $('.main-title-2').css({'transform':'translate(0,0)',"opacity": "1"});              
    },1000)

        
    $('.trash-box-box').css({'height':$('.trash-box-1').height()+'px'})
    var type=1;
     $("body").on('click','.trash-type-1',function(e){
        type=1;
         $('.trash-type-1').addClass('active');
         $('.trash-type-2').removeClass('active');
         $('.trash-box-1').css({'opacity':'1'});
         $('.trash-box-2').css({'opacity':'0'});
     })
     $("body").on('click','.trash-type-2',function(e){
        type=2;
        $('.trash-type-2').addClass('active');
        $('.trash-type-1').removeClass('active');
        $('.trash-box-2').css({'opacity':'1'});
         $('.trash-box-1').css({'opacity':'0'});
    })

    $('.look-detail').on('click',function (){
         if(type===1){
            window.open('../degradableTransh/degradableTransh.html','_blank');
         }else{
            window.open('../specialTransh/specialTransh.html','_blank');
         }
    })

    var sections = $('.page-section');

    var win = $(window);
    var winH = $(window).height();

    var contentBoxOpacity;
    var mainTitleBox = $('.main-title-box')

    win.scroll(function (){// 页面滚动

        var winTop = win.scrollTop();

        if(winTop===0||winTop<=1){
            contentBoxOpacity = 1;
        }else{
            contentBoxOpacity = 1/winTop
            if(contentBoxOpacity<0.06){
                contentBoxOpacity = 0
            }
        }
        if(mainTitleBox.css('opacity')!=contentBoxOpacity) mainTitleBox.css({"opacity":contentBoxOpacity});

       sections.each(function (index,item){ 
        var that = $(this);
        var isFirst = that.attr('data-firstScroll');
        if(that.offset().top-winTop<winH-200&&isFirst==='true'){
            that.attr('data-firstScroll','false');
            that.children('.section-describe').css({'transform':'translate(0,0)','opacity':'1'});
        }
       })
    })    

})