<template>
    <div class="layout-menus">
      <el-menu
        default-active="/Home"
        class="el-menu-vertical-demo"
        background-color="#5a9cfd"
        text-color="#fff"
        active-text-color="#000"
        :router="true"
      >
        <Child v-for="(menu,index) in menus" :key="index" :menu="menu"/>
      </el-menu>
    </div>
  </template>
  <script lang="ts" setup>
  import Child from './child.vue'
  import {menus} from '@/router/menus'
  </script>
  <style lang="scss">
  .layout-menus {
    
    .is-active {
      background-color: #fff;
    }
  }
  </style>
  