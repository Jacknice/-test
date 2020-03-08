// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //隐藏系统tabbar
    wx.hideTabBar();
    // 自定义tabBar赋值
    this.setData({
      tabBar: app.globalData.tabBar
    })
    app.editTabbar();
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }
})