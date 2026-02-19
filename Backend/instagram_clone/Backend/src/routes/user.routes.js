const express = require('express');
const userController = require('../controllers/user.controller');
const identifyUser = require('../middlewares/auth.middleware');
const userRouter = express.Router();



userRouter.post('/follow/:username', identifyUser, userController.followUserController)
userRouter.post('/unfollow/:username', identifyUser, userController.unfollowUserController)
userRouter.get('/requests', identifyUser, userController.followRequestController)
userRouter.patch('/requests/status', identifyUser, userController.updateFollowRequestController)


module.exports = userRouter;