<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-main style="background-color: #fff;">
        <tab></tab>
        <router-view></router-view>
      </el-main>
    </el-col>
  </el-row>
</template>

<script>
  import Tab from '@/components/base/Tab/Tab'

  export default {
    data () {
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
