module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true
    },
  },
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  plugins: [
    "babel",
    "import",
    "mocha"
  ],
  rules: {
    semi: [2, 'always'],
    radix: [1, 'always'], // just warn, for now
    'no-whitespace-before-property': 1,
    'dot-notation': 2,
    eqeqeq: [2, 'smart'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'comma-spacing': [2, {before: false, after: true}],
    indent: [2, 2, {VariableDeclarator: {var: 2, let: 2, const: 3}, SwitchCase: 1}],
    'arrow-spacing': 2,
    'keyword-spacing': 2,
    'comma-dangle': 0,
    'no-empty': 0,
    'space-before-function-paren': [1, 'always'],
    'babel/array-bracket-spacing': 1,
    'babel/object-shorthand': 1,
    'babel/arrow-parens': 1,
    'import/export': 2,
    'import/no-unresolved': 2,
    'import/no-duplicates': 2,
    'mocha/no-exclusive-tests': 2
  },
  extends: [
    'eslint:recommended'
  ]
}
