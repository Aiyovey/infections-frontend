<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div id="container">
    <el-row id="title">
      <div id="leftTitle">
        <span class="titleButton" @click="changeView('summary')">总览</span>
        <span class="titleButton" @click="changeView('para')">参数设定</span>
        <span class="titleButton" style="text-decoration: underline;" @click="changeView('result')">模拟结果</span>
        <span class="titleButton" @click="changeView('compare')">推演对比</span>
      </div>
      <div id="midTitle">
        <span style="font-size:2rem;">重点场所传染病传播模式研究</span>
      </div>
      <div id="rightTitle">
        <el-select v-model="typeValue" placeholder="请选择">
          <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="optionValue" placeholder="请选择操作">
          <el-option v-for="item in optionList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-row>
    <!-- 整体结果 -->
    <el-card id="result">
      <div class="subtitle">
        <span>模拟结果</span>
      </div>
      <!-- 第一行 -->
      <el-row :gutter="20" style="height: 43vh;">
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/regionRisk.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>区域风险</span>
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/spreadChain.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>传播链路</span>
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/caseTrend.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>病例趋势</span>
            </div>
          </dv-border-box-12>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="20" style="height: 43vh;">
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/密接人群趋势.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>密接人群趋势</span>
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/传播树节点数量分布.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>传播树节点数量分布</span>
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/传播树深度分布.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>传播树深度分布</span>
            </div>
          </dv-border-box-12>
        </el-col>
      </el-row>
    </el-card>
    <!-- 重点结果 -->
    <el-card id="result">
      <div class="subtitle">
        <span>模拟结果</span>
      </div>
      <!-- 第一行 -->
      <el-row :gutter="20" style="height: 43vh;">
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/importantInstance.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>重点病例演示</span>
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <!-- <regionRisk /> -->
            <el-image :src="require('@/assets/exampleImg/importantTime.png')" :fit="fill"></el-image>
            <div class="imgTitle">
              <span>重点时段演示</span>
            </div>
          </dv-border-box-12>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeValue: "instance",
      optionValue: "",
      typeList: [{
        value: 'instance',
        label: '即时计算'
      }, {
        value: 'history',
        label: '历史结果'
      }],
      optionList: [{
        value: 'start',
        label: '开始'
      }, {
        value: 'pause',
        label: '暂停'
      }, {
        value: 'step',
        label: '逐步演示'
      }, {
        value: 'reset',
        label: '重置'
      }],
    };
  },
  components: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    changeView(e) {
      if (e === 'summary') {
        e = ''
      }
      this.$router.push({ path: "/" + e }).catch(() => { });
    }
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  height: 100%;
  transition: all .5s;
}

.el-card {
  min-width: 100%;
  height: 100%;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vh;
  transition: all .5s;
}

#container {
  margin: 5px;
}

#title {
  margin-top: 0.2rem;
  display: flex;
  flex-direction: row;
  background-color: rgb(2, 167, 240);
  color: white;
  height: 70px;
  align-items: center;

  #leftTitle {
    width: 33%;
    text-align: left;
  }

  #midTitle {
    width: 33%;
    text-align: center;
  }

  #rightTitle {
    width: 33%;
    text-align: right;
  }
}

.titleButton {
  margin-left: 5px;
  margin-right: 5px;
  color: white;
  font-size: large;
}

.el-select {
  width: 130px;
  margin-left: 20px;
}

.subtitle {
  height: 50px;
  font-size: large;
  align-items: center;
  text-align: center;
}

.dv-border-box-12 {
  width: 100%;
  height: 100%;
  text-align: center;

  .el-image {
    margin-top: 1vh;
    width: 80%;
    height: 35vh;
  }

  .imgTitle {
    height: 10%;
    font-size: 1em;
  }
}
</style>