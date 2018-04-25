import gulp from 'gulp'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import sassGlob from 'gulp-sass-glob'
import sassLint from 'gulp-sass-lint'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import rename from 'gulp-rename'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'

var onError = function (err) {
  notify.onError({
    title: 'Error',
    message: '<%= error %>'
  })(err)
  this.emit('end')
}

var plumberOptions = {
  errorHandler: onError
}

gulp.task('styles', () => {
  var autoprefixerOptions = {
    browsers: ['last 2 versions']
  }
  var sassOptions = {
    includePaths: [
    ]
    // outputStyle: 'compressed'
  }
  var reloadOptions = {
    stream: true
  }
  return gulp.src('./src/styles/scss/index.scss')
    .pipe(sassGlob())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(plumber(plumberOptions))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./build/styles'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/styles'))
    .pipe(gulp.dest('./src/styles'))
    .pipe(browserSync.reload(reloadOptions))
})
