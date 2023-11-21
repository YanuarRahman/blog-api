import Post from "../models/PostModels.js";

// schema
const addData = async(req, res) => {
    try {
        // query post data
        const newPost = await Post.create(req.body);
        
        return res.status(201).json({
            status: "success",
            data: newPost
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message:error.errors
        })
    }
};

const viewPost = async(req, res) => {
    try {
        // query post data
        const posts = await Post.find();
        
        return res.status(200).json({
            status: "success",
            data: posts
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message:error.message
        })
    }
};

const detailPost = async(req, res) => {
    try {
        // query post data
        const post = await Post.findById(req.params.id);
        
        return res.status(200).json({
            status: "success",
            data: post
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message:error.message
        })
    }
};

const updatePost = async(req, res) => {
    try {
        // query post data
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body,{
            // untuk menampilkan data baru di respon nya
            new:true,
            runValidators:true
        })
        
        return res.status(200).json({
            status: "success",
            data: updatePost
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message:error.errors
        })
    }
};

const deletePost = async(req, res) => {
    try {
        // query post data
        await Post.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            status: "success",
            message: "Data Success deleted"
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message:error.errors
        })
    }
};


export {addData,viewPost,detailPost, updatePost, deletePost}