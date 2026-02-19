const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {

    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if (followerUsername === followeeUsername) {
        return res.status(400).json({
            message: "you cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followeeUsername
    })

    if (!isFolloweeExists) {
        return res.status(404).json({
            message: "User you are trying to follow does not exists"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if (isAlreadyFollowing) {
        return res.status(409).json({
            message: `You are already following ${followeeUsername}`
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(201).json({
        message: `You are following ${followeeUsername}`,
        follow: followRecord
    })
}


async function unfollowUserController(req, res) {
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,

    })

    if (!isUserFollowing) {
        return res.status(404).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}


async function followRequestController(req, res) {
    const userId = req.user.username

    const followers = await followModel.find({
        followee: userId,
        status: "pending"
    })

    if (followers.length === 0) {
        return res.status(200).json({
            message: "No pending follow requests"
        })
    }

    res.status(200).json({
        message: `You have ${followers.length} pending follow requests`,
        followers
    })


}

async function updateFollowRequestController(req, res) {
    const username = req.user.username;

    const { follower, status } = req.body;

    const isFollowRequestExists = await followModel.findOne({
        follower,
        followee: username,
        status:"pending"
    })

    if (!isFollowRequestExists) {
        return res.status(404).json({
            message: "Follow request not found"
        })
    }

    if (status === "accepted") {
        await followModel.findByIdAndUpdate(isFollowRequestExists._id, {
            status: "accepted",
        })
        res.status(200).json({
            message: "Follow request accepted"
        })
    } else if(status === "rejected") {
        await followModel.findByIdAndUpdate(isFollowRequestExists._id, {
            status: "rejected"
        })
        res.status(200).json({
            message: "Follow request rejected"
        })
    } else{
        return res.status(400).json({
            message: "Invalid status"
        })
    }

}

module.exports = {
    followUserController,
    unfollowUserController,
    followRequestController,
    updateFollowRequestController
}