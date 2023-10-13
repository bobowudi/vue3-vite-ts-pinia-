<template>
  <div class="Home">
    <SvgIcon name="1" class="SVG"></SvgIcon>
    <span>Home</span>
    <el-button type="primary">Primary</el-button>
  </div>
</template>
<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { useStore } from "@/store/user";
const user = useStore();
user.setUser({
  userId: "001",
  userName: "张三",
  phone: "15678349878",
});
console.log("user", user);
</script>
<style lang="scss"></style>
