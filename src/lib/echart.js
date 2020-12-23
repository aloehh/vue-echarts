/**
 * 专门设置一个echarts配置文件,文件路径src/lib/echart.js ( 1.12M  )
 */
import echarts from 'echarts/lib/echarts'
 
// 再引入你需要使用的图表类型，标题，提示信息等
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
 
export default echarts