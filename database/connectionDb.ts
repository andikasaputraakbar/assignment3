import mongoose from "mongoose";

class ConnectDb{
  static connectDb = async () => {
    try {
      const dbPathUri = "mongodb://localhost:27017/";
      const dbName = "marketDatabase";
      await mongoose.connect(`${dbPathUri}${dbName}`);
      console.log("DB Connected");
      
    } catch (err) {
      console.log(err);  
    }
  };
}

export default ConnectDb ;