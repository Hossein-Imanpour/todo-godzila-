require('dotenv').config();
const express = require('express');
const app = express();
// const { homePage} = require('./controllers/controll')
const connect = require('./db/connect')
const todoRouter = require('./Routes/todoRouter')

app.use(express.urlencoded({ extended: false }), express.json());
app.use('/' , todoRouter)


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