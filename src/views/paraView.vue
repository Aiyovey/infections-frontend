<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div id="container">
    <el-row id="title">
      <div id="leftTitle">
        <span class="titleButton" @click="changeView('summary')">总览</span>
        <span class="titleButton" style="text-decoration: underline;" @click="changeView('para')">参数设定</span>
        <span class="titleButton" @click="changeView('result')">模拟结果</span>
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
    <el-row :gutter="10" style="height: 650px;">
      <el-col :span="6">
        <el-card>
          <div class="subtitle">
            <span>静态环境</span>
          </div>
          <div style="text-align: center;">
            <el-image style="width: 90%; height: 90%" :src="require('@/assets/exampleImg/蔬菜市场.png')"
              :fit="fill"></el-image>
          </div>
          <div class="tip">
            <span>名称：蔬菜市场-3米宽度走廊</span>
          </div>
          <div class="tip">
            <span>文件地址：xxxxx</span>
          </div>
          <div class="tip">
            <span>备注：摊位xx个，面积xx平方米</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card id="peoplePara">
          <div class="subtitle">
            <span>人群行为</span>
          </div>
          <div class="para_slider">
            <span class="demonstration">总时长</span>
            <el-slider v-model="total_time" show-input></el-slider>
          </div>
          <div class="para_slider">
            <span class="demonstration">总人数</span>
            <el-slider v-model="total_popularity" show-input></el-slider>
          </div>

          <div class="para_slider">
            <span class="demonstration">常客比例</span>
            <el-slider v-model="customer_rate" show-input></el-slider>
          </div>
          <div class="para_slider">
            <span class="demonstration">平/假日人数比例</span>
            <el-slider v-model="holiday_rate" show-input></el-slider>
          </div>
          <div style="text-align: center;">
            <el-image style="width: 100%; height: 100%" :src="require('@/assets/exampleImg/人群分布.png')"
              :fit="fill"></el-image>
          </div>
          <div style="text-align: center; font-size: 1em;">
            <span>各时段人群分布</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card id="result">
          <div class="subtitle">
            <span>病毒扩散</span>
          </div>
          <div class="para_slider">
            <span class="demonstration">初始感染率</span>
            <el-slider v-model="init_infect_rate" show-input></el-slider>
          </div>
          <div class="para_slider">
            <span class="demonstration">暴露距离</span>
            <el-slider v-model="dispose_distance" show-input></el-slider>
          </div>
          <div class="para_slider">
            <span class="demonstration">病毒释放量均值</span>
            <el-slider v-model="virus_dispose" show-input></el-slider>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card id="compare">
          <div class="subtitle">
            <span>状态判别</span>
          </div>
          <div class="para_slider">
            <span class="demonstration">青少年抵抗力均值</span>
            <el-slider v-model="anti_young" show-input></el-slider>
          </div>
          <div class="para_slider">
            <span class="demonstration">中年抵抗力均值</span>
            <el-slider v-model="anti_mid" show-input></el-slider>
          </div>
          <div class="para_slider">
            <span class="demonstration">老年抵抗力均值</span>
            <el-slider v-model="anti_old" show-input></el-slider>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total_time: 0,
      total_popularity: 50,
      init_infect_rate: 36,
      dispose_distance: 48,
      customer_rate: 42,
      holiday_rate: 23,
      virus_dispose: 16,
      anti_young: 42,
      anti_old: 23,
      anti_mid: 16,
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
  margin-left: 10px;
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
  height: 50px;
  font-size: large;
  align-items: center;
  text-align: center;
}

.tip {
  margin-left: 1vw;
  margin-top: 1vh;
}
</style>