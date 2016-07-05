module.exports = {
    extends: ["./index.js", "plugin:react/recommended"],
    env: {
        browser: true
    },
    plugins: [
        "react"
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            "jsx": true
        }
    }
};
