-- CreateTable
CREATE TABLE "schools" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "id_school" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grades" (
    "id" INTEGER NOT NULL,
    "note" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "id_student" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "schools_id_key" ON "schools"("id");

-- CreateIndex
CREATE UNIQUE INDEX "students_id_key" ON "students"("id");

-- CreateIndex
CREATE UNIQUE INDEX "grades_id_key" ON "grades"("id");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_id_school_fkey" FOREIGN KEY ("id_school") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
