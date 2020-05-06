const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//Get all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//Submit a post
router.post('/', async (req, res) => {
    // console.log(req.body);  
    const post = new Post({
        title: req.body.title,
        description: req.body.description 
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
    
});

//Get specific post
router.get('/:postId', async (req, res) => {
    try{
        const specificPost = await Post.findById(req.params.postId);
        res.json(specificPost);
    }catch(err){
        res.json({message:err});
    }
});

//Delete a post
router.delete('/:postId', async (req, res) => {
    try{
        const deletePost = await Post.deleteOne({ _id :req.params.postId});
        res.json(deletePost);
    }catch(err){
        res.json({message:err});
    }
});

//update a post
router.patch('/:postId', async (req, res) => {
    try{
        const updatePost = await Post.updateOne({_id : req.params.postId},{$set:{title:req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router