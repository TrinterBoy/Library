const uuid = require('uuid')
const path = require('path')
const {Book} = require('../models/models')
const ApiError = require('../Errors/ApiError')
const {Op} = require("sequelize");



class BookController {
    async create(req,res, next){
        try{
            const {name, author, year, genreId,desc} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const book = await Book.create({name,author, year, genreId, desc, img: fileName})

            return res.json(book)

        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req,res){
        let {name,genreId,year,author,limit,page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let book ;
        if(!genreId && !year && !author && !name){
            book = await Book.findAndCountAll({limit,offset})
        }
        if(!genreId && !author && name){
            book = await Book.findAndCountAll({where: {
            name:{
            [Op.like] : `%${name}%`
            }},limit,offset
            })
        }
        if(!genreId  && author && !name){
            book = await Book.findAndCountAll({where: {
                    author:{
                        [Op.like] : `%${author}%`
                    }},limit,offset
            })
        }
        if(genreId && !author && !name){
            book = await Book.findAndCountAll({where: {genreId},limit,offset})
        }
        if(!genreId && author && name){
            book = await Book.findAndCountAll({where: {
                    author:{
                        [Op.like] : `%${author}%`
                    },
                    name:{
                        [Op.like] : `%${name}%`
                    },limit,offset
            }})
        }
        if(genreId && !author && name){
            book = await Book.findAndCountAll({where: {genreId,
                    name:{
                        [Op.like] : `%${name}%`
                    }},limit,offset
            })
        }
        if(genreId && author && !name){
            book = await Book.findAndCountAll({where: {genreId,
                author:{
                    [Op.like] : `%${author}%`
                }},limit,offset
            })
        }
        if(genreId  && author && name){
            book = await Book.findAndCountAll({where: {genreId,
                    author:{
                        [Op.like] : `%${author}%`
                    },
                    name:{
                        [Op.like] : `%${name}%`
                    }},limit,offset
                })
        }

        return res.json(book)

    }
    async getOne(req,res){
        const {id} = req.params
        const book = await Book.findOne({where:{id}})
        return res.json(book)
    }
}

module.exports = new BookController()
