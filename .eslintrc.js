module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: [
    '@stylistic/js'
  ],
  "overrides": [
    {
      "files": [
        "**/__tests__/*.js"
      ],
      "env": {
        "jest": true
      }
    }
  ],
  "env": {
    "browser": true,
    "node": true
  },
  rules: {
	  "no-bitwise": "off",
	  "no-case-declarations": "off"
  }
}
