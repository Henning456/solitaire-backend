import { Router } from "express";
import { getHighscores, getDummies } from "../handler/highscore.js";

const router = Router();

router.get("/", getHighscores);
router.get("/dummy", getDummies);

export default router;
