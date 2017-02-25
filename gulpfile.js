'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var refresh = require('browser-sync').create();


gulp.task('hello', function(){
    
	console.log("Hello world !");
});

/* Kompilacja plików scss do css */
gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
	.pipe(gulp.dest('app/css'))
	.pipe(refresh.reload({
      stream: true
    }))
});


gulp.task('refresh', function() {
  refresh.init({
    server: {
      baseDir: 'app'
    },
  })
})

/* Obserwowanie zmian w plikach */
gulp.task('watch', ['refresh', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', refresh.reload);
});
