/**
 * 利用 babel-plugin-equire 实现按需加载 ( 1.11M )
 */
// eslint-disable-next-line
const echarts = equire([
  // 写上你需要的 echarts api
  "tooltip",
  "legend",
  "toolbox",
  "pie",
  "line"
]);

export default echarts;