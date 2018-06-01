const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 7 * 24 * 60 *60;
    return jwt.sign(user, config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch (err){
            res.status(400).send({
                error:"this email is already in use."
            })
        }
        
    },

    async login (req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!user){
                return res.status(403).send({
                    error: "The login information is incorrect"
                })
            }

            const isPasswordValid = password === user.password

            if(!isPasswordValid){
                return res.status(403).send({
                    error: "The login information is incorrect"
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }catch (err) {
            res.status(403).send({
                error:"Invalid login information"
            })
        }
    }
}