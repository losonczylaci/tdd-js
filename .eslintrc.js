'use strict'

module.exports = {
    "env": {
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion":6,
        "sourceType": "module"
    },
    "rules": {
        "no-var": "error"
    }
}