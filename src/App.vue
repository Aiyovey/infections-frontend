<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 添加一些全局样式 */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  //background-color: black;
  background:url("assets/exampleImg/BGI-2.png") no-repeat center center fixed;
  background-size:cover;
}
</style>