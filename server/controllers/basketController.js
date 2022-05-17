const {Basket_Book, Basket} = require('../models/models')
const ApiError = require('../Errors/ApiError')


class BasketController {
    async create(req,res){
        const {basketId,bookId} =req.body
        const basket = await Basket_Book.create({basketId,bookId})
        return res.json(basket)
    }
    async getAll(req,res){
        const {basketId} = req.query
        const baskets = await Basket_Book.findAll({where:{basketId}})
        return res.json(baskets)
    }
    async getOneId(req,res){
        const {userId} = req.query
        const basket = await Basket.findOne({where:{userId}})
        return res.json(basket)
    }
    async deleteOne(req,res){
        const {basketId,bookId} = req.body
        const basket = await Basket_Book.destroy({where:{basketId,bookId}})
        return res.json(basket)
    }
}

module.exports = new BasketController()
