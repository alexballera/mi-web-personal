import gulp from 'gulp';

gulp.task('watch', () => {
  gulp.watch('./src/**/*.html', ['build:html'])
  gulp.watch('./src/styles/scss/**/*.scss', ['build:styles'])
  gulp.watch('./src/scripts/main.js' ['build:scripts'])
  gulp.watch('./src/videos/**/*.*', ['build:images'])
  gulp.watch(['./bower.json'], ['copy'])
})
