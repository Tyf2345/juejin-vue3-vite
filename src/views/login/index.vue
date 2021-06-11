<template>
  <el-form
    status-icon
    label-width="100px"
    class="login-form"
  >
    <el-form-item label="用户名">
      <el-input
        v-model="form.name"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        type="password"
        v-model="form.pwd"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="block" type="primary" @click="submitForm"
        >提交</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
interface Form {
  name: string,
  pwd: string
}
const form = reactive<Form>({
  name: "",
  pwd: ""
});
const router = useRouter()
const route = useRoute()
function submitForm() {
  const { name, pwd } = form
  if(name && pwd) {
    // 定时器模拟登录
  setTimeout(()=>{
      // 模拟信息存储到本地
      sessionStorage.setItem("user",JSON.stringify({name,pwd}))
      // 跳转到上一次访问的页面 如果用户直接进入登录页面，那么就跳转到 '/'首页
      const path: string= (route.query as {url?: string}).url || "/"
      router.push(path)
  })
  }else {
    ElMessage.error("用户名密码不能🙅‍♀️为空")
  }
}
</script>
<style lang="less">
.login-form{
width: 500px;
margin: 200px auto;
}
.block{
  width:100%
}
</style>
