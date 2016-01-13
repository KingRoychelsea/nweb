
var actions = require("./actions")
exports.handles = {
    "/user/create":actions.create,
    "/user/modify":actions.modify,
    "/user/list":actions.list
}