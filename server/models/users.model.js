const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        fname: {
            type: String,
        },
        lname: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        token: {
            type: String,
            unique: true,
        },
        chats: [
            {
                id: {
                    type: String,
                    // unique:true
                },
                type: {
                    type: String,
                },
                title: {type: String, required: true},
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
