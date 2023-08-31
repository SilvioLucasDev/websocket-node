/*
  Warnings:

  - You are about to drop the column `id_student` on the `grades` table. All the data in the column will be lost.
  - You are about to drop the column `id_school` on the `students` table. All the data in the column will be lost.
  - Added the required column `student_id` to the `grades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school_id` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "grades" DROP CONSTRAINT "grades_id_student_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_id_school_fkey";

-- AlterTable
ALTER TABLE "grades" DROP COLUMN "id_student",
ADD COLUMN     "student_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "students" DROP COLUMN "id_school",
ADD COLUMN     "school_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
