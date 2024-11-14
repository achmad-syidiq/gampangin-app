import mongoose from "mongoose";

const CONNECTION_TO_DB = async (db) => {
  try {
    await mongoose.connect(db);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};

export default CONNECTION_TO_DB;
