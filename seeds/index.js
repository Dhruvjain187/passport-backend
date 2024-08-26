const mongoose = require("mongoose");
const Shoe = require("../models/shoe");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shoe');
    console.log("database connected");
}

main().catch(err => console.log(err));


const func = async function () {
    try {
        const shoe = await Shoe.insertMany([
            {
                firstname: "kirat",
                lastname: "singh",
                email: "kirat@gmail.com",
                password: "100xdevs"
            },
            {
                firstname: "brad",
                lastname: "traversy",
                email: "brad@gmail.com",
                password: "traversy-media"
            }
        ]);
    } catch (err) {
        console.log(err);
    }
}

func();