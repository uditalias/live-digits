module.exports = {
    dist: {
        options: {
            compress: true,
            mangle: true
        },
        files: {
            'dist/live-digits.min.js': [
                'dist/live-digits.js'
            ]
        }
    }
};