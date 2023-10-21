/*
  Warnings:

  - You are about to drop the `agendatreinamentomultimidia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `agendatreinamentosalasinformatica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comentarioguia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `concluinteguia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `concluintetreinamentomultimidia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `concluintetreinamentosalainformatica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `formacontato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fotoperfil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `guia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `guiaequipamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ocorrencia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `responsavelguia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `setorresponsavel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `situacaoguia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `situacaoincidente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `situacaoincidente_pessoa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `situacaoprofessor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `situacaotreinamentomultimidia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `situacaotreinamentosalainformatica` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `agendatreinamentomultimidia` DROP FOREIGN KEY `FKAgendaTrei341844`;

-- DropForeignKey
ALTER TABLE `agendatreinamentomultimidia` DROP FOREIGN KEY `FKAgendaTrei918453`;

-- DropForeignKey
ALTER TABLE `agendatreinamentosalasinformatica` DROP FOREIGN KEY `FKAgendaTrei647426`;

-- DropForeignKey
ALTER TABLE `agendatreinamentosalasinformatica` DROP FOREIGN KEY `FKAgendaTrei70817`;

-- DropForeignKey
ALTER TABLE `comentarioguia` DROP FOREIGN KEY `FKComentario204632`;

-- DropForeignKey
ALTER TABLE `comentarioguia` DROP FOREIGN KEY `FKComentario227734`;

-- DropForeignKey
ALTER TABLE `concluinteguia` DROP FOREIGN KEY `FKConcluinte14257`;

-- DropForeignKey
ALTER TABLE `concluinteguia` DROP FOREIGN KEY `FKConcluinte418109`;

-- DropForeignKey
ALTER TABLE `concluintetreinamentomultimidia` DROP FOREIGN KEY `FKConcluinte160518`;

-- DropForeignKey
ALTER TABLE `concluintetreinamentomultimidia` DROP FOREIGN KEY `FKConcluinte198192`;

-- DropForeignKey
ALTER TABLE `concluintetreinamentosalainformatica` DROP FOREIGN KEY `FKConcluinte215360`;

-- DropForeignKey
ALTER TABLE `concluintetreinamentosalainformatica` DROP FOREIGN KEY `FKConcluinte791969`;

-- DropForeignKey
ALTER TABLE `fotoperfil` DROP FOREIGN KEY `FKFotoPerfil867658`;

-- DropForeignKey
ALTER TABLE `guia` DROP FOREIGN KEY `FKGuia224984`;

-- DropForeignKey
ALTER TABLE `guia` DROP FOREIGN KEY `FKGuia558379`;

-- DropForeignKey
ALTER TABLE `guia` DROP FOREIGN KEY `FKGuia56053`;

-- DropForeignKey
ALTER TABLE `guia` DROP FOREIGN KEY `FKGuia684766`;

-- DropForeignKey
ALTER TABLE `guia` DROP FOREIGN KEY `FKGuia747950`;

-- DropForeignKey
ALTER TABLE `guia` DROP FOREIGN KEY `FKGuia999817`;

-- DropForeignKey
ALTER TABLE `guiaequipamento` DROP FOREIGN KEY `FKGuiaEquipa951499`;

-- DropForeignKey
ALTER TABLE `ocorrencia` DROP FOREIGN KEY `FKOcorrencia253641`;

-- DropForeignKey
ALTER TABLE `ocorrencia` DROP FOREIGN KEY `FKOcorrencia268737`;

-- DropForeignKey
ALTER TABLE `ocorrencia` DROP FOREIGN KEY `FKOcorrencia602115`;

-- DropForeignKey
ALTER TABLE `professor` DROP FOREIGN KEY `FKProfessor133994`;

-- DropForeignKey
ALTER TABLE `professor` DROP FOREIGN KEY `FKProfessor49846`;

-- DropForeignKey
ALTER TABLE `professor` DROP FOREIGN KEY `FKProfessor59`;

-- DropForeignKey
ALTER TABLE `responsavelguia` DROP FOREIGN KEY `FKResponsave21417`;

-- DropForeignKey
ALTER TABLE `responsavelguia` DROP FOREIGN KEY `FKResponsave517807`;

-- DropForeignKey
ALTER TABLE `situacaoincidente_pessoa` DROP FOREIGN KEY `FKSituacaoIn797509`;

-- DropForeignKey
ALTER TABLE `situacaoincidente_pessoa` DROP FOREIGN KEY `FKSituacaoIn939305`;

-- DropTable
DROP TABLE `agendatreinamentomultimidia`;

-- DropTable
DROP TABLE `agendatreinamentosalasinformatica`;

-- DropTable
DROP TABLE `comentarioguia`;

-- DropTable
DROP TABLE `concluinteguia`;

-- DropTable
DROP TABLE `concluintetreinamentomultimidia`;

-- DropTable
DROP TABLE `concluintetreinamentosalainformatica`;

-- DropTable
DROP TABLE `formacontato`;

-- DropTable
DROP TABLE `fotoperfil`;

-- DropTable
DROP TABLE `guia`;

-- DropTable
DROP TABLE `guiaequipamento`;

-- DropTable
DROP TABLE `ocorrencia`;

-- DropTable
DROP TABLE `professor`;

-- DropTable
DROP TABLE `responsavelguia`;

-- DropTable
DROP TABLE `setorresponsavel`;

-- DropTable
DROP TABLE `situacaoguia`;

-- DropTable
DROP TABLE `situacaoincidente`;

-- DropTable
DROP TABLE `situacaoincidente_pessoa`;

-- DropTable
DROP TABLE `situacaoprofessor`;

-- DropTable
DROP TABLE `situacaotreinamentomultimidia`;

-- DropTable
DROP TABLE `situacaotreinamentosalainformatica`;
