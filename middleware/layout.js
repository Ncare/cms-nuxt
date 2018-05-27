export default function ({ store, route}, next) {
  
  store.commit('options/SET_MOBILE_SIDEBAR', false)

  next()
}