const User = require("./models/User");

// Route pour créer un nouvel utilisateur
app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  const user = new User({ name, email });

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
