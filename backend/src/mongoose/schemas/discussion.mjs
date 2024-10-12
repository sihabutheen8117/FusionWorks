import mongoose from "mongoose";

const messageSchema = mongoose .Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    message : {
        type : mongoose.Schema.Types.String,
        required : true
    },

    createdAt :{
        type : Date,
        default : Date.now
    }
})

const dicussionSchema = mongoose.Schema ({
    subject : {
        type : mongoose.Schema.Types.String,
        required:true 
    },

    describtion : {
        type : mongoose.Schema.Types.String,
        required : true 
    },

    replies : [messageSchema],

    numberOfReplies : {
        type : mongoose.Schema.Types.Number
    },

    creator : {
        type : mongoose.Schema.Types.ObjectId,
        required : true 
    },

    liked : {
        type : [mongoose.Schema.Types.ObjectId],
    },

    numberOfLikes : {
        type : mongoose.Schema.Types.Number ,
        default : 0 
    },

    disliked : {
        type : [mongoose.Schema.Types.ObjectId],
    },

    numberOfDisLikes : {
        type : mongoose.Schema.Types.Number ,
        default : 0 
    },

    createdAt : {
        type: Date,
        default: Date.now
    }


})

dicussionSchema.pre('save' , (next)=> {
    this.numberOfLikes = this.liked.length;
    this.numberOfDisLikes = this.disliked.length;
    this.numberOfReplies = this.replies.length;

    const messages= this;
    messages.liked = [...new Set(messages.liked)];
    messages.disliked = [...new Set(messages.disliked)]

    next();
})



export const Discussion = mongoose.model('Disscussion' ,dicussionSchema)