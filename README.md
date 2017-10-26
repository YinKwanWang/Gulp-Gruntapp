# Gulp-Gruntapp lesson-1
## 主要讲述 gulp构建工具的用法

### 1.全局安装gulp 命令：sudo cnpm install gulp -global

### 2.项目局部安装 gulp 命令 cnpm install --save-dev gulp

### 3.在项目根目录下创建一个名为gulpfile.js的文件

### 4.运行gulp 命令：gulp + 任务名

### 定义任务常用方法：gulp.task定义任务、gulp.src输入文件路径 
###                gulp.dest 输出文件路径、gulp.watch监听文件变化
### 引入功能模块
### const gulpCopy = require("gulp-copy");    //引入拷贝文件模块
### const minImage = require("gulp-imagemin");//引入压缩图片模块
### const uglify = require("gulp-uglify");    //引入压缩js代码文件
### const sass = require("gulp-sass");        //引入sass转css文件
### const webserver = require("gulp-webserver"); //引入webserver模块

### webserver gulp下搭建服务器
