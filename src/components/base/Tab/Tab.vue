<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
           style="width: 100%;">
    <el-menu-item index="1">
      <router-link tag="div" :to="{ path: 'panel' }" active-class="tab-item-active">监控看板</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link tag="div" :to="{ path: 'alerm-item' }" active-class="tab-item-active">报警项列表</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link tag="div" :to="{ path: 'projects' }" active-class="tab-item-active">项目列表</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link tag="div" :to="{ path: 'nbaotifiers' }" active-class="tab-item-active">通知人列表</router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link tag="div" :to="{ path: 'jhonhurisdiction' }" active-class="tab-item-active">权限列表</router-link>
    </el-menu-item>
    <el-menu-item index="6">
      <router-link tag="div" :to="{ path: 'macro' }" active-class="tab-item-active">宏限列表</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect () {}
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
