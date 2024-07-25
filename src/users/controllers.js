const User = require("./model");

const postTest = async (req, res) => {
    console.log("postTest controller ")

    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "success", user: user });
    } catch (error) {
       res.status(501).json({message: error.message, error: error}); 
    }   
};


module.exports = {
    postTest,
}