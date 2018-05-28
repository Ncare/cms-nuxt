import ax from './axios.js'

export function getArts (params) {
  return ax.get('/article', { params })
    .then(res => res.data)
} 