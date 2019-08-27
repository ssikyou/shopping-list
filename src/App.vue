<template>
  <div id="app" class="container">
    <!-- <h2>{{ title }}</h2>
    <add-item-component v-on:on-add-item="onAddItem"></add-item-component>
    <items-component :itemsc="items"></items-component>
    <div class="footer">
      <hr />
      <change-title-component v-model="title"></change-title-component>
    </div> -->
    <ul class="nav nav-tabs" role="tablist">
      <li :class="index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" :key="list.id" role="presentation">
        <a v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class="index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" :key="list.id" class="tab-pane" role="tabpanel" v-bind:id="list.id">
        <shopping-list-component :items="list.items" :title="list.title" :id="list.id" @onChangeTitle="onChangeTitle"></shopping-list-component>
      </div>
    </div>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld'
// import AddItemComponent from './components/AddItemComponent'
// import ItemsComponent from './components/ItemsComponent'
// import ChangeTitleComponent from './components/ChangeTitleComponent'
import ShoppingListComponent from './components/ShoppingListComponent'
import _ from 'underscore'

export default {
  /* eslint-disable */
  name: 'App',
  components: {
    // HelloWorld
    // AddItemComponent,
    // ItemsComponent,
    // ChangeTitleComponent
    ShoppingListComponent
  },
  data() {
    return {
      shoppinglists: [{
          id: 'groceries',
          title: 'Groceries',
          items: [{ text: 'Bananas', checked: true },
            { text: 'Apples', checked: false }
          ]
        },
        {
          id: 'clothes',
          title: 'Clothes',
          items: [{ text: 'black dress', checked: false },
            { text: 'all stars', checked: false }
          ]
        }
      ]
    }
  },
  methods: {
    onAddItem: function(item) {
      console.log(item);
      this.items.push(item);
    },
    onChangeTitle: function(id, title) {
      _.findWhere(this.shoppinglists, { id: id }).title = title
    }
  }
}

</script>
<style>
</style>
