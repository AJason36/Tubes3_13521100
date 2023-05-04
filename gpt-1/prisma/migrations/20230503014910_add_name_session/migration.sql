/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ChatSession` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `ChatSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChatSession" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ChatSession_name_key" ON "ChatSession"("name");
