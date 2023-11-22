/*
  Warnings:

  - You are about to drop the `_ProductToShoppingCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductToShoppingCart";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_ProductCart" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductCart_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductCart_B_fkey" FOREIGN KEY ("B") REFERENCES "ShoppingCart" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductCart_AB_unique" ON "_ProductCart"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductCart_B_index" ON "_ProductCart"("B");
