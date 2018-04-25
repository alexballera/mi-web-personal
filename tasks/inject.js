import gulp from 'gulp'
import inject from 'gulp-inject'
import series from 'stream-series'

gulp.task('inject', () => {
  var VendorJS = gulp.src('./src/scripts/vendors/**')
  var appJS = gulp.src('./src/scripts/index.min.js')
  // var Lib = gulp.src('./src/scripts/lib/**')
  // var vendorCSS = gulp.src('./src/styles/vendors/*.*.ccs')
  var appCSS = gulp.src('./src/styles/style.min.css')

  gulp.src('./src/index.html')
    .pipe(inject(series([
      VendorJS,
      appJS,
      // Lib,
      // vendorCSS,
      appCSS
    ],
    { read: false }
    ),
    { relative: true }
    ))
    .pipe(gulp.dest('./src'))
})
