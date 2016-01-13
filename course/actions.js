var db = require("../db")
exports.create = function(req,res) {
// request response
    db.query("insert into user (name,email,password) " +
        "values (?,?,?)",["test","test@eachma.com","test"],
        function(err,r){
            console.log(err)
            console.log(r)
            res.end("test ok; create user")
        })
}

exports.modify = function(req,res) {
    db.query("update  user set name=? where email=?" ,
        ["testchanged","test@eachma.com"],
        function(err,r){
            console.log(err)
            console.log(r)
            res.end("test ok; create user")
        })
}
