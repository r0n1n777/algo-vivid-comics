const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync').create();

gulp.task('connect', function() {
    connect.server();
})

gulp.task('sync', function() {
    browserSync.init({
        proxy: 'localhost:8000',
        notify: false,
    });
});

gulp.task('watch', function() {
    gulp.watch(['./style.css', './main.js', './**/*.blade.php', './**/*.php']).on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('connect', 'sync', 'watch'));

// const sass = require('gulp-sass')(require('sass'));
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
// const concat = require('gulp-concat');
// const sourcemaps = require('gulp-sourcemaps');

// const paths = {
//     scss: {
//       src: './assets/*.scss',
//       dest: './assets/css/'
//     },
//     css: {
//         src: './assets/css/**/*.css',
//         dest: './assets/'
//     },
//     js: {
//       src: './assets/js/**/*.js',
//       dest: './assets/'
//     }
// };

// gulp.src(paths.scss.src)
//     .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(rename('sass-compiled.css'))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(paths.scss.dest))
//     .pipe(browserSync.stream());

// function css() {
//     gulp.src(paths.css.src)
//         .pipe(cssmin())
//         .pipe(rename('app.css'))
//         .pipe(gulp.dest(paths.css.dest))
//         .pipe(browserSync.stream());
// }

// function js() {
//     gulp.src(paths.js.src)
//         .pipe(sourcemaps.init())
//         .pipe(concat('app.js'))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest(paths.js.dest))
//         .pipe(browserSync.stream());
// }