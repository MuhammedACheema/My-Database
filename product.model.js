const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type : String,
        required: [true, "User name is required"]
    },

    Age: {
        type : String,
        required: [true, "User age is required"]
    },

    TopArtist: {
        type : String,
        required: [true, "User top artist is required"]
    },

});

const User = mongoose.model("User",UserSchema);

module.exports = User