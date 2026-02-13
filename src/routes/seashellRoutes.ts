import { Router } from "express";

import { listSeashells } from "../api/seashells/listSeashells";
import { getSeashellById } from "../api/seashells/getSeashell";
import { createSeashell } from "../api/seashells/createSeashell";
import { updateSeashell } from "../api/seashells/updateSeashell";
import { deleteSeashell } from "../api/seashells/deleteSeashell";

import { validateId } from "../middleware/errorHandlers";

const router = Router();

router.get("/", listSeashells);
router.post("/", createSeashell);
router.get("/:id", validateId, getSeashellById);
router.put("/:id", validateId, updateSeashell);
router.delete("/:id", validateId, deleteSeashell);

export default router;
