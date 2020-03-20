const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET ALL THE POSTS
router.get('/',async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/specific',(req,res) => {
    res.send("Specific Post");
});

//SUBMIT A POST
router.post('/',(req,res) => {
    const posts = new Post({
        title: req.body.title,
        description: req.body.description
    });

    posts.save()
    .then(data => {
        res.json(data);
    });
    
});

//GET A SPECIFIC POST
router.get('/:postId',async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//DELETE A SPECIFIC POST
router.delete('/:postId',async (req,res) => {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
});

//UPDATE A POST 
router.patch('/:postId',async (req,res) => {
    const updatePost = await Post.updateOne(
        {_id: req.params.postId},
        {$set: {title:req.body.title,description:req.body.description}}
        
    );
    res.json(updatePost);
});

//EXPORT THE ROUTER
module.exports = router;