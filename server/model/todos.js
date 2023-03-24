const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : true
    }
});
const todos = mongoose.model("todos" , usersSchema);

module.exports = todos;
