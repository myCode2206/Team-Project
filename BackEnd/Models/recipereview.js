const mongoose=require('mongoose');

const recipereviewschema = new mongoose.Schema({
    
    rating:{
        type:Number,
        require:true
    },
    Comment:{
        type:String,
        require:true
    }
    
  });

  const recipeReview = mongoose.model(recipereviewschema,recipeReview);


  module.exports={
    recipeReview
  }

