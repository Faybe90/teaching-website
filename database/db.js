// backend/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Pour charger les variables d'environnement depuis le fichier .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Quitte le processus en cas d'erreur de connexion
  }
};

export default connectDB;
