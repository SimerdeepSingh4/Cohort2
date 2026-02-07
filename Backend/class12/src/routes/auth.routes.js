const express = require('express');
const userModel = require('../models/user.model');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

authRouter.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email })

    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: "User already exist with this email"
        })
    }

    const hash = crypto.createHash('md5').update(password).digest('hex')
    const user = await userModel.create({
        name, password: hash, email
    })
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )
    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "User created successfully",
        user,
        token
    })
})



authRouter.post('/login',async (req,res)=>{
    const {email, password} = req.body;

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash('md5').update(password).digest('hex');

    if(!isPasswordMatched){
        return res.status(401).json({
            message:"Invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"User logged in successfully",
        user,
        token
    })
})

module.exports = authRouter;