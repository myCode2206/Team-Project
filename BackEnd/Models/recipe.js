const mongoose=require('mongoose');

const recipeSchema = new mongoose.Schema({
  
    title: {
      type:String,
      require:true
    },
    image:{
      type:String,
      require:true
  },
    author: {
      type:String,
      require:true
    },
    CookingTime: {
      type:String,
      require:true
    },
    Calories:{
      type:String,
      require:true
    },
    Ingredients: {
      type:String,
      require:true
    },
    Instruction:{
      type:String,
      require:true
    },
    date: { 
      type:Date, 
      default:Date.now
    }
  });

  const Recipe = mongoose.model(recipeSchema,Recipe);


  module.exports={
    Recipe
  }

