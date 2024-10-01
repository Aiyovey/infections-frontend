<template>
    <div id="trend" style="width: 96%; height: 28vh; margin-left: 2%;"></div>
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
            var myChart = this.$echarts.init(document.getElementById("trend"))
            // 指定图表的配置项和数据
            var option = {
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
                    y2: '10%',
                },
            };
            // 使用刚指定的配置项和数据显示图表。
            option && myChart.setOption(option);
        },
    },
};
</script>