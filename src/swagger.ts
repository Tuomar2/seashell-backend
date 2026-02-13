import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Seashell Collection API",
      version: "1.0.0",
      description:
        "Backend API for managing James and Anna’s seashell collection.",
    },
    components: {
      schemas: {
        Seashell: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            name: { type: "string", example: "Conch Shell" },
            color: { type: "string", example: "Pink" },
            size: { type: "string", example: "Medium" },
            species: { type: "string", example: "Gastropod" },
            description: {
              type: "string",
              example: "Found near the pier",
            },
            location: { type: "string", example: "Hanko Beach" },
            collectedBy: { type: "string", example: "Anna" },
            createdAt: { type: "string", format: "date-time" },
          },
        },
      },
    },
  },
apis: ["./src/routes/*.ts", "./src/api/seashells/*.ts"]
};

export const swaggerSpec = swaggerJSDoc(options);
