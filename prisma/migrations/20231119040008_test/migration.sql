/*
  Warnings:

  - You are about to drop the `CartItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `shoppingCartId` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "CartItems_productId_key";

-- DropIndex
DROP INDEX "CartItems_cartId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CartItems";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_ProductToShoppingCart" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductToShoppingCart_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToShoppingCart_B_fkey" FOREIGN KEY ("B") REFERENCES "ShoppingCart" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Product" ("createAt", "description", "id", "price", "productName") SELECT "createAt", "description", "id", "price", "productName" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToShoppingCart_AB_unique" ON "_ProductToShoppingCart"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToShoppingCart_B_index" ON "_ProductToShoppingCart"("B");
