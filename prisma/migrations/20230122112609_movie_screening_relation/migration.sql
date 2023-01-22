/*
  Warnings:

  - You are about to drop the column `screenId` on the `Screening` table. All the data in the column will be lost.
  - You are about to drop the `Screen` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Screening" DROP CONSTRAINT "Screening_screenId_fkey";

-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "screenId";

-- DropTable
DROP TABLE "Screen";
