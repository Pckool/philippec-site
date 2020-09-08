module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'vue/html-indent': 'off',
    semi: 'warn',
    indent: 'off',
    quotes: 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'object-curly-spacing': 'off',
    'arrow-parens': 'warn'
  }
}
