const {Basket_Book} = require('../models/models')
const ApiError = require('../Errors/ApiError')

class BasketController {
    async create(req,res){
        const {basketId,bookId} =req.body
        const basket = await Basket_Book.create({basketId,bookId})
        return res.json(basket)
    }
    async getAll(req,res){
        const baskets = await Basket_Book.findAll()
        return res.json(baskets)
    }
    async getOne(req,res){
        const {basketId} = req.params
        const basket = await Basket_Book.findAll({where:{basketId}})
        return res.json(basket)
    }
}

module.exports = new BasketController()
