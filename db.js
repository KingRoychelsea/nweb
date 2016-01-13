var mysql=require('mysql')

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'em',
    password:'l9yus5nn',
    database:'em'
});

exports.query=function(){
    var args = arguments
    pool.getConnection(function(err, connection) {

        if(args.length==2){
            connection.query(args[0],function(err,r){
                args[1](err,r)
            })
        }else if(args.length==3){
            connection.query(args[0],args[1],function(err,r){
                args[2](err,r)
            })
        }

    });



}