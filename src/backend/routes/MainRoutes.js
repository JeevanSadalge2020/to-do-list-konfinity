const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/LoginController')

router.get('/', LoginController.getProfile)
router.get('/signup', LoginController.getSignup)
router.get('/signin', LoginController.getSignin)

module.exports = router