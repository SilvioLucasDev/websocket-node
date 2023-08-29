/*
  Warnings:

  - The primary key for the `grades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `schools` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `students` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "grades" DROP CONSTRAINT "grades_id_student_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_id_school_fkey";

-- AlterTable
ALTER TABLE "grades" DROP CONSTRAINT "grades_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_student" SET DATA TYPE TEXT,
ADD CONSTRAINT "grades_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "schools" DROP CONSTRAINT "schools_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "schools_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "students" DROP CONSTRAINT "students_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_school" SET DATA TYPE TEXT,
ADD CONSTRAINT "students_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_id_school_fkey" FOREIGN KEY ("id_school") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
