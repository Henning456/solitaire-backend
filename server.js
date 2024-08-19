import "dotenv/config";
import cors from "cors";
import express from "express";
import highscoreRoutes from "./routes/highscore.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/highscore", highscoreRoutes);

app.get("/", (_, res) => {
  return res.json({ msg: "Solitaire API root" });
});

app.listen(port, () => {
  console.log(`Solitaire API running on port ${port}`);
});
