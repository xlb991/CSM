<template>
  <div class="loginBox">
    <p>
      <el-form
        class="el-form"
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-button type="primary" class="btn" round @click="loggingMethod"
          >主要按钮</el-button
        >
      </el-form>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    async loggingMethod() {
      const res = await this.$http.post(
        "admin/login/login",
        this.formLabelAlign
      );
      console.log(res);
      // 登录成功
      if (res.data.code == "0") {
        console.log("成功");
        this.$message.success("登录成功！");
        // 目的：为了防止用户在没有登录的情况下，通过url标示进入网站；所以用户登录成功进入首页时再次判断它的标示
        // 通过localstrage
        localStorage.setItem("uerId", res.data.data.user_id);
        // 通过router对象的链式导航
        this.$router.push({ path: "home" });
      } else if (res.data.code == "10003") {
        console.log("不成功");
        // 登录失败
        this.$message.error("登录失败！");
      }
    }
  }
};
</script>
<style lang="scss">
.loginBox {
  height: 100%;
  background-color: #293442;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    background-color: aliceblue;
    padding: 100px;
    border-radius: 15%;
    .btn {
      width: 100%;
    }
  }
}
</style>
