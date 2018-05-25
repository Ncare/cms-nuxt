
export const actions = {

  nuxtServerInit (store, {params, route, server, req}) {

    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)

    console.log(userAgent)
    console.log(isMobile)
    store.commit('options/SET_USERAGENT', userAgent)
    store.commit('options/SET_MOBILE_LAYOUT', isMobile)
  }
}