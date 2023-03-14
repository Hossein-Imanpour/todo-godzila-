const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    todo : String
});
const todos = mongoose.model("todos" , usersSchema);

module.exports = todos;
