const {Router} = require("express");
const userRouter = Router();

const {postTest} = require("./controllers");

userRouter.post("/register", postTest);


module.exports = userRouter;