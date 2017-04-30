// Include gulp
var gulp = require('gulp');


// Include plugins
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var cssnano = require('gulp-cssnano');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: './'
  });
});


// Compile Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sass({indentedSyntax: true}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

// Compile Pug
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
  gulp.src('pug/*.pug')
    .pipe(pug({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

// Transpile ES6 to ES5
gulp.task('babel', function() {
  return gulp.src('scripts/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    //.pipe(minify())
    .pipe(gulp.dest('js'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['babel']).on('change', browserSync.reload);
    gulp.watch('sass/*.sass', ['sass']);
    gulp.watch('pug/*.pug', ['templates']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});


// Default Task
gulp.task('default', ['serve']);
