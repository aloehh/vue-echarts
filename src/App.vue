<template>
  <div id="app">
    <h3>echarts 按需加载之我最爱的饮料</h3>
    <PieChart :pie-data="pieData"/>
    <!-- <VueChart :pie-data="pieData"/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PieChart from "./components/PieChart.vue";
import VueChart from "./components/VueChart.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    PieChart,
    // VueChart
  },
  data() {
    return {
      pieData: [
        {
          value: 100,
          name: '波霸奶茶'
        },
        {
          value: 200,
          name: '芝芝霉霉'
        },
        {
          value: 50,
          name: '杨枝甘露'
        }
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
