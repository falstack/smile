import { VCache } from '@calibur/sakura'

export default (app) => {
  let token = ''

  if (typeof window !== 'undefined') {
    token = VCache.get('JWT-TOKEN', '')
  }

  if (token) {
    return token
  }

  if (app) {
    token = app.context.query.token
  }

  if (token) {
    VCache.set('JWT-TOKEN', token)
  }

  return token
}
