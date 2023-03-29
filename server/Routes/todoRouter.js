const express = require('express');
const router = express.Router();
const {getTodo , createTodo , deleteTodo } = require('../controllers/controll');


// router.route('/').get(homePage)
router.get('/' ,getTodo)
router.post('/' ,createTodo)
router.delete('/:id' ,deleteTodo)
module.exports = router;
