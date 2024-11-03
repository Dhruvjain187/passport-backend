const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Shoe = require("./models/shoe");
const Men = require("./models/Men");
const user = require("./Validation");
const ExpressError = require("./utils/ExpressError")
const catchAsync = require("./utils/catchAsync");
const Joi = require('joi');
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("./models/User");
const pbkdf2 = require('pbkdf2');
const crypto = require('node:crypto');
const port = 3000;


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shoe');
    console.log("database connected");
}

main().catch(err => console.log(err));

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
    secret: "don'ttellthissecrettoanyone",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
}

app.use(session(sessionConfig))

app.use(passport.initialize());
app.use(passport.session());



function verifyPassword(password, salt, storedHash) {
    const hash = crypto.pbkdf2Sync(
        password,
        salt,
        25000,
        512,
        'sha256'
    ).toString('hex');

    return hash == storedHash;
}

passport.use(new LocalStrategy({
    usernameField: 'email',
},
    async function (email, password, done) {
        const user = await User.findOne({ email }).select('+hash +salt');
        console.log(user.salt);
        const isValid = verifyPassword(password, user.salt, user.hash);
        console.log(isValid);
    }
));

// passport.use(new LocalStrategy({
//     usernameField: 'email',
// },
//     function (email, password, done) {
//         User.findOne({ email }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!user.verifyPassword(password, user.salt, user.hash)) { return done(null, false); }
//             return done(null, user);
//         }).select('+hash +salt');
//     }
// ));

// passport.use(new LocalStrategy({
//     usernameField: 'email',
// },
//     function (email, password, done) {
//         User.findOne({ email: email }, function (err, user) {
//             console.log(user);
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }

//             const hashedPassword = pbkdf2Sync(password, user.salt, 10000, 64, 'sha512').toString('hex');
//             console.log(hashedPassword)
//             if (hashedPassword === user.password) {
//                 return done(null, user);
//             } else {
//                 return done(null, false, { message: 'Incorrect password.' });
//             }
//         });
//         // console.log("email=", email);
//         // console.log("password=", password)
//     }
// ));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const validateUser = (req, res, next) => {
    const { error } = user.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join()
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

app.get("/", (req, res) => {
    res.send("successful")
})

app.get("/login", (req, res) => {
    res.send("unsuccessful")
})

app.get("/card", catchAsync(async (req, res) => {
    const men = await Men.find({});
    res.send(men)
}))

app.get("/card/:id", catchAsync(async (req, res) => {
    const { id } = req.params
    const men = await Men.findById(id);
    res.send(men)
}))


// app.post("/login", passport.authenticate("local", { failureFlash: false }), (req, res) => {


// })

app.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("logged in")
    res.status(200).send("successful");
})

app.post("/sign-up", validateUser, async (req, res, next) => {
    try {
        const { firstname, email, password } = req.body.data;
        const user = new User({ email, username: firstname });
        const registeredUser = await User.register(user, password);
        console.log(registeredUser)
        req.login(registeredUser, function (err) {
            if (err) {
                next(err);
            }
        })
        res.status(200).json("Successfully registered");
    } catch (err) {
        res.status(200).json("registration failed");
    };
})

app.use((err, req, res, next) => {
    const { status = 400 } = err;
    if (!err.msg) {
        err.msg = "Something went wrong!!"
    }
    res.status(status).send(err.msg)
})

app.listen(port, () => {
    console.log(`serving at port:${port}`);
})