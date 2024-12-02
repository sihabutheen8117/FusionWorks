import mongoose, { Types } from "mongoose";

const ClubMessages = mongoose.Schema({

    subject : {
        type : mongoose.Schema.Types.String,
        required : true
    },

    details : {
        type : mongoose.Schema.Types.String,
        required : true
    },

    links: [
        {
            link_name: {
                type: mongoose.Schema.Types.String,
                required: true, // Ensure every link has a name
            },
            link_address: {
                type: mongoose.Schema.Types.String,
                required: true, // Ensure every link has an address
            },
        },
    ],

    createdAt :{
        type : Date,
        default : Date.now
    }
    
})

const UserSchema = mongoose.Schema({
    name : {
        type : mongoose.Schema.Types.String,
        required : true,
        unique : true,
    },
    email : {
        type : mongoose.Schema.Types.String,
        required : true ,
        unique : true ,
    },
    password :{
        type : mongoose.Schema.Types.String,
        required : true ,
    },
    picture : {
        type : Buffer ,
        contentType : String ,
    },
    skills :{
        type : [mongoose.Schema.Types.String],
        required : false ,
    },

    links :{
        whatsapp : {
            type : mongoose.Schema.Types.String,
            required : false ,
        },
        github : {
            type : mongoose.Schema.Types.String,
            required : false ,
        },
        linkedIn : {
            type : mongoose.Schema.Types.String,
            required : false ,
        },
    },

    college : {
        type : mongoose.Schema.Types.String,
    },
    department : {
        type : mongoose.Schema.Types.String,
    },
    year :{
        type : mongoose.Schema.Types.Number,
    },
    section :{
        type : mongoose.Schema.Types.String,
    },

    projects :{
        type : [mongoose.Schema.Types.ObjectId] ,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    user_type : {
        type : mongoose.Schema.Types.String,
        required : true ,
    },

    club_messages : {
        type : [ClubMessages]
    }
})

export const User = mongoose.model('User' ,UserSchema)