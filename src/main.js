import Vue from "vue";
import App from "./App.vue";
// import echarts from 'echarts'
// import 'echarts/lib/echarts'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/toolbox'
// import 'echarts/lib/component/legend'

import echarts from 'echarts/lib/echarts'
 
// 再引入你需要使用的图表类型，标题，提示信息等
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/legend'
Vue.prototype.$echarts = echarts

// import ECharts from 'vue-echarts'
// import 'echarts/index'
// // 注册为全局组件
// Vue.component('v-chart', ECharts)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
