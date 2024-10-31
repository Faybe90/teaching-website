// backend/index.js
import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config(); // Charge les variables d'environnement

const app = express();

// Connexion à MongoDB
connectDB();

// Autres configurations d'Express
app.use(express.json());

// Exemples de routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
