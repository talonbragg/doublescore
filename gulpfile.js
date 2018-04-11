var gulp = require('gulp');
var concat = require('gulp-concat');
var pump = require('pump');

gulp.task('scripts', function() {
    return gulp.src('./src/*.js')
      .pipe(concat('doublescore.js'))
      .pipe(gulp.dest('./'));
});

gulp.task('compress', function (cb) {
    pump([
          gulp.src('/main.js'),
          uglify(),
          gulp.dest('./')
      ],
      cb
    );
});