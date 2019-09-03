<template>
  <div id="app">
    <!--router-view显示的是当前路由地址所对应的内容-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
