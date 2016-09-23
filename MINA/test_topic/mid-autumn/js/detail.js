/**
 * Created by cxl on 2016/9/9.
 */
autoHeight()
function autoHeight(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    $("body").css({width:w,height:h});
}
showDetail(id)
//再测一次,单击事件
$(".btn_onceAgain").click(function () {
    window.location.href = "http://huodong.zhaosha.com/zhongqiu.html?action=retest&rid=" + id;
})
// 根据月饼编号,展示不同详情内容(图片及文字)
function showDetail(id) {
    var txt = "";
    var code = "";
    var sg_txt = "喜欢水果月饼的你性格温暖又细腻，像是江南浸润了水气的阳光一般，不会灼人又让人心头暖融融。在社交场上你绝对是天生的高手，每个人都会被你的魅力和贴心所感染，对你留下深刻的印象。"
    var zm_txt = "喜欢芝麻月饼的你性格开放，宽容度高，口味也不刁钻。跟你相处，人生一路都可以是绿灯，一切想象皆有可能。谁让你就是那么活泼包容脑洞无限呢。你也是拒绝大喜大悲、大起大落的一群，对你来说，人生应该细水长流，朋友交往起来也应该淡如一杯甜汤。";
    var rs_txt = "喜欢肉松月饼的你性格大大咧咧，愿意为很多事很多人付出，对朋友对亲人很少挑剔，不太计较得失但又喜欢最大程度地享受生活。你的性格简单、直接、没有什么心机，并且随时随地都愿意去赞美一个人或一件事。";
    var mg_txt = "喜欢玫瑰月饼的你看上去安安静静的你，其实内心对自己的要求很高。对你来说，梦想不是一蹴而就的，而是靠长年累月的努力和别人注意不到的奋斗而实现的。这样的人无论对生活还是对事业，都有非常高的目标，但绝不会挂在嘴上给自己不切实际的想象，而是脚踏实地去实现。";
    var dh_txt = "喜欢蛋黄月饼的你性格鲜明，人格强烈，爱憎分明，无论是生活还是事业，都是干劲十足的一群。并且你是目的性非常强的人，不会纠结于小节，也不在乎为了实现生活目标经历了多少挫败，因为你具有成功者的质素和人生赢家的潜质。";
    var lr_txt = "喜欢莲蓉月饼的你的内心住着一个小孩子，无论表面上给人留下多么成熟或优雅的印象，内心的儿童依然向往毫无压力，甚至可以调皮捣蛋的生活。这样的你往往是很有责任心亦很有担当的人，当你有压力时，会选择找个安静的地方让自己放空，与朋友相处时大家更愿意与你交谈心事。";
    var ds_txt = "喜欢豆沙月饼的你是朋友口中的好好先生，走到哪里都人缘很好的一位。总是用真正的一腔热情，做好自己的事情，也不吝惜去帮助别人。你的人生信条是“吃亏是福”，一直这样想的人，虽然容易被人占小便宜，但也经常会有意想不到的好运气降临在你身上哦。";
    var wr_txt = "喜欢五仁月饼的你虽然外表看起来有点害羞，性格温和，但其实内心耿直，有正义感，有非常高的人生底线。你重视家庭，是重视传统的真善美捍卫者。你是内心强大的群体，在找对象方面不愿意委曲求全，人生路上，你是真正可靠的生活伴侣和事业伙伴。";
    switch (id) {
        case 1:
            code = "wr";
            break;
        case 2:
            code = "ds";
            break;
        case 3:
            code = "lr";
            break;
        case 4:
            code = "dh";
            break;
        case 5:
            code = "mg";
            break;
        case 6:
            code = "rs";
            break;
        case 7:
            code = "zm";
            break;
        case 8:
            code = "sg";
            break;
    }
    var moon_src = staticUrl + "img/" + code + ".png";
    $(".moon>img").attr("src", moon_src);
    var txt = eval(code + "_txt");
    $("div.txt_detail>div").html(txt);
}
//banner和更多活动单价事件,跳转到app下载
$(".btm_banner").click(function () {
    toapp();
})
$(".btn_more").click(function () {
    toapp();
})
//下载app
function toapp() {
    window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.zhaosha.zhaoshawang";
}

