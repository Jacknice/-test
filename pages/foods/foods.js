Page({
  data: {
    listLength:10,
    show:false,
  },
  selct(){
    this.setData({dw:!this.data.dw})
  },
  photograph() {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function(res) {
        // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
        app.startOperating("保存中")
        var filePath = res.tempFilePaths[0];
        var session_key = wx.getStorageSync('session_key');
        // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
        wx.uploadFile({
          url: app.globalData.url + '/home/upload/uploadFile/session_key/' + session_key,
          filePath: filePath,
          name: 'file',
          success: function(res) {
            app.stopOperating();
            // 下面的处理其实是跟我自己的业务逻辑有关
            var data = JSON.parse(res.data);
            if (parseInt(data.status) === 1) {
              app.showSuccess('文件保存成功');
            } else {
              app.showError("文件保存失败");
            }
          }
        })
      },
      fail: function(error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function() {

      }
    })
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