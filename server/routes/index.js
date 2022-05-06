const Router = require('express')
const router = new Router()
const bookRouter = require('./bookRouter')
const userRouter = require('./userRouter')
const genreRouter = require('./genreRouter')
const basketRouter = require('./basketRouter')


router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/genre', genreRouter)
router.use('/basket', basketRouter)

module.exports = router