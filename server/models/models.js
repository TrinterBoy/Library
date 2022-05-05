const sequelize= require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket_Book = sequelize.define('basketBook', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Book = sequelize.define('book', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull:false},
    author:{type: DataTypes.STRING, allowNull:false},
    year:{type: DataTypes.INTEGER, allowNull:false},
    genreId:{type: DataTypes.INTEGER, allowNull:false},
    desc:{type: DataTypes.TEXT, allowNull:false},
    isA:{type: DataTypes.BOOLEAN, allowNull:false, defaultValue: true},
    img:{type: DataTypes.STRING, allowNull:false}
})

const Genre = sequelize.define('genre',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull:false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basket_Book)
Basket_Book.belongsTo(Basket)

Basket_Book.hasOne(Book)
Book.belongsTo(Basket_Book)

Genre.hasOne(Book)
Book.belongsTo(Genre)

module.exports = {
    User,Basket,Basket_Book,Book,Genre
}