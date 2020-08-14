const router = require("express").Router();
const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/all-users", (req, res) => {
    User.find()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/register", (req, res) => {
    const {fname, lname, email, password} = req.body;
    console.log(req.body);
    const hash = bcrypt.hashSync(password, 10);
    const token = jwt.sign(email, process.env.JWT_SECRET);
    console.log("hash", hash);
    console.log("jwt", token);
    User.findOne({email})
        .then(doc => {
            if (doc) {
                res.status(400).json({Error: "Already Exist"});
            } else {
                const newUser = new User({
                    fname,
                    lname,
                    token,
                    email,
                    password: hash,
                });
                console.log(newUser);
                newUser
                    .save()
                    .then(user => {
                        res.status(200).json(user);
                        console.log(user);
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json(err);
                    });
            }
        })
        .catch(err => {
            console.log("err", err);
            res.status(400).json(err);
        });

    // const newUser
});

module.exports = router;
