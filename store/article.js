
export const state = () => ({

  art: {
    pagination: {},
    list: []
  },

  fetch: false,

  details: {}
})

export const mutations = {
  FETCH_ART (state) {
    state.fetch = true
  },

  SET_ART_SECCUSS (state, data) {
    state.art = data
    state.fetch = false
  },

  SET_ART_FAILED (state) {
    state.art = { pagination: {}, list: [] }
    state.fetch = false
  }
}