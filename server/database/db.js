import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-ivn3xhj-shard-00-00.ob4priu.mongodb.net:27017,ac-ivn3xhj-shard-00-01.ob4priu.mongodb.net:27017,ac-ivn3xhj-shard-00-02.ob4priu.mongodb.net:27017/?ssl=true&replicaSet=atlas-gel5lt-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DataBase Connected!");
  } catch (error) {
    console.log("Error while Connecting to MongoDB", error);
  }
};

export default Connection;
