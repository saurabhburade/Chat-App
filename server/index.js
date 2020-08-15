const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const {uri, dbName} = require("./configs/db.config");
const userRoutes=require('./routes/user.routes');

const {AdminBroRouter, adminBro} = require("./helpers/adminBro");
mongoose.connect(uri, {dbName}, err => {
    if (err) {
        console.log("Mongoose conection error", err);
    }
    else{
        console.log("Mongoose conection : connected 🔥");
    }
});
console.log(uri);
app.use(express.json());
app.use(adminBro.options.rootPath, AdminBroRouter);
app.use(cors());
app.use(morgan());
app.use("/api/",userRoutes)
app.listen(PORT, err => {
    if (err) throw err;
    else console.log("Connected to PORT : ", PORT);
});
