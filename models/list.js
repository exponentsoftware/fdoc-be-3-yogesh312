const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "what is your name bro!!!"],
      trim:true,
      maxlength: 15,
    },
    userId:{
      type:String,
      required:true,
    },
    title: {
      type: String,
      required: [true, "title? keep it new"],
      trim:true,
      unique: true,
      maxlength: 15,
      
    },
    description: {
      type: String,
      required: [true, "description is required!!!"],
      trim: true,
      maxlength:100
    },
    track: {
        type: Boolean,
        default: false,
    }, 

    category: {
      type: String,
      enum:["work", "hobby","task"],
      default: "task",
      required:[true, "please select work, hobby or task specifically"]
    }
  },
  {
    timestamps: true,
  }

);
module.exports = mongoose.model("List", listSchema);
