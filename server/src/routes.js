const AuthenticationController = require('../src/controller/AuthenticationController') 
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('../src/controller/SongsController')
const MarkdownController = require('../src/controller/MarkdownController')
const FileController = require('../src/controller/FileController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/songs',
    SongsController.index)

    app.post('/songs',
    SongsController.post)

    app.get('/songs/:songId',
    SongsController.show)

    app.get('/markdown',
    MarkdownController.index)
    
    app.post('/markdown',
    MarkdownController.post)

    app.get('/markdown/:markdownId',
    MarkdownController.show)

    // app.post('/upload',
    // FileController.upload)
} 