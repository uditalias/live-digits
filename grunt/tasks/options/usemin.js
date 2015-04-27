// Performs rewrites based on rev and the useminPrepare configuration

module.exports = {
    css: ['dist/*.css'],
    options: {
        assetsDirs: ['dist'],
        patterns: {
            js: []
        }
    }
};