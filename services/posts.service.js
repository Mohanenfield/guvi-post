const { ObjectId } = require("mongodb");
const mongo = require("../shared/mongo");

const service ={

getPosts(){
    return mongo.db.collection("posts").find().toArray();
},
createPost(data){
    return mongo.db.collection("posts").insertOne(data);
},
updatePost(id,data){
    return mongo.db.collection("posts").findOneAndUpdate( {_id : ObjectId(id) }, {$set: data} ,{returnDocument :"after"} )
},
deletePost(id){
    return mongo.db.collection("posts").deleteOne( {_id : ObjectId(id) } )
}

}

module.exports=service;