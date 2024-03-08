const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
    gmail:{
        type:String,
        require:true
    }
    
  });

  const User = mongoose.model(UserSchema,User);


  module.exports={
    User
  }

