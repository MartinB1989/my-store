const { User, UserSchema } = require('./user.model')
const { Categories, CategoriesSchema } = require('./categories.model')

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
    Categories.init(CategoriesSchema, Categories.config(sequelize))
}

module.exports = setupModels