var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var include = require('gulp-include');
var pump = require('pump');

gulp.task("build", function() {
    return gulp.src(["./src/wrapper.js"])
      .pipe(include())
      .pipe(concat("doublescore.js"))
      .pipe(size())
      .pipe(gulp.dest("./"));
  });

gulp.task("minify", function() {
    return gulp.src(["./doublescore.js"])
      .pipe(uglify())
      .pipe(size())
      .pipe(size({
        gzip: true
      }))
      .pipe(concat("doublescore.min.js"))
      .pipe(gulp.dest("./"));
  });

  gulp.task("default", ["build", "minify"]);