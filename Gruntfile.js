/**
 * Created by froth on 3/14/2016.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {

            task: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'views/**/*.jade'   // .jade support...

                ]
            },
            options: {
                ignorePath: "../public/"
            }
        }

    });
    grunt.loadNpmTasks('grunt-wiredep');
};