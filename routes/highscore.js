import { Router } from "express";
import { getHighscores, getUsers } from "../handler/highscore.js";

const router = Router();

router.get("/", getHighscores);
router.get("/users", getUsers);

export default router;
