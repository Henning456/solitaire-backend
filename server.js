import "dotenv/config";
import cors from "cors";
import express from "express";
import highscoreRoutes from "./routes/highscore.js";
const port = process.env.PORT || 3000;
const app = express();
const User = require("./model/users");

app.use(cors());
app.use(express.json());

// app.use("/highscore", highscoreRoutes);

app.get("/", (_, res) => {
  return res.json({ msg: "Solitaire API root" });
});

// Route to login/register a user
app.post("/users", async (req, res) => {
  const { name } = req.body;
  console.log("name", name);
  try {
    await connect();
    const user = await User.findOne({ name: name });
    if (user) {
      return res.json({
        id: user._id,
        name: user.name,
      });
    } else {
      const newUser = new User({ name: name });
      await newUser.save();
      return res.json(newUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to track number of played games
app.put("/user/:id/play", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.gamesPlayed += 1;
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Solitaire API running on port ${port}`);
});
