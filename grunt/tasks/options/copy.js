// Copies remaining files to places other tasks can use

module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'src',
                dest: 'dist',
                src: [
                    '*.{js,css}'
                ]
            }
        ]
    }
};