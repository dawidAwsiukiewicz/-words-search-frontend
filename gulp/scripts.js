'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var addStream = require('add-stream');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var gulpNgConfig = require('gulp-ng-config');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

function generateSettings() {
    return gulp.src('./settings.json')
        .pipe(gulpif(argv.production, gulpNgConfig('project.settings', {
            environment: 'production'
        })))
        .pipe(gulpif(argv.development, gulpNgConfig('project.settings', {
            environment: 'development'
        })))
        .pipe(gulpif(argv.localhost, gulpNgConfig('project.settings', {
            environment: 'localhost'
        })))

  .pipe(gulp.dest('./src/app'))
}

gulp.task('scripts-reload', function () {
    return buildScripts()
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    return buildScripts();
});

function buildScripts() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe($.eslint())
        .pipe(addStream.obj(generateSettings()))
        .pipe($.eslint.format())
        .pipe($.size())
};
