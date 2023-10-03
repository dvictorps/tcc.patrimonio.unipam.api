/*
  Warnings:

  - A unique constraint covering the columns `[DescricaoSala]` on the table `sala` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `sala_DescricaoSala_key` ON `sala`(`DescricaoSala`);
