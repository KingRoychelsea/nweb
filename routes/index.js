var user = require("../user")

var handles = {}
for(var k in user.handles){
    handles[k] = user.handles[k]
}
var course = require("../course")
for (var k in course.handles){
    handles[k] = course.handles[k]
}

var test = require("../test")
for (var k in test.handles){
    handles[k] = test.handles[k]
}

exports.handles = handles
