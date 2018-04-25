import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'

gulp.task('build:html', ['copy:html'], () => {
  gulp.start('html')
})
gulp.task('html', () => {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public'))
})

gulp.task('copy:html', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
})
