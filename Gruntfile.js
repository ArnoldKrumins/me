/**
 * Created by arnoldkrumins on 19/03/15.
 */
module.exports = function (grunt) {

    grunt.registerTask('default', ['concat','uglify']);


    grunt.initConfig({
        concat:{
                js:{
                    src:['app/module.js','app/**/*.js'],
                    dest: 'dist/app.min.js'

                    }
            },
        uglify:{
            js:{
                src:['dist/app.min.js'],
                dest:'dist/app.min.js'

            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};




