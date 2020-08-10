const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, err => {
    if (err) throw err;
    else console.log("Connected to PORT : ", PORT);
});
