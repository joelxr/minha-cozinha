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
  margin-top: 60px;
}
</style>
