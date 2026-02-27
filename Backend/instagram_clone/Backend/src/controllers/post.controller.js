const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
require('dotenv').config()

const userModel = require("../models/user.model");
const likeModel = require("../models/like.model");


const imagekit = new ImageKit({

    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "Test",
        folder: "insta-backend-posts"
    })


    const { caption, user, imageURL } = req.body
    const post = await postModel.create({
        caption,
        imageURL: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}
async function getPostController(req, res) {


    const user = req.user.id;

    const posts = await postModel.find({ user })

    const username = (await userModel.findById(user)).username

    res.status(200).json({
        message: `All posts of ${username} fetched successfully`,
        posts
    })


}
async function getAllPostController(req, res) {
    const user = req.user
    const posts = await Promise.all((await postModel.find().populate("user").lean())
        .map(async (post) => {
            const isLiked = await likeModel.findOne({
                user: user.username,
                post: post._id
            })
            post.isLiked = Boolean(isLiked)
            return post
        }))

    res.status(200).json({
        message: "All posts fetched successfully",
        posts
    })
}

async function getPostByUerIdController(req, res) {
    const user = req.params.user


    const posts = await postModel.find({ user })


    const username = (await userModel.findById(user)).username

    res.status(200).json({
        message: `All posts of ${username} fetched successfully`,
        posts
    })
}

async function getPostDetails(req, res) {

    const userId = req.user.id
    const { postId } = req.params

    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const isValidUser = post.user.toString() === userId

    if (!isValidUser) {
        return res.status(403).json({
            message: "You are not authorized to view this post"
        })
    }

    res.status(200).json({
        message: "Post fetched successfully",
        post
    })
}


async function likePostController(req, res) {
    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "post not found."
        })
    }

    const like = await likeModel.create({
        user: username,
        post: postId
    })

    res.status(201).json({
        message: "Post liked successfully",
        like
    })
}






module.exports = {
    createPostController,
    getAllPostController,
    getPostByUerIdController,
    getPostController,
    getPostDetails,
    likePostController
};