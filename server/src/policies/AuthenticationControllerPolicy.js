const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            email:Joi.string().email(),
            password:Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
        }

        const {error, value} = Joi.validate(req.body, schema)

        
        if(error){
            switch(error.details[0].type){
                case 'string.email':
                    res.status(400).send({
                        error : 'you have to provide a validate email address'
                    })
                    break
                case 'string.regex.base':
                    res.status(400).send({
                        error: `you have to provide a validate password:
                        
                        1. upper case 2. lower case 3.numerics 4. 8-32 in length`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'invalidated registration information'
                    })
            }
        }else{
            next();
        }
    }
}