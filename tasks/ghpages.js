import gulp from 'gulp'
import deploy from 'gulp-gh-pages'

gulp.task('deploy', () => {
  return gulp.src('./public/**/*')
    .pipe(deploy())
})
