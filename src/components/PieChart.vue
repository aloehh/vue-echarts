<template>
  <div class="pie">
    <h5>饼图1</h5>
    <div
      id="myChart"
      :style="`width: 20vw; height: 20vh`"
    />
    <div class="pie-legend">
      <span>{{dataWithRate[0].name }}: {{ dataWithRate[0].rate }}%</span>
      <span>{{dataWithRate[1].name }}: {{ dataWithRate[1].rate }}%</span>
      <span>{{dataWithRate[2].name }}: {{ dataWithRate[2].rate }}%</span>
    </div>
  </div>
</template>
<script>
// 直接引用
// import echarts from '@/lib/echart.js' 
export default {
  components: {
  },
  props: {
    pieData: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 18
    },
    height: {
      type: Number,
      default: 19
    }
  },
  data() {
    return {
      charts: ''
    }
  },
  computed: {
    dataWithRate() {
      const total = this.getTotal(this.pieData)
      const withRate = this.pieData.map(it => {
        return ({
          ...it,
          rate: Math.round((it.value * 100 / total) * 100) / 100
        })
      })
      return withRate
    }
  },
  watch: {
    pieData(n, o) {
      this.initcharts()
    }
  },
  mounted() {
    this.initcharts()
    window.addEventListener('resize', () => {
      if (this.charts) {
        this.charts.resize()
      }
    })
  },
  methods: {
    getTotal(arr) {
      const total = arr.reduce((prev, cur) => {
        return (+prev) + (+cur.value)
      }, 0)
      return total
    },
    initcharts() {
      this.$nextTick(() => {
        this.charts = echarts.init(document.getElementById('myChart'))
        const groupOptions = {
          tooltip: {
            trigger: 'item',
            formatter: function(parms) {
              const str =
              parms.marker +
              '' +
              parms.data.name +
              '</br>' +
              '数量：' +
              parms.data.value +
              '</br>' +
              '环比：' +
              parms.percent +
              '%'
              return str
            }
          },
          grid: {
            left: '0%',
            right: '30%',
            bottom: 0,
            containLabel: true
          },
          graphic: {
            elements: [{
              type: 'image',
              style: {
                width: 50,
                height: 50
              },
              left: 'center',
              top: 'center'
            }]
          },
          color: ['#FFB487', '#FF4A4A', '#6D3BD5'],
          series: [{
            type: 'pie',
            radius: ['58%', '70%'],
            center: ['50%', '50%'],
            data: this.pieData,
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          }]
        }
        this.charts.setOption(groupOptions)
      })
    }
  }

}
</script>

<style scoped>
  .pie {
    width: 300px;
    height: 100%;
    position: relative;
    left: 100px;
    top: 20px;
    flex: 1;
    margin-left: 10px;
  }
  .pie-legend {
      position: absolute;
      left: 50%;
      top: 15%;
      display: flex;
      flex-direction: column;
    }
  .pie-legend span {
    display: inline-block;
    padding: 3px 5px;
    background: #FFB487;
    margin-bottom: 10px;
  }
</style>
