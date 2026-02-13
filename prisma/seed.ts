import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Deleting old shells...");
    console.log("Seeding database...");

    // Clear existing data to avoid duplicates
    await prisma.seashell.deleteMany();

    // Insert sample seashells
    await prisma.seashell.createMany({
    data: [
        {
        name: "Conch Shell",
        color: "Pink",
        size: "Medium",
        species: "Gastropod",
        description: "Found near the pier",
        location: "Hanko Beach",
        collectedBy: "Anna",
        },
        {
        name: "Scallop Shell",
        color: "White",
        size: "Small",
        species: "Pectinidae",
        description: "Collected during a summer trip",
        location: "Turku Archipelago",
        collectedBy: "James",
        },
        {
        name: "Cowrie Shell",
        color: "Brown",
        size: "Small",
        species: "Cypraeidae",
        description: "Smooth shell with glossy surface",
        location: "Crete Island",
        collectedBy: "Anna",
        },
        {
        name: "Whelk Shell",
        color: "Gray",
        size: "Large",
        species: "Buccinidae",
        description: "Found after a storm on the shoreline",
        location: "Oulu Beach",
        collectedBy: "James",
        },
        {
        name: "Mussel Shell",
        color: "Blue",
        size: "Medium",
        species: "Mytilidae",
        description: "Common shell picked near rocks",
        location: "Espoo Coast",
        collectedBy: "Anna",
        },
    ],
  });

  console.log("Seeded 5 seashells into the database!");
}

main()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });