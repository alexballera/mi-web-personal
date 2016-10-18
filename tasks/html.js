import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

gulp.task('build:html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./public'))
})
