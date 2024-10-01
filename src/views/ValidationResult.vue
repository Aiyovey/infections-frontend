<template>
  <div class="validation-result">
    <el-card>
      <div slot="header" class="header">验证结果</div>
      <el-table :data="results">
        <el-table-column prop="item" label="待验证信息"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.state == 1" type="success">正确</el-tag>
            <el-tag v-if="scope.row.state == -1" type="info">无</el-tag>
            <el-tag v-if="scope.row.state == 0" type="danger">错误</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-button type="primary" @click="goHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [
      ],
      form :{}
    };
  },
  created() {
    if (this.$route.params.result) {
      this.results = this.$route.params.result;
      this.form = this.$route.params.form;
    } else {
      this.$router.push({ name: 'UserInfo' });
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'UserInfo',params: { form : this.form } });
    },
  },
};
</script>

<style scoped>
.validation-result {
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}

.el-button {
  width: 100%;
  margin-top: 20px;
}
</style>