const express = require("express")
const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("API HOTEL B")
});
app.listen(3000,() => {
    console.log("SERVER KITA JALAN NIH")
})