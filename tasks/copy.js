import gulp from 'gulp';

gulp.task('copy', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./'))
  gulp.src(['./src/bower_components/**'])
    .pipe(gulp.dest('./build/bower_components'))
    .pipe(gulp.dest('./public/bower_components'))
  gulp.src('./src/styles/fonts/fonts-mfizz/**/*.*')
    .pipe(gulp.dest('./public/styles/fonts/fonts-mfizz'))
  gulp.src('./src/styles/fonts/fonts/**/*.*') // Comentar si se va a usar el cdnjs
    .pipe(gulp.dest('./public/styles/fonts/fonts')) // Comentar si se va a usar el cdnjs
  gulp.src([
    './src/robots.txt',
    './src/sitemap.xml',
    './src/.htaccess'
  ]).pipe(gulp.dest('./public'))
})
