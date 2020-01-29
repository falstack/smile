export default () => {
  const isQQ = /qq/.test(window.navigator.userAgent.toLowerCase())
  const self = isQQ ? window.qq : window.wx
  return self.miniProgram
}
