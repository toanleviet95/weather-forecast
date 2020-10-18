module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'react/no-danger': 0,
    'comma-dangle': [1, 'always-multiline'],
    'eol-last': [2, 'always'],
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    quotes: [1, 'single'],
    semi: [1, 'always'],
    'jsx-quotes': [1, 'prefer-single'],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
  overrides: [
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true
      },
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    }
  ],
};
