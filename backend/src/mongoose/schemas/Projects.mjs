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
        id : {
            type : mongoose.Schema.Types.ObjectId,
            required : true ,

        },
        name : {
            type : mongoose.Schema.Types.String,
            required : true ,
        }
        
    },
    members : {
        details :[{
            id : {
                type : mongoose.Schema.Types.ObjectId,
                required : true ,
    
            },
            name : {
                type : mongoose.Schema.Types.String,
                required : true ,
            },
        }],
    }
})

// ProjectSchema.post('save', function (next) {
//     const project = this; 

//     function timeAgo(date){
//         const now = new Date();

//         const seconds = Math.floor((now-date)/1000);
//         if(seconds <60 ) return `${seconds} seconds ago`;

//         const minutes = Math.floor((seconds)/60);
//         if(minutes <60 ) return `${minutes} minutes ago`;

//         const hours = Math.floor((minutes)/60);
//         if(hours <60 ) return `${hours} hours ago`;

//         const days = Math.floor((hours)/24);
//         if(days <60 ) return `${days} days ago`;

//         const months = Math.floor((days)/30);
//         if(months <60 ) return `${months} months ago`;

//         const years = Math.floor((months)/12);
//         if(years <60 ) return `${years} years ago`;

//     }

//     project.betweenTime = timeAgo(project.createdAt);

//     next();
// });

export const Projects = mongoose.model('Projects' ,ProjectSchema)