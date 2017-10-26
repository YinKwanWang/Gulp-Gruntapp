// 不改变的用es6中的const
const gulp = require("gulp");          
const gulpCopy = require("gulp-copy");    //引入拷贝文件模块
const minImage = require("gulp-imagemin");//引入压缩图片模块
const uglify = require("gulp-uglify");    //引入压缩js代码文件
const sass = require("gulp-sass");        //引入sass转css文件
const webserver = require("gulp-webserver"); //引入webserver模块
/*
* -- 常用方法--
* gulp.task   -- 定义任务
* gulp.src    -- 输入文件路径
* gulp.dest   -- 输出文件路径
* gulp.watch  -- 监听文件变化
*
* -- node方法 --
*pipe       -- 管道
*/
 
// 在src文件里面写项目 让后通过gulp打包上传 （实现代码拷贝）
// 定义一个默认任务
gulp.task('default',()=>{
	console.log("default是必须要这么写，才是默认任务！");
});

// 定义具体任务
gulp.task("message",()=>{
      console.log("执行具体任务，需要在终端运行  gulp message(任务名)");
});

//定义拷贝任务
gulp.task('copyHtml',()=>{
       // 找到需要拷贝文件的路径
       gulp.src('src/*.html')// 要拷贝某一个文件 用src/index.html 拷贝所有用src/*.html
           .pipe(gulp.dest('dist'));// 目标方法转化到我对应的路径里面
});

// 定义压缩图片任务
gulp.task('imageMin',()=>{
     gulp.src('src/images/*')
         .pipe(minImage()) //pipe 压缩文件
         .pipe(gulp.dest("dist/images"));// 通过管道包压缩的图片放到指定文件   
});

// 定义压缩JS代码任务
// 1.下载模块 -- gulp-uglify
// 2.引入模块 -- require()
// 3.定义任务 -- task
// 4.在src下创建一个js文件夹，并且创建一个js文件，随便写一个函数
// 5.实现任务 gulp uglify
gulp.task('uglify',()=>{
     	gulp.src('src/js/*.js')
     	    .pipe(uglify())
     	    .pipe(gulp.dest('dist/js'));
});

// 定义sass转css 任务
gulp.task("sass",()=>{
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// 定义默认任务
gulp.task("default",["message","copyHtml","imageMin","sass","uglify"]);

// 监听任务
gulp.task("watch",()=>{
      gulp.watch("src/js/*js",["uglify"]);
      gulp.watch("src/images/*",["images"]);
      gulp.watch("src/sass/*.scss",["sass"]);
      gulp.watch("src/*.html",["copyHtml"]);
});

// webserver gulp下搭建服务器任务
gulp.task("webserver",()=>{
     return gulp.src("app")
                .pipe(webserver({
                	//配置服务器的端口号
                	port:4000,
                	// 
                	livereload:true,
                	// 
                	open:true
                }))
});
