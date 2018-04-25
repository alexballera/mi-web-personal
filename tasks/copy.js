import gulp from 'gulp'

gulp.task('copy', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
  gulp.src([
    './src/scripts/vendors/**'
  ]).pipe(gulp.dest('./public/scripts/vendors'))
  gulp.src([
    './src/scripts/lib/**'
  ]).pipe(gulp.dest('./public/scripts/lib'))
  gulp.src([
    './src/*.txt',
    './src/sitemap.*',
    './src/404.html',
    './src/*.php',
    './src/*.xml',
    './src/.htaccess'
  ]).pipe(gulp.dest('./public'))
})
