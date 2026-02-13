import { Request, Response } from "express";
import { prisma } from "../../prisma";

// GET all seashells

/**
 * @openapi
 * /seashells:
 *   get:
 *     summary: List all seashells
 *     description: Returns the full seashell collection.
 *     responses:
 *       200:
 *         description: A list of seashells
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Seashell"
 *             example:
 *               - id: 1
 *                 name: "Conch Shell"
 *                 color: "Pink"
 *                 size: "Medium"
 *                 species: "Gastropod"
 *                 description: "Found near the pier"
 *                 location: "Hanko Beach"
 *                 collectedBy: "Anna"
 *                 createdAt: "2026-02-13T12:00:00.000Z"
 */

export const listSeashells = async (req: Request, res: Response) => {
  const seashells = await prisma.seashell.findMany();
  res.json(seashells);
};
