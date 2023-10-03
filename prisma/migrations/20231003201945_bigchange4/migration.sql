/*
  Warnings:

  - A unique constraint covering the columns `[DescricaoSituacaoSala]` on the table `situacaosala` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[DescricaoTipoSala]` on the table `tiposala` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `situacaosala_DescricaoSituacaoSala_key` ON `situacaosala`(`DescricaoSituacaoSala`);

-- CreateIndex
CREATE UNIQUE INDEX `tiposala_DescricaoTipoSala_key` ON `tiposala`(`DescricaoTipoSala`);
