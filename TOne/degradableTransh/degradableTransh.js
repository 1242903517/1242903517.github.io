$(document).ready(function(){

    $("#header-box").load("/header/header.html")
    $("#footer-box").load("/footer/footer.html")


    $('.transh-type-box-1').on('click',function (){
        window.open('../detail/detail.html','_blank');
    })
    $('.transh-type-box-2').on('click',function (){
        window.open('/TAir/detail/detail.html','_blank');
    })


    var sections = $('.trash-type');

    var win = $(window);
    var winH = $(window).height();

    win.scroll(function (){// 页面滚动

        var winTop = win.scrollTop();

       sections.each(function (index,item){ 
        console.log($(this).attr('data-firstScroll'))
        var that = $(this);
        var isFirst = that.attr('data-firstScroll');
        if(that.offset().top-winTop<winH-300&&isFirst==='true'){
            that.attr('data-firstScroll','false');
            $('.type-arrow').css({'opacity':'1'});
            $('.type-img').css({'width':'50%'});
            that.children('.section-describe').css({'transform':'translate(0,0)','opacity':'1'});
        }
       })
    })  

})