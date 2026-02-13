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
 */
export const listSeashells = async (req: Request, res: Response) => {
  const seashells = await prisma.seashell.findMany();
  res.json(seashells);
};
