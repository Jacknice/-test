Page({
  data: {
    listLength:10,
    show:false,
  },
  search(){

  },
  selct(){
    this.setData({dw:!this.data.dw})
  },
  footClick(){
    this.setData({
      show: true,
    })
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
  },
  onChange1(e) {
    this.setData({
      val: e.detail.key,
    })
  },
  onClose(){
    this.setData({
      show: false,
    })
  },
  onLoad: function(options) {

  },
  onReady: function() {

  },

  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {
    let that=this;
    setTimeout(function(){
      that.setData({ listLength: that.data.listLength + 10 })
    },1000)
  },
  onShareAppMessage: function() {

  }
})