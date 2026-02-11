const express = require('express');
const userModel = require('../models/user.model');
const authRouter = express.Router()
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


authRouter.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;

    const isUserExist = await userModel.findOne({email})
    
    if(isUserExist){
        return res.status(409).json({
            message:"User already exist"
        })
    }

    const user = await userModel.create({
        email,
        password: crypto.createHash('md5').update(password).digest('hex'),
        name
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn: "1h"})

    res.cookie('jwt_token',token)

    res.status(201).json({
        message:"User created successfully",
        user,
        token
    })

})

authRouter.get('/get-me',async(req,res)=>{

    const token = req.cookies.jwt_token;

    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    const user = await userModel.findById(decoded.id)

    res.json({
        name:user.name,
        email:user.email
    })
})

authRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            message: "USer not found"
        })
    }
    const hash = crypto.createHash('md5').update(password).digest("hex")

    const isPasswordValid = hash === user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn: '1h'})

    res.cookie('jwt_token',token)

    res.status(200).json({
        message:"User logged in successfully",
        token,
        user
    })
})

module.exports = authRouter;
