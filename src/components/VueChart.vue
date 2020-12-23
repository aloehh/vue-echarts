<template>
  <div class="pie">
     <h5>饼图2</h5>
    <v-chart chartId="myChart" :options="chartOptions" width="300px" height="300px" :auto-resize="true"></v-chart>
    <div class="pie-legend">
      <span>{{dataWithRate[0].name }}: {{ dataWithRate[0].rate }}%</span>
      <span>{{dataWithRate[1].name }}: {{ dataWithRate[1].rate }}%</span>
      <span>{{dataWithRate[2].name }}: {{ dataWithRate[2].rate }}%</span>
    </div>
  </div>
</template>
<script>
// 直接引用
// import echarts from '@/lib/echarts.js' 
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
      charts: '',
      chartOptions: {}
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
    this.getOptions()
  },
  methods: {
    getTotal(arr) {
      const total = arr.reduce((prev, cur) => {
        return (+prev) + (+cur.value)
      }, 0)
      return total
    },
    getOptions() {
      this.chartOptions = {
          name: '饮料',
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
    }
  }

}
</script>

<style scoped>
  .pie {
    width: 600px;
    height: 100%;
    position: relative;
    left: 0px;
    top: 20px;
    flex: 1;
    margin-left: 10px;
  }
  .pie-legend {
      position: absolute;
      right: 0;
      top: 20%;
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
