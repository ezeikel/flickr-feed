// Include gulp
var gulp = require('gulp');


// Include our plugins
var sass = require('gulp-sass');
var jade = require('gulp-jade');


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sass({indentedSyntax: true}))
        .pipe(gulp.dest('css'));
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('sass/*.sass', ['sass']);
});


// Default Task
gulp.task('default', ['sass','templates','watch']);

sass({indentedSyntax: true})