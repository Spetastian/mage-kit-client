"use strict"
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const bodyParser = require('body-parser')
const jwtParser = require('./middleware/jwt-parser')
const port = process.env.PORT || 8080
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)
const config = require('./config')

const apiRoutes = require('./routes/api-routes')

express()
    .set('jwtSecret', config.secret)
    .use(express.static("static"))
    .use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
    .use(webpackHotMiddleware(compiler))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
<<<<<<< HEAD
    .use("/api", apiRoutes)
    .get("/codex|spells|spellbooks", (req, res) => {
=======
    .use(jwtParser)
    .use("/api", apiRoutes)
    .get("/login|codex|spells|spellbooks", (req, res) => {
>>>>>>> user-login
      res.sendFile(__dirname + '/static/index.html')
    })
    .listen(port, () => {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    })
