const express = require("express")
const mongoose = require("mongoose")
const Hotel = require("./models/Hotel")

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:<db_password>@cluster0.h6ir1kp.mongodb.net/")
        .then(() => console.log("YATTAA BERHASIL"))
        .catch((err) => console.log("GAGAL BRO",err));

app.get("/hotels", async(req, res) =>{
    const hotels = await hotel.find()
    res.json(hotels);
});

app.listen(3000,() => {
    console.log("berjalan di port 3000")
});