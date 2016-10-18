import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('serve', () => {
  browserSync.init({
    notify: true,
    logPrefix: 'BS',
    server: {
      baseDir: ['./public']
    },
    port: 8000,
    ui: {
      port: 8001
    },
    browser: [
    //'chromium-browser'
    // 'google-chrome'
    'firefox'
    ]
  })
})
