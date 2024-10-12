import mongoose from "mongoose";

const EventsSchema = mongoose.Schema({

    title : {
        type : mongoose.Schema.Types.String,
        required : true,
    },

    type_of_event :{
        type : mongoose.Schema.Types.String,
        required : true,
    },

    event_picture : {
        type : Buffer ,
        contentType : String ,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    describtion : {
        type : mongoose.Schema.Types.String,
        required : true,
    },

    conducted_by : {
        type : mongoose.Schema.Types.String,
        required : true,
    },

    apply_form : {
        type :  mongoose.Schema.Types.String ,
        required : true ,
    },

    creator : {
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
    }, 

})

export const Events = mongoose.model('Events' ,EventsSchema)