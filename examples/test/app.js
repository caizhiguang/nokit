var nokit = require("../");
var path = require("path");

var server = new nokit.Server({
    "root": path.dirname(module.filename),
    "port": 8001
});

//server.stop();
server.start();