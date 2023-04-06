require('dotenv').config();
const express = require('express');
const app = express();
// const { homePage} = require('./controllers/controll')
const connect = require('./db/connect')
// const todoRouter = require('./Routes/todoRouter')
// const deleteTodo = require('./controllers/controll') ///
const { getTodo ,createTodo , deleteTodo} = require('./controllers/controll')
const cors = require('cors');
app.use(cors())
app.use(express.urlencoded({ extended: false }), express.json());
// app.use('/' , todoRouter)//
app.get('/' , getTodo);
app.post('/' , createTodo);
app.delete('/:id' , deleteTodo)
// app.delete('/:id' ,deleteTodo )
//Godzila

// app.get('/' , homePage)



app.listen(process.env.PORT , function() {
    console.log('server is running on port 4000');
});
connect(process.env.MONGO_URI)
.then(() => {
    console.log('connected');
})
.catch((err) => {
    console.log(err);
}) 