const express = require('express');
const postController = require('../controllers/post.controller');
const postRouter = express.Router();
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()})
const identifyUser = require('../middlewares/auth.middleware');

postRouter.post('/',upload.single("image"), identifyUser, postController.createPostController)
postRouter.get('/feed', identifyUser, postController.getAllPostController)
// postRouter.get('/feed', postController.getPostController)
// postRouter.get('/:user', postController.getPostByUerIdController)
postRouter.get('/details/:postId', identifyUser, postController.getPostDetails)

postRouter.post('/like/:postId', identifyUser, postController.likePostController)
postRouter.post('/unlike/:postId', identifyUser, postController.unlikePostController)


module.exports = postRouter