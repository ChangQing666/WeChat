//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎来到找纱网!!!',
    userInfo: {},
    logo_url:"../../img/logo.png",
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('已加载完成...')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },

})
