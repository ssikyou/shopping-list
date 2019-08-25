<template>
  <ul>
    <item-component v-for="(i, index) in itemsc" :item="i" :key="index">
    </item-component>
  </ul>
</template>
<script>
import ItemComponent from './ItemComponent'

export default {
  components: {
    ItemComponent
  },
  props: ['itemsc']
}

</script>
<style scoped>
</style>
