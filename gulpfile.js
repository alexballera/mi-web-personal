var gulp = require('gulp')
var browserSync = require('browser-sync')
var reload = browserSync.reload
var htmlmin = require('gulp-htmlmin')
var sass = require('gulp-sass')
var sassGlob = require('gulp-sass-glob')
var autoprefixer = require('gulp-autoprefixer')
var cssnano = require('gulp-cssnano')
var rename = require('gulp-rename')
var uncss = require('gulp-uncss')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var babelify = require('babelify')
var imagemin = require('gulp-imagemin')
var pngquant = require('imagemin-pngquant')
var imageminSvgo = require('imagemin-svgo')
var imageminOptipng = require('imagemin-optipng')
var imageminJpegtran = require('imagemin-jpegtran')
var cache = require('gulp-cache')
var del = require('del')
var inject = require('gulp-inject')
// var wiredep = require('wiredep').stream
var deploy = require('gulp-gh-pages')
// Para que babelify trabaje se debe instalar babel-preset-es2015
// sudo npm install --save-dev babel-preset-es2015
// sudo npm install --save-dev gulp-sass-glob

// Variables
var globs = {
  build: './build',
  public: './public',
  src: './src',
  html: {
    main: './src/index.html',
    watch: './src/**/*.html',
    build: './build',
    public: './public'
  },
  styles: {
    main: './src/styles/scss/style.scss',
    watch: './src/styles/scss/**/*.scss',
    src: './src/styles',
    build: './build/styles',
    public: './public/styles'
  },
  scripts: {
    main: './src/scripts/main.js',
    watch: './src/scripts/main.js',
    src: './src/scripts',
    build: './build/scripts',
    public: './public/scripts'
  },
  images: {
    main: './src/images/**',
    watch: './src/images/**/*.*',
    src: './src/images',
    build: './build/images',
    public: './public/images'
  },
  videos: {
    main: './src/videos/**',
    watch: './src/videos/**/*.*',
    src: './src/videos',
    build: './build/videos',
    public: './public/videos'
  },
  fonts: {
    main: './src/styles/fonts/**',
    watch: './src/styles/fonts/**/*.*',
    src: './src/styles/fonts',
    build: './build/styles/fonts',
    public: './public/styles/fonts'
  }
}

// Servidor - Browsersync
gulp.task('serve', () => {
  browserSync.init({
    notify: true,
    logPrefix: 'BS',
    server: {
      baseDir: [globs.public]
    },
    port: 8000,
    ui: {
      port: 8001
    },
    browser: [//'chromium-browser'
    // 'google-chrome'
    'firefox'
    ]
  })
})

// HTML minificado
gulp.task('build:html', () => {
  return gulp.src(globs.html.watch)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(globs.build))
    .pipe(gulp.dest(globs.public))
})

// Styles: CSS  Minificado
gulp.task('build:styles', ['styles'], () => {
  gulp.start('uncss')
})
gulp.task('styles', () => {
  return gulp.src(globs.styles.main)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(globs.styles.build))
    .pipe(gulp.dest(globs.styles.src))
})
// Optimiza styles.min.css
gulp.task('uncss', () => {
  return gulp.src(globs.styles.src + '/style.css')
    .pipe(uncss({
      html: ['index.html', globs.html.watch]
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest(globs.styles.src))
    .pipe(gulp.dest(globs.styles.build))
    .pipe(gulp.dest(globs.styles.public))
})

// Scripts: todos los archivos JS concatenados en uno solo minificado
gulp.task('build:scripts', () => {
  return browserify(globs.scripts.main)
    .transform(babelify, {presets: 'es2015'})
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(globs.scripts.build))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(globs.scripts.src))
    .pipe(gulp.dest(globs.scripts.build))
    .pipe(gulp.dest(globs.scripts.public))
})

// Images
gulp.task('build:images', () => {
  return gulp.src(globs.images.main)
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
    .pipe(gulp.dest(globs.images.build))
    .pipe(gulp.dest(globs.images.public))
})

// Inyectando css y js al index.html
gulp.task('inject', () => {
  gulp.src(globs.html.main)
    .pipe(inject(gulp.src([globs.styles.src + '/style.min.css', globs.scripts.src + '/main.min.js'], {read: false}), {relative: true}))
    .pipe(gulp.dest(globs.src))
})

// Inyectando las librerias Bower
gulp.task('wiredep', () => {
  gulp.src('./src/*.html')
    .pipe(wiredep({
      directory: './src/bower_components'
    }))
    .pipe(gulp.dest(globs.src))
})

// Clean
gulp.task('clean', (cb) => {
  return del([globs.build, globs.public], cb)
})

// Deploy to gh-pages
gulp.task('deploy', () => {
  return gulp.src('./public/**/*')
    .pipe(deploy())
})

// Copy
gulp.task('copy', () => {
  gulp.src(globs.html.main)
    .pipe(gulp.dest('./'))
  gulp.src(['./src/bower_components/**'])
    .pipe(gulp.dest('./build/bower_components'))
    .pipe(gulp.dest('./public/bower_components'))
  gulp.src(globs.fonts.src + '/fonts-mfizz/**/*.*')
    .pipe(gulp.dest(globs.fonts.
    public + '/fonts-mfizz'))
  gulp.src(globs.fonts.src + '/fonts/**/*.*') // Comentar si se va a usar el cdnjs
    .pipe(gulp.dest(globs.fonts.
    public + '/fonts')) // Comentar si se va a usar el cdnjs
  gulp.src(globs.src + '/robots.txt')
    .pipe(gulp.dest(globs.
                    public))
  gulp.src(globs.src + '/sitemap.xml')
    .pipe(gulp.dest(globs.
                    public))
  gulp.src(globs.src + '/.htaccess')
    .pipe(gulp.dest(globs.
                    public))
})

// Reload
gulp.watch([
  globs.html.watch,
  globs.styles.watch,
  globs.scripts.watch,
  './bower.json'
]).on('change', reload)

// Watch
gulp.task('watch', () => {
  gulp.watch(globs.html.watch, ['build:html'])
  gulp.watch(globs.styles.watch, ['build:styles'])
  gulp.watch(globs.scripts.watch, ['build:scripts'])
  gulp.watch(globs.images.watch, ['build:images'])
  gulp.watch(['./bower.json'], ['copy'])
})

// Build
gulp.task('build', ['copy'], () => {
  gulp.start('build:html', 'build:scripts', 'build:images', 'inject', 'build:styles')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('serve', 'watch', 'build')
})
