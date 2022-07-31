const joi = require('joi')

const id = joi.number().integer()
const email = joi.string().email()
const password = joi.string().alphanum()

const createUserSchema = joi.object({
    email: email.required(),
    password: password.required()
})

const updateUserSchema = joi.object({
    email: email
})

const getUserSchema = joi.object({
    id: id.required()
})

module.exports = {createUserSchema, updateUserSchema, getUserSchema}