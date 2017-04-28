'use strict';
var restify = require('restify'),
    plugins = require('restify-plugins'),
    config = require('./config.js'),
    personController = require('./routes/person-controller')


var server = restify.createServer({
    name: config.name,
    version: config.version,
})


server.use(plugins.jsonBodyParser({ mapParams: true }))
server.use(plugins.acceptParser(server.acceptable))
server.use(plugins.queryParser({ mapParams: true }))
server.pre(restify.CORS({
    origins: [
        '*'
    ],
    credentials: true,

    headers: [
        "authorization",
        "withcredentials",
        "x-requested-with",
        "x-forwarded-for",
        "x-real-ip",
        "x-customheader",
        "user-agent",
        "keep-alive",
        "host",
        "accept",
        "connection",
        "upgrade",
        "content-type",
        "dnt",
        "if-modified-since",
        "cache-control",
        "Accept-Encoding",
        "Accept-Language",
        "User-Agent",
        "Accept",
        "DNT",
        "Connection",
        "Upgrade-Insecure-Requests",
        "Cache-Control",
        "Pragma",
        "Content-Length",
        "Content-Type",
        "Accept-Type"
    ],
    methods: ["GET", "POST", "PUT"]
})
)
server.pre(plugins.fullResponse())

server.get("/api/values", personController.readAll);
server.get("/api/values/:id", personController.readOne);
server.post("/api/values/", personController.createPerson);
server.put("/api/values/", personController.updatePerson);
server.del("/api/values/", personController.delPerson);



server.on('uncaughtException', (req, res, route, err) => {
    log.error(err.stack)
    res.send(err)
});

server.listen(config.port, function () {

})