const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 3,
    },
    lastname: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
}, {
    strict: false,
});

const Shoe = mongoose.model("Shoe", shoeSchema);
module.exports = Shoe;