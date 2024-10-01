<template>
    <div id="analysis1" style="width: 100%; height: 100%; "></div>
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
            var myChart = this.$echarts.init(document.getElementById("analysis1"))
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '分析图1',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }
                ],
                grid: {
                    x: '15%',
                    y: '20%',
                    y2: '15%',
                }
            };
            // 使用刚指定的配置项和数据显示图表。
            option && myChart.setOption(option);
        },
    },
};
</script>