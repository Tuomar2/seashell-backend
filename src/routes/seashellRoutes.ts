import { Router } from "express";

import { listSeashells } from "../api/seashells/listSeashells";
import { getSeashellById } from "../api/seashells/getSeashell";
import { createSeashell } from "../api/seashells/createSeashell";
import { updateSeashell } from "../api/seashells/updateSeashell";
import { deleteSeashell } from "../api/seashells/deleteSeashell";

const router = Router();

router.get("/", listSeashells);
router.get("/:id", getSeashellById);
router.post("/", createSeashell);
router.put("/:id", updateSeashell);
router.delete("/:id", deleteSeashell);

export default router;
