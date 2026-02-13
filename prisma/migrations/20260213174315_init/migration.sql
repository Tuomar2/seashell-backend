-- CreateTable
CREATE TABLE "Seashell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT,
    "size" TEXT,
    "species" TEXT,
    "description" TEXT,
    "location" TEXT,
    "collectedBy" TEXT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
