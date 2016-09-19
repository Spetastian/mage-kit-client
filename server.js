"use strict"
let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let webpackHotMiddleware = require('webpack-hot-middleware')
let express = require('express')
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080
let config = require('./webpack.config')
let compiler = webpack(config)

let apiRoutes = require('./routes/api-routes')

express()
    .use(express.static("static"))
    .use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
    .use(webpackHotMiddleware(compiler))
    .use(bodyParser.json())
    .use("/api", apiRoutes)
    .get("/codex|spells|spellbooks", (req, res) => {
      res.sendFile(__dirname + '/static/index.html')
    })
    .listen(port, () => {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    })
