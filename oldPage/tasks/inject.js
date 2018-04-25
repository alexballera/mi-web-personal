import gulp from 'gulp'
import inject from 'gulp-inject'

gulp.task('inject', () => {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src([
      './src/styles/style.min.css',
      './src/scripts/main.min.js'
    ],
      {
        read: false
      }
  ),
      {
        relative: true
      }
  ))
    .pipe(gulp.dest('./src'))
})
