var db = require("../db")
exports.create = function(req,res,fields,files) {

     db.query("insert into user (name,email,password) " +
        "values (?,?,md5(?))",[fields.name,
             fields.email,fields.passwd],
        function(err,r){
            // 这个地方如果err不空，应该怎么处理【重定向】
            console.log(err)
            console.log(r)
            res.end("test ok; create user")
        })

}

exports.modify = function(req,res) {
    db.query("update  user set name=? where email=?" ,
        ["testd","test@eachma.com"],
        function(err,r){
            console.log(err)
            res.write("affected:"+r.affectedRows+" row(s)")
            res.end("test ok; modi user")
        })
}

exports.list = function(req,res){
    db.query("select * from user" ,
        // select 是结果集合
        function(err,r){
            console.log(err)
            for(var k in r){
                res.write(r[k]["name"])
                res.write("<br>")
            }
            res.end("test ok; list")
        })

}
