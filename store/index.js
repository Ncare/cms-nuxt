
export const actions = {

  nuxtServerInit (store, {params, route, isServer, req}) {

    const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)

    console.log(userAgent)
    console.log(isMobile)
  }
}