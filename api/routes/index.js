const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/workspic');
const ctrlSkills = require('../controllers/skills');
const ctrlNewBlog = require('../controllers/newBlog');


router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlNewBlog.createArticle); 

// router.post('/blog', ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);

router.get('/works', ctrlWorks.getWork);
router.post('/works', ctrlWorks.setWork);

router.get('/about', ctrlSkills.getSkills);


module.exports = router;