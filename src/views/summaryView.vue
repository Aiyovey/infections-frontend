<template>
  <div id="container">
    <el-row id="topDec">
      <div id="topLeft">
        <dv-decoration-10 id="d10l" />
        <div id="naviButton">
          <div class="titleButton" style="text-decoration: underline;" @click="changeView('summary')">总览</div>
          <span class="titleButton" @click="changeView('para')">参数设定</span>
          <span class="titleButton" @click="changeView('result')">模拟结果</span>
          <span class="titleButton" @click="changeView('compare')">推演对比</span>
        </div>
      </div>

      <div id="topMid">
        <dv-decoration-8 :color="['#568aea', '#000000']" />
        <div class="mainTitle">
          <div class="title-text">
            岳各庄批发市场传染病研究
          </div>
          <dv-decoration-6 :reverse="true" :color="['#50e3c2', '#67a1e5']" />
        </div>
        <dv-decoration-8 :reverse="true" :color="['#568aea', '#000000']" />
      </div>

      <div id="topRight">
        <dv-decoration-10 id="d10r" />
        <div id="expButton">
          <span>当前实验</span>
          <el-select v-model="currentExp" placeholder="请选择实验">
            <el-option v-for="item in experimentList" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </el-row>

    <el-row id="chartsContainer">
      <el-col :span="6" id="colLeft">

        <dv-border-box-11 title="参数设定" id="paraSet">
          <el-table :data="paraData" stripe height="96%">
            <el-table-column prop="name" align="center" label="参数名称"  />
            <el-table-column prop="value" align="center" label="参数值"  />
            <!-- <el-table-column prop="range" align="center" label="取值范围" /> -->
          </el-table>
        </dv-border-box-11>

        <dv-border-box-11 title="推演对比" id="compare">
          <trendCompo class="trendCompo" />
        </dv-border-box-11>

      </el-col>

      <el-col :span="12" id="colMid">
        <dv-border-box-12>
          <importantInstance class="compoViews" />
        </dv-border-box-12>
        <div id="midButtons">
          <span class="midButton">开始</span>
          <span class="midButton">下一步</span>
          <span class="midButton">重置</span>
        </div>
        <div id="processContainer">
          <processCompo />
        </div>
      </el-col>

      <el-col :span="6" id="colRight">
        <dv-border-box-11 title="模拟结果" id="resultContainer">
          <el-row id="statisticRow">
            <el-col :span="12">
              <el-statistic title="感染人数" :value="11111" :value-style="{ color: 'rgb(236,197,0)', fontSize: '36px' }">
                <template #suffix>
                  <span style="color: rgb(236,197,0); font-size: small;">人</span>
                </template>
              </el-statistic>
            </el-col>
            <el-col :span="12">
              <el-statistic title="感染速率" :value="11111" :value-style="{ color: 'rgb(236,197,0)', fontSize: '36px' }">
                <template #suffix>
                  <span style="color: rgb(236,197,0);">人/天</span>
                </template>
              </el-statistic>
            </el-col>
          </el-row>

          <dv-decoration-2 />
          <div class="analysisCharts">
            <spreadChain />
          </div>
          <dv-decoration-2 />
          <div class="analysisCharts">
            <analysisCompo1 />
          </div>
          <dv-decoration-2 />
          <div class="analysisCharts">
            <analysisCompo2 />
          </div>
        </dv-border-box-11>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import importantInstance from '@/components/importantInstance.vue';
import trendCompo from '@/components/trendCompo.vue';
import processCompo from '@/components/processCompo.vue';
import spreadChain from '@/components/spreadChain.vue';
import analysisCompo1 from '@/components/analysisCompo1.vue';
import analysisCompo2 from '@/components/analysisCompo2.vue';

import { listParameters } from "@/api/parameters";

