import ax from './axios.js'

export function getArts (params) {
  return ax.get('/articles', { params })
    .then(res => res.data)
} 