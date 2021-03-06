import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from './mutation_types'
import api from '../../api/index'
import getters from './getters'

export default {
  changeTitle: (store, data) => {
    store.commit(CHANGE_TITLE, data)
    store.dispatch('updateShoppingLists', data.id)
  },
  populateShoppingLists: ({ commit }) => {
    api.fetchShoppingLists().then(response => {
      commit(POPULATE_SHOPPING_LISTS, response.data)
    })
  },
  updateShoppingLists: (store, id) => {
    let shoppingList = getters.getListById(store.state, id)
    api.updateShoppingList(shoppingList)
  },
  createShoppingList: (store, shoppinglist) => {
    api.addNewShoppingList(shoppinglist).then(() => {
      store.dispatch('populateShoppingLists')
    })
  },
  deleteShoppingList: (store, id) => {
    api.deleteShoppingList(id).then(() => {
      store.dispatch('populateShoppingLists')
    })
  }
}
