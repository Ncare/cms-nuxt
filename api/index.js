import ax from './axios.js'

export function getArts (params) {
  return ax.get('/article', { params })
    .then(res => res.data)
} 

export function getArt (data) {
  return ax.get(`/article/${data.id}`)
    .then(res => res.data)
}

// 归档
export function getAllarts (params) {
  return ax.get('/allarticle')
    .then(res => res.data)
}