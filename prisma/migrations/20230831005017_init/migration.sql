/*
  Warnings:

  - A unique constraint covering the columns `[DescricaoCategoriaEquipamento]` on the table `categoriaequipamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NomeCidade]` on the table `cidade` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `categoriaequipamento_DescricaoCategoriaEquipamento_key` ON `categoriaequipamento`(`DescricaoCategoriaEquipamento`);

-- CreateIndex
CREATE UNIQUE INDEX `cidade_NomeCidade_key` ON `cidade`(`NomeCidade`);
