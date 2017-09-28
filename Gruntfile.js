/**
 * Created by arnoldkrumins on 19/03/15.
 */
module.exports = function (grunt) {

    //grunt.registerTask('default', ['concat','uglify','cssmin']);
    grunt.registerTask('default', ['concat','cssmin']);

    grunt.initConfig({
        concat:{
                js:{
                    src:[
                        'bower_components/angular/angular.min.js',
                        'bower_components/jquery/dist/jquery.min.js',
                        'bower_components/retina.js/dist/retina.min.js',
                        'bower_components/gsap/src/minified/TimelineMax.min.js',
                        'bower_components/gsap/src/minified/TweenMax.min.js',
                        'app/module.js',
                        'app/**/*.js'
                    ],
                    dest: 'dist/app.min.js'

                    },
                css:{
                    src: [
                        'css/*',
                        'less/site.css',

                    ],
                    dest: 'dist/app.css'
                }
            },
                cssmin: {
                    css: {
                        src: ['dist/app.css'],
                        dest: 'dist/app.min.css'
                    }
                },
        // uglify:{
        //     js:{
        //         src:['dist/app.min.js'],
        //         dest:'dist/app.min.js'
        //
        //     }
        // }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    //grunt.loadNpmTasks("grunt-contrib-uglify");
};




