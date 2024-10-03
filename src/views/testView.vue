<template>
    <div>
        <div id="market" style="width: 100vw; height: 100vh; overflow: hidden;">
        </div>
        <el-button @click="handleStart">start</el-button>
        <el-button @click="handleStop">stop</el-button> -->
    </div>
</template>

<script>
import mapData from "@/data/yuegezhuang.json"
import mapStyle from "@/data/mapStyle.json"

import { listAgents, getMaxStep } from "@/api/agent";

var nowStep = 0;

export default {
    data() {
        return {
            timer: null,
            allData: [],
            nowData: [],
            stepParams: {
                startStep: null,
                endStep: null
            }
        };
    },
    created() {
    },
    mounted() {
        // this.getAgents(this.stepParams);
        // getMaxStep().then(res => {
        //     console.log(res.data.data)
        // })
        this.drawChart()
    },
    methods: {
        handleStart() {
            //步数参数 预处理
            if (this.stepParams.startStep) {
                nowStep = this.stepParams.startStep
            }
            else {
                nowStep = 0
                this.stepParams.startStep = 0
            }
            if (!this.stepParams.endStep) {
                getMaxStep().then(res => {
                    this.stepParams.endStep = res.data.data
                })
            }

            console.log("child start")
            this.getAgents(this.stepParams)

            this.timer = setInterval(() => {
                // this.update()
                setTimeout(() => {
                    this.update()
                }, 0);
            }, 1000);
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
            this.nowData = this.allData.filter((item) => item.step === nowStep)
            this.drawChart();
        },

        getAgents(stepParams) {
            listAgents(stepParams).then(response => {
                console.log("res:", response.data.data)
                this.allData = response.data.data
                this.nowData = this.allData.filter((item) => item.step === nowStep)
                this.drawChart();
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
        },
    },
};
</script>

<style scoped lang="less">
/deep/ .anchorBL {
    display: none;
}
</style>