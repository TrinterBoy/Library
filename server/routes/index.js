const Router = require('express')
const router = new Router()
const bookRouter = require('./bookRouter')
const userRouter = require('./userRouter')
const genreRouter = require('./genreRouter')
const checkRole = require('../middleware/checkRoleMiddleware')


router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/genre', genreRouter)

module.exports = router