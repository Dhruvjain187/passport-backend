const Men = require("../models/Men");
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shoe');
    console.log("database connected");
}

main().catch(err => console.log(err));

const func = async () => {
    const old = await Men.deleteMany();
    const men = await Men.insertMany([
        {
            brand: "Pierce Gym Short",
            price: 27.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh12-red_back.jpg.webp"
        },
        {
            brand: "Arcadio Gym Short",
            price: 20.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh11-blue_back.jpg.webp"
        },
        {
            brand: "Sol Active Short",
            price: 32.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh10-blue_alt1.jpg.webp"
        },
        {
            brand: "Troy Yoga Short",
            price: 24.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh09-blue_alt1.jpg.webp"
        },
        {
            brand: "Orestes Fitness Short",
            price: 35.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh08-black_back.jpg.webp"
        },
        {
            brand: "Rapha Sports Short",
            price: 35.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh07-black_alt1.jpg.webp"
        },
        {
            brand: "Lona Yoga Short",
            price: 32.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh06-gray_alt1.jpg.webp"
        },
        {
            brand: "Hawkeye Yoga Short",
            price: 29.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh05-gray_alt1.jpg.webp"
        },
        {
            brand: "Torque Power Short",
            price: 32.50,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh04-gray_back.jpg.webp"
        },
        {
            brand: "Meteor Workout Short",
            price: 32.50,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh03-blue_alt1.jpg.webp"
        },
        {
            brand: "Apollo Running Short",
            price: 32.50,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh02-black_alt1.jpg.webp"
        },
        {
            brand: "Cobalt CoolTech Fitness Short",
            price: 44.00,
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh01-blue_back.jpg.webp"
        },
    ])
}

func();