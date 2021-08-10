const express =require("express");


const router =express.Router();
const postService = require("../services/posts.service")


router.get("/", async(req,res)=>{
    const posts= await postService.getPosts();
    res.send(posts);
} )

router.post("/", async (req,res)=>{
    const post = await postService.createPost(req.body);
    res.send(post);
} );

router.put("/:id", async (req,res)=>{
    const post= await postService.updatePost(req.params.id,req.body);
    res.send(post);
} )

router.delete("/:id",async (req,res)=>{
    const post= await postService.deletePost(req.params.id);
    res.send(post);
} )

module.exports=router;