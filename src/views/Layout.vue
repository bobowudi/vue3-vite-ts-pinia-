<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
              <Menus/>
          </el-aside>
          <el-main>
              <!-- <div class="location">首页</div> -->
              <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  <script lang="ts" setup>
  import Menus from '@/components/menus/index.vue'
  </script>
  <style lang="scss">
  .common-layout{
      height: 100vh;
      width: 100vw;
      .el-header{
          padding: 0;
          box-sizing: border-box;
          background-color: #1e2227;
          color: #fff;
          height: 100px;
      }
      .el-aside{
          background-color: #4f9dfe; 
          height: calc(100vh - 100px);
      }
      .el-main{
          background-color: #edeff6;
      }
  }
  </style>
  