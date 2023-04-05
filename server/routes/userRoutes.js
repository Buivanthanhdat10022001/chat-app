const { register } = require('../controllers/usersController');


const router = require('express').Router();

router.post('/registes',register);

module.exports = router;