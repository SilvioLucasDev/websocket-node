/*
  Warnings:

  - Added the required column `points` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" ADD COLUMN     "points" INTEGER NOT NULL;
