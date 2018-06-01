const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const {sequelize} = require('./models')
const config = require('./config/config')
const routes = require('./routes')

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force:true})
    .then(() => {
        app.listen(config.port)  
        console.log(`Server started on port ${config.port}`)      
    })
