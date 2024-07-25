const {Router} = require("express");
const userRouter = Router();

const {hashPass} = require("../middleware/auth");

const {postTest} = require("./controllers");

userRouter.post("/signup",hashPass, postTest);



module.exports = userRouter;