module.exports = {
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'indent': ['error', 'tab'],
        'brace-style': ['error', 'stroustrup'],
        'no-tabs': 'off',
    },
};