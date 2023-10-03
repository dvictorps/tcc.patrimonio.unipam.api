/*
  Warnings:

  - A unique constraint covering the columns `[DescricaoBlocoDepartamento]` on the table `blocodepartamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NomeDepartamento]` on the table `departamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NomeEmpresa]` on the table `empresa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NomeFabricante]` on the table `fabricante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[DescricaoSituacaoEquipamento]` on the table `situacaoequipamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[TipoDepartamento]` on the table `tipodepartamento` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `blocodepartamento_DescricaoBlocoDepartamento_key` ON `blocodepartamento`(`DescricaoBlocoDepartamento`);

-- CreateIndex
CREATE UNIQUE INDEX `departamento_NomeDepartamento_key` ON `departamento`(`NomeDepartamento`);

-- CreateIndex
CREATE UNIQUE INDEX `empresa_NomeEmpresa_key` ON `empresa`(`NomeEmpresa`);

-- CreateIndex
CREATE UNIQUE INDEX `fabricante_NomeFabricante_key` ON `fabricante`(`NomeFabricante`);

-- CreateIndex
CREATE UNIQUE INDEX `situacaoequipamento_DescricaoSituacaoEquipamento_key` ON `situacaoequipamento`(`DescricaoSituacaoEquipamento`);

-- CreateIndex
CREATE UNIQUE INDEX `tipodepartamento_TipoDepartamento_key` ON `tipodepartamento`(`TipoDepartamento`);
