import { Request, Response } from "express";
import { prisma } from "../../prisma";

// PUT update seashell

/**
 * @openapi
 * /seashells/{id}:
 *   put:
 *     summary: Update an existing seashell
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               color:
 *                 type: string
 *               size:
 *                 type: string
 *               species:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               collectedBy:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seashell updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Seashell"
 *       404:
 *         description: Seashell not found
 */
export const updateSeashell = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const updated = await prisma.seashell.update({
      where: { id },
      data: req.body,
    });

    res.json(updated);
  } catch (error) {
    return res.status(404).json({ message: "Seashell not found" });
  }
};