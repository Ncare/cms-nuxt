const IS_DEV = process.env.NODE_ENV !== 'production'

export const BASE_URL = IS_DEV ? 'http://localhost:8000/api/' : 'http://ncare.io/api/'

