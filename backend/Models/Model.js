const mongoose = require ('mongoose')

const carsSchema = mongoose.Schema({

    Model:{
        type: Number,
        required: [true]
        },
    Make:{ 
        type: String,
        required: [true]
    },
    Owner:{
        type: String,
        required: [true]
    },
    Registration_number:{
        type: String,
        required: [true]
    }  
},

    {
        timestamps:true
    }
)

const Cars=mongoose.model('Cars', carsSchema);

module.exports = Cars;