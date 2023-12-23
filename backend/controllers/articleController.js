const Article = require('../models/article'); // Import the Article model

// Controller functions for handling articles
const articleController = {
  getAllArticles: async (req, res) => {
    try {
      const articles = await Article.find(); // Fetch all articles from the database
      res.json(articles); // Send fetched articles as JSON response
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createArticle: async (req, res) => {
    const { title, content, author } = req.body;

    try {
      const newArticle = new Article({ title, content, author }); // Create a new article
      await newArticle.save(); // Save the new article to the database
      res.status(201).json(newArticle); // Send the newly created article as JSON response
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  
getArticleById: async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},
  // Add other controller functions for update, delete, etc., as needed
};
// Other controller functions...

// Other controller functions...

  
module.exports = articleController;
