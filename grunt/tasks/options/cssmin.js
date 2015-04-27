module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'dist',
            src: ['*.css', '!*.min.css'],
            dest: 'dist',
            ext: '.min.css'
        }]
    }
}