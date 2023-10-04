/*
  Warnings:

  - You are about to drop the column `IdBlocoSala` on the `sala` table. All the data in the column will be lost.
  - You are about to drop the `blocosala` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `IdBlocoDepartamento` to the `sala` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sala` DROP FOREIGN KEY `FKSala39636`;

-- AlterTable
ALTER TABLE `equipamento` ADD COLUMN `IdSala` INTEGER NULL;

-- AlterTable
ALTER TABLE `sala` DROP COLUMN `IdBlocoSala`,
    ADD COLUMN `IdBlocoDepartamento` TINYINT NOT NULL;

-- DropTable
DROP TABLE `blocosala`;

-- CreateIndex
CREATE INDEX `FKSala39636` ON `sala`(`IdBlocoDepartamento`);

-- AddForeignKey
ALTER TABLE `equipamento` ADD CONSTRAINT `equipamento_IdSala_fkey` FOREIGN KEY (`IdSala`) REFERENCES `sala`(`IdSala`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `sala` ADD CONSTRAINT `FKSala39636` FOREIGN KEY (`IdBlocoDepartamento`) REFERENCES `blocodepartamento`(`IdBlocoDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;
