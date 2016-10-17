var gulp = require('gulp'),
browserSync = require('browser-sync'),
reload = browserSync.reload,
htmlmin = require('gulp-htmlmin'),
sass = require('gulp-sass'),
sassGlob = require('gulp-sass-glob'),
autoprefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano'),
rename = require('gulp-rename'),
uncss = require('gulp-uncss'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
uglify = require('gulp-uglify'),
babelify = require('babelify'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
imageminSvgo = require('imagemin-svgo'),
imageminOptipng = require('imagemin-optipng'),
imageminJpegtran = require('imagemin-jpegtran'),
cache = require('gulp-cache'),
del = require('del'),
inject = require('gulp-inject'),
deploy = require('gulp-gh-pages'),
notify = require('gulp-notify'),
plumber = require('gulp-plumber');

// var wiredep = require('wiredep').stream
// Para que babelify trabaje se debe instalar babel-preset-es2015
// sudo npm install --save-dev babel-preset-es2015
// sudo npm install --save-dev gulp-sass-glob

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
  var autoprefixerOptions = {
    browsers: ['last 2 versions'],
  };

  var sassOptions = {
    includePaths: [
    ],
    outputStyle: 'compressed'
  };
  return gulp.src(globs.styles.main)
    .pipe(sassGlob())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(plumber(plumberOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(globs.styles.build))
    .pipe(gulp.dest(globs.styles.src))
})
// Optimiza styles.min.css
gulp.task('uncss', () => {
    var reloadOptions = {
    stream: true,
  };
  return gulp.src(globs.styles.src + '/style.css')
    .pipe(uncss({
      html: ['index.html', globs.html.watch]
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest(globs.styles.src))
    .pipe(gulp.dest(globs.styles.build))
    .pipe(gulp.dest(globs.styles.public))
    .pipe(reload(reloadOptions))
})

// Scripts: todos los archivos JS concatenados en uno solo minificado
gulp.task('build:scripts', () => {
  var presets = {
    presets: 'es2015'
  }

  return browserify(globs.scripts.main)
    .transform(babelify, {presets})
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
