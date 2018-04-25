import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./src/**/*.html', ['build:html'])
  gulp.watch('./src/**/*.scss', ['styles'])
  gulp.watch('./src/videos/**/*.*', ['build:images'])
  gulp.watch('./src/scripts/lib/*.*.js', ['copy'])
  gulp.watch(
    [
      './src/scripts/index.js',
      './src/components/**/*.js',
      './src/views/**/*.js'
    ], ['build:scripts'])
})
