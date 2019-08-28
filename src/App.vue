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
        <a v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" role="tab" data-toggle="tab">
          {{ list.title }}
          <i class="glyphicon glyphicon-remove" @click="deleteShoppingList(list.id)"></i>
        </a>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class="index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" :key="list.id" class="tab-pane" role="tabpanel" v-bind:id="list.id">
        <shopping-list-component :items="list.items" :title="list.title" :id="list.id"></shopping-list-component>
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
// import _ from 'underscore'
import store from './vuex/store'

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
  store,
  // data() {
  //   return {
  //     shoppinglists: [{
  //         id: 'groceries',
  //         title: 'Groceries',
  //         items: [{ text: 'Bananas', checked: true },
  //           { text: 'Apples', checked: false }
  //         ]
  //       },
  //       {
  //         id: 'clothes',
  //         title: 'Clothes',
  //         items: [{ text: 'black dress', checked: false },
  //           { text: 'all stars', checked: false }
  //         ]
  //       }
  //     ]
  //   }
  // },
  computed: {
    shoppinglists() {
      return this.$store.getters.getLists
    }
  },
  methods: {
    // onAddItem: function(item) {
    //   console.log(item);
    //   this.items.push(item);
    // },
    // onChangeTitle: function(id, title) {
    //   _.findWhere(this.shoppinglists, { id: id }).title = title
    // }
    addShoppingList() {
      let list = {
        title: 'New Shopping List',
        items: []
      }
      this.$store.dispatch('createShoppingList', list)
    },
    deleteShoppingList(id) {
      this.$store.dispatch('deleteShoppingList', id)
    }
  },
  mounted() {
    this.$store.dispatch('populateShoppingLists')
  }
}

</script>
<style scoped>
i {
  font-size: x-small;
  padding-left: 3px;
  cursor: pointer;
}

</style>
