const express = require('express');
const { signup, login, verifyToken, getUser } = require('../controllers/user');

const userRouter = express.Router();

userRouter.post("/signup" , signup );
userRouter.post("/login" , login );
userRouter.get("/user" , verifyToken , getUser )

module.exports = userRouter;