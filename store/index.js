import * as ax from '../api'

export const actions = {

  nuxtServerInit (store, {params, route, server, req}) {

    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)

    store.commit('options/SET_USERAGENT', userAgent)
    store.commit('options/SET_MOBILE_LAYOUT', isMobile)
  },


  async getArtList({ commit, state}, data = { current_page: '1'} ) {

    commit('article/FETCH_ART')
    const res = await ax.getArts(data).catch(err => console.log(err))

    if(res && res.code) {
      let list
      if (res.result.pagination.current_page === 1) list = res.result.list
      else list = [...state.article.art.list, ...res.result.list]

      commit('article/SET_ART_SECCUSS', {
        list,
        pagination: res.result.pagination
      })
    } else {
      commit('article/SET_ART_FAILED')
    }
  },

  async getArt({ commit }, data) {
    
    const res = await ax.getArt(data).catch(err => console.log(err))

    if (res && res.code) {
      const details = res.result
      commit('article/SET_DETAILS', details)
    }
  },

  // 归档
  async getAllarticle({ commit }) {
    
    const res = await ax.getAllarts().catch(err => console.log(err))

    if (res && res.code) {
      const archive = res.result
      commit('archive/SET_ART_SUCCESS', archive)
    }
  }
}
