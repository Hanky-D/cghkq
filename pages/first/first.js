// pages/kaoqin/kaoqin.js
Page({
  data: {
    show:false,
    
  },
  chip(){
    this.setData({
      show:true
    })
  },
  haha(e){
    if(e.detail.value == "20192005231" || e.detail.value == "13332827134")
      {
        wx.navigateTo({
          url: '/pages/show/show',
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
      }
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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