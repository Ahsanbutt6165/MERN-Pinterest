// build connection between mongodb-database and mongoose
import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect(process.env.MONGODB_URI, {
      dbName: "pinterest",
    });
    console.log(" ----data base connected successfully----");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
