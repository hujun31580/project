<template>
  <div id="app">
    <el-container style="height: 600px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['2']" router>
       <el-menu-item index="/new">新建广告</el-menu-item>
       <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页概览</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-printer"></i>广告管理</template>
          <el-menu-item index="/plan">广告计划</el-menu-item>
          <el-menu-item index="/unit">广告单元</el-menu-item>
          <el-menu-item index="/creativity">广告创意</el-menu-item>
      </el-submenu>
        <el-menu-item index="/data">
        <i class="el-icon-location"></i>
        <span slot="title">数据中心</span>
      </el-menu-item>
      <el-menu-item index="/tool">
        <i class="el-icon-setting"></i>
        <span slot="title">工具箱</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
    <el-main class='homemain'>
           <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{$store.state.name}}</span>
    </el-header>
        <router-view></router-view>
    </el-main>
</el-container>

  </div>
</template>
<script>
export default {};
</script>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
   overflow: hidden;
}
.el-menu {
  border-right: none;
  width: 100%;
}
* {
  box-sizing: border-box;
}
#app {
  display: flex;
 
}
.nav {
  width: 240px;
  height: 100%;
  background: #022050;
}
.content {
  flex: 1;
}
.nav > div {
  height: 54px;
  line-height: 54px;
  padding-left: 40px;
  color: #fff;
}
.el-main{
  overflow: hidden;
}
</style>
