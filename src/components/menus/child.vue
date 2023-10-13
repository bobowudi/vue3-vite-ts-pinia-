<template>
  <el-sub-menu
    v-if="menu.children && menu.children.length !== 0"
    :index="menu.path"
  >
    <template #title v-if="menu.icon">
        <SvgIcon :name="menu.icon" class="SVG"></SvgIcon>
      <span>{{ menu.name }}</span>
    </template>
    <template #title v-else>{{ menu.name }}</template>
    <template v-for="_menu in menu.children!"
      ><MenuChild :menu="_menu"
    /></template>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <SvgIcon v-if="menu.icon" :name="menu.icon" class="SVG"></SvgIcon>
    <span>{{ menu.name }}</span>
  </el-menu-item>
</template>
<script lang="ts">
export default {
  name: "MenuChild",
};
</script>
<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon.vue";
defineProps<{
  menu: any;
}>();
</script>

<style lang="scss">
.SVG{
    width: 16px;
    height: 16px;
    margin-right: 8px;
}
</style>

