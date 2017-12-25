<template>
  <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"-->
  <!--style="width: 100%;">-->
  <!--<el-menu-item index="1">-->
  <!--<router-link tag="div" :to="{ path: 'panel' }" active-class="tab-item-active">监控看板</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="2">-->
  <!--<router-link tag="div" :to="{ path: 'alerm-item' }" active-class="tab-item-active">报警项列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="3">-->
  <!--<router-link tag="div" :to="{ path: 'projects' }" active-class="tab-item-active">项目列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="4">-->
  <!--<router-link tag="div" :to="{ path: 'nbaotifiers' }" active-class="tab-item-active">通知人列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="5">-->
  <!--<router-link tag="div" :to="{ path: 'jhonhurisdiction' }" active-class="tab-item-active">权限列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="6">-->
  <!--<router-link tag="div" :to="{ path: 'macro' }" active-class="tab-item-active">宏限列表</router-link>-->
  <!--</el-menu-item>-->
  <!--</el-menu>-->
  <el-main>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
      active-text-color="rgb(64, 158, 255)!important">
      <el-menu-item index="1">
        <router-link tag="div" :to="{ path: '/index/panel' }" active-class="tab-item-active">
          <i class="el-icon-location"></i>
          <span>监控看板</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link tag="div" :to="{ path: '/index/alerm-item' }" active-class="tab-item-active">
          <i class="el-icon-warning"></i>
          <span>报警项列表</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link tag="div" :to="{ path: '/index/projects' }" active-class="tab-item-active">
          <i class="iconfont icon-Fill"></i>
          <span>项目列表</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link tag="div" :to="{ path: '/index/notifiers' }" active-class="tab-item-active">
          <i class="iconfont icon-tongzhilianxiren"></i>
          <span>通知人列表</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link tag="div" :to="{ path: '/index/jhonhurisdiction' }" active-class="tab-item-active">
          <i class="iconfont icon-permission"></i>
          <span>权限列表</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link tag="div" :to="{ path: 'macro' }" active-class="tab-item-active">
          <i class="iconfont icon-weibiaoti-"></i>
          <span>宏限列表</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-main>
</template>

<script>
  const tabMap = [
    {
      url: '/index/panel',
      index: 1
    },
    {
      url: '/index/alerm-item',
      index: 2
    },
    {
      url: '/index/projects',
      index: 3
    },
    {
      url: '/index/panel',
      index: 4
    },
    {
      url: '/index/notifiers',
      index: 5
    },
    {
      url: '/index/macro',
      index: 6
    }
  ]
  export default {
    data() {
      return {
        activeIndex: '1'
      }
    },
    mounted() {
      console.log(tabMap)
    },
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../assets/css/iconfont.css";

  .el-menu-item:hover {
    background-color: rgb(38, 52, 69) !important;
  }
</style>
