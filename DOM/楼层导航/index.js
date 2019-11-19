
// 获取1楼距离文档的间距
var louceng1 = $('.jd').eq(0).offset().top;
// 获取2楼距离文档的间距
var louceng2 = $('.jd').eq(1).offset().top;
// 获取3楼距离文档的间距
var louceng3 = $('.jd').eq(2).offset().top;
// 获取4楼距离文档的间距
var louceng4 = $('.jd').eq(3).offset().top;

// 功能1：滚动条滚动中，显示或隐藏侧边栏
$(window).scroll(function () {
  // 获取被卷去的页面间距
  var v = $(window).scrollTop();
  // 对比是否大于等于1楼距离文档的间距
  if (v >= louceng1) {
    // 显示
    $('.subnav').show();
  } else {
    // 隐藏
    $('.subnav').hide();
  }


  // 功能2：滚动条滚动中，控制侧边栏对应的切换项
  if (v >= louceng1) {
    $('.subnav li').eq(0).addClass('current').siblings().removeClass('current');
  }
  if (v >= louceng2) {
    $('.subnav li').eq(1).addClass('current').siblings().removeClass('current');
  }
  if (v >= louceng3) {
    $('.subnav li').eq(2).addClass('current').siblings().removeClass('current');
  }
  if (v >= louceng4) {
    $('.subnav li').eq(3).addClass('current').siblings().removeClass('current');
  }

});


// 功能3：点击侧边栏切换项，控制滚动条滚动到对应的楼层
// 给侧边栏中的选项注册click事件
$('.subnav li').click(function () {
  // 获取被点击的li的索引
  var num = $(this).index();
  // 通过索引找到对应的楼层的距离文档的位置
  var v = $('.jd').eq(num).offset().top;
  // 把位置赋值给scrollTop
  // $(window).scrollTop(v);
  $('html,body').animate({
    scrollTop:v
  },200,'linear');
});


$('.back').click(function(){
  $('html,body').animate({
    scrollTop:0
  },1000,'linear');
})

