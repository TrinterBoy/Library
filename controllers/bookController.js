const uuid = require('uuid')
const path = require('path')
const {Book, Basket} = require('../models/models')
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
        limit = limit || 6
        let offset = page * limit - limit
        let book ;
        let bigName ;
        let bigAuthor ;

        try {
            bigName = name.charAt(0).toUpperCase() + name.slice(1)
            bigAuthor = author.charAt(0).toUpperCase() + author.slice(1)
        }catch{
            bigName = name
            bigAuthor = author
        }



        if(!genreId && !year && !author && !name){
            book = await Book.findAndCountAll({limit,offset})
        }
        if(!genreId && !author && name){
            book = await Book.findAndCountAll({where: {
            name:{
                [Op.like] : `%${name}%`,
                [Op.like]: `%${bigName}%`
            }},limit,offset
            })
        }
        if(!genreId  && author && !name){
            book = await Book.findAndCountAll({where: {
                    author:{
                        [Op.like] : `%${author}%`,
                        [Op.like]: `%${bigAuthor}%`
                    }},limit,offset
            })
        }
        if(genreId && !author && !name){
            book = await Book.findAndCountAll({where: {genreId},limit,offset})
        }
        if(!genreId && author && name){
            book = await Book.findAndCountAll({where: {
                    author:{
                        [Op.like] : `%${author}%`,
                        [Op.like]: `%${bigAuthor}%`
                    },
                    name:{
                        [Op.like] : `%${name}%`,
                        [Op.like]: `%${bigName}%`
                    },limit,offset
            }})
        }
        if(genreId && !author && name){
            book = await Book.findAndCountAll({where: {genreId,
                    name:{
                        [Op.like] : `%${name}%`,
                        [Op.like]: `%${bigName}%`
                    }},limit,offset
            })
        }
        if(genreId && author && !name){
            book = await Book.findAndCountAll({where: {genreId,
                author:{
                    [Op.like] : `%${author}%`,
                    [Op.like]: `%${bigAuthor}%`
                }},limit,offset
            })
        }
        if(genreId  && author && name){
            book = await Book.findAndCountAll({where: {genreId,
                    author:{
                        [Op.like] : `%${author}%`,
                        [Op.like]: `%${bigAuthor}%`
                    },
                    name:{
                        [Op.like] : `%${name}%`,
                        [Op.like]: `%${bigName}%`
                    }},limit,offset
                })
        }
        return res.json(book)

    }
    async getOne(req,res,next){
        try {
            const {id} = req.params
            const book = await Book.findOne({where: {id}})
            return res.json(book)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAllById(req,res){
        const {id} = req.query
        const book = await Book.findAll({where:{id}})
        return res.json(book)
    }
    async postOneFalse(req,res){
        const {id} = req.body
        const book = await Book.update({
            isA: false
        }, {
            where:{id}
        })
        return res.json(book)
    }
    async postOneTrue(req,res){
        const {id} = req.body
        const book = await Book.update({
            isA: true
        }, {
            where:{id}
        })
        return res.json(book)
    }
    async getAllUnavailable(req,res){
        const book = await Book.findAll({where:{isA:false}})
        return res.json(book)
    }

}

module.exports = new BookController()