export default {
  data() {
    return {
      currentExp: '1',
      experimentList: [{
        value: '1',
        label: '实验1'
      }, {
        value: '2',
        label: '实验2'
      }],
      paraData: [
        // {
        //   name: "工作日人流量",
        //   value: "1000",
        //   range: "[500,2000]",
        // },
        // {
        //   name: "周末人流量",
        //   value: "1500",
        //   range: "[1000,3000]",
        // },
        // {
        //   name: "暴露距离",
        //   value: "6",
        //   range: "[0,20]",
        // },
        // {
        //   name: "初始感染比例",
        //   value: "15%",
        //   range: "[0,100%]",
        // },
        // {
        //   name: "初始感染率",
        //   value: "15%",
        //   range: "[0,100%]",
        // },
        // {
        //   name: "模拟天数",
        //   value: "7",
        //   range: "[1,30]",
        // },
        // {
        //   name: "代谢病毒比例",
        //   value: "0.1%",
        //   range: "[0,100%]",
        // },
        // {
        //   name: "病毒释放比例",
        //   value: "5%",
        //   range: "[0,100%]",
        // },
      ]
    };
  },
  components: {
    importantInstance,
    trendCompo,
    processCompo,
    spreadChain,
    analysisCompo1,
    analysisCompo2
  },
  created() {
  },
  mounted() {
    this.getPara()
  },
  methods: {
    changeView(e) {
      if (e === 'summary') {
        e = ''
      }
      this.$router.push({ path: "/" + e }).catch(() => { });
    },

    getPara() {
      listParameters().then(response => {
        console.log(response.data)
        this.paraData = response.data.data
      })
    },

  },
};
</script>

<style>
#container {
  #topDec {
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: row;
    margin-bottom: -1vh;

    #topLeft {
      width: 25%;
      height: 100%;

      #d10l {
        width: 100%;
        height: 10%;
      }

      #naviButton {
        width: 100%;
        height: 50%;
        align-items: center;
        text-align: left;
        display: flex;
        flex-direction: row;

        .titleButton {
          margin-left: 1vw;
          margin-right: 1vw;
          color: white;
          font-size: 1em;
        }
      }
    }

    #topMid {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: row;

      .dv-decoration-8 {
        height: 100%;
        width: 25%;
        margin-top: 2px;
      }

      .mainTitle {
        height: 100%;
        width: 50%;

        .title-text {
          height: 50%;
          width: 100%;
          color: white;
          align-items: center;
          text-align: center;
          font-size: 1.5em;
        }

        .dv-decoration-6 {
          height: 20%;
        }
      }
    }

    #topRight {
      width: 25%;
      height: 100%;

      #d10r {
        width: 100%;
        height: 10%;
        transform: rotate(180deg);
      }

      #expButton {
        width: 100%;
        height: 90%;
        align-items: center;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    }

  }

  #chartsContainer {
    width: 100%;
    height: 88vh;

    #colLeft {
      /* border: solid wheat; */
      height: 100%;
      padding: 2px;

      #paraSet {
        width: 100%;
        height: 64%;
        padding-top: 60px;
        margin-top: -5px;

        .el-table {
          /* height: 95%; */
          width: 90%;
          margin-left: 5%;
        }
      }

      #compare {
        margin-top: -1%;
        width: 100%;
        height: 33%;
      }
    }

    #colMid {
      height: 100%;
      padding: 2px;
      /* border: solid wheat; */

      .dv-border-box-12 {
        width: 90%;
        height: 65%;
        padding: 2%;
        margin-left: 3%;
      }

      #midButtons {
        width: 100%;
        height: 5%;
        display: flex;
        flex-direction: row;
        color: white;
        align-items: center;
        justify-content: right;

        .midButton {
          margin-left: 1vw;
          margin-right: 1vw;
          color: white;
          font-size: large;
        }
      }

      #processContainer {
        width: 100%;
        height: 30%;
      }
    }

    #colRight {
      height: 100%;
      padding: 2px;

      #resultContainer {
        width: 100%;
        height: 96%;
        padding-top: 60px;
        margin-top: -5px;

        #statisticRow {
          height: 8vh;
          align-items: center;
          /* border: solid white; */

          .el-statistic {
            height: 100%;
            /* border: solid white; */
          }
        }

        .dv-decoration-2 {
          width: 90%;
          height: 1vh;
          margin: 0 auto;
        }

        .analysisCharts {
          width: 90%;
          height: 22vh;
          margin: 0 auto;
          /* border: solid white; */
        }
      }
    }
  }

}

/* striped先开启斑马纹属性，这里是修改斑马纹颜色 */
/* .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #1e116d;
} */

/* 非斑马纹颜色 */
/* .el-table tr {
  background: #15085e;
} */

/* 斑马纹颜色定义完之后会显示自带的边框颜色，这里要重置 */
/* .el-table td,
.building-top .el-table th.is-leaf {
  border: none;
  color: white;
} */

/* 这里是滑过斑马纹滑过时的颜色 */
/* .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: #1e116d;
} */
</style>

<style scoped lang="less">
/deep/ .title {
  color: rgb(236, 197, 0);
}
</style>