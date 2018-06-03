
export const state = () => ({
  art: [],

  fetch: false
})

export const mutations = {
  SET_ART_SUCCESS (state, data) {
    state.art = data
    state.fetch = true
  }
}