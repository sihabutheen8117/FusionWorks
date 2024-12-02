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
 

    message : {
        type : mongoose.Schema.Types.String,
        required : true 
    },

    replies :{
        type :  [messageSchema] ,
    },

    numberOfReplies : {
        type : mongoose.Schema.Types.Number,
        default  : 0
    },

    creator : {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            required : true ,

        },
        name : {
            type : mongoose.Schema.Types.String,
            required : true ,
        }
        
    },

    liked : {
        type : [mongoose.Schema.Types.ObjectId],
        default : []
    },

    numberOfLikes : {
        type : mongoose.Schema.Types.Number ,
        default : 0 
    },

    disliked : {
        type : [mongoose.Schema.Types.ObjectId],
        default : []
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

dicussionSchema.pre('save' , function () {
    this.numberOfLikes = this.liked.length;
    this.numberOfDisLikes = this.disliked.length;
    this.numberOfReplies = this.replies.length;

    this.liked = [...new Set(this.liked)];
    this.disliked = [...new Set(this.disliked)]
})



export const Discussion = mongoose.model('Discussion' ,dicussionSchema)