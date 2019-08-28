<template>
  <ul>
    <item-component v-for="(i, index) in itemsc" :item="i" :key="index" :id="id">
    </item-component>
  </ul>
</template>
<script>
import ItemComponent from './ItemComponent'

/* eslint-disable */
export default {
  components: {
    ItemComponent
  },
  props: ['itemsc', 'id']
}

</script>
<style scoped>
</style>
