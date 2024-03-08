const mongoose=require('mongoose');

const blogschema = new mongoose.Schema({
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
    body: {
      type:String,
      require:true
    },
    
    date: { 
      type:Date, 
      default:Date.now
    }
  });

  const Blog = mongoose.model(blogschema,Blog);


  module.exports={
    Blog
  }

