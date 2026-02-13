import { Request, Response } from "express";
import { prisma } from "../../prisma";

// POST create seashell

/**
 * @openapi
 * /seashells:
 *   post:
 *     summary: Add a new seashell
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
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
 *           example:
 *             name: "Conch Shell"
 *             color: "Pink"
 *             size: "Medium"
 *             species: "Gastropod"
 *             description: "Found near the pier"
 *             location: "Hanko Beach"
 *             collectedBy: "Anna"
 *     responses:
 *       201:
 *         description: Seashell created successfully
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
 *       400:
 *         description: Validation error (missing required fields)
 */

export const createSeashell = async (req: Request, res: Response) => {
  try {
    const { name, color, size, species, description, location, collectedBy } =
      req.body;

    if (!name || typeof name !== "string") {
      return res.status(400).json({
        message: "Seashell name is required",
      });
    }

    const newSeashell = await prisma.seashell.create({
      data: {
        name,
        color,
        size,
        species,
        description,
        location,
        collectedBy,
      },
    });

    res.status(201).json(newSeashell);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};