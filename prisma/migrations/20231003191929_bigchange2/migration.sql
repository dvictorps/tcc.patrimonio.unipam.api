-- DropForeignKey
ALTER TABLE `sala` DROP FOREIGN KEY `FKSala39636`;

-- AddForeignKey
ALTER TABLE `sala` ADD CONSTRAINT `sala_IdBlocoDepartamento_fkey` FOREIGN KEY (`IdBlocoDepartamento`) REFERENCES `blocodepartamento`(`IdBlocoDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;
