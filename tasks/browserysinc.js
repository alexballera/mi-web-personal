import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('serve', () => {
  browserSync.init({
    notify: true,
    logPrefix: 'BS',
    server: {
      baseDir: ['./public']
    },
    port: 8000,
    browser: 'google-chrome-stable',
    ui: {
      port: 8001
    }
  })
})
