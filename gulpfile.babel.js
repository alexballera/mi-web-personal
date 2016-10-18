import gulp from 'gulp';
require('require-dir')('./tasks')

// Para que babelify trabaje se debe instalar babel-preset-latest
// sudo npm i -D babel-preset-latest gulp-sass-glob

// Build
gulp.task('build', ['copy'], () => {
  gulp.start('build:html', 'build:scripts', 'build:images', 'inject', 'build:styles')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('serve', 'watch', 'build')
})
