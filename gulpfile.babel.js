import gulp from 'gulp'
require('require-dir')('./tasks')

// Build
gulp.task('build', ['copy'], () => {
  gulp.start('build:html', 'styles', 'build:scripts', 'build:images', 'inject')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('serve', 'watch', 'build')
})
