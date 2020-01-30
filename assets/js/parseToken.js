import { VCache } from '@calibur/sakura'

export default (app) => {
  let token = ''

  if (app) {
    token = app.context.query.token || ''
  }

  if (typeof window !== 'undefined') {
    if (token) {
      VCache.set('JWT-TOKEN', token)
    } else {
      token = VCache.get('JWT-TOKEN', '')
    }
  }

  return token
}
