import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import uncss from 'gulp-uncss';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

gulp.task('build:styles', ['styles'], () => {
  gulp.start('uncss')
})
gulp.task('styles', () => {
  var autoprefixerOptions = {
    browsers: ['last 2 versions'],
  };

  var sassOptions = {
    includePaths: [
    ],
    outputStyle: 'compressed'
  };
  return gulp.src('./src/styles/scss/style.scss')
    .pipe(sassGlob())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(plumber(plumberOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./build/styles'))
    .pipe(gulp.dest('./src/styles'))
})

gulp.task('uncss', () => {
    var reloadOptions = {
    stream: true,
  };
  return gulp.src('./src/styles/style.css')
    .pipe(uncss({
      html: ['index.html', './src/**/*.html']
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('./src/styles'))
    .pipe(gulp.dest('./build/styles'))
    .pipe(gulp.dest('./public/styles'))
    .pipe(browserSync.reload(reloadOptions))
})
