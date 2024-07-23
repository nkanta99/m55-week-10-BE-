const User = require("./model");

const postTest = async (req, res) => {
    console.log("postTest controller ")

    const user = await User.create(req.body);
    res.status(201).json({message: "success", user: user});

    
}


module.exports = {
    postTest,
}