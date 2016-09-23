/**
 * Created by cxl on 2016/9/6.
 */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    initialSlide: page,
    onSlideChangeEnd: function (swiper) {
        if (swiper.activeIndex == 2) {
            animate();
        }
    },

});
// 查看性格按钮绑定单击事件,弹出蒙版
// 月饼编号
var id = 0;
//选月饼,通过蒙版增加选择区域
$(".ul_sel_mask>li").click(function(){
    var index = $(this).index();
    $(".checkbox").eq(index).toggleClass("active")
    $(".checkbox").eq(index).parent().siblings().children("div").removeClass("active");
    if ($(".checkbox").eq(index).hasClass("active")) {
        $(".btn_confirm").addClass("active");
        id = $(".checkbox").eq(index).parent("li").index() + 1;
    } else {
        $(".btn_confirm").removeClass("active");
        id = 0;
    }
})

$(".btn_confirm").click(function () {
    if($(".checkbox").hasClass("active")){
        $(".modal").css({display: "block"})
    }else{
        // alert("请选择您喜欢的月饼")
        $(".modal_info").css({display:"block"})
    }
})
$(".info_box .btn").click(function(){
    $(".modal_info").css({display:"none"})
})

// 第三页动画
function animate() {
    $(".m1").animate({top: "2.46875rem",}, 1000).animate({left: "4.03125rem",}, 600);
    $(".m2").animate({top: "3.676339rem",}, 1000).animate({left: "4.03125rem",}, 600);
    $(".m3").animate({top: "4.883929rem",}, 1000).animate({left: "4.03125rem",}, 600);
    $(".m4").animate({top: "6.091518rem",}, 1000).animate({left: "4.03125rem",}, 600);
    $(".m5").animate({top: "7.299107rem",}, 1000).animate({left: "4.03125rem",}, 600);
    $(".m6").animate({top: "8.506696rem",}, 1000).animate({left: "4.03125rem",}, 600);
    $(".m7").animate({top: "9.714286rem",}, 1000).animate({left: "4.03125rem",}, 600);
    $(".m8").animate({top: "10.92188rem",}, 1000).animate({left: "4.03125rem",}, 600, function () {
        $(".page3 ul").fadeIn(1000);
        $(".btn_confirm").fadeIn(1000);
    });
}

// 背景音乐 单击事件
var x = $("#media")[0];
$("#bg_music").click(function () {
    //控制背景音乐 播放或暂停
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
        $(this).css({"background": "url(" + staticUrl + "img/music_on.png) no-repeat", backgroundSize: "contain"})
        x.play();
    } else {
        $(this).css({"background": "url(" + staticUrl + "img/music_off.png) no-repeat", backgroundSize: "contain"})
        x.pause();
    }
})

