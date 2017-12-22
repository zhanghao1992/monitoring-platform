<template>
  <div id="app">
    <el-container>
      <el-header>中棋监控平台</el-header>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import "assets/css/reset.css";

  html {
    min-height: 100%;
  }

  body {
    height: 100%;
  }

  .el-header {
    background-color: #409EFF;
    color: #333;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    line-height: 60px;
  }

  .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
    text-align: center;
  }

  .el-table .cell {
    line-height: 24px;
  }
</style>
