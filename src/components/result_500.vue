<template>
    <div>
        <div id="regionRisk" style="width: 90%; height: 300px"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    created() {
    },
    mounted() {
        this.drawChart();
    },
    methods: {
        drawChart() {
            var myChart = this.$echarts.init(document.getElementById("regionRisk"))
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: "ECharts 入门示例",
                },
                tooltip: {},
                legend: {
                    data: ["销量"],
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            };
            // 使用刚指定的配置项和数据显示图表。
            option && myChart.setOption(option);
        },

    },
};
</script>