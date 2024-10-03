<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div id="container">
    <el-row id="title">
      <div id="leftTitle">
        <span class="titleButton" @click="changeView('summary')">总览</span>
        <span class="titleButton" @click="changeView('para')">参数设定</span>
        <span class="titleButton" @click="changeView('result')">模拟结果</span>
        <span class="titleButton" style="text-decoration: underline;" @click="changeView('compare')">推演对比</span>
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
    <!-- 防空措施推演 -->
    <div style="height: 60vh; text-align: center;">
      <div class="subtitle">
        <span>防空措施推演</span>
      </div>
      <el-form size="small" :inline="true" label-width="100px">
        <el-form-item label="选择参数:" prop="paraType">
          <el-select v-model="paraType" placeholder="请选择" style="width: 150px">
            <el-option v-for="item in paraTypeList" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设定最小值:" prop="minValue">
          <el-input v-model="minValue" clearable style="width: 150px;"></el-input>
        </el-form-item>
        <el-form-item label="设定最大值:" prop="maxValue">
          <el-input v-model="maxValue" clearable style="width: 150px;"></el-input>
        </el-form-item>
        <el-form-item label="设定节点数量:" prop="nodeValue">
          <el-input v-model="nodeValue" clearable style="width: 150px;"></el-input>
        </el-form-item>
      </el-form>
      <el-row :gutter="30" style="height: 70%;">
        <el-col :span="4"></el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <el-image :src="require('@/assets/exampleImg/病例数量.png')" :fit="fill"></el-image>
            <div class="subtitle">
              <span>病例数量</span>
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <el-image :src="require('@/assets/exampleImg/传播速率.png')" :fit="fill"></el-image>
            <div class="subtitle">
              <span>传播速率</span>
            </div>
          </dv-border-box-12>
        </el-col>
      </el-row>
    </div>
    <!-- 重点对比 -->
    <div style="height: 65vh;">
      <div class="subtitle">
        <span>重点对比</span>
      </div>
      <el-row :gutter="30" style="height: 70%;">
        <el-col :span="4"></el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <el-image :src="require('@/assets/exampleImg/result_500.png')" :fit="fill"></el-image>
            <div class="subtitle">
              <span>500人模拟结果</span>
              <el-select v-model="resultType1" placeholder="请选择操作">
                <el-option v-for="item in resultTypeList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="8">
          <dv-border-box-12>
            <el-image :src="require('@/assets/exampleImg/result_5000.png')" :fit="fill"></el-image>
            <div class="subtitle">
              <span>5000人模拟结果</span>
              <el-select v-model="resultType2" placeholder="请选择操作">
                <el-option v-for="item in resultTypeList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </dv-border-box-12>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeValue: "instance",
      optionValue: "",
      minValue: 500,
      maxValue: 5000,
      nodeValue: 10,
      resultType1: "region",
      resultType2: "region",
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
      resultTypeList: [{
        value: 'region',
        label: '区域风险图'
      }, {
        value: 'chain',
        label: '传播链路图'
      }, {
        value: 'instance',
        label: '重点病例演示图'
      }, {
        value: 'time',
        label: '重点时段演示图'
      }]
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
  margin-left: 20px;
  margin-right: 20px;
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
  height: 30px;
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