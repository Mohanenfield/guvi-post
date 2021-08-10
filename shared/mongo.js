const { MongoClient } = require("mongodb");


const client = new MongoClient(process.env.MONGODB_URL);
const mongo ={
    db:null,
   async connect(){
        await client.connect();
        console.log("Connected to Mongodb");
        this.db = client.db(process.env.MONGODB_NAME);
        console.log(`${process.env.MONGODB_NAME}`);

    }
}

module.exports=mongo;