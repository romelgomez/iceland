//var gulp = require("gulp");
//var ts = require("gulp-typescript");
//var tsProject = ts.createProject("tsconfig.json");
//
//gulp.task("default", function () {
//  return tsProject.src()
//    .pipe(ts(tsProject))
//    .js.pipe(gulp.dest("project/dist"));
//});

//*********************************************************

//var gulp = require("gulp");
//var browserify = require("browserify");
//var source = require('vinyl-source-stream');
//var tsify = require("tsify");
//
//var paths = {
//  pages: ['project/src/*.html']
//};
//
//gulp.task("copy-html", function () {
//  return gulp.src(paths.pages)
//    .pipe(gulp.dest("project/dist"));
//});
//
//gulp.task("default", ["copy-html"], function () {
//  return browserify({
//    basedir: '.',
//    debug: true,
//    entries: ['project/src/index.ts'],
//    cache: {},
//    packageCache: {}
//  })
//    .plugin(tsify)
//    .bundle()
//    .pipe(source('bundle.js'))
//    .pipe(gulp.dest("project/dist"));
//});

//***********************************************************


//var gulp = require("gulp");
//var browserify = require("browserify");
//var source = require('vinyl-source-stream');
//var watchify = require("watchify");
//var tsify = require("tsify");
//var gutil = require("gulp-util");
//var paths = {
//  pages: ['project/src/*.html']
//};
//
//var watchedBrowserify = watchify(browserify({
//  basedir: '.',
//  debug: true,
//  entries: ['project/src/main.ts'],
//  cache: {},
//  packageCache: {}
//}).plugin(tsify));
//
//gulp.task("copy-html", function () {
//  return gulp.src(paths.pages)
//    .pipe(gulp.dest("project/dist"));
//});
//
//function bundle() {
//  return watchedBrowserify
//    .bundle()
//    .pipe(source('bundle.js'))
//    .pipe(gulp.dest("project/dist"));
//}
//
//gulp.task("default", ["copy-html"], bundle);
//
//watchedBrowserify.on("update", bundle);
//watchedBrowserify.on("log", gutil.log);


//************************************************


//var gulp = require("gulp");
//var browserify = require("browserify");
//var source = require('vinyl-source-stream');
//var tsify = require("tsify");
//var uglify = require('gulp-uglify');
//var sourcemaps = require('gulp-sourcemaps');
//var buffer = require('vinyl-buffer');
//var paths = {
//  pages: ['project/src/*.html']
//};
//
//gulp.task("copy-html", function () {
//  return gulp.src(paths.pages)
//    .pipe(gulp.dest("project/dist"));
//});
//
//gulp.task('clean', del.bind(null, ['dist']));
//
//
//
//
//gulp.task("default", ["copy-html"], function () {
//  return browserify({
//    basedir: '.',
//    debug: true,
//    entries: ['project/src/main.ts'],
//    cache: {},
//    packageCache: {}
//  })
//    .plugin(tsify)
//    .bundle()
//    .pipe(source('bundle.js'))
//    .pipe(buffer())
//    .pipe(sourcemaps.init({loadMaps: true}))
//    .pipe(uglify())
//    .pipe(sourcemaps.write('./'))
//    .pipe(gulp.dest("project/dist"));
//});

//**************************************************

//var gulp = require('gulp');
//var browserify = require('browserify');
//var source = require('vinyl-source-stream');
//var tsify = require('tsify');
//var sourcemaps = require('gulp-sourcemaps');
//var buffer = require('vinyl-buffer');
//var paths = {
//  pages: ['project/src/*.html']
//};
//
//gulp.task('copyHtml', function () {
//  return gulp.src(paths.pages)
//    .pipe(gulp.dest('project/dist'));
//});
//
//gulp.task('default', ['copyHtml'], function () {
//  return browserify({
//    basedir: '.',
//    debug: false,
//    entries: ['project/src/main.ts'],
//    cache: {},
//    packageCache: {}
//  })
//    .plugin(tsify)
//    .transform("babelify")
//    .bundle()
//    .pipe(source('bundle.js'))
//    .pipe(buffer())
//    .pipe(sourcemaps.init({loadMaps: true}))
//    .pipe(sourcemaps.write('./'))
//    .pipe(gulp.dest('project/dist'));
//});


//**************************************************
'use strict';

var gulp    = require('gulp');
var size    = require('gulp-size');
var eslint  = require('gulp-eslint');
var del     = require('del');
var uglify  = require('gulp-uglify');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
var nodemon = require("gulp-nodemon");
var htmlmin = require('gulp-htmlmin');
var csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var es = require('event-stream');
var processhtml = require('gulp-processhtml');
var useref = require('gulp-useref');
var sourcemaps = require('gulp-sourcemaps');
var lazypipe = require('lazypipe');



gulp.task('devServer', function () {
  nodemon({
    script: 'server/appDev.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
});


