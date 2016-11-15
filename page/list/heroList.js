Page({
  data: {
    tipsList: [
      '坦克',
      '射手',
      '法师',
      '辅助',
      '打野'
    ],
    heroList:[
      {
        id:"1",
        name:"白起",
        info:"lalalalallalala",
        src:"/image/hero-bq.jpg"
      },
      {
        id:"2",
        name:"刘禅",
        info:"本文为大家介绍王者荣耀11月15日更新的全部内容，王者荣耀四排关闭，王者荣耀不知火舞限时抢购等，不要错过咯！",
        src:"/image/hero-lc.jpg"
      },
      {
        id:"3",
        name:"程咬金",
        info:"介绍王者荣耀双十一限免都有谁 王者荣耀限免女神怎么玩，希望这篇王者荣耀双十一女神攻略能帮到各位王者荣耀的小伙伴！",
        src:"/image/hero-cyj.jpg"
      },
      {
        id:"4",
        name:"庄周",
        info:"本文为大家介绍王者荣耀单身贵族怎么换，王者荣耀双十一活动钻石兑换攻略，希望能帮到各位王者荣耀的小伙伴！",
        src:"/image/hero-zz.jpg"
      },
      {
        id:"5",
        name:"项羽",
        info:"介绍王者荣耀双十一活动，王者荣耀双11活动怎么做？希望这篇王者荣耀双十一活动攻略能帮到各位王者荣耀的小伙伴！",
        src:"/image/hero-xy.jpg"
      },

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
    console.log("11");
  }
})