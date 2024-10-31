const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware pour analyser le corps des requêtes
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion à MongoDB", err));

// Exemple de route
app.get("/", (req, res) => {
  res.send("Bonjour, API en cours d'exécution !");
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur http://localhost:${PORT}`);
});
