$(document).ready(function(){

    $("#header-box").load("/header/header.html")
    $("#footer-box").load("/footer/footer.html")


    $('.transh-color-box').on('click',function (){
        window.location.href="/TOne/detail/detail.html";   
    })

    var isSHowTitle = false;
    setTimeout(function (){
        $('.trash-title-box').css({'top':'8.5rem',"opacity": "1"});
        isSHowTitle = true;                
    },9000)
    $('.know-more').css({'bottom':'2.71rem',"opacity": "1"})

    var win = $(window);
    var winH = $(window).height();

    var explainContent = $('.trash-explain');
    var explainContentH = explainContent.outerHeight();
    var tOneVideo = $('#tOne-video');

    // sectionOne
    var sectionOne = $('.section-one');
    var sectionOneDescribe = $('.section-one-describe');
    var sectionOneVideo = $('.section-one-video');
    var sectionOneFirst = true;
    // sectionOne:end 

    // sectionThree
    var sectionThree = $('.section-three');
    var sectionThreeImg = $('.left-img,.right-img');
    var sectionThreeFirst = true;
    // sectionThree:end 

    // sectionFour
    var sectionFour = $('.section-four');
    var sectionFourDescribe = $('.section-four-describe');
    var sectionFourVideo = $('.section-four-video');
    var sectionFourFirst = true;
    // sectionFour:end 

    // sectionFive
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


    var sectionFiveFirst = true;
    var sectionFive = $('.section-five');
    // sectionFive:end 

    // sectionSeven
    var sectionSeven = $('.section-seven');
    var sectionSevenFirst = true;

    // sectionNine
    var sectionNine = $('.section-nine');
    var sectionNineFirst = true;

    // sectionTen
    var sectionTen = $('.section-ten');
    var sectionTenFirst = true;

    // sectionEleven_1
    var sectionEleven_1 = $('.section-eleven-1');
    var sectionElevenFirst_1 = true;

    // sectionEleven_2
    var sectionEleven_2 = $('.section-eleven-2');
    var sectionElevenFirst_2 = true;

    // sectiontwelve
    var sectionTwelve = $('.section-twelve');
    var sectionTwelveFirst = true;
    

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
       $('.banner-number').html('0'+(index+1)+' / 03');
       for(var i=0;i<3;i++){
          if(index==i){
            $('.banner-describe-'+(i+1)).css({'display': 'inline-block','opacity': '1'});
          }else{
            $('.banner-describe-'+(i+1)).css({'display': 'none','opacity': '0'});
          }
       }
    }) 
   // sectionSeven:end 

   // sectioneight
   var sectionEight = $('.section-eight');
   var sectionEightFirst = true;
   // sectioneight：end

    if(!supportCss3('object-fit')&&!supportCss3('-o-object-fit')){// 浏览器不支持video标签填充
        tOneVideo.css({'opacity':'0','transition': 'all 1s'});
        tOneVideo.on('canplaythrough',function (){
            tOneVideo.css({'opacity':'1'});
            tOneVideo.css({'width':'inherit','height':'inherit'});
            tOneVideo.css({'margin-top':-(tOneVideo.height()+$('#header-box').height()-winH)+'px'});
        })
    }
    
    var contentBoxOpacity;
    var knowMore = $('.know-more');
    var trashTitleBox= $('.trash-title-box');

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
        if(isSHowTitle){
            if(trashTitleBox.css('opacity')!=contentBoxOpacity) trashTitleBox.css({"opacity":contentBoxOpacity});
        }
        if(knowMore.css('opacity')!=contentBoxOpacity) knowMore.css({"opacity":contentBoxOpacity});

        if(winTop<=explainContentH+2){
            if(tOneVideo.css('position')!='fixed'&&tOneVideo.css('top')!='inherit') tOneVideo.css({'position':'fixed','top':'inherit'})
        }else{
            if(tOneVideo.css('position')!='absolute'&&tOneVideo.css('top')!=explainContentH) tOneVideo.css({'position':'absolute','top':explainContentH})
        }

        var explainContentTop = explainContent.offset().top-winTop;
        var contnetOpacity = (winH-explainContentTop)/explainContentH;
        if(contnetOpacity>1){
            contnetOpacity = 1
        }
        if(explainContent.css('opacity')!=contnetOpacity) explainContent.css({"opacity":contnetOpacity});
        tOneVideo.css({'filter': 'blur('+(1+contnetOpacity*1.9)+'px) saturate('+(0.85)+')'})
        if(winTop<10){
            if(tOneVideo.css('filter')!='inherit') tOneVideo.css({'filter': 'inherit'})
        }

        //滚动到section-one
        if(sectionOne.offset().top-winTop<winH-50&&sectionOneFirst){
            sectionOneFirst = false;
            sectionOneDescribe.css({'top': '8.5rem','opacity':'1'});
            sectionOneVideo.trigger('play');
        }

        //滚动到section-three
        if(sectionThree.offset().top-winTop<winH-50&&sectionThreeFirst){
            sectionThreeFirst = false;
            sectionThreeImg.css({'transform':'rotate(0deg) translate(0px)'});
            $('.section-three-describe').css({'top':'24%','opacity':'1'});
        }

        //滚动到section-four
        if(sectionFour.offset().top-winTop<winH-50&&sectionFourFirst){
            sectionFourFirst = false;
            sectionFourDescribe.css({'top': '8.5rem','opacity':'1'});
            sectionFourVideo.trigger('play');
        }

        //滚动到section-five
        if(sectionFive.offset().top-winTop<winH-50&&sectionFiveFirst){
            sectionFiveFirst = false;
            $('.section-five-describe').css({'transform': 'translate(0,0)','opacity':'1'});
        }

        //滚动到section-seven
        if(sectionSeven.offset().top-winTop<winH-100&&sectionSevenFirst){
            sectionSevenFirst = false;
            $('.banner-describe-all').css({'transform': 'translate(0px,0px)','opacity': '1'});
        }

        //滚动到section-eight
        if(sectionEight.offset().top-winTop<winH-100&&sectionEightFirst){
            sectionEightFirst = false;
            $('.section-eight-content').css({'transform': 'translate(0px,0px)','opacity': '1'});
        }

        //滚动到section-nine
        if(sectionNine.offset().top-winTop<winH-100&&sectionNineFirst){
            sectionNineFirst = false;
            $('.section-nine .section-describe').css({'transform': 'translate(0px,0px)','opacity': '1'});
        }

        //滚动到section-ten
        if(sectionTen.offset().top-winTop<winH-100&&sectionTenFirst){
            sectionTenFirst = false;
            $('.section-ten .section-describe').css({'transform': 'translate(0px,0px)','opacity': '1'});
        }

        if(sectionTen.offset().top-winTop<winH-sectionTen.outerHeight()-100){
            $('.section-ten-img-2').css({'display':'inline-block','opacity':'1'});
            $('.section-ten-img-1').css({'display':'none','opacity':'0'})
        }

        //滚动到sectionEleven_1
        if(sectionEleven_1.offset().top-winTop<winH-100&&sectionElevenFirst_1){
            sectionElevenFirst_1 = false;
            $('.section-eleven-1 .section-describe').css({'transform': 'translate(0px,0px)','opacity': '1'});
        }

        //滚动到sectionEleven_2
        if(sectionEleven_2.offset().top-winTop<winH-100&&sectionElevenFirst_2){
            sectionElevenFirst_2 = false;
            $('.section-eleven-2 .section-describe').css({'transform': 'translate(0px,0px)','opacity': '1'});
        }
        
        //滚动到sectionTwelve
        if(sectionTwelve.offset().top-winTop<winH-sectionTwelve.outerHeight()&&sectionTwelveFirst){
            sectionTwelveFirst = false;
            $('.color-img').css({'transform': 'translate(0px,50px)'});
        }


    })

})