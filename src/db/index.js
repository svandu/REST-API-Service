const mongoose = require("mongoose")
// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {   
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    }catch(error) {
        console.log("MONGODB connection error", error),
        process.exit(1);
    }
}

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exitCode = 1;
});

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected');
});

module.exports = connectDB;

// const mongoose = require("mongoose");

// async function connectDB() {
//   try {
//     const connectionInstance = await mongoose.connect(
//       process.env.ENVIRONMENT === "dev"
//         ? `mongodb://localhost:27017/${process.env.DB_NAME}`
//         : `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
//     );
//     console.log(`DB CONNECTED, HOST: ${connectionInstance.connection.host}`);
//   } catch (err) {
//     console.log("ERROR IN DB CONNECTION: ", err);
//     process.exit(1);
//   }
// }

// module.exports = connectDB