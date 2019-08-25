<template>
  <div class="input-group">
    <input v-model="newItem" v-on:keyup.enter="addItem" placeholder="add shopping list item" type="text" class="form-control">
    <span class="input-group-btn">
      <button v-on:click="addItem" class="btn btn-default" type="button">Add!</button>
    </span>
  </div>
</template>
<script>
export default {
  /* eslint-disable */

  data: function() {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem: function() {
      var text;
      text = this.newItem.trim();
      if (text) {
        console.log(text);
        this.$emit('on-add-item', { text: text, checked: false });
        this.newItem = '';
      }
    }
  }
}

</script>
<style scoped>
</style>
