require("dotenv").config();

module.exports = {
    'db' : 'mongodb://localhost:27017/users',
    'secret' : process.env.SECRET
}