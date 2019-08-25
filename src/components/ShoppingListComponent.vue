<template>
  <div>
    <h2>{{ title }}</h2>
    <add-item-component v-on:on-add-item="onAddItem"></add-item-component>
    <items-component :itemsc="items"></items-component>
    <div class="footer">
      <hr />
      <change-title-component v-model="title"></change-title-component>
    </div>
  </div>
</template>
<script>
import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'
import ChangeTitleComponent from './ChangeTitleComponent'

export default {
  /* eslint-disable */
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
  },
  props: ['items', 'title'],
  // data() {
  //   return {
  //     items: [{ text: 'Bananas', checked: true },
  //       { text: 'Apples', checked: false }
  //     ],
  //     title: 'My Shopping List',
  //   }
  // },
  methods: {
    onAddItem: function(item) {
      console.log(item);
      this.items.push(item);
    }
  }
}

</script>
<style>
.footer {
  font-size: 0.7em;
  margin-top: 20vh;
}

</style>
