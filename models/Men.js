const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    strict: false
})

const Men = mongoose.model("Men", menSchema);

module.exports = Men;