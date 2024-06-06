const express = require('express');
const verifyToken = require("../middlewares/verifyToken")
const AuthController =  require('../controllers/auth.controller')


const router = express.Router();


router.get('/get-admin/:id',verifyToken,AuthController.getAdmin)
router.patch('/update-admin/:id',verifyToken,AuthController.updateAdmin)
router.post("/login",AuthController.login)
router.post("/not-visible/get-encrypted-pwd",AuthController.getPassword)

module.exports = router