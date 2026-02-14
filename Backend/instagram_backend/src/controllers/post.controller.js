const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
require('dotenv').config()
const jwt = require('jsonwebtoken');
const userModel = require("../models/user.model");


const imagekit = new ImageKit({
    
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "Test",
        folder:"insta-backend-posts"
    })

        const token = req.cookies.token;
        
        if(!token){
            return res.status(401).json({
                message:"Unauthorized Access"
            })
        }

        let decoded = null;
        try{
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        }catch(err){
            return res.status(401).json({
                message:"User not authorized",
                err
            })
        }
        
        const { caption, user,imageURL } = req.body
        const post = await postModel.create({
            caption,
            imageURL:file.url,
            user:decoded.id
        })

        res.status(201).json({
            message: "Post created successfully",
            post
        })

    res.send(decoded)
}

async function getAllPostController(req, res){
    const posts = await postModel.find()


    res.status(200).json({
        message:"All posts fetched successfully",
        posts
    })
}

async function getPostByUerIdController(req, res){
    const user = req.params.user

    
    const posts = await postModel.find({user})


    const username = (await userModel.findById(user)).username
    
    res.status(200).json({
        message:`All posts of ${username} fetched successfully`,
        posts
    })
}


module.exports = { 
    createPostController,
    getAllPostController,
    getPostByUerIdController
 };