<template>
  <div id="app">
    <menu-nav />
      <router-view/>
  </div>
</template>

<script>
import MenuNav from '@/components/MenuNav'

export default  {
  components: { MenuNav }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
