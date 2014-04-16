// system dependency
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

// own dependency
var server_config = require('./config/server_config');
var config = require("./config/config");
var route = require("./router");
var staticRequestHandler = require("./staticRequestHandler");
var handleMap = require("./handleMap");

function start() {
    var server = http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        if (pathname.slice(-1) === "/") {
            pathname = pathname + config.entryPoint.file;
        }

        var ext = path.extname(pathname);
        if (config.asserts.fileMatch.test(ext.toLowerCase())) {
            // handle app asserts request, these file always end by .js, .css, .html or other format suffix
            staticRequestHandler.staticRequestHandler(request, response, pathname);
        } else {
            // handle ajax request
            var postData = '';
            request.on('data', function(chunk) {
                postData += chunk;
            }).on("end", function() {
                route.route(handleMap.handle, pathname, response, postData);
            });
        }
    });
    server.listen(server_config.port, server_config.address);
    console.log('Server running at http://' + server_config.address + ':' + server_config.port + '/');
};

exports.start = start;