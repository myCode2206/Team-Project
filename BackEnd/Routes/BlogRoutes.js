const express=require('express')
const router=express.Router();

router.get('/blog',(req,res)=>{
    res.send("sare blog khulenga khulega")
})
router.get('/blog/:id',(req,res)=>{
    const {id} = req.params;
    res.send(`particular blog jiske id ${id} hai`);
})


module.exports= router;
