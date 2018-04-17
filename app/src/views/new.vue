<template>
  <div id="app">
    <el-container style="height: 600px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['2']" router>
    
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-printer"></i>新建广告计划</template>
          <el-menu-item index="/new/select">选择计划</el-menu-item>
      </el-submenu>
        <el-submenu index="2">
        <template slot="title"><i class="el-icon-printer"></i>广告单元</template>
          <el-menu-item index="/new/unitl">基本信息</el-menu-item>
          <el-menu-item index="/new/unitl">定向</el-menu-item>
          <el-menu-item index="/new/unitl">广告位</el-menu-item>
          <el-menu-item index="/new/unitl">出价</el-menu-item>
      </el-submenu>
        <el-submenu index="2">
        <template slot="title"><i class="el-icon-printer"></i>广告创意</template>
          <el-menu-item index="/new/chuang">落地页</el-menu-item>
          <el-menu-item index="/new/chuang">上传创意</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main class='homemain'>
        <router-view></router-view>
    </el-main>
</el-container>

  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>