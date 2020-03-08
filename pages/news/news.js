import { $stopWuxRefresher } from '../../dist/index';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: {},
    items: [{
      title: new Date,
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
    },
    {
      title: new Date,
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
    }
    ]
  },
  onLoad: function (options) {
    //隐藏系统tabbar
    wx.hideTabBar();
    // 自定义tabBar赋值
    this.setData({
      tabBar: app.globalData.tabBar
    })
    app.editTabbar();
  },
  onPulling() {
    console.log('onPulling')
  },
  onRefresh() {
    console.log('onRefresh')
    setTimeout(() => {
      this.setData({
        items: [{
          title: new Date,
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        }, ...this.data.items],
      })

      $stopWuxRefresher()
    }, 2000)
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})