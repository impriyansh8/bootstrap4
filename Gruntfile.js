'use strict';
module.exports=function(grunt){
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.sass'
                }
            }
        },
        watch: {
            files: 'css/*.sass',
            task: ['sass']
        },
        browserSync: {
            bsFiles: {
                src: [
                    'css/*.css',
                    '*.html',
                    'js/*.js'
                ]
            },
            options: {
                warchTask: true,
                server: {
                    baseDir: './'
                }
            }
        }
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default',['browserSync', 'watch']);
}