var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var htmlbeautify = require('gulp-html-beautify');
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();

// * * * * * *
// * Banner  *
// * * * * * *

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  '\n'
].join('');

// * * * * *
// * Clean *
// * * * * *

// Destroy the /dist directory for rebuilding
gulp.task('clean', function() {
  var stream = del([
    './dist',
    './dist/**/*',
  ])
  return stream;;
});

// * * * * * * * * * * * * * *
// * Import Vendor Libraries *
// * * * * * * * * * * * * * *

// Import third party vendor libraries from /node_modules
gulp.task('vendor', function() {

  // Bootstrap - SCSS - import to /src
  gulp.src([
      './node_modules/bootstrap/scss/**/*'
    ])
    .pipe(gulp.dest('./src/scss/bootstrap'))

  // Bootstrap - JS
  gulp.src([
      './node_modules/bootstrap/dist/js/*',
      './node_modules/bootstrap/LICENSE'
    ])
    .pipe(gulp.dest('./dist/js/vendor/bootstrap'))

  // Fancybox - CSS
  gulp.src([
      './node_modules/@fancyapps/fancybox/dist/*.css',
    ])
    .pipe(gulp.dest('./dist/css/vendor/fancybox'))

  // Fancybox - JS
  gulp.src([
      './node_modules/@fancyapps/fancybox/dist/*.js',
    ])
    .pipe(gulp.dest('./dist/js/vendor/fancybox'))

  // Font Awesome 5 (Free) - CSS
  gulp.src([
      './node_modules/@fortawesome/fontawesome-free/css/*',
    ])
    .pipe(gulp.dest('./dist/fonts/fontawesome-free/css'))

  // Font Awesome 5 (Free) - Webfonts
  gulp.src([
      './node_modules/@fortawesome/fontawesome-free/webfonts/*'
    ])
    .pipe(gulp.dest('./dist/fonts/fontawesome-free/webfonts'))

  // Font Awesome 5 (Free) - License
  gulp.src([
      './node_modules/@fortawesome/fontawesome-free/LICENSE.txt'
    ])
    .pipe(gulp.dest('./dist/fonts/fontawesome-free'))

  // HTML5 Device Mockups - CSS
  gulp.src([
      './node_modules/html5-device-mockups/dist/*'
    ])
    .pipe(gulp.dest('./dist/css/vendor/html5-device-mockups/css'))

  // HTML5 Device Mockups - Images
  gulp.src([
      './node_modules/html5-device-mockups/device-mockups/**/*'
    ])
    .pipe(gulp.dest('./dist/css/vendor/html5-device-mockups/device-mockups'))

  // HTML5 Device Mockups - License
  gulp.src([
      './node_modules/html5-device-mockups/LICENSE.txt'
    ])
    .pipe(gulp.dest('./dist/css/vendor/html5-device-mockups'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js',
      './node_modules/jquery/LICENSE.txt'
    ])
    .pipe(gulp.dest('./dist/js/vendor/jquery'))

  // jQuery Easing
  gulp.src([
      './node_modules/jquery.easing/jquery.easing.js',
      './node_modules/jquery.easing/jquery.easing.min.js',
      './node_modules/jquery.easing/LICENSE'
    ])
    .pipe(gulp.dest('./dist/js/vendor/jquery-easing'))

  // Slick Carousel - CSS
  gulp.src([
      './node_modules/slick-carousel/slick/slick.css',
      './node_modules/slick-carousel/LICENSE'
    ])
    .pipe(gulp.dest('./dist/css/vendor/slick-carousel'))

  // Slick Carousel - JS
  gulp.src([
      './node_modules/slick-carousel/slick/*.js',
      './node_modules/slick-carousel/LICENSE'
    ])
    .pipe(gulp.dest('./dist/js/vendor/slick-carousel'))

});

// * * * * * * * * * * * * * * * * * * * * * * *
// * Compile SCSS and Alternate Color Schemes  *
// * * * * * * * * * * * * * * * * * * * * * * *

// SCSS - Compile
gulp.task('css:default', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-default.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
});

// SCSS - Blue Color Scheme
gulp.task('css:blue', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#1e90ff'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-blue.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

// SCSS - Green Color Scheme
gulp.task('css:green', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#20bf6b'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-green.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

// SCSS - Yellow Color Scheme
gulp.task('css:yellow', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#f7b731'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-yellow.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

// SCSS - Orange Color Scheme
gulp.task('css:orange', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#fa8231'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-orange.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

// SCSS - Purple Color Scheme
gulp.task('css:purple', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#a55eea'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-purple.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

// SCSS - Turquoise Color Scheme
gulp.task('css:turquoise', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#0fb9b1'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-turquoise.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

// SCSS - Pink Color Scheme
gulp.task('css:pink', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#eb3b5a'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-pink.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

// SCSS - Brown Color Scheme
gulp.task('css:brown', function() {
  var stream = gulp.src('./src/scss/*.scss')
    // Replace Colors
    .pipe(replace('#ef4035', '#b08d6a'))
    // Compile
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("theme-brown.css"))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/css'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
})

gulp.task('css', ['css:default', 'css:blue', 'css:green', 'css:yellow', 'css:orange', 'css:purple', 'css:turquoise', 'css:pink', 'css:brown']);

// JS - Add Headers
gulp.task('js', function() {
  var stream = gulp.src(['./src/js/**/*.js'])
    // Compile
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist/js'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
});

// File include for shared elements across pages
gulp.task('html', function() {
  var stream = gulp.src(['./src/html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlbeautify())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
  return stream;
});

// Images - Copy images to /dist
gulp.task('img', function() {
  var stream = gulp.src(['./src/img/**/*'])
    .pipe(gulp.dest('./dist/img'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
});

// Mail - Copy PHP mailer to /dist
gulp.task('mail', function() {
  var stream = gulp.src(['./src/mail/**/*'])
    .pipe(gulp.dest('./dist/mail'))
    // BrowserSync
    .pipe(browserSync.stream())
  return stream;
});

// Default task
gulp.task('default', ['css', 'js', 'html', 'vendor', 'img', 'mail']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});

// Dev task
gulp.task('dev', ['css', 'js', 'img', 'mail', 'browserSync'], function() {
  gulp.watch('./src/scss/**/*', ['css']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/html/**/*.html', ['html']);
  gulp.watch('./src/img/**/*', ['img']);
  gulp.watch('./src/mail/**/*', ['mail']);
});
