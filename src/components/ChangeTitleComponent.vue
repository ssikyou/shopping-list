<template>
  <div>
    <em>Change the title of your shopping list here</em>
    <input v-bind:value="title" v-on:input="onInput" />
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  props: ['title'],
  methods: {
    onInput: function(event) {
      // console.log(event.target.value);
      this.$emit('changeTitle', event.target.value)
    }
  }
}

</script>
<style scoped>
</style>
