import mongoose from 'mongoose'


const schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    mail: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

export default mongoose.model('userInformation', schema)