module.exports = {
    extends: ['./index.js', 'plugin:react/recommended'],
    env: {
        browser: true
    },
    plugins: [
        'react'
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            'jsx': true
        }
    },
    rules: {
        'react/display-name': 0,
        'react/no-danger': 0,
        'react/sort-comp': [
            2,
            {
                'order': [
                    'lifecycle',
                    'everything-else',
                    'render'
                ],
                'groups': {
                    'lifecycle': [
                        'mixins',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'getInitialState',
                        'getChildContext',
                        'componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'componentDidUpdate',
                        'componentWillUnmount'
                    ]
                }
            }
        ],
        'react/prop-types': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-string-refs': 1
    }
};
