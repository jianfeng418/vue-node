<template>
  <div id="app">
    <router-view name='main'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height:100%
}
html{
    height:100%;
    overflow:hidden
}
body{
    margin:0px;
    height:100%;
}
</style>
