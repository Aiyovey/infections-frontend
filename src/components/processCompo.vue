<template>
  <div id="process" style="width: 100%; height: 30vh; "></div>
</template>

<script>

import {newCaseData} from "@/api/NewCaseData";

export default {
  data() {
    return {
      caseData:[],
      xLabel: []
    };
  },
  created() {
  },
  mounted() {
    this.newCase();
  },
  methods: {

    getSimulationResult() {
      console.log(this.caseData.length);
      return this.caseData.length
    },

    async newCase() {
      const response=await newCaseData();
      // const data = response.data.data
      this.caseData=response.data.data.caseData;
      this.xLabel=response.data.data.xlabel;
      console.log(this.xLabel);
      this.drawChart();
    },

    drawChart() {
      var myChart = this.$echarts.init(document.getElementById("process"))
      // 指定图表的配置项和数据
      const xLabel = this.xLabel
      console.log(xLabel.map(item => item.key))
      var option = {
        xAxis: {
          type: 'value', // 确保 X 轴为数值型
          data: xLabel.map(item => item.key),
          interval:28800,
          axisLabel: {
            formatter: function (value) {
              const found = xLabel.find(item => item.key === value)
              console.log(value)
              if (found) {
                return found.value
              } else {
                return ''
              }
            }
          },
          axisTick: {
            alignWithLabel: true,
            interval: 0 // display all ticks
          }
        },
        yAxis: {
          type: 'value',
          name: '感染人数'    
        },
        series: [
          {
            data: this.caseData.map(dp => [dp.key, dp.value]), // 你的数据点
            type: 'line',
            smooth: true
          }
        ],
        // grid: {
        //   y: '10%',
        //   y2: '10%'
        // }
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>