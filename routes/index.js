const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage')
const ctrlBlog = require('../controllers/blog')
const ctrlWorks = require('../controllers/works')
const ctrlAbout = require('../controllers/about')


/* GET home page. */

router.get('/', ctrlHome.getIndex);
router.get('/blog', ctrlBlog.getBlogPage);
router.get('/my-works', ctrlWorks.getWorkPage);
router.post('/contact', ctrlWorks.sendEmail);
router.get('/about', ctrlAbout.getAboutPage);
// router.post('/works', ctrlAbout.uploadImage);
// router.post('/blog', ctrlBlog.addArticle);
// router.post('/auth', ctrlHome.getAdminPage);

module.exports = router;
