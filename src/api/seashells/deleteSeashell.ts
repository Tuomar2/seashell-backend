import { Request, Response } from "express";
import { prisma } from "../../prisma";

// DELETE seashell

/**
 * @openapi
 * /seashells/{id}:
 *   delete:
 *     summary: Delete a seashell
 *     description: Removes a seashell from the collection by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: Seashell deleted successfully (no content returned)
 *       404:
 *         description: Seashell not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Seashell not found"
 */

export const deleteSeashell = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await prisma.seashell.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    return res.status(404).json({ message: "Seashell not found" });
  }
};
