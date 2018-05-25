
export const state = () => {

  return {
    // 移动设别布局
    mobileLayout: false,

    // 移动侧边栏是否打开
    mobileSidebar: false,

    // 请求
    userAgent: ''
  }
}


export const mutations = {

  SET_MOBILE_LAYOUT (state, action) {
    state.mobileLayout = action
  },

  SET_MOBILE_SIDEBAR (state, action) {
    state.mobileSidebar = action
  },

  SET_USERAGENT (state, action) {
    state.userAgent = action
  }
}