import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'
import babelify from 'babelify'
import rename from 'gulp-rename'

gulp.task('build:scripts', () => {
  return browserify('./src/scripts/index.js')
    .transform(babelify)
    .bundle()
    .on('error', (err) => {
      console.log(err)
      this.emit('end')
    })
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/scripts'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/scripts'))
    .pipe(gulp.dest('./public/scripts'))
})
