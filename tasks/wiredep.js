import gulp from 'gulp';
// var wiredep = require('wiredep').stream

gulp.task('wiredep', () => {
  gulp.src('./src/*.html')
    .pipe(wiredep({
      directory: './src/bower_components'
    }))
    .pipe(gulp.dest('./src'))
})
