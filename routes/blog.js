const express = require('express')
const router=express.Router()
const path =require('path')
const blogs=require('./data/blogs')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})

router.get('/blog', (req, res) => {
    // res.sendFile(path.join(__dirname,'../templates/blogindex.html'))
    res.render('bloghome',{
        blogs:blogs
    })
})
router.get('/blogpost/:slug', (req, res) => {
 myblog=blogs.filter((e)=>{
return e.slug=req.params.slug
 })
    // res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
    res.render('blogpage',{
        title:myblog[0].title,
        content:myblog[0].content
        //ya donon jagah zero is liye h q k myblogs aik array h or us main bs aik object h.
    })
})
module.exports=router