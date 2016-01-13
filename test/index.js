var actions = require("./actions")
exports.handles = {
    "/test/form":actions.formtest,
    "/test/cookie/set":actions.set_cookie,
    "/test/cookie/get":actions.get_cookie

}

