$(document).ready(function(){

    $("#header-box").load("/header/header.html")
    $("#footer-box").load("/footer/footer.html")


    // banner
 
    var bannerInterval = 4000;
    $('.banner-progress span').animate({width:'100%'},bannerInterval);
    var bannerTime = setInterval(function (){
        $('.carousel').carousel('next');
    },bannerInterval)
    $('.banner-right').on('click',function (){
        clearInterval(bannerTime);
        bannerTime = null;
        $('.carousel').carousel('next');
    })  
    $('.banner-left').on('click',function (){
        clearInterval(bannerTime);
        bannerTime = null;
        $('.carousel').carousel('prev');
    })  
    $('.carousel').on('slide.bs.carousel', function (e) {
       var index = $(this).find('.item').index(e.relatedTarget);
       if(!bannerTime){
        bannerTime = setInterval(function (){
            $('.carousel').carousel('next');
        },bannerInterval)
       }
       $('.banner-progress span').stop( true, true );
        $('.banner-progress span').animate({'width':'0px'},0,function (){
            $('.banner-progress span').animate({width:'100%'},bannerInterval);
        });
        $('.banner-num').html('0'+(index+1)+'/');
    }) 


    var win = $(window);
    var winH = win.height();
    var companyData = $('.company-data');
    var isFist = true;

    $('.go-comtent').on('click',function (){
        $('html,body').animate({
            scrollTop: $('.page-explain-box').offset().top-40+'px'
        }, 400);
    })

    win.scroll(function (){// 页面滚动
        var winTop = win.scrollTop();
        if(companyData.offset().top-winTop<winH-companyData.outerHeight()/2&&isFist){
            isFist = false;
            NumberGrow();
        }
    })    
 

    function NumberGrow() {
        var time = 1;//总时间
        $('.num').each(function (index,item){
            var that = $(this);
            var num = that.attr('data-value');//要显示的真实数值
            console.log(num)
            var step = num * 16 / (time * 1000);//每16ms增加的数值
            var start = 0;//计数器
            var interval;//定时器
            var old = 0;
    
        // //每帧不能超过16ms，所以理想的interval间隔为16ms
        // //step为每16ms增加的数值
    
        interval = setInterval(function () {
                start = start + step;
                if (start >= num) {
                    clearInterval(interval);
                    interval = undefined;
                    start = num;
                }
        
                var t = Math.floor(start);
        
                //t未发生改变的话就直接返回
                //避免调用text函数，提高DOM性能
                if (t == old) {
                    return;
                }
        
                old = t;
                that.text(old);
            }, 16);
        }) 
    }

})