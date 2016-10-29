// include gulp and other plugins
var gulp = require('gulp'),
    newer = require('gulp-newer'),
    htmlclean = require('gulp-htmlclean'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    preprocess = require('gulp-preprocess'),
    browsersync = require('browser-sync'),
    pkg = require('./package.json');

// file location
var
    devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase()!== 'production'),
    source = 'source/',
    dest = 'build/',

    html = {
      in: source + '*.html',
      watch: [source + '*.html', source + 'templates/**/*'],
      out: dest
    },

    css = {
      in: source + 'scss/main.scss',
      watch: [source + 'scss/**/*'],
      out: dest + 'css',
      sassOpts: {
        outputStyle: 'nested',
        imagePath: '../images'
      }
    },

    fonts = {
      in: source + 'fonts/**/*',
      out: css.out + 'fonts/'
    },

    images = {
      in: source + 'images/*.*',
      out: dest + 'images/'
    },

    js = {
      in: source + 'js/**/*',
      out: dest + 'js/'
    },

    syncOpts = {
      server: {
        baseDir: dest,
        index: 'index.html'
      },
      open: false,
      notify: true
    };

    serve = {
        root: dest
    };

    gulp.task ('html', function(){
      var page = gulp.src(html.in)
         .pipe(preprocess());
        if (!devBuild){
          page = page.pipe(htmlclean());
        }
        return page.pipe(gulp.dest(html.out));
    });

    gulp.task ('images', function(){
      return gulp.src(images.in)
      .pipe(newer(images.out))
      .pipe(imagemin())
      .pipe(gulp.dest(images.out));
    });

    gulp.task ('sass', function(){
      return gulp.src(css.in)
      .pipe(sass(css.sassOpts))
      .pipe(gulp.dest(css.out))
      .pipe(browsersync.reload({stream: true}));
    });

    gulp.task ('fonts', function(){
      return gulp.src(fonts.in)
      .pipe(newer(fonts.out))
      .pipe(gulp.dest(fonts.out));
    });

    gulp.task ('js', function(){
      return gulp.src(js.in)
      .pipe(newer(js.out))
      .pipe(gulp.dest(js.out));
    });

    gulp.task ('clean', function(){
      del ([
        dest + '*'
      ]);
    });

    gulp.task ('browsersync', function(){
      browsersync(syncOpts);
    });


 gulp.task('default', ['html', 'images', 'fonts', 'sass', 'js', 'browsersync'], function(){

  gulp.watch(html.watch, ['html', browsersync.reload]);

  gulp.watch(images.in, ['images']);

  gulp.watch(fonts.watch, ['fonts']);

  gulp.watch(css.watch, ['sass']);

  gulp.watch(js.in, ['js']);

});
