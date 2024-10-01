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

        newCase() {
          return newCaseData().then(response => {
            const data = response.data.data
            this.caseData = data.caseData
            this.xLabel = data.xLabel
            this.drawChart()
          })
        },

        drawChart() {
            // const steps = this.caseData.map(item => item.step)
            // // console.log('step:'+steps)
            // const values = [];
            // for (let i=0; i<steps.length; i++) {
            //   if(i===0) {
            //     values[i] = 0;
            //   } else {
            //     values[i] = values[i-1]+1;
            //   }
            // }
            // const dataPoints = steps.map((x, index) => ({
            //   x: x,
            //   y: values[index]
            // }));
            // console.log(dataPoints)
            var myChart = this.$echarts.init(document.getElementById("process"))
            // console.log('step:'+steps)
            // 假设 data 为时间戳数组
            // const data = [
            //   0, 28800, 57600, 86400, 115200, 144000, 172800, 201600, 230400, 259200, 288000
            // ];

            // const formatTime = (timestamp) => {
            //   // 将时间戳转换为日期格式的字符串
            //   const date = new Date(timestamp * 1000); // 时间戳转换为毫秒
            //   return `${date.getUTCMonth() + 1}月 ${date.getUTCDate()}日`; // 格式化为 "月 日"
            // };
            // console.log(values)
            // 指定图表的配置项和数据
              var option = {
                xAxis: {
                  type: 'value', // 确保 X 轴为数值型
                  data: this.xLabel.map(item=>item.key),
                  axisLabel: {
                    formatter: function (value) {
                      return this.xLabel.find(item=>item.key = value)
                  }
                },
                axisTick: {
                  alignWithLabel: true // 确保刻度线对齐
                }
              },
              yAxis: {
                type: 'value'
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