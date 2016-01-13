exports.formtest = function(req,res,fields,files){
    console.log("fields:")
    console.log(fields)
    console.log("files")
    console.log(files)
    res.end("asyn done")
}
exports.set_cookie =function(req,res){
    res.writeHead(200, {
        'Set-Cookie': 'ssid=euyfaeusdh_*;httponly;path=/',
        'Content-Type': 'text/plain'
    });
    res.end("cookieset")
}
exports.get_cookie =function(req,res){


    console.log(arguments[4])
    res.end("hypertext transferring protocol")
}
/*
* fields:
 { username: 'pls input username' }
 files
 {}
 */