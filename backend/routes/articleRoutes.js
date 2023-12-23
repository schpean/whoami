const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Define routes and link to controller functions
router.get('/articles', articleController.getAllArticles);
router.post('/articles', articleController.createArticle);
router.get('/articles/:articleId', articleController.getArticleById);

// Add more routes for updating, deleting, etc. if needed
// articleRoutes.js or your route setup file

const Article = require('../models/article');





module.exports = router;
