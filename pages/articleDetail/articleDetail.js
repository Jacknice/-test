var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {

  },
  onLoad: function (options) {
    let that=this;
    var article = '<div><p style="margin: 15px; padding: 0px; line-height: 32.4px; text-indent: 2em; color: rgb(51, 51, 51); font-family: Verdana, &quot;Microsoft YaHei&quot;, sans-serif; white-space: normal;"> <span style="font-size:16px"> 年纪大了，视力下降，老花眼就自然产生。日常生活中，很多中老年人误把某些眼病当成老花眼，耽误了治疗，我们应该如何正确应对老花眼？</span></p ><p style="margin: 15px; padding: 0px; line-height: 32.4px; text-indent: 2em; color: rgb(51, 51, 51); font-family: Verdana, &quot;Microsoft YaHei&quot;, sans-serif; white-space: normal;"> <span style="font-size:16px"> 老花眼是随着年龄增长，晶状体的体积逐渐增大，晶状体赤道部与睫状肌距离缩短，导致睫状肌调节力下降所引起。老花眼的发病年龄一般在40~45岁以后，症状的出现可能提前或延后，这跟他以前伴有的远视或近视的状态有关。年轻时患近视的人，出现老花眼的年龄会延后，因为近视度数可以抵消一部分老花度数，而年轻时视力特别好或者患有远视的人，出现老花眼的年龄会提前。精神紧张、忧郁等情绪和全身疲劳的状况，也会造成眼睛调节能力的下降，导致老花眼过早出现。</span></p ></div>';
    WxParse.wxParse('article', 'html', article, that, 5);   // 实例化对象
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})