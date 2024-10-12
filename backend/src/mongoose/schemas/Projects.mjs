import mongoose from "mongoose";


const ProjectSchema = mongoose.Schema({
    subject : {
        type : mongoose.Schema.Types.String,
        required : true ,
    },
    person_needed : {
        type : mongoose.Schema.Types.Number,
        required : true ,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    describtion : {
        type : mongoose.Schema.Types.String,
        required : true ,
    },
    creator : {
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
    },
    members : {
        type : [mongoose.Schema.Types.ObjectId],
        required : true 
    }
})

ProjectSchema.pre('save', function (next) {
    const project = this; 

    project.members = [...new Set(project.members)];

    next();
});

export const Projects = mongoose.model('Projects' ,ProjectSchema)