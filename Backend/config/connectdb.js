// const mongoose = require("mongoose");

// async function connectDatabase() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       serverSelectionTimeoutMS: 30000,
//     });

//     console.log("database connected successfully");
//   } catch (error) {
//     console.log("MongoDB Error:", error);
//   }
// }

// module.exports = connectDatabase;

const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongo Error =>", error.message);
  }
}

module.exports = connectDatabase;