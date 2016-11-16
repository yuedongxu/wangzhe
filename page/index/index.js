Page({
  data: {
    imgUrls: [
      '/image/image1.jpg',
      '/image/image2.jpg',
      '/image/image3.jpg'
    ],
    newList:[
      {
        id:"1",
        title:"王者荣耀11月15日更细内容一览",
        info:"lalalalallalala",
        src:"/image/image1.jpg"
      },
      {
        id:"2",
        title:"王者荣耀双十一特殊限免有谁",
        info:"本文为大家介绍王者荣耀11月15日更新的全部内容，王者荣耀四排关闭，王者荣耀不知火舞限时抢购等，不要错过咯！",
        src:"/image/image1.jpg"
      },
      {
        id:"3",
        title:"王者荣耀单身贵族怎么换",
        info:"介绍王者荣耀双十一限免都有谁 王者荣耀限免女神怎么玩，希望这篇王者荣耀双十一女神攻略能帮到各位王者荣耀的小伙伴！",
        src:"/image/image1.jpg"
      },
      {
        id:"4",
        title:"王者荣耀双十一活动第二波",
        info:"本文为大家介绍王者荣耀单身贵族怎么换，王者荣耀双十一活动钻石兑换攻略，希望能帮到各位王者荣耀的小伙伴！",
        src:"/image/image2.jpg"
      },
      {
        id:"5",
        title:"王者荣耀英雄学院第二期攻略",
        info:"介绍王者荣耀双十一活动，王者荣耀双11活动怎么做？希望这篇王者荣耀双十一活动攻略能帮到各位王者荣耀的小伙伴！",
        src:"/image/image2.jpg"
      },
      {
        id:"6",
        title:"王者荣耀双11活动怎么做",
        info:"介绍王者荣耀英雄学院活动第二期 王者荣耀坦克训练营",
        src:"/image/image2.jpg"
      },
      {
        id:"7",
        title:"王者荣耀11月8日更新一览",
        info:"介绍王者荣耀双11活动 汪星人的食物领取",
        src:"/image/image2.jpg"
      }

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    current:0,
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onPullDownRefresh:function(){
    this.setData({ newList: [
        {
          id:"1",
          title:"王者荣耀数据刷新",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image3.jpg"
        },
         {
          id:"2",
          title:"王者荣耀数据刷新",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image3.jpg"
        }, {
          id:"3",
          title:"王者荣耀数据刷新",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image3.jpg"
        }, {
          id:"4",
          title:"王者荣耀数据刷新",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image3.jpg"
        }, {
          id:"5",
          title:"王者荣耀数据刷新",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image3.jpg"
        }
      ]})
      console.log(this.data.newList);
    wx.stopPullDownRefresh;
  },
  onReachBottom:function(){
      this.setData({ newList: [
        {
          id:"1",
          title:"王者荣耀数据加载",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image1.jpg"
        },
         {
          id:"2",
          title:"王者荣耀数据加载",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image1.jpg"
        }, {
          id:"3",
          title:"王者荣耀数据加载",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image1.jpg"
        }, {
          id:"4",
          title:"王者荣耀数据加载",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image1.jpg"
        }, {
          id:"5",
          title:"王者荣耀数据加载",
          info:"介绍王者荣耀双11活动 汪星人的食物领取",
          src:"/image/image1.jpg"
        }
      ]})
      console.log(this.data.newList);
  },
  tapDetail:function(){
    wx.nativateTo
  },
  tipsShow:function(){
    wx.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    success: function(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      }
    }
  })
  }
})