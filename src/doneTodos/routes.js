const { Router } = require("express")
const doneTodoRouter = Router()
const {addDoneTodo, deleteDoneTodo} = require("./controllers")
const {tokenCheck} = require("../middleware")

doneTodoRouter.post("/donetodos/adddonetodo", tokenCheck, addDoneTodo)
doneTodoRouter.post("/donetodos/deletedonetodo", tokenCheck, deleteDoneTodo)

module.exports = doneTodoRouter