const jscs = require('gulp-jscs');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-mocha');
const gulp = require('gulp');

var paths = {
  scripts: ['*.js'],
  tests: ['tests/*/**.js'],
};
gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('test', function() {
  return gulp.src(paths.tests)
    .pipe(mocha())
    .once('error', function() {
      process.exit(1);
    })
    .once('end', function() {
      process.exit();
    });;
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint']);
});

gulp.task('start', function() {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development',
    },
  });
})

gulp.task('travis', ['lint', 'test']);
gulp.task('default', ['watch', 'start']);
