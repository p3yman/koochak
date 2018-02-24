/*-----------------------------------------------------------------
- Gulp for koochak
-----------------------------------------------------------------*/
// Plugins
var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    rename          = require('gulp-rename'),
    newer           = require('gulp-newer'),
    cssmin          = require('gulp-cssmin'),
    csscomb         = require('gulp-csscomb');

// Source Folders
var source_dir      = 'src/',
    dist_dir        = 'dist/'

    css = {
        in:     source_dir + '**/*.scss',
        out:    dist_dir,
    };

//------------------------------------------------------------
// Tasks
//------------------------------------------------------------

// Styles
gulp.task('styles', function() {
    return gulp.src(css.in)
        .pipe( sass().on('error', sass.logError) )
        .pipe( autoprefixer("last 5 version") )
        .pipe( csscomb() )
        .pipe( gulp.dest(css.out) )
        .pipe( rename({suffix: '.min'}) )
        .pipe( cssmin() )
        .pipe( gulp.dest( css.out ) );
});

// Default and Watch
gulp.task('default', ['styles'], function() {

    gulp.watch( css.in          , ['styles']  );

});