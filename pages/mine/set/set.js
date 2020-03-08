import { $wuxSelect,$wuxCalendar} from '../../../dist/index';
Page({
  data: {
    sex: '男',
    title1:'',
    birthday:'',
    target:'',
    targetVal:'',
    sd:'',
    sdVal:'',
    hidden:false
  },
  selsd(){
    $wuxSelect('#wux-select1').open({
      value: this.data.sd,
      options: [
        '慢',
        '适中',
        '快'
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            sd: value,
            sdVal: options[index],
          })
        }
      },
    })
  },
  birthday(){
    $wuxCalendar().open({
      value: this.data.birthday,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          birthday: displayValues,
        })
      },
    })
  },
  submit(){
    wx.navigateBack({
      delta: 1
    })
  },
  selTarget(){
    $wuxSelect('#wux-select1').open({
      value: this.data.target,
      options: [
        '减肥',
        '保持'
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          index == 1 ? this.setData({ hidden: true }) : this.setData({ hidden: false })
          this.setData({
            target: value,
            targetVal: options[index],
          })
        }
      },
    })
  },
  selSex() {
    $wuxSelect('#wux-select1').open({
      value: this.data.sex,
      options: [
        '男',
        '女'
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            sex: value,
            title1: options[index],
          })
        }
      },
    })
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})