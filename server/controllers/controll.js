 const todos = require('../model/todos')
const  homePage = (req , res ) => {
    res.send('<h1>this is a home page</h1>')
}



const getTodo = async (req , res ) => {
    try {
        const data = await  todos.find();
        res.status(200).json(data);
        console.log(data);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const createTodo = async (req , res ) => {
    const {todo} = req.body
    try {
        await new todos({todo})
        .save()
        .then((data) => {
            res.status(201).json(data)
        });
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}



 

module.exports = {getTodo , createTodo , homePage};