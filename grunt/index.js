var path = require('path');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    var config = require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'grunt', 'tasks', 'options'),
        data: {}
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:compass-compile',
        'cssmin',
        'copy:dist',
        'uglify',
        'usemin'
    ]);
};