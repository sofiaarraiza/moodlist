const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'] 
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'El email es obligatorio'],
        lowercase: true, //pasa todo a minuscula
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    passwordResetToken: String,
    passwordResetTokenExpires: Date,
    spotifyId: String,
})

module.exports = mongoose.model('User', UserSchema)