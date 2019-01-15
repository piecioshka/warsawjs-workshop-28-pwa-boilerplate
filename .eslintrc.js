module.exports = {
    extends: 'piecioshka',

    // http://eslint.org/docs/user-guide/configuring#specifying-environments
    env: {
        browser: true,
        // node: true,
        // commonjs: true,
        es6: true,
        // amd: true,
        // mocha: true,
        // jasmine: true,
        // jest: true,
        // jquery: true,
    },

    // http://eslint.org/docs/rules/
    rules: {
        'arrow-parens': 'off',
        'indent': ['error', 2],
        'no-inline-comments': 'off',
        'comma-dangle': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'require-jsdoc': 'off',
        'no-console': 'off'
    },

    // List of global variables.
    globals: {},

    parserOptions: {
        // Support syntax ES2018
        ecmaVersion: 2018,

        // Support syntax ES2015 Import/Export
        sourceType: 'module'
    }
};
