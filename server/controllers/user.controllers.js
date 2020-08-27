const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
    const {fname, lname, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const token = jwt.sign(email, process.env.JWT_SECRET);
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
                    chats: [],
                });
                newUser
                    .save()
                    .then(user => {
                        user.password = "";
                        res.status(200).json(user);
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
};

const login = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email})
        .then(doc => {
            if (doc) {
                const match = bcrypt.compareSync(password, doc.password);
                if (match) {
                    doc.password = "";
                    res.status(200).json(doc);
                } else {
                    res.status(400).json({Error: "Incorrect Password"});
                }
            } else {
                res.status(404).json({Error: "User Not Found"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({Error: "Something went wrong"});
        });
};

const allUsers = (req, res) => {
    const {email} = req.headers;
    User.findOne({email})
        .then(doc => {
            res.status(200).json({
                username: doc.fname + " " + doc.lname,
                email,
                _id: doc._id,
            });
            res.end();
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({error: "User not found"});
            res.end();
        });
};
const fetchUser = (req, res) => {
    const {token} = req.headers;
    User.findOne({token})
        .then(doc => {
            if (doc) {
                doc.password = "";
                res.status(200).json(doc);
            } else {
                res.status(404).json({Error: "User Not Found"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({Error: "Something went wrong"});
        });
};
const addChat = (req, res) => {
    const {token} = req.headers;
    const {chat} = req.body;
    Promise.all([User.findOne({token}), User.findOne({_id: chat.user})])

        .then(docs => {
            if (!!docs) {
                docs.forEach((doc, index) => {
                    const present = doc.chats.find(element=> {
                        return element.id === chat.id;
                    });
                    if (!present) {
                        if (index === 0 && chat.type == "personal") {
                            chat.title = docs[1].fname + " " + docs[1].lname;
                            doc.chats = [...doc.chats, chat];
                            doc.save().then(user => {
                                doc.password = "";
                            });
                        } else {
                            chat.title =
                                docs[index - 1].fname +
                                " " +
                                docs[index - 1].lname;
                            doc.chats = [...doc.chats, chat];
                            doc.save().then(user => {
                                doc.password = "";
                            });
                        }
                    } else {
                        res.status(400).json({
                            Error: "Already in chat list",
                        });
                    }
                });

                res.status(200).json("succcess");
            } else {
                res.status(404).json({Error: "User Not Found"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({Error: "Something went wrong"});
        });
};
module.exports = {register, login, allUsers, fetchUser, addChat};
