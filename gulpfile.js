var gulp = require('gulp'),
    concat = require('gulp-concat');

// one file.
var sourceFiles = [
    'fastaApp.module.js',
    'fastaApp.router.js',
    'shared/*.js',
    'configStep/*.js',
    'firstStep/*.js',
    'secondStep/*.js',
    'thirdStep/*.js'
];


gulp.task('build', function() {
    return gulp.src(sourceFiles)
        .pipe(concat('fasta.js'))
        .pipe(gulp.dest('build'));
});
