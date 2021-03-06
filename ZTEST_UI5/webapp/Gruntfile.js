module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: ['webapp/*.js', 'webapp/**/*.js', '!**/Component-preload.js']
    },
    xml_validator: {
        your_target: {
          src: [ 'webapp/*.xml', 'webapp/**/*.xml' ]
        },
      },
    htmlhint: {
    	  html1: {
    	    options: {
    	      'tag-pair': true
    	    },
    	    src: ['webapp/*.html','webapp/**/*.html']
    	  }
    	},
    openui5_preload: {
      component: {
        options: {
          resources: {
            cwd: 'webapp',
            prefix: 'ZTEST_UI5',
            src: [
              '**/*.js',
              '**/*.fragment.html',
              '**/*.fragment.json',
              '**/*.fragment.xml',
              '**/*.view.html',
              '**/*.view.json',
              '**/*.view.xml',
              '**/*.properties',
			  '**/Valuehelp.json',
              '!**/Component-preload.js'
            ]
          },
          dest: 'webapp',
          compress: true
        },
        components: true
      }
    },
  });

  grunt.loadNpmTasks('grunt-openui5');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-xml-validator');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.registerTask('default', ['jshint', 'xml_validator', 'htmlhint', 'openui5_preload']);

}