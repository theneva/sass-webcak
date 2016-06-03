const path = require('path');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const paths = {
  sass: './styles/**/*.scss',
  css: './css',
  cssSourcemaps: './maps'
};

gulp.task('sass', () => gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(sourcemaps.write(paths.cssSourcemaps))
    .pipe(gulp.dest(paths.css)));

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch(paths.sass, ['sass'])
});
