// import _ from 'underscore'
import * as types from './mutation_types'
import getters from './getters'

/* eslint-disable */
function findById(state, id) {
  return _.findWhere(state.shoppinglists, { id: id })
}

export default {
  [types.CHANGE_TITLE](state, data) {
    getters.getListById(state, data.id).title = data.title
  },
  [types.POPULATE_SHOPPING_LISTS](state, lists) {
    state.shoppinglists = lists
  }
}
