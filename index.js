module.exports = {
    rules: {
        ///////////////////////////////////////////////////////////////////////
        // Possible Errors
        ///////////////////////////////////////////////////////////////////////
        "no-extra-boolean-cast": 1,
        "comma-dangle": [2, "never"],
        "no-empty": 1,
        "no-extra-parens": [2, "functions"],

        ///////////////////////////////////////////////////////////////////////
        // Best Practices
        ///////////////////////////////////////////////////////////////////////
        "no-unused-expressions": 1,
        "no-multi-spaces": 2,
        "curly": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "wrap-iife": 0,
        "no-caller": 2,
        "no-new": 2,

        ///////////////////////////////////////////////////////////////////////
        // Stylistic Issues
        ///////////////////////////////////////////////////////////////////////
        "no-underscore-dangle": 0,
        "camelcase": 0,
        "new-cap": 2,
        "quotes": 0,
        "no-trailing-spaces": 2,
        "key-spacing": [1, {
            beforeColon: false,
            afterColon: true
        }],
        "indent": [2, 4],
        "brace-style": [2, "1tbs"],
        "comma-spacing": [2, {before: false, after: true}],
        "comma-style": [2, "last"],
        "consistent-this": [1, "self"],
        "eol-last": 1,
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 2,
        "no-spaced-func": 1,
        "padded-blocks": [2, "never"],
        "semi": [2, "always"],
        "keyword-spacing": [2, {"after": true}],
        "space-infix-ops": 2,
        "array-bracket-spacing": [2, "never"],
        "object-curly-spacing": [2, "never"],

        ///////////////////////////////////////////////////////////////////////
        // Variables
        ///////////////////////////////////////////////////////////////////////
        "no-use-before-define": [1, "nofunc"],
        "no-unused-vars": 1,
        // Undefined variables should be treated as errors:
        "no-undef": 2,

        ///////////////////////////////////////////////////////////////////////
        // Strict Mode
        ///////////////////////////////////////////////////////////////////////
        "strict": 0,

        ///////////////////////////////////////////////////////////////////////
        // Legacy
        ///////////////////////////////////////////////////////////////////////
        "no-bitwise": 1,
        "no-plusplus": 0,
        "max-params": [2, 7],
        "max-len" : [1, 120]
    }
};
