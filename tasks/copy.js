import gulp from 'gulp'

gulp.task('copy', () => {
  gulp.src('./src/styles/fonts/fonts-mfizz/**/*.*')
    .pipe(gulp.dest('./public/styles/fonts/fonts-mfizz'))
  gulp.src('./src/styles/fonts/fonts/**/*.*') // Comentar si se va a usar el cdnjs
    .pipe(gulp.dest('./public/styles/fonts/fonts')) // Comentar si se va a usar el cdnjs
  gulp.src([
    './src/*.txt',
    './src/sitemap.xml',
    './src/.htaccess'
  ]).pipe(gulp.dest('./public'))
})
