<template>
  <div id="app">
    <el-container>
      <el-header>
        中棋监控平台
        <div class="loginOut" v-if="user">
          <span>管理员：{{user.username}}</span>
          <a href="javascript:void(0)">退出</a>
        </div>
      </el-header>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style lang="scss">
  html {
    min-height: 100%;
  }

  body {
    height: 100%;
  }

  .el-header {
    background-color: rgb(48, 65, 86);
    color: #333;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    line-height: 60px;
    padding-left: 80px;
    position: relative;
  }

  .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
    text-align: center;
  }

  .el-table .cell {
    line-height: 24px;
  }

  .loginOut {
    position: absolute;
    right: 100px;
    top: 0;
    bottom: 0;
    line-height: 60px;
    font-size: 20px;
    font-weight: 400;
    a {
      margin-left: 30px;
      color: #fff;
      font-size: 16px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
