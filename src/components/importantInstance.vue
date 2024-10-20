<template>
    <div id="market" style="width: 100%; height: 100%; overflow: hidden;">
    </div>
</template>

<script>
import mapData from "@/data/yuegezhuang.json"
import mapStyle from "@/data/mapStyle.json"
import tanwei from "@/data/tanwei.json"
// import humanData from "@/data/humanData.json"

import { listAgents, getMaxStep } from "@/api/agent";

var nowStep = 0;

export default {
    data() {
        return {
            timer: null,
            allData: [],
            nowData: [],
            initPloygon: false,
            startStep: null,
            endStep: null,
            maxStep: null,
        };
    },
    created() {
    },
    mounted() {
        // this.getAgents({
        //     startStep: 0,
        //     endStep: 200
        // });
        this.drawChart()
        getMaxStep().then(res => {
            this.maxStep = res.data.data
        })
    },
    methods: {
        handleStart() {
            console.log("child start", this.nowData)
            this.timer = setInterval(() => {
                this.update()
                if (this.endStep <= nowStep) {
                  clearInterval(this.timer)
                  this.timer = null
                }
                // this.handleStart()
            }, 1000);
            // this.update()
            // clearTimeout(this.timer)
            // this.timer = setTimeout(function() {
            //     // this.update()
            //     this.handleStart();
            // }, 1000)
        },
        handleStop() {
            console.log("stop")
            clearInterval(this.timer);
        },
        handleReset() {
            console.log("reset")
            clearInterval(this.timer);
            nowStep = 0
            this.update()
        },

        update() {
            nowStep += 1
            this.nowData = this.allData.filter((item) => item.step === parseInt(nowStep))
            console.log("nowStep", nowStep)
            console.log("nowData", this.nowData)
            this.drawChart();
            // setTimeout(this.update(), 1000)
        },

        getAgents(stepParams) {
            if (stepParams.startStep) {
                nowStep = stepParams.startStep
            }
            else {
                nowStep = 0
                stepParams.startStep = 0
            }
            if (!stepParams.endStep) {
                stepParams.endStep = this.maxStep
            }

            nowStep = parseInt(nowStep)
            this.startStep = stepParams.startStep
            this.endStep = stepParams.endStep
            console.log("stepParams", stepParams)
            listAgents(stepParams).then(response => {
                this.allData = response.data.data
                this.nowData = this.allData.filter((item) => item.step === parseInt(nowStep))
                this.drawChart();
                this.handleStart();
            })
        },

        convertData(data) {
            var res = []
            data.forEach(item => {
                var iValue = [item.longitude]
                iValue.push(item.latitude)
                if (item.state === 1)
                    iValue.push("red")
                else
                    iValue.push("blue")
                res.push({
                    name: "agent" + item.agent,
                    value: iValue
                })
            })
            // console.log("res", res)
            return res;
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
                    minZoom: 10,
                    maxZoom: 20,
                    roam: true,
                    mapStyle: {
                        styleJson: mapStyle
                    }
                },
                series: [
                    {
                        name: 'agent',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: this.convertData(this.nowData),
                        encode: {
                            value: 2
                        },
                        symbolSize: 5,
                        label: {
                            formatter: '{b}',
                            position: 'right'
                        },
                        itemStyle: {
                            color: (e) => {
                                return e.value[2]
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    },
                ],
            }
            // 使用刚指定的配置项和数据显示图表。
            option && myChart.setOption(option);
            if (!this.initPloygon) {
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
                tanwei.features.forEach(feature => {
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

                this.initPloygon = true;
            }
        },
    },
};
</script>

<style scoped lang="less">
/deep/ .anchorBL {
    display: none;
}
</style>