const BASE_URL = {
  API_URL: {
    development: 'http://localhost:5200/',
    production: 'http://localhost/'
  },
  API_URL_BROWSER: {
    development: 'http://localhost:5200/',
    production: 'https://api.calibur.tv/'
  }
}

const SOCKET_HOST = {
  development: 'ws://localhost:5200/ws',
  production: 'wss://api.calibur.tv/ws'
}

module.exports = {
  BASE_URL,
  SOCKET_HOST
}
