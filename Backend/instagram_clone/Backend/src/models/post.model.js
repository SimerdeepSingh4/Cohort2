const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imageURL:{
        type:String,
        required:[true,"imgUrl is required to creating a post"]
    },
    user:{
        ref:"users",
        type: mongoose.Schema.Types.ObjectId,
        required:[true,"User is required to create a post"]
    }

})

const postModel = mongoose.model("posts",postSchema);

module.exports = postModel;