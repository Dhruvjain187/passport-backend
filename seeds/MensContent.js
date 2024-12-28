const Men = require("../models/Men");
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shoe');
    console.log("database connected");
}

main().catch(err => console.log(err));

const func = async () => {
    const old = await Men.deleteMany({});
    const men = await Men.insertMany([
        // {
        //     brand: 'Pierce Gym Short',
        //     price: 27,
        //     color: ["red", "brown"],
        //     size: ["S"],
        //     image: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh12-red_back.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh12-red_main.jpg.webp"],
        // },
        // {
        //     brand: 'Arcadio Gym Short',
        //     price: 20,
        //     color: ["blue", "black"],
        //     size: [],
        //     image: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh11-blue_back.jpg.webp'
        //         , "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh11-blue_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Sol Active Short',
        //     price: 32,
        //     color: ["white"],
        //     size: [],
        //     image: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh10-blue_back.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh10-blue_alt1.jpg.webp",
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh10-blue_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Troy Yoga Short',
        //     price: 24,
        //     color: ["white", "orange"],
        //     size: ["M", "S", "O", 32],
        //     image: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh09-blue_back.jpg.webp",
        //         'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh09-blue_alt1.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh09-blue_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Orestes Fitness Short',
        //     price: 35,
        //     color: ["white", "orange"],
        //     size: [],
        //     image: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh08-black_back.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh08-black_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Rapha Sports Short',
        //     price: 35,
        //     color: ["white"],
        //     size: ["XL", "XS", 32],
        //     image: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh07-black_back.jpg.webp",
        //         'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh07-black_alt1.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh07-black_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Lona Yoga Short',
        //     price: 32,
        //     color: ["yellow"],
        //     size: ["XL", "XS", "O", 34],
        //     image: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh06-gray_back.jpg.webp",
        //         'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh06-gray_alt1.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh06-gray_main.jpg.webp",],
        // },
        // {
        //     brand: 'Hawkeye Yoga Short',
        //     price: 29,
        //     color: ["white"],
        //     size: ["M", "S", "O", 32],
        //     image: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh05-gray_back.jpg.webp",
        //         'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh05-gray_alt1.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh05-gray_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Torque Power Short',
        //     price: 32.5,
        //     color: ["white"],
        //     size: ["XL", "XS", "O", 34],
        //     image: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh04-gray_back.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh04-gray_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Meteor Workout Short',
        //     price: 32.5,
        //     color: ["white"],
        //     size: ["M", "S", "O", 32],
        //     image: [
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh03-blue_back.jpg.webp",
        //         'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh03-blue_alt1.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh03-blue_main.jpg.webp",],
        // },
        // {
        //     brand: 'Apollo Running Short',
        //     price: 32.5,
        //     color: ["black"],
        //     size: ["XL", "XS", "O", 34],
        //     image: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh02-black_back.jpg.webp",
        //         'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh02-black_alt1.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh02-black_main.jpg.webp",
        //     ],
        // },
        // {
        //     brand: 'Cobalt CoolTech Fitness Short',
        //     price: 44,
        //     color: ["black"],
        //     size: ["M", "S", "O", 32],
        //     image: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh01-blue_back.jpg.webp',
        //         "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/31dbf293c05c59751b998c7e145940b2/m/s/msh01-blue_main.jpg.webp",
        //     ],
        // }

        {
            brand: "Pierce Gym Short",
            price: 27.00,
            color: ["red", "black", "gray"],
            size: ["S"],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh12-red_back.jpg.webp",
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh12-red_main.jpg.webp"],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh12-red_back.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Arcadio Gym Short",
            price: 20.00,
            color: ["red", "black", "gray"],
            size: [],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh11-blue_main.jpg.webp"
                , "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh11-blue_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh11-blue_back.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Sol Active Short",
            price: 32.00,
            color: ["red", "black", "gray"],
            size: [],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh10-blue_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Troy Yoga Short",
            price: 24.00,
            color: ["white", "orange"],
            size: ["M", "S", "O", 32],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh09-blue_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Orestes Fitness Short",
            price: 35.00,
            color: ["white", "orange"],
            size: [],
            smallImg: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh08-black_main.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh08-black_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh08-black_back.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Rapha Sports Short",
            price: 35.00,
            color: ["white"],
            size: ["XL", "XS", 32],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh07-black_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh07-black_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh07-black_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh07-black_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Lona Yoga Short",
            price: 32.00,
            color: ["yellow"],
            size: ["XL", "XS", "O", 34],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh06-gray_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh06-gray_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh06-gray_back.jpg.webp",],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh06-gray_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Hawkeye Yoga Short",
            price: 29.00,
            color: ["white"],
            size: ["M", "S", "O", 32],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh05-gray_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh05-gray_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh05-gray_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh05-gray_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Torque Power Short",
            price: 32.50,
            color: ["white"],
            size: ["XL", "XS", "O", 34],
            smallImg: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh04-gray_main.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh04-gray_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh04-gray_back.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Meteor Workout Short",
            price: 32.50,
            color: ["white"],
            size: ["M", "S", "O", 32],
            smallImg: [
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh03-blue_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh03-blue_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh03-blue_back.jpg.webp",],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh03-blue_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Apollo Running Short",
            price: 32.50,
            color: ["blue", "yellow"],
            size: ["XL", "XS", "O", 34],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh02-black_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh02-black_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh02-black_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh02-black_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Cobalt CoolTech Fitness Short",
            price: 44.00,
            color: ["green", "brown"],
            size: ["M", "S", "O", 32],
            smallImg: ['https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh01-blue_main.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh01-blue_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh01-blue_back.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Pierce Gym Short",
            price: 27.00,
            color: ["red", "black", "gray"],
            size: ["S"],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh12-red_back.jpg.webp",
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh12-red_main.jpg.webp"],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh12-red_back.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Arcadio Gym Short",
            price: 20.00,
            color: ["red", "black", "gray"],
            size: [],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh11-blue_main.jpg.webp"
                , "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh11-blue_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh11-blue_back.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Sol Active Short",
            price: 32.00,
            color: ["red", "black", "gray"],
            size: [],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh10-blue_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        },
        {
            brand: "Troy Yoga Short",
            price: 24.00,
            color: ["white", "orange"],
            size: ["M", "S", "O", 32],
            smallImg: ["https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_main.jpg.webp",
                'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_alt1.jpg.webp',
                "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/a77c7250ec0d0de5ce037bc19b2f004c/m/s/msh09-blue_back.jpg.webp",
            ],
            image: "https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh09-blue_alt1.jpg.webp",
            details: "The Pierce Gym Short is similar to our Arcadio Gym Short, but designed with a fitted, tapered look. A flat waistband with an adjustable drawstring adds comfort, with zippered pockets for safe, easy storage.",
            detailsList: [
                "Dark red cotton shorts.",
                "87% Supplex, 13% Lycra.",
                "Adjustable drawstring waistband.",
                "Built-in mesh brief.",
                "Machine wash cold, tumble dry low."
            ],
            moreInfo: {
                Size: "0",
                StyleBottom: "Base Layer, Compression, Tights, Workout Pants",
                color: "Black",
                Material: "Spandex",
                Climate: "Indoor, Warm, Hot",
                Pattern: "Solid"
            }
        }
    ])
}

func();