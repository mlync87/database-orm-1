/*
  Warnings:

  - Added the required column `screenNumber` to the `Screen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screen" ADD COLUMN     "screenNumber" INTEGER NOT NULL;
