<template>
  <el-container>
    <el-header class="elHeader">Header</el-header>
    <el-container class="elContainer">
      <el-aside width="200px" class="elAside">Aside</el-aside>
      <el-container>
        <el-main class="elMain">Main</el-main>
        <el-footer class="elFooter">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>
<style lang="scss">
.elHeader {
  background-color: lightgreen;
}
.elContainer {
  height: 100%;
  background-color: #ffffff;

  .elAside {
    height: 850px;
    background-color: lightblue;
  }
  .elMain {
    background-color: lightpink;
  }
  .elFooter {
    background-color: lightsalmon;
  }
}
</style>
