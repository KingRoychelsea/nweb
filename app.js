/*
* 1，创建服务器伺服进程，执行端口监听
* 2，执行url路由，具体就是把客户端的访问url转到特定处理函数上
* 3，srv为那些url处理函数生成实参request（req）、response（res）
* 4，request里面封装的是从客户端（浏览器）过来的参数
* （url，cookie，method【get post】等等）、
* 数据（get，post）
* 5，response主要是封装了回应客户端的数据和方法，我们主要用到的方法有
* write和end，end要最后执行一次（仅仅一次）
*
* */
var url  = require('url'), // 分拆url
    formidable = require('formidable')
/*
http://domain/
http://domain/path/a(.html)(.php)
http://domain/a.php?name=jack&gender=male
domain
path
parameters

*/

var routes = require("./routes"),
    exhandle = require("./exception").handle
//dispatch函数真正执行了路由
var dispatch = function(req,res){
    var ob = url.parse(req.url)
    var Cookies = {}
    req.headers.cookie &&
    req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=')
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim()
    })

    // 若req.url中含有?name=value&age=20时，把ob输出看看
    // 通过url链进行简单的变量传递

    var func = routes.handles[ob.pathname]
    if(typeof func == "undefined"){
        exhandle(req,res)
    }else{
        // form 是把req中封装好的form元素值 解析出来供
        // url链处理函数回调使用
        // select input(text checkbox radio file)
        var form = new formidable.IncomingForm()
        form.parse(req, function(err, fields, files) {
            if(err){
                exhandle(req,res)
                return
            }
            func(req,res,fields,files,Cookies)
        })

        //res.write("asyn  done")


    }
}



var http=require("http"),
    port=3003,
    srv=http.createServer(dispatch)
console.log("server listens on " + port)
srv.listen(port)

