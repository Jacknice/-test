import F2 from '../../f2canvas/lib/f2';
import run from '../../data/steps-pan.js';
import data from '../../data/sroll-line.js';
import { $wuxDialog } from '../../dist/index'
let runChart = null,chart=null,
  app = getApp();

function formatNumber(n) {
  return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function initRun(canvas, width, height) {
  const originDates = [];
  run.forEach(obj => {
    if (obj.date >= '2018-05-01') {
      originDates.push(obj.date);
    }
  });

  runChart = new F2.Chart({
    el: canvas,
    width,
    height,
    animate: false
  });

  runChart.source(run, {
    date: {
      type: 'timeCat',
      tickCount: 5,
      values: originDates,
      mask: 'MM-DD'
    },
    steps: {
      tickCount: 5
    }
  });

  runChart.axis('date', {
    tickLine: {
      length: 4,
      stroke: '#cacaca'
    },
    label: {
      fill: '#cacaca'
    },
    line: {
      top: true
    }
  });
  runChart.axis('steps', {
    position: 'left',
    label(text) {
      return {
        text: formatNumber(text * 1),
        fill: '#cacaca'
      };
    },
    grid: {
      stroke: '#d1d1d1'
    }
  });
  runChart.tooltip({
    showItemMarker: false,
    background: {
      radius: 2,
      padding: [3, 5]
    },
    onShow(ev) {
      const items = ev.items;
      items[0].name = '';
      items[0].value = items[0].value + ' 步';
    }
  });
  runChart.interval().position('date*steps').style({
    radius: [2, 2, 0, 0]
  });

  // 定义进度条
  runChart.scrollBar({
    mode: 'x',
    xStyle: {
      backgroundColor: '#e8e8e8',
      fillerColor: '#808080',
      offsetY: -2
    }
  });
  runChart.interaction('pan');
  runChart.render();
  return runChart;
}

function initChart(canvas, width, height) {
  chart = new F2.Chart({
    el: canvas,
    width,
    height,
    animate: false
  });
  chart.source(data, {
    release: {
      min: 1990,
      max: 2010
    }
  });
  chart.tooltip({
    showCrosshairs: true,
    showItemMarker: false,
    background: {
      radius: 2,
      fill: '#1890FF',
      padding: [3, 5]
    },
    nameStyle: {
      fill: '#fff'
    },
    onShow(ev) {
      const items = ev.items;
      items[0].name = items[0].title;
    }
  });
  chart.line().position('release*count');
  chart.point()
    .position('release*count')
    .style({
      lineWidth: 1,
      stroke: '#fff'
    });

  chart.interaction('pan');
  // 定义进度条
  chart.scrollBar({
    mode: 'x',
    xStyle: {
      offsetY: -5
    }
  });

  // 绘制 tag
  chart.guide().tag({
    position: [1969, 1344],
    withPoint: false,
    content: '1,344',
    limitInPlot: true,
    offsetX: 5,
    direct: 'cr'
  });
  chart.render();
  return chart;
}

Page({
  data: {
    opts: {
      onInit: initRun
    },
    opts1:{
      onInit:initChart
    },
    hidden:false
  },
  prompt() {
    let that=this;
    this.setData({hidden:true})
    const alert = (content) => {
      $wuxDialog('#wux-dialog--alert').alert({
        resetOnClose: true,
        title: '提示',
        content: content,
      })
    }

    $wuxDialog().prompt({
      resetOnClose: true,
      title: '输入当前体重',
      fieldtype: 'number',
      defaultText: '',
      placeholder: '请输入您个人体重',
      maxlength: 4,
      onConfirm(e, response) {
        const content = response.length === 4 ? `` : `请输入正确的体重`;
        that.setData({ hidden: false})
      },
      onCancel(e) {
        that.setData({ hidden: false })
      },
    })
  },
  onReady() {},
  onLoad: function() {
    //隐藏系统tabbar
    wx.hideTabBar();
    this.setData({
      tabBar: app.globalData.tabBar
    })
    app.editTabbar();
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }
});