import gulp from 'gulp'
import cache from 'gulp-cache'
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import imageminSvgo from 'imagemin-svgo'
import imageminOptipng from 'imagemin-optipng'
import imageminJpegtran from 'imagemin-jpegtran'

gulp.task('build:images', () => {
  return gulp.src('./src/images/**')
    .pipe(cache(imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      use: [
        pngquant(),
        imageminSvgo(),
        imageminOptipng({optimizationLevel: 7}),
        imageminJpegtran({progressive: true})
      ],
      svgoPlugins: [
        { removeViewBox: false }, // don't remove the viewbox atribute from the SVG
        { removeUselessStrokeAndFill: false }, // don't remove Useless Strokes and Fills
        { removeEmptyAttrs: false } // don't remove Empty Attributes from the SVG
      ]
    })))
    .pipe(gulp.dest('./build/images'))
    .pipe(gulp.dest('./public/images'))
})
