import { dbConnect } from "../db/connect.js";
import { User } from "../models/users.js";

export async function getHighscores(req, res) {
  return res.json([
    { name: "Henning", score: 1000 },
    { name: "Ralf", score: 980 },
  ]);
}

export async function getUsers(req, res) {
  try {
    await dbConnect();
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
}
