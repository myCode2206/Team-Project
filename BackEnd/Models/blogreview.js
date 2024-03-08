const mongoose=require('mongoose');

const blogreviewschema = new mongoose.Schema({
    rating:{
        type:Number,
        require:true
    },
    Comment:{
        type:String,
        require:true
    }
    
  });

  const BlogReview = mongoose.model(blogreviewschema,BlogReview);


  module.exports={
    BlogReview
  }

