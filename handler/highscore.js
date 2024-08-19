import { dbConnect } from "../db/connect.js";
import { Dummy } from "../db/Dummy.js";

export async function getHighscores(req, res) {
  return res.json([
    { name: "Henning", score: 1000 },
    { name: "Ralf", score: 980 },
  ]);
}

export async function getDummies(req, res) {
  try {
    await dbConnect();
    const dummies = await Dummy.find();
    return res.json(dummies);
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
}
