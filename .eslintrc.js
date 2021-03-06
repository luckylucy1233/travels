module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
  "arrow-parens": 0,
    "brace-style": 0,
    "semi": 0,
    "semi-spacing": 0,
    "indent": 0,
    "quote-props": 0,
    "quotes": 0,
    "eol-last": 0,
    "key-spacing": 0,
    "spaced-comment": 0,
    "array-bracket-spacing": 0,
    "space-before-function-paren": 0,
    "space-before-blocks": 0,
    "no-trailing-spaces": 0,
    "no-useless-computed-key": 1,
    "keyword-spacing": 1,
    "space-in-parens": 1,
    "object-curly-spacing": 1,
    "block-spacing": 1,
    "no-multiple-empty-lines": 1,
    "no-return-assign": 1,
    "arrow-spacing": 1,
    "comma-spacing": 1,
    "prefer-const": 1,
    "padded-blocks": 1,
    "space-infix-ops": 1,
    "yoda": 1,
    "camelcase": 1,
    "one-var": 0,
    "wrap-iife": 0,
    "eqeqeq": 1,
    "curly": 1,
    "no-useless-escape": 1,
    "no-useless-call": 1,
    "no-sequences": 0,
    "no-undef": 1,
    "no-unused-vars": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-multi-spaces": 1,
    "comma-style": 1,
    "comma-spacing": 1,
    "space-unary-ops": 1,
    "no-extra-boolean-cast": 1,
    "no-throw-literal": 1,
    "no-shadow-restricted-names": 1,
    "no-unneeded-ternary": 1,
    "no-self-assign": 1,
    "no-irregular-whitespace": 1,
    "no-fallthrough": 1,
    "no-eval": 1,
    "no-unreachable": 1,
    "no-cond-assign": 1,
    "comma-dangle": 0,
    "allowMultiplePropertiesPerLine": 0 ,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}