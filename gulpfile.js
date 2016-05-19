 /* eslint strict:0, no-console:0 */
'use strict';
const path = require('path');

const gulp = require('gulp');
const fs = require('fs');
global.__package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const asset = require('build-asset');
const bundle = require('build-bundle');
const style = require('build-style');
const transform = require('build-transform');

asset.registerTasks({
  glob: '**/*',
  inputDir: 'src/public/',
  outputDir: 'dist/',
  version: __package.version,
  name: 'public'
});

// asset.registerTasks({
//   inputDir: 'src/apps/apiToyProject',
//   glob: '**/*.html',
//   outputDir: path.join('dist/', __package.version, 'apps/apiToyProject/templates'),
//   // outputDir: 'dist/' + __package.version + ,
//   // version: __package.version,
//   // name: 'templates',
//   tasksPrefix: 'api-project-template'
// });

bundle.registerTasks({
  inputDir: 'lib/apps/',
  outputDir: 'dist/',
  version: __package.version,
  tasksDependencies: ['transform']
});

style.registerTasks({
  glob: '**/*.scss',
  inputDir: 'src/styles/',
  outputDir: 'dist/',
  version: __package.version,
  name: 'styles'
});

transform.registerTasks({
  glob: ['**/*.[tj]s', '!styles/**/*', '!public/**/*'],
  inputDir: 'src/',
  outputDir: 'lib/'
});

/*
 * Build the application.
 */
gulp.task('build', ['asset','bundle', 'style', 'transform', /*'api-project-template-asset'*/], function () {
});

/*
 * Fast build the application (only bundle apps).
 */
gulp.task('build-fast', ['asset', /*'api-project-template-asset',*/ 'bundleApps', 'transform'], function () {
});

if (process.env.NODE_ENV !== 'production') {
  const lint = require('build-lint');
  const test = require('build-test');

  lint.registerTasks({
    glob: ['src/**/*.js', '!src/public/**/*', '!src/styles/**/*', '!src/tests/fixtures/**/*']
  });

  test.registerTasks({
    testGlob: ['lib/tests/**/*.spec.js', '!lib/tests/fixtures/**/*', '!lib/tests/setup.js'],
    codeGlob: ['lib/**/*.js', '!lib/tests/**/*.js', '!lib/**/package.js'],
    thresholds: {
      global: { lines: 75 }
    },
    outputDir: 'testResults/',
    tasksDependencies: ['transform'],
    require: './lib/tests/setup'
  });

  /*
   * Test the application.
   */
  gulp.task('test', ['lint', 'test-with-coverage'], function () {
  });

  /*
   * Watch for changes to files.
   */
  gulp.task('watch', ['watch-asset', 'watch-lint', 'watch-style', 'watch-transform'], function () {
    console.log('Watch is running.');
    console.log('Type ^C to stop the watch process.');
  });
}
