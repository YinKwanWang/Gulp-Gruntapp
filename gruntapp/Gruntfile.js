module.exports = function(grunt){
       // 配置grunt方法
       grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            cssmin: {
            	combine:{
            		files:{
                       "app/css/style.css":["app/css/background.css","app/css/fontsize.css"]//第一个参数
            		}
            	}
            },
            uglify:{
            	dist:{
            		files:{
            			"app/js/main.js":["app/js/min.js"]
            		}
            	}
            }
       });
       // 加载包含 "cssmin" 任务的插件。cnpm install grunt-contrib-cssmin --save
       grunt.loadNpmTasks('grunt-contrib-cssmin');
       grunt.loadNpmTasks('grunt-contrib-uglify');

       grunt.registerTask("default",["cssmin","uglify"]);
       // grunt.registerTask("default","",function(){
       //       grunt.log.write("在终端运行grunt命令，就会执这句话！");
       // });
}