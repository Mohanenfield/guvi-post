const express = require("express");
const { MongoAPIError } = require("mongodb");
const app = express();
require("dotenv").config();
const mongo = require("./shared/mongo")
const cors =require("cors");
async function loadApp() {
    try {
        await mongo.connect();

        const postsRouter = require("./routes/posts.route");
        app.use(express.json());
        app.use(cors());
        app.use("/posts", postsRouter);
        app.listen(3001, () => console.log("Server is running at Port 3001"));
    } catch (err) {
        console.log(err);
        process.exit();
    }
}

loadApp();