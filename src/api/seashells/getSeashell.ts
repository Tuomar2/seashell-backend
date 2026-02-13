import { Request, Response } from "express";
import { prisma } from "../../prisma";

// GET seashell by id

/**
 * @openapi
 * /seashells/{id}:
 *   get:
 *     summary: Get a seashell by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seashell found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Seashell"
 *       404:
 *         description: Seashell not found
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