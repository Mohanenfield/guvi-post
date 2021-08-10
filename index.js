const express = require("express");
const { MongoAPIError } = require("mongodb");
const app = express();
require("dotenv").config();
const cors =require("cors");
const postsRouter = require("./routes/posts.route");
const mongo = require("./shared/mongo")

async function loadApp() {
    try {
        await mongo.connect();
 app.use(cors());
        
        app.use(express.json());
       
        app.use("/posts", postsRouter);
        app.listen(process.env.PORT, () => console.log("Server is running at Port 3001"));
    } catch (err) {
        console.log(err);
        process.exit();
    }
}

loadApp();
