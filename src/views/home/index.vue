<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="layout-head pdlr28">{{ userName || "--" }}</div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="menu-wrap"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template #title>分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template #title>选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>导航二</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <template #title>导航三</template>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>导航四</template>
          </el-menu-item>
          <el-submenu index="5">
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template #title>分组一</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="5-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="pdl28">
        <el-breadcrumb separator="/" class="pdt28 pdb28">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="com">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script  lang="ts" setup>
import { reactive } from "vue";
interface User {
  name: string;
  pwd: string;
}

interface Table {
  date: string;
  name: string;
  address: string;
}

const user: string | null = sessionStorage.getItem("user");
const userName: string | null = user && (JSON.parse(user) as User).name;
const tableData = reactive<Table[]>([
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
]);
</script>
<style lang="less" scoped>
.layout-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
  background-color: #99a9bf;
}
.text-center {
  text-align: center;
}
.menu-wrap {
  height: calc(100vh - 56px);
}
.pdlr28 {
  padding-left: 28px;
  padding-right: 28px;
}
.pdt28 {
  padding-top: 28px;
}

.pdr28 {
  padding-right: 28px;
}
.pdb28 {
  padding-bottom: 28px;
}
.pdl28 {
  padding-left: 28px;
}
</style>
