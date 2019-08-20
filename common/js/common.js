function supportCss3(style) {
    var prefix = ['webkit', 'Moz', 'ms', 'o'],
        i,
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function (string) {
            return string.replace(/-(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
        };

    for (i in prefix)
        humpString.push(_toHumb(prefix[i] + '-' + style));

    humpString.push(_toHumb(style));

    for (i in humpString)
        if (humpString[i] in htmlStyle) return true;

    return false;
}

function showModal(title,img,content){
    var info = '';
    if(content) info = '<div class="tn-modal-info">'+content+'</div>';
    var modal = '<div class="modal-box">\n'+
                    '<div class="modal-content-box">\n'+
                        '<div class="close-modal-btn-box">\n'+
                            '<div class="close-modal-btn"><img src="/common/img/关闭按钮.svg" alt=""></div>\n'+
                        '</div>\n'+
                        '<div class="tn-modal-content">\n'+
                            '<div class="tn-modal-title">'+title+'</div>'+info+'\n'+
                            '<div class="tn-modal-img">\n'+
                            '<img class="w-100" src="'+img+'" alt="">\n'+
                            '</div>\n'+
                        '</div>\n'+
                    '</div>\n'+
                '</div>';
    $('body').append(modal);    
    $('.modal-box').on("mousewheel",function(e){
        e.preventDefault(); 
        return false;
    })        
}


$(document).ready(function(){
    $('body').on('click','.close-modal-btn',function (){
        $('.modal-box').remove();
    })

    $('body').on('click','.open_wx',function (){
        showModal('拓牛官方微信','/common/img/拓牛官方微信.png','打开微信 点击右上角的“+” 选择“扫一扫”功能，用摄像头对准下方二维码即可');
    })

    $('body').on('click','.open_wx_shopping',function (){
        showModal('拓牛官方微信商城','/common/img/拓牛官方微信商城.png');
    })

     var isShowWx = false; 
    $('body').on('click','.wechart-box',function (){
        if(isShowWx===false){
            isShowWx=true;
            $('.wx-code-box').css({'display':'inherit'});
            $('.wechart-box .no-select').css({'display':'none'});
            $('.wechart-box .select').css({'display':'inherit'});
        }else{
            isShowWx=false;
            $('.wx-code-box').css({'display':'none'});
            $('.wechart-box .no-select').css({'display':'inherit'});
            $('.wechart-box .select').css({'display':'none'});
        }
    })


//     var footer = '<div class="footer-box w-100">\n'+
//     '<div class="footer-content">\n'+
//         '<div class="felx-r merit js-sb ai-c w-100">\n'+
//             '<div class="felx-r ai-c">\n'+
//                 '<img src="/common/img/官方正品保障.svg" alt="">\n'+
//                 '<span>官方正品保障</span>\n'+
//             '</div>\n'+
//             '<div class="felx-r ai-c">\n'+
//                 '<img src="/common/img/365天官方保修.svg" alt="">\n'+
//                 '<span>365天官方保修</span>\n'+
//             '</div>\n'+
//             '<div class="felx-r ai-c">\n'+
//                 '<img src="/common/img/多仓发货配货.svg" alt="">\n'+
//                 '<span>多仓发货配货</span>\n'+
//             '</div>\n'+
//             '<div class="felx-r ai-c">\n'+
//                 '<img src="/common/img//一对一售后服务.svg" alt="">\n'+
//                 '<span>一对一售后服务</span>\n'+
//             '</div>\n'+
//         '</div>\n'+
//         '<div class="footer-line"></div>\n'+
//         '<div class="more-info felx-r js-sb">\n'+
//             '<div class="more-info-1">\n'+
//                 '<div class="felx-r js-sb ai-c">\n'+
//                     '<span>购买渠道</span>\n'+
//                     '<span>关于我们</span>\n'+
//                     '<span>关注我们</span>\n'+
//                     '<span>服务支持</span>\n'+
//                 '</div>\n'+
//                 '<div class="felx-r js-sb ai-c co-3F go-concat">\n'+
//                     '<span class="open_wx_shopping">微信商城</span>\n'+
//                     '<a href="/brandStory/brandStory.html" target="_blank"><span>品牌故事</span></a>\n'+
//                     '<span class="open_wx">官方微信</span>\n'+
//                     '<a href="/afterSales/afterSales.html?isProblem=1" target="_blank"><span>常见问题</span></a>\n'+
//                 '</div>\n'+
//                 '<div class="felx-r js-sb ai-c co-3F go-concat">\n'+
//                     '<a href="https://mall.jd.com/index-1000158843.html" target="_blank"><span>京东商城</span></a>\n'+
//                     '<a href="/contactUs/contactUs.html" target="_blank"><span>联系我们</span></a>\n'+
//                     '<a href="https://weibo.com/p/1006065721334222/home" target="_blank"><span>官方微博</span></a>\n'+
//                     '<a href="/afterSales/afterSales.html" target="_blank"><span>售后政策</span></a>
//                 '</div>\n'+
//             '</div>\n'+
//             '<div class="more-info-2">\n'+
//                 '<div class="felx-c ai-c">\n'+
//                     '<div class="phone-number">400-821-6632</div>\n'+
//                     '<div class="time">周一至周日（09:00-22:00)</div>\n'+
//                 '</div>
//                 '<div class="felx-r ai-c position-r">\n'+
//                     '<div class="wechart-box">\n'+
//                         '<img class="no-select" src="/common/img/底部微信icon.svg" alt="">\n'+
//                         '<img class="select" src="/common/img/底部微信选中icon.svg" alt="">\n'+
//                         '<div class="wx-code-box">
//                             <img style="width:100%;height: inherit;" src="/common/img/二维码.png" alt="">\n'+
//                         '</div>\n'+
//                     '</div>\n'+
//                     '<div class="webo-box">\n'+
//                         '<a href="https://weibo.com/p/1006065721334222/home" target="_blank">\n'+
//                             '<img class="no-select" src="/common/img/底部微博icon.svg" alt="">\n'+
//                             '<img class="select" src="/common/img/底部微博选中icon.svg" alt="">\n'+
//                         '</a>\n'+
//                     '</div>\n'+
//                 '</div>\n'+
//             '</div>\n'+
//         '</div>\n'+
//         '<div class="footer-line"></div>\n'+
//         '<div class="information">© 2017 TOWNEW,All Right Reserved 沪ICP备15042276号</div>\n'+
//     '</div>\n'+
// '</div>\n';

// $('#footer-box').append(footer);

})

