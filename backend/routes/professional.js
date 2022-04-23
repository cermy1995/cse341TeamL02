const express = require('express');
const professionalController = require('../controllers/professional');
const router = express.Router();

//GET POSTS
router.get('/', professionalController.getData);
//localhost:8080/professional/
module.exports = router;