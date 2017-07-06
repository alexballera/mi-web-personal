import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/styles/scss/**/*.scss',
  './src/scripts/main.js',
  './src/scripts/lib/*.js',
  './bower.json'
]).on('change', browserSync.reload)
