// pages/main/main.js
Page({
  data:{
      txs:['waveImage'],
      url:''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
 
  onItemClick : function(e){
      console.log(e.currentTarget.dataset.id)
      this.url='?title='+this.data.txs[e.currentTarget.dataset.id]
      var tempTitle=''
      switch(e.currentTarget.dataset.id){
        case 0:
          tempTitle = '../waveimage/waveimage'
          
          break;
       
      }
      wx.navigateTo({
          url: tempTitle+this.url,
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
  }
})
