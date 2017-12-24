<template>
  <el-main>
    <el-row>
      <el-col :span="4">
        <tab></tab>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  import Tab from '@/components/base/Tab/Tab'

  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      Tab
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
