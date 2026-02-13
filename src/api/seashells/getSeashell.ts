import { Request, Response } from "express";
import { prisma } from "../../prisma";

// GET seashell by id

/**
 * @openapi
 * /seashells/{id}:
 *   get:
 *     summary: Get a seashell by ID
 *     description: Returns a single seashell from the collection.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Seashell found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Seashell"
 *             example:
 *               id: 1
 *               name: "Conch Shell"
 *               color: "Pink"
 *               size: "Medium"
 *               species: "Gastropod"
 *               description: "Found near the pier"
 *               location: "Hanko Beach"
 *               collectedBy: "Anna"
 *               createdAt: "2026-02-13T12:00:00.000Z"
 *       404:
 *         description: Seashell not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Seashell not found"
 */

export const getSeashellById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const seashell = await prisma.seashell.findUnique({
    where: { id },
  });

  if (!seashell) {
    return res.status(404).json({ message: "Seashell not found" });
  }

  res.json(seashell);
};