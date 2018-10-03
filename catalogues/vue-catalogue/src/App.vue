<template>
  <div id="app">
    <Header :title="title"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    title: 'Catalogue'
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
