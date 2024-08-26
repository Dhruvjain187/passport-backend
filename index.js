const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Shoe = require("./models/shoe");
const Men = require("./models/Men");
const port = 3000;


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shoe');
    console.log("database connected");
}

main().catch(err => console.log(err));


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/card", async (req, res) => {
    const men = await Men.find({});
    res.send(men)
})

app.post("/login", async (req, res) => {
    const data = req.body;
    const shoe = await Shoe.findOne(data);
    console.log(shoe);
    if (shoe) {
        res.send('<script>window.location.href = "http://localhost:5173/"</script>');
    } else {
        res.send('<script>window.location.href = "http://localhost:5173/sign-in"</script>');
    }
})

app.post("/sign-up", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const data = { firstname, lastname, email, password };
    const shoe = await Shoe.create(data);
    res.send('<script>window.location.href = "http://localhost:5173/"</script>');
})

app.listen(port, () => {
    console.log(`serving at port:${port}`);
})