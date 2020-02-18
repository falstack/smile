export default () => {
  const ua = window.navigator.userAgent.toLowerCase()
  const isQQ = /qq/.test(ua)
  const isWX = /micromessenger/.test(ua)
  const self = isQQ ? window.qq : window.wx
  self.miniProgram = self.miniProgram || {}
  self.miniProgram.__IN_APP__ = isQQ || isWX
  return self.miniProgram
}
