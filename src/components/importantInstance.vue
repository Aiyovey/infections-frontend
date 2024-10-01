<template>
    <div id="market" style="width: 100%; height: 100%; overflow: hidden;"></div>
</template>

<script>
import mapData from "@/data/yuegezhuang.json"
import mapStyle from "@/data/mapStyle.json"
// import humanData from "@/data/humanData.json"

import { listAgents } from "@/api/agent";

export default {
    data() {
        return {
            humanData: [],
        };
    },
    created() {
    },
    mounted() {
        this.getAgents();
        

    },
    methods: {
        getAgents() {
            listAgents().then(response => {
                this.humanData = response.data.data
                console.log(this.humanData)
                this.drawChart();
            })
        },

        drawChart() {
            var myChart = this.$echarts.init(document.getElementById("market"))
            // 指定图表的配置项和数据
            var option = {
                title: {
                    show: true,
                    text: '重点病例',
                    x: 'center'
                },
                bmap: {
                    center: [116.28929058577101, 39.88500059256146],
                    // center: [116.2771171, 39.87783755],
                    zoom: 200,
                    roam: true,
                    mapStyle: {
                        styleJson: mapStyle
                    }
                },
                series: [
                ],
            }
            // 使用刚指定的配置项和数据显示图表。
            option && myChart.setOption(option);
            var map = myChart.getModel().getComponent('bmap').getBMap();
            //添加geojson
            mapData.features.forEach(feature => {
                var pointArray = []
                feature.geometry.coordinates[0].forEach(item => {
                    pointArray.push(new window.BMap.Point(item[0], item[1]));
                })
                var ply = new window.BMap.Polygon()
                ply.setPath(pointArray)
                ply.setStrokeWeight(1.5)
                ply.setStrokeColor("green")
                ply.setFillColor("#cec5a5")

                map.addOverlay(ply)
            });
            //添加散点
            const colorMap = ["blue", "red"]
            this.humanData.forEach(item => {
                var circle = new window.BMap.Circle(new window.BMap.Point(item.longitude, item.latitude), 1 , {
                    strokeColor: colorMap[item.state],
                    fillColor: colorMap[item.state],
                    // strokeColor: "red",
                    // fillColor: "red",
                    strokeWeight: 0.5,
                })
                map.addOverlay(circle)
            })
            // window.onresize = myChart.resize
        },
    },
};
</script>

<style scoped lang="less">
/deep/ .anchorBL {
    display: none;
}
</style>