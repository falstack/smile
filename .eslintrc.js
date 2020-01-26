module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'camelcase': 'off'
  }
}
