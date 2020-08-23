const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const {uri, dbName} = require("./configs/db.config");
const userRoutes=require('./routes/user.routes');
mongoose.connect(uri, {useUnifiedTopology: true, dbName}, err => {
    if (err) {
        console.log("Mongoose conection error", err);
    } else {
        console.log("Mongoose conection : connected 🔥");
    }
});
console.log(uri);
app.use(express.json());

app.use(cors());
app.use(morgan());
app.use("/api/",userRoutes)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../client", "build", "index.html")
        );
    });
}
app.listen(PORT, err => {
    if (err) throw err;
    else console.log("Connected to PORT : ", PORT);
});
