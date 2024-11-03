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
    },
    smallImg: {
        type: [String],
        required: true
    },
    size: {
        type: [String],
        required: true
    },
    color: {
        type: [String],
        required: true
    },
    details: {
        type: String,
        required: true
    },
    detailsList: {
        type: [String],
        required: true
    },
    moreInfo: {
        Size: String,
        StyleBottom: String,
        color: String,
        Material: String,
        Climate: String,
        Pattern: String
    }
}, {
    strict: false
})

const Men = mongoose.model("Men", menSchema);

module.exports = Men;