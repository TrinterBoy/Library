const ApiError = require('../Errors/ApiError')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

class UserController {
    async registration(req,res,next){
        const {name,email,password,role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest("Некорктний email, чи пароль"))
        }
        const candid = await User.findOne({where:{email}})
        if (candid){
            return next(ApiError.badRequest("Користувач з таким email уже існує"))
        }
        const hashedpassword = await bcrypt.hash(password, 5)
        const user = await User.create({name,email,password:hashedpassword,role})
        const basket = await Basket.create({userId: user.id})
        const token = jwt.sign({id:user.id, email: user.email, name: user.name,role}, process.env.SECRET_KEY,{expiresIn: '24h'})
        return res.json({token})

    }
    async login(req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal("Невірний email"))
        }
        let pass = bcrypt.compareSync(password,user.password)
        if(!pass){
            return next(ApiError.internal("Невірний пароль"))
        }
        const token = jwt.sign({id:user.id, email: user.email,role: user.role}, process.env.SECRET_KEY,{expiresIn: '24h'})
        return res.json({token})
    }
    async check(req,res,next){
        const token  = jwt.sign({id: req.user.id, email: req.user.email, name: req.user.name,role: req.user.role}, process.env.SECRET_KEY,{expiresIn: '24h'})
        return res.json({token})
    }
}

module.exports = new UserController()
