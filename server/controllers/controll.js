 const todos = require('../model/todos')

const  homePage = (req , res ) => {
    res.send('<h1>this is a home page</h1>')
}



const getTodo = async (req , res ) => {
    try {
        const data = await  todos.find().sort({ _id: -1 }).exec();;
        res.status(200).json(data);
        console.log(data);
    } catch (error) { 
        res.status(500).send(error);
        console.log(error);
    }
}


// const deleteTodo = async (req  , res ) => {
//     try {
//         const { id : _id } = req.params;
//         const data = await todos.findByIdAndDelete(id , {new : false});
//         res.status(200).json({ data }) 
//     } catch (error) {
//         // res.status(500).send(error); 
//         res.status(500).json({message : error}); 
//         console.log(error);
//     }
// }


const deleteTodo = async (req, res) => {
    const { id: todoID } = req.params;
    try {
      const todo = await todos.findOneAndDelete({ _id: todoID });
  
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
  




// const getOneTodo = async (req ,res ) => {
//     try {
//         const {id  : _id} = req.params
//         const todos = todos.findById({_id});
//         res.status(200).json(todos)
//     } catch (error) {
//         console.log(error);
//     }
// }



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

// const createTodo = async (req, res) => {
//     const { todo } = req.body;
//     try {
//       const data = await new todos({ todo }).save();
//       const sortedData = await todos.find().sort({ _id: -1 }).exec(); // sort by _id in descending order
//       res.status(201).json(sortedData);
//     } catch (error) {
//       res.status(500).send(error);
//       console.log(error);
//     }
//   };



 

module.exports = {getTodo , createTodo , homePage ,
    // getOneTodo
 deleteTodo};