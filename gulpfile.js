// Include gulp
var gulp = require('gulp');


// Include plugins
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');


// Compile Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sass({indentedSyntax: true}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
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

// Add Vendor Prefixes for CSS
gulp.task('autoprefix', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('sass/*.sass', ['sass']);
    gulp.watch('pug/*.pug', ['templates']);
});


// Default Task
gulp.task('default', ['sass','templates',/*'autoprefix',*/'watch']);
