import * as ax from '../api'

export const actions = {

  nuxtServerInit (store, {params, route, server, req}) {

    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)

    console.log(userAgent)
    console.log(isMobile)
    store.commit('options/SET_USERAGENT', userAgent)
    store.commit('options/SET_MOBILE_LAYOUT', isMobile)
  },


  async getArtList({ commit, state}, data = { current_page: '1'} ) {

    const res = await ax.getArts(data).catch(err => console.log(err))


  }
}
