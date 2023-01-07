const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
let port = process.env.PORT || 3000
const router = require("../src/routes/route");

app.use(express.json());
mongoose.set('strictQuery', true) 

app.use("/", router)

mongoose.connect(process.env.DATABASE, (err, data)=> {
    if(err) console.log(err)
    if(data) console.log("MongoDb is connected..");
});

app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
})

