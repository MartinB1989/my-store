const { Model, DataTypes, Sequelize} = require('sequelize')

const CATEGORIES_TABLE = 'categories'

const CategoriesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    category_name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class Categories extends Model {
    static associate() {
        //associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIES_TABLE,
            modelName: 'Categories',
            timestamps: false
        }
    }
}

module.exports = {
    CATEGORIES_TABLE, CategoriesSchema, Categories
}