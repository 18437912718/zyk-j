//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: ''
  },
  // chooseVideo: function () {
  //   wx.chooseVideo({
  //     sourceType: ['album', 'camera'],
  //     maxDuration: 60,
  //     camera: 'back',
  //     success(res) {
  //       console.log(res.tempFilePath)
  //     }
  //   })
  // }

  //选择视频
  // chooseVideo: function () {
  //   var that = this
  //   wx.chooseVideo({
  //     success: function (res) {
  //       that.setData({
  //         src: res.tempFilePath,
  //       })
  //     }
  //   })
  // },
  //上传视频 目前后台限制最大100M，以后如果视频太大可以在选择视频的时候进行压缩
  uploadvideo: function () {
    var src = this.data.src;
    wx.uploadFile({
      url: 'https://www.bilibili.com/video/av71664605/',//服务器接口
      method: 'POST',//这句话好像可以不用
      filePath: src,
      header: {
        'content-type': 'multipart/form-data'
      },
      name: 'files',//服务器定义的Key值
      success: function () {
        console.log('视频上传成功')
      },
      fail: function () {
        console.log('接口调用失败')
      }
    })
  }
})
