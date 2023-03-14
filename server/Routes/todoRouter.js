const express = require('express');
const router = express.Router();
const {getTodo , createTodo  } = require('../controllers/controll');


// router.route('/').get(homePage)
router.route('/').get(getTodo)
router.route('/').post(createTodo)

module.exports = router;